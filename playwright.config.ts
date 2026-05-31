import { defineConfig, devices } from '@playwright/test';

import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  fullyParallel: true,
  use: {
    actionTimeout: 15000,
    navigationTimeout: 30000,
  },
  timeout: 90000,
  expect: {
    timeout: 5000
  },
  projects: [
    {
      name: 'parabank',
      testDir: './tests',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: "http://127.0.0.1:8080/",
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure'
      },
      outputDir: 'tests-result/parabank-ui-chrome',
    }
  ]
});