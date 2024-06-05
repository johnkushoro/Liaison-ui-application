const fs = require('fs');
const path = require('path');

const deleteFile = (filePath) => {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
};

const directories = [
    'cypress/screenshots',
    'cypress/videos'
];

directories.forEach(dir => {
    fs.readdirSync(dir).forEach(file => {
        deleteFile(path.join(dir, file));
    });
});

console.log('Old Cypress files deleted.');
