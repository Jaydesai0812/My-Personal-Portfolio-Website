# My-Personal-Portfolio-Website
# My Portfolio Website

## Overview

This is a **multi-page personal portfolio website** showcasing projects, photography, contact functionality, user reviews, authentication simulation, and website security best practices.  
It is designed to be **responsive, interactive, and user-friendly**, suitable for presentation or portfolio evaluation purposes.

---

## Features

### 1. Navigation & Multi-Page Layout
- **Multi-page structure:** Home, Projects, Photography, Contact.
- **Responsive navigation menu:**  
  - Horizontal menu on desktop  
  - Hamburger menu on mobile  
  - Dropdown submenu under "About"
- **Smooth scrolling** for internal links.

### 2. Projects & Multimedia Content
- Each project page includes:
  - Text explanations  
  - Video demonstrations (`.mp4`)  
  - Image galleries (`.jpeg`)  
  - Audio content (`.mp3`)

### 3. Forms
#### Contact Form
- Collects **name, email, and message**.
- Includes **client-side validation** with alerts.
- Prevents submission if fields are empty.
- Clears form after successful submission.

#### Review Form
- Collects **user name, rating, and comment**.
- Validates inputs and displays **inline error messages**.
- Reviews are stored in **localStorage** for demonstration.
- Reviews are **dynamically loaded** on the page without reload.

### 4. Authentication Simulation
- **User Registration**
  - Stores username, email, and password in localStorage.
  - Password validation: minimum 8 characters, must include uppercase, lowercase, number, and special character.
- **Login**
  - Validates credentials against stored data.
- **Logout**
  - Clears the user session and returns to login form.
- Provides a **welcome message** for logged-in users.

### 5. Security Features
- **Input validation & sanitization** to prevent SQL Injection and XSS attacks.
- **HTTPS (SSL/TLS)** recommended for secure data transmission.
- Example security plugin for WordPress: **Wordfence Security** for firewall, malware scanning, and login protection.

### 6. Portfolio Section
- **Masonry-style gallery** for project images.
- **Hover effects** for zoom and text overlay.
- **Responsive design** for desktop, tablet, and mobile views.
- Smooth zoom animations for interactive user experience.

---

## Technologies Used
- **HTML5** – Semantic page structure  
- **CSS3 & Flexbox/Grid** – Layout, responsive design, and styling  
- **Bootstrap 5** – Navbar, buttons, and responsive components  
- **JavaScript (ES6)** – Form validation, review system, authentication simulation, localStorage management  

---

## File Structure
