"use client"

import * as React from "react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageCircle,
  Send,
  Mic,
  MicOff,
  Languages,
  Brain,
  Sparkles,
  User,
  Bot,
  Globe,
  BookOpen,
  Calendar,
  MapPin,
} from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
  language: "en" | "ne" | "newa"
  type: "text" | "translation" | "cultural" | "learning"
}

interface ChatSession {
  id: string
  title: string
  messages: Message[]
  language: "en" | "ne" | "newa"
  context: "general" | "cultural" | "language" | "history"
}

const sampleMessages: Message[] = [
  {
    id: "1",
    content: "Hello! I'm your AI assistant for Newar culture and language. How can I help you today?",
    sender: "ai",
    timestamp: new Date(Date.now() - 300000),
    language: "en",
    type: "text",
  },
  {
    id: "2",
    content: "Can you tell me about Indra Jatra festival?",
    sender: "user",
    timestamp: new Date(Date.now() - 240000),
    language: "en",
    type: "cultural",
  },
  {
    id: "3",
    content:
      "Indra Jatra is one of the most celebrated festivals in Kathmandu! It's an 8-day festival honoring Lord Indra, the rain god. The festival features the famous Kumari Jatra, traditional Lakhe dances, and chariot processions through the streets of Kathmandu. Would you like to know about specific traditions or when it's celebrated this year?",
    sender: "ai",
    timestamp: new Date(Date.now() - 180000),
    language: "en",
    type: "cultural",
  },
]

const quickActions = [
  { icon: Languages, label: "Translate Text", action: "translate" },
  { icon: BookOpen, label: "Learn Newar", action: "learn" },
  { icon: Calendar, label: "Festival Info", action: "festivals" },
  { icon: MapPin, label: "Temple Guide", action: "temples" },
  { icon: Brain, label: "Cultural Quiz", action: "quiz" },
  { icon: Globe, label: "History Facts", action: "history" },
]

const culturalPrompts = [
  "Tell me about Newar architecture",
  "What is the significance of Kumari?",
  "Explain Newari cuisine traditions",
  "How do I say 'hello' in Newar language?",
  "What are the main Newar festivals?",
  "Tell me about traditional Newar crafts",
]

export function AIChatbot() {
  const [messages, setMessages] = React.useState<Message[]>(sampleMessages)
  const [inputMessage, setInputMessage] = React.useState("")
  const [isListening, setIsListening] = React.useState(false)
  const [currentLanguage, setCurrentLanguage] = React.useState<"en" | "ne" | "newa">("en")
  const [isTyping, setIsTyping] = React.useState(false)
  const [chatContext, setChatContext] = React.useState<"general" | "cultural" | "language" | "history">("general")

  const scrollAreaRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
      language: currentLanguage,
      type: "text",
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputMessage, chatContext),
        sender: "ai",
        timestamp: new Date(),
        language: currentLanguage,
        type: detectMessageType(inputMessage),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (input: string, context: string): string => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("festival") || lowerInput.includes("jatra")) {
      return "Newar festivals are rich in tradition and cultural significance. Some major festivals include Indra Jatra (celebrating the rain god), Gai Jatra (honoring deceased family members), and Bisket Jatra (New Year celebration). Each festival has unique rituals, traditional foods, and community activities. Would you like to know more about a specific festival?"
    }

    if (lowerInput.includes("temple") || lowerInput.includes("architecture")) {
      return "Newar architecture is renowned for its intricate wood carvings, pagoda-style temples, and artistic stone sculptures. Famous examples include Changu Narayan Temple, Pashupatinath, and the temples of Bhaktapur Durbar Square. The craftsmanship represents centuries of artistic tradition passed down through generations."
    }

    if (lowerInput.includes("language") || lowerInput.includes("learn") || lowerInput.includes("newar")) {
      return "I'd be happy to help you learn Newar language! Newar (Nepal Bhasa) is the traditional language of the Newar people. Basic greetings include 'ज्वजलपा' (jwa-ja-la-pa) for hello. Would you like to start with basic vocabulary, or are you interested in specific phrases?"
    }

    if (lowerInput.includes("food") || lowerInput.includes("cuisine")) {
      return "Newari cuisine is incredibly diverse and flavorful! Popular dishes include Samay Baji (traditional platter), Yomari (steamed dumplings), Chatamari (Newar pizza), and Bara (lentil pancakes). Food plays a central role in religious ceremonies and festivals. What specific dish would you like to know about?"
    }

    return "That's an interesting question about Newar culture! I'm here to help you learn about our rich traditions, language, festivals, and heritage. Feel free to ask me about temples, festivals, language learning, traditional arts, or any aspect of Newar culture you're curious about."
  }

  const detectMessageType = (input: string): "text" | "translation" | "cultural" | "learning" => {
    const lowerInput = input.toLowerCase()
    if (lowerInput.includes("translate") || lowerInput.includes("meaning")) return "translation"
    if (lowerInput.includes("learn") || lowerInput.includes("teach")) return "learning"
    if (lowerInput.includes("festival") || lowerInput.includes("temple") || lowerInput.includes("tradition"))
      return "cultural"
    return "text"
  }

  const handleVoiceInput = () => {
    if (!isListening) {
      setIsListening(true)
      // Voice recognition implementation would go here
      setTimeout(() => {
        setIsListening(false)
        setInputMessage("Tell me about Newar festivals")
      }, 2000)
    } else {
      setIsListening(false)
    }
  }

  const handleQuickAction = (action: string) => {
    const actionMessages = {
      translate: "I'd like to translate some text between Newar, Nepali, and English",
      learn: "Help me learn basic Newar language phrases",
      festivals: "Tell me about upcoming Newar festivals",
      temples: "Show me information about important Newar temples",
      quiz: "Create a cultural knowledge quiz for me",
      history: "Share some interesting facts about Newar history",
    }

    setInputMessage(actionMessages[action as keyof typeof actionMessages] || "")
  }

  const handlePromptClick = (prompt: string) => {
    setInputMessage(prompt)
  }

  const getMessageTypeIcon = (type: string) => {
    switch (type) {
      case "translation":
        return <Languages className="h-3 w-3" />
      case "cultural":
        return <Calendar className="h-3 w-3" />
      case "learning":
        return <BookOpen className="h-3 w-3" />
      default:
        return <MessageCircle className="h-3 w-3" />
    }
  }

  const getLanguageLabel = (lang: "en" | "ne" | "newa") => {
    switch (lang) {
      case "en":
        return "English"
      case "ne":
        return "नेपाली"
      case "newa":
        return "नेवा भाषा"
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="h-[600px] flex flex-col">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="flex items-center gap-2">
                  AI Cultural Assistant
                  <Badge variant="secondary" className="text-xs">
                    <Sparkles className="mr-1 h-3 w-3" />
                    Online
                  </Badge>
                </CardTitle>
                <p className="text-sm text-muted-foreground">Your guide to Newar culture, language, and traditions</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={currentLanguage}
                onChange={(e) => setCurrentLanguage(e.target.value as "en" | "ne" | "newa")}
                className="text-sm border rounded px-2 py-1"
              >
                <option value="en">English</option>
                <option value="ne">नेपाली</option>
                <option value="newa">नेवा भाषा</option>
              </select>
            </div>
          </div>
        </CardHeader>

        <div className="flex-1 flex flex-col">
          <Tabs defaultValue="chat" className="flex-1 flex flex-col">
            <TabsList className="grid w-full grid-cols-3 mx-4 mt-4">
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="prompts">Quick Start</TabsTrigger>
              <TabsTrigger value="actions">AI Tools</TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="flex-1 flex flex-col p-4 pt-2">
              <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.sender === "ai" && (
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                      )}

                      <div className={`max-w-[80%] ${message.sender === "user" ? "order-first" : ""}`}>
                        <div
                          className={`rounded-lg p-3 ${
                            message.sender === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                          {getMessageTypeIcon(message.type)}
                          <span>{message.timestamp.toLocaleTimeString()}</span>
                          <Badge variant="outline" className="text-xs">
                            {getLanguageLabel(message.language)}
                          </Badge>
                        </div>
                      </div>

                      {message.sender === "user" && (
                        <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-accent" />
                        </div>
                      )}
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              <div className="flex gap-2 mt-4">
                <div className="flex-1 flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder={`Ask about Newar culture in ${getLanguageLabel(currentLanguage)}...`}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleVoiceInput}
                    className={isListening ? "bg-red-100 text-red-600" : ""}
                  >
                    {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </Button>
                </div>
                <Button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="prompts" className="flex-1 p-4 pt-2">
              <div className="space-y-4">
                <h3 className="font-semibold">Popular Questions</h3>
                <div className="grid gap-2">
                  {culturalPrompts.map((prompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start text-left h-auto p-3 bg-transparent"
                      onClick={() => handlePromptClick(prompt)}
                    >
                      <MessageCircle className="mr-2 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">{prompt}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="actions" className="flex-1 p-4 pt-2">
              <div className="space-y-4">
                <h3 className="font-semibold">AI-Powered Tools</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start h-auto p-4 bg-transparent"
                      onClick={() => handleQuickAction(action.action)}
                    >
                      <action.icon className="mr-3 h-5 w-5 text-primary" />
                      <div className="text-left">
                        <div className="font-medium text-sm">{action.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {action.action === "translate" && "Multi-language translation"}
                          {action.action === "learn" && "Interactive language lessons"}
                          {action.action === "festivals" && "Festival calendar & info"}
                          {action.action === "temples" && "Sacred places guide"}
                          {action.action === "quiz" && "Test your knowledge"}
                          {action.action === "history" && "Historical insights"}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  )
}
