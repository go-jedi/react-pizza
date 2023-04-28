import express from "express";

import PizzaController from "../controllers/pizza-controller";

const router: express.Router = express.Router();

router.get("/pizza", PizzaController.getAll);

export default router;
