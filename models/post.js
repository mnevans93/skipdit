const { Schema, model } = require('mongoose')

const postSchema = new Schema({
    postTitle: {Type: String, required: true},
    postBody: {Type: String, required: true},
    postComments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }],
    postOwner: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    votes: {Type: Number}
    },
    {timestamps: true}
)

module.exports = model('Post', postSchema)
