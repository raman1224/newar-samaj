"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, MessageCircle, GraduationCap, Brain, Trophy, Clock, Target, Play, Users } from "lucide-react"


import Link from "next/link" // Added missing import

interface LearningStats {
  wordsLearned: number
  totalWords: number
  streakDays: number
  lessonsCompleted: number
  totalLessons: number
  level: string
  xp: number
}

const mockStats: LearningStats = {
  wordsLearned: 127,
  totalWords: 500,
  streakDays: 12,
  lessonsCompleted: 8,
  totalLessons: 20,
  level: "Beginner",
  xp: 1250,
}

const recentLessons = [
  {
    id: 1,
    title: "Basic Greetings",
    description: "Learn common Newar greetings and responses",
    progress: 100,
    wordsCount: 15,
    completed: true,
  },
  {
    id: 2,
    title: "Family Members",
    description: "Names for family relationships in Newar",
    progress: 75,
    wordsCount: 20,
    completed: false,
  },
  {
    id: 3,
    title: "Numbers 1-20",
    description: "Counting and basic numbers in Newar language",
    progress: 45,
    wordsCount: 20,
    completed: false,
  },
]

const achievements = [
  { icon: Trophy, title: "First Steps", description: "Completed your first lesson", unlocked: true },
  { icon: Target, title: "Word Master", description: "Learned 100 words", unlocked: true },
  { icon: Clock, title: "Consistent Learner", description: "7-day learning streak", unlocked: true },
  { icon: Brain, title: "Quiz Champion", description: "Perfect score on 5 quizzes", unlocked: false },
]

export function LanguageDashboard() {
  const progressPercentage = (mockStats.wordsLearned / mockStats.totalWords) * 100

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Learn <span className="text-primary">Newar</span> Language
        </h1>
        <p className="text-xl text-muted-foreground">
          Master the beautiful Newar language with AI-powered interactive lessons
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Words Learned</p>
                <p className="text-2xl font-bold text-primary">{mockStats.wordsLearned}</p>
              </div>
              <BookOpen className="h-8 w-8 text-primary/60" />
            </div>
            <Progress value={progressPercentage} className="mt-3" />
            <p className="text-xs text-muted-foreground mt-2">
              {mockStats.totalWords - mockStats.wordsLearned} words remaining
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Current Streak</p>
                <p className="text-2xl font-bold text-accent">{mockStats.streakDays}</p>
              </div>
              <Clock className="h-8 w-8 text-accent/60" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">days in a row</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Level</p>
                <p className="text-2xl font-bold text-secondary">{mockStats.level}</p>
              </div>
              <GraduationCap className="h-8 w-8 text-secondary/60" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">{mockStats.xp} XP earned</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Lessons</p>
                <p className="text-2xl font-bold text-primary">
                  {mockStats.lessonsCompleted}/{mockStats.totalLessons}
                </p>
              </div>
              <Target className="h-8 w-8 text-primary/60" />
            </div>
            <Progress value={(mockStats.lessonsCompleted / mockStats.totalLessons) * 100} className="mt-3" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="lessons" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="lessons">Lessons</TabsTrigger>
          <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
          <TabsTrigger value="chatroom">Chatroom</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="lessons" className="space-y-6">
          <div className="grid gap-6">
            <h2 className="text-2xl font-semibold">Continue Learning</h2>
            <div className="grid gap-4">
              {recentLessons.map((lesson) => (
                <Card key={lesson.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{lesson.title}</h3>
                          {lesson.completed && (
                            <Badge variant="secondary" className="text-xs">
                              Completed
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-3">{lesson.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{lesson.wordsCount} words</span>
                          <span>{lesson.progress}% complete</span>
                        </div>
                        <Progress value={lesson.progress} className="mt-3" />
                      </div>
                      <Button className="ml-6" variant={lesson.completed ? "outline" : "default"}>
                        {lesson.completed ? "Review" : "Continue"}
                        <Play className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="flashcards" className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Interactive Flashcards</h2>
            <p className="text-muted-foreground mb-8">
              Practice with 3D animated flashcards featuring Newa → Nepali → English translations
            </p>
            <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Flashcard Session
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="chatroom" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Language Exchange
                </CardTitle>
                <CardDescription>Practice with native speakers and other learners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>23 people online</span>
                  </div>
                  <Button className="w-full">Join Conversation</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI Language Tutor
                </CardTitle>
                <CardDescription>Get personalized help and corrections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Available 24/7 for pronunciation help and grammar questions
                  </p>
                  <Button className="w-full bg-transparent" variant="outline">
                    Chat with AI Tutor
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>


// In components/language/language-dashboard.tsx
// Add this to the TabsList section:
<TabsList className="grid w-full grid-cols-5">
  <TabsTrigger value="lessons">Lessons</TabsTrigger>
  <TabsTrigger value="alphabet">Alphabet</TabsTrigger>
  <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
  <TabsTrigger value="chatroom">Chatroom</TabsTrigger>
  <TabsTrigger value="achievements">Achievements</TabsTrigger>
</TabsList>

// Add this TabsContent section:
<TabsContent value="alphabet" className="space-y-6">
  <div className="text-center">
    <h2 className="text-2xl font-semibold mb-4">Newar Alphabet System</h2>
    <p className="text-muted-foreground mb-8">
      Learn the foundation of Newar language with our interactive alphabet lessons
    </p>
    <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow" asChild>
      <Link href="/language/alphabet">
        <BookOpen className="mr-2 h-5 w-5" />
        Start Learning Alphabet
      </Link>
    </Button>
  </div>
</TabsContent>


        <TabsContent value="achievements" className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Your Achievements</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className={`transition-all ${
                    achievement.unlocked ? "hover:shadow-lg border-primary/20" : "opacity-60 grayscale"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-full ${
                          achievement.unlocked ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <achievement.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                      {achievement.unlocked && (
                        <Badge variant="secondary" className="ml-auto">
                          Unlocked
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
