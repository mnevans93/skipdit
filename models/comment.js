const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
    commentBody: {type: String, required: true},
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
    },
    {timestamps: true}
)

module.exports = model('Comment', commentSchema)
