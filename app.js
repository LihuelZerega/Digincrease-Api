const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const sequelize = require('./src/config/database');
const studiocahRoutes = require('./src/routes/studiocahRoutes');
const digincreaseRoutes = require('./src/routes/digincreaseRoutes');
const rateLimiter = require('./src/middlewares/rateLimiter');

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(rateLimiter);

app.use('/api/studiocah', studiocahRoutes);
app.use('/api/digincrease', digincreaseRoutes);

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
