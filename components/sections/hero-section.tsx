"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-[url('/newar-temples-kathmandu.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Animated badge */}
        <div className="mb-8 animate-fade-in">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Cultural Platform
          </Badge>
        </div>

        {/* Main heading with gradient text */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
            Newar Samaj
          </span>
        </h1>

        {/* Subtitle in multiple languages */}
        <div className="mb-6 animate-slide-up delay-200">
          <p className="text-2xl md:text-3xl text-muted-foreground mb-2">Preserving Culture, Embracing Future</p>
          <p className="text-lg md:text-xl text-muted-foreground/80 font-devanagari">संस्कृति संरक्षण, भविष्य अंगीकार</p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-300">
          Discover the rich heritage of Newar culture, learn our beautiful language, and connect with our vibrant
          community through modern AI-powered tools and interactive experiences.
        </p>

        {/* CTA Buttons with enhanced animations */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-500">
          <Button
            size="lg"
            className="group relative px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center">
              Explore Culture
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-md"></div>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-background/80 backdrop-blur-sm"
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Learn Language
          </Button>
        </div>

        {/* Stats or quick info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up delay-700">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Cultural Artifacts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Interactive Lessons</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">AI Assistant</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
