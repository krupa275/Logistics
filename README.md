#  Logistics Management System (Frontend)

A scalable logistics management system built using **React + Redux Toolkit + ShadCN UI + Tailwind CSS**.
This project covers the complete workflow from **Inquiry → Vendor → Reports → RBAC → Dashboard**.

---

# Tech Stack

- React JS (Vite)
- Redux Toolkit
- React Hook Form
- ShadCN UI
- Tailwind CSS

---

# How to Run Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

App will run on:

```
http://localhost:5173
```

---

# Default User Credentials

```
Username: admin
Password: Admin@123
```

> Authentication is handled via Redux + LocalStorage (no backend)
Screenshot:
<img width="1920" height="839" alt="image" src="https://github.com/user-attachments/assets/88692ab9-4db3-414a-8fef-7b8e23b68d3e" />

---

# Application Flow

```
Inquiry → Vendor Request → Actual Quote → Reports → Dashboard
```

---

# Modules Overview

---

##  Dashboard Module

Displays real-time summary:

- Total Inquiries
- Pending Quotes
- Approved Quotes
- Vendors Count


---

## Inquiry Module

### Create Inquiry

Fields:

- Inquiry No (Auto Generated)
- Date
- Customer Name
- From Location
- To Location
- Vehicle Type
- Material Type
- Weight
- Notes

### Inquiry List

Features:

- Search
- Pagination
- Status Filter
- Edit / Delete
- Status Update

Screenshot:
![WhatsApp Image 2026-04-09 at 12 01 30 AM (1)](https://github.com/user-attachments/assets/61ec1849-814a-41b5-94c2-6194057b5474)

---

## Vendor Module

### Vendor Quote Request

- Select Inquiry
- Add multiple vendors dynamically
- Expected Rate
- Remarks

### Convert to Actual Quote

- Click **Get Quote**
- Converts request → actual quote

### Actual Vendor Quotes

Fields:

- Vendor Name
- Quoted Amount (Editable)
- Transit Days
- Notes
- Status (Pending / Received)

 Screenshot:
![WhatsApp Image 2026-04-09 at 12 01 30 AM (2)](https://github.com/user-attachments/assets/09b3e97d-83c2-4c52-8f2d-198c699ac238)

---

##  Reports Module

### Inquiry Report

Filters:

- Search (Customer)
- Date Range
- Status

### Vendor Quote Report

Filters:

- Vendor Name
- Status

 Screenshot:
![WhatsApp Image 2026-04-09 at 12 01 45 AM](https://github.com/user-attachments/assets/33d3ab9d-9a20-4b06-9146-178d8d6c7219)

---

## RBAC Module (Role-Based Access Control)

###  User Management

- Create / Edit / Delete User
- Fields:
  - Name
  - Email
  - Username
  - Password
  - Branch
  - Active / Inactive

---

### Role Management

Create roles:

- Admin
- Manager
- Operator
- Viewer

Fields:

- Role Name
- Description

---

### User-Role Mapping

- Assign roles to users
- Select User + Select Role

---

### Branch-wise Role Access

Define permissions:

- View
- Add
- Edit
- Delete

 Screenshot:
![WhatsApp Image 2026-04-09 at 12 01 45 AM (1)](https://github.com/user-attachments/assets/bd1ce0fc-f0f6-4752-bf0e-b243e6677d75)

---

#  Folder Structure

```
src/
 ├── modules/
 │    ├── dashboard/
 │    ├── inquiry/
 │    ├── vendor/
 │    ├── reports/
 │    └── rbac/
 ├── store/
 │    └── slices/
 ├── components/ui/
 └── App.jsx
```

---

# State Management

- Managed using **Redux Toolkit**
- Persisted using **LocalStorage**
- No backend/API required

---

# Features

- Fully responsive UI
- Scalable folder architecture
- Reusable components
- Form validation (React Hook Form)
- Clean UI using ShadCN
- Real-time state updates

---

#  Important Functional Flows

### Inquiry Flow

- Create Inquiry → Manage in list → Update status

### Vendor Flow

- Add vendor requests → Convert to actual quotes → Update quote details

### Reports Flow

- Filter data → Analyze inquiries and quotes

### RBAC Flow

- Create user → Assign role → Set permissions

---




