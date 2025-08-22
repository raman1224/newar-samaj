"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AIChatbot } from "./ai-chatbot"
import { TranslationService } from "./translation-service"
import {
  Brain,
  Languages,
  BookOpen,
  Sparkles,
  Mic,
  MessageCircle,
  Zap,
  Globe,
  GraduationCap,
  Users,
  ArrowRight,
} from "lucide-react"

const aiFeatures = [
  {
    id: "chatbot",
    title: "Cultural AI Assistant",
    description: "Chat with our AI to learn about Newar culture, history, and traditions",
    icon: Brain,
    color: "bg-blue-100 text-blue-800",
    features: ["Multi-language support", "Cultural knowledge", "24/7 availability", "Voice interaction"],
  },
  {
    id: "translation",
    title: "Smart Translation",
    description: "Translate between English, Nepali, and Newar with AI accuracy",
    icon: Languages,
    color: "bg-green-100 text-green-800",
    features: ["Neural translation", "Voice input/output", "Phrase library", "Translation history"],
  },
  {
    id: "tutor",
    title: "Language Learning AI",
    description: "Personalized Newar language learning with adaptive AI tutoring",
    icon: GraduationCap,
    color: "bg-purple-100 text-purple-800",
    features: ["Adaptive learning", "Pronunciation help", "Progress tracking", "Custom lessons"],
  },
  {
    id: "quiz",
    title: "Cultural Knowledge Quiz",
    description: "AI-generated quizzes to test your knowledge of Newar culture",
    icon: Sparkles,
    color: "bg-orange-100 text-orange-800",
    features: ["Dynamic questions", "Difficulty adaptation", "Instant feedback", "Progress analytics"],
  },
]

const upcomingFeatures = [
  {
    title: "Voice Assistant",
    description: "Hands-free interaction with voice commands in multiple languages",
    icon: Mic,
    status: "Coming Soon",
  },
  {
    title: "AR Cultural Guide",
    description: "Augmented reality experiences for temples and cultural sites",
    icon: Globe,
    status: "In Development",
  },
  {
    title: "AI Community Matching",
    description: "Connect with other learners and cultural enthusiasts using AI",
    icon: Users,
    status: "Planned",
  },
]

export function AIFeaturesHub() {
  const [activeFeature, setActiveFeature] = React.useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Powered by Advanced AI
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            AI-Powered Cultural Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience the future of cultural learning with our advanced AI features. From intelligent chatbots to smart
            translation services, discover Newar culture like never before.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto h-12">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="chatbot">AI Chat</TabsTrigger>
            <TabsTrigger value="translation">Translation</TabsTrigger>
            <TabsTrigger value="features">All Features</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {aiFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card
                    key={feature.id}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    onClick={() => setActiveFeature(feature.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="flex items-center gap-2">
                            {feature.title}
                            <Badge className={feature.color}>AI</Badge>
                          </CardTitle>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.features.map((feat, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <Zap className="h-3 w-3 text-primary" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Upcoming Features */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-center mb-8">Coming Soon</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {upcomingFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card key={index} className="text-center opacity-75 hover:opacity-100 transition-opacity">
                      <CardContent className="p-6">
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                        <Badge variant="outline">{feature.status}</Badge>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">AI Conversations</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Translations</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-secondary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="chatbot" className="space-y-8">
            <AIChatbot />
          </TabsContent>

          <TabsContent value="translation" className="space-y-8">
            <TranslationService />
          </TabsContent>

          <TabsContent value="features" className="space-y-8">
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    AI Technology Stack
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Natural Language Processing</h3>
                      <p className="text-sm text-muted-foreground">
                        Advanced NLP models trained on Newar cultural content for accurate understanding
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Languages className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Neural Translation</h3>
                      <p className="text-sm text-muted-foreground">
                        State-of-the-art translation models for English, Nepali, and Newar languages
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="h-8 w-8 text-purple-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Adaptive Learning</h3>
                      <p className="text-sm text-muted-foreground">
                        Personalized learning algorithms that adapt to individual progress and preferences
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Feature Roadmap
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <h4 className="font-medium">AI Chatbot & Translation</h4>
                        <p className="text-sm text-muted-foreground">Core AI features with cultural knowledge</p>
                      </div>
                      <Badge variant="secondary">Live</Badge>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <h4 className="font-medium">Voice Recognition & TTS</h4>
                        <p className="text-sm text-muted-foreground">Voice input and speech synthesis</p>
                      </div>
                      <Badge variant="outline">Q2 2024</Badge>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <h4 className="font-medium">AR Cultural Experiences</h4>
                        <p className="text-sm text-muted-foreground">Augmented reality for temples and sites</p>
                      </div>
                      <Badge variant="outline">Q3 2024</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Experience AI-Powered Cultural Learning</h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of users who are discovering Newar culture through our advanced AI features. Start your
                journey today with personalized learning and intelligent assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                  <Brain className="mr-2 h-5 w-5" />
                  Start AI Chat
                </Button>
                <Button variant="outline" size="lg">
                  <Languages className="mr-2 h-5 w-5" />
                  Try Translation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
