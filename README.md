# Aspoi Membership Registration System

A full‑stack membership registration and payment system built with **Next.js (App Router)**, **React frontend**, **Prisma ORM**, **Supabase Postgres + Storage buckets**, and **Flutterwave payment gateway**.  

Users can register, pay for membership via Flutterwave, and download a PDF receipt after successful payment.

---

## Features

- **Frontend (React + Next.js App Router)**
  - Organization website
  - Registration form with validation (`react-hook-form`)
  - Membership options with automatic amount calculation
  - Image upload with preview before submission
  - Confirmation page showing payment details and downloadable PDF receipt

- **Backend (Next.js API routes in `./app/api`)**
  - The backend exposes several API routes under `app/api/` that interact with the Supabase database via Prisma.
  - `POST /api/flutterwave/initialize` → Initializes Flutterwave transaction with metadata
  - `GET /api/flutterwave/verify` → Verifies transaction and saves user record in Supabase via Prisma
  - `GET /api/flutterwave/members` → fetches members from the database (only those with paymentStatus = "success")
  - `GET /api/debug-user` → fetches all users from the database
  - File uploads stored in **Supabase Storage bucket** 

- **Database (Supabase Postgres + Prisma)**
  - Cloud database hosted on Supabase
  - Prisma schema configured with both pooled (`DATABASE_URL`) and direct (`DIRECT_URL`) connections:
    - **DATABASE_URL** → Connection pooling via PgBouncer (used in production runtime)
    - **DIRECT_URL** → Direct connection (used for migrations)

- **Payments (Flutterwave)**
  - Secure integration with Flutterwave API
  - Amount automatically converted to kobo before sending
  - Metadata stored alongside transaction for later verification

- **PDF Receipt**
  - Confirmation page generates a downloadable PDF receipt using `jsPDF`
  - Includes user details, membership type, payment status, and amount paid

---

## 🛠 Tech Stack

- **Frontend:** React, Next.js App Router, TailwindCSS  
- **Backend:** Next.js API routes (`./app/api`)  
- **Database:** Supabase Postgres (with Prisma ORM)  
- **Storage:** Supabase Buckets (for user‑uploaded images)  
- **Payments:** Flutterwave API  
- **PDF Generation:** jsPDF  

---

## Project Structure
```bash

Front-end: Available in this repo

Back-end: Available at https://github.com/GideonDeon/aspoi_backend

```

## Installation

1. Clone the repository:

```bash
[git clone https://github.com/GideonDeon/aspoi]
cd aspoi

[git clone [https://github.com/GideonDeon/aspoi_backend]
cd aspoi_backend

```

Install dependencies:

npm install

Start the development server:

npm run dev

Open the app in your browser:

https://www.aspoi.com/

## License

This project is licensed under the MIT License.

## Author

Gideon Oluwanifemi & Opeyemi Michael Kolurejo
Frontend Developer | Vuejs, Nextjs, React & Tailwind CSS Enthusiast
