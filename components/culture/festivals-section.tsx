"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Sparkles, Play, Heart } from "lucide-react"

interface Festival {
  id: number
  name: string
  nameNewa: string
  date: string
  duration: string
  location: string
  description: string
  significance: string
  image: string
  category: "religious" | "cultural" | "seasonal"
  activities: string[]
  traditions: string[]
  isUpcoming: boolean
}

const festivals: Festival[] = [
  {
    id: 1,
    name: "Indra Jatra",
    nameNewa: "इन्द्र जात्रा",
    date: "September 2024",
    duration: "8 days",
    location: "Kathmandu Durbar Square",
    description:
      "The most celebrated festival of Kathmandu, honoring Lord Indra with traditional dances, chariot processions, and cultural performances.",
    significance: "Celebrates the end of monsoon and honors the rain god Indra",
    image: "/newar-festival-course.png",
    category: "religious",
    activities: ["Chariot Procession", "Traditional Dances", "Cultural Programs", "Food Festivals"],
    traditions: ["Kumari Jatra", "Lakhe Dance", "Traditional Music"],
    isUpcoming: true,
  },
  {
    id: 2,
    name: "Gai Jatra",
    nameNewa: "गाई जात्रा",
    date: "August 2024",
    duration: "1 day",
    location: "Kathmandu Valley",
    description:
      "Festival of cows where families who lost loved ones participate in processions, combining grief with celebration and humor.",
    significance: "Honors deceased family members and celebrates the cycle of life",
    image: "/ancient-newar-settlement.png",
    category: "cultural",
    activities: ["Cow Processions", "Comedy Shows", "Street Performances", "Traditional Games"],
    traditions: ["Satirical Performances", "Community Gatherings", "Memorial Rituals"],
    isUpcoming: false,
  },
  {
    id: 3,
    name: "Bisket Jatra",
    nameNewa: "बिस्केत जात्रा",
    date: "April 2025",
    duration: "9 days",
    location: "Bhaktapur",
    description:
      "New Year celebration featuring massive chariot pulling, traditional rituals, and community festivities marking the Nepali New Year.",
    significance: "Celebrates Nepali New Year and community unity",
    image: "/newar-golden-age-temples.png",
    category: "seasonal",
    activities: ["Chariot Pulling", "Traditional Rituals", "Community Feasts", "Cultural Dances"],
    traditions: ["Tongue Piercing Ritual", "Chariot Competition", "New Year Ceremonies"],
    isUpcoming: true,
  },
]

export function FestivalsSection() {
  const [selectedFestival, setSelectedFestival] = React.useState<Festival | null>(null)
  const [activeCategory, setActiveCategory] = React.useState<string>("all")

  const filteredFestivals =
    activeCategory === "all" ? festivals : festivals.filter((festival) => festival.category === activeCategory)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "religious":
        return "bg-blue-100 text-blue-800"
      case "cultural":
        return "bg-green-100 text-green-800"
      case "seasonal":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Newar Festivals & Celebrations</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Experience the vibrant festivals that bring the Newar community together, celebrating traditions that have
          been passed down through generations
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center">
        <div className="flex gap-2 p-1 bg-muted rounded-lg">
          {["all", "religious", "cultural", "seasonal"].map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="capitalize"
            >
              {category === "all" ? "All Festivals" : category}
            </Button>
          ))}
        </div>
      </div>

      <Tabs defaultValue="calendar" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
          <TabsTrigger value="calendar">Festival Calendar</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="traditions">Traditions</TabsTrigger>
        </TabsList>

        <TabsContent value="calendar" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFestivals.map((festival) => (
              <Card
                key={festival.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                onClick={() => setSelectedFestival(festival)}
              >
                <div className="relative">
                  <img
                    src={festival.image || "/placeholder.svg"}
                    alt={festival.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(festival.category)}>{festival.category}</Badge>
                  </div>
                  {festival.isUpcoming && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="default" className="bg-primary/90">
                        <Sparkles className="mr-1 h-3 w-3" />
                        Upcoming
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-xl mb-1">{festival.name}</h3>
                    <p className="text-sm opacity-90 font-devanagari">{festival.nameNewa}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {festival.date}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {festival.duration}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {festival.location}
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">{festival.description}</p>

                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Heart className="mr-2 h-3 w-3" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="space-y-4">
            {festivals
              .filter((f) => f.isUpcoming)
              .map((festival) => (
                <Card key={festival.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <img
                        src={festival.image || "/placeholder.svg"}
                        alt={festival.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{festival.name}</h3>
                          <Badge variant="secondary">{festival.date}</Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{festival.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {festival.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {festival.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm">
                          <Calendar className="mr-2 h-4 w-4" />
                          Add to Calendar
                        </Button>
                        <Button variant="outline" size="sm">
                          <Users className="mr-2 h-4 w-4" />
                          Join Community
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="traditions" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Festival Traditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Learn about the rich traditions and customs that make each Newar festival unique and meaningful.
                  </p>
                  <Button className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Tradition Videos
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Community Participation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Join our community to participate in festival celebrations and connect with other Newar families.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Users className="mr-2 h-4 w-4" />
                    Join Festival Groups
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Festival Detail Modal */}
      {selectedFestival && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader className="relative">
              <img
                src={selectedFestival.image || "/placeholder.svg"}
                alt={selectedFestival.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <Button
                variant="outline"
                size="sm"
                className="absolute top-4 right-4 bg-white/90"
                onClick={() => setSelectedFestival(null)}
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedFestival.name}</h2>
                  <p className="text-xl text-muted-foreground font-devanagari">{selectedFestival.nameNewa}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedFestival.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedFestival.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedFestival.location}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Description</h3>
                  <p className="text-muted-foreground">{selectedFestival.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Cultural Significance</h3>
                  <p className="text-muted-foreground">{selectedFestival.significance}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Festival Activities</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedFestival.activities.map((activity, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Traditional Practices</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedFestival.traditions.map((tradition, index) => (
                      <Badge key={index} variant="outline">
                        {tradition}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    Add to Calendar
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Users className="mr-2 h-4 w-4" />
                    Join Celebration
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
