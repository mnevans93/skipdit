const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 6

const userSchema = new Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true
  },
  subSkipdits: [{
    type: Schema.Types.ObjectId,
    ref: 'SubSkipdits'
  }],
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Posts'
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comments'
  }]
}, {
  toJSON: {
    transform (doc, ret) {
      delete ret.password
      return ret
    }
  }
})

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
  return next()
})

module.exports = model('User', userSchema)
