const dotenv = require("dotenv");

dotenv.config({ path: "/Applications/AutomationSuite/Liaison-ui-application-master/.env" });

module.exports = {
    ...process.env,
};


