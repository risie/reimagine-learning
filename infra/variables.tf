variable "project_id" {
  description = "GCP project ID"
  type        = string
}

variable "region" {
  description = "GCP region"
  type        = string
  default     = "europe-west1"
}

variable "container_image" {
  description = "Container image URI"
  type        = string
}

variable "supabase_url" {
  description = "Supabase project URL"
  type        = string
}

variable "supabase_key" {
  description = "Supabase service key"
  type        = string
  sensitive   = true
}

variable "google_api_key" {
  description = "Google API key for Vertex AI or other Google services"
  type        = string
  sensitive   = true
}
