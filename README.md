# onTime — Official SaaS Landing Page

The official landing page for **onTime**, a commercial SaaS platform designed to manage **employee attendance, workforce activity, and project assignments** with strict network-based verification.

This repository contains the **marketing website / landing page** used to present the product, explain its features, showcase pricing plans, and collect demo requests from potential customers.

The landing page focuses on **clear product communication, conversion optimization, and responsive UI** suitable for SaaS marketing.

---

# 🌐 About onTime

**onTime** is a workforce management SaaS platform that ensures employees can only mark attendance from **authorized office networks**.

Instead of relying on GPS or manual verification, the system validates the **public IP address of the request** to confirm that employees are physically connected to the approved office network.

This approach eliminates:

* Buddy punching
* Remote check-ins
* Attendance manipulation

The platform also provides tools for **task management, employee administration, and attendance analytics**.

---

# 🚀 Landing Page Features

## Product Presentation

* Modern SaaS-style hero section
* Feature breakdown with visual cards
* Dashboard-style UI preview
* Step-by-step onboarding explanation

## Marketing Sections

* Product features
* How the system works
* Pricing plans
* Frequently asked questions

## Lead Generation

* Demo request form
* API-based form submission
* Toast notifications for user feedback

## User Experience

* Fully responsive design
* Mobile navigation drawer
* Smooth scroll navigation
* Clean modern UI with strong visual hierarchy

---

# 🧠 Core Product Capabilities (Highlighted on Landing Page)

The landing page communicates the primary capabilities of the onTime platform:

### Network-Locked Attendance

Employees can only check in through **authorized office router IP addresses**.

### Admin Control Center

Admins can:

* Add employees
* Assign admin roles
* Monitor attendance
* Configure office rules

### Attendance Logs

Employees can view:

* Daily check-in / check-out records
* Monthly summaries
* Attendance percentages

### Project & Task Management

Managers can:

* Create projects
* Assign tasks
* Track team progress

### Configurable Workplace Rules

Admins can configure:

* Timezone
* Office hours
* Working days
* Router IP addresses
* Late arrival deductions

---

# 🛠 Tech Stack

The landing page is built with a modern React ecosystem.

**Frontend**

* React
* TypeScript
* Vite
* Tailwind CSS

**UI Components**

* shadcn/ui
* Lucide React Icons
* Sonner (toast notifications)

---

# 📂 Project Structure

```text
src
 ├ components
 │   └ ui                # shadcn UI components
 │
 ├ App.tsx               # Main landing page layout
 ├ main.tsx              # Application entry point
 │
public
 └ assets                # Icons, favicon, preview images

index.html
```

---

# ⚙️ Local Development

Clone the repository:

```bash
git clone https://github.com/yourusername/ontime-landing-page.git
```

Move into the project directory:

```bash
cd ontime-landing-page
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The application will start on:

```
http://localhost:5173
```

---

# 📬 Demo Request API

The landing page includes a **demo request form** for potential customers.

Form submissions are sent to:

```
POST /api/send-email
```

Example request payload:

```json
{
  "name": "Tom Harris",
  "company": "Acme Corp",
  "email": "tom@acme.com",
  "message": "Interested in a demo"
}
```

Expected response:

```json
{
  "success": true
}
```

On successful submission:

* A success toast notification is displayed
* The form automatically resets

---

# 🎯 Purpose of This Repository

This repository only contains the **marketing landing page** for the onTime SaaS product.

It is responsible for:

* Product presentation
* Customer acquisition
* Pricing communication
* Demo lead collection

The **actual SaaS dashboard application** is maintained in a separate repository.

---

# 🔐 Commercial Product Notice

**onTime is a commercial SaaS product.**

The source code in this repository represents the **official marketing interface** for the product.
Unauthorized reproduction, distribution, or resale of the product branding or platform is not permitted.

---

# 📄 License

© 2026 onTime. All rights reserved.

This repository contains proprietary code for the onTime product landing page.
