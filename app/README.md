# App Setup & Run Guide

This guide explains how to set up, configure, and run the app in development mode or as a container. Follow these steps to ensure a smooth experience.

---

## Prerequisites

Before running the app, make sure you have:

1. **A Google Cloud Storage Service Account**
   - Download the service account credentials as a JSON file (`service-account.json`) from the [Google Cloud Console](https://console.cloud.google.com/iam-admin/serviceaccounts).
   - Place the `service-account.json` file in the project directory or specify its path via an environment variable. Give the account the same permissions to use vertex ai.

2. **Environment Variables**
   - The app requires several environment variables for configuration (such as API keys, storage bucket name, etc.).
   - Refer to your team or project documentation for the specific variables required.
   - You can set these variables in your shell, or use a `.env` file if supported.

---

## Running in Development Mode

1. **Set up environment variables**
   - Export the required environment variables in your shell, or use a `.env` file if supported.

2. **Provide the service account credentials**
   - Ensure `service-account.json` is accessible to the app (in the working directory or via an environment variable).

3. **Start the app in development mode**
   ```sh
   npm run dev

---

## Deploying to Google App Engine (GCP)

Once your infrastructure is provisioned (e.g., with Terraform), you can deploy and remove your app using the Google Cloud CLI (`gcloud`).

### Deploying the App

1. Ensure your `app.yaml` is present in the project root and correctly configured for App Engine Standard.
2. Deploy your app:
   ```sh
   gcloud app deploy app.yaml
   ```
3. To verify deployment:
   ```sh
   gcloud app browse
   ```
