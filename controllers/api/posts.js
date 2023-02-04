const Post = require('../../models/post')

const dataController = {
  async verifyAgainstDB (req, res, next) {
    const dbItem = await Post.findById(req.params.id).populate('postOwner')
    if (req.user.username === dbItem.postOwner.username) {
      next()
    } else {
      res.status(401)
    }
  },
  async index (req, res, next) {
    try {
      const posts = await Post.find({}).populate('postComments postOwner')
        .populate({
          path: 'postComments',
          populate: {
            path: 'commentOwner',
            model: 'User'
          }
        })
        .exec()
      if (!posts) throw new Error()
      res.json(posts)
    } catch (e) {
      res.status(400).json({ msg: e.message })
    }
  },
  async delete (req, res, next) {
    try {
      const post = await Post.findByIdAndDelete(req.params.id)
      if (!post) throw new Error()
      res.json(post)
    } catch (e) {
      res.status(400).json({ msg: e.message })
    }
  },
  async update (req, res, next) {
    try {
      const post = await Post.findByIdAndUpdate(req.body._id, req.body, { new: true })
      if (!post) throw new Error()
      res.json(post)
    } catch (e) {
      res.status(400).json({ msg: e.message })
    }
  },
  async create (req, res, next) {
    try {
      req.body.postOwner = req.user._id
      const post = await Post.create(req.body)
      if (!post) throw new Error()
      res.json(post)
    } catch (e) {
      res.status(400).json({ msg: e.message })
    }
  },
  async show (req, res, next) {
    try {
      const post = await Post.findById(req.params.id).populate('postComments postOwner')
        .populate({
          path: 'postComments',
          populate: {
            path: 'commentOwner',
            model: 'User'
          }
        })
        .exec()
      if (!post) throw new Error()
      res.json(post)
    } catch (e) {
      res.status(400).json({ msg: e.message })
    }
  }
}

module.exports = dataController
