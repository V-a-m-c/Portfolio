// Chooses the narration voice from whatever the visitor's device offers.
//
// The Web Speech API has no gender field, so "male-sounding" can only be
// inferred from voice names. These lists cover the common Windows, Edge,
// Apple, and Chrome voices; a device with unrecognised names simply falls back
// to language preference. Nothing here assumes a particular voice exists.
const MALE_HINTS = [
  "male",
  // Indian English
  "ravi",
  "prabhat",
  "rishi",
  // Other English voices
  "david",
  "mark",
  "george",
  "ryan",
  "thomas",
  "guy",
  "christopher",
  "eric",
  "roger",
  "steffan",
  "andrew",
  "brian",
  "william",
  "daniel",
  "alex",
  "aaron",
  "arthur",
  "gordon",
  "oliver",
  "fred",
  "tom",
  "liam",
  "connor",
  "james",
];

const FEMALE_HINTS = [
  "female",
  "heera",
  "neerja",
  "veena",
  "zira",
  "hazel",
  "susan",
  "aria",
  "jenny",
  "michelle",
  "ana",
  "sonia",
  "libby",
  "maisie",
  "natasha",
  "clara",
  "emma",
  "ava",
  "samantha",
  "victoria",
  "karen",
  "moira",
  "tessa",
  "fiona",
  "kate",
  "serena",
  "martha",
  "catherine",
  "allison",
  "susan",
  "nicky",
  "linda",
];

const LANGUAGE_SCORE = { "en-in": 100, "en-gb": 20, "en-us": 10 };

const normaliseLang = (lang) => (lang || "").replace("_", "-").toLowerCase();

// Matches whole words so "tom" does not match "custom" and "male" does not
// match "female".
const hasHint = (name, hints) => {
  const words = name.toLowerCase().split(/[^a-z]+/);
  return hints.some((hint) => words.includes(hint));
};

// Sounding male matters most, then Indian English, then other English.
// A slight preference for on-device voices keeps word-level captions working.
export function scoreVoice(voice) {
  const lang = normaliseLang(voice.lang);
  if (!lang.startsWith("en")) return -Infinity;
  let score = LANGUAGE_SCORE[lang] || 0;
  if (hasHint(voice.name, FEMALE_HINTS)) score -= 200;
  else if (hasHint(voice.name, MALE_HINTS)) score += 200;
  if (voice.localService) score += 1;
  return score;
}

// Returns the best English voice, or null to let the browser use its default.
export function chooseVoice(voices) {
  let best = null;
  let bestScore = -Infinity;
  voices.forEach((voice) => {
    const score = scoreVoice(voice);
    if (score > bestScore) {
      best = voice;
      bestScore = score;
    }
  });
  return best;
}
