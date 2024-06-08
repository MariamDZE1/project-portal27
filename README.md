# User Management Dashboard

## Introduction
This is a user management dashboard application built using Angular. The application includes functionalities for user registration, login, viewing user lists, and more.

## Features
- User registration
- User login
- View all users (only after login)
- Home page with an introduction

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Application Structure](#application-structure)
5. [Design Decisions](#design-decisions)
6. [Technologies Used](#technologies-used)
7. [Installation](#installation)
8. [Setup](#setup)
9. [Usage](#usage)
10. [Contributing](#contributing)
11. [License](#license)

## Application Structure
- `src/app/auth`: Contains components and services related to authentication (login and registration).
- `src/app/core/services`: Contains core services such as authentication service.
- `src/app/user`: Contains components related to user management (user list, user details).
- `src/app/home`: Contains the home component.
- `src/app/guards`: Contains route guards to protect routes.
- `src/app/layout`: Contains layout components such as header and footer.
- `src/assets`: Contains static assets such as images and styles.

## Design Decisions
- **Authentication Guard**: Used to protect routes and ensure that only authenticated users can access certain pages.
- **Local Storage**: Used for storing user data and authentication state.
- **Responsive Design**: The application is designed to be responsive and works well on different screen sizes.

## Technologies Used
- Angular
- Bootstrap
- RxJS
- TypeScript

## Features
- User registration
- User login
- View all users (only after login)
- Home page with an introduction

## Prerequisites
- Node.js v14
- Angular CLI

## Application Structure
src/app/auth: Contains components and services related to authentication (login and registration).
src/app/core/services: Contains core services such as authentication service.
src/app/user: Contains components related to user management (user list, user details).
src/app/home: Contains the home component.
src/app/guards: Contains route guards to protect routes.
src/app/layout: Contains layout components such as header and footer.
src/assets: Contains static assets such as images and styles.


## Installation

### Clone the repository
```bash
git clone https://github.com/MariamDZE1/UserManagementDashboard.git

# Install dependencies
npm install

# Start the application
ng serve


##Usage
##Registration:

Navigate to the registration page and fill in the required details to register a new user.
Login:

Use the login page to authenticate using the registered email and password.
Use the default admin credentials (email: mariami@gmail.com, password: 1234567) for the first login.
User Management:

After logging in, navigate to the user list to view all registered users.
Use the edit feature to modify user details and save the changes to local storage."Update check" 
