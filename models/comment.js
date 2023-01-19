const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
    commentBody: {Type: String, required: true},
    commentOwner: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    votes: {Type: Number},
    replies: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }],
    isReply: {Type: Boolean}
})

module.exports = model('Comment', commentSchema)
