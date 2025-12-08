# ASPOI Members Directory

A React-based members directory for **ASPOI**, showcasing registered members with search and pagination features. The project uses **Tailwind CSS** for styling and supports dynamic membership badges, responsive layouts, and image handling with fallbacks.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## Demo

> A live demo can be accessed here (aspoi.vercel.app/):

---

## Features

- Fetches member data from a remote API.
- Responsive grid layout for members (mobile, tablet, desktop).
- Membership badges with custom colors for each membership type:
  - FIELD OPERATIONAL MEMBERSHIP → Yellow
  - PHILANTHROPIC MEMBERS → Purple
  - PROFESSIONAL MEMBERSHIP INDIVIDUAL → Green
  - CORPORATE MEMBERSHIP → Gray
- Search functionality by:
  - Name
  - Email
  - Membership type
- Pagination with customizable items per page.
- Graceful fallback for missing images.
- Modern UI with Tailwind CSS:
  - Blur and shadow effects for cards
  - Smooth hover transitions

---

## Technologies Used

- **React** – Frontend library for building UI
- **Tailwind CSS** – Utility-first CSS framework
- **React Router** – For routing between pages
- **Fetch API** – To fetch member data from the backend
- **Next Backend** – Data source for members API

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/aspoi-members.git
cd aspoi-members

```

Install dependencies:

npm install

Start the development server:

npm run dev

Open the app in your browser:

https://www.aspoi.com/

Usage

Use the search bar to filter members by name, email, or membership type.

Navigate pages using the Previous/Next buttons.

Membership badges are color-coded to quickly identify membership categories.

Images have a fallback to a placeholder if missing.

## Folder Structure

aspoi-members/
│
├─ src/
│ ├─ components/
│ │ ├─ PageNav.jsx
│ │ └─ Footer.jsx
│ ├─ pages/
│ │ └─ Members.jsx
│ ├─ assets/
│ │ └─ images/
│ └─ App.jsx
│
├─ public/
│ └─ images/placeholder.jpg
│
├─ package.json
└─ README.md

## Notes

The members API uses endpoint in development:

The project ensures robust image handling with a fallback for any missing images.

Tailwind utility classes allow premium-looking cards with blur, shadows, and hover effects.

## License

This project is licensed under the MIT License.

## Author

Gideon Oluwanifemi & Opeyemi Michael Kolurejo
Frontend Developer | Vuejs, Nextjs, React & Tailwind CSS Enthusiast
