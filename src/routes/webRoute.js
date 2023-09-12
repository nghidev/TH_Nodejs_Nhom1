import express from 'express'
const router = express.Router()
const initWebRoute = (app) => {
    // define the home page route
    router.get('/', (req, res) => {
        res.send('Birds home page')
    })
    // define the about route 
    router.get('/about', (req, res) => {
        res.send('About birds')
    })
    return app.use('/', router)
}
export default initWebRoute