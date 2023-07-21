# NunuaTicket - Online Ticketing Platform

NunuaTicket is an online ticketing platform that allows users to buy tickets for various events and shows. This application provides features for user registration, login, and ticket purchasing.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT) for authentication
- bcrypt.js for password hashing
- Various NPM packages for server-side functionality

## Installation

1. Clone the repository to your local machine:

git clone https://github.com/your-username/NunuaTicket.git

2. Install the required dependencies for both the server and client:

cd NunuaTicket
npm install
cd client
npm install

3. Create a `.env` file in the root directory and provide the following environment variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_URL=your_cloudinary_url

4. Start the development server:

npm run dev

The server will run on http://localhost:5000, and the client will run on http://localhost:3000.

## API Endpoints

- `/api/auth/register`: Register a new user
- `/api/auth/login`: User login and authentication
- `/api/stadiums`: Create a new stadium (admin access required)
- `/api/stadiums/:id`: Update a stadium by ID (admin access required)
- `/api/auth/register`: Register a new user
- `/api/auth/login`: User login and authentication
- `/api/stadiums`: Create a new stadium (admin access required)
- `/api/stadiums/:id`: Update a stadium by ID (admin access required)
- `/api/stadiums/:id`: Delete a stadium by ID (admin access required)
- `/api/stadiums/find/:id`: Get stadium details by ID
- `/api/stadiums`: Get all stadiums
- `/api/stadiums/countByCity`: Get the count of stadiums by type
- `/api/stadiums/seat/:id`: Get stadium seats by ID
- `/api/users/:id`: Update a user by ID (user access required)
- `/api/users/:id`: Delete a user by ID (user access required)
- `/api/users/:id`: Get user details by ID (user access required)
- `/api/users`: Get all users (admin access required)


## How to Use

1. Register a new user or login with existing credentials.
2. Browse available stadiums and select the one you want to purchase tickets for.
3. Proceed to checkout and complete the payment process.
4. Once the payment is confirmed, you will receive a confirmation email with your ticket details.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgements

- [OpenAI GPT-3.5](https://openai.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [bcrypt.js](https://github.com/kelektiv/node.bcrypt.js).
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken).
