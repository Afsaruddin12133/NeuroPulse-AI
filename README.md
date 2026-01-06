# 🧠 NeuroPulse Clinical Copilot

![Banner](https://i.ibb.co/0Rxkj3b4/Banner.png)

## Getting Started

Smart Health. AI Powered. Human Centered.

## First, run the development server:

## 📌 Project Overview

**NeuroPulse Clinical Copilot** is a full-stack medical web platform designed for smart diagnostics, appointment scheduling, patient records, and AI-driven insights using Google Gemini API. It supports three distinct user roles:

- **Admin** – manage users, doctors, and reports
- **Doctor** – manage appointments, view diagnosis reports
- **Patient/User** – book appointments, view AI-generated results, and access health records

The platform integrates AI-powered analytics, weather alerts, modern UI components, and secure role-based access.

---

## 🚀 Tech Stack

| Tech             | Description                                     |
| ---------------- | ----------------------------------------------- |
| **Next.js**      | React framework for building SSR/SSG apps       |
| **React**        | UI Library                                      |
| **MongoDB**      | NoSQL database for storing users, reports, etc. |
| **Tailwind CSS** | Utility-first CSS framework                     |
| **JWT**          | For secure authentication and role-based access |
| **NextAuth**     | Session and authentication handling             |
| **Gemini API**   | AI-driven medical diagnosis & insights          |
| **shadcn/ui**    | Beautiful, accessible components                |
| **Lucide-react** | Icons                                           |
| **Axios**        | HTTP client for API requests                    |

---

## 📂 Folder Structure (Simplified)

```bash
neuropulse-clinical-copilot/
├── app/
│   ├── layout.tsx (global layout)
│   ├── page.tsx (homepage)
│   ├── dashboard/
│   │   ├── admin/
│   │   ├── doctor/
│   │   └── user/
├── components/
│   ├── Sidebar.tsx
│   ├── Header.tsx
│   ├── WeatherWidget.tsx
│   └── AIChat.tsx
├── lib/
│   ├── auth.ts
│   ├── db.ts
│   └── ai.ts (Gemini logic)
├── models/
│   ├── userModel.ts
│   ├── appointmentModel.ts
│   └── reportModel.ts
├── public/
├── styles/
│   └── globals.css
├── utils/
│   └── roles.ts
├── .env.local
├── package.json
└── README.md
```

---

## 🔐 Environment Variables

Create a `.env.local` file at the root of the project:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/neuropulse?retryWrites=true&w=majority
NEXTAUTH_SECRET=your_jwt_secret_here
GEMINI_API_KEY=your_gemini_api_key
WEATHER_API_KEY=your_openweather_api_key (optional)
```

---

## 🛠️ Installation

```bash
git clone https://github.com/yourusername/neuropulse-clinical-copilot.git
cd neuropulse-clinical-copilot
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Visit: `http://localhost:3000`

---

### 👥 Roles & Credentials

| Role              | Description                            | **Email**          | **Password** |
| ----------------- | -------------------------------------- | ------------------ | ------------ |
| 🧑‍💼 User (Patient) | Book appointments, view AI reports     | `user@gmail.com`   | `user@123`   |
| 🧑‍⚕️ Doctor         | Manage appointments, patients, reports | `doctor@gmail.com` | `doctor@123` |
| 🛡️ Admin          | Manage users, doctors, analytics, data | `admin@gmail.com`  | `admin@123`  |

> ⚠️ **Note:** These are sample/demo credentials. Do not use them in production environments without modification.

## 👥 Roles and Features

### 👩‍⚕️ User (Patient)

- Book and manage appointments
- View AI-based diagnosis reports
- Get weather alerts and health tips

### 🧑‍⚕️ Doctor

- View appointment schedule
- Review patient records
- Collaborate with AI for diagnosis

### 🛡️ Admin

- Manage all users and roles
- Control data and access
- Oversee AI analytics and trends

---

## ✨ Gemini AI Integration

- Uses Google Gemini API for:

  - Symptom-based diagnosis
  - Smart health tips and precautions
  - Personalized recommendation engine

---

## 🌦️ Smart Features

- **Weather Alerts:** Warn users of severe weather with health implications
- **AI Chatbot:** Conversational medical assistant
- **Analytics Dashboard:** Track health data & trends

---

## 🖼️ UI Components (shadcn/ui)

- Reusable form, cards, tabs, dialog modals, and dashboards
- Modern UX with Tailwind + shadcn/ui

---

## 🚀 Deployment

### Deploy to Vercel

1. Push to GitHub
2. Visit [vercel.com/import](https://vercel.com/import)
3. Link GitHub repo
4. Set environment variables
5. Click **Deploy**

---

## 📸 Some UI Screenshots

### USER Dashboard

![AI Chatbox](https://i.ibb.co/Xk2jfPK8/Screenshot-2025-07-23-214327.png)

### AI Chatbox

![AI Chatbox](https://i.ibb.co/F4R5gfd8/ai-chatbox.png)

### Diagnosis Page

![Diagnosis](https://i.ibb.co/JjHwSpYb/diagones.png)

### Admin Dashboard

![Admin Dashboard](https://i.ibb.co/Ng3H28Hb/admin-dashboard.png)

### Doctor Dashboard

![Doctor Dashboard](https://i.ibb.co/zVtRWq1n/doctor-dashboard.png)

---

---

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## 🧠 Contributing

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

1. Fork this repo
2. Create a feature branch
3. Push changes and open a PR

## Learn More

---

To learn more about Next.js, take a look at the following resources:

## 📜 License

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
  MIT License © 2025 NeuroPulse Clinical Copilot

## You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

## 🔗 Useful Links

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Gemini API](https://ai.google.dev/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
