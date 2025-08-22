"use client"

import * as React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Star, Camera, Info, ExternalLink } from "lucide-react"

interface Temple {
  id: number
  name: string
  nameNewa: string
  location: string
  period: string
  significance: string
  description: string
  image: string
  rating: number
  visitors: string
  architecture: string
  festivals: string[]
  coordinates: { lat: number; lng: number }
}

const temples: Temple[] = [
  {
    id: 1,
    name: "Pashupatinath Temple",
    nameNewa: "पशुपतिनाथ मन्दिर",
    location: "Kathmandu",
    period: "5th Century",
    significance: "Sacred Hindu temple dedicated to Lord Shiva",
    description:
      "One of the most sacred Hindu temples in Nepal, featuring traditional Newar architecture and spiritual significance.",
    image: "/newar-temples-kathmandu.png",
    rating: 4.8,
    visitors: "1M+ annually",
    architecture: "Pagoda Style",
    festivals: ["Maha Shivaratri", "Teej", "Kartik Purnima"],
    coordinates: { lat: 27.7104, lng: 85.3484 },
  },
  {
    id: 2,
    name: "Swayambhunath Stupa",
    nameNewa: "स्वयम्भूनाथ स्तूप",
    location: "Kathmandu",
    period: "5th Century",
    significance: "Ancient Buddhist stupa with Newar cultural elements",
    description:
      "Also known as the Monkey Temple, this ancient stupa represents the harmony between Hindu and Buddhist traditions in Newar culture.",
    image: "/ancient-newar-settlement.png",
    rating: 4.7,
    visitors: "800K+ annually",
    architecture: "Stupa with Newar Elements",
    festivals: ["Buddha Jayanti", "Gunla", "Indra Jatra"],
    coordinates: { lat: 27.7149, lng: 85.2906 },
  },
  {
    id: 3,
    name: "Changu Narayan Temple",
    nameNewa: "चाँगु नारायण मन्दिर",
    location: "Bhaktapur",
    period: "4th Century",
    significance: "Oldest Hindu temple in Nepal with exquisite Newar craftsmanship",
    description:
      "UNESCO World Heritage site showcasing the finest examples of traditional Newar wood carving and stone sculpture.",
    image: "/newar-golden-age-temples.png",
    rating: 4.9,
    visitors: "300K+ annually",
    architecture: "Traditional Newar Pagoda",
    festivals: ["Changu Narayan Jatra", "Harisiddhi Jatra"],
    coordinates: { lat: 27.7167, lng: 85.4333 },
  },
]

export function TemplesSection() {
  const [selectedTemple, setSelectedTemple] = React.useState<Temple | null>(null)

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Sacred Temples & Heritage Sites</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore the magnificent temples and sacred places that showcase the rich architectural heritage and spiritual
          traditions of the Newar community
        </p>
      </div>

      <Tabs defaultValue="grid" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="grid">Temple Gallery</TabsTrigger>
          <TabsTrigger value="map">Interactive Map</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {temples.map((temple) => (
              <Card
                key={temple.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
                onClick={() => setSelectedTemple(temple)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={temple.image || "/placeholder.svg"}
                    alt={temple.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-black">
                      {temple.period}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white">
                      <h3 className="font-semibold text-lg">{temple.name}</h3>
                      <p className="text-sm opacity-90 font-devanagari">{temple.nameNewa}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{temple.location}</span>
                    <div className="flex items-center gap-1 ml-auto">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{temple.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{temple.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {temple.visitors}
                    </div>
                    <Button variant="outline" size="sm">
                      <Info className="mr-2 h-3 w-3" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="map" className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <div className="max-w-md mx-auto">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Temple Map</h3>
              <p className="text-muted-foreground mb-4">
                Explore temple locations with detailed information and virtual tours
              </p>
              <Button>
                <ExternalLink className="mr-2 h-4 w-4" />
                Open Full Map
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Temple Detail Modal */}
      {selectedTemple && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader className="relative">
              <img
                src={selectedTemple.image || "/placeholder.svg"}
                alt={selectedTemple.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <Button
                variant="outline"
                size="sm"
                className="absolute top-4 right-4 bg-white/90"
                onClick={() => setSelectedTemple(null)}
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">{selectedTemple.name}</h2>
                  <p className="text-lg text-muted-foreground font-devanagari">{selectedTemple.nameNewa}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Location:</span> {selectedTemple.location}
                  </div>
                  <div>
                    <span className="font-medium">Period:</span> {selectedTemple.period}
                  </div>
                  <div>
                    <span className="font-medium">Architecture:</span> {selectedTemple.architecture}
                  </div>
                  <div>
                    <span className="font-medium">Annual Visitors:</span> {selectedTemple.visitors}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Significance</h3>
                  <p className="text-muted-foreground">{selectedTemple.significance}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{selectedTemple.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Major Festivals</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTemple.festivals.map((festival, index) => (
                      <Badge key={index} variant="outline">
                        {festival}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1">
                    <Camera className="mr-2 h-4 w-4" />
                    Virtual Tour
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
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
