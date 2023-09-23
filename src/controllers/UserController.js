import express from "express"
import userModel from "../models/userModel"

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
    const list_user = (req, res) => {
        return res.render("layouts/main",
            {
                data: {
                    title: 'Danh sách tài khoản',
                    content: "admin@abc.com.vn",
                    page: "listUser"
                },
                info: [

                    {
                        id: 1,
                        taiKhoan: "admin",
                        matKhau: "admin_password",
                        ten: "Admin User",
                        gioiTinh: "Nam",
                        email: "admin@example.com",
                        diaChi: "Địa chỉ của Admin",
                        quyen: "Admin"
                    },
                    {
                        id: 2,
                        taiKhoan: "user1",
                        matKhau: "user1_password",
                        ten: "User 1",
                        gioiTinh: "Nữ",
                        email: "user1@example.com",
                        diaChi: "Địa chỉ của User 1",
                        quyen: "Người dùng thông thường"
                    },
                    {
                        id: 3,
                        taiKhoan: "user2",
                        matKhau: "user2_password",
                        ten: "User 2",
                        gioiTinh: "Nam",
                        email: "user2@example.com",
                        diaChi: "Địa chỉ của User 2",
                        quyen: "Người dùng thông thường"
                    }
                ]
            })
    }
    const login = (req, res) => {
        return res.render("layouts/main",
            {
                data: {
                    title: 'Đăng nhập',
                    content: "admin@abc.com.vn",
                    page: "login"
                }
            })
    }
    // async getAllUsers(req, res) {
    //     try {
    //       let userList = await userModel.getAllUsers();
    //       res.render('layouts/main', {
    //         data: {
    //           users: userList,
    //           page: "test"
    //         },
    //       });
    //     } 
    //     catch (error) {
    //       console.error('Error:', error);
    //       res.status(500).send('Internal Server Error');
    //     }
    //   }
    // const getAllUsers = async (req, res) =>{
        
    //       let userList = await userModel.getAllUser();
    //       res.render('layouts/main', {
    //         data: {
    //           page: 'test', // Đặt giá trị cho biến 'page' trong 'data'
    //           users: userList
    //         }
    //       });
        
    //   }
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
      const getapi = async (req, res) => {
        try {
          let userList = await userModel.getAllUser();
          res.json({
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
      
      
      


export default {getAllUsers, create, list_user, login, getapi};