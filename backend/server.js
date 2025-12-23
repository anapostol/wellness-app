const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

//middlewares
app.use(helmet()); //securitate headers HTTP
app.use(cors()); //CORS pentru frontend
app.use(express.json()); //parse JSON body
app.use(express.urlencoded({ extended: true })); //parse URL-encoded body
app.use(morgan('dev')); //logging requests in consola

//health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

//welcome route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Fitness & Wellness API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health'
    }
  });
});

//404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

//start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;