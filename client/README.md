## Trial View

For usage example please use credentials below.

User3@gmail.com
Password: 123

## Server Libraries & Dependencies:

### Backend (Node.js/Express):
express: A minimal and flexible Node.js web application framework that simplifies the creation of web servers.

mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a schema-based solution to model application data.

bcryptjs: A library for hashing passwords. It's used for securely storing user passwords by hashing them before storing in the database.

jsonwebtoken (jwt): A library for creating and verifying JSON Web Tokens. It's commonly used for user authentication and authorization.
cookie-parser: A middleware for parsing cookies in incoming HTTP requests.

dotenv: A zero-dependency module that loads environment variables from a .env file into process.env.

### Frontend (React):
react: A JavaScript library for building user interfaces. It allows developers to create reusable UI components.

redux: A predictable state container for JavaScript applications. It helps manage the state of the application in a predictable way.

### Database:
MongoDB: A NoSQL database that stores data in flexible, JSON-like documents. It is used with Mongoose to model and interact with data.

### Authentication:
JSON Web Tokens (JWT): Used for user authentication. Tokens are generated during the sign-in process and sent to the client for subsequent authenticated requests.

### Firebase (Frontend):
firebase: A comprehensive platform provided by Google for building mobile and web applications. In this case, it's used for storage (Firebase Storage).

### Styling:
Tailwind CSS: A utility-first CSS framework that provides low-level utility classes to build designs directly in your markup.

### Additional Utility:
redux-thunk: A middleware for Redux that allows you to write action creators that return a function instead of an action. It's often used for asynchronous logic.

### DevOps:
dotenv: Also used in the backend, it's a library to load environment variables from a .env file.
nodemon: A utility that monitors for changes in the source code and automatically restarts the server.

## Project Management:

**Project Overview:**

The goal of this project is to develop a comprehensive calendar application with user authentication, profile management, and robust calendar functionalities. The project was divided into 6 stages to facilitate a systematic and organised development process.

As the company was stretched thin, there was only 1 available developer to work on this project. The project was broken down into bite size pieces to ensure a progresive and cohesive work flow.

### Stage 1: Set up front and back-end frameworks
Objective: Establish the foundational structure for the application.

**Tasks:**
Choose and set up the front-end framework (e.g., React).
Select and configure the back-end framework (e.g., Express.js).
Set up version control and project repository.
Establish basic project structure and file organization.

### Stage 2: Login/authentication functionality
Objective: Implement secure user authentication for the application.

**Tasks:**
Develop user registration functionality.
Implement user login and logout features.
Integrate secure authentication mechanisms (e.g., JWT).
Ensure password encryption and security best practices.

### Stage 3: Profile CRUDS functionality
Objective: Enable users to create, read, update, and delete profiles.

**Tasks:**
Implement user profile creation.
Develop profile viewing functionality.
Enable users to update their profiles.
Implement profile deletion with necessary safeguards.

### Stage 4: Calendar creation
Objective: Implement the core calendar creation functionality.

**Tasks:**
Develop a basic calendar interface.
Enable users to create new calendars.
Implement basic calendar navigation and view options.

### Stage 5: Calendar CRUDS and repeating functionality
Objective: Expand calendar functionality and introduce repeating events.

**Tasks:**
Implement CRUD operations for calendar events.
Enable users to add, view, update, and delete events.
Introduce repeating event functionality (daily, weekly, monthly).
Implement validation to ensure data consistency.

### Stage 6: Styling
Objective: Enhance the user interface and overall aesthetics of the application.

**Tasks:**
Design and implement a visually appealing user interface.
Ensure responsiveness for different screen sizes and devices.
Incorporate a consistent color scheme and typography.
Optimize the user experience through intuitive design elements.