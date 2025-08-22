"use client"

import { TemplesSection } from "@/components/culture/temples-section"
import { FestivalsSection } from "@/components/culture/festivals-section"
import { CulturalPractices } from "@/components/culture/cultural-practices"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Palette, BookOpen, Users, Heart } from "lucide-react"

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Newar Culture & Heritage
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Immerse yourself in the rich cultural tapestry of the Newar community. Explore ancient temples, vibrant
            festivals, traditional arts, and timeless practices that have shaped our identity for centuries.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Sacred Temples</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm text-muted-foreground">Annual Festivals</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Palette className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm text-muted-foreground">Art Forms</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm text-muted-foreground">Years of Heritage</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="temples" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto h-12">
            <TabsTrigger value="temples" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Temples & Heritage
            </TabsTrigger>
            <TabsTrigger value="festivals" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Festivals
            </TabsTrigger>
            <TabsTrigger value="practices" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Cultural Practices
            </TabsTrigger>
          </TabsList>

          <TabsContent value="temples" className="space-y-8">
            <TemplesSection />
          </TabsContent>

          <TabsContent value="festivals" className="space-y-8">
            <FestivalsSection />
          </TabsContent>

          <TabsContent value="practices" className="space-y-8">
            <CulturalPractices />
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Preserve Our Heritage Together</h2>
              <p className="text-muted-foreground mb-6">
                Join our community in preserving and sharing the beautiful traditions of Newar culture. Whether you're
                learning about your heritage or discovering it for the first time, every contribution helps keep our
                culture alive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                  <Heart className="mr-2 h-5 w-5" />
                  Join Our Community
                </Button>
                <Button variant="outline" size="lg">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
