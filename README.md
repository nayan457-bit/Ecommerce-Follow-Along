
# E-Commerce Application (MERN Stack)

This project aims to develop a scalable and user-friendly e-commerce platform leveraging the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application will support essential e-commerce features such as user authentication, product browsing, search and filtering, shopping cart functionality, secure checkout, and an admin dashboard for product and order management. 

*Key Objectives*:
1. *Backend*: Build a RESTful API with Node.js and Express.js to handle business logic, data management, and integration with third-party services such as payment gateways.
2. *Frontend*: Develop a responsive and intuitive UI using React.js, focusing on seamless user experience across devices.
3. *Database*: Utilize MongoDB for managing product catalogs, user profiles, orders, and other relevant data.
4. *Authentication*: Implement secure user authentication using JWT (JSON Web Tokens) and role-based access for customers and administrators.
5. *Deployment*: Ensure the application is production-ready with hosting solutions like AWS, Heroku, or Vercel for the backend and frontend.

*Planned Features*:
- User registration and login
- Product catalog with dynamic filtering and sorting
- Real-time shopping cart
- Admin panel for managing inventory, orders, and user accounts
- Order tracking and notifications

*Development Workflow*:
- Agile methodology with iterative sprints
- Version control using GitHub
- Code quality and testing ensured through linting and unit/integration testing

Milestone 1: Project Overview

The first milestone focuses on laying the foundation for the e-commerce application. This includes setting up the development environment, creating the project structure, and ensuring basic functionality for the backend and frontend.

 Key Deliverables:
1. Requirement Analysis: Define core features like authentication, product catalog, and cart system.
2. Environment Setup: Initialize backend (Node.js/Express) and frontend (React.js) repositories, configure dependencies, and set up Git.
3. Backend: Create a basic Express server, connect to MongoDB, and set up a RESTful API structure.
4. Frontend: Set up a React app with routing and basic UI styling.
5. Documentation: Provide a README with project goals and setup instructions.

 Success Criteria:
- Functional backend connected to MongoDB.
- Basic frontend with routing and design.
- Initial deployment for testing. 

This milestone ensures a solid starting point for feature development.


milestone 21#

This project implements an address form page for a user profile. The form captures and stores the user's address input.

Features

Navigation from profile to address form page.

State management for address input.


milestone #24

This milestone involves adding essential features for the order placement process. It includes creating a "Place Order" button in the cart page, developing a "Select Address" page to choose a delivery address, and setting up a Mongoose schema to store order details. Additionally, a backend endpoint will be implemented to fetch user addresses. By the end of this milestone, the core functionality for placing an order will be in place.



Milestone 20 In Milestone 20, we focused on developing a system to fetch and display user profile data. First, we created the /profile API endpoint, which retrieves user details from the server and stores them in an object. Next, we built the Profile.jsx React component, which fetches the user data from the /profile endpoint and displays it in a clean, user-friendly format on the frontend. This milestone enables users to view their profile information directly in the application.



Milestone 25 - Place Order Endpoint
Objective:
Create a backend endpoint to place an order.
Steps:
Create an endpoint to receive product, user, and address details.
Retrieve user _id using the user’s email.
Create separate orders for each product with the same address.
Store order details in the MongoDB order collection using the order schema.

Milestone 26 - Get User Orders Endpoint
Objective:
Create a backend endpoint to get all orders of a user.
Steps:
Create an endpoint to receive the user’s email.
Retrieve user _id using the email.
Use the _id to fetch all orders of that user.
Send all user orders in the response.

