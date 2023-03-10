const Comment = require('../../models/comment')

const dataController = {
  async verifyAgainstDB (req, res, next) {
    const dbItem = await Comment.findById(req.params.id).populate('commentOwner')
    if (req.user.username === dbItem.commentOwner.username) {
      next()
    } else {
      res.status(401)
    }
  },
  async index (req, res, next) {
    try {
      const comments = await Comment.find({}).populate('commentOwner replies').exec()
      if (!comments) throw new Error()
      res.json(comments)
    } catch (e) {
      res.status(400).json({ msg: e.message })
    }
  },
  async delete (req, res, next) {
    try {
      const comment = await Comment.findByIdAndDelete(req.params.id)
      if (!comment) throw new Error()
      res.json(comment)
    } catch (e) {
      res.status(400).json({ msg: e.message })
    }
  },
  async update (req, res, next) {
    try {
      const comment = await Comment.findByIdAndUpdate(req.body._id, req.body, { new: true })
      if (!comment) throw new Error()
      res.json(comment)
    } catch (e) {
      res.status(400).json({ msg: e.message })
    }
  },
  async create (req, res, next) {
    try {
      req.body.commentOwner = req.user._id
      const comment = await Comment.create(req.body)
      if (!comment) throw new Error()
      res.json(comment)
    } catch (e) {
      res.status(400).json({ msg: e.message })
    }
  },
  async show (req, res, next) {
    try {
      const comment = await Comment.findById(req.params.id).populate('commentOwner replies').exec()
      if (!comment) throw new Error()
      res.json(comment)
    } catch (e) {
      res.status(400).json({ msg: e.message })
    }
  }
}

module.exports = dataController
