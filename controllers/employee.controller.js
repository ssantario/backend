const pg = require("../utils/connect");

exports.addEmployee = async function addEmployee(req, res) {
  // Insert kode ADD di sini
  try {
    const { name, gender, division, salary } = req.body;
    const response = await pg.query(
      'INSERT INTO employee (name, gender, division, salary) VALUES ($1, $2, $3, $4) RETURNING *', 
      [name, gender, division, salary]
    );

    res.status(201).json(response.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getEmployee = async function getEmployee(req, res) {
  // Insert kode GET di sini
  try {
    const response = await pg.query('SELECT * FROM employee');
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getOneEmployee = async function getOneEmployee(req, res) {
  // Insert kode GET di sini
  try {
    const { id } = req.params;
    const response = await pg.query('SELECT * FROM employee WHERE id = $1', [id]);

    if (response.rows.length === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json(response.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteEmployee = async function deleteEmployee(req, res) {

  try {
    const { id } = req.params;
    const response = await pg.query('DELETE FROM employee WHERE id = $1 RETURNING *', [id]);

    if (response.rows.length === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json({ message: 'Employee deleted successfully', employee: response.rows[0] });
  } catch (error) {
    res.status(500).json(error);
  }
};

