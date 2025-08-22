"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/navigation/main-nav"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { LanguageDashboard } from "@/components/language/language-dashboard"
import { CultureSchool } from "@/components/language/culture-school"
import { FlashcardSystem } from "@/components/language/flashcard-system"

export default function HomePage() {
  const [currentLanguage, setCurrentLanguage] = React.useState("en")
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language)
    // TODO: Implement actual language switching logic
  }

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    // TODO: Implement actual theme switching logic
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <MainNav
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      />

      {/* Hero */}
      <HeroSection />

      {/* Language Learning Preview */}
      <section id="language-preview" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Learn Newar Language</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start your journey to master the beautiful Newar language with our comprehensive learning system
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Alphabet System */}
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">क</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Alphabet System</h3>
              <p className="text-muted-foreground mb-4">
                Learn Newar script from basics with interactive lessons
              </p>
              <Link href="/language/learn" className="text-primary font-medium hover:underline">
                Start Learning →
              </Link>
            </div>

            {/* Flashcards */}
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                  className="text-primary">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flashcards</h3>
              <p className="text-muted-foreground mb-4">
                Master vocabulary with interactive flashcards
              </p>
              <Link href="/language/flashcards" className="text-primary font-medium hover:underline">
                Practice Now →
              </Link>
            </div>

            {/* Culture School */}
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                  className="text-primary">
                  <path d="M2 3h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3z"></path>
                  <polyline points="8,21 8,19 16,19 16,21"></polyline>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Culture School</h3>
              <p className="text-muted-foreground mb-4">
                Understand Newar culture through video lessons
              </p>
              <Link href="/language/school" className="text-primary font-medium hover:underline">
                Explore Culture →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Quick Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Discover Our Heritage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">🏛️ Cultural Heritage</CardTitle>
                <CardDescription>Explore temples, festivals, and traditions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Discover the rich history of Newar architecture, religious practices, and cultural celebrations that
                  have been preserved for centuries.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">🗣️ Language Learning</CardTitle>
                <CardDescription>AI-powered Newar language education</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn Newar language with interactive lessons, AI tutors, and real-time translation between Newa,
                  Nepali, and English.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">🤝 Community</CardTitle>
                <CardDescription>Connect with fellow community members</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Join our vibrant community through events, discussions, and cultural activities that bring Newar
                  people together worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4 mt-auto">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src="./g5.png" alt="Dangol AI Logo" className="h-8 w-8 rounded-full" />
              <div>
                <p className="text-sm font-medium">
                  Developed by{" "}
                  <a
                    href="https://raman1224.github.io/DANGOL_AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    DANGOL AI
                  </a>
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground max-w-md">
                "Preserving and promoting Newar culture, language, and heritage for future generations."
              </p>
              <div className="flex justify-center md:justify-end space-x-4 mt-2">
                <a href="https://www.facebook.com/profile.php?id=61579052624200" className="text-muted-foreground hover:text-primary">
                  Facebook
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Instagram
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  YouTube
                </a>
                <a href="https://wa.me/your-whatsapp-number" className="text-muted-foreground hover:text-primary">
                  Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
