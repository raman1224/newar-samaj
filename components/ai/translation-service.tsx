"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Languages, ArrowRightLeft, Volume2, Copy, Mic, Sparkles, BookOpen, Globe, Zap } from "lucide-react"

interface Translation {
  id: string
  sourceText: string
  translatedText: string
  sourceLang: "en" | "ne" | "newa"
  targetLang: "en" | "ne" | "newa"
  timestamp: Date
  confidence: number
}

const sampleTranslations: Translation[] = [
  {
    id: "1",
    sourceText: "ज्वजलपा",
    translatedText: "Hello/Greetings",
    sourceLang: "newa",
    targetLang: "en",
    timestamp: new Date(Date.now() - 300000),
    confidence: 0.95,
  },
  {
    id: "2",
    sourceText: "How are you?",
    translatedText: "तिमी कस्तो छौ?",
    sourceLang: "en",
    targetLang: "ne",
    timestamp: new Date(Date.now() - 180000),
    confidence: 0.92,
  },
]

const commonPhrases = [
  { newa: "ज्वजलपा", nepali: "नमस्कार", english: "Hello" },
  { newa: "धन्यवाद", nepali: "धन्यवाद", english: "Thank you" },
  { newa: "माफ गर", nepali: "माफ गर्नुहोस्", english: "Excuse me" },
  { newa: "छेँ", nepali: "घर", english: "Home" },
  { newa: "मचा", nepali: "मान्छे", english: "Person" },
  { newa: "न्हापा", nepali: "खाना", english: "Food" },
]

export function TranslationService() {
  const [sourceText, setSourceText] = React.useState("")
  const [translatedText, setTranslatedText] = React.useState("")
  const [sourceLang, setSourceLang] = React.useState<"en" | "ne" | "newa">("en")
  const [targetLang, setTargetLang] = React.useState<"en" | "ne" | "newa">("newa")
  const [isTranslating, setIsTranslating] = React.useState(false)
  const [translations, setTranslations] = React.useState<Translation[]>(sampleTranslations)
  const [confidence, setConfidence] = React.useState(0)

  const handleTranslate = async () => {
    if (!sourceText.trim()) return

    setIsTranslating(true)

    // Simulate AI translation
    setTimeout(() => {
      const mockTranslation = generateMockTranslation(sourceText, sourceLang, targetLang)
      setTranslatedText(mockTranslation.text)
      setConfidence(mockTranslation.confidence)

      const newTranslation: Translation = {
        id: Date.now().toString(),
        sourceText,
        translatedText: mockTranslation.text,
        sourceLang,
        targetLang,
        timestamp: new Date(),
        confidence: mockTranslation.confidence,
      }

      setTranslations((prev) => [newTranslation, ...prev])
      setIsTranslating(false)
    }, 1500)
  }

  const generateMockTranslation = (text: string, from: string, to: string) => {
    const translations: Record<string, Record<string, string>> = {
      hello: { ne: "नमस्कार", newa: "ज्वजलपा" },
      "thank you": { ne: "धन्यवाद", newa: "धन्यवाद" },
      home: { ne: "घर", newa: "छेँ" },
      food: { ne: "खाना", newa: "न्हापा" },
      person: { ne: "मान्छे", newa: "मचा" },
    }

    const lowerText = text.toLowerCase()
    const translation = translations[lowerText]

    if (translation && translation[to]) {
      return { text: translation[to], confidence: 0.95 }
    }

    // Default mock translations
    if (to === "newa") {
      return { text: "नेवा भाषामा अनुवाद", confidence: 0.85 }
    } else if (to === "ne") {
      return { text: "नेपाली अनुवाद", confidence: 0.88 }
    } else {
      return { text: "English translation", confidence: 0.9 }
    }
  }

  const swapLanguages = () => {
    setSourceLang(targetLang)
    setTargetLang(sourceLang)
    setSourceText(translatedText)
    setTranslatedText(sourceText)
  }

  const playAudio = (text: string, lang: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = lang === "ne" || lang === "newa" ? "ne-NP" : "en-US"
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
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

  const handlePhraseClick = (phrase: any) => {
    setSourceText(phrase[sourceLang === "en" ? "english" : sourceLang === "ne" ? "nepali" : "newa"])
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">AI Translation Service</h2>
        <p className="text-lg text-muted-foreground">
          Translate between English, Nepali, and Newar languages with AI-powered accuracy
        </p>
      </div>

      <Tabs defaultValue="translate" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
          <TabsTrigger value="translate">Translate</TabsTrigger>
          <TabsTrigger value="phrases">Common Phrases</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="translate" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5" />
                AI-Powered Translation
                <Badge variant="secondary" className="ml-auto">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Neural AI
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Language Selection */}
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium mb-2 block">From</label>
                  <select
                    value={sourceLang}
                    onChange={(e) => setSourceLang(e.target.value as "en" | "ne" | "newa")}
                    className="w-full border rounded-lg px-3 py-2"
                  >
                    <option value="en">English</option>
                    <option value="ne">नेपाली (Nepali)</option>
                    <option value="newa">नेवा भाषा (Newar)</option>
                  </select>
                </div>

                <Button variant="outline" size="icon" onClick={swapLanguages} className="mt-6 bg-transparent">
                  <ArrowRightLeft className="h-4 w-4" />
                </Button>

                <div className="flex-1">
                  <label className="text-sm font-medium mb-2 block">To</label>
                  <select
                    value={targetLang}
                    onChange={(e) => setTargetLang(e.target.value as "en" | "ne" | "newa")}
                    className="w-full border rounded-lg px-3 py-2"
                  >
                    <option value="en">English</option>
                    <option value="ne">नेपाली (Nepali)</option>
                    <option value="newa">नेवा भाषा (Newar)</option>
                  </select>
                </div>
              </div>

              {/* Translation Interface */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Source Text</label>
                    <Button variant="ghost" size="sm">
                      <Mic className="h-4 w-4" />
                    </Button>
                  </div>
                  <Textarea
                    value={sourceText}
                    onChange={(e) => setSourceText(e.target.value)}
                    placeholder={`Enter text in ${getLanguageLabel(sourceLang)}...`}
                    className="min-h-[120px] resize-none"
                  />
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => playAudio(sourceText, sourceLang)}
                      disabled={!sourceText}
                    >
                      <Volume2 className="mr-2 h-3 w-3" />
                      Listen
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(sourceText)}
                      disabled={!sourceText}
                    >
                      <Copy className="mr-2 h-3 w-3" />
                      Copy
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Translation</label>
                    {confidence > 0 && (
                      <Badge variant="outline" className="text-xs">
                        {Math.round(confidence * 100)}% confidence
                      </Badge>
                    )}
                  </div>
                  <div className="min-h-[120px] border rounded-lg p-3 bg-muted/30">
                    {isTranslating ? (
                      <div className="flex items-center justify-center h-full">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    ) : (
                      <p
                        className={`${targetLang !== "en" ? "font-devanagari" : ""} ${!translatedText ? "text-muted-foreground" : ""}`}
                      >
                        {translatedText || `Translation will appear in ${getLanguageLabel(targetLang)}`}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => playAudio(translatedText, targetLang)}
                      disabled={!translatedText}
                    >
                      <Volume2 className="mr-2 h-3 w-3" />
                      Listen
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(translatedText)}
                      disabled={!translatedText}
                    >
                      <Copy className="mr-2 h-3 w-3" />
                      Copy
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={handleTranslate}
                  disabled={!sourceText.trim() || isTranslating}
                  size="lg"
                  className="min-w-[200px]"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  {isTranslating ? "Translating..." : "Translate"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="phrases" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Common Phrases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {commonPhrases.map((phrase, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => handlePhraseClick(phrase)}
                  >
                    <CardContent className="p-4">
                      <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Newar</p>
                          <p className="font-medium font-devanagari text-lg">{phrase.newa}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Nepali</p>
                          <p className="font-medium font-devanagari text-lg">{phrase.nepali}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">English</p>
                          <p className="font-medium text-lg">{phrase.english}</p>
                        </div>
                      </div>
                      <div className="flex justify-center gap-2 mt-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            playAudio(phrase.newa, "newa")
                          }}
                        >
                          <Volume2 className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            playAudio(phrase.nepali, "ne")
                          }}
                        >
                          <Volume2 className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            playAudio(phrase.english, "en")
                          }}
                        >
                          <Volume2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Translation History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {translations.map((translation) => (
                  <Card key={translation.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Badge variant="outline">{getLanguageLabel(translation.sourceLang)}</Badge>
                          <ArrowRightLeft className="h-3 w-3" />
                          <Badge variant="outline">{getLanguageLabel(translation.targetLang)}</Badge>
                          <span className="ml-2">{translation.timestamp.toLocaleString()}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {Math.round(translation.confidence * 100)}%
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Source</p>
                          <p className={translation.sourceLang !== "en" ? "font-devanagari" : ""}>
                            {translation.sourceText}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Translation</p>
                          <p className={translation.targetLang !== "en" ? "font-devanagari" : ""}>
                            {translation.translatedText}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => playAudio(translation.sourceText, translation.sourceLang)}
                        >
                          <Volume2 className="mr-1 h-3 w-3" />
                          Source
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => playAudio(translation.translatedText, translation.targetLang)}
                        >
                          <Volume2 className="mr-1 h-3 w-3" />
                          Translation
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(`${translation.sourceText} → ${translation.translatedText}`)}
                        >
                          <Copy className="mr-1 h-3 w-3" />
                          Copy
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
