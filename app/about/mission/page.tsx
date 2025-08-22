"use client"

import { useLanguage } from "@/hooks/use-language"
import { Heart, Users, Globe, BookOpen } from "lucide-react"

export default function MissionPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Our Mission",
      subtitle: "Preserving Heritage, Building Future",
      mission:
        "To preserve, promote, and perpetuate the rich cultural heritage, language, and traditions of the Newar community while fostering unity, education, and sustainable development for future generations.",
      values: [
        {
          icon: Heart,
          title: "Cultural Preservation",
          description: "Safeguarding our ancient traditions, festivals, and customs for future generations.",
        },
        {
          icon: Users,
          title: "Community Unity",
          description: "Building strong bonds among Newar people worldwide through shared heritage.",
        },
        {
          icon: Globe,
          title: "Global Connection",
          description: "Connecting Newar communities across the globe while maintaining our roots.",
        },
        {
          icon: BookOpen,
          title: "Education & Learning",
          description: "Promoting Newar language, arts, and cultural education through modern methods.",
        },
      ],
      objectives: [
        "Preserve and document Newar language, literature, and oral traditions",
        "Organize cultural events, festivals, and educational programs",
        "Support community members through social and economic initiatives",
        "Promote research and publication on Newar history and culture",
        "Foster interfaith and intercultural dialogue and understanding",
        "Develop digital platforms for cultural preservation and learning",
      ],
    },
    np: {
      title: "हाम्रो मिशन",
      subtitle: "सम्पदा संरक्षण, भविष्य निर्माण",
      mission:
        "नेवार समुदायको समृद्ध सांस्कृतिक सम्पदा, भाषा र परम्पराहरूको संरक्षण, प्रवर्द्धन र निरन्तरता कायम राख्दै एकता, शिक्षा र दिगो विकासलाई बढावा दिनु।",
      values: [
        {
          icon: Heart,
          title: "सांस्कृतिक संरक्षण",
          description: "भावी पुस्ताका लागि हाम्रा पुराना परम्परा, चाडपर्व र रीतिरिवाजको संरक्षण।",
        },
        {
          icon: Users,
          title: "समुदायिक एकता",
          description: "साझा सम्पदाको माध्यमबाट विश्वभरका नेवार जनताबीच बलियो सम्बन्ध निर्माण।",
        },
        {
          icon: Globe,
          title: "विश्वव्यापी सम्पर्क",
          description: "आफ्ना जरा कायम राख्दै विश्वभरका नेवार समुदायलाई जोड्नु।",
        },
        {
          icon: BookOpen,
          title: "शिक्षा र सिकाइ",
          description: "आधुनिक विधिहरूको प्रयोग गरी नेवार भाषा, कला र सांस्कृतिक शिक्षाको प्रवर्द्धन।",
        },
      ],
      objectives: [
        "नेवार भाषा, साहित्य र मौखिक परम्पराको संरक्षण र दस्तावेजीकरण",
        "सांस्कृतिक कार्यक्रम, चाडपर्व र शैक्षिक कार्यक्रमहरूको आयोजना",
        "सामाजिक र आर्थिक पहलहरूको माध्यमबाट समुदायका सदस्यहरूलाई सहयोग",
        "नेवार इतिहास र संस्कृतिमा अनुसन्धान र प्रकाशनको प्रवर्द्धन",
        "अन्तरधर्म र अन्तरसांस्कृतिक संवाद र समझदारीको विकास",
        "सांस्कृतिक संरक्षण र सिकाइका लागि डिजिटल प्लेटफर्मको विकास",
      ],
    },
    newa: {
      title: "झी मिशन",
      subtitle: "सम्पदा संरक्षण, भविष्य निर्माण",
      mission:
        "नेवा: समुदायया धनी सांस्कृतिक सम्पदा, भाषा व परम्पराहरूया संरक्षण, प्रवर्द्धन व निरन्तरता कायम याना एकता, शिक्षा व दिगो विकासलाइ बढावा बियेगु।",
      values: [
        {
          icon: Heart,
          title: "सांस्कृतिक संरक्षण",
          description: "न्हापा पुस्ताहरूया लागि झीगु पुरातन परम्परा, नख: व रीतिरिवाजया संरक्षण।",
        },
        {
          icon: Users,
          title: "समुदायिक एकता",
          description: "साझा सम्पदाया माध्यमं विश्वभरिका नेवा: मनूतबीच बलियो सम्बन्ध निर्माण।",
        },
        {
          icon: Globe,
          title: "विश्वव्यापी सम्पर्क",
          description: "छगू जरा कायम याना विश्वभरिका नेवा: समुदायलाइ जोड्नु।",
        },
        {
          icon: BookOpen,
          title: "शिक्षा व सिकाइ",
          description: "आधुनिक विधिहरूया प्रयोग यानी नेवा: भाषा, कला व सांस्कृतिक शिक्षाया प्रवर्द्धन।",
        },
      ],
      objectives: [
        "नेवा: भाषा, साहित्य व मौखिक परम्पराया संरक्षण व दस्तावेजीकरण",
        "सांस्कृतिक कार्यक्रम, नख: व शैक्षिक कार्यक्रमहरूया आयोजना",
        "सामाजिक व आर्थिक पहलहरूया माध्यमं समुदायया सदस्यहरूलाइ सहयोग",
        "नेवा: इतिहास व संस्कृतिय् अनुसन्धान व प्रकाशनया प्रवर्द्धन",
        "अन्तरधर्म व अन्तरसांस्कृतिक संवाद व समझदारीया विकास",
        "सांस्कृतिक संरक्षण व सिकाइया लागि डिजिटल प्लेटफर्मया विकास",
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
            {language === "en" ? "Mission Statement" : language === "np" ? "मिशन वक्तव्य" : "मिशन वक्तव्य"}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">{currentContent.mission}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {currentContent.values.map((value, index) => {
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
            {language === "en" ? "Our Objectives" : language === "np" ? "हाम्रा उद्देश्यहरू" : "झीगु उद्देश्यहरू"}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {currentContent.objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-green-500 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
