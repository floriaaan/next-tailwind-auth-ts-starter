import { PlaywrightTestConfig, devices } from "@playwright/test";
import path from "path";

// Reference: https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  testDir: path.join(__dirname, "e2e"),
  outputDir: "test-results/",

  webServer: {
    command: "npm run dev",
    port: 3001,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
    ignoreHTTPSErrors: true,
  },

  use: {
    trace: "on",
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
