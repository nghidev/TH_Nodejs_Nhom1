// import pool from "../configs/connectDB";
// class userModel{
//     async getAllUser() {
//         const [rows, fields] = await pool.execute('SELECT * FROM `taikhoan` ')
//         return rows
//     }
// }
// export default new userModel

import pool from './../configs/connectDB'
import connection from './../configs/connectDB'
const getAllUser = async () => {
const [rows,fields]= await pool.execute('SELECT * FROM `taikhoan`')
return rows
}
export default {getAllUser}