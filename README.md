🏥 Doctor Appointment Booking System

🚀 A full-stack web application that enables users to book doctor appointments online, manage schedules, and streamline healthcare interactions with secure authentication and real-time booking features.

🚀 Live Demo  

🔗 **User Panel:**  
👉 https://prescripto-ashen.vercel.app/  

🔗 **Admin Panel:**  
👉 https://prescripto-n1hz.vercel.app/  

⚙️ **Backend API:**  
👉 https://prescripto-7ms9.onrender.com  

🎥 **Demo Video:**  
👉 https://your-demo-video-link.com  


🧠 Overview

The Doctor Appointment Booking System is designed to simplify the process of scheduling medical appointments by providing a seamless and user-friendly platform for patients, doctors, and administrators.

It demonstrates the implementation of a scalable MERN stack application with role-based access control, real-time data handling, and secure payment integration.

✨ Key Features

👤 Role-Based Access Control

    Patients: Book & manage appointments
    
    Doctors: Manage availability & profiles
    
    Admin: Monitor and control system

🔐 Secure Authentication

    User login/signup with protected routes

📅 Real-Time Appointment Booking

    Book, reschedule, and cancel appointments

💳 Online Payment Integration

    Integrated with Stripe/PayPal for secure transactions

🧾 Doctor Profile Management

    Doctors can update availability, specialization, and details

📱 Responsive UI

    Works seamlessly across devices

## 📸 Screenshots  

<h3>🏠 Homepage</h3>
<!-- <p align="center">
  <img src="./assets/home.png" width="700"/>
</p> -->
<img width="1906" height="918" alt="Prescripto_Homepage1" src="https://github.com/user-attachments/assets/110e9077-78c2-42ca-b0c7-1134187158bf" />

<img width="1912" height="917" alt="Prescripto_Homepage2" src="https://github.com/user-attachments/assets/0c64ce30-1dca-4e3e-ae68-7ffe95a390bd" />

<img width="1912" height="907" alt="Prescripto_Homepage3" src="https://github.com/user-attachments/assets/44bf6263-7d69-4428-9f32-8592e3097c7f" />


<h3>📊 Dashboard</h3>
<!-- <p align="center">
  <img src="./assets/dashboard.png" width="700"/>
</p> -->
<img width="1907" height="912" alt="Prescripto_Dashboard1" src="https://github.com/user-attachments/assets/fe0d72eb-5cab-4a7d-8541-4b52f499b08d" />

<img width="1911" height="912" alt="Prescripto_Dashboard2" src="https://github.com/user-attachments/assets/57b48a96-66bc-4b68-b434-e36daec35e35" />

<img width="1907" height="911" alt="Prescripto_Dashboard3" src="https://github.com/user-attachments/assets/fbeb7f53-46f7-46c0-bd22-ebaf33c132bc" />

<img width="1906" height="910" alt="Prescripto_Dashboard4" src="https://github.com/user-attachments/assets/f991bd55-9db0-44d4-8341-fa7aba67b16b" />

<h3>📅 Booking Page</h3>
<!-- <p align="center">
  <img src="./assets/booking.png" width="700"/>
</p> -->
<img width="1905" height="915" alt="Prescripto_Appointment_Page" src="https://github.com/user-attachments/assets/cdd7d864-2683-48bb-8510-71e634e031bf" />

<img width="1908" height="915" alt="Prescripto_Doctors_Page" src="https://github.com/user-attachments/assets/a9430269-1239-4e90-bae9-93c04cd8409a" />


## 🎥 Demo  

![Demo](./assets/demo.gif)


🛠️ Tech Stack

  👨‍💻 Frontend
      
    React.js
      
    HTML, CSS, JavaScript
      
    Bootstrap / Tailwind CSS
      
    ⚙️ Backend
      
    Node.js
      
    Express.js
      
    🗄️ Database
      
    MongoDB Atlas (Cloud Database)

    ☁️ Cloud Services  
    - Cloudinary (Image Storage)  
    - Razorpay (Payment Gateway)
      
    🔗 Other Tools & Services
      
    REST APIs
    
    Git & GitHub

🧩 System Architecture

    User (Patient / Doctor / Admin)
            ↓
    Frontend (React.js)
            ↓
    Backend API (Node.js / Express)
            ↓
    Database (MongoDB)
            ↓
    Response → UI
⚙️ How It Works

    User registers and logs into the system
    
    Patients browse available doctors and select a time slot
    
    Appointment request is sent to backend API
    
    Payment is processed securely (if applicable)
    
    Appointment is confirmed and stored in database
    
    Doctors and users can manage appointments via dashboard


📈 Concepts Demonstrated

    Full Stack Development (MERN)
    
    REST API Design
    
    Authentication & Authorization
    
    Database Design & CRUD Operations
    
    Payment Gateway Integration
    
    Responsive UI/UX Design

🎯 Impact

Simplifies appointment booking process

Reduces manual scheduling effort

Provides a scalable healthcare solution

Demonstrates real-world full-stack system design


🔧 Installation & Setup

    1️⃣ Clone Repository
    git clone https://github.com/your-username/doctor-appointment-system.git
    cd doctor-appointment-system
    
    2️⃣ Install Dependencies
        Backend
            cd backend
            npm install
        Frontend
            cd ../frontend
            npm install
        Admin Panel
            cd ../admin
            npm install
            
     3️⃣ Environment Variables
     
        📌 Backend .env
            PORT=xxxx
            MONGO_URI=your_mongodb_atlas_connection_string
            JWT_SECRET=your_secret_key
        
            CLOUDINARY_NAME=your_cloudinary_name
            CLOUDINARY_API_KEY=your_api_key
            CLOUDINARY_SECRET_KEY=your_secret_key
            
            RAZORPAY_KEY_ID=your_key
            RAZORPAY_KEY_SECRET=your_secret
        
        📌 Frontend .env
            VITE_BACKEND_URL=http://localhost:xxxx
            RAZORPAY_KEY_ID=your_key
            
        📌 Admin .env
            VITE_BACKEND_URL=http://localhost:xxxx
        
    4️⃣ Run Application
    
        Start Backend
            cd backend
            npm run server
            
        Start Frontend
            cd frontend
            npm run dev
            
        Start Admin Panel
            cd admin
            npm run dev
            
🌐 Access the Application

    User Panel → http://localhost:xxxx
    
    Admin Panel → http://localhost:xxxx
    
    Backend API → http://localhost:xxxx

🚀 Deployment

🌐 Platforms Used

    Frontend & Admin: Vercel
    
    Backend: Render
    
    Database: MongoDB Atlas
    
    Image Storage: Cloudinary

⚠️ Notes

    Backend may take time to start (Render free tier)
    
    Ensure correct API URLs in frontend

📈 Concepts Demonstrated

    Full Stack Development (MERN)
    
    REST API Design
    
    Authentication & Authorization
    
    Database Design & CRUD Operations
    
    Payment Gateway Integration
    
    Cloud Services Integration

🎯 Impact

    Simplifies healthcare appointment booking
    
    Reduces manual scheduling
    
    Demonstrates real-world scalable system

🚀 Future Enhancements

    📱 Mobile app integration
    
    🤖 AI-based doctor recommendation
    
    📊 Analytics dashboard
    
    📅 Calendar integration

👨‍💻 Author

Shivkumar Rajawat
📧 shiva18021912@gmail.com

🔗 GitHub: https://github.com/your-username

🔗 LinkedIn: https://www.linkedin.com/in/shiva-rajawat/

📜 License

This project is licensed under the MIT License.


---



