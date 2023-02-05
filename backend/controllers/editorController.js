const asyncHandler = require('express-async-handler')

const Editor = require('../models/editorModel')
const User = require('../models/userModel')

// @desc    Get Editor
// @route   GET /api/editor
// @access  Private
const getEditor = asyncHandler(async (req, res) => {
    const goals = await Editor.find({ user: req.user.id })
  
    res.status(200).json(goals)
})

// @desc    Set Editor
// @route   POST /api/editor
// @access  Private
const setEditor = asyncHandler(async (req, res) => {
  
    const editor = await Editor.create({
      text: req.body.text,
      user: req.user.id,
    })
  
    res.status(200).json(editor)
})

// @desc    Update Editor
// @route   PUT /api/editor
// @access  Private
const updateEditor = asyncHandler(async (req, res) => {
    const editor = await Editor.findById(req.params.id)
  
    if (!editor) {
      res.status(400)
      throw new Error('Notes Non trouvées')
    }
  
    // Check for user
    if (!req.user) {
      res.status(401)
      throw new Error('Utilisateur Non trouvé ')
    }
  
    // Make sure the logged in user matches the goal user
    if (editor.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('Utilisateur non autorisé')
    }
  
    const updatedEditor = await Editor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedEditor)
  })
  
  module.exports = {
    getEditor,
    setEditor,
    updateEditor,
  }