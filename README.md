# 🏥 Prescripto — Doctor Appointment Booking System

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active_Development-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/Stack-MERN-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Deployment-Vercel_%7C_Render-purple?style=flat-square" />
  <img src="https://img.shields.io/badge/Docker-Planned-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/Testing-Planned-orange?style=flat-square" />
</p>

> **Prescripto** is a full-stack healthcare appointment management application built using the **MERN stack (MongoDB, Express.js, React.js, and Node.js)**.
>
> The platform simplifies doctor discovery, appointment scheduling, and healthcare management through dedicated interfaces for patients, doctors, and administrators.
>
> The application integrates authentication, REST APIs, cloud-based image storage, appointment management, and online payment functionality.

---

## 📑 Table of Contents

- [Features](#-features)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [System Architecture](#-system-architecture)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Local Development](#-local-development)
- [Docker Setup](#-docker-setup)
- [Available Scripts](#-available-scripts)
- [Testing](#-testing)
- [API Documentation](#-api-documentation)
- [Application Workflow](#-application-workflow)
- [Screenshots](#-screenshots)
- [Deployment](#-deployment)
- [Security Considerations](#-security-considerations)
- [Concepts Demonstrated](#-concepts-demonstrated)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)

---

## ✨ Features

Prescripto provides healthcare appointment management through patient, doctor, and administrator interfaces.

| Feature | Description |
|---|---|
| 🔐 **Authentication** | User registration, login, and protected application functionality |
| 👨‍⚕️ **Doctor Discovery** | Browse doctors and filter them by medical specialization |
| 📅 **Appointment Booking** | Select doctors and book available appointment slots |
| 🗓️ **Appointment Management** | View and cancel appointments |
| 👤 **Patient Profile** | Manage personal information and profile details |
| 🩺 **Doctor Management** | Manage doctor profiles, availability, and appointment information |
| 🛡️ **Admin Dashboard** | Administrative interface for managing doctors and appointments |
| 💳 **Payment Integration** | Razorpay integration for online payment processing |
| ☁️ **Image Management** | Cloudinary integration for image storage |
| 📱 **Responsive Design** | User interface designed for desktop, tablet, and mobile devices |
| 🌐 **REST API Integration** | Communication between React applications and the Express backend |
| 🗄️ **Database Management** | MongoDB-based storage for users, doctors, and appointments |

### 👤 Patient Features

- Register and log in.
- Browse available doctors.
- Filter doctors by specialization.
- View doctor profiles.
- Select appointment dates and time slots.
- Book appointments.
- View and cancel appointments.
- Manage personal profile information.

### 👨‍⚕️ Doctor Features

- Access doctor-related dashboard functionality.
- View appointment information.
- Manage professional profile information.
- Manage availability.
- Update appointment-related information.

### 🛡️ Administrator Features

- Access the admin dashboard.
- Manage doctor profiles.
- View appointment information.
- Perform administrative operations.
- Monitor application-related records.

---

## 🚀 Live Demo

Prescripto is deployed using **Vercel** and **Render**.

| Application | Live URL |
|---|---|
| 👤 **Patient Portal** | https://prescripto-ashen.vercel.app/ |
| 🛡️ **Admin Panel** | https://prescripto-n1hz.vercel.app/ |
| ⚙️ **Backend API** | https://prescripto-7ms9.onrender.com |

**Note:** The backend may take additional time to respond after inactivity when hosted on a free-tier service.

---

## 🛠️ Tech Stack

Prescripto follows a MERN-stack architecture with separate frontend applications and a centralized backend.

### Frontend

| Technology | Purpose |
|---|---|
| React.js | Component-based user interface |
| Vite | Development server and production bundler |
| JavaScript | Application logic |
| HTML5 | Page structure |
| CSS3 | Styling |
| Tailwind CSS | Utility-first styling |
| React Router DOM | Client-side routing |
| Axios | HTTP requests and API communication |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | REST API framework |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling |
| JSON Web Tokens | Token-based authentication |
| Cloudinary | Cloud image storage |
| Razorpay | Payment gateway integration |

### Development and Deployment

| Technology | Purpose |
|---|---|
| Git | Version control |
| GitHub | Source code management |
| npm | Package management |
| Vercel | Frontend and admin hosting |
| Render | Backend hosting |
| MongoDB Atlas | Cloud database |

### Planned Development Tools

| Technology | Purpose | Status |
|---|---|---|
| Docker | Application containerization | 🚧 Planned |
| Docker Compose | Multi-container orchestration | 🚧 Planned |
| Nginx | Serving production frontend builds | 🚧 Planned |
| Jest | Unit testing | 🚧 Planned |
| React Testing Library | React component testing | 🚧 Planned |
| Supertest | Backend API integration testing | 🚧 Planned |
| Playwright | End-to-end testing | 🚧 Planned |
| Swagger UI | Interactive API documentation | 🚧 Planned |
| OpenAPI | API specification | 🚧 Planned |
| GitHub Actions | CI/CD automation | 🚧 Planned |

---

## 📁 Project Structure

The application is organized into three primary services: frontend, admin, and backend.

```text
Prescripto/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

### Planned Project Structure

The following files and directories will be introduced as Docker, testing, and API documentation are implemented.

```text
Prescripto/
│
├── frontend/
│   ├── Dockerfile
│   ├── .dockerignore
│   └── src/
│       └── __tests__/
│
├── admin/
│   ├── Dockerfile
│   ├── .dockerignore
│   └── src/
│       └── __tests__/
│
├── backend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── tests/
│   │   ├── unit/
│   │   └── integration/
│   └── docs/
│       └── openapi.yaml
│
├── e2e/
│   └── appointment.spec.js
│
├── docs/
│   └── postman/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── docker-compose.yml
└── README.md
```

> **Note:** The first structure is an overview of the existing application organization and should be checked against the repository. The second structure represents planned additions, not files that are currently available.

---

## 🏗️ System Architecture

Prescripto uses a client-server architecture.

```text
                   ┌───────────────────────┐
                   │         Users         │
                   │ Patients / Doctors /  │
                   │     Administrators    │
                   └───────────┬───────────┘
                               │
                               ▼
                   ┌───────────────────────┐
                   │    React Frontends    │
                   │    Patient / Admin    │
                   │         (Vite)        │
                   └───────────┬───────────┘
                               │
                          HTTP / REST
                               │
                               ▼
                   ┌───────────────────────┐
                   │     Express.js API    │
                   │        Node.js        │
                   └───────────┬───────────┘
                               │
                  ┌────────────┼────────────┐
                  │            │            │
                  ▼            ▼            ▼
            ┌──────────┐ ┌──────────┐ ┌──────────┐
            │ MongoDB  │ │Cloudinary│ │ Razorpay │
            │  Atlas   │ │  Images  │ │ Payments │
            └──────────┘ └──────────┘ └──────────┘
```

### Architecture Overview

**Frontend Layer**

The React applications handle user interactions, navigation, forms, and communication with the backend.

**Backend Layer**

The Node.js and Express backend processes requests, implements business logic, manages authentication, and interacts with external services.

**Database Layer**

MongoDB stores application data, including patient, doctor, and appointment records.

**External Services**

Cloudinary manages image storage, while Razorpay supports online payment processing.

---

## 🚀 Getting Started

Follow these instructions to set up Prescripto locally.

### Prerequisites

Ensure the following are installed or configured:

- Node.js 18 or later
- npm
- Git
- MongoDB Atlas account
- Cloudinary account
- Razorpay account for payment integration

### 1. Clone the Repository

```bash
git clone https://github.com/rajawatshivpratap46/prescripto.git

cd prescripto
```

### 2. Install Backend Dependencies

```bash
cd backend

npm install
```

### 3. Install Frontend Dependencies

Open a new terminal in the project root:

```bash
cd frontend

npm install
```

### 4. Install Admin Dependencies

Open another terminal in the project root:

```bash
cd admin

npm install
```

---

## 🔐 Environment Variables

Environment variables are used to configure application settings and external service connections.

Create separate `.env` files for each application.

### Backend Environment Variables

Create `backend/.env`:

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

### Frontend Environment Variables

Create `frontend/.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

### Admin Environment Variables

Create `admin/.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

**Important:** These are example configurations. Environment variable names must match those referenced in the source code.

### Security Recommendations

Never commit sensitive environment variables to version control.

Add the following entries to `.gitignore`:

```gitignore
node_modules/
dist/
build/

.env
.env.*
!.env.example

*.log
```

Keep MongoDB credentials, JWT secrets, Cloudinary secrets, and Razorpay secret keys on the backend.

Only expose values through `VITE_` environment variables when they are intended to be publicly accessible in the browser.

---

## 💻 Local Development

Run the backend, patient frontend, and admin panel in separate terminals.

### Start Backend

```bash
cd backend

npm run server
```

### Start Patient Frontend

```bash
cd frontend

npm run dev
```

### Start Admin Panel

```bash
cd admin

npm run dev
```

### Access the Application

Vite typically starts on port `5173`, but the exact port depends on configuration and availability.

Check the terminal output for the local frontend and admin URLs.

The backend port is determined by the `PORT` environment variable.

---

## 🐳 Docker Setup

**Status: 🚧 Planned — Not Yet Implemented**

Docker support is planned to simplify development, deployment, and environment consistency.

### Planned Docker Architecture

| Service | Technology | Purpose |
|---|---|---|
| Frontend | React + Nginx | Serve the patient application |
| Admin | React + Nginx | Serve the administration panel |
| Backend | Node.js + Express | Handle API requests |
| Database | MongoDB Atlas | External cloud database |

### Proposed Docker Files

```text
Prescripto/
│
├── frontend/
│   ├── Dockerfile
│   └── .dockerignore
│
├── admin/
│   ├── Dockerfile
│   └── .dockerignore
│
├── backend/
│   ├── Dockerfile
│   └── .dockerignore
│
├── docker-compose.yml
└── README.md
```

### Planned Docker Commands

Once the Docker configuration is implemented, the following commands will be supported.

**Build and start containers:**

```bash
docker compose up --build
```

**Run containers in detached mode:**

```bash
docker compose up -d --build
```

**View container logs:**

```bash
docker compose logs -f
```

**Stop containers:**

```bash
docker compose down
```

**Rebuild images without using the build cache:**

```bash
docker compose build --no-cache
```

### Planned Docker Features

- Multi-stage Docker builds.
- Nginx configuration for React applications.
- Containerized Express backend.
- Docker Compose orchestration.
- Environment-based configuration.
- Health checks.
- Container restart policies.
- Optimized production images.

> **Note:** Dockerfiles and Docker Compose configuration are planned. These commands will not work until the required files are implemented.

---

## 📜 Available Scripts

### Frontend and Admin

| Command | Description |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start Vite development server |
| `npm run build` | Generate production build |
| `npm run preview` | Preview production build, if configured |

### Backend

| Command | Description |
|---|---|
| `npm install` | Install backend dependencies |
| `npm run server` | Start backend development server |

The exact scripts available are defined in each application's `package.json`.

### Planned Scripts

The following scripts may be introduced in future development:

| Command | Description | Status |
|---|---|---|
| `npm test` | Run automated tests | 🚧 Planned |
| `npm run test:coverage` | Generate test coverage report | 🚧 Planned |
| `npm run test:integration` | Run backend integration tests | 🚧 Planned |
| `npm run lint` | Run configured linting checks | 🚧 Planned |
| `npm run format` | Format code using Prettier | 🚧 Planned |

---

## 🧪 Testing

**Status: 🚧 Planned — Automated Testing Not Yet Configured**

Automated testing is planned to improve application reliability, detect regressions, and validate critical appointment management workflows.

### Planned Testing Stack

| Technology | Purpose |
|---|---|
| Jest | Unit testing |
| React Testing Library | React component testing |
| Supertest | Backend API integration testing |
| MongoDB Memory Server | Isolated database testing |
| Playwright | End-to-end browser testing |

### Testing Strategy

#### 1. Unit Testing

Unit tests will validate individual functions and components.

Planned coverage:

- Input validation.
- Date formatting.
- Appointment slot calculations.
- Authentication utilities.
- React component rendering.

#### 2. Integration Testing

Integration tests will validate interactions between application components.

Planned scenarios:

- User registration.
- User login.
- Doctor retrieval.
- Appointment creation.
- Appointment cancellation.
- Authorization checks.
- Payment verification logic.

#### 3. End-to-End Testing

End-to-end tests will simulate complete user workflows.

Example:

```text
User opens application
        ↓
User logs in
        ↓
User searches for doctors
        ↓
User selects a doctor
        ↓
User selects an appointment slot
        ↓
User confirms appointment
        ↓
User views appointment details
```

#### 4. API Testing

API tests will verify:

- HTTP response status codes.
- Request validation.
- Authentication and authorization.
- Response structure.
- Error handling.
- Database operations.

### Planned Testing Structure

```text
Prescripto/
│
├── frontend/
│   └── src/
│       └── __tests__/
│           ├── components/
│           └── pages/
│
├── admin/
│   └── src/
│       └── __tests__/
│
├── backend/
│   └── tests/
│       ├── unit/
│       └── integration/
│
└── e2e/
    ├── authentication.spec.js
    └── appointment.spec.js
```

### Planned Testing Commands

After installing and configuring the required testing tools:

**Run unit tests:**

```bash
npm test
```

**Generate coverage reports:**

```bash
npm run test:coverage
```

**Run integration tests:**

```bash
npm run test:integration
```

**Run end-to-end tests:**

```bash
npx playwright test
```

These commands are proposed conventions and will require the appropriate configuration and dependencies.

### Testing Objectives

- Detect bugs before deployment.
- Prevent regressions.
- Validate appointment booking workflows.
- Verify authentication and authorization.
- Improve reliability.
- Support safer application updates.

> **Note:** Automated test coverage has not yet been established. Coverage metrics will be published after implementing the testing framework.

---

## 📚 API Documentation

**Status: 🚧 Planned — Formal Documentation Not Yet Implemented**

Prescripto uses REST APIs for communication between React applications and the Express backend.

Formal documentation using **OpenAPI 3.x and Swagger UI** is planned.

### API Base URLs

**Local Development:**

```text
http://localhost:4000
```

**Production:**

```text
https://prescripto-7ms9.onrender.com
```

The local URL assumes the backend is configured to use port `4000`.

### API Categories

| API Category | Purpose |
|---|---|
| Authentication | Registration, login, and authentication |
| Users | Patient profile management |
| Doctors | Doctor profiles and availability |
| Appointments | Appointment booking and cancellation |
| Admin | Administrative operations |
| Payments | Payment processing and verification |

### Example API Endpoint Structure

The following endpoints demonstrate a proposed API documentation format.

**The routes below are examples and must be verified against the backend source code before being treated as implemented endpoints.**

| Method | Endpoint | Description | Authentication |
|---|---|---|---|
| POST | `/api/user/register` | Register a new user | No |
| POST | `/api/user/login` | Authenticate a user | No |
| GET | `/api/doctor/list` | Retrieve doctors | No |
| GET | `/api/user/profile` | Retrieve user profile | Yes |
| POST | `/api/user/book-appointment` | Book an appointment | Yes |
| POST | `/api/user/cancel-appointment` | Cancel an appointment | Yes |
| GET | `/api/admin/appointments` | Retrieve appointment records | Admin |

### Example API Request

**Register User**

```http
POST /api/user/register
Content-Type: application/json
```

Example request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "example-password"
}
```

### Example API Response

Illustrative successful response:

```json
{
  "success": true,
  "message": "User registered successfully"
}
```

Actual response fields and status codes will be documented after verifying the backend implementation.

### Planned API Documentation Tools

| Tool | Purpose |
|---|---|
| OpenAPI 3.x | Standardized API specifications |
| Swagger UI | Interactive API documentation |
| Postman | API testing and request collections |

### Proposed Documentation Structure

```text
Prescripto/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   └── docs/
│       └── openapi.yaml
│
├── docs/
│   ├── api/
│   │   └── README.md
│   └── postman/
│       └── Prescripto.postman_collection.json
│
└── README.md
```

### Planned Swagger Documentation

After implementation, interactive API documentation may be accessible at:

```text
http://localhost:4000/api-docs
```

The final endpoint will depend on the Swagger configuration.

### Planned Documentation Coverage

- API endpoints and HTTP methods.
- Request parameters.
- Request and response schemas.
- Authentication requirements.
- Authorization rules.
- HTTP status codes.
- Error responses.
- Payment integration workflows.
- Pagination and filtering, where supported.

> **Note:** Swagger UI and OpenAPI documentation are planned features. The documentation URL will become available after integration.

---

## ⚙️ Application Workflow

### 1. User Authentication

Users register or log in through the application.

The frontend sends authentication requests to the backend.

The backend validates credentials and manages authenticated access.

### 2. Doctor Discovery

Patients browse doctors and filter them by specialization.

They can view doctor profiles and available appointment information.

### 3. Appointment Booking

Patients select a doctor and an available appointment slot.

The frontend sends the appointment request to the backend.

The backend processes the booking and stores appointment information in MongoDB.

### 4. Payment Processing

When online payment is required, the application uses Razorpay.

Payment-related requests are coordinated through the backend.

### 5. Appointment Management

Patients can view and manage their appointments.

Doctors and administrators access appointment-related information through their respective interfaces.

---

## 📸 Screenshots

### 🏠 Homepage

<img width="1906" height="918" alt="Prescripto Homepage 1" src="https://github.com/user-attachments/assets/110e9077-78c2-42ca-b0c7-1134187158bf" />

<img width="1912" height="917" alt="Prescripto Homepage 2" src="https://github.com/user-attachments/assets/0c64ce30-1dca-4e3e-ae68-7ffe95a390bd" />

<img width="1912" height="907" alt="Prescripto Homepage 3" src="https://github.com/user-attachments/assets/44bf6263-7d69-4428-9f32-8592e3097c7f" />

### 📊 Admin Dashboard

<img width="1907" height="912" alt="Prescripto Dashboard 1" src="https://github.com/user-attachments/assets/feb0d72eb-5cab-4a7d-8541-4b52f499b08d" />

<img width="1911" height="912" alt="Prescripto Dashboard 2" src="https://github.com/user-attachments/assets/57b48a96-66bc-4b68-b434-e36daec35e35" />

<img width="1907" height="911" alt="Prescripto Dashboard 3" src="https://github.com/user-attachments/assets/fbeb7f53-46f7-46c0-bd22-ebaf33c132bc" />

<img width="1906" height="910" alt="Prescripto Dashboard 4" src="https://github.com/user-attachments/assets/f991bd55-9db0-44d4-8341-fa7aba67b16b" />

### 📅 Appointment Booking

<img width="1905" height="915" alt="Prescripto Appointment Booking" src="https://github.com/user-attachments/assets/cdd7d864-2683-48bb-8510-71e634e031bf" />

### 👨‍⚕️ Doctors Page

<img width="1908" height="915" alt="Prescripto Doctors Page" src="https://github.com/user-attachments/assets/a9430269-1239-4e90-bae9-93c04cd8409a" />

---

## ☁️ Deployment

Prescripto is deployed using cloud hosting services.

| Component | Platform |
|---|---|
| Patient Frontend | Vercel |
| Admin Dashboard | Vercel |
| Backend REST API | Render |
| Database | MongoDB Atlas |
| Image Storage | Cloudinary |

### Production Build

Generate the frontend production build:

```bash
cd frontend

npm run build
```

Generate the admin production build:

```bash
cd admin

npm run build
```

Vite generates optimized production assets inside the `dist` directory.

### Deployment Checklist

Before deploying application updates:

1. Configure production environment variables.
2. Verify backend connectivity.
3. Verify MongoDB connectivity.
4. Configure allowed frontend origins.
5. Test authentication.
6. Test appointment booking.
7. Verify payment workflows.
8. Confirm frontend routing works after page refresh.
9. Verify the application on mobile devices.

### Planned CI/CD Integration

**Status: 🚧 Planned**

GitHub Actions will be considered for automating:

- Dependency installation.
- Code quality checks.
- Automated tests.
- Production builds.
- Deployment validation.

---

## 🔒 Security Considerations

Prescripto uses authentication and backend API functionality to manage access to healthcare appointment information.

Important security practices include:

- Protecting authenticated routes.
- Validating input on the backend.
- Keeping sensitive credentials in environment variables.
- Restricting administrative functionality.
- Verifying payment status on the backend.
- Configuring appropriate CORS policies.
- Using HTTPS in production.
- Avoiding sensitive information in logs.
- Reviewing dependencies for known vulnerabilities.

**Note:** These are security considerations and recommendations. They do not imply that the application has undergone a formal security audit.

---

## 📈 Concepts Demonstrated

Prescripto demonstrates practical experience with:

- MERN stack development.
- React component architecture.
- REST API integration.
- Authentication and authorization.
- MongoDB data modeling.
- CRUD operations.
- Appointment booking workflows.
- Payment gateway integration.
- Cloud-based image storage.
- Responsive UI development.
- Environment configuration.
- Git and GitHub workflows.
- Cloud deployment.

---

## 🚀 Future Enhancements

The following improvements are planned or proposed for future development.

| Enhancement | Description | Status |
|---|---|---|
| 🐳 Docker Containerization | Containerize frontend, admin, and backend | 🚧 Planned |
| 🧪 Automated Testing | Implement unit, integration, and E2E tests | 🚧 Planned |
| 📚 API Documentation | Introduce Swagger/OpenAPI documentation | 🚧 Planned |
| ⚙️ CI/CD Pipeline | Automate testing and deployment using GitHub Actions | 🚧 Planned |
| 📱 Mobile Application | Extend the platform to Android and iOS | 💡 Proposed |
| 🤖 AI Doctor Recommendations | Recommend doctors based on patient requirements | 💡 Proposed |
| 📊 Analytics Dashboard | Introduce appointment and usage analytics | 💡 Proposed |
| 📅 Calendar Integration | Synchronize appointments with external calendars | 💡 Proposed |
| 🔔 Appointment Reminders | Implement email and SMS reminders | 💡 Proposed |
| 📹 Video Consultations | Introduce remote doctor-patient consultations | 💡 Proposed |
| ⚡ Performance Optimization | Improve frontend loading and runtime performance | 🔄 Ongoing |

---

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome, subject to repository permissions.

### Development Workflow

1. Fork the repository or obtain contributor access.
2. Create a feature branch.

```bash
git checkout -b feature/feature-name
```

3. Implement the changes.
4. Test the affected functionality.
5. Commit your changes.

```bash
git add .

git commit -m "feat: describe your change"
```

6. Push your branch.

```bash
git push origin feature/feature-name
```

7. Open a pull request describing the changes.

### Commit Message Conventions

Use descriptive commit messages.

Examples:

```bash
feat: implement appointment booking

fix: resolve appointment cancellation issue

refactor: improve authentication logic

style: improve responsive dashboard layout

docs: update project documentation

test: add authentication unit tests

chore: configure docker environment
```

---

## 👨‍💻 Author

**Shivkumar Rajawat**

Full Stack Developer | MERN Stack

📧 **Email:** shiva18021912@gmail.com

**GitHub:** https://github.com/rajawatshivpratap46

**LinkedIn:** https://www.linkedin.com/in/shiva-rajawat/

---

## 📄 License

This project is described as MIT licensed.

Ensure that a corresponding `LICENSE` file is included in the repository before publishing the license as official.

---

<p align="center">
  Developed by <strong>Shivkumar Rajawat</strong>
</p>

<p align="center">
  Built using React, Node.js, Express.js, and MongoDB.
</p>
