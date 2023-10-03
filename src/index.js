import dotenv from "dotenv"
import express from 'express'
import configViewEngine from './configs/viewEngine';
import initWebRoute from "./routes/webRoute";
import path, { dirname } from "path"
import bodyParser from "body-parser";
import apiroute from "./routes/apiRoutes";
import session from 'express-session';

//  Điều này giả định rằng 'configs' là một thư mục trong thư mục gốc của dự án.

const app = express()
dotenv.config()
const port = process.env.PORT
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
configViewEngine(app)
initWebRoute(app)
apiroute(app)
app.use(express.static(path.join(__dirname, "public")))

app.use(session({
    secret: 'your_secret_key', // Khóa bí mật để ký session ID
    resave: false, // Không lưu lại session nếu không có sự thay đổi
    saveUninitialized: false, // Không lưu session cho các yêu cầu chưa được khởi tạo
    cookie: { secure: false }, // Có thể thiết lập secure:true cho HTTPS
  }));
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