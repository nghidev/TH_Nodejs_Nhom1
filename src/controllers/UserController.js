import express from "express"
class aboutPage {
    create(req, res) {
        return res.render("layouts/main",
            {
                data: {
                    title: 'Tạo tài khoản',
                    content: "admin@abc.com.vn",
                    page: "newUser"
                }
            })
    }
    list_user(req, res) {
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
}
module.exports = new aboutPage();