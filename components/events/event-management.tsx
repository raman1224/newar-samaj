"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Plus,
  Calendar,
  Clock,
  MapPin,
  Users,
  ImageIcon,
  Tag,
  Save,
  X,
  Edit,
  Trash2,
  Eye,
  Share2,
  Download,
  BarChart3,
} from "lucide-react"

interface EventForm {
  title: string
  titleNewa: string
  description: string
  date: string
  time: string
  endTime: string
  location: string
  category: string
  maxAttendees: string
  image: string
  tags: string[]
  isPublic: boolean
  requiresApproval: boolean
}

const initialForm: EventForm = {
  title: "",
  titleNewa: "",
  description: "",
  date: "",
  time: "",
  endTime: "",
  location: "",
  category: "community",
  maxAttendees: "",
  image: "",
  tags: [],
  isPublic: true,
  requiresApproval: false,
}

const categories = [
  { value: "festival", label: "Festival", icon: "🎉" },
  { value: "workshop", label: "Workshop", icon: "🎓" },
  { value: "community", label: "Community", icon: "👥" },
  { value: "cultural", label: "Cultural", icon: "🎭" },
  { value: "religious", label: "Religious", icon: "🙏" },
]

const myEvents = [
  {
    id: "1",
    title: "Newar Language Workshop",
    date: "2024-09-20",
    attendees: 45,
    maxAttendees: 60,
    status: "published",
    views: 234,
    registrations: 45,
  },
  {
    id: "2",
    title: "Traditional Cooking Class",
    date: "2024-09-25",
    attendees: 28,
    maxAttendees: 30,
    status: "draft",
    views: 89,
    registrations: 28,
  },
]

export function EventManagement() {
  const [activeTab, setActiveTab] = React.useState("create")
  const [form, setForm] = React.useState<EventForm>(initialForm)
  const [newTag, setNewTag] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleInputChange = (field: keyof EventForm, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const addTag = () => {
    if (newTag.trim() && !form.tags.includes(newTag.trim())) {
      setForm((prev) => ({ ...prev, tags: [...prev.tags, newTag.trim()] }))
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setForm((prev) => ({ ...prev, tags: prev.tags.filter((tag) => tag !== tagToRemove) }))
  }

  const handleSubmit = async (action: "save" | "publish") => {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(`Event ${action}ed:`, form)
      setIsSubmitting(false)
      if (action === "publish") {
        setActiveTab("manage")
      }
    }, 1500)
  }

  const resetForm = () => {
    setForm(initialForm)
    setNewTag("")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Event Management</h2>
          <p className="text-muted-foreground">Create and manage community events</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="create">Create Event</TabsTrigger>
          <TabsTrigger value="manage">My Events</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Create New Event
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Event Title (English)</label>
                  <Input
                    value={form.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="Enter event title"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Event Title (Newar)</label>
                  <Input
                    value={form.titleNewa}
                    onChange={(e) => handleInputChange("titleNewa", e.target.value)}
                    placeholder="नेवा भाषामा शीर्षक"
                    className="font-devanagari"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={form.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Describe your event..."
                  className="min-h-[100px]"
                />
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Date
                  </label>
                  <Input type="date" value={form.date} onChange={(e) => handleInputChange("date", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Start Time
                  </label>
                  <Input type="time" value={form.time} onChange={(e) => handleInputChange("time", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">End Time</label>
                  <Input
                    type="time"
                    value={form.endTime}
                    onChange={(e) => handleInputChange("endTime", e.target.value)}
                  />
                </div>
              </div>

              {/* Location and Category */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </label>
                  <Input
                    value={form.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    placeholder="Event location"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => handleInputChange("category", e.target.value)}
                    className="w-full border rounded-lg px-3 py-2"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.icon} {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Capacity and Image */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Max Attendees
                  </label>
                  <Input
                    type="number"
                    value={form.maxAttendees}
                    onChange={(e) => handleInputChange("maxAttendees", e.target.value)}
                    placeholder="Leave empty for unlimited"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <ImageIcon className="h-4 w-4" />
                    Event Image URL
                  </label>
                  <Input
                    value={form.image}
                    onChange={(e) => handleInputChange("image", e.target.value)}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Tags
                </label>
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a tag"
                    onKeyPress={(e) => e.key === "Enter" && addTag()}
                  />
                  <Button type="button" onClick={addTag} variant="outline">
                    Add
                  </Button>
                </div>
                {form.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {form.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="flex items-center gap-1">
                        {tag}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => removeTag(tag)} />
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Settings */}
              <div className="space-y-3">
                <h3 className="font-medium">Event Settings</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={form.isPublic}
                      onChange={(e) => handleInputChange("isPublic", e.target.checked)}
                    />
                    <span className="text-sm">Make this event public</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={form.requiresApproval}
                      onChange={(e) => handleInputChange("requiresApproval", e.target.checked)}
                    />
                    <span className="text-sm">Require approval for registration</span>
                  </label>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={() => handleSubmit("save")}
                  variant="outline"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Draft
                </Button>
                <Button
                  onClick={() => handleSubmit("publish")}
                  disabled={isSubmitting || !form.title || !form.date}
                  className="flex-1"
                >
                  {isSubmitting ? "Publishing..." : "Publish Event"}
                </Button>
                <Button variant="ghost" onClick={resetForm}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manage" className="space-y-6">
          <div className="space-y-4">
            {myEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                        <Badge variant={event.status === "published" ? "default" : "secondary"}>{event.status}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(event.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {event.attendees}/{event.maxAttendees} attendees
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {event.views} views
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-6">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold">156</div>
                <div className="text-sm text-muted-foreground">Total Events Created</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-2xl font-bold">2,340</div>
                <div className="text-sm text-muted-foreground">Total Attendees</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-2xl font-bold">12,450</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Event Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground py-8">
                <BarChart3 className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
                <p>Detailed analytics and insights for your events will be displayed here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
