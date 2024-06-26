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

export const SOCIALS = {
  title: "Social",
  links: [
    { icon: "/icons/linkedin.svg", label: "@Tangerine Africa" },
    { icon: "/icons/facebook.svg", label: "@tangerineafrica" },
    { icon: "/icons/instagram.svg", label: "@tangerineafrica" },
    { icon: "/icons/x-twitter.svg", label: "@TangerineAfrica" },
  ],
};