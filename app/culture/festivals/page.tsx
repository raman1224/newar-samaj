"use client"

import { useLanguage } from "@/hooks/use-language"
import { Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FestivalsPage() {
  const { language } = useLanguage()

  const festivals = [
    {
      id: 1,
      name: {
        en: "Indra Jatra",
        np: "इन्द्र जात्रा",
        newa: "येँया:",
      },
      date: "September (Bhadra)",
      duration: "8 days",
      location: "Kathmandu Durbar Square",
      description: {
        en: "Festival of Indra, the king of gods, featuring chariot processions and traditional dances",
        np: "देवताहरूका राजा इन्द्रको पर्व, रथयात्रा र परम्परागत नृत्यहरू सहित",
        newa: "देवताहरूया राजा इन्द्रया पर्व, रथयात्रा व परम्परागत प्यखं सहित",
      },
      image: "/cullakhai.jpg",
      significance: "Celebrates the end of monsoon and honors the living goddess Kumari",
      type: "Religious",
    },
    {
      id: 2,
      name: {
        en: "Gai Jatra",
        np: "गाई जात्रा",
        newa: "सा: पारु",
      },
      date: "August (Bhadra)",
      duration: "1 day",
      location: "Kathmandu Valley",
      description: {
        en: "Festival of cows to honor deceased family members and bring comfort to grieving families",
        np: "मृत परिवारका सदस्यहरूको सम्मान र शोकमा परेका परिवारहरूलाई सान्त्वना दिने गाईको पर्व",
        newa: "स्वर्गीय परिवारया सदस्यहरूया सम्मान व शोकय् परेका परिवारहरूलाइ सान्त्वना बियेगु सा:या पर्व",
      },
      image: "/cullakhai.png",
      significance: "Helps families cope with grief through community support and humor",
      type: "Cultural",
    },
    {
      id: 3,
      name: {
        en: "Bisket Jatra",
        np: "बिस्केट जात्रा",
        newa: "बिस्का: जात्रा",
      },
      date: "April (Chaitra/Baisakh)",
      duration: "9 days",
      location: "Bhaktapur",
      description: {
        en: "New Year festival featuring chariot pulling and traditional celebrations",
        np: "रथ तान्ने र परम्परागत उत्सवहरू सहितको नयाँ वर्षको पर्व",
        newa: "रथ च्वयेगु व परम्परागत उत्सवहरू सहितया न्हू बर्षया पर्व",
      },
      image: "/bisket-jatra-chariot.png",
      significance: "Marks the Newar New Year and celebrates victory of good over evil",
      type: "Religious",
    },
    {
      id: 4,
      name: {
        en: "Machindranath Jatra",
        np: "मच्छिन्द्रनाथ जात्रा",
        newa: "बुंग द्य: जात्रा",
      },
      date: "April-May (Baisakh)",
      duration: "6 months",
      location: "Patan",
      description: {
        en: "Longest festival in Nepal honoring the rain god Machindranath",
        np: "वर्षाका देवता मच्छिन्द्रनाथको सम्मानमा नेपालको सबैभन्दा लामो पर्व",
        newa: "वर्षाया देवता मच्छिन्द्रनाथया सम्मानय् नेपालया सबैभन्दा निरी पर्व",
      },
      image: "/machindranath-jatra-patan.png",
      significance: "Ensures good monsoon rains for agricultural prosperity",
      type: "Religious",
    },
    {
      id: 5,
      name: {
        en: "Dashain",
        np: "दशैं",
        newa: "मोहनी",
      },
      date: "September-October (Ashwin)",
      duration: "15 days",
      location: "Throughout Nepal",
      description: {
        en: "Greatest festival of Nepal celebrating victory of goddess Durga over evil",
        np: "दुष्टशक्तिमाथि देवी दुर्गाको विजयको उत्सव मनाउने नेपालको सबैभन्दा ठूलो पर्व",
        newa: "दुष्टशक्तिय् देवी दुर्गाया विजयया उत्सव मनाउनी नेपालया सबैभन्दा थें पर्व",
      },
      image: "/dashain-durga-celebration.png",
      significance: "Celebrates triumph of good over evil and family reunions",
      type: "Religious",
    },
    {
      id: 6,
      name: {
        en: "Tihar",
        np: "तिहार",
        newa: "स्वन्ति",
      },
      date: "October-November (Kartik)",
      duration: "5 days",
      location: "Throughout Nepal",
      description: {
        en: "Festival of lights honoring different animals and relationships",
        np: "विभिन्न जनावर र सम्बन्धहरूको सम्मान गर्ने बत्तीको पर्व",
        newa: "विभिन्न जनावर व सम्बन्धहरूया सम्मान यानी बत्तीया पर्व",
      },
      image: "/tihar-lights-nepal.png",
      significance: "Celebrates the bond between humans, animals, and nature",
      type: "Religious",
    },
  ]

  const content = {
    en: {
      title: "Newar Festivals",
      subtitle: "Celebrate Our Rich Cultural Traditions",
      duration: "Duration",
      location: "Location",
      significance: "Significance",
      type: "Type",
      viewCalendar: "View Festival Calendar",
    },
    np: {
      title: "नेवार चाडपर्वहरू",
      subtitle: "हाम्रो समृद्ध सांस्कृतिक परम्पराहरूको उत्सव",
      duration: "अवधि",
      location: "स्थान",
      significance: "महत्व",
      type: "प्रकार",
      viewCalendar: "पर्व पात्रो हेर्नुहोस्",
    },
    newa: {
      title: "नेवा: नख:हरू",
      subtitle: "झीगु धनी सांस्कृतिक परम्पराहरूया उत्सव",
      duration: "अवधि",
      location: "स्थान",
      significance: "महत्व",
      type: "प्रकार",
      viewCalendar: "नख: पात्रो च्वनेगु",
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-800 mb-4">{currentContent.title}</h1>
          <p className="text-xl text-orange-600">{currentContent.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {festivals.map((festival) => (
            <Card key={festival.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={festival.image || "/placeholder.svg"}
                  alt={festival.name[language]}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-orange-600">{festival.type}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-orange-800">{festival.name[language]}</CardTitle>
                <CardDescription className="flex items-center text-orange-600">
                  <Calendar className="h-4 w-4 mr-1" />
                  {festival.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{festival.description[language]}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="font-medium">{currentContent.duration}:</span>
                    <span className="ml-1">{festival.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="font-medium">{currentContent.location}:</span>
                    <span className="ml-1">{festival.location}</span>
                  </div>
                </div>

                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <span className="font-medium">{currentContent.significance}:</span> {festival.significance}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700"
            onClick={() => window.open("https://www.nepalsambat.com/history-nepal-sambat/", "_blank")}
          >
            <Calendar className="h-5 w-5 mr-2" />
            {currentContent.viewCalendar}
          </Button>
        </div>
      </div>
    </div>
  )
}
