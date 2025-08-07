locals {
  service_name = "api-app"
}
provider "google" {
  project = var.project_id
  region  = var.region
}

resource "google_service_account" "app" {
  account_id   = "app-service-account"
  display_name = "App Service Account"
}

resource "google_cloud_run_service" "api" {
  name     = local.service_name
  location = var.region

  template {
    spec {
      containers {
        image = var.container_image
      }
      service_account_name = google_service_account.app.email
    }
  }
  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_service_iam_member" "invoker" {
  service  = google_cloud_run_service.api.name
  location = google_cloud_run_service.api.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}
