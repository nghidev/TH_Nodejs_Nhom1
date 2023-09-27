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
          console.log(req.body)
          // let role = 0
          // let {user, pas, fullname, address} = req.body
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
          res.status(500).send('Internal Server Error')
        }
      }
      
      
      


export default {getAllUsers, create, list_user, login, getapi, detailUser, insertUser};