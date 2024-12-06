import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type DonationFull = {
  id: number;
  date: string;
  picture: string;
  title: string;
  description: string;
  donation_category_name: string;
  condition_category_name: string;
  user_name: string;
  location: string;
};

class DonationFullRepository {
  // The C of CRUD - Create operation

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific donation by its ID
    const [rows] = await databaseClient.query<Rows>(
      `SELECT do.id as id, do.date as date, do.picture as picture, do.title as title,
        do.description as description, dc.name as donation_category_name,
        cd.name as condition_category_name, us.name as user_name, us.location as location 
        FROM donation do
        INNER JOIN donation_category dc ON do.category_id=dc.id
        INNER JOIN condition_category cd ON do.condition_id=cd.id
        INNER JOIN user us ON do.user_id=us.id
        WHERE do.id=?
      `,
      [id],
    );

    /*
    SELECT w.firstname, w.lastname, p.role, t.name
    -> FROM wizard w
    -> INNER JOIN player p ON p.wizard_id=w.id
    */
    // Return the first row of the result, which represents the donation
    return rows[0] as DonationFull;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all donations from the "donation" table
    const [rows] = await databaseClient.query<Rows>(
      `SELECT do.id as id, do.date as date, do.picture as picture, do.title as title,
        do.description as description, dc.name as donation_category_name,
        cd.name as condition_category_name, us.name as user_name, us.location as location 
        FROM donation do
        INNER JOIN donation_category dc ON do.category_id=dc.id
        INNER JOIN condition_category cd ON do.condition_id=cd.id
        INNER JOIN user us ON do.user_id=us.id`,
    );

    // Return the array of users
    return rows as DonationFull[];
  }
}

export default new DonationFullRepository();
