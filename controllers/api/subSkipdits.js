const SubSkipdit = require('../../models/subSkipdit')

const dataController = {
    async index (req, res, next) {
        try {
            const subSkipdits = await SubSkipdit.find({}).populate('subPosts subOwner subModerators subMembers')
            .populate({
                path: 'subPosts',
                populate: {
                    path: 'postOwner',
                    model: 'User'
                }
            })
            .exec()
            if (!subSkipdits) throw new Error()
            res.json(subSkipdits)
            // next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    },
    async delete (req, res, next) {
        try {
            const subSkipdit = await SubSkipdit.findByIdAndDelete(req.params.id)
            if (!subSkipdit) throw new Error()
            res.json(subSkipdit)
            // next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    },
    async update (req, res, next) {
        try {
            const subSkipdit = await SubSkipdit.findByIdAndUpdate(req.body._id, req.body, { new: true })
            if (!subSkipdit) throw new Error()
            res.json(subSkipdit)
            // next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    },
    async create (req, res, next) {
        try {
            const subSkipdit = await SubSkipdit.create(req.body)
            if (!subSkipdit) throw new Error()
            res.json(subSkipdit)
            // next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    },
    async show (req, res, next) {
        try {
            const subSkipdit = await SubSkipdit.findById(req.params.id).populate('subPosts subOwner subModerators subMembers')
            .populate({
                path: 'subPosts',
                populate: {
                    path: 'postOwner',
                    model: 'User'
                }
            })
            .exec()
            if (!subSkipdit) throw new Error()
            res.json(subSkipdit)
            // next()
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    }
}

module.exports = dataController
