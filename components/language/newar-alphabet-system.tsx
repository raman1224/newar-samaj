"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Volume2, Play, BookOpen, CheckCircle } from "lucide-react";

// Newar alphabet data
const consonants = [
  { char: "क", romanized: "ka", example: "कमल (kamal) - Lotus", sound: "ka" },
  { char: "ख", romanized: "kha", example: "खरायो (kharayo) - Rabbit", sound: "kha" },
  { char: "ग", romanized: "ga", example: "गहना (gahana) - Jewelry", sound: "ga" },
  { char: "घ", romanized: "gha", example: "घर (ghar) - House", sound: "gha" },
  { char: "ङ", romanized: "ṅa", example: "ङ (ṅa) - Nasal sound", sound: "nga" },
  { char: "च", romanized: "cha", example: "चन्द्र (chandra) - Moon", sound: "cha" },
  { char: "छ", romanized: "chha", example: "छत (chhat) - Roof", sound: "chha" },
  { char: "ज", romanized: "ja", example: "जुना (juna) - Old", sound: "ja" },
  { char: "झ", romanized: "jha", example: "झरना (jharna) - Waterfall", sound: "jha" },
  { char: "ञ", romanized: "ña", example: "ञ (ña) - Nasal sound", sound: "nya" },
  { char: "ट", romanized: "ṭa", example: "टोपी (ṭopi) - Cap", sound: "ta" },
  { char: "ठ", romanized: "ṭha", example: "ठूलो (ṭhulo) - Big", sound: "tha" },
  { char: "ड", romanized: "ḍa", example: "डमरु (ḍamaru) - Drum", sound: "da" },
  { char: "ढ", romanized: "ḍha", example: "ढोका (ḍhoka) - Door", sound: "dha" },
  { char: "ण", romanized: "ṇa", example: "ण (ṇa) - Nasal sound", sound: "na" },
  { char: "त", romanized: "ta", example: "तरकारी (tarkari) - Vegetable", sound: "ta" },
  { char: "थ", romanized: "tha", example: "थाप (thap) - Stamp", sound: "tha" },
  { char: "द", romanized: "da", example: "देव (dev) - God", sound: "da" },
  { char: "ध", romanized: "dha", example: "धागो (dhago) - Thread", sound: "dha" },
  { char: "न", romanized: "na", example: "नदी (nadi) - River", sound: "na" },
  { char: "प", romanized: "pa", example: "पानी (pani) - Water", sound: "pa" },
  { char: "फ", romanized: "pha", example: "फूल (phul) - Flower", sound: "pha" },
  { char: "ब", romanized: "ba", example: "बाटो (bato) - Road", sound: "ba" },
  { char: "भ", romanized: "bha", example: "भात (bhat) - Rice", sound: "bha" },
  { char: "म", romanized: "ma", example: "मचा (macha) - Person", sound: "ma" },
  { char: "य", romanized: "ya", example: "याक (yak) - Yak", sound: "ya" },
  { char: "र", romanized: "ra", example: "राजा (raja) - King", sound: "ra" },
  { char: "ल", romanized: "la", example: "लत्ता (latta) - Cloth", sound: "la" },
  { char: "व", romanized: "va", example: "वस्तु (vastu) - Thing", sound: "va" },
  { char: "श", romanized: "sha", example: "शान्ति (shanti) - Peace", sound: "sha" },
  { char: "ष", romanized: "ṣa", example: "षड्यन्त्र (ṣaḍyantra) - Conspiracy", sound: "sha" },
  { char: "स", romanized: "sa", example: "सूर्य (surya) - Sun", sound: "sa" },
  { char: "ह", romanized: "ha", example: "हात (hat) - Hand", sound: "ha" },
  { char: "क्ष", romanized: "kṣa", example: "क्षेत्र (kṣetra) - Field", sound: "ksha" },
  { char: "त्र", romanized: "tra", example: "त्रिशूल (trishul) - Trident", sound: "tra" },
  { char: "ज्ञ", romanized: "gya", example: "ज्ञान (gyan) - Knowledge", sound: "gya" },
];

const vowels = [
  { char: "अ", romanized: "a", example: "अक्षर (akshar) - Letter", sound: "a" },
  { char: "आ", romanized: "ā", example: "आम (ām) - Mango", sound: "aa" },
  { char: "इ", romanized: "i", example: "इच्छा (iccha) - Desire", sound: "i" },
  { char: "ई", romanized: "ī", example: "ईश्वर (īshwar) - God", sound: "ee" },
  { char: "उ", romanized: "u", example: "उपहार (upahar) - Gift", sound: "u" },
  { char: "ऊ", romanized: "ū", example: "ऊन (ūn) - Wool", sound: "oo" },
  { char: "ऋ", romanized: "ṛ", example: "ऋषि (ṛṣi) - Sage", sound: "ri" },
  { char: "ए", romanized: "e", example: "एक (ek) - One", sound: "e" },
  { char: "ऐ", romanized: "ai", example: "ऐनक (ainak) - Spectacles", sound: "ai" },
  { char: "ओ", romanized: "o", example: "ओखर (okhar) - Steps", sound: "o" },
  { char: "औ", romanized: "au", example: "औंसी (aunsi) - New moon", sound: "au" },
  { char: "अं", romanized: "aṃ", example: "अंक (aṃk) - Number", sound: "am" },
  { char: "अः", romanized: "aḥ", example: "अः (aḥ) - Visarga", sound: "aha" },
];

const vowelSigns = [
  { sign: "ा", name: "आकार", example: "का (kā)" },
  { sign: "ि", name: "इकार", example: "कि (ki)" },
  { sign: "ी", name: "ईकार", example: "की (kī)" },
  { sign: "ु", name: "उकार", example: "कु (ku)" },
  { sign: "ू", name: "ऊकार", example: "कू (kū)" },
  { sign: "ृ", name: "ऋकार", example: "कृ (kṛ)" },
  { sign: "े", name: "एकार", example: "के (ke)" },
  { sign: "ै", name: "ऐकार", example: "कै (kai)" },
  { sign: "ो", name: "ओकार", example: "को (ko)" },
  { sign: "ौ", name: "औकार", example: "कौ (kau)" },
  { sign: "ं", name: "अनुस्वार", example: "कं (kaṃ)" },
  { sign: "ः", name: "विसर्ग", example: "कः (kaḥ)" },
];

export function NewarAlphabetSystem() {
  const [selectedChar, setSelectedChar] = React.useState<typeof consonants[0] | null>(null);
  const [learnedChars, setLearnedChars] = React.useState<Set<string>>(new Set());

  const playSound = (sound: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(sound);
      utterance.lang = "ne-NP";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const markAsLearned = (char: string) => {
    const newLearned = new Set(learnedChars);
    if (newLearned.has(char)) {
      newLearned.delete(char);
    } else {
      newLearned.add(char);
    }
    setLearnedChars(newLearned);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Newar <span className="text-primary">Alphabet</span> System
        </h1>
        <p className="text-xl text-muted-foreground">
          Learn the foundation of Newar language with interactive alphabet lessons
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-primary/5">
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">{consonants.length}</div>
            <p className="text-sm">Consonants</p>
          </CardContent>
        </Card>
        <Card className="bg-primary/5">
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">{vowels.length}</div>
            <p className="text-sm">Vowels</p>
          </CardContent>
        </Card>
        <Card className="bg-primary/5">
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">{vowelSigns.length}</div>
            <p className="text-sm">Vowel Signs</p>
          </CardContent>
        </Card>
        <Card className="bg-primary/5">
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">{learnedChars.size}</div>
            <p className="text-sm">Learned Characters</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="consonants" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="consonants">Consonants</TabsTrigger>
          <TabsTrigger value="vowels">Vowels</TabsTrigger>
          <TabsTrigger value="signs">Vowel Signs</TabsTrigger>
        </TabsList>

        <TabsContent value="consonants" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {consonants.map((consonant) => (
              <Card 
                key={consonant.char} 
                className={`cursor-pointer transition-all hover:shadow-md ${learnedChars.has(consonant.char) ? 'border-primary/50 bg-primary/5' : ''}`}
                onClick={() => setSelectedChar(consonant)}
              >
                <CardContent className="p-4 flex flex-col items-center">
                  <div className="text-4xl font-devanagari mb-2">{consonant.char}</div>
                  <div className="text-sm text-muted-foreground">{consonant.romanized}</div>
                  {learnedChars.has(consonant.char) && (
                    <CheckCircle className="h-5 w-5 text-primary mt-2" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="vowels" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {vowels.map((vowel) => (
              <Card 
                key={vowel.char} 
                className={`cursor-pointer transition-all hover:shadow-md ${learnedChars.has(vowel.char) ? 'border-primary/50 bg-primary/5' : ''}`}
                onClick={() => setSelectedChar(vowel)}
              >
                <CardContent className="p-4 flex flex-col items-center">
                  <div className="text-4xl font-devanagari mb-2">{vowel.char}</div>
                  <div className="text-sm text-muted-foreground">{vowel.romanized}</div>
                  {learnedChars.has(vowel.char) && (
                    <CheckCircle className="h-5 w-5 text-primary mt-2" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="signs" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {vowelSigns.map((sign) => (
              <Card 
                key={sign.sign} 
                className={`cursor-pointer transition-all hover:shadow-md ${learnedChars.has(sign.sign) ? 'border-primary/50 bg-primary/5' : ''}`}
                onClick={() => setSelectedChar({
                  char: `क${sign.sign}`,
                  romanized: sign.name,
                  example: sign.example,
                  sound: "ka" + sign.sign
                })}
              >
                <CardContent className="p-4 flex flex-col items-center">
                  <div className="text-4xl font-devanagari mb-2">क{sign.sign}</div>
                  <div className="text-sm text-muted-foreground">{sign.name}</div>
                  {learnedChars.has(sign.sign) && (
                    <CheckCircle className="h-5 w-5 text-primary mt-2" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {selectedChar && (
        <Card className="sticky bottom-4 shadow-xl">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="text-6xl font-devanagari">{selectedChar.char}</div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Pronunciation: {selectedChar.romanized}</h3>
                <p className="text-muted-foreground mb-4">{selectedChar.example}</p>
                
                <div className="flex gap-3">
                  <Button onClick={() => playSound(selectedChar.sound)}>
                    <Volume2 className="mr-2 h-4 w-4" />
                    Listen
                  </Button>
                  <Button 
                    variant={learnedChars.has(selectedChar.char) ? "default" : "outline"} 
                    onClick={() => markAsLearned(selectedChar.char)}
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    {learnedChars.has(selectedChar.char) ? "Learned" : "Mark as Learned"}
                  </Button>
                </div>
              </div>
              
              <Button variant="ghost" size="icon" onClick={() => setSelectedChar(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mt-12 bg-muted/30 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Practice Tips</h3>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Start with basic vowels and consonants before moving to complex characters</li>
          <li>Practice writing each character while saying its sound aloud</li>
          <li>Use the audio pronunciation feature to learn correct sounds</li>
          <li>Review previously learned characters regularly</li>
          <li>Try to form simple words once you've learned multiple characters</li>
        </ul>
      </div>
    </div>
  );
}


