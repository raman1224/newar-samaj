"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, BookOpen, Award, Clock, Users, FileText, Brain, CheckCircle } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Newar Festivals & Traditions",
    description: "Learn about major Newar festivals, their significance, and traditional practices",
    instructor: "Dr. Rajesh Shakya",
    duration: "2 hours",
    lessons: 8,
    students: 234,
    rating: 4.8,
    level: "Beginner",
    progress: 0,
    thumbnail: "/newar-festival-course.png",
  },
  {
    id: 2,
    title: "Traditional Newar Architecture",
    description: "Explore the unique architectural styles of Newar temples and buildings",
    instructor: "Prof. Sushila Maharjan",
    duration: "3 hours",
    lessons: 12,
    students: 189,
    rating: 4.9,
    level: "Intermediate",
    progress: 25,
    thumbnail: "/newar-architecture-course.png",
  },
  {
    id: 3,
    title: "Newar Cuisine & Culture",
    description: "Discover traditional Newar dishes and their cultural significance",
    instructor: "Chef Kamala Tuladhar",
    duration: "1.5 hours",
    lessons: 6,
    students: 156,
    rating: 4.7,
    level: "Beginner",
    progress: 100,
    thumbnail: "/newar-cuisine-course.png",
  },
]

const quizzes = [
  {
    id: 1,
    title: "Newar Festival Knowledge",
    description: "Test your knowledge about major Newar festivals",
    questions: 15,
    timeLimit: "10 minutes",
    difficulty: "Easy",
    completed: true,
    score: 87,
  },
  {
    id: 2,
    title: "Traditional Architecture Quiz",
    description: "Identify different architectural elements and styles",
    questions: 20,
    timeLimit: "15 minutes",
    difficulty: "Medium",
    completed: false,
    score: null,
  },
  {
    id: 3,
    title: "Cultural Practices Assessment",
    description: "Comprehensive test on Newar cultural practices",
    questions: 25,
    timeLimit: "20 minutes",
    difficulty: "Hard",
    completed: false,
    score: null,
  },
]

export function CultureSchool() {
  const [selectedCourse, setSelectedCourse] = React.useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Culture <span className="text-primary">School</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Immerse yourself in Newar culture through interactive video lessons and AI-powered quizzes
        </p>
      </div>

      <Tabs defaultValue="courses" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="courses">Video Courses</TabsTrigger>
          <TabsTrigger value="quizzes">AI Quizzes</TabsTrigger>
          <TabsTrigger value="progress">My Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-6">
          <div className="grid gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 md:h-full object-cover rounded-l-lg"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                        <p className="text-muted-foreground mb-3">{course.description}</p>
                        <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                      </div>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {course.lessons} lessons
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students} students
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        {course.rating} rating
                      </div>
                    </div>

                    {course.progress > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} />
                      </div>
                    )}

                    <div className="flex gap-3">
                      <Button className="flex-1">
                        <Play className="mr-2 h-4 w-4" />
                        {course.progress > 0 ? "Continue" : "Start Course"}
                      </Button>
                      <Button variant="outline">
                        <FileText className="mr-2 h-4 w-4" />
                        Syllabus
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="quizzes" className="space-y-6">
          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">AI-Powered Cultural Quizzes</h2>
            {quizzes.map((quiz) => (
              <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{quiz.title}</h3>
                        {quiz.completed && (
                          <Badge variant="secondary" className="text-xs">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Completed
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-3">{quiz.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{quiz.questions} questions</span>
                        <span>{quiz.timeLimit}</span>
                        <Badge variant="outline" className="text-xs">
                          {quiz.difficulty}
                        </Badge>
                        {quiz.completed && quiz.score && (
                          <span className="text-primary font-medium">Score: {quiz.score}%</span>
                        )}
                      </div>
                    </div>
                    <div className="ml-6">
                      <Button variant={quiz.completed ? "outline" : "default"} className="min-w-[120px]">
                        <Brain className="mr-2 h-4 w-4" />
                        {quiz.completed ? "Retake" : "Start Quiz"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Learning Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Courses Completed</span>
                    <span className="font-semibold">1/3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Quizzes Passed</span>
                    <span className="font-semibold">1/3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Average Quiz Score</span>
                    <span className="font-semibold text-primary">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Study Time</span>
                    <span className="font-semibold">4.5 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Culture Explorer</p>
                      <p className="text-xs text-muted-foreground">Completed first course</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                      <Brain className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Quiz Master</p>
                      <p className="text-xs text-muted-foreground">Scored 80%+ on quiz</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
