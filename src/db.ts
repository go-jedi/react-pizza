import Pool from "pg";

const pool = new Pool.Pool({
  user: "postgres",
  password: "******",
  host: "localhost",
  port: 5432,
  database: "pizza_postgres",
});

export default pool;
