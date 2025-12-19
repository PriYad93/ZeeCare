# Hospital Management System
 This is a Hospital Management System built using the MERN (MongoDB, Express.js, React, Node.js) stack. It consists of three main parts: Frontend, Backend, and Dashboard.

## Functions:
### Admin
 - Signup their account. Then Login (No approval Required).
 - Can register/view/approve/reject/delete doctor (approve those doctor who applied for job in 
   their hospital).
 - Can register/view/accept/reject/pending patient(See all the appointments which is 
   requested by patient)
 - Can delete their Appointment, when doctor attended their appointment.
 
### Doctor
 - Apply for job in hospital. Then Login (Approval required by hospital admin, Then only doctor 
   can login).
 - Can only view their patient details (symptoms, name, mobile ) assigned to that doctor by 
    admin.
 - Can view their Appointments, booked by admin.
   
### Patient
 - Create account for admit in hospital. Then Login (Approval required by hospital admin, Then 
   only patient can login).
 - Can view assigned doctor's details like ( specialization).
 - Can view their booked appointment status (pending/confirmed by admin).
 - Can book appointments.(approval required by admin)


 ## Dashboard Features:
  - Dashboard
  - Add Admin
  - Add Doctor
  - See all doctors
  - See all appointments
  - Manage appointments


## Backend Features:
  - Manages all frontend features

## Frontend Features:
  - Login / Register
  - Send Message to admin
  - Book appointment

## Technologies Used:
  - Frontend: React
  - Backend: Node.js, Express.js
  - Database: MongoDB
  - Deployment: Render and Netlify

