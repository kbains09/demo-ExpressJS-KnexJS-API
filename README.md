This file contains .env content for local development since env file is ignored in git repo.

PORT = 8080
BASE_URL = http://localhost:
CORS_ORIGIN = http://localhost:3000
CLIENT_URL = http://localhost:3000

Overview

The backend of the InStock Inventory Management System is a Node.js application built with Express.js, MySQL, and Knex.js. It provides the necessary APIs for the frontend to manage products, categories, and user authentication.

Tech Stack

Node.js: JavaScript runtime for building server-side applications.
Express.js: Web application framework for Node.js, used for handling HTTP requests and routing.
MySQL: Relational database management system for storing and managing data.
Knex.js: SQL query builder for Node.js, used for interacting with the MySQL database.
npm: Package manager for Node.js, used for managing project dependencies.
Folder Structure

The backend project follows a structured layout for better organization and maintainability:

bash
Copy code
backend/
├── controllers/        # Route handlers for each endpoint
├── models/             # Database models and schema
├── routes/             # Route definitions
├── db/                 # Database configuration and migrations
├── config/             # Application configuration
├── middleware/         # Custom middleware functions
├── utils/              # Utility functions
├── server.js           # Main entry point for the application
└── package.json        # Project metadata and dependencies
API Endpoints

Authentication
POST /api/auth/login: Authenticates a user and returns an access token.
Products
GET /api/products: Retrieves a list of all products.
GET /api/products/:id: Retrieves a product by its ID.
POST /api/products: Adds a new product.
PUT /api/products/:id: Updates a product by its ID.
DELETE /api/products/:id: Deletes a product by its ID.
Categories
GET /api/categories: Retrieves a list of all categories.
GET /api/categories/:id: Retrieves a category by its ID.
POST /api/categories: Adds a new category.
PUT /api/categories/:id: Updates a category by its ID.
DELETE /api/categories/:id: Deletes a category by its ID.
Database Schema

The database schema includes tables for products, categories, and users:

Products Table
id (INT, Primary Key)
name (VARCHAR)
description (TEXT)
price (DECIMAL)
category_id (INT, Foreign Key)
Categories Table
id (INT, Primary Key)
name (VARCHAR)
Users Table
id (INT, Primary Key)
username (VARCHAR)
password (VARCHAR)
Setup

Clone the backend repository from GitHub.
Install dependencies using npm install.
Configure the database connection in the db/config.js file.
Run database migrations using knex migrate:latest.
Start the server using npm start.
