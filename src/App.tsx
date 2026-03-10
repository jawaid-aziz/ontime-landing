import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Clock,
  Shield,
  CalendarDays,
  Users,
  ClipboardList,
  Settings,
  Check,
  Menu,
  ArrowRight,
} from "lucide-react"
import { Toaster } from "sonner"
import { toast } from "sonner"

export function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [loading, setLoading] = useState(false)

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  setLoading(true)

  try {
    const formData = new FormData(e.currentTarget)

    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      message: formData.get("message")
    }

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    if (!res.ok) {
      throw new Error("Server error")
    }

    const result = await res.json()

    if (result.success) {

      toast.success("Request sent successfully", {
        description: "We'll contact you shortly."
      })

      formRef.current?.reset()

    } else {
      throw new Error("Email failed")
    }

  } catch (err) {
    console.log(err)
  } finally {
    setLoading(false)
  }
}

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ]

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Network-Locked Check-In",
      description:
        "Employees can only mark attendance through registered office routers. We validate the IP on every request, so remote spoofing is impossible.",
    },
    {
      icon: <CalendarDays className="h-6 w-6 text-blue-600" />,
      title: "Attendance Logs",
      description:
        "Every employee gets a clear view of their daily check-in/out times, monthly summaries, and attendance percentage.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Admin Control Center",
      description:
        "Add employees, assign admin roles, and monitor your entire team's real-time activity from a single dashboard.",
    },
    {
      icon: <ClipboardList className="h-6 w-6 text-blue-600" />,
      title: "Projects & Task Assignment",
      description:
        "Create projects, break them into tasks, and assign them to the right people. Keep work organized and accountable.",
    },
    {
      icon: <Settings className="h-6 w-6 text-blue-600" />,
      title: "Deep Configuration",
      description:
        "Set your timezone, office hours, working days, register router IPs, and enable salary deduction rules for late arrivals — all from one settings panel.",
    },
  ]

  const steps = [
    {
      num: "01",
      title: "Purchase onTime",
      description: "You select a plan and complete checkout securely.",
    },
    {
      num: "02",
      title: "Receive Credentials",
      description:
        "We provision your admin account and send login details instantly.",
    },
    {
      num: "03",
      title: "Configure Workspace",
      description:
        "Set your timezone, office hours, and register your office router IPs.",
    },
    {
      num: "04",
      title: "Add Team & Go Live",
      description:
        "Add employees, assign roles, and attendance tracking starts immediately.",
    },
  ]

  const faqs = [
    {
      question: "How does the network-locked check-in work?",
      answer:
        "When setting up your workspace, admins register the public IP addresses of the office routers. When an employee attempts to check in via the web app, the system checks their current IP. If it matches a registered router, the check-in is successful. If not, it's rejected.",
    },
    {
      question: "What happens if an employee tries to check in from home?",
      answer:
        "The system will instantly reject the request because their home network's IP address will not match the authorized IP addresses configured in your admin settings. Buddy punching and remote spoofing are entirely eliminated.",
    },
    {
      question: "Can I register multiple office locations?",
      answer:
        "Yes. Depending on your pricing plan, you can register multiple router IPs. This is perfect for companies with multiple branches or separate departmental buildings.",
    },
    {
      question: "How are late-coming deductions calculated?",
      answer:
        "Admins can define specific rules in the configuration panel, setting a threshold of grace minutes (e.g., 15 minutes after official start time). The system auto-flags arrivals beyond this threshold and calculates deductions based on the customized formulas you set.",
    },
    {
      question: "What timezone support do you offer?",
      answer:
        "onTime features full global timezone support. During onboarding, you simply select your primary operating timezone. All system timestamps, check-ins, and daily reset cycles automatically adjust to your configured timezone.",
    },
    {
      question: "How do I get started after purchasing?",
      answer:
        "Once checkout is complete, we instantly provision your secure admin credentials. You simply log in, navigate to Settings to input your router IPs and office hours, and start inviting your team via email. You can be fully operational in under 5 minutes.",
    },
  ]

  return (
    <>
      <Toaster position="bottom-left" richColors />
      <div className="min-h-screen scroll-smooth bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        {/* NAVBAR */}
        <header
          className={`fixed top-0 z-50 w-full transition-all duration-300 ${
            isScrolled
              ? "border-b border-blue-50 bg-white/90 shadow-sm backdrop-blur-md"
              : "bg-white"
          }`}
        >
          <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
            <a
              href="#"
              className="flex items-center gap-2 text-blue-600 transition-opacity hover:opacity-80"
            >
              <Clock className="h-6 w-6 stroke-[2.5]" />
              <span className="text-xl font-bold tracking-tight">onTime</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <Button
                asChild
                className="rounded-full bg-blue-600 px-6 text-white hover:bg-blue-700"
              >
                <a href="#demo">Request Demo</a>
              </Button>
            </nav>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="flex flex-col border-l-blue-100 bg-white pt-12"
                >
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-lg font-medium text-slate-800 transition-colors hover:text-blue-600"
                      >
                        {link.name}
                      </a>
                    ))}
                    <Separator className="my-2 bg-blue-50" />
                    <Button
                      asChild
                      className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700"
                    >
                      <a href="#demo">Request Demo</a>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        <main>
          {/* HERO SECTION */}
          <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-70"></div>
            <div className="absolute top-20 right-0 -z-10 h-200 w-200 translate-x-1/3 rounded-full bg-blue-50/50 blur-3xl"></div>

            <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
                <div className="max-w-2xl">
                  <Badge className="mb-6 border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 hover:bg-blue-50">
                    Next-Gen Attendance System
                  </Badge>
                  <h1 className="mb-6 text-4xl leading-[1.15] font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                    Attendance that works on{" "}
                    <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                      your terms.
                    </span>
                  </h1>
                  <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                    onTime ensures your team checks in only from the office — at
                    the right time, from the right network. No buddy punching.
                    No guesswork.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className="h-12 rounded-full bg-blue-600 px-8 text-base text-white hover:bg-blue-700"
                    >
                      <a href="#pricing">Get Started</a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="h-12 rounded-full border-blue-200 bg-white px-8 text-base text-blue-700 hover:bg-blue-50"
                    >
                      <a href="#how-it-works">See How It Works</a>
                    </Button>
                  </div>

                  <div className="mt-10 flex items-center gap-4 text-sm font-medium text-slate-500">
                    <div className="flex -space-x-2">
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="bg-blue-100 text-xs text-blue-700">
                          AM
                        </AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="bg-blue-200 text-xs text-blue-800">
                          JD
                        </AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="bg-blue-600 text-xs text-white">
                          FZ
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <p>Trusted by 50+ modern teams</p>
                  </div>
                </div>

                <div className="relative mx-auto w-full max-w-md lg:ml-auto">
                  <div className="absolute -inset-1 rounded-3xl bg-linear-to-b from-blue-100 to-white opacity-80 blur-lg"></div>

                  <div className="relative rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-2xl shadow-blue-900/5 backdrop-blur-xl">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border border-blue-100 shadow-sm">
                          <AvatarFallback className="bg-blue-50 text-lg font-bold text-blue-700">
                            SA
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="leading-tight font-semibold text-slate-900">
                            Sarah Ahmed
                          </h3>
                          <p className="text-sm text-slate-500">
                            Product Designer
                          </p>
                        </div>
                      </div>
                      <Badge className="flex items-center gap-1 border-green-200 bg-green-50 text-green-700 hover:bg-green-50">
                        On Time <Check className="h-3 w-3" />
                      </Badge>
                    </div>

                    <div className="mb-6 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4 shadow-inner">
                      <div>
                        <p className="mb-1 text-xs font-medium tracking-wider text-slate-500 uppercase">
                          Checked In
                        </p>
                        <p className="font-mono text-xl font-bold text-blue-600">
                          09:02 AM
                        </p>
                      </div>
                      <div className="h-10 w-px bg-slate-200"></div>
                      <div>
                        <p className="mb-1 text-xs font-medium tracking-wider text-slate-500 uppercase">
                          Network
                        </p>
                        <p className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                          <Shield className="h-4 w-4 text-blue-500" />{" "}
                          Office-Main
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 border-t border-slate-100 pt-5">
                      <p className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                        Weekly Attendance
                      </p>
                      <div className="flex h-24 items-end gap-3">
                        <div className="group relative h-[80%] w-1/5 rounded-t-md bg-blue-100 transition-colors hover:bg-blue-200">
                          <div className="absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-slate-800 px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                            8.5h
                          </div>
                        </div>
                        <div className="relative h-[95%] w-1/5 rounded-t-md bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                          <div className="absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-blue-600 px-2 py-1 text-[10px] font-medium text-white">
                            9.2h
                          </div>
                        </div>
                        <div className="group relative h-[85%] w-1/5 rounded-t-md bg-blue-100 transition-colors hover:bg-blue-200">
                          <div className="absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-slate-800 px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                            8.8h
                          </div>
                        </div>
                        <div className="group relative h-[90%] w-1/5 rounded-t-md bg-blue-100 transition-colors hover:bg-blue-200">
                          <div className="absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-slate-800 px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                            9.0h
                          </div>
                        </div>
                        <div className="group relative h-[20%] w-1/5 rounded-t-md bg-slate-100">
                          <div className="absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-slate-800 px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                            2.0h
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between px-1 pt-1 text-xs font-medium text-slate-400">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES SECTION */}
          <section id="features" className="bg-slate-50/50 py-24">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Everything your team needs to stay on track
                </h2>
                <p className="text-lg text-slate-600">
                  A comprehensive suite of tools designed to ensure
                  accountability, streamline management, and keep operations
                  running smoothly.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className={`border-blue-100 bg-white shadow-sm transition-shadow hover:shadow-md ${index === 4 ? "lg:col-span-2" : ""}`}
                  >
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl text-slate-900">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="leading-relaxed text-slate-600">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* HOW IT WORKS SECTION */}
          <section id="how-it-works" className="bg-white py-24">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Up and running in minutes
                </h2>
                <p className="text-lg text-slate-600">
                  No complicated installations. No lengthy onboarding. Just pure
                  efficiency from day one.
                </p>
              </div>

              <div className="relative">
                <div className="absolute top-8 left-0 hidden h-0.5 w-full bg-blue-50 lg:block"></div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="relative z-10 flex flex-col items-center text-center"
                    >
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg ring-4 shadow-blue-600/20 ring-white">
                        {step.num}
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="max-w-62.5 text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PRICING SECTION */}
          <section id="pricing" className="bg-blue-50/50 py-24">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Simple, transparent pricing
                </h2>
                <p className="text-lg text-slate-600">
                  Pay only for what you need. Scale effortlessly as your team
                  grows.
                </p>
              </div>

              <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-3">
                <Card className="border-blue-100 bg-white shadow-sm">
                  <CardHeader className="pb-8">
                    <CardTitle className="text-2xl font-bold text-slate-900">
                      Starter
                    </CardTitle>
                    <CardDescription className="mt-2 text-slate-500">
                      Perfect for small teams starting out.
                    </CardDescription>
                    <div className="mt-6">
                      <span className="text-5xl font-extrabold text-slate-900">
                        $29
                      </span>
                      <span className="font-medium text-slate-500">/mo</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 text-sm text-slate-600">
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 shrink-0 text-blue-600" /> Up
                        to 20 employees
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 shrink-0 text-blue-600" />{" "}
                        Attendance tracking
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 shrink-0 text-blue-600" />{" "}
                        Admin dashboard
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 shrink-0 text-blue-600" /> 1
                        office router limit
                      </li>
                    </ul>
                  </CardContent>
                  <a href="#demo">
                    <CardFooter className="bg-blue-400">
                      <Button
                        variant="outline"
                        className="h-11 w-full cursor-pointer rounded-full border border-blue-800 font-semibold text-blue-800 hover:bg-blue-50"
                      >
                        Get Starter
                      </Button>
                    </CardFooter>
                  </a>
                </Card>

                <Card className="relative transform border-blue-600 bg-blue-600 text-white shadow-xl shadow-blue-900/10 md:-translate-y-4">
                  {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 px-3 py-1 uppercase tracking-wider text-xs font-bold border border-blue-200">
                Most Popular
              </Badge>
            </div> */}
                  <CardHeader className="pb-8">
                    <CardTitle className="text-2xl font-bold text-white">
                      Growth
                    </CardTitle>
                    <CardDescription className="mt-2 text-blue-100">
                      Everything you need to scale operations.
                    </CardDescription>
                    <div className="mt-6">
                      <span className="text-5xl font-extrabold text-white">
                        $79
                      </span>
                      <span className="font-medium text-blue-200">/mo</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 text-sm text-blue-50">
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 shrink-0 text-white" /> Up to
                        100 employees
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 shrink-0 text-white" /> All
                        Starter features
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 shrink-0 text-white" />{" "}
                        Project & task management
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 shrink-0 text-white" /> Up to
                        5 office routers
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 shrink-0 text-white" /> Salary
                        deduction rules
                      </li>
                    </ul>
                  </CardContent>
                  <a href="#demo">
                    <CardFooter>
                      <Button className="h-11 w-full cursor-pointer rounded-full bg-white font-semibold text-blue-600 hover:bg-blue-50">
                        Get Growth
                      </Button>
                    </CardFooter>
                  </a>
                </Card>

                <Card className="border-blue-100 bg-white shadow-sm">
                  <CardHeader className="pb-8">
                    <CardTitle className="text-2xl font-bold text-slate-900">
                      Enterprise
                    </CardTitle>
                    <CardDescription className="mt-2 text-slate-500">
                      Custom built for large organizations.
                    </CardDescription>
                    <div className="mt-6 flex h-12 items-center">
                      <span className="text-3xl font-bold text-slate-900">
                        Custom Pricing
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 text-sm text-slate-600">
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 shrink-0 text-blue-600" />{" "}
                        Unlimited employees
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 shrink-0 text-blue-600" />{" "}
                        Unlimited office routers
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 shrink-0 text-blue-600" />{" "}
                        Dedicated support team
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 shrink-0 text-blue-600" />{" "}
                        Custom integrations
                      </li>
                    </ul>
                  </CardContent>
                  <a href="#demo">
                    <CardFooter className="bg-blue-400">
                      <Button
                        variant="outline"
                        className="h-11 w-full cursor-pointer rounded-full border border-blue-800 font-semibold text-blue-800 hover:bg-blue-50"
                      >
                        Contact Sales
                      </Button>
                    </CardFooter>
                  </a>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section id="faq" className="bg-white py-24">
            <div className="container mx-auto max-w-3xl px-4 md:px-8">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Frequently asked questions
                </h2>
                <p className="text-lg text-slate-600">
                  Everything you need to know about implementing onTime for your
                  business.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 px-6"
                  >
                    <AccordionTrigger className="py-5 text-left text-base font-semibold text-slate-900 hover:text-blue-600 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-base leading-relaxed text-slate-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* CONTACT / DEMO SECTION */}
          <section id="demo" className="bg-blue-600 py-24">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
              <div className="grid items-center gap-16 lg:grid-cols-2">
                <div className="text-white">
                  <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
                    Ready to bring order to your attendance?
                  </h2>
                  <p className="mb-8 max-w-md text-lg leading-relaxed text-blue-100 md:text-xl">
                    Book a free demo and see onTime in action. We'll walk you
                    through the admin dashboard and show you how network-locked
                    check-ins work.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/50">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">
                          Secure & Private
                        </h4>
                        <p className="text-sm text-blue-200">
                          Enterprise-grade infrastructure.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/50">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">
                          Expert Onboarding
                        </h4>
                        <p className="text-sm text-blue-200">
                          Dedicated support to get you live.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="border-0 bg-white p-2 shadow-2xl shadow-slate-900/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-900">
                      Request a Demo / Package
                    </CardTitle>
                    <CardDescription className="text-slate-500">
                      Fill out the form below and we'll be in touch shortly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-5 text-slate-800" ref={formRef} onSubmit={handleSubmit}>
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="font-medium text-slate-700"
                        >
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Tom Harris"
                          className="h-11 border-slate-200 focus-visible:ring-blue-600"
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label
                            htmlFor="company"
                            className="font-medium text-slate-700"
                          >
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Acme Corp"
                            className="h-11 border-slate-200 focus-visible:ring-blue-600"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="font-medium text-slate-700"
                          >
                            Work Email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="tom@acmecorp.com"
                            className="h-11 border-slate-200 focus-visible:ring-blue-600"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="font-medium text-slate-700"
                        >
                          Message (Optional)
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your team size and requirements..."
                          className="min-h-25 resize-y border-slate-200 focus-visible:ring-blue-600"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={loading}
                        className="mt-2 h-12 w-full cursor-pointer rounded-lg bg-blue-600 text-base font-semibold text-white hover:bg-blue-700"
                      >
                        {loading ? "Sending..." : "Submit Request"}
                        {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-[#1e3a5f] py-16 text-slate-300">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
              <div className="col-span-1 md:col-span-2">
                <a href="#" className="mb-6 flex items-center gap-2 text-white">
                  <Clock className="h-7 w-7 stroke-[2.5] text-blue-400" />
                  <span className="text-2xl font-bold tracking-tight">
                    onTime
                  </span>
                </a>
                <p className="mb-6 max-w-sm leading-relaxed text-slate-400">
                  Attendance that works on your terms. Ensure accountability,
                  eliminate buddy punching, and streamline your workforce
                  management effortlessly.
                </p>
              </div>

              <div>
                <h4 className="mb-6 font-semibold text-white">Product</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#features"
                      className="transition-colors hover:text-blue-400"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#how-it-works"
                      className="transition-colors hover:text-blue-400"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="transition-colors hover:text-blue-400"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="transition-colors hover:text-blue-400"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-6 font-semibold text-white">Company</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#demo"
                      className="transition-colors hover:text-blue-400"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#demo"
                      className="transition-colors hover:text-blue-400"
                    >
                      Request Demo
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="mb-8 bg-slate-700/50" />

            <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
              <p>© 2026 onTime. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
