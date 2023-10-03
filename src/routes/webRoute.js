import express from 'express';
import AboutController from '../controllers/AboutController';
import HomeController from '../controllers/HomeController';
import UserController from '../controllers/UserController';

const router = express.Router();

const initWebRoute = (app) => {
  // Trang chủ
  router.get("/", HomeController.index);
  router.get("/home", HomeController.index);
  router.get("/page", HomeController.page);

  // Giới thiệu
  router.get("/about", AboutController.index);

  // Người dùng
  router.get("/create-new-user", UserController.create);
  router.get("/list-user", UserController.list_user);
  router.get("/formLogin", UserController.formLogin);
  router.post("/login", UserController.login);
  router.get("/detail-user/:id", UserController.detailUser);
  router.post("/insert-new-user", UserController.insertUser);
  router.get("/edit-user/:id", UserController.editUser);



  // Route mặc định nếu không tìm thấy
  router.get("/:slug", (req, res) => {
    res.send("Không tìm thấy");
  });

  // Sử dụng router ở đường dẫn gốc '/'
  app.use('/', router);

//   return app;
};

export default initWebRoute;
