// /Applications/AutomationSuite/Liaison-ui-application/config/secure-config.js
// secure-config.js

module.exports = {
    enableStrictMode: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline'; object-src 'none'",
    frameOptions: "DENY",
    xssProtection: "1; mode=block",
    // Add other security-related configurations
};
