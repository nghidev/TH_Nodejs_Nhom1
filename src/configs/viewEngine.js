const configViewEngine = (app) => {
    app.set("view engine", "ejs");
    app.set("views", "./view");
  };
  export default configViewEngine;
  