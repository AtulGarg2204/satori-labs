import './App.css'
import React, { useState} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { 
  ArrowRight, 
  Calendar, 
  Mail, 
  MessageSquare, 
  Video, 
  BarChart3, 
  Users, 
  DollarSign, 
  Shield, 
  Zap,
  CheckCircle,
 
  Globe,

  Eye,
  Settings
} from 'lucide-react'

import heroSphere from './assets/9.png'
import aiInterface from './assets/2.jpg'
import salesDashboard from './assets/3.png'
import hrWorkflow from './assets/4.png'
import networkViz from './assets/5.jpeg'
import howItWorks from './assets/12.png'  
// import aiInterface from './assets/T1OidFMDThA4.jpg'
// import networkViz from './assets/u6DTYhRhsAqG.jpeg'
// import salesDashboard from './assets/Rvd4KRiR2l5p.png'
// import hrWorkflow from './assets/sL7aFIjE6AJj.png'
import complianceReporting from './assets/6.jpg'

function App() {
  const [activeUseCase, setActiveUseCase] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  // const useCases = [
  //   {
  //     title: "Sales Order Processing (O2C)",
  //     problem: "Order-to-Cash is fragmented — sales, factory, and finance operate in silos.",
  //     solution: [
  //       "AI Assistant joins calls → records & summarizes",
  //       "Updates CRM (Salesforce, HubSpot)",
  //       "Prepares follow-up emails & schedules tasks"
  //     ],
  //     outcome: "2x faster pipeline updates, more selling time",
  //     icon: BarChart3,
  //     image: salesDashboard
  //   },
  //   {
  //     title: "HR & People Ops",
  //     problem: "Manual onboarding, recruiting, and reporting workflows",
  //     solution: [
  //       "Collects candidate resumes → populates ATS",
  //       "Sends onboarding kits → sets up calendar invites",
  //       "Compiles DEI hiring reports every month"
  //     ],
  //     outcome: "40% faster cycle times, less burden on lean HR teams",
  //     icon: Users,
  //     image: hrWorkflow
  //   },
  //   {
  //     title: "Finance & Compliance",
  //     problem: "Routine reporting and policy updates drain bandwidth",
  //     solution: [
  //       "Generates and emails financial reports from dashboards",
  //       "Tracks vendor payments and alerts teams",
  //       "Prepares compliance checklists quarterly"
  //     ],
  //     outcome: "Better audit readiness, reduced manual errors",
  //     icon: DollarSign,
  //     image: complianceReporting
  //   },
  //   {
  //     title: "Executive Assistance",
  //     problem: "Execs waste time on scheduling, recaps, and requests",
  //     solution: [
  //       "Prepares daily briefs, meeting summaries",
  //       "Books travel, manages calendar",
  //       "Pulls reports on-demand and alerts on key metrics"
  //     ],
  //     outcome: "True productivity boost; no need for a full-time EA",
  //     icon: Star,
  //     image: aiInterface
  //   },
  //   {
  //     title: "IT & Support Ops",
  //     problem: "High load of repetitive ticket handling and system tasks",
  //     solution: [
  //       "Monitors helpdesk (Zendesk, Jira) for repeated issues",
  //       "Triages, replies to common queries",
  //       "Escalates and logs when human input is needed"
  //     ],
  //     outcome: "Shorter resolution times, lower burnout",
  //     icon: Settings,
  //     image: networkViz
  //   }
  // ]
  const useCases = [
  {
    title: "Sales Order Processing (O2C)",
    problem: "Order-to-Cash is fragmented — sales, factory, and finance operate in silos.",
    aiEmployeeRole: "Takes orders from email/portal, checks stock, coordinates production, tracks dispatch, and ensures payment closure.",
    outcome: "2-3x faster O2C cycles, fewer errors, smoother cash flow.",
    icon: BarChart3,
    image: salesDashboard
  },
  {
    title: "Procurement & Vendor Management (P2P)",
    problem: "Vendor POs, invoices, and GRNs live in different systems.",
    aiEmployeeRole: "Requests and compares quotes, places POs, tracks delivery, matches GRNs with invoices.",
    outcome: "50% reduction in cycle time, lower procurement leakage.",
    icon: DollarSign,
    image: aiInterface
  },
  {
    title: "Finance & Compliance",
    problem: "Finance teams lose days reconciling data across ERPs and banks.",
    aiEmployeeRole: "Pulls AR/AP data, prepares payment reports, generates audit checklists, alerts overdue accounts.",
    outcome: "Better audit readiness, reduced manual effort, faster close cycles.",
    icon: DollarSign,
    image: complianceReporting
  },
  {
    title: "HR & People Ops",
    problem: "Manual onboarding and HRMS data entry slow down growth.",
    aiEmployeeRole: "Collects candidate docs, fills HR systems, sends onboarding kits, configures payroll, compiles analytics.",
    outcome: "70% faster onboarding, improved compliance, higher HR bandwidth.",
    icon: Users,
    image: hrWorkflow
  },
  {
    title: "Customer Support Ops",
    problem: "Repetitive tickets and disjointed systems slow responses.",
    aiEmployeeRole: "Consolidates tickets, fetches ERP context, drafts replies, escalates exceptions.",
    outcome: "Lower resolution time, 30% higher SLA compliance.",
    icon: Settings,
    image: networkViz
  }
]

  const problems = [
    {
      title: "Tool Sprawl",
      description: "Too many disconnected tools, too little interoperability",
      icon: Globe
    },
    {
      title: "Engineering Bottlenecks", 
      description: "Every automation requires developer time or APIs",
      icon: Zap
    },
    {
      title: "Fragile Automations",
      description: "RPA & APIs break with UI or logic changes", 
      icon: Shield
    },
    {
      title: "Coordination Tax",
      description: "Teams lose hours on emails, forms, and approvals",
      icon: Eye
    }
  ]

  const features = [
    "Role-based access & permissions",
    "Transparent logs and audit trails", 
    "Human-in-loop validation for key actions",
    "On-prem / VPC deployment options"
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Satori Labs</div>
          <div className="hidden md:flex space-x-8">
            <a href="#solution" className="hover:text-blue-400 transition-colors">Solution</a>
            <a href="#use-cases" className="hover:text-blue-400 transition-colors">Use Cases</a>
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Book a Pilot
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
        </motion.div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src={heroSphere} 
              alt="AI Energy Sphere" 
              className="w-64 h-64 mx-auto mb-8 rounded-full object-cover opacity-80"
            />
          </motion.div> */}
          <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mb-8 mt-[7.3rem]"
>
  <img 
    src={heroSphere} 
    alt="AI Energy Sphere" 
    className="w-64 h-64 mx-auto mb-8 rounded-full object-cover opacity-80"
  />
</motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
          >
            Your AI Teammates Who Execute Real Work
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
           AI Assistants that work inside your tools without any integrations — Your digital colleagues who work like real employees
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4">
              Book a Pilot <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {/* <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4">
              Watch Demo
            </Button> */}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-gray-400"
          >
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              1 Assistant = 0.6 FTEs worth of output
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Enterprises Need This Now</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Modern enterprises face unprecedented challenges in workflow automation and tool integration
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardHeader>
                    <problem.icon className="h-12 w-12 text-blue-400 mb-4" />
                    <CardTitle className="text-white">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {problem.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6 bg-gradient-to-br from-blue-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Is an AI Employee?</h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={aiInterface} 
                alt="AI Interface" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Calendar className="h-8 w-8 text-blue-400" />
                <p className="text-lg">A digital colleague that uses software like a human</p>
              </div>
              <div className="flex items-center space-x-4">
                <MessageSquare className="h-8 w-8 text-purple-400" />
                <p className="text-lg">Understands natural language instructions</p>
              </div>
              <div className="flex items-center space-x-4">
                <Globe className="h-8 w-8 text-green-400" />
                <p className="text-lg">Operates GUIs, CRMs, ERPs, spreadsheets — just like your team</p>
              </div>
              <div className="flex items-center space-x-4">
                <Video className="h-8 w-8 text-yellow-400" />
                <p className="text-lg">Joins calls, fills forms, sends updates, and executes workflows end-to-end</p>
              </div>
              <div className="flex items-center space-x-4">
                <Eye className="h-8 w-8 text-red-400" />
                <p className="text-lg">Transparent logs, human-in-loop options, and admin control</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      {/* <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Inputs", items: ["Email", "Chat", "Voice", "Calendar"], icon: Mail },
              { title: "Planning Engine", items: ["LLM + Reasoning", "Breaks into steps"], icon: Zap },
              { title: "Action Models", items: ["Interact with software", "Like a human"], icon: Settings },
              { title: "Outputs", items: ["Reports", "Forms", "Messages", "Meetings"], icon: BarChart3 }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <ul className="space-y-2 text-gray-300">
                  {step.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {index < 3 && (
                  <ArrowRight className="h-6 w-6 text-gray-400 mx-auto mt-4 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img 
        src={howItWorks} 
        alt="How It Works Process" 
        className="w-full mx-auto rounded-2xl"
      />
    </motion.div>
  </div>
</section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-6 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Use Cases</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how our Virtual AI Assistant transforms operations across different departments
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    className={`cursor-pointer transition-all duration-300 ${
                      activeUseCase === index 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                    onClick={() => setActiveUseCase(index)}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <useCase.icon className="h-8 w-8 text-blue-400" />
                        <CardTitle className="text-white">{useCase.title}</CardTitle>
                      </div>
                    </CardHeader>
                    {/* <CardContent>
                      <p className="text-gray-300 mb-4">🧠 Problem: {useCase.problem}</p>
                      <p className="text-green-400 font-semibold">📈 Outcome: {useCase.outcome}</p>
                    </CardContent> */}
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              key={activeUseCase}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-24"
            >
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center space-x-4">
                    {React.createElement(useCases[activeUseCase].icon, { className: "h-8 w-8 text-blue-400" })}
                    <span>{useCases[activeUseCase].title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2">🧠 Problem:</h4>
                    <p className="text-gray-300">{useCases[activeUseCase].problem}</p>
                  </div>
                  
                  {/* <div>
                    <h4 className="font-semibold text-blue-400 mb-2">💡 Solution:</h4>
                    <ul className="space-y-2">
                      {useCases[activeUseCase].solution.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2 text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                  <div>
  <h4 className="font-semibold text-yellow-400 mb-2">⚡ AI Employee Role:</h4>
  <p className="text-gray-300">{useCases[activeUseCase].aiEmployeeRole}</p>
</div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">📈 Outcome:</h4>
                    <p className="text-gray-300">{useCases[activeUseCase].outcome}</p>
                  </div>
                  
                  {useCases[activeUseCase].image && (
                    <div className="mt-6">
                      <img 
                        src={useCases[activeUseCase].image} 
                        alt={useCases[activeUseCase].title}
                        className="rounded-lg w-full object-cover"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cross-Tool Power */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Cross-Tool Power Without APIs</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <Globe className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Works with any SaaS tool</h3>
                  <p className="text-gray-300">No integration or developer support needed</p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Adapts to changes</h3>
                  <p className="text-gray-300">Uses visual reasoning + GSQL for UI and logic changes</p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Human-level actions</h3>
                  <p className="text-gray-300">Log in, click, type, upload, download, copy-paste</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section id="features" className="py-20 px-6 bg-gradient-to-br from-green-900/10 to-blue-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Control & Trust</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="pt-6">
                    <CheckCircle className="h-8 w-8 text-green-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & ROI */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Pricing & ROI Summary</h2>
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-400/20">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">Per Assistant</h3>
                    <p className="text-gray-300">Subscription + Usage-Based Tiering</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">Flexible Pricing</h3>
                    <p className="text-gray-300">Pay per Assistant or by task volume</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-2">Clear ROI</h3>
                    <p className="text-gray-300">FTE hours saved, speed, reliability</p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-white/5 rounded-lg">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg px-4 py-2">
                    1 Assistant = 0.6 FTEs worth of output
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to onboard your first AI Employee?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your enterprise workflows with our Virtual AI Assistant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4">
                Book a Pilot <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4">
                Contact Sales
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Satori Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
