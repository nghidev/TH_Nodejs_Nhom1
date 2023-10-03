import express from 'express'
// import homeController from '../controllers/HomeController'
import AboutController from '../controllers/AboutController';
import HomeController from '../controllers/HomeController';
import UserController from '../controllers/UserController';
// const AboutController = require('../controllers/AboutController');
// const HomeController = require('../controllers/HomeController');
// const UserController = require('../controllers/UserController');
const router = express.Router()
const apiroute = (app) => {

    router.get("/webapi", UserController.getapi)
    

    router.get("/:slug", (req, res) => {
        res.send("không tim thấy")
    })


    return app.use('/api/', router)
}
export default apiroute