const express = require('express')
const bookModel = require('../models/bookModel')
const authorModel = require('../models/authorModel')
const genreModel = require('../models/genreModel')
const bookInstanceModel = require('../models/bookInstanceModel')

const asyncHandler = require('express-async-handler')

exports.homeGet = asyncHandler(
    async (req,res,next) =>{
        res.render('layout')
    }
)

exports.index = asyncHandler(
    async (req,res,next) =>{
       let [
         bookNum,
         bookInstanceNum,
         numAvailableInstances,
         authorNums,
         genreNums,
         way
       ] = await Promise.all([
         bookModel.countDocuments({}).exec(),
         bookInstanceModel.countDocuments({}).exec(),
         bookInstanceModel.countDocuments({bookStatus: 'Available'}).exec(),
         authorModel.countDocuments({}).exec(),
         genreModel.countDocuments({}).exec(),
         bookModel.findOne({bookName: 'The Way Of Kings'})
       ])
       res.render('index', {
         title: 'Local Library',
         bookCount: bookNum,
         bookInstanceCount: bookInstanceNum,
         availableBookInstance: numAvailableInstances,
         authorCount: authorNums,
         genreCount: genreNums,
         way: way
       })
 
     }
 )

