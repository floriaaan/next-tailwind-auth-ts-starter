import { PlaywrightTestConfig, devices } from "@playwright/test";
import path from "path";

// Reference: https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  testDir: path.join(__dirname, "e2e"),
  outputDir: "test-reports/",

  webServer: {
    command: "npm run dev --port=3001",
    port: 3001,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
    ignoreHTTPSErrors: true,
  },

  use: {
    trace: "on",
    baseURL: "http://localhost:3001/",
  },

  projects: [
    {
      name: "Desktop Edge",
      use: {
        ...devices["Desktop Edge"],
      },
    },
    // {
    //   name: "Desktop Firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //   },
    // },
  ],
};
export default config;
