const express = require('express');
const errorHandler = require('./controllers/middleware/errorhandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();
connectDb();
const app = express();

const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
