// NAVIGATION
export const NAV_LINKS = [
  { 
    href: "/tangerine-life/about-us", 
    key: "about-us", 
    label: "About Us",
  },
  { 
    href: "#", 
    key: "corporate-plans", 
    label: "Corporate Plans",
    subMenu: [
      { href: "/tangerine-life/group-life-assurance-scheme", key: "group-life-assurance-scheme", label: "Group Life Assurance Scheme" },
      { href: "/tangerine-life/credit-life-insurance", key: "credit-life-insurance", label: "Credit Life Insurance" },
    ]
  },
  { href: "/tangerine-life/retail-plans", key: "retail-plans", label: "Retail Plans" },
  { href: "/tangerine-life/contact", key: "contact", label: "Contact" },
  { href: "/tangerine-life/blog", key: "blog", label: "Blog" },
];

export const LIFE_INSURANCE = [
  { 
    image: "/icons/life/car-burst.svg", 
    title: "Life Cover up to ₦50,000,0000", 
    description: "A guaranteed payout limit of up to 50 million Naira to take care of life's essentials when you can't." 
  },
  { 
    image: "/icons/life/life-ring.svg", 
    title: "Critical illness Benefits", 
    description: "The Critical Illness benefit is designed to assist with the payment of expensive medical treatment needed for a member to survive or to be rehabilitated from a Critical Illness." 
  },
  { 
    image: "/icons/life/coin.svg", 
    title: "Flexible payment options", 
    description: "keep you and your loved ones covered with a plan that allows flexible Monthly, quarterly and Annual Payment plans " 
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Retail plans",
    links: ["Education Plan", "Protection Plan", "Mortgage Plan", "Family Welfare Plan", "Triple Plan", "Credit Life Plan", "Memorial Plan", "Savings Plan", "Savings Plus Plan", "Tang Flex Plan", "Tang Betta Plan", "Tang VIP Plan"],
  },
  {
    title: "corporate plans",
    links: [
      "Group Life Assurance Scheme",
      "Credit Life Insurance",
      "Bancassurance",
    ],
  },
  {
    title: "Compliance",
    links: [
      "Terms & Conditions",
      "Privacy Policy",
      "Cookies Policy",
      "Whistleblowing Policy",
    ],
  },
  {
    title: "Media centre",
    links: ["Blog", "Media Center"],
  },
];

export const CORE_VALUES = [
  {
    title: "Creativity",
    icon: "/icons/life/creativity.svg",
    text: "We are unconventional in our approach to delivering innovative solutions that create value.",
  },
  {
    title: "Accountability",
    icon: "/icons/life/accountability.svg",
    text: "We take responsibility for our words, actions and results.",
  },
  {
    title: "Customer Focus",
    icon: "/icons/life/customer.svg",
    text: "We are customer centric. Our focus is building outstanding customer experience and lasting relationships.",
  },
  {
    title: "Integrity",
    icon: "/icons/life/integrity.svg",
    text: "We are honest, transparent and keep to our commitments.",
  },
  {
    title: "Excellence",
    icon: "/icons/life/excellence.svg",
    text: "We are intentional in consistently producing high-quality results, thereby exceeding the expectations of our stakeholders.",
  },
];