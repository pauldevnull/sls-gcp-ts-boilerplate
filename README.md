# sls-gcp-ts-boilerplate

1. Create project "sls-gcp-ts-boilerplate" in GCP console
2. gcloud auth login
   gcloud config set project sls-gcp-ts-boilerplate
3. Make service account with roles: Add Deployment Manager Editor, Storage Admin, Logging Admin, Cloud Functions Developer roles 
   1. generate keyfile 
   2. point to credentials in serverless.yml
4. Enable necessary services from Cloud Shell
   gcloud services enable \
   cloudfunctions.googleapis.com \
   run.googleapis.com \
   workflows.googleapis.com \
   cloudbuild.googleapis.com \
   storage.googleapis.com
   1. You may have to wait several minutes fo
5. Enable the necessary APIs from the GCP API Dashboard
   1. Cloud Functions API
      Cloud Deployment Manager V2 API
      Cloud Build API
      Cloud Storage
      Cloud Logging API
   2. Command:
      1. gcloud services enable cloudfunctions.googleapis.com && \
         gcloud services enable deploymentmanager.googleapis.com && \
         gcloud services enable cloudbuild.googleapis.com && \
         gcloud services enable storage-component.googleapis.com && \
         gcloud services enable logging.googleapis.com
6. npm run deploy



Test locally: serverless invoke local -f multiply -p src/test/multiply-body.json
