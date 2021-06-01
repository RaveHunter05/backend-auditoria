//@ts-ignore
const {sequelize, Cause} = require('../models')

const causeController = {
    async create(req, res){
        try {
            let {name, riskId} = req.body

            if(!name || !riskId) return res.status(404).send('variables name and riskId must be provided')

            const causeResult = await Cause.create({
                name,
                riskId
            })

            return res.status(200).json({causeResult})
        } catch (error) {
            console.error(error)
            res.status(404).json({
                message: 'there was an error in controller'
            })
        }
    },
    async getAll(req, res){
        try {
            const causes = await Cause.findAndCountAll()

            return res.status(200).json({causes})
        } catch (error) {
            console.error(error)
            res.status(404).json({
                message: 'there was an error in controller'
            })
        }
    }
}

module.exports = causeController