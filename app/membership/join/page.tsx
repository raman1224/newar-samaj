"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle } from "lucide-react"

export default function JoinUsPage() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    membershipType: "",
    interests: [] as string[],
    motivation: "",
    agreeToTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const content = {
    en: {
      title: "Join Our Community",
      subtitle: "Become Part of the Global Newar Family",
      membershipTypes: [
        {
          id: "regular",
          name: "Regular Member",
          price: "$25/year",
          benefits: [
            "Access to all cultural events",
            "Monthly newsletter",
            "Community forum access",
            "Cultural resources",
          ],
        },
        {
          id: "family",
          name: "Family Membership",
          price: "$40/year",
          benefits: [
            "All regular benefits",
            "Family event discounts",
            "Children's cultural programs",
            "Family newsletter",
          ],
        },
        {
          id: "lifetime",
          name: "Lifetime Member",
          price: "$500 one-time",
          benefits: ["All benefits forever", "VIP event access", "Cultural preservation fund", "Legacy recognition"],
        },
        {
          id: "student",
          name: "Student Member",
          price: "$10/year",
          benefits: ["Student discounts", "Educational resources", "Mentorship programs", "Career networking"],
        },
      ],
      form: {
        personalInfo: "Personal Information",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        address: "Address",
        city: "City",
        country: "Country",
        membershipType: "Membership Type",
        interests: "Areas of Interest",
        motivation: "Why do you want to join?",
        agreeToTerms: "I agree to the terms and conditions",
        submit: "Join Newar Samaj",
        submitting: "Processing...",
      },
      interestOptions: [
        "Language Learning",
        "Cultural Events",
        "Traditional Arts",
        "Religious Practices",
        "Community Service",
        "Youth Programs",
        "Women's Initiatives",
        "Business Networking",
      ],
      successMessage: "Welcome to Newar Samaj! Your membership application has been received.",
    },
    np: {
      title: "हाम्रो समुदायमा सामेल हुनुहोस्",
      subtitle: "विश्वव्यापी नेवार परिवारको हिस्सा बन्नुहोस्",
      membershipTypes: [
        {
          id: "regular",
          name: "नियमित सदस्य",
          price: "$25/वर्ष",
          benefits: ["सबै सांस्कृतिक कार्यक्रमहरूमा पहुँच", "मासिक समाचारपत्र", "सामुदायिक फोरम पहुँच", "सांस्कृतिक स्रोतहरू"],
        },
        {
          id: "family",
          name: "पारिवारिक सदस्यता",
          price: "$40/वर्ष",
          benefits: [
            "सबै नियमित फाइदाहरू",
            "पारिवारिक कार्यक्रम छुट",
            "बालबालिकाका सांस्कृतिक कार्यक्रमहरू",
            "पारिवारिक समाचारपत्र",
          ],
        },
        {
          id: "lifetime",
          name: "आजीवन सदस्य",
          price: "$500 एक पटक",
          benefits: ["सधैंका लागि सबै फाइदाहरू", "VIP कार्यक्रम पहुँच", "सांस्कृतिक संरक्षण कोष", "विरासत मान्यता"],
        },
        {
          id: "student",
          name: "विद्यार्थी सदस्य",
          price: "$10/वर्ष",
          benefits: ["विद्यार्थी छुट", "शैक्षिक स्रोतहरू", "मार्गदर्शन कार्यक्रमहरू", "करियर नेटवर्किङ"],
        },
      ],
      form: {
        personalInfo: "व्यक्तिगत जानकारी",
        firstName: "पहिलो नाम",
        lastName: "थर",
        email: "इमेल ठेगाना",
        phone: "फोन नम्बर",
        address: "ठेगाना",
        city: "शहर",
        country: "देश",
        membershipType: "सदस्यताको प्रकार",
        interests: "रुचिका क्षेत्रहरू",
        motivation: "तपाईं किन सामेल हुन चाहनुहुन्छ?",
        agreeToTerms: "म नियम र सर्तहरूमा सहमत छु",
        submit: "नेवार समाजमा सामेल हुनुहोस्",
        submitting: "प्रक्रिया गर्दै...",
      },
      interestOptions: [
        "भाषा सिकाइ",
        "सांस्कृतिक कार्यक्रमहरू",
        "परम्परागत कलाहरू",
        "धार्मिक अभ्यासहरू",
        "सामुदायिक सेवा",
        "युवा कार्यक्रमहरू",
        "महिला पहलहरू",
        "व्यापारिक नेटवर्किङ",
      ],
      successMessage: "नेवार समाजमा स्वागत छ! तपाईंको सदस्यता आवेदन प्राप्त भएको छ।",
    },
    newa: {
      title: "झीगु समुदायय् सामेल दुनेगु",
      subtitle: "विश्वव्यापी नेवा: परिवारया हिस्सा दुनेगु",
      membershipTypes: [
        {
          id: "regular",
          name: "नियमित सदस्य",
          price: "$25/बर्ष",
          benefits: ["सब्बै सांस्कृतिक कार्यक्रमहरूय् पहुँच", "मासिक समाचारपत्र", "सामुदायिक फोरम पहुँच", "सांस्कृतिक स्रोतहरू"],
        },
        {
          id: "family",
          name: "पारिवारिक सदस्यता",
          price: "$40/बर्ष",
          benefits: ["सब्बै नियमित फाइदाहरू", "पारिवारिक कार्यक्रम छुट", "मचाहरूया सांस्कृतिक कार्यक्रमहरू", "पारिवारिक समाचारपत्र"],
        },
        {
          id: "lifetime",
          name: "आजीवन सदस्य",
          price: "$500 छगू लः",
          benefits: ["सधैंया लागि सब्बै फाइदाहरू", "VIP कार्यक्रम पहुँच", "सांस्कृतिक संरक्षण कोष", "विरासत मान्यता"],
        },
        {
          id: "student",
          name: "विद्यार्थी सदस्य",
          price: "$10/बर्ष",
          benefits: ["विद्यार्थी छुट", "शैक्षिक स्रोतहरू", "मार्गदर्शन कार्यक्रमहरू", "करियर नेटवर्किङ"],
        },
      ],
      form: {
        personalInfo: "व्यक्तिगत जानकारी",
        firstName: "न्हापा ना:",
        lastName: "थर",
        email: "इमेल ठेगाना",
        phone: "फोन नम्बर",
        address: "ठेगाना",
        city: "शहर",
        country: "देश",
        membershipType: "सदस्यताया प्रकार",
        interests: "रुचिया क्षेत्रहरू",
        motivation: "छि किं सामेल दुनी म्हसिकन्?",
        agreeToTerms: "जि नियम व सर्तहरूय् सहमत दु",
        submit: "नेवा: समाजय् सामेल दुनेगु",
        submitting: "प्रक्रिया यानादु...",
      },
      interestOptions: [
        "भाषा सिकाइ",
        "सांस्कृतिक कार्यक्रमहरू",
        "परम्परागत कलाहरू",
        "धार्मिक अभ्यासहरू",
        "सामुदायिक सेवा",
        "युवा कार्यक्रमहरू",
        "मिसाहरूया पहलहरू",
        "व्यापारिक नेटवर्किङ",
      ],
      successMessage: "नेवा: समाजय् स्वागत दु! छिगु सदस्यता आवेदन योगु दुइ।",
    },
  }

  const currentContent = content[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/membership/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Membership submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center py-12">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <CardTitle className="text-green-800">{currentContent.successMessage}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => (window.location.href = "/")} className="bg-green-600 hover:bg-green-700">
              {language === "en" ? "Return Home" : language === "np" ? "घर फर्कनुहोस्" : "घर वल्केगु"}
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">{currentContent.title}</h1>
          <p className="text-xl text-green-600">{currentContent.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-green-800 mb-6">
              {language === "en" ? "Membership Options" : language === "np" ? "सदस्यता विकल्पहरू" : "सदस्यता विकल्पहरू"}
            </h2>
            <div className="space-y-6">
              {currentContent.membershipTypes.map((type) => (
                <Card key={type.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-green-800">{type.name}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-green-600">{type.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">{currentContent.form.personalInfo}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">{currentContent.form.firstName}</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">{currentContent.form.lastName}</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">{currentContent.form.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">{currentContent.form.phone}</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="membershipType">{currentContent.form.membershipType}</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, membershipType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select membership type" />
                      </SelectTrigger>
                      <SelectContent>
                        {currentContent.membershipTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.name} - {type.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>{currentContent.form.interests}</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {currentContent.interestOptions.map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={formData.interests.includes(interest)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({ ...formData, interests: [...formData.interests, interest] })
                              } else {
                                setFormData({
                                  ...formData,
                                  interests: formData.interests.filter((i) => i !== interest),
                                })
                              }
                            }}
                          />
                          <Label htmlFor={interest} className="text-sm">
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="motivation">{currentContent.form.motivation}</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: !!checked })}
                      required
                    />
                    <Label htmlFor="terms" className="text-sm">
                      {currentContent.form.agreeToTerms}
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isSubmitting || !formData.agreeToTerms}
                  >
                    {isSubmitting ? currentContent.form.submitting : currentContent.form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
