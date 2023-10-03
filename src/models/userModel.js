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
    const [rows, fields] = await pool.execute('SELECT * FROM `username`')
    return rows
}

const detailUser = async (id) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `username` WHERE id =? ', [id])
    return rows
}


const insertUser = async (email, username, fullname, password, address, gioitinh, role) => {
    try {
        const query = 'INSERT INTO username (email, user, fullname, password, address, sex, groupid) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const [rows, fields] = await pool.execute(query, [email, username, fullname, password, address, gioitinh, role]);
        return rows;
    } catch (error) {
        console.error('Error inserting user:', error);
        throw error;
    }
};

const isUserExist = async (user) => {
    try {
        const [rows, fields] = await pool.execute('SELECT * FROM username WHERE user = ?', [user]);

        // Kiểm tra nếu có bất kỳ dòng dữ liệu nào trả về từ truy vấn
        if (rows.length > 0) {
            // Người dùng tồn tại
            return true;
        } else {
            // Người dùng không tồn tại
            return false;
        }
    } catch (error) {
        console.error('Error checking user existence:', error);
        throw error;
    }
};

const editUser = async (id) => {
    try {
        const [rows, fields] = await pool.execute('SELECT * FROM `username` WHERE id =? ', [id])
        return rows
    } catch (error) {
        console.error('Error inserting user:', error);
        throw error;
    }
}

const checklogin = async(email)=>{
    try {
        const [rows, fields] = await pool.execute('SELECT * FROM `username` WHERE email = ?', [email])
        return rows
    } catch (error) {
        console.error('Error inserting user:', error);
        throw error;
    }
}

export default { getAllUser, detailUser, insertUser, isUserExist, editUser, checklogin }