const app = require('./app');
const port = process.env.PORT || 5000;
require('dotenv-safe').config();
const jwt = require('jsonwebtoken');

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
