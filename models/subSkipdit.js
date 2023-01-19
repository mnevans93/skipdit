const { Schema, model } = require('mongoose')

const subSkipditSchema = new Schema({
    subName: {Type: String, required: true},
    subPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'Posts'
    }],
    subOwner: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    subModerators: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }],
    subMembers: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }]
})

module.exports = model('SubSkipdit', subSkipditSchema)
