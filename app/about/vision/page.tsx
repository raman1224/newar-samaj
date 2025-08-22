"use client"

import { useLanguage } from "@/hooks/use-language"
import { Eye, Target, Star, Lightbulb } from "lucide-react"

export default function VisionPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Our Vision & Values",
      subtitle: "Guiding Principles for Our Future",
      vision:
        "To be the leading global platform that preserves, celebrates, and promotes Newar culture, creating a vibrant, connected community that bridges tradition with modernity while inspiring future generations to embrace their heritage.",
      coreValues: [
        {
          icon: Eye,
          title: "Cultural Authenticity",
          description: "Maintaining the genuine essence of Newar traditions while adapting to contemporary needs.",
        },
        {
          icon: Target,
          title: "Community Excellence",
          description: "Striving for the highest standards in all our cultural, educational, and social initiatives.",
        },
        {
          icon: Star,
          title: "Inclusive Heritage",
          description: "Welcoming all who respect and wish to learn about Newar culture, regardless of background.",
        },
        {
          icon: Lightbulb,
          title: "Innovation in Tradition",
          description: "Using modern technology and methods to preserve and share our ancient wisdom.",
        },
      ],
      futureGoals: [
        "Establish Newar cultural centers in major cities worldwide",
        "Create comprehensive digital archives of Newar heritage",
        "Develop AI-powered language learning tools for Newar language",
        "Build sustainable economic opportunities for community members",
        "Foster academic research and scholarly publications",
        "Strengthen interfaith and intercultural relationships globally",
      ],
    },
    np: {
      title: "हाम्रो दृष्टिकोण र मूल्यहरू",
      subtitle: "हाम्रो भविष्यका लागि मार्गदर्शक सिद्धान्तहरू",
      vision:
        "नेवार संस्कृतिको संरक्षण, उत्सव र प्रवर्द्धन गर्ने अग्रणी विश्वव्यापी मञ्च बनी, परम्परालाई आधुनिकतासँग जोड्ने जीवन्त, जडित समुदाय सिर्जना गर्दै भावी पुस्ताहरूलाई आफ्नो सम्पदा अपनाउन प्रेरणा दिनु।",
      coreValues: [
        {
          icon: Eye,
          title: "सांस्कृतिक प्रामाणिकता",
          description: "समसामयिक आवश्यकताहरूसँग अनुकूलन गर्दै नेवार परम्पराको वास्तविक सार कायम राख्नु।",
        },
        {
          icon: Target,
          title: "सामुदायिक उत्कृष्टता",
          description: "हाम्रा सबै सांस्कृतिक, शैक्षिक र सामाजिक पहलहरूमा उच्चतम मापदण्डका लागि प्रयास।",
        },
        {
          icon: Star,
          title: "समावेशी सम्पदा",
          description: "पृष्ठभूमि जेसुकै भए पनि नेवार संस्कृतिको सम्मान र सिक्न चाहने सबैलाई स्वागत।",
        },
        {
          icon: Lightbulb,
          title: "परम्परामा नवाचार",
          description: "हाम्रो पुरातन ज्ञानको संरक्षण र साझेदारीका लागि आधुनिक प्रविधि र विधिहरूको प्रयोग।",
        },
      ],
      futureGoals: [
        "विश्वका प्रमुख शहरहरूमा नेवार सांस्कृतिक केन्द्रहरूको स्थापना",
        "नेवार सम्पदाको व्यापक डिजिटल अभिलेखागार सिर्जना",
        "नेवार भाषाका लागि एआई-संचालित भाषा सिकाइ उपकरणहरूको विकास",
        "समुदायका सदस्यहरूका लागि दिगो आर्थिक अवसरहरूको निर्माण",
        "शैक्षणिक अनुसन्धान र विद्वत्तापूर्ण प्रकाशनहरूको प्रवर्द्धन",
        "विश्वव्यापी रूपमा अन्तरधर्म र अन्तरसांस्कृतिक सम्बन्धहरूको सुदृढीकरण",
      ],
    },
    newa: {
      title: "झी दृष्टिकोण व मूल्यहरू",
      subtitle: "झी भविष्यया लागि मार्गदर्शक सिद्धान्तहरू",
      vision:
        "नेवा: संस्कृतिया संरक्षण, उत्सव व प्रवर्द्धन यानी अग्रणी विश्वव्यापी मञ्च दुनी, परम्परालाइ आधुनिकतासं जोड्नी जीवन्त, जडित समुदाय सिर्जना यानी भावी पुस्ताहरूलाइ छगू सम्पदा अपनाउन प्रेरणा बियेगु।",
      coreValues: [
        {
          icon: Eye,
          title: "सांस्कृतिक प्रामाणिकता",
          description: "समसामयिक आवश्यकताहरूसं अनुकूलन यानी नेवा: परम्पराया वास्तविक सार कायम थें राखनु।",
        },
        {
          icon: Target,
          title: "सामुदायिक उत्कृष्टता",
          description: "झीगु सब्बै सांस्कृतिक, शैक्षिक व सामाजिक पहलहरूय् उच्चतम मापदण्डया लागि प्रयास।",
        },
        {
          icon: Star,
          title: "समावेशी सम्पदा",
          description: "पृष्ठभूमि जुसुकै दुलै नेवा: संस्कृतिया सम्मान व सिक्न म्हसिकनी सब्बैलाइ स्वागत।",
        },
        {
          icon: Lightbulb,
          title: "परम्परामा नवाचार",
          description: "झीगु पुरातन ज्ञानया संरक्षण व साझेदारीया लागि आधुनिक प्रविधि व विधिहरूया प्रयोग।",
        },
      ],
      futureGoals: [
        "विश्वया प्रमुख शहरहरूय् नेवा: सांस्कृतिक केन्द्रहरूया स्थापना",
        "नेवा: सम्पदाया व्यापक डिजिटल अभिलेखागार सिर्जना",
        "नेवा: भाषाया लागि एआई-संचालित भाषा सिकाइ उपकरणहरूया विकास",
        "समुदायया सदस्यहरूया लागि दिगो आर्थिक अवसरहरूया निर्माण",
        "शैक्षणिक अनुसन्धान व विद्वत्तापूर्ण प्रकाशनहरूया प्रवर्द्धन",
        "विश्वव्यापी रूपं अन्तरधर्म व अन्तरसांस्कृतिक सम्बन्धहरूया सुदृढीकरण",
      ],
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">{currentContent.title}</h1>
          <p className="text-xl text-green-600">{currentContent.subtitle}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">
            {language === "en" ? "Our Vision" : language === "np" ? "हाम्रो दृष्टिकोण" : "झी दृष्टिकोण"}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">{currentContent.vision}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {currentContent.coreValues.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">
            {language === "en" ? "Future Goals" : language === "np" ? "भविष्यका लक्ष्यहरू" : "भविष्यया लक्ष्यहरू"}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {currentContent.futureGoals.map((goal, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-green-500 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
