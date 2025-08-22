import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, language, context } = await request.json()

    if (!message || message.trim().length === 0) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "AI service temporarily unavailable. Please try again later.",
          fallback:
            "I'm here to help you learn about Newar culture! You can ask me about festivals, temples, traditions, or language learning.",
        },
        { status: 500 },
      )
    }

    const culturalPrompt = `You are a knowledgeable Cultural AI Assistant specializing in Newar culture, traditions, language, and heritage of Nepal. You are helpful, respectful, and passionate about preserving and sharing Newar cultural knowledge.

Context: ${context || "General cultural inquiry"}
Response Language: ${language === "np" ? "Respond in Nepali (Devanagari script)" : language === "newa" ? "Respond in Newar language when possible, otherwise use Nepali" : "Respond in English"}

User Question: ${message}

Guidelines:
- Provide accurate, culturally sensitive information about Newar heritage
- Include specific examples, dates, or locations when relevant
- If asked about non-cultural topics, politely redirect to cultural discussions
- Be encouraging about language learning and cultural preservation
- Mention festivals, temples, traditions, or historical facts when appropriate

Please provide a helpful and informative response:`

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: culturalPrompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
          ],
        }),
      },
    )

    if (!response.ok) {
      const errorData = await response.text()
      console.error("[v0] Gemini API Error:", errorData)
      throw new Error(`Gemini API error: ${response.status}`)
    }

    const data = await response.json()
    const aiResponse =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I apologize, but I couldn't generate a response. Please try asking about Newar festivals, temples, or cultural traditions."

    return NextResponse.json({
      response: aiResponse,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("[v0] AI Chat Error:", error)
    return NextResponse.json(
      {
        error: "I'm having trouble connecting right now. Please try again in a moment.",
        fallback:
          "In the meantime, feel free to explore our cultural content about Newar festivals like Indra Jatra, temples like Pashupatinath, or learn about our rich traditions!",
      },
      { status: 500 },
    )
  }
}
