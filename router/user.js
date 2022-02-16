const express = require('express')
const router = express.Router()

const {
    getAllUsers, createUser, getUsers, updateUser
} = require('../controller/user')

router.route('/').get(getAllUsers).post(createUser)
router.route('/:id').get(getUsers).patch(updateUser)

module.exports = router
