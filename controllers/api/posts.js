const Post = require('../../models/post')

const dataController = {
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
            // next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    },
    async delete (req, res, next) {
        try {
            await Post.findByIdAndDelete(req.body._id)
            // next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    },
    async update (req, res, next) {
        try {
            const post = await Post.findByIdAndUpdate(req.body._id, req.body, { new: true })
            if (!post) throw new Error()
            res.json(post)
            // next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    },
    async create (req, res, next) {
        try {
            const post = await Post.create(req.body)
            if (!post) throw new Error()
            res.json(post)
            // next()
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
            // next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    }
}

module.exports = dataController
