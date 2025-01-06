# Project Overview
The blog platform consists of the following services:

## 1. User Service

Handles user authentication and profile management.

Authentication: Uses JWT for secure token-based authentication.

Password Security: Implements password hashing with bcrypt.

Exposed Endpoints:

POST /register Link -> ### http://44.220.164.110/register (info required is firstName,lastName,email,password)

POST /login/: Link-> ### http://44.220.164.110/login   (info required is email and password)

GET /users/<id>: Link-> ## http://44.220.164.11/users/userid  (userid is a no. and created when user is registered)

## 2. Blog Service

Manages blog posts and supports pagination for scalable listing.

Exposed Endpoints:

POST /blogs/: Create a new blog post.  Link->  http://44.220.164.110:81/blogs  (content and title is required. Token is also passed through header using authorization token created during login)

GET /blogs/: List all blog posts.    Link->  http://44.220.164.110:81/blogs 

PUT /blogs/<id>: Edit an existing blog post.   Link->  http://44.220.164.110:81/blogs/blogid  (blogid is created during blog creation . here content and title field will be required and token also)

DELETE /blogs/<id>: Delete a blog post.   Link->  http://44.220.164.110:81/blogs/blogid  (blogid and token is required)

## 3. Comment Service

Handles comments for blog posts. Initially, supports a flat structure with the option to extend for nested comments.

Exposed Endpoints:

POST /comments/: Add a comment to a blog post.  ### http://44.220.164.110:82/comments (postId and content is required, token is also required through headers authorization)

GET /comments?post_id=<id>: List comments for a specific blog post. ### http://44.220.164.110:82/comments   (postid is required)

## Database Service

Uses PostgreSQL for data storage with separate schemas for each service to ensure separation of concerns.

# Project Requirements

## 1. Dockerization

Each service has a dedicated Dockerfile.

Multi-stage builds are used to optimize image sizes.

## 2. Service Orchestration

docker-compose.yml defines and orchestrates services.

Persistent volumes are defined for PostgreSQL data.

Services communicate over Docker networks.

## 3. AWS Deployment

EC2 instance for running Docker containers.

PostgreSQL for database management.

## 4. Environment Management

.env files manage environment variables for both local and production environments.

Deliverables

Codebase

Backend code for User, Blog, and Comment services.

Dockerfile for each service.

docker-compose.yml file for orchestration.

