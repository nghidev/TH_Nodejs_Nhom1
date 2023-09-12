import express from 'express'
// import homeController from '../controllers/HomeController'

const AboutController = require('../controllers/AboutController');
const HomeController = require('../controllers/HomeController');
const router = express.Router()
const initWebRoute = (app) => {
    // // define the home page route
    // router.get('/', (req, res) => {
    //     res.send('Birds home page')
    // })
  
    // // define the about route 
    // router.get('/about', (req, res) => {
    //     res.send('About birds')
    // })

   
    router.get("/home", HomeController.index)
    router.get("/about", AboutController.index)
    router.get("/page", HomeController.page)


    return app.use('/', router)
}
export default initWebRoute