const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
    commentBody: {type: String, required: true},
    commentOwner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    votes: {Type: Number},
    replies: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    isReply: {Type: Boolean}
    },
    {timestamps: true}
)

module.exports = model('Comment', commentSchema)
