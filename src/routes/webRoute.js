import express from 'express'
// import homeController from '../controllers/HomeController'
import AboutController from '../controllers/AboutController';
import HomeController from '../controllers/HomeController';
import UserController from '../controllers/UserController';
// const AboutController = require('../controllers/AboutController');
// const HomeController = require('../controllers/HomeController');
// const UserController = require('../controllers/UserController');
const router = express.Router()
const initWebRoute = (app) => {


    router.get("/", HomeController.index)


    // HomeController
    router.get("/home", HomeController.index)
    router.get("/page", HomeController.page)

    // AboutController
    router.get("/about", AboutController.index)

    // AboutController
    router.get("/create-new-user", UserController.create)
    router.get("/list-user", UserController.list_user)
    router.get("/login", UserController.login)
    router.get("/getusser", UserController.getAllUsers)

    router.get("/:slug", (req, res) => {
        res.send("không tim thấy")
    })

    return app.use('/', router)
}
export default initWebRoute