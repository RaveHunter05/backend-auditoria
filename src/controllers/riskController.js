//@ts-ignore
const {sequelize, Risk} = require('../models')

const riskController = {
    async create(req, res){
        try {
            const {riskName} = req.body

            if(!riskName) return res.status(404).send('riskName should not be empty')

            const riskResult = await Risk.create({name: riskName})

            return res.status(200).json({riskResult})
        } catch (error) {
            console.error(error)
            res.status(404).json({
                message: 'there was an error in controller'
            })
        }
    },
    async getAll(req, res){
        try {
            const risks = await Risk.findAndCountAll()

            return res.status(200).json({risks})
        } catch (error) {
            console.error(error)
            res.status(404).json({
                message: 'there was an error in controller'
            })
        }
    }
}

module.exports = riskController