# Infra Setup

This directory contains Terraform configuration for enabling App Engine Standard and assigning required IAM roles to the default App Engine service account.

All infrastructure is managed via Terraform. App code deployment is handled separately via `gcloud app deploy`.

## Quickstart

### 1. Configure Terraform Variables

- Copy `terraform.tfvars.example` to `terraform.tfvars`.
- Fill in your GCP project ID and region.

### 2. Initialize Terraform

```
terraform init
```

### 3. Apply the Terraform Plan

```
terraform apply
```
- Confirm when prompted. Terraform will provision:
  - App Engine application (enabling App Engine in your project)
  - IAM roles for Storage and Vertex AI on the default App Engine service account

### 4. Deploy Your App Code

- After infrastructure is ready, deploy your Node.js app from the `junior/app` directory:

```
gcloud app deploy app.yaml
```

### 5. Access Your App

- Your app will be available at:
  ```
  https://<your-project-id>.appspot.com
  ```

### 6. Destroy Resources When Done

```
terraform destroy
```
- This will clean up all resources created by Terraform (except those protected by lifecycle settings).

## Notes

- App Engine Standard deployment is managed outside Terraform (use `gcloud app deploy`).
- IAM roles are assigned automatically to the default App Engine service account.
