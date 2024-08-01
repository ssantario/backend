const pg = require("../utils/connect");

exports.register = async function register(req, res) {
  // Insert kode REGISTER di sini
  try {
    const { name, password } = req.body;
    const response = await pg.query('INSERT INTO manager (name, password) VALUES ($1, $2) RETURNING *', [name, password]);

    res.status(200).json(response.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.login = async function login(req, res) {
  // Insert kode LOGIN di sini
  try {
    const { name, password } = req.body;
    const response = await pg.query('SELECT * FROM manager WHERE name = $1 AND password = $2', [name, password]);

    if (response.rows.length === 0) throw new error ("Failed to Login");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getManager = async function getManager(req,res){
  try {
    const { name } = req.params;
    const response = await pg.query('SELECT * FROM manager WHERE name = $1', [name]);

    if (response.rows.length === 0) throw new error ("Data not found");
    
    const managerInfo = response.rows[0];
    res.status(200).json({ name: managerInfo.name });
    }catch (error) {
      res.status(500).json({ error: error.message });
    }
};

