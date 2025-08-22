"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Volume2, RotateCcw, Check, X, Brain, ArrowRight } from "lucide-react"

interface FlashcardData {
  id: number
  newaWord: string
  nepaliMeaning: string
  newaFromNepali: string
  englishMeaning: string
  pronunciation: string
  category: string
  difficulty: "easy" | "medium" | "hard"
}

const sampleCards: FlashcardData[] = [
  {
    id: 1,
    newaWord: "ज्वजलपा",
    nepaliMeaning: "नमस्कार",
    newaFromNepali: "ज्वजलपा",
    englishMeaning: "Hello/Greetings",
    pronunciation: "jwa-ja-la-pa",
    category: "Greetings",
    difficulty: "easy",
  },
  {
    id: 2,
    newaWord: "छेँ",
    nepaliMeaning: "घर",
    newaFromNepali: "छेँ",
    englishMeaning: "House/Home",
    pronunciation: "chhen",
    category: "Family & Home",
    difficulty: "easy",
  },
  {
    id: 3,
    newaWord: "मचा",
    nepaliMeaning: "मान्छे",
    newaFromNepali: "मचा",
    englishMeaning: "Person/Human",
    pronunciation: "ma-cha",
    category: "People",
    difficulty: "medium",
  },
]

export function FlashcardSystem() {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0)
  const [isFlipped, setIsFlipped] = React.useState(false)
  const [showTranslation, setShowTranslation] = React.useState(false)
  const [learningMode, setLearningMode] = React.useState<"newa-to-nepali" | "nepali-to-newa" | "english-to-newa">(
    "newa-to-nepali",
  )
  const [correctAnswers, setCorrectAnswers] = React.useState(0)
  const [totalAnswered, setTotalAnswered] = React.useState(0)

  const currentCard = sampleCards[currentCardIndex]
  const progress = ((currentCardIndex + 1) / sampleCards.length) * 100

  const playPronunciation = () => {
    // Text-to-speech implementation would go here
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(currentCard.newaWord)
      utterance.lang = "ne-NP" // Nepali locale as closest to Newar
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped)
    if (!showTranslation) {
      setShowTranslation(true)
    }
  }

  const handleAnswer = (isCorrect: boolean) => {
    setTotalAnswered((prev) => prev + 1)
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1)
    }

    // Move to next card after a short delay
    setTimeout(() => {
      if (currentCardIndex < sampleCards.length - 1) {
        setCurrentCardIndex((prev) => prev + 1)
        setIsFlipped(false)
        setShowTranslation(false)
      }
    }, 1000)
  }

  const resetSession = () => {
    setCurrentCardIndex(0)
    setIsFlipped(false)
    setShowTranslation(false)
    setCorrectAnswers(0)
    setTotalAnswered(0)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (currentCardIndex >= sampleCards.length) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Session Complete!</h2>
            <p className="text-xl text-muted-foreground">
              You got {correctAnswers} out of {totalAnswered} correct
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <div className="text-4xl font-bold text-primary mb-2">
              {Math.round((correctAnswers / totalAnswered) * 100)}%
            </div>
            <p className="text-muted-foreground">Accuracy Score</p>
          </div>

          <div className="flex gap-4 justify-center">
            <Button onClick={resetSession} size="lg">
              <RotateCcw className="mr-2 h-5 w-5" />
              Practice Again
            </Button>
            <Button variant="outline" size="lg">
              <Brain className="mr-2 h-5 w-5" />
              AI Review
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">Interactive Flashcards</h1>
          <Badge variant="outline">
            {currentCardIndex + 1} of {sampleCards.length}
          </Badge>
        </div>
        <Progress value={progress} className="mb-4" />
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>Mode: {learningMode.replace("-", " → ")}</span>
          <span>Accuracy: {totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0}%</span>
        </div>
      </div>

      {/* Flashcard */}
      <div className="max-w-2xl mx-auto">
        <div className="perspective-1000 mb-8">
          <div
            className={`relative w-full h-96 transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            onClick={handleCardFlip}
          >
            {/* Front of card */}
            <Card className="absolute inset-0 backface-hidden shadow-2xl hover:shadow-3xl transition-shadow">
              <CardContent className="h-full flex flex-col items-center justify-center p-8 text-center">
                <Badge className={`mb-4 ${getDifficultyColor(currentCard.difficulty)}`}>
                  {currentCard.category} • {currentCard.difficulty}
                </Badge>

                <div className="text-6xl font-bold mb-6 font-devanagari">{currentCard.newaWord}</div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    playPronunciation()
                  }}
                  className="mb-4"
                >
                  <Volume2 className="mr-2 h-4 w-4" />
                  Pronunciation
                </Button>

                <p className="text-muted-foreground text-sm">/{currentCard.pronunciation}/</p>

                <div className="mt-8 text-muted-foreground">Click to reveal meaning</div>
              </CardContent>
            </Card>

            {/* Back of card */}
            <Card className="absolute inset-0 backface-hidden rotate-y-180 shadow-2xl">
              <CardContent className="h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="space-y-6 w-full">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Nepali Meaning</p>
                    <p className="text-2xl font-semibold font-devanagari">{currentCard.nepaliMeaning}</p>
                  </div>

                  <ArrowRight className="mx-auto h-6 w-6 text-muted-foreground" />

                  <div className="p-4 bg-accent/5 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Back to Newa</p>
                    <p className="text-2xl font-semibold font-devanagari">{currentCard.newaFromNepali}</p>
                  </div>

                  <div className="p-4 bg-secondary/5 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">English Meaning</p>
                    <p className="text-xl font-semibold">{currentCard.englishMeaning}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        {showTranslation && (
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleAnswer(false)}
              className="hover:bg-red-50 hover:border-red-200"
            >
              <X className="mr-2 h-5 w-5" />
              Need More Practice
            </Button>
            <Button size="lg" onClick={() => handleAnswer(true)} className="hover:bg-green-600">
              <Check className="mr-2 h-5 w-5" />
              Got It Right!
            </Button>
          </div>
        )}

        {/* AI Tutor Hint */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-start gap-3">
            <Brain className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium text-sm mb-1">AI Tutor Tip:</p>
              <p className="text-sm text-muted-foreground">
                The word "{currentCard.newaWord}" is commonly used in daily conversations. Try using it in a sentence to
                better remember it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
