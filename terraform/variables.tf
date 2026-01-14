variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "container_image" {
  description = "Container image pushed by CI"
  type        = string
}

variable "acm_certificate_arn" {
  description = "ACM certificate ARN for HTTPS"
  type        = string
}
