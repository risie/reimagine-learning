# Infra Setup

This directory contains Terraform configuration for deploying the API application to Google Cloud Run.

## Quickstart

### Deploying with Terraform using gcloud CLI authentication

1. **Authenticate with Google Cloud CLI**
   ```
   gcloud auth application-default login
   ```
   - This will open a browser window for you to log in.
   - It sets up credentials that Terraform will use automatically.

2. **Set your GCP project (optional but recommended)**
   ```
   gcloud config set project YOUR_PROJECT_ID
   ```
   - Replace `YOUR_PROJECT_ID` with your actual project ID.

3. **Copy and configure variables**
   - Copy `terraform.tfvars.example` to `terraform.tfvars`.
   - Fill in your GCP project ID, region, container image URI, Supabase credentials, and Google API key if needed.

4. **Initialize Terraform**
   ```
   terraform init
   ```

5. **Review and apply the Terraform plan**
   ```
   terraform plan
   ```
   - Review the resources that will be created.
   ```
   terraform apply
   ```
   - Confirm when prompted. Terraform will provision your Cloud Run service and related resources.

6. **Deploy your container image**
   - Make sure your container image is built and pushed to Google Container Registry (GCR) or Artifact Registry before applying.

7. **Access your service**
   - After apply, the Cloud Run service URL will be shown in the outputs.

8. **(Optional) Destroy resources when done**
   ```
   terraform destroy
   ```
   - This will clean up all resources created by Terraform.

## Notes

- Do **not** commit `terraform.tfvars` or any secrets to version control.
- This setup uses local Terraform state for simplicity.
- To destroy resources after the hackathon, run:
  ```
  terraform destroy
  ```

## Files

- `main.tf` – Main Terraform configuration for Cloud Run and related resources.
- `variables.tf` – Input variables for configuration.
- `outputs.tf` – Outputs such as the Cloud Run URL.
- `terraform.tfvars.example` – Example variables file for onboarding.
- `.gitignore` – Ensures sensitive files are not committed.

---