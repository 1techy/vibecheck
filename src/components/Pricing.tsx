import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function Pricing() {
  const navigate = useNavigate()

  const plans = [
    {
      name: "Starter Loop",
      price: "$29",
      period: "/month",
      description: "For personal projects validating secure AI workflows.",
      features: [
        "Up to 5 repositories",
        "100 scans per month",
        "Basic vulnerability detection",
        "Email support",
        "GitHub integration"
      ]
    },
    {
      name: "Retention Pro",
      price: "$99",
      period: "/month",
      description: "For advanced projects optimizing engagement and remediation speed.",
      features: [
        "Unlimited repositories",
        "Unlimited scans",
        "Advanced AI analysis",
        "Priority support",
        "GitHub & GitLab integration",
        "Custom rules",
        "Personal workflow presets"
      ],
      popular: true
    },
    {
      name: "Enterprise Grid",
      price: "Custom",
      period: "",
      description: "For organizations with strict security and compliance demands.",
      features: [
        "Everything in Professional",
        "Dedicated support",
        "On-premise deployment",
        "Custom integrations",
        "SLA guarantee",
        "Training & onboarding"
      ]
    }
  ]

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
            Simple <span className="text-primary">pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your workflow. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
            >
              <Card className={`h-full p-8 ${
                plan.popular 
                  ? 'border-primary/60 bg-primary/10 relative hover:border-primary/80 hover:shadow-2xl hover:shadow-primary/25' 
                  : 'border-border/70 bg-card/70 hover:border-accent/40 hover:bg-accent/5 hover:shadow-xl hover:shadow-accent/15'
              } transition-all duration-300 group backdrop-blur-sm`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground ml-2">{plan.period}</span>}
                  </div>

                  <Button 
                    className={`w-full transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/45' 
                        : 'border-accent/30 hover:bg-accent/10 text-accent hover:border-accent/60 hover:scale-105'
                    } group-hover:shadow-xl`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => navigate("/getting-started")}
                  >
                    Get Started
                  </Button>

                  <div className="space-y-3 pt-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
