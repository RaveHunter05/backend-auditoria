//@ts-ignore
const {sequelize, User} = require('../models')

const userController = {
    async create(req, res){
        try {
            let {names, role, email} = req.body

            if(!names) return res.status(404).send('variable names should not be empty')
            if(!email) return res.status(404).send('variable email should be provided')

            if(!role) role = 'user'

            const userResult = await User.create({
                names,
                role,
                email
            })

            return res.status(200).json({userResult})
        } catch (error) {
            console.error(error)
            res.status(404).json({
                message: 'there was an error in controller'
            })
        }
    },
    async getAll(req, res){
        try {
            const users = await User.findAndCountAll()

            return res.status(200).json({users})
        } catch (error) {
            console.error(error)
            res.status(404).json({
                message: 'there was an error in controller'
            })
        }
    }
}

module.exports = userController