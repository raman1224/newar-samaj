"use client"

import * as React from "react"
import { MainNav } from "@/components/navigation/main-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function SignUpPage() {
  const [currentLanguage, setCurrentLanguage] = React.useState("en")
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const { toast } = useToast()

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language)
  }

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        toast({
          title: "Success",
          description: "Account created successfully! Please check your email for verification.",
        })
        // Redirect to sign in
        window.location.href = "/auth/signin"
      } else {
        throw new Error("Registration failed")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Registration failed. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const content = {
    en: {
      title: "Sign Up",
      subtitle: "Join the Newar Samaj community",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      signUp: "Sign Up",
      haveAccount: "Already have an account?",
      signIn: "Sign In",
    },
    np: {
      title: "साइन अप",
      subtitle: "नेवार समाज समुदायमा सामेल हुनुहोस्",
      firstName: "पहिलो नाम",
      lastName: "अन्तिम नाम",
      email: "इमेल",
      password: "पासवर्ड",
      confirmPassword: "पासवर्ड पुष्टि गर्नुहोस्",
      signUp: "साइन अप",
      haveAccount: "पहिले नै खाता छ?",
      signIn: "साइन इन",
    },
    nw: {
      title: "साइन अप",
      subtitle: "नेवाः समाज समुदायय् सामेल जुयाः",
      firstName: "न्हापाः नां",
      lastName: "थ्व नां",
      email: "इमेल",
      password: "पासवर्ड",
      confirmPassword: "पासवर्ड पुष्टि यानाः",
      signUp: "साइन अप",
      haveAccount: "अगाः खाता दु?",
      signIn: "साइन इन",
    },
  }

  const currentContent = content[currentLanguage as keyof typeof content]

  return (
    <div className="min-h-screen">
      <MainNav
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{currentContent.title}</CardTitle>
              <CardDescription>{currentContent.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{currentContent.firstName}</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{currentContent.lastName}</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{currentContent.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">{currentContent.password}</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">{currentContent.confirmPassword}</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "..." : currentContent.signUp}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  {currentContent.haveAccount}{" "}
                  <a href="/auth/signin" className="text-primary hover:underline">
                    {currentContent.signIn}
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
