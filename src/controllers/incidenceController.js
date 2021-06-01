//@ts-ignore
const {sequelize, Incidence} = require('../models')

const incidenceController = {
    async create(req, res){
        try {
            let {userId, riskId, controlId, description, price} = req.body

            if(!userId || !riskId || !controlId || !description){
                return res.status(404)
                .send('variables userId, riskId, controlId and description must be provided')
            } 

            const incidenceResult = await Incidence.create({
                userId,
                riskId,
                controlId,
                description
            })

            return res.status(200).json({incidenceResult})
        } catch (error) {
            console.error(error)
            res.status(404).json({
                message: 'there was an error in incidenceler'
            })
        }
    },
    async getAll(req, res){
        try {
            const incidences = await Incidence.findAndCountAll()

            return res.status(200).json({incidences})
        } catch (error) {
            console.error(error)
            res.status(404).json({
                message: 'there was an error in incidenceler'
            })
        }
    },
    async givePrice(req, res){
        try {
            const {price, incidenceId} = req.body

            if( !price || !incidenceId){
                return res.status(404).send("price and incidenceId must be provided")
            }
            const newIncidence = await Incidence.update({price}, {
                where: {id: incidenceId}
            })

            return res.status(200).json({newIncidence})
        } catch (error) {
            console.error(error)
            res.send(404).json({
                "message": "there was an error in controller"
            })
        }
    }
}

module.exports = incidenceController