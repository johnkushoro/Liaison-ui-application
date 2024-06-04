
const report = require("multiple-cucumber-html-reporter");
const useragent = require("useragent");
const fs = require('fs');
const path = require('path');

try {
    // Detect the browser
    const userAgentString = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.71 Safari/537.36";
    const agent = useragent.parse(userAgentString);
    const browserName = agent.family;
    const browserVersion = agent.toVersion();

    // Get the project name and test scenario from environment variables
    const projectName = process.env.PROJECT_NAME || "Unknown Project";
    const testScenario = process.env.TEST_SCENARIO || "Unknown Test Scenario";

    const startTime = new Date();
    const endTime = new Date();

    const jsonDir = path.resolve(__dirname, "cypress/reports/cucumber-json");

    // Check if JSON directory exists and create it if it doesn't
    if (!fs.existsSync(jsonDir)) {
        console.warn(`Directory not found: ${jsonDir}. Creating directory.`);
        fs.mkdirSync(jsonDir, { recursive: true });
    }

    const jsonFiles = fs.readdirSync(jsonDir).filter(file => file.endsWith('.json'));
    if (jsonFiles.length === 0) {
        console.warn(`No JSON files found in directory: ${jsonDir}`);
    } else {
        console.log(`Found ${jsonFiles.length} JSON files in ${jsonDir}`);
    }

    report.generate({
        jsonDir: jsonDir,
        reportPath: path.resolve(__dirname, "cypress/reports/html-multi-report"),
        ignoreBadJsonFile: true,
        displayReportTime: true,
        displayDuration: true,
        metadata: {
            browser: {
                name: browserName,
                version: browserVersion,
            },
            device: "MacBook Pro",
            platform: {
                name: "Ubuntu",
                version: "14.2",
            },
        },
        customData: {
            title: "Run info",
            data: [
                { label: "Project", value: projectName },
                { label: "Test Scenario", value: testScenario },
                { label: "Execution Start Time", value: startTime.toLocaleString("en-US", { timeZoneName: "short" }) },
                { label: "Execution End Time", value: endTime.toLocaleString("en-US", { timeZoneName: "short" }) },
            ],
        },
    });
} catch (error) {
    console.error("An error occurred:", error);
}

