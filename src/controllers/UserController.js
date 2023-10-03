import express from "express"
import userModel from "../models/userModel"
import bcrypt, { compareSync } from "bcryptjs"
const create = (req, res) => {
  return res.render("layouts/main",
    {
      data: {
        title: 'Tạo tài khoản',
        content: "admin@abc.com.vn",
        page: "newUser"
      }
    })
}
const list_user = async (req, res) => {
  try {
    let userList = await userModel.getAllUser();
    res.render('layouts/main', {
      data: {
        page: 'listUser', // Đặt giá trị cho biến 'page' trong 'data'
        users: userList // Đặt giá trị cho biến 'users' trong 'data'
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
}
const formLogin = (req, res) => {
  return res.render("layouts/main",
    {
      data: {
        title: 'Đăng nhập',
        content: "admin@abc.com.vn",
        page: "formLogin"
      }
    })
}

const getAllUsers = async (req, res) => {
  try {
    let userList = await userModel.getAllUser();
    res.render('layouts/main', {
      data: {
        page: 'test', // Đặt giá trị cho biến 'page' trong 'data'
        users: userList // Đặt giá trị cho biến 'users' trong 'data'
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
}

const detailUser = async (req, res) => {
  try {
    let detailUser = await userModel.detailUser(req.params.id);
    res.render('layouts/main', {
      data: {
        page: 'detailUser', // Đặt giá trị cho biến 'page' trong 'data'
        users: detailUser, // Đặt giá trị cho biến 'users' trong 'data'
        id: req.params.id
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
}


const insertUser = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.body.username);
    let role = 2;
    const { email, username, fullname, password, address, gioitinh } = req.body;

    // tiến hành băm mật khẩu
    const saltRounds = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    // console.log(bcrypt.compareSync(password, hashedPassword));
    // console.log(bcrypt.compareSync(password, "$2a$10$W/F0vErc5b.bEH96HNgr6ehlHijP94XGbGrPpY8gMNXLrWOyYFT9K")); // true
    // console.log(bcrypt.compareSync("not_bacon", hashedPassword)); // false

    console.log(hashedPassword);

    if ("role" in req.body) {
      role = 1;
    }
    console.log(role);

    // Kiểm tra xem tên người dùng đã tồn tại trong cơ sở dữ liệu hay chưa
    const isUserExist = await userModel.isUserExist(username);

    if (isUserExist) {
      // Tên người dùng đã tồn tại, trả về thông báo và không thêm vào cơ sở dữ liệu
      // console.log("Tên người dùng đã tồn tại!!!");
      res.render('layouts/main', {
        data: {
          page: 'newUser',
          message: 'Tên người dùng đã tồn tại!'
        }
      });
    } else {
      // Tên người dùng chưa tồn tại, thêm vào cơ sở dữ liệu
      await userModel.insertUser(email, username, fullname, hashedPassword, address, gioitinh, role);
      console.log(hashedPassword);

      let userList = await userModel.getAllUser();
      res.render('layouts/main', {
        data: {
          page: 'listUser',
          users: userList,
          message: 'Tạo tài khoản thành công!'
        }
      });

    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

const editUser = async (req, res) => {
  try {
    // let temp = 
    let editUser = await userModel.editUser(req.params.id)
    let getpass = ""

    for (let index = 0; index < editUser.length; index++) {

      getpass = (editUser[index].password)
    }
    console.log(typeof (getpass))

    console.log(bcrypt.compareSync("123456", getpass));


    res.render('layouts/main', {
      data: {
        page: 'test', // Đặt giá trị cho biến 'page' trong 'data'
        users: editUser, // Đặt giá trị cho biến 'users' trong 'data'
        id: req.params.user_id
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let checklogin = await userModel.checklogin(email)
    let getpass, getuser
    console.log(req.body)
    console.log(req.session)

    for (let index = 0; index < checklogin.length; index++) {

      getpass = (checklogin[index].password)
      getuser = (checklogin[index].user)
    }

    if (email && password) {
      let checkpass = compareSync(password, getpass)
      if (checkpass) {
        req.session.username = getuser
        return res.status(200).json({ success: 'đăng nhập thành công với tư cách: '+ req.session.user });
      }else{
        return res.status(400).json({ success: 'tên đăng nhập hoặc mật khẩu không chính xác ' });

      }
      // res.render('layouts/main', {
      //   data: {
      //     page: 'test', // Đặt giá trị cho biến 'page' trong 'data'
      //     users: 'ok'// Đặt giá trị cho biến 'users' trong 'data'

      //   }
      // });
    } else {
      return res.status(400).json({ success: 'Tên người dùng và mật khẩu là bắt buộc' });
    }

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
}




const getapi = async (req, res) => {
  try {
    let userList = await userModel.getAllUser();
    res.status(200).json({
      data: {
        page: 'test', // Đặt giá trị cho biến 'page' trong 'data'
        users: userList // Đặt giá trị cho biến 'users' trong 'data'
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message // hoặc bất kỳ thông tin nào khác bạn muốn bao gồm
    });

  }
}





export default { getAllUsers, create, list_user, formLogin, getapi, detailUser, insertUser, editUser, login };