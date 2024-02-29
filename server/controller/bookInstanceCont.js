const asyncHandler = require('express-async-handler')

const bookInstanceModel = require('../models/bookInstanceModel')


//bookInstance requests

exports.createbookInstanceGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented bookInstanceCreate')
    }
)

exports.bookInstanceGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented find one bookInstance')
    }
)

exports.bookInstancesGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented find all bookInstances')
    }
)

exports.createbookInstanceGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented bookInstanceCreate')
    }
)

exports.deletebookInstanceGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented delete a gemre get')
    }
)

exports.updatebookInstanceGet = asyncHandler(
    (req,res,next) =>{
        res.send('not yet implemented update a bookInstance get')
    }
)

//post bookInstance
exports.createbookInstancePost = asyncHandler(
    (req,res,next) =>{
        res.send(`not get implemented create a bookInstance ${req.params.id}`)
    }
)

exports.bookInstancePost = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented find one bookInstance post')
    }
)

exports.bookInstancesPost = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented find all bookInstances post')
    }
)

exports.deletebookInstancePost = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented delete a gemre post')
    }
)

exports.updatebookInstancePost = asyncHandler(
    (req,res,next) =>{
        res.send('not yet implemented update a bookInstance post')
    }
)