import dotenv from "dotenv"
import express from 'express'
import configViewEngine from './configs/viewEngine'; 
import initWebRoute from "./routes/webRoute";
//  Điều này giả định rằng 'configs' là một thư mục trong thư mục gốc của dự án.

const app = express()
dotenv.config()
const port = process.env.PORT
configViewEngine(app)
initWebRoute(app)
// const port = 3000
// app.get('/', (req, res) => { 
//     res.send('Hello World!')
// })
// app.get('/about', (req, res) => { 
//     res.send('About Me')
// })
app.listen(port, () => { 
    console.log(`http://localhost:${port}`)
})