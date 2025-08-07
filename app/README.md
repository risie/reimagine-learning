# App Setup & Run Guide

This guide explains how to set up, configure, and run the app in development mode or as a container. Follow these steps to ensure a smooth experience.

---

## Prerequisites

Before running the app, make sure you have:

1. **A Google Cloud Storage Service Account**
   - Download the service account credentials as a JSON file (`service-account.json`) from the [Google Cloud Console](https://console.cloud.google.com/iam-admin/serviceaccounts).
   - Place the `service-account.json` file in the project directory or specify its path via an environment variable.

2. **Environment Variables**
   - The app requires several environment variables for configuration (such as API keys, storage bucket name, etc.).
   - Refer to your team or project documentation for the specific variables required.
   - You can set these variables in your shell, or use a `.env` file if supported.

3. **Docker (for container usage)**
   - Ensure Docker is installed and running on your system: [Get Docker](https://docs.docker.com/get-docker/)

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

## Running as a Container


2. **Run the app using Docker Compose**

   A `compose.yml` file is provided for convenience. It builds the image, sets up environment variables, and mounts the service account file automatically.

   ```sh
   docker compose up --build
   ```

   This will:
   - Build the Docker image from the local directory.
   - Expose port 8080.
   - Set required environment variables (`GOOGLE_APPLICATION_CREDENTIALS`, `PORT`).
   - Mount your `service-account.json` file as a read-only secret.

   You can customize the compose file as needed for your environment.

---
