const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Veuillez entrer un nom'],
    },
    email: {
      type: String,
      required: [true, 'Veuillez entrer un email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Veuillez entrer un mot de passe'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
