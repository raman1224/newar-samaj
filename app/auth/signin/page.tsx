"use client"

import * as React from "react"
import { MainNav } from "@/components/navigation/main-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function SignInPage() {
  const [currentLanguage, setCurrentLanguage] = React.useState("en")
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
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
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        toast({
          title: "Success",
          description: "Successfully signed in!",
        })
        // Redirect to dashboard
        window.location.href = "/dashboard"
      } else {
        throw new Error("Sign in failed")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Sign in failed. Please check your credentials.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const content = {
    en: {
      title: "Sign In",
      subtitle: "Welcome back to Newar Samaj",
      email: "Email",
      password: "Password",
      signIn: "Sign In",
      noAccount: "Don't have an account?",
      signUp: "Sign Up",
      forgotPassword: "Forgot Password?",
    },
    np: {
      title: "साइन इन",
      subtitle: "नेवार समाजमा फिर्ता स्वागत छ",
      email: "इमेल",
      password: "पासवर्ड",
      signIn: "साइन इन",
      noAccount: "खाता छैन?",
      signUp: "साइन अप",
      forgotPassword: "पासवर्ड बिर्सनुभयो?",
    },
    nw: {
      title: "साइन इन",
      subtitle: "नेवाः समाजय् फिर्ता स्वागत",
      email: "इमेल",
      password: "पासवर्ड",
      signIn: "साइन इन",
      noAccount: "खाता मदु?",
      signUp: "साइन अप",
      forgotPassword: "पासवर्ड बिर्सनुभयो?",
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
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "..." : currentContent.signIn}
                </Button>
              </form>

              <div className="mt-6 text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  {currentContent.noAccount}{" "}
                  <a href="/auth/signup" className="text-primary hover:underline">
                    {currentContent.signUp}
                  </a>
                </p>
                <a href="/auth/forgot-password" className="text-sm text-primary hover:underline">
                  {currentContent.forgotPassword}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
