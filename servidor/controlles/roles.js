const { where } = require('sequelize')
const Roles = require('../models/roles.js')
const axios = require('axios')


const getRoles = async(res,req) => {
    
    const roles = await Roles.findall({
        where: 
    })
}