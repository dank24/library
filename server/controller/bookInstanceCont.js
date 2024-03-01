const asyncHandler = require('express-async-handler')

const bookInstanceModel = require('../models/bookInstanceModel')


//bookInstance requests

exports.createBookInstanceGet = asyncHandler(
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

exports.deletebookInstanceGet = asyncHandler(
    (req,res,next) =>{
        res.send('not get implemented delete a gemre get')
    }
)

exports.updateBookInstanceGet = asyncHandler(
    (req,res,next) =>{
        res.send('not yet implemented update a bookInstance get')
    }
)



//post bookInstance
exports.createBookInstancePost = asyncHandler(
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

exports.updateBookInstancePost = asyncHandler(
    (req,res,next) =>{
        res.send('not yet implemented update a bookInstance post')
    }
)