"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Palette, Music, Utensils, Home, Heart, Star } from "lucide-react"

interface CulturalPractice {
  id: number
  title: string
  titleNewa: string
  category: "arts" | "cuisine" | "rituals" | "crafts" | "music" | "architecture"
  description: string
  significance: string
  image: string
  traditions: string[]
  modernRelevance: string
  learnMore: string
}

const practices: CulturalPractice[] = [
  {
    id: 1,
    title: "Traditional Wood Carving",
    titleNewa: "काष्ठ कला",
    category: "crafts",
    description:
      "Intricate wood carving techniques passed down through generations, creating beautiful windows, doors, and decorative elements.",
    significance: "Represents the artistic excellence and spiritual devotion of Newar craftsmen",
    image: "/newar-golden-age-temples.png",
    traditions: ["Window Carving", "Temple Decoration", "Furniture Making", "Architectural Elements"],
    modernRelevance: "Contemporary artists continue this tradition in modern architecture and art",
    learnMore: "Join our woodcarving workshops to learn traditional techniques",
  },
  {
    id: 2,
    title: "Newari Cuisine",
    titleNewa: "नेवारी खाना",
    category: "cuisine",
    description:
      "Rich culinary tradition featuring unique flavors, cooking techniques, and ceremonial foods that reflect Newar culture.",
    significance: "Food plays a central role in religious ceremonies and social gatherings",
    image: "/newar-festival-course.png",
    traditions: ["Samay Baji", "Yomari", "Chatamari", "Bara", "Traditional Feasts"],
    modernRelevance: "Newari restaurants worldwide preserve and share these flavors",
    learnMore: "Explore cooking classes and traditional recipe collections",
  },
  {
    id: 3,
    title: "Classical Music & Dance",
    titleNewa: "संगीत र नृत्य",
    category: "music",
    description: "Traditional music and dance forms that accompany religious ceremonies and cultural celebrations.",
    significance: "Preserves ancient melodies and movements that tell stories of gods and heroes",
    image: "/ancient-newar-settlement.png",
    traditions: ["Charya Dance", "Devotional Songs", "Festival Music", "Classical Instruments"],
    modernRelevance: "Cultural groups worldwide perform and teach these art forms",
    learnMore: "Join music and dance classes to learn traditional performances",
  },
]

const categories = [
  { id: "arts", label: "Arts & Crafts", icon: Palette },
  { id: "cuisine", label: "Cuisine", icon: Utensils },
  { id: "rituals", label: "Rituals", icon: Heart },
  { id: "crafts", label: "Traditional Crafts", icon: Star },
  { id: "music", label: "Music & Dance", icon: Music },
  { id: "architecture", label: "Architecture", icon: Home },
]

export function CulturalPractices() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all")
  const [selectedPractice, setSelectedPractice] = React.useState<CulturalPractice | null>(null)

  const filteredPractices =
    selectedCategory === "all" ? practices : practices.filter((practice) => practice.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find((cat) => cat.id === category)
    return categoryData ? categoryData.icon : BookOpen
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      arts: "bg-purple-100 text-purple-800",
      cuisine: "bg-orange-100 text-orange-800",
      rituals: "bg-red-100 text-red-800",
      crafts: "bg-blue-100 text-blue-800",
      music: "bg-green-100 text-green-800",
      architecture: "bg-yellow-100 text-yellow-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Cultural Practices & Traditions</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover the rich cultural practices that define Newar identity, from traditional arts and crafts to culinary
          heritage and spiritual rituals
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-3">
        <Button
          variant={selectedCategory === "all" ? "default" : "outline"}
          onClick={() => setSelectedCategory("all")}
          className="mb-2"
        >
          All Practices
        </Button>
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="mb-2"
            >
              <Icon className="mr-2 h-4 w-4" />
              {category.label}
            </Button>
          )
        })}
      </div>

      <Tabs defaultValue="practices" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
          <TabsTrigger value="practices">Practices</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="practices" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPractices.map((practice) => {
              const Icon = getCategoryIcon(practice.category)
              return (
                <Card
                  key={practice.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                  onClick={() => setSelectedPractice(practice)}
                >
                  <div className="relative">
                    <img
                      src={practice.image || "/placeholder.svg"}
                      alt={practice.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(practice.category)}>
                        <Icon className="mr-1 h-3 w-3" />
                        {practice.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{practice.title}</h3>
                      <p className="text-sm opacity-90 font-devanagari">{practice.titleNewa}</p>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{practice.description}</p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Key Traditions:</h4>
                        <div className="flex flex-wrap gap-1">
                          {practice.traditions.slice(0, 3).map((tradition, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tradition}
                            </Badge>
                          ))}
                          {practice.traditions.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{practice.traditions.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <BookOpen className="mr-2 h-3 w-3" />
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="learning" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Cultural Workshops
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Join hands-on workshops to learn traditional Newar arts, crafts, and cultural practices from master
                    artisans.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Wood Carving Workshop</span>
                      <Badge variant="outline">Available</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Traditional Cooking Class</span>
                      <Badge variant="outline">Available</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Music & Dance Lessons</span>
                      <Badge variant="outline">Available</Badge>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    Browse Workshops
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Master Artisans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Connect with master artisans and cultural practitioners who preserve and teach traditional Newar
                    arts.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Palette className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Master Craftsmen</p>
                        <p className="text-xs text-muted-foreground">Traditional arts & crafts</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <Music className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Cultural Performers</p>
                        <p className="text-xs text-muted-foreground">Music, dance & storytelling</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Heart className="mr-2 h-4 w-4" />
                    Meet Artisans
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="community" className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Join Our Cultural Community</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with other Newar families and cultural enthusiasts to share knowledge, participate in events, and
              preserve our rich heritage together.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Cultural Groups</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join local and online groups dedicated to preserving Newar culture
                  </p>
                  <Button variant="outline" size="sm">
                    Join Groups
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Knowledge Sharing</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Share your knowledge and learn from community elders
                  </p>
                  <Button variant="outline" size="sm">
                    Share Knowledge
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Cultural Events</h4>
                  <p className="text-sm text-muted-foreground mb-4">Participate in cultural events and celebrations</p>
                  <Button variant="outline" size="sm">
                    View Events
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Practice Detail Modal */}
      {selectedPractice && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader className="relative">
              <img
                src={selectedPractice.image || "/placeholder.svg"}
                alt={selectedPractice.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <Button
                variant="outline"
                size="sm"
                className="absolute top-4 right-4 bg-white/90"
                onClick={() => setSelectedPractice(null)}
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedPractice.title}</h2>
                  <p className="text-xl text-muted-foreground font-devanagari">{selectedPractice.titleNewa}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Description</h3>
                  <p className="text-muted-foreground">{selectedPractice.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Cultural Significance</h3>
                  <p className="text-muted-foreground">{selectedPractice.significance}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Traditional Elements</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedPractice.traditions.map((tradition, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-sm">{tradition}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Modern Relevance</h3>
                  <p className="text-muted-foreground">{selectedPractice.modernRelevance}</p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Learn More</h4>
                  <p className="text-sm text-muted-foreground">{selectedPractice.learnMore}</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Join Workshop
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Users className="mr-2 h-4 w-4" />
                    Find Community
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
