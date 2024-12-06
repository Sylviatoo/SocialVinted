import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type ServiceFull = {
  id: number;
  date: string;
  picture: string;
  title: string;
  description: string;
  service_category_name: string;
  user_name: string;
  location: string;
};

class ServiceRepository {
  // The C of CRUD - Create operation

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific service by its ID
    const [rows] = await databaseClient.query<Rows>(
      `SELECT se.id as id, se.date as date, us.picture as picture, se.title as title,
        se.description as description, sc.name as service_category_name,
        us.name as user_name, us.location as location 
        FROM service se
        INNER JOIN service_category sc ON se.category_id=sc.id
        INNER JOIN user us ON se.user_id=us.id
        WHERE se.id=?
      `,
      [id],
    );

    // Return the first row of the result, which represents the service
    return rows[0] as ServiceFull;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all services from the "service" table
    const [rows] = await databaseClient.query<Rows>(
      `SELECT se.id as id, se.date as date, us.picture as picture, se.title as title,
        se.description as description, sc.name as service_category_name,
        us.name as user_name, us.location as location 
        FROM service se
        INNER JOIN service_category sc ON se.category_id=sc.id
        INNER JOIN user us ON se.user_id=us.id
      `,
    );

    // Return the array of users
    return rows as ServiceFull[];
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove a service by its ID
}

export default new ServiceRepository();
