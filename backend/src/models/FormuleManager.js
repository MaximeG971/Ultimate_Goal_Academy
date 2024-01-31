const AbstractManager = require("./AbstractManager");

class FormuleManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "formule" as configuration
    super({ table: "formule" });
  }

  // The C of CRUD - Create operation

  // async create(formule) {
  //   const { type, category } = formule;
  //   // Execute the SQL INSERT query to add a new formule to the "formule" table
  //   const [result] = await this.database.query(
  //     `insert into ${this.table} (type, category) values (?, ?)`,
  //     [type, category]
  //   );

  //   // Return the ID of the newly inserted formule
  //   return result.insertId;
  // }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific formule by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the formule
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all formules from the "formule" table
    const [rows] = await this.database.query(
      `SELECT formule.type, formule.description, coach.name AS coach_name FROM ${this.table} JOIN coach ON formule.coach_id = coach.id`
    );

    // Return the array of formules
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing formule

  // async update(formule, id) {
  //   // Execute the SQL INSERT query to update the row with tie id on the "formule" table
  //   const result = await this.database.query(
  //     `update ${this.table} set ? where id = ?`,
  //     [formule, id]
  //   );

  //   return result;
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an formule by its ID
  // async delete(id) {
  //   const result = await this.database.query(
  //     `delete from ${this.table} where id = ?`,
  //     [id]
  //   );

  //   return result;
  // }
}

module.exports = FormuleManager;
