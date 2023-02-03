const { Schema, model } = require('mongoose')

const subSkipditSchema = new Schema({
    subName: {type: String, required: true, unique: true},
    subAbout: {type: String, required: true},
    subImg: {type: String},
    subPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    subOwner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    subModerators: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    subMembers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

module.exports = model('SubSkipdit', subSkipditSchema)
