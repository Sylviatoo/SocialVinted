# SocialVinted  

**SocialVinted** is a prototype created in 12 hours during a challenge centered around the theme of kindness. It is a web platform that allows individuals to offer free donations or services to others in need.  

---

## Environment Variables  

To run this project correctly, you need to configure a `.env` file in the project root directory. Environment variables are essential for securely storing sensitive information, such as credentials and passwords, without embedding them directly in the source code.  

In the case of SocialVinted, we use environment variables to configure access to the MySQL database.  

### Setting Up the `.env` File  

Create a file named `.env` in the root directory of the project and add the following lines:  

```plaintext
MYSQL_HOST=localhost
MYSQL_USER=YourUsername
MYSQL_PASSWORD=YourPassword
MYSQL_DATABASE=YourDatabaseName

Here’s what each variable represents:

- **MYSQL_HOST**: The address of your MySQL server (usually `localhost` for a local database).  
- **MYSQL_USER**: The username for accessing your database.  
- **MYSQL_PASSWORD**: The password associated with this username.  
- **MYSQL_DATABASE**: The name of the database used by the application.  

### Why Use a `.env` File?  

Environment variables provide several benefits:  

- **Protect sensitive information**: Prevent credentials and passwords from being hardcoded in your source code.  
- **Simplify configuration**: Quickly adapt settings for different environments (e.g., local, production).  

Make sure that the `.env` file is **never shared publicly**. To ensure this, add a rule in your `.gitignore` file to
```plaintext
# .gitignore file
.env
