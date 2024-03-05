const dotenv = require("dotenv");

dotenv.config({ path: "/Applications/Liaison-UI-Application/.env" });

module.exports = {
    ...process.env,
};


