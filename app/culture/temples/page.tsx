"use client"

import { useLanguage } from "@/hooks/use-language"
import { MapPin, Clock, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TemplesPage() {
  const { language } = useLanguage()

  const temples = [
    {
      id: 1,
      name: {
        en: "Pashupatinath Temple",
        np: "पशुपतिनाथ मन्दिर",
        newa: "पशुपतिनाथ देवल",
      },
      location: "Kathmandu",
      description: {
        en: "Sacred Hindu temple dedicated to Lord Shiva, UNESCO World Heritage Site",
        np: "भगवान शिवलाई समर्पित पवित्र हिन्दू मन्दिर, युनेस्को विश्व सम्पदा स्थल",
        newa: "भगवान शिवलाइ समर्पित पवित्र हिन्दू देवल, युनेस्को विश्व सम्पदा स्थल",
      },
      image: "/pashupatinath-temple.png",
      established: "5th century",
      visitors: "1M+ annually",
      category: "Hindu Temple",
    },
    {
      id: 2,
      name: {
        en: "Swayambhunath Stupa",
        np: "स्वयम्भूनाथ स्तूप",
        newa: "स्वयम्भू चैत्य",
      },
      location: "Kathmandu",
      description: {
        en: "Ancient Buddhist stupa also known as Monkey Temple, symbol of wisdom and compassion",
        np: "बाँदर मन्दिर भनेर चिनिने पुरातन बौद्ध स्तूप, बुद्धि र करुणाको प्रतीक",
        newa: "वानर देवल धकाः थाय् पुरातन बौद्ध चैत्य, बुद्धि व करुणाया प्रतीक",
      },
      image: "/swayambhunath-stupa.png",
      established: "5th century",
      visitors: "500K+ annually",
      category: "Buddhist Stupa",
    },
    {
      id: 3,
      name: {
        en: "Boudhanath Stupa",
        np: "बौद्धनाथ स्तूप",
        newa: "खास्ति चैत्य",
      },
      location: "Kathmandu",
      description: {
        en: "One of the largest Buddhist stupas in the world, center of Tibetan Buddhism in Nepal",
        np: "संसारको सबैभन्दा ठूलो बौद्ध स्तूप मध्ये एक, नेपालमा तिब्बती बौद्ध धर्मको केन्द्र",
        newa: "संसारया सबैभन्दा थें बौद्ध चैत्य न्हुदं छगू, नेपालय् तिब्बती बौद्ध धर्मया केन्द्र",
      },
      image: "/boudhanath-stupa.png",
      established: "14th century",
      visitors: "800K+ annually",
      category: "Buddhist Stupa",
    },
    {
      id: 4,
      name: {
        en: "Changu Narayan Temple",
        np: "चाँगु नारायण मन्दिर",
        newa: "चाँगु नारायण देवल",
      },
      location: "Bhaktapur",
      description: {
        en: "Oldest Hindu temple in Nepal dedicated to Lord Vishnu, UNESCO World Heritage Site",
        np: "भगवान विष्णुलाई समर्पित नेपालको सबैभन्दा पुरानो हिन्दू मन्दिर",
        newa: "भगवान विष्णुलाइ समर्पित नेपालया सबैभन्दा पुरातन हिन्दू देवल",
      },
      image: "/changu-narayan-temple.png",
      established: "4th century",
      visitors: "200K+ annually",
      category: "Hindu Temple",
    },
    {
      id: 5,
      name: {
        en: "Kumari Ghar",
        np: "कुमारी घर",
        newa: "कुमारी छेँ",
      },
      location: "Kathmandu Durbar Square",
      description: {
        en: "Residence of the Living Goddess Kumari, unique tradition of Newar culture",
        np: "जीवित देवी कुमारीको निवास, नेवार संस्कृतिको अनौठो परम्परा",
        newa: "जीवित देवी कुमारीया निवास, नेवा: संस्कृतिया अनौठो परम्परा",
      },
      image: "/kumari-ghar-architecture.png",
      established: "17th century",
      visitors: "300K+ annually",
      category: "Cultural Heritage",
    },
    {
      id: 6,
      name: {
        en: "Nyatapola Temple",
        np: "न्यातपोल मन्दिर",
        newa: "न्यातपोल देवल",
      },
      location: "Bhaktapur",
      description: {
        en: "Five-story pagoda temple, masterpiece of Newar architecture and craftsmanship",
        np: "पाँच तले प्यागोडा मन्दिर, नेवार वास्तुकला र शिल्पकलाको उत्कृष्ट नमूना",
        newa: "न्ह तल्ले प्यागोडा देवल, नेवा: वास्तुकला व शिल्पकलाया उत्कृष्ट नमूना",
      },
      image: "/nyatapola-temple.png",
      established: "1702 CE",
      visitors: "150K+ annually",
      category: "Hindu Temple",
    },
  ]

  const content = {
    en: {
      title: "Sacred Temples",
      subtitle: "Discover the Divine Heritage of Nepal",
      viewOnMap: "View on Map",
      visitWebsite: "Visit Website",
      established: "Established",
      annualVisitors: "Annual Visitors",
      category: "Category",
    },
    np: {
      title: "पवित्र मन्दिरहरू",
      subtitle: "नेपालको दिव्य सम्पदा पत्ता लगाउनुहोस्",
      viewOnMap: "नक्सामा हेर्नुहोस्",
      visitWebsite: "वेबसाइट हेर्नुहोस्",
      established: "स्थापना",
      annualVisitors: "वार्षिक आगन्तुकहरू",
      category: "श्रेणी",
    },
    newa: {
      title: "पवित्र देवलहरू",
      subtitle: "नेपालया दिव्य सम्पदा न्ह्याना",
      viewOnMap: "नक्सामा च्वनेगु",
      visitWebsite: "वेबसाइट च्वनेगु",
      established: "स्थापना",
      annualVisitors: "वार्षिक आगन्तुकहरू",
      category: "श्रेणी",
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">{currentContent.title}</h1>
          <p className="text-xl text-green-600">{currentContent.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {temples.map((temple) => (
            <Card key={temple.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={temple.image || "/placeholder.svg"}
                  alt={temple.name[language]}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-green-600">{temple.category}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-green-800">{temple.name[language]}</CardTitle>
                <CardDescription className="flex items-center text-green-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {temple.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{temple.description[language]}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="font-medium">{currentContent.established}:</span>
                    <span className="ml-1">{temple.established}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="font-medium">{currentContent.annualVisitors}:</span>
                    <span className="ml-1">{temple.visitors}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                    onClick={() =>
                      window.open(`https://maps.google.com/search/${temple.name.en} ${temple.location}`, "_blank")
                    }
                  >
                    <MapPin className="h-4 w-4 mr-1" />
                    {currentContent.viewOnMap}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      window.open(`https://en.wikipedia.org/wiki/${temple.name.en.replace(/\s+/g, "_")}`, "_blank")
                    }
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700"
            onClick={() => window.open("https://maps.google.com/search/temples+in+nepal", "_blank")}
          >
            <MapPin className="h-5 w-5 mr-2" />
            {language === "en"
              ? "Explore All Temples on Map"
              : language === "np"
                ? "नक्सामा सबै मन्दिरहरू हेर्नुहोस्"
                : "नक्सामा सब्बै देवलहरू च्वनेगु"}
          </Button>
        </div>
      </div>
    </div>
  )
}
