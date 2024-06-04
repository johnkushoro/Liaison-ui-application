const fs = require('fs');
const path = require('path');

const videoDir = path.join(__dirname, 'cypress/videos');

try {
    // Check if the directory exists
    if (fs.existsSync(videoDir)) {
        // Get list of files in the directory
        const files = fs.readdirSync(videoDir);

        // Log each file path
        files.forEach(file => {
            // Construct the file path
            const filePath = path.join(videoDir, file);

            // Log the file path
            console.log(`Existing video file: ${filePath}`);
        });
    } else {
        console.log(`Video directory does not exist: ${videoDir}`);
    }
} catch (err) {
    console.error('Error checking existing video files:', err);
}
