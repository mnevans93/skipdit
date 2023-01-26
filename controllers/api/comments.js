const Comment = require('../../models/comment')

const dataController = {
    async index (req, res, next) {
        try {
            const comments = await Comment.find({})
            if(!comments) throw new Error()
            next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    },
    async delete (req, res, next) {
        try {
            await Comment.findByIdAndDelete(req.body._id)
            next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    },
    async update (req, res, next) {
        try {
            const comment = await Comment.findByIdAndUpdate(req.body._id, req.body, { new: true })
            if (!comment) throw new Error()
            res.locals.data.comment = comment
            next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    },
    async create (req, res, next) {
        try {
            const comment = await Comment.create(req.body)
            if (!comment) throw new Error()
            res.locals.data.comment = comment
            next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    },
    async show (req, res, next) {
        try {
            const comment = await Comment.findById(req.body._id)
            if (!comment) throw new Error()
            res.locals.data.comment = comment
            next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    }
}

module.exports = dataController