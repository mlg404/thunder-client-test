const { Router } = require("express");
const authMiddleware = require("./middlewares/auth");
const LoginController = require("./controllers/loginController");
const DataController = require("./controllers/dataController");

const loginController = new LoginController();
const dataController = new DataController();

const routes = Router();

routes.post("/login", loginController.login);

routes.use(authMiddleware);
routes.get("/data", dataController.getData);

module.exports = routes;
