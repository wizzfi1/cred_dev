# Terraform Infrastructure

This directory defines the infrastructure required to run the application in AWS.

## Overview
- VPC with public subnets
- Application Load Balancer with HTTPS
- ECS Fargate service
- Rolling deployments handled by ECS

## Deployment Strategy
ECS is configured with a rolling deployment strategy, ensuring zero downtime during new releases by maintaining healthy tasks while replacing old ones.

## Secrets Management
Secrets are not stored in Terraform files. In a production setup, values would be injected via AWS Secrets Manager or environment variables defined at deploy time.

## Applying
This configuration is intended to demonstrate infrastructure design and was not applied as part of CI.
