const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const server = require('./server');

server.express.use(cookieParser());

server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // put the userId on the req for future requests to access
    req.userId = userId;
  }

  req.userId = '5df302d1a7a19d4d3d99b3b4'; // for server side testing
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  ({ port }) => console.log(`Server is running on http://localhost:${port}`)
);
