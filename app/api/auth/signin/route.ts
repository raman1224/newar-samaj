import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    const validUsers = [
      { email: "test@newarsamaj.com", password: "password123", name: "Test User", role: "member" },
      { email: "admin@newarsamaj.com", password: "admin123", name: "Admin User", role: "admin" },
      { email: "dangolraman3@gmail.com", password: "raman123", name: "Raman Dangol", role: "developer" },
    ]

    const user = validUsers.find((u) => u.email === email && u.password === password)

    if (user) {
      return NextResponse.json({
        success: true,
        message: "Login successful!",
        user: {
          id: Date.now().toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        },
        token: `jwt-token-${Date.now()}`,
      })
    }

    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
  } catch (error) {
    console.error("[v0] Login error:", error)
    return NextResponse.json({ error: "Login failed. Please try again." }, { status: 500 })
  }
}
