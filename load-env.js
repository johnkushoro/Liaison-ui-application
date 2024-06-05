const dotenv = require("dotenv");

dotenv.config({ path: "/Applications/AutomationSuite/Liaison-ui-application/.env" });

module.exports = {
    ...process.env,
};


