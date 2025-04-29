# Salesforce E-Signature Application

## Overview
This application provides an E-signature solution built entirely within the Salesforce ecosystem. It includes:

- Configuration Screen (Lightning Web Component) for Salesforce users to upload PDFs and drag & drop form elements.
- Customer Screen (Lightning Web Component) for customers to review and fill out documents.
- Backend logic implemented in Apex for handling configurations, submissions, and email notifications.
- Integration with Google Drive and Dropbox for document storage to avoid storing documents directly in Salesforce.
- Use of Salesforce email services for sending customer links.

## Tech Stack
- Salesforce Lightning Web Components (LWC)
- Apex Classes
- Salesforce Files and External Storage APIs
- Salesforce Email Services

## Setup and Deployment
1. Deploy the LWC components and Apex classes to your Salesforce org.
2. Configure Google Drive and Dropbox integrations using Salesforce Named Credentials and External Services.
3. Set up email templates and configure email sending in Salesforce.
4. Assign appropriate permissions to Salesforce users.

## Next Steps
- Implement detailed LWC components with drag & drop functionality.
- Develop Apex backend logic for document and form management.
- Integrate external storage APIs.
- Implement email sending and customer portal access.

## Notes
This is a Salesforce-native solution designed to leverage the platform's capabilities and minimize external dependencies.
