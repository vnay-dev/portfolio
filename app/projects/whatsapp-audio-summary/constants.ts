export interface InterviewCarouselItem {
  question: string;
  objective: string;
}

export const interviewCarouselData: InterviewCarouselItem[] = [
  {
    question: "Who do you typically send audio messages to?",
    objective: "To understand the personal comfort and context involved in using this feature",
  },
  {
    question: "What is your experience with the fast forward feature for voice notes?",
    objective: "To determine how often users make use of this feature",
  },
  {
    question:
      "How do you feel when someone continues to send you only audio messages in a conversation?",
    objective: "To understand user tolerance levels and when the feature becomes frustrating",
  },
  {
    question: "How do you find important conversations in chats with many voice notes?",
    objective: "To assess the difficulty of locating specific voice notes in a busy chat history",
  },
  {
    question: "When was the last time you sent or received an audio message?",
    objective: "To understand how frequently users utilize this feature",
  },
  {
    question: "How do you decide when to listen to audio messages?",
    objective: "To explore how users manage their time to listening to audio messages",
  },
];

export interface InsightItem {
  icon: string;
  title: string;
  description: string;
}

export const insightsData: InsightItem[] = [
  {
    icon: "/images/whatsapp/whtsp_insights_personal.gif",
    title: "Personal comfort",
    description:
      "People feel most comfortable sending voice notes to friends and family they're close to.",
  },
  {
    icon: "/images/whatsapp/whtsp_insights_ffwd.gif",
    title: "Fast-forward usage",
    description:
      "Users who are in a hurry often speed up audio, usually to 1.5x speed, to save time.",
  },
  {
    icon: "/images/whatsapp/whtsp_insights_searchlist.gif",
    title: "Difficulty locating messages",
    description:
      "Users often struggle to find specific voice notes in a busy chat history. Many mentioned how tough it is to grasp the context and how time-consuming the whole process can be.",
  },
  {
    icon: "/images/whatsapp/whtsp_insights_lock.gif",
    title: "Privacy concerns",
    description:
      "Users are often hesitant to listen to audio messages in public places due to privacy concerns, preferring headphones or private settings.",
  },
  {
    icon: "/images/whatsapp/whtsp_insights_mic.gif",
    title: "Expressive communication",
    description:
      "People use voice notes to express emotions beyond emojis, avoid typing, mix languages or communicate on the go.",
  },
];

export const uj2Iteration1Images = [
  "/images/whatsapp/uj2_itr1_screen1.png",
  "/images/whatsapp/uj2_itr1_screen2.png",
  "/images/whatsapp/uj2_itr1_screen3.png",
  "/images/whatsapp/uj2_itr1_screen4.png",
];

export interface TickerDescription {
  text: string;
  highlightText?: string;
  highlightLength?: number;
}

export const uj2Iteration1Descriptions: TickerDescription[] = [
  {
    text: "User taps on the search bar",
  },
  {
    text: "Starts typing 'Apple'",
    highlightText: "Apple",
    highlightLength: 1,
  },
  {
    text: "Starts typing 'Apple'",
    highlightText: "Apple",
    highlightLength: 3,
  },
  {
    text: "Finished typing 'Apple'",
  },
];

export const uj2SearchFlowImages = [
  "/images/whatsapp/uj2_screen1.png",
  "/images/whatsapp/uj2_screen2.png",
  "/images/whatsapp/uj2_screen3.png",
  "/images/whatsapp/uj2_screen4.png",
  "/images/whatsapp/uj2_screen5.png",
];

export const uj2SearchFlowDescriptions: TickerDescription[] = [
  {
    text: "User taps on the search bar",
  },
  {
    text: "Starts typing 'Apple'",
    highlightText: "Apple",
    highlightLength: 1,
  },
  {
    text: "Starts typing 'Apple'",
    highlightText: "Apple",
    highlightLength: 3,
  },
  {
    text: "Finished typing 'Apple'",
  },
  {
    text: "Collapsible summary",
  },
];

