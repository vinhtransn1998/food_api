const express = require("express");
var multer  = require('multer')
// var storage = multer.diskStorage({ 
//     destination: function(req, file, cb){
//         cb(null, "/api/uploads")
//     }
// });

var storage = multer.memoryStorage()
var upload = multer({ storage: storage })
const foodController = require("../controller/food.controller");
router = express.Router();
module.exports = app => {
    // Create a new Tutorial
    router.post("/", upload.single('avatar'), foodController.create);

    // Retrieve all Tutorials
    router.get("/", foodController.findAll);

    // Retrieve all published Tutorials
    router.get("/published", foodController.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", foodController.findOne);

    // Update a Tutorial with id
    router.put("/:id", foodController.update);

    // Delete a Tutorial with id
    router.delete("/:id", foodController.delete);

    // Create a new Tutorial
    router.delete("/", foodController.deleteAll);

    app.use('/api/food', router);

}