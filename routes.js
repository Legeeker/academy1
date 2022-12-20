let express = require('express');

let router = express.Router();
let userController = require('./controllers/userController');

router.get('/formation', userController.formation);




module.exports = router;
