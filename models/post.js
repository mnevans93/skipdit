const { Schema, model } = require('mongoose')

const postSchema = new Schema({
    postTitle: {type: String, required: true},
    postBody: {type: String, required: true},
    postComments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    postOwner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    votes: {type: Number}
    },
    {timestamps: true}
)

module.exports = model('Post', postSchema)
