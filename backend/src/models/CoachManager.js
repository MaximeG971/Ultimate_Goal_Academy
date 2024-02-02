const AbstractManager = require("./AbstractManager");

class CoachManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "coach" as configuration
    super({ table: "coach" });
  }

  // The C of CRUD - Create operation

  async create(coach) {
    // Execute the SQL INSERT query to add a new coach to the "coach" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, speciality, photo) values (?, ?, ?)`,
      [coach.name, coach.speciality, coach.photo]
    );

    // Return the ID of the newly inserted coach
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific coach by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the coach
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all coachs from the "coach" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of coachs
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing coach

  async update(coach, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "coach" table
    const [result] = await this.database.query(
      `update ${this.table} set name = ?, speciality = ?, photo = ? where id = ?`,
      [coach.name, coach.speciality, coach.photo, id]
    );

    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an coach by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = CoachManager;
