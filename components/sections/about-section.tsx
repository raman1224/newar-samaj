"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { History, Target, Heart, Users, MessageCircle, BookOpen, Award, ChevronLeft, ChevronRight } from "lucide-react"

const timelineEvents = [
  {
    year: "1200 CE",
    title: "Ancient Newar Civilization",
    description: "Formation of early Newar settlements in Kathmandu Valley",
    image: "/ancient-newar-settlement.png",
  },
  {
    year: "1400 CE",
    title: "Golden Age of Art",
    description: "Flourishing of Newar architecture, sculpture, and craftsmanship",
    image: "/newar-golden-age-temples.png",
  },
  {
    year: "1768 CE",
    title: "Unification Period",
    description: "Integration into unified Nepal while preserving cultural identity",
    image: "/newar-cultural-preservation-historical.png",
  },
  {
    year: "2024 CE",
    title: "Digital Renaissance",
    description: "Modern AI-powered platform for cultural preservation and learning",
    image: "/digital-cultural-platform-ai.png",
  },
]

const values = [
  {
    icon: History,
    title: "Heritage Preservation",
    description: "Safeguarding our rich cultural legacy for future generations",
    color: "text-primary",
  },
  {
    icon: BookOpen,
    title: "Language Revival",
    description: "Promoting and teaching Newar language through modern methods",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Community Unity",
    description: "Bringing together Newar people worldwide through shared culture",
    color: "text-secondary",
  },
  {
    icon: Award,
    title: "Cultural Excellence",
    description: "Celebrating and promoting the finest aspects of Newar traditions",
    color: "text-primary",
  },
]

const leaders = [
  {
    name: "Dr. Rajesh Shakya",
    role: "Cultural Director",
    image: "/newar-cultural-leader.png",
    bio: "Leading expert in Newar history and cultural preservation",
  },
  {
    name: "Prof. Sushila Maharjan",
    role: "Language Coordinator",
    image: "/newar-language-expert.png",
    bio: "Pioneering researcher in Newar linguistics and education",
  },
  {
    name: "Mr. Bikash Dangol",
    role: "Technology Lead",
    image: "/technology-leader-ai-expert.png",
    bio: "AI specialist developing innovative cultural learning tools",
  },
  {
    name: "Ms. Kamala Tuladhar",
    role: "Community Outreach",
    image: "/newar-community-leader.png",
    bio: "Connecting global Newar communities through digital platforms",
  },
]

export function AboutSection() {
  const [currentLeader, setCurrentLeader] = React.useState(0)

  const nextLeader = () => {
    setCurrentLeader((prev) => (prev + 1) % leaders.length)
  }

  const prevLeader = () => {
    setCurrentLeader((prev) => (prev - 1 + leaders.length) % leaders.length)
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Newar Samaj
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Heritage</span> & <span className="text-accent">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging ancient wisdom with modern technology to preserve and promote Newar culture for generations to
            come.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To preserve, promote, and revitalize Newar culture, language, and traditions through innovative
                technology, community engagement, and educational initiatives that connect our heritage with the modern
                world.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                A world where Newar culture thrives in the digital age, where every Newar person can connect with their
                roots, learn their language, and contribute to a vibrant global community that honors our past while
                embracing the future.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Journey Through Time</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-secondary"></div>
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-8`}
                >
                  <div className="flex-1">
                    <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <Badge variant="secondary" className="text-sm font-bold">
                            {event.year}
                          </Badge>
                          <h4 className="text-xl font-semibold">{event.title}</h4>
                        </div>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-32 object-cover rounded-md"
                        />
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-muted rounded-full group-hover:scale-110 transition-transform">
                      <value.icon className={`w-8 h-8 ${value.color}`} />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Carousel */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Meet Our Leadership</h3>
          <div className="relative max-w-2xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-6 ring-4 ring-primary/20">
                  <AvatarImage
                    src={leaders[currentLeader].image || "/placeholder.svg"}
                    alt={leaders[currentLeader].name}
                  />
                  <AvatarFallback className="text-2xl">
                    {leaders[currentLeader].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h4 className="text-2xl font-bold mb-2">{leaders[currentLeader].name}</h4>
                <Badge variant="secondary" className="mb-4">
                  {leaders[currentLeader].role}
                </Badge>
                <p className="text-muted-foreground">{leaders[currentLeader].bio}</p>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform bg-transparent"
              onClick={prevLeader}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform bg-transparent"
              onClick={nextLeader}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            <div className="flex justify-center mt-6 gap-2">
              {leaders.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentLeader ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentLeader(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* AI Chatbot CTA */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Have Questions About Our Culture?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our AI-powered cultural assistant is here to help you learn about Newar history, traditions, leadership,
                and answer any questions about our heritage.
              </p>
            </div>
            <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with Cultural AI
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
