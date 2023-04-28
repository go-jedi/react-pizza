import { Request, Response } from "express";

import PizzaService from "../service/pizza-service";

class PizzaController {
  async getAll(req: Request, res: Response) {
    try {
      const users = await PizzaService.getAll(
        req.query.category,
        req.query._sort,
        req.query._order,
      );

      res.status(200).json({
        status: 200,
        message: "Успешное получение пицц",
        result: users,
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: "Ошибка получения пицц",
      });
    }
  }
}

export default new PizzaController();
