const axios = require("axios");
const express = require('express')
const router = express.Router()
const {getByBodyPartList,getBodyPart,getTargetList, getTarget,getEquipmentList,getEquipment} =require ('../controllers/excerciseControllers')

//Gets all the excercises
router.get('/bodypart',  getByBodyPartList)

// individual excercise
router.get('/bodypart/:bodyPart', getBodyPart)

// get target List
router.get('/targetlist', getTargetList)

// get target
router.get('/targetlist/:target', getTarget)

// get Equipment list

router.get('/equipment', getEquipmentList)
// get equipment
router.get('/equipment/:equipment', getEquipment)




module.exports = router



