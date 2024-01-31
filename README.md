
JWT Authentication Example Node and React App Readme

Introduction:
Welcome to the repository for the JWT authentication example Node.js and React application. This repository contains the codebase for both the backend and frontend of the application, demonstrating how to implement JSON Web Token (JWT) authentication for securing APIs.

Folder Structure:

backend: Contains the Node.js backend code responsible for handling authentication, generating JWT tokens, and serving API endpoints.
task_frontend: Houses the React frontend code, including the login page and any other components required for user interaction.
Features:

JWT Authentication: The backend Node.js server implements JWT authentication, generating tokens upon successful login and verifying tokens for subsequent requests.
Login Page: The React frontend provides a login page where users can enter their credentials to authenticate and obtain a JWT token.
Token Verification: Upon successful login, the Node.js server sets a header with the key auth-token, containing the JWT token. This token is used for subsequent requests to authenticate the user.
Token Expiry: JWT tokens have an expiry time, ensuring enhanced security by limiting the window of opportunity for unauthorized access.
Logout Functionality: When a user logs out, the headers containing the JWT token are removed, requiring the user to log in again for further API access.
