# Infra Setup

This directory contains Terraform configuration for deploying the API application to Google Cloud Run.

This setup is intended to be deployed using terraform or open tofu. State is managed locally and the release of an image will be made semi automatic. As a new image of the application is build in the CI/CD pipeline, the deployment can use the latest image by running `terraform apply` locally.

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

4. **Initialize Terraform/tofu**
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
