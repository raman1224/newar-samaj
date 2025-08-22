"use client"

import * as React from "react"
import { MainNav } from "@/components/navigation/main-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Mic, MicOff, Send, Bot, User, Sparkles, MessageCircle, Languages, BookOpen } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export default function AIPage() {
  const [currentLanguage, setCurrentLanguage] = React.useState("en")
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([])
  const [inputMessage, setInputMessage] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [isListening, setIsListening] = React.useState(false)
  const { toast } = useToast()

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language)
  }

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const sendMessage = async (message: string) => {
    if (!message.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          language: currentLanguage,
          context: "Newar culture and heritage assistant",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get AI response")
      }

      const data = await response.json()

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get AI response. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputMessage)
  }

  const startVoiceRecognition = () => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
      const recognition = new SpeechRecognition()

      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = currentLanguage === "np" ? "ne-NP" : "en-US"

      recognition.onstart = () => {
        setIsListening(true)
      }

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        setInputMessage(transcript)
        setIsListening(false)
      }

      recognition.onerror = () => {
        setIsListening(false)
        toast({
          title: "Voice Recognition Error",
          description: "Could not recognize speech. Please try again.",
          variant: "destructive",
        })
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      recognition.start()
    } else {
      toast({
        title: "Not Supported",
        description: "Voice recognition is not supported in your browser.",
        variant: "destructive",
      })
    }
  }

  const exampleQuestions = {
    en: [
      "Tell me about Newar festivals",
      "How do I learn Newar language?",
      "What are important Newar temples?",
      "Explain Newar cultural traditions",
    ],
    np: [
      "नेवार चाडपर्वहरूको बारेमा भन्नुहोस्",
      "नेवार भाषा कसरी सिक्ने?",
      "महत्वपूर्ण नेवार मन्दिरहरू के के छन्?",
      "नेवार सांस्कृतिक परम्पराहरू व्याख्या गर्नुहोस्",
    ],
    nw: [
      "नेवाः नखःहरूया बारेय् भन्नुहोस्",
      "नेवाः भाषा खनिसं छ्यानाः?",
      "महत्वपूर्ण नेवाः देगःहरू छु छु दु?",
      "नेवाः सांस्कृतिक परम्पराहरू व्याख्या यानाः",
    ],
  }

  const content = {
    en: {
      title: "AI Cultural Assistant",
      subtitle: "Chat with our AI about Newar culture, traditions, and heritage",
      placeholder: "Ask me anything about Newar culture...",
      examples: "Example Questions:",
      features: [
        { icon: MessageCircle, title: "Cultural Knowledge", desc: "Deep understanding of Newar traditions" },
        { icon: Languages, title: "Multi-language", desc: "Supports English, Nepali, and Newar" },
        { icon: BookOpen, title: "Learning Support", desc: "Helps with language and cultural learning" },
      ],
    },
    np: {
      title: "AI सांस्कृतिक सहायक",
      subtitle: "नेवार संस्कृति, परम्परा र सम्पदाको बारेमा हाम्रो AI सँग कुराकानी गर्नुहोस्",
      placeholder: "नेवार संस्कृतिको बारेमा जे पनि सोध्नुहोस्...",
      examples: "उदाहरण प्रश्नहरू:",
      features: [
        { icon: MessageCircle, title: "सांस्कृतिक ज्ञान", desc: "नेवार परम्पराहरूको गहिरो बुझाइ" },
        { icon: Languages, title: "बहुभाषिक", desc: "अंग्रेजी, नेपाली र नेवार समर्थन गर्छ" },
        { icon: BookOpen, title: "सिकाइ सहायता", desc: "भाषा र सांस्कृतिक सिकाइमा मद्दत गर्छ" },
      ],
    },
    nw: {
      title: "AI सांस्कृतिक सहायक",
      subtitle: "नेवाः संस्कृति, परम्परा व सम्पदाया बारेय् झिगु AI सँग कुराकानी यानाः",
      placeholder: "नेवाः संस्कृतिया बारेय् जुगु पनि न्ह्यानाः...",
      examples: "उदाहरण प्रश्नहरू:",
      features: [
        { icon: MessageCircle, title: "सांस्कृतिक ज्ञान", desc: "नेवाः परम्पराहरूया गहिरो बुझाइ" },
        { icon: Languages, title: "बहुभाषिक", desc: "अंग्रेजी, नेपाली व नेवाः समर्थन यानाः" },
        { icon: BookOpen, title: "सिकाइ सहायता", desc: "भाषा व सांस्कृतिक सिकाइय् मदत यानाः" },
      ],
    },
  }

  const currentContent = content[currentLanguage as keyof typeof content]
  const currentExamples = exampleQuestions[currentLanguage as keyof typeof exampleQuestions]

  return (
    <div className="min-h-screen">
      <MainNav
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <Sparkles className="h-6 w-6 text-accent ml-2" />
          </div>
          <h1 className="text-4xl font-bold mb-4">{currentContent.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{currentContent.subtitle}</p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {currentContent.features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Cultural Chat
              </CardTitle>
              <CardDescription>Ask questions about Newar culture, traditions, and heritage</CardDescription>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col">
              {/* Messages */}
              <ScrollArea className="flex-1 mb-4 pr-4">
                {messages.length === 0 ? (
                  <div className="text-center py-8">
                    <Bot className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      {currentLanguage === "en"
                        ? "Start a conversation about Newar culture!"
                        : currentLanguage === "np"
                          ? "नेवार संस्कृतिको बारेमा कुराकानी सुरु गर्नुहोस्!"
                          : "नेवाः संस्कृतिया बारेय् कुराकानी शुरु यानाः!"}
                    </p>

                    {/* Example Questions */}
                    <div className="text-left max-w-md mx-auto">
                      <h4 className="font-medium mb-2">{currentContent.examples}</h4>
                      <div className="space-y-2">
                        {currentExamples.map((question, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="cursor-pointer hover:bg-accent block w-full text-left p-2 h-auto"
                            onClick={() => sendMessage(question)}
                          >
                            {question}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.sender === "ai" && (
                          <div className="p-2 bg-primary/10 rounded-full">
                            <Bot className="h-4 w-4 text-primary" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.sender === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <p className="whitespace-pre-wrap">{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                        </div>
                        {message.sender === "user" && (
                          <div className="p-2 bg-accent/10 rounded-full">
                            <User className="h-4 w-4 text-accent" />
                          </div>
                        )}
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex gap-3 justify-start">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                        <div className="bg-muted p-3 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </ScrollArea>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={currentContent.placeholder}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={startVoiceRecognition}
                  disabled={isLoading || isListening}
                >
                  {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
                <Button type="submit" disabled={isLoading || !inputMessage.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
