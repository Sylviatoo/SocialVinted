import databaseClient from "../../../../database/client";

import type { Rows } from "../../../../database/client";

type ServiceCategory = {
  id: number;
  name: string;
};

class ServiceCategoryRepository {
  // The C of CRUD - Create operation

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific service category by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from service_category where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the service category
    return rows[0] as ServiceCategory;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all service categories from the "service_category" table
    const [rows] = await databaseClient.query<Rows>(
      "select * from service_category",
    );

    // Return the array of users
    return rows as ServiceCategory[];
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an service by its ID
}

export default new ServiceCategoryRepository();
