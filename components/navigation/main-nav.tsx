"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Sun, Globe, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface MainNavProps {
  currentLanguage: string
  onLanguageChange: (language: string) => void
  isDarkMode: boolean
  onThemeToggle: () => void
}

export function MainNav({ currentLanguage, onLanguageChange, isDarkMode, onThemeToggle }: MainNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const languages = [
    { code: "en", name: "English", native: "English" },
    { code: "np", name: "Nepali", native: "नेपाली" },
    { code: "nw", name: "Newa", native: "नेवा भाषा" },
  ]

  const getContent = () => {
    const content = {
      en: {
        home: "Home",
        aboutUs: "About Us",
        language: "Language",
        culture: "Culture & Heritage",
        resources: "Resources",
        events: "Events",
        membership: "Membership",
        contact: "Contact Us",
        signIn: "Sign In",
        joinUs: "Join Us",
        aboutItems: [
          {
            title: "Our History",
            href: "/about/history",
            description: "Interactive timeline, videos, images, AI chatbot Q&A",
          },
          { title: "Mission & Vision", href: "/about", description: "Our mission to preserve Newar heritage" },
          { title: "Vision & Values", href: "/about", description: "Core values and cultural principles" },
          { title: "Leadership & Community", href: "/about", description: "Community leaders and members" },
        ],
        languageItems: [
          {
            title: "Learn Newar Language",
            href: "/language/learn",
            description: "Structured learning with AI tutor assistance",
          },
          {
            title: "Language Exchange Chatroom",
            href: "/language/chat",
            description: "Real-time chat with AI-assisted suggestions",
          },
          {
            title: "Culture School",
            href: "/language/school",
            description: "Video lessons, AI adaptive quizzes, progress tracking",
          },
          {
            title: "Flashcards",
            href: "/language/flashcards",
            description: "Interactive 3D flashcards with pronunciation",
          },
        ],
        resourceItems: [
          {
            title: "Documents & Archives",
            href: "/resources/documents",
            description: "Historical documents and archives",
          },


          {
            title: "Research & Publication",
            href: "/resources/research",
            description: "Academic research and publications",
          },
          { title: "Community Support", href: "/resources/support", description: "Community assistance and resources" },
          { title: "AI Cultural Assistant", href: "/ai", description: "Chat with our AI about Newar culture" },
        ],
        eventItems: [
          { title: "Upcoming Events", href: "/events", description: "Community events and gatherings" },
          { title: "Festival Calendar", href: "/events", description: "Traditional festivals and celebrations" },
        ],
        membershipItems: [
          { title: "Join Us", href: "/auth/signup", description: "Become a member of our community" },
          { title: "News & Updates", href: "/news", description: "Latest community news and updates" },
          { title: "Donate", href: "/donate", description: "Support our cultural preservation efforts" },
        ],
      },
      np: {
        home: "गृह",
        aboutUs: "हाम्रो बारेमा",
        language: "भाषा",
        culture: "संस्कृति र सम्पदा",
        resources: "स्रोतहरू",
        events: "कार्यक्रमहरू",
        membership: "सदस्यता",
        contact: "सम्पर्क",
        signIn: "साइन इन",
        joinUs: "सामेल हुनुहोस्",
        aboutItems: [
          { title: "हाम्रो इतिहास", href: "/about/history", description: "अन्तरक्रियात्मक समयरेखा, भिडियो, छविहरू" },
          { title: "मिशन र दृष्टिकोण", href: "/about", description: "नेवार सम्पदा संरक्षणको हाम्रो मिशन" },
          { title: "दृष्टिकोण र मूल्यहरू", href: "/about", description: "मूल मूल्यहरू र सांस्कृतिक सिद्धान्तहरू" },
          { title: "नेतृत्व र समुदाय", href: "/about", description: "समुदायका नेताहरू र सदस्यहरू" },
        ],
        languageItems: [
          { title: "नेवार भाषा सिक्नुहोस्", href: "/language/learn", description: "AI शिक्षकको सहायतामा संरचित सिकाइ" },
          { title: "भाषा आदानप्रदान च्याटरूम", href: "/language/chat", description: "AI सहायताको साथ वास्तविक समय च्याट" },
          { title: "संस्कृति स्कूल", href: "/language/school", description: "भिडियो पाठहरू, AI अनुकूलन प्रश्नोत्तरी" },
          { title: "फ्ल्यासकार्डहरू", href: "/language/flashcards", description: "उच्चारणसहित अन्तरक्रियात्मक 3D फ्ल्यासकार्डहरू" },
        ],
        resourceItems: [
          { title: "कागजातहरू र अभिलेखहरू", href: "/resources/documents", description: "ऐतिहासिक कागजातहरू र अभिलेखहरू" },
          { title: "अनुसन्धान र प्रकाशन", href: "/resources/research", description: "शैक्षणिक अनुसन्धान र प्रकाशनहरू" },
          { title: "सामुदायिक सहायता", href: "/resources/support", description: "सामुदायिक सहायता र स्रोतहरू" },
          { title: "AI सांस्कृतिक सहायक", href: "/ai", description: "नेवार संस्कृतिको बारेमा हाम्रो AI सँग कुराकानी गर्नुहोस्" },
        ],
        eventItems: [
          { title: "आगामी कार्यक्रमहरू", href: "/events", description: "सामुदायिक कार्यक्रमहरू र भेलाहरू" },
          { title: "चाडपर्व पात्रो", href: "/events", description: "परम्परागत चाडपर्वहरू र उत्सवहरू" },
        ],
        membershipItems: [
          { title: "सामेल हुनुहोस्", href: "/auth/signup", description: "हाम्रो समुदायको सदस्य बन्नुहोस्" },
          { title: "समाचार र अपडेटहरू", href: "/news", description: "नवीनतम सामुदायिक समाचार र अपडेटहरू" },
          { title: "दान गर्नुहोस्", href: "/donate", description: "हाम्रो सांस्कृतिक संरक्षण प्रयासहरूलाई समर्थन गर्नुहोस्" },
        ],
      },
      nw: {
        home: "छेँ",
        aboutUs: "झिगु बारेय्",
        language: "भाषा",
        culture: "संस्कृति व सम्पदा",
        resources: "स्रोतहरू",
        events: "कार्यक्रमहरू",
        membership: "सदस्यता",
        contact: "सम्पर्क",
        signIn: "साइन इन",
        joinUs: "सामेल जुयाः",
        aboutItems: [
          { title: "झिगु इतिहास", href: "/about/history", description: "अन्तरक्रियात्मक समयरेखा, भिडियो, छविहरू" },
          { title: "मिशन व दृष्टिकोण", href: "/about", description: "नेवाः सम्पदा संरक्षणया झिगु मिशन" },
          { title: "दृष्टिकोण व मूल्यहरू", href: "/about", description: "मूल मूल्यहरू व सांस्कृतिक सिद्धान्तहरू" },
          { title: "नेतृत्व व समुदाय", href: "/about", description: "समुदायका नेताहरू व सदस्यहरू" },
        ],
        languageItems: [
          { title: "नेवाः भाषा छ्यानाः", href: "/language/learn", description: "AI गुरुया सहायतातः संरचित सिकाइ" },
          { title: "भाषा आदानप्रदान च्याटरूम", href: "/language/chat", description: "AI सहायताया साथ वास्तविक समय च्याट" },
          { title: "संस्कृति स्कूल", href: "/language/school", description: "भिडियो पाठहरू, AI अनुकूलन प्रश्नोत्तरी" },
          { title: "फ्ल्यासकार्डहरू", href: "/language/flashcards", description: "उच्चारणसहित अन्तरक्रियात्मक 3D फ्ल्यासकार्डहरू" },
        ],
        resourceItems: [
          { title: "कागजातहरू व अभिलेखहरू", href: "/resources/documents", description: "ऐतिहासिक कागजातहरू व अभिलेखहरू" },
          { title: "अनुसन्धान व प्रकाशन", href: "/resources/research", description: "शैक्षणिक अनुसन्धान व प्रकाशनहरू" },
          { title: "सामुदायिक सहायता", href: "/resources/support", description: "सामुदायिक सहायता व स्रोतहरू" },
          { title: "AI सांस्कृतिक सहायक", href: "/ai", description: "झिगु संस्कृतिया बारेय् झिगु AI सँग कुराकानी यानाः" },
        ],
        eventItems: [
          { title: "आगामी कार्यक्रमहरू", href: "/events", description: "सामुदायिक कार्यक्रमहरू व भेलाहरू" },
          { title: "नखः पात्रो", href: "/events", description: "परम्परागत नखःहरू व उत्सवहरू" },
        ],
        membershipItems: [
          { title: "सामेल जुयाः", href: "/auth/signup", description: "झिगु समुदायया सदस्य जुयाः" },
          { title: "समाचार व अपडेटहरू", href: "/news", description: "नवीनतम सामुदायिक समाचार व अपडेटहरू" },
          { title: "दान यानाः", href: "/donate", description: "झिगु सांस्कृतिक संरक्षण प्रयासहरूलाई समर्थन यानाः" },
        ],
      },
    }
    return content[currentLanguage as keyof typeof content] || content.en
  }

  const currentContent = getContent()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img
            src="/g6.png"
            alt="Newar Samaj Logo"
            className="h-10 w-10 rounded-full shadow-md hover:shadow-lg transition-shadow"
          />
          <div>
            <h1 className="text-xl font-bold text-primary">Newar Samaj</h1>
            <p className="text-xs text-muted-foreground font-devanagari">नेवार समाज</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  {currentContent.home}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{currentContent.aboutUs}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {currentContent.aboutItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{currentContent.language}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {currentContent.languageItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/culture" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  {currentContent.culture}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{currentContent.resources}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {currentContent.resourceItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{currentContent.events}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[500px]">
                  {currentContent.eventItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{currentContent.membership}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[500px]">
                  {currentContent.membershipItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

          <NavigationMenuItem>
  <Link href="/contact" legacyBehavior passHref>
    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
      {currentContent.contact}
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-2">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Globe className="h-4 w-4 mr-2" />
                {languages.find((lang) => lang.code === currentLanguage)?.native}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => onLanguageChange(language.code)}
                  className={cn("cursor-pointer", currentLanguage === language.code && "bg-accent")}
                >
                  <span className="font-medium">{language.native}</span>
                  <span className="ml-2 text-muted-foreground">({language.name})</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button variant="ghost" size="sm" onClick={onThemeToggle} className="hidden md:flex">
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/auth/signin">{currentContent.signIn}</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/auth/signup">{currentContent.joinUs}</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-4">
                <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
                  {currentContent.home}
                </Link>

                <div className="space-y-2">
                  <h3 className="font-medium text-muted-foreground">{currentContent.aboutUs}</h3>
                  {currentContent.aboutItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block pl-4 text-sm hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-muted-foreground">{currentContent.language}</h3>
                  {currentContent.languageItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block pl-4 text-sm hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <Link href="/culture" className="text-lg font-medium hover:text-primary transition-colors">
                  {currentContent.culture}
                </Link>

                <div className="space-y-2">
                  <h3 className="font-medium text-muted-foreground">{currentContent.resources}</h3>
                  {currentContent.resourceItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block pl-4 text-sm hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-muted-foreground">{currentContent.events}</h3>
                  {currentContent.eventItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block pl-4 text-sm hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-muted-foreground">{currentContent.membership}</h3>
                  {currentContent.membershipItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block pl-4 text-sm hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors">
                  {currentContent.contact}
                </Link>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" onClick={onThemeToggle}>
                      {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </Button>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Globe className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {languages.map((language) => (
                          <DropdownMenuItem key={language.code} onClick={() => onLanguageChange(language.code)}>
                            {language.native}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/auth/signin">{currentContent.signIn}</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/auth/signup">{currentContent.joinUs}</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

// In components/navigation/main-nav.tsx
// Add this to your navigation items:
<Link href="/language/alphabet" className="text-sm font-medium transition-colors hover:text-primary">
  Alphabet
</Link>


const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
