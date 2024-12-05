import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

type Condition = {
  id: number;
  name: string;
};

class ConditionCategoryRepository {
  // The C of CRUD - Create operation

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific condition by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from condition_category where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the condition
    return rows[0] as Condition;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all condition categories from the "condition_category" table
    const [rows] = await databaseClient.query<Rows>(
      "select * from condition_category",
    );

    // Return the array of users
    return rows as Condition[];
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an donation by its ID
}

export default new ConditionCategoryRepository();
