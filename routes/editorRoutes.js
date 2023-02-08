const express = require('express')
const router = express.Router()
const{
    getEditor,
    setEditor,
    updateEditor,
} = require('../controllers/editorController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getEditor).post(protect, setEditor)
router.route('/').put(protect, updateEditor)