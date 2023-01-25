const post = require('../../models/post')

const dataController = {
    async index (req, res, next) {
        try {
            const posts = await post.find({})
            if (!posts) throw new Error()
            res.locals.data.posts = posts
            next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    },
    async delete (req, res, next) {
        try {
            await post.findByIdAndDelete(req.body._id)
            next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    },
    async update (req, res, next) {
        try {
            const post = await post.findByIdAndUpdate(req.body._id, req.body, { new: true })
            if (!post) throw new Error()
            res.locals.data.post = post
            next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    },
    async create (req, res, next) {
        try {
            const post = await post.create(req.body)
            if (!post) throw new Error()
            res.locals.data.post = post
            next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    },
    async show (req, res, next) {
        try {
            const post = await post.findById(req.body._id)
            if (!post) throw new Error()
            res.locals.data.post = post
            next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    }
}

module.exports = dataController