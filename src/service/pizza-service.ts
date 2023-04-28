import db from "../db";

class PizzaService {
  async getAll(category: any, sortBy: any, order: any) {
    if (category === undefined) {
      const pizzas = await db.query(
        `SELECT * FROM pizzas ORDER BY ${sortBy} ${order.toUpperCase()}`,
      );

      return pizzas.rows;
    } else {
      const pizzas = await db.query(`SELECT * FROM pizzas WHERE category = ${category}`);

      return pizzas.rows;
    }
  }
}

export default new PizzaService();
