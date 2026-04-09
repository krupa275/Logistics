# 🚀 Logistics Management System (Frontend)

A scalable logistics management system built using **React + Redux Toolkit + ShadCN UI + Tailwind CSS**.
This project covers the complete workflow from **Inquiry → Vendor → Reports → RBAC → Dashboard**.

---

# 📦 Tech Stack

- React JS (Vite)
- Redux Toolkit
- React Hook Form
- ShadCN UI
- Tailwind CSS

---

# ⚙️ How to Run Project

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

# 🔐 Default User Credentials

```
Username: admin
Password: admin123
```

> Authentication is handled via Redux + LocalStorage (no backend)

---

# 🧠 Application Flow

```
Inquiry → Vendor Request → Actual Quote → Reports → Dashboard
```

---

# 🧩 Modules Overview

---

## 1️⃣ Dashboard Module

Displays real-time summary:

- Total Inquiries
- Pending Quotes
- Approved Quotes
- Vendors Count

📸 Screenshot:
https://dummy-url.com/dashboard.png

---

## 2️⃣ Inquiry Module

### ➕ Create Inquiry

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

### 📊 Inquiry List

Features:

- Search
- Pagination
- Status Filter
- Edit / Delete
- Status Update

📸 Screenshot:
https://dummy-url.com/inquiry.png

---

## 3️⃣ Vendor Module

### 📥 Vendor Quote Request

- Select Inquiry
- Add multiple vendors dynamically
- Expected Rate
- Remarks

### 🔄 Convert to Actual Quote

- Click **Get Quote**
- Converts request → actual quote

### 📊 Actual Vendor Quotes

Fields:

- Vendor Name
- Quoted Amount (Editable)
- Transit Days
- Notes
- Status (Pending / Received)

📸 Screenshot:
https://dummy-url.com/vendor.png

---

## 4️⃣ Reports Module

### 📈 Inquiry Report

Filters:

- Search (Customer)
- Date Range
- Status

### 📊 Vendor Quote Report

Filters:

- Vendor Name
- Status

📸 Screenshot:
https://dummy-url.com/reports.png

---

## 5️⃣ RBAC Module (Role-Based Access Control)

### 👤 User Management

- Create / Edit / Delete User
- Fields:
  - Name
  - Email
  - Username
  - Password
  - Branch
  - Active / Inactive

---

### 🛡 Role Management

Create roles:

- Admin
- Manager
- Operator
- Viewer

Fields:

- Role Name
- Description

---

### 🔗 User-Role Mapping

- Assign roles to users
- Select User + Select Role

---

### 🏢 Branch-wise Role Access

Define permissions:

- View
- Add
- Edit
- Delete

📸 Screenshot:
https://dummy-url.com/rbac.png

---

# 🗂 Folder Structure

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

# 🧠 State Management

- Managed using **Redux Toolkit**
- Persisted using **LocalStorage**
- No backend/API required

---

# ✨ Features

- Fully responsive UI
- Scalable folder architecture
- Reusable components
- Form validation (React Hook Form)
- Clean UI using ShadCN
- Real-time state updates

---

# ⚡ Important Functional Flows

### Inquiry Flow

- Create Inquiry → Manage in list → Update status

### Vendor Flow

- Add vendor requests → Convert to actual quotes → Update quote details

### Reports Flow

- Filter data → Analyze inquiries and quotes

### RBAC Flow

- Create user → Assign role → Set permissions

---

# 🚀 Future Improvements

- Backend API integration (Node.js / Express)
- JWT Authentication
- Role-based route protection
- Export Reports (CSV / Excel)
- Charts & Analytics Dashboard
- Real-time updates (WebSockets)

---

# 📌 Notes

- Frontend-only application
- Built with scalable architecture
- Easily extendable to enterprise system

---

# 👨‍💻 Author

Developed using best practices in modern React architecture.
