# Mini ERP + CRM Operations Portal

## Project Overview

Mini ERP + CRM Operations Portal is a full-stack web application developed for managing business operations such as customers, products, inventory, and sales challans.

The application provides a simple internal management system for sales, warehouse, and accounts operations.

---

## Tech Stack

### Frontend
- React.js
- JavaScript
- HTML
- CSS
- Axios

### Backend
- Node.js
- Express.js
- REST APIs

### Database
- MongoDB

---

## Features Implemented

## 1. Authentication Module

- User Registration
- User Login
- Role-based user support

Supported roles:
- Admin
- Sales
- Warehouse
- Accounts

---

## 2. Customer CRM Module

Features:
- Add customer
- View customers
- Update customer details

Customer information:
- Customer name
- Mobile number
- Email
- Business name
- GST number
- Customer type
- Address
- Status
- Follow-up date
- Notes

---

## 3. Product & Inventory Module

Features:
- Add products
- View products
- Update products

Product details:
- Product name
- SKU/code
- Category
- Unit price
- Current stock
- Minimum stock quantity
- Warehouse location

---

## 4. Sales Challan Module

Features:
- Create sales challan
- Add customer details
- Add multiple products
- Generate challan number automatically
- Stock reduction after confirmation
- Prevent negative stock

---

Application Architecture

The application follows a client-server architecture.
React handles the user interface.
Express.js provides REST APIs.
MongoDB stores application data.
The frontend communicates with the backend using HTTP requests.

Known Limitations
Basic UI design
Limited validation
Advanced reporting features are not included
Deployment can be improved in future

Author
Divya
