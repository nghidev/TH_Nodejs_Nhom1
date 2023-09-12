import express from 'express'
import homeController from '../controllers/HomeController'
const router = express.Router()
const initWebRoute = (app) => {
    // define the home page route
    router.get('/', (req, res) => {
        res.send('Birds home page')
    })
    router.get("/home", homeController)
    // define the about route 
    router.get('/about', (req, res) => {
        res.send('About birds')
    })
    return app.use('/', router)
}
export default initWebRoute