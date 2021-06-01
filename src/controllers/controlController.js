//@ts-ignore
const {sequelize, Control} = require('../models')

const controlController = {
    async create(req, res){
        try {
            let {userId, causeId, description} = req.body

            if(!userId || !causeId || !description){
                return res.status(404)
                .send('variables name and riskId must be provided')
            } 

            const controlResult = await Control.create({
                userId,
                causeId,
                description
            })

            return res.status(200).json({controlResult})
        } catch (error) {
            console.error(error)
            res.status(404).json({
                message: 'there was an error in controller'
            })
        }
    },
    async getAll(req, res){
        try {
            const controls = await Control.findAndCountAll()

            return res.status(200).json({controls})
        } catch (error) {
            console.error(error)
            res.status(404).json({
                message: 'there was an error in controller'
            })
        }
    }
}

module.exports = controlController