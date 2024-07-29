import { db } from "../db.js";

export const getLivros = (_, res) => {
  const q = "SELECT * FROM livros";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};