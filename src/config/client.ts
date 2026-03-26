export const client = {
  // Business Details
  name: "Dan Evans Landscaping & Gardening",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Dorchester.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07590 573177",
  email: "",
  website: "",

  // Location
  address: "Dorchester",
  city: "Dorchester",
  county: "",
  postcode: "",
  basedIn: "Dorchester",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Phil Mead", rating: 5, text: "Dan & Iona, as a team, are a dedicated, hard working and meticulous couple about their work ethos, which actually makes it easier to understand their dedication in what they do. It all gets 100% effort in whatever they are doing and …  +2 ", date: "2 years ago" },
    { name: "John Dunmow", rating: 5, text: "We have used Dan and his team for several projects now, each with excellent results. We would not hesitate to recommend him and if we have any future projects Dan will be the man we will call. Very knowledgeable, friendly, and uses his own initiative", date: "2 years ago" },
    { name: "Paula Davies", rating: 5, text: "Dan was very helpful with discussing our design for a complete garden makeover, suggesting little changes which improved it enormously. He arrived when he said he would each day and worked to a very high standard. We are extremely pleased …  ", date: "7 years ago" },
    { name: "Simon Spencer", rating: 5, text: "Dan and his team were fantastic,  They worked hard, non-stop (apart from the occasional cup of tea and a biscuit), and the work they did (to Dan's design) was just what we needed.  We will use them again without a moments hesitation. ", date: "6 years ago" },
    { name: "Barry Rogers", rating: 5, text: "Have used Dan's services twice in the last few months & both times the end results have been excellent. Highly recommend. ", date: "3 years ago" },
    { name: "Iona Service", rating: 5, text: "Stunning design ideas, excellent execution, he was on time, tidy and has transformed our garden. I am so glad we found him. I highly recommend him ", date: "8 years ago" },
    { name: "Caroline Smith", rating: 5, text: "Perfect,,Precise,,Punctual,,Perfection,,highly Recommended without any question.. ", date: "9 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Dan Evans Landscaping & Gardening | Landscaper in Dorchester",
    description: "Professional landscaper in Dorchester. 5.0-star rated on Google. Call for a free quote.",
  },
};
