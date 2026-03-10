# onTime — SaaS Landing Page

A modern SaaS landing page for **onTime**, an employee attendance and workforce management system.

The landing page showcases the product features, pricing, workflow, FAQs, and includes a **demo request form** for potential customers.

Built with a modern React stack focused on **clean UI, performance, and responsive design**.

---

# 🚀 Features

## Product Showcase

* Hero section with product overview
* Feature cards explaining core capabilities
* Visual attendance dashboard preview

## SaaS Marketing Sections

* Feature breakdown
* How the product works
* Pricing plans
* Frequently asked questions

## Lead Generation

* Demo request form
* Form submission via API (`/api/send-email`)
* Toast notifications for user feedback

## UI/UX

* Fully responsive layout
* Modern SaaS-style design
* Mobile navigation drawer
* Smooth scrolling navigation

---

# 🧠 Core Product Concept

**onTime** is an employee attendance system where check-ins are restricted to **authorized office networks**.

Instead of GPS or manual tracking, the system verifies the **IP address of the request** to ensure employees are physically present in the office network.

Key product ideas highlighted on the page:

* Network-locked attendance
* Admin management dashboard
* Employee attendance logs
* Project & task assignment
* Configurable office rules

---

# 🛠 Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* shadcn/ui
* Lucide React Icons
* Sonner (toast notifications)

---

# 📦 UI Components Used

The project heavily uses **shadcn/ui components**:

* Button
* Card
* Badge
* Accordion
* Sheet (mobile menu)
* Input
* Textarea
* Label
* Avatar
* Separator

---

# 📂 Project Structure

```
src
 ├ components
 │   └ ui (shadcn components)
 │
 ├ App.tsx
 ├ main.tsx
 │
public
 └ assets (icons / favicon)

index.html
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/ontime-landing-page.git
```

Navigate into the project:

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

---

# 📬 Demo Request Form

The demo form sends requests to:

```
POST /api/send-email
```

Payload example:

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

On success:

* A toast notification appears
* The form resets automatically

---

# 🎨 Design Goals

This landing page focuses on:

* SaaS conversion-optimized layout
* Clean modern UI
* Strong visual hierarchy
* Fast loading
* Mobile-first design

---

# 📈 Possible Future Improvements

Possible improvements for the project:

* Analytics integration
* A/B testing for pricing section
* Live product demo video
* Blog / content section
* Authentication and dashboard integration

---

# 📄 License

This project is for educational and demonstration purposes.
