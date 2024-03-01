const mongoose =require("mongoose")
const excerciseSchema = require("../models/excerciseModel")
const axios = require('axios')


// get getByBodyPart
const getByBodyPartList = async(req,res)=>{
  const bodypart = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'dc49254d44mshcf389bc3719459dp1ea520jsndc199e861039',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(bodypart);
    res.status(200).json(response.data)
  } catch (error) {
    console.error(error);
  }
}



// get specific body part
const getBodyPart = async (req, res) => {
 
 
  const bodyPart = req.params.bodyPart;
  const specificExcercise = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': 'dc49254d44mshcf389bc3719459dp1ea520jsndc199e861039',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(specificExcercise);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// get target 

const getTargetList = async(req,res)=>{
  const targetList = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/targetList',
    headers: {
      'X-RapidAPI-Key': 'dc49254d44mshcf389bc3719459dp1ea520jsndc199e861039',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(targetList);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// get target 

const getTarget = async(req,res)=>{

  const wanted = req.params.target
  
  const target = {
    method: 'GET',
  url: `https://exercisedb.p.rapidapi.com/exercises/target/${wanted}`,
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': 'dc49254d44mshcf389bc3719459dp1ea520jsndc199e861039',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  };
  
  try {
    const response = await axios.request(target);
    res.status(200).json(response.data);
  } catch (error) {
   res.status(400).json(error);
  }
};

const getEquipmentList = async(req,res)=>{
  const equipmentList = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/equipmentList',
    headers: {
      'X-RapidAPI-Key': 'dc49254d44mshcf389bc3719459dp1ea520jsndc199e861039',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(equipmentList);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
const getEquipment = async(req,res)=>{
  const equipment = req.body.equipment
  const equipmentList = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/equipmentList/${equipment}`,
    headers: {
      'X-RapidAPI-Key': 'dc49254d44mshcf389bc3719459dp1ea520jsndc199e861039',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(equipmentList);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
}






module.exports = {getByBodyPartList,getBodyPart,getTargetList,getTarget,getEquipmentList , getEquipment}