"use client"

import { EventCalendar } from "@/components/events/event-calendar"
import { EventManagement } from "@/components/events/event-management"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, MapPin, Clock, Plus, Settings } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Community Events & Calendar
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Stay connected with the Newar community through festivals, workshops, cultural events, and gatherings.
            Discover, create, and participate in events that celebrate our rich heritage.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">25</div>
              <div className="text-sm text-muted-foreground">Upcoming Events</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">1,250</div>
              <div className="text-sm text-muted-foreground">Community Members</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm text-muted-foreground">Event Locations</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">This Week</div>
              <div className="text-sm text-muted-foreground">3 Events</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="calendar" className="space-y-8">
          <div className="flex items-center justify-between">
            <TabsList className="grid grid-cols-2 max-w-md">
              <TabsTrigger value="calendar" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Events Calendar
              </TabsTrigger>
              <TabsTrigger value="manage" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Manage Events
              </TabsTrigger>
            </TabsList>

            <Button className="shadow-lg hover:shadow-xl transition-shadow">
              <Plus className="mr-2 h-4 w-4" />
              Create Event
            </Button>
          </div>

          <TabsContent value="calendar" className="space-y-8">
            <EventCalendar />
          </TabsContent>

          <TabsContent value="manage" className="space-y-8">
            <EventManagement />
          </TabsContent>
        </Tabs>

        {/* Featured Events Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Featured Community Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎉</span>
                </div>
                <h3 className="font-semibold mb-2">Festival Celebrations</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Join traditional festival celebrations with the community
                </p>
                <Button variant="outline" size="sm">
                  View Festivals
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-semibold mb-2">Learning Workshops</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Educational workshops on language, culture, and traditions
                </p>
                <Button variant="outline" size="sm">
                  Browse Workshops
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-semibold mb-2">Community Gatherings</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Regular meetups and social gatherings for community building
                </p>
                <Button variant="outline" size="sm">
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
