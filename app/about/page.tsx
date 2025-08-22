"use client"

import * as React from "react"
import { MainNav } from "@/components/navigation/main-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const [currentLanguage, setCurrentLanguage] = React.useState("en")
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language)
  }

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const content = {
    en: {
      title: "About Newar Samaj",
      subtitle: "Preserving Heritage, Building Future",
      mission: {
        title: "Our Mission",
        content:
          "To preserve, promote, and perpetuate the rich cultural heritage of the Newar community while fostering unity, education, and progress among Newar people worldwide.",
      },
      vision: {
        title: "Our Vision",
        content:
          "A vibrant global Newar community that maintains its cultural identity while embracing modernity, ensuring our traditions, language, and values are passed to future generations.",
      },
      values: {
        title: "Our Core Values",
        items: [
          { title: "Cultural Preservation", desc: "Safeguarding our ancient traditions, festivals, and customs" },
          { title: "Language Revival", desc: "Promoting Newar language through modern technology and education" },
          { title: "Community Unity", desc: "Bringing together Newar people across the globe" },
          { title: "Educational Excellence", desc: "Fostering learning and knowledge sharing" },
          { title: "Religious Harmony", desc: "Respecting and preserving our spiritual heritage" },
        ],
      },
    },
    np: {
      title: "नेवार समाजको बारेमा",
      subtitle: "सम्पदा संरक्षण, भविष्य निर्माण",
      mission: {
        title: "हाम्रो मिशन",
        content:
          "नेवार समुदायको समृद्ध सांस्कृतिक सम्पदालाई संरक्षण, प्रवर्धन र निरन्तरता दिनु र विश्वभरका नेवार मानिसहरूमा एकता, शिक्षा र प्रगतिलाई बढावा दिनु।",
      },
      vision: {
        title: "हाम्रो दृष्टिकोण",
        content:
          "एक जीवन्त विश्वव्यापी नेवार समुदाय जसले आफ्नो सांस्कृतिक पहिचान कायम राख्दै आधुनिकतालाई अंगाल्छ र हाम्रा परम्परा, भाषा र मूल्यहरू भावी पुस्ताहरूलाई हस्तान्तरण गर्छ।",
      },
      values: {
        title: "हाम्रा मूल मूल्यहरू",
        items: [
          { title: "सांस्कृतिक संरक्षण", desc: "हाम्रा पुराना परम्परा, चाडपर्व र रीतिरिवाजको सुरक्षा" },
          { title: "भाषा पुनरुत्थान", desc: "आधुनिक प्रविधि र शिक्षाको माध्यमबाट नेवार भाषाको प्रवर्धन" },
          { title: "समुदायिक एकता", desc: "विश्वभरका नेवार मानिसहरूलाई एकसाथ ल्याउने" },
          { title: "शैक्षिक उत्कृष्टता", desc: "सिकाइ र ज्ञान साझाकरणलाई बढावा दिने" },
          { title: "धार्मिक सद्भावना", desc: "हाम्रो आध्यात्मिक सम्पदाको सम्मान र संरक्षण" },
        ],
      },
    },
    nw: {
      title: "नेवाः समाजया बारेय्",
      subtitle: "सम्पदा संरक्षण, भविष्य निर्माण",
      mission: {
        title: "झिगु मिशन",
        content:
          "नेवाः समुदायया समृद्ध सांस्कृतिक सम्पदालाई संरक्षण, प्रवर्धन व निरन्तरता बियाः व विश्वभरिका नेवाः मनूतय्में एकता, शिक्षा व प्रगतिलाई बढावा बियाः।",
      },
      vision: {
        title: "झिगु दृष्टिकोण",
        content:
          "छगू जीवन्त विश्वव्यापी नेवाः समुदाय जुन अपनाः सांस्कृतिक पहिचान कायम दुःसा आधुनिकतालाई अंगाल्छ व झिगु परम्परा, भाषा व मूल्यहरू भावी पुस्ताहरूलाई हस्तान्तरण यानाः।",
      },
      values: {
        title: "झिगु मूल मूल्यहरू",
        items: [
          { title: "सांस्कृतिक संरक्षण", desc: "झिगु पुराना परम्परा, नखः व रीतिरिवाजया सुरक्षा" },
          { title: "भाषा पुनरुत्थान", desc: "आधुनिक प्रविधि व शिक्षाया माध्यमतः नेवाः भाषाया प्रवर्धन" },
          { title: "समुदायिक एकता", desc: "विश्वभरिका नेवाः मनूतय्हरूलाई छगु ठायेय् ल्याउने" },
          { title: "शैक्षिक उत्कृष्टता", desc: "सिकाइ व ज्ञान साझाकरणलाई बढावा बियाः" },
          { title: "धार्मिक सद्भावना", desc: "झिगु आध्यात्मिक सम्पदाया सम्मान व संरक्षण" },
        ],
      },
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

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">{currentContent.title}</h1>
          <p className="text-xl text-muted-foreground mb-8 animate-slide-up delay-200">{currentContent.subtitle}</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">{currentContent.mission.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center max-w-4xl mx-auto leading-relaxed">{currentContent.mission.content}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">{currentContent.vision.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center max-w-4xl mx-auto leading-relaxed">{currentContent.vision.content}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{currentContent.values.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.values.items.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            {currentLanguage === "en"
              ? "Join Our Mission"
              : currentLanguage === "np"
                ? "हाम्रो मिशनमा सामेल हुनुहोस्"
                : "झिगु मिशनय् सामेल जुयाः"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {currentLanguage === "en"
              ? "Be part of preserving and promoting Newar culture for future generations."
              : currentLanguage === "np"
                ? "भावी पुस्ताका लागि नेवार संस्कृतिको संरक्षण र प्रवर्धनमा भाग लिनुहोस्।"
                : "भावी पुस्ताकाः तक्क नेवाः संस्कृतिया संरक्षण व प्रवर्धनय् भाग लिनुहोस्।"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              {currentLanguage === "en" ? "Become a Member" : currentLanguage === "np" ? "सदस्य बन्नुहोस्" : "सदस्य जुयाः"}
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              {currentLanguage === "en" ? "Learn More" : currentLanguage === "np" ? "थप जान्नुहोस्" : "अधिक छ्यानाः"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
