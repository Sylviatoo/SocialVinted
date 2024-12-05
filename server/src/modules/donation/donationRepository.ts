import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Donation = {
  id: number;
  date: string;
  picture: string;
  title: string;
  description: string;
  condition_id: number;
  category_id: number;
  user_id: number;
};

class DonationRepository {
  // The C of CRUD - Create operation

  async create(donation: Omit<Donation, "id">) {
    const index = donation.date.indexOf("T");
    let dateString = donation.date;
    if (index !== -1) {
      dateString = donation.date.substring(0, index);
    }

    // Execute the SQL INSERT query to add a new donation to the "donation" table

    const [result] = await databaseClient.query<Result>(
      "insert into donation (date, picture, title, description, condition_id, category_id, user_id) values (?, ?, ?, ?, ?, ?, ?)",
      [
        dateString,
        donation.picture,
        donation.title,
        donation.description,
        donation.condition_id,
        donation.category_id,
        donation.user_id,
      ],
    );

    // Return the ID of the newly inserted donation
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific donation by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from donation where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the donation
    return rows[0] as Donation;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all donations from the "donation" table
    const [rows] = await databaseClient.query<Rows>("select * from donation");

    // Return the array of users
    return rows as Donation[];
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an donation by its ID

  async delete(id: number) {
    await databaseClient.query<Rows>("DELETE FROM donation WHERE id = ?", [id]);
  }
}

export default new DonationRepository();
