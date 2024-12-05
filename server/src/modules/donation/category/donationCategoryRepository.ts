import databaseClient from "../../../../database/client";

import type { Rows } from "../../../../database/client";

type DonationCategory = {
  id: number;
  name: string;
};

class DonationCategoryRepository {
  // The C of CRUD - Create operation

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific donation category by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from donation_category where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the donation category
    return rows[0] as DonationCategory;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all donation categories from the "donation_category" table
    const [rows] = await databaseClient.query<Rows>(
      "select * from donation_category",
    );

    // Return the array of users
    return rows as DonationCategory[];
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an donation by its ID
}

export default new DonationCategoryRepository();
