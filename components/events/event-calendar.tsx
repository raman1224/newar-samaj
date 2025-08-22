"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Users,
  Plus,
  Filter,
  Search,
  Bell,
  Share2,
  Heart,
} from "lucide-react"

interface Event {
  id: string
  title: string
  titleNewa: string
  description: string
  date: Date
  time: string
  endTime?: string
  location: string
  category: "festival" | "workshop" | "community" | "cultural" | "religious"
  organizer: string
  attendees: number
  maxAttendees?: number
  image?: string
  isUserRegistered: boolean
  isFeatured: boolean
  tags: string[]
}

const sampleEvents: Event[] = [
  {
    id: "1",
    title: "Indra Jatra Celebration",
    titleNewa: "इन्द्र जात्रा",
    description:
      "Join us for the grand celebration of Indra Jatra with traditional dances, cultural programs, and community feast.",
    date: new Date(2024, 8, 15), // September 15, 2024
    time: "10:00 AM",
    endTime: "8:00 PM",
    location: "Kathmandu Durbar Square",
    category: "festival",
    organizer: "Newar Cultural Committee",
    attendees: 1250,
    maxAttendees: 2000,
    image: "/newar-festival-course.png",
    isUserRegistered: true,
    isFeatured: true,
    tags: ["festival", "traditional", "community", "cultural"],
  },
  {
    id: "2",
    title: "Newar Language Workshop",
    titleNewa: "नेवा भाषा कार्यशाला",
    description:
      "Learn basic Newar language with native speakers. Perfect for beginners and those wanting to reconnect with their heritage.",
    date: new Date(2024, 8, 20), // September 20, 2024
    time: "2:00 PM",
    endTime: "5:00 PM",
    location: "Community Center, Patan",
    category: "workshop",
    organizer: "Language Preservation Society",
    attendees: 45,
    maxAttendees: 60,
    isUserRegistered: false,
    isFeatured: false,
    tags: ["language", "learning", "workshop", "heritage"],
  },
  {
    id: "3",
    title: "Traditional Cooking Class",
    titleNewa: "परम्परागत खाना पकाउने कक्षा",
    description: "Learn to cook authentic Newari dishes including Yomari, Chatamari, and traditional festival foods.",
    date: new Date(2024, 8, 25), // September 25, 2024
    time: "11:00 AM",
    endTime: "3:00 PM",
    location: "Cultural Kitchen, Bhaktapur",
    category: "cultural",
    organizer: "Newari Cuisine Masters",
    attendees: 28,
    maxAttendees: 30,
    isUserRegistered: false,
    isFeatured: true,
    tags: ["cooking", "food", "traditional", "hands-on"],
  },
  {
    id: "4",
    title: "Community Meeting",
    titleNewa: "समुदायिक बैठक",
    description:
      "Monthly community meeting to discuss upcoming events, cultural preservation initiatives, and community needs.",
    date: new Date(2024, 8, 30), // September 30, 2024
    time: "6:00 PM",
    endTime: "8:00 PM",
    location: "Community Hall, Lalitpur",
    category: "community",
    organizer: "Newar Samaj Committee",
    attendees: 85,
    isUserRegistered: true,
    isFeatured: false,
    tags: ["meeting", "community", "planning", "discussion"],
  },
]

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function EventCalendar() {
  const [currentDate, setCurrentDate] = React.useState(new Date())
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null)
  const [selectedEvent, setSelectedEvent] = React.useState<Event | null>(null)
  const [viewMode, setViewMode] = React.useState<"month" | "week" | "list">("month")
  const [filterCategory, setFilterCategory] = React.useState<string>("all")
  const [events] = React.useState<Event[]>(sampleEvents)

  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0)
  const firstDayOfWeek = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()

  const calendarDays = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(null)
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(new Date(currentYear, currentMonth, day))
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.toDateString() === date.toDateString() &&
        (filterCategory === "all" || event.category === filterCategory),
    )
  }

  const getFilteredEvents = () => {
    return events
      .filter((event) => filterCategory === "all" || event.category === filterCategory)
      .sort((a, b) => a.date.getTime() - b.date.getTime())
  }

  const handleRSVP = (eventId: string) => {
    // RSVP functionality would be implemented here
    console.log(`RSVP for event ${eventId}`)
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      festival: "bg-red-100 text-red-800 border-red-200",
      workshop: "bg-blue-100 text-blue-800 border-blue-200",
      community: "bg-green-100 text-green-800 border-green-200",
      cultural: "bg-purple-100 text-purple-800 border-purple-200",
      religious: "bg-orange-100 text-orange-800 border-orange-200",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "festival":
        return "🎉"
      case "workshop":
        return "🎓"
      case "community":
        return "👥"
      case "cultural":
        return "🎭"
      case "religious":
        return "🙏"
      default:
        return "📅"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Events & Calendar</h2>
          <p className="text-muted-foreground">Discover and join Newar community events</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Event
          </Button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {["all", "festival", "workshop", "community", "cultural", "religious"].map((category) => (
          <Button
            key={category}
            variant={filterCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterCategory(category)}
            className="capitalize"
          >
            {category === "all" ? "All Events" : `${getCategoryIcon(category)} ${category}`}
          </Button>
        ))}
      </div>

      <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as "month" | "week" | "list")}>
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
        </TabsList>

        <TabsContent value="month" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {months[currentMonth]} {currentYear}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date())}>
                    Today
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {daysOfWeek.map((day) => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((date, index) => {
                  if (!date) {
                    return <div key={index} className="p-2 h-24"></div>
                  }

                  const dayEvents = getEventsForDate(date)
                  const isToday = date.toDateString() === new Date().toDateString()
                  const isSelected = selectedDate?.toDateString() === date.toDateString()

                  return (
                    <div
                      key={index}
                      className={`p-2 h-24 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${
                        isToday ? "bg-primary/10 border-primary" : ""
                      } ${isSelected ? "bg-accent border-accent-foreground" : ""}`}
                      onClick={() => setSelectedDate(date)}
                    >
                      <div className={`text-sm font-medium mb-1 ${isToday ? "text-primary" : ""}`}>
                        {date.getDate()}
                      </div>
                      <div className="space-y-1">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className={`text-xs p-1 rounded truncate cursor-pointer hover:opacity-80 ${getCategoryColor(event.category)}`}
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedEvent(event)
                            }}
                          >
                            {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-muted-foreground">+{dayEvents.length - 2} more</div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center text-muted-foreground">
                <Calendar className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Week View</h3>
                <p>Weekly calendar view coming soon with detailed time slots and event scheduling.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list" className="space-y-4">
          <div className="space-y-4">
            {getFilteredEvents().map((event) => (
              <Card
                key={event.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {event.image && (
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold">{event.title}</h3>
                          <p className="text-sm text-muted-foreground font-devanagari">{event.titleNewa}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {event.isFeatured && <Badge variant="secondary">Featured</Badge>}
                          <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-3 line-clamp-2">{event.description}</p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {event.date.toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time} {event.endTime && `- ${event.endTime}`}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {event.attendees} {event.maxAttendees && `/ ${event.maxAttendees}`}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant={event.isUserRegistered ? "outline" : "default"}
                          onClick={(e) => {
                            e.stopPropagation()
                            handleRSVP(event.id)
                          }}
                        >
                          {event.isUserRegistered ? "Registered" : "RSVP"}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Bell className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader className="relative">
              {selectedEvent.image && (
                <img
                  src={selectedEvent.image || "/placeholder.svg"}
                  alt={selectedEvent.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <Button
                variant="outline"
                size="sm"
                className="absolute top-4 right-4 bg-white/90"
                onClick={() => setSelectedEvent(null)}
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
                    {selectedEvent.isFeatured && <Badge variant="secondary">Featured</Badge>}
                  </div>
                  <p className="text-lg text-muted-foreground font-devanagari">{selectedEvent.titleNewa}</p>
                  <Badge className={`${getCategoryColor(selectedEvent.category)} mt-2`}>
                    {getCategoryIcon(selectedEvent.category)} {selectedEvent.category}
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedEvent.date.toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {selectedEvent.time} {selectedEvent.endTime && `- ${selectedEvent.endTime}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {selectedEvent.attendees} attendees{" "}
                      {selectedEvent.maxAttendees && `(${selectedEvent.maxAttendees} max)`}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{selectedEvent.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Organizer</h3>
                  <p className="text-muted-foreground">{selectedEvent.organizer}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    className="flex-1"
                    variant={selectedEvent.isUserRegistered ? "outline" : "default"}
                    onClick={() => handleRSVP(selectedEvent.id)}
                  >
                    {selectedEvent.isUserRegistered ? "Already Registered" : "RSVP Now"}
                  </Button>
                  <Button variant="outline">
                    <Bell className="mr-2 h-4 w-4" />
                    Remind Me
                  </Button>
                  <Button variant="outline">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
