/**
 * Google reviews that include photos.
 * Wording, names, star ratings, and dates are copied from the
 * Govinda Dosa listing in Nikol. Do not rewrite the quotes.
 * Photos live in public/images/reviews/.
 */

export type ReviewPhoto = {
  src: string;
  alt: string;
};

export type Review = {
  id: string;
  author: string;
  stars: number;
  when: string;
  quote?: string;
  photos: ReviewPhoto[];
};

const photo = (file: string, author: string): ReviewPhoto => ({
  src: `/images/reviews/${file}`,
  alt: `Photo from ${author}'s Google review of Govinda Dosa`,
});

export const reviewSummary = {
  source: "Google",
  rating: 4.9,
  count: 112,
} as const;

export const reviews: Review[] = [
  {
    id: "ishree-enterprise",
    author: "Ishree Enterprise",
    stars: 5,
    when: "a month ago",
    quote:
      "I recently visited Govinda dosa and was impressed with the affordable prices and great value for money. The food was incredibly fresh and delicious, especially the sambhar which was flavorful and savory, pairing perfectly with the dosa. The overall experience was wonderful",
    photos: [photo("ishree-1.jpg", "Ishree Enterprise")],
  },
  {
    id: "urvashi-selukar",
    author: "Urvashi Selukar",
    stars: 5,
    when: "2 months ago",
    quote:
      "I recently had dinner at Govinda dosa … taste was great.. I will suggest that visit once … u will get best experience here …. Thank you so much",
    photos: [photo("urvashi-1.jpg", "Urvashi Selukar")],
  },
  {
    id: "kishan-kanzariya",
    author: "Kishan Kanzariya",
    stars: 3,
    when: "a month ago",
    quote:
      "I visited Govinda dosa in the city center and loved the cozy dining area. Their dosas are super tasty and fresh, served with a side of delicious chutney. The service is quick and friendly, making it a great spot to grab a meal",
    photos: [photo("kishan-1.jpg", "Kishan Kanzariya")],
  },
  {
    id: "purvik-gajera",
    author: "Purvik Gajera",
    stars: 5,
    when: "a month ago",
    quote:
      "First time in Ahmedabad dosa best test and good service provide in Nikon Govinda dosa the test original Surat test very amazing place in Ahmedabad Nikon",
    photos: [
      photo("purvik-1.jpg", "Purvik Gajera"),
      photo("purvik-2.jpg", "Purvik Gajera"),
    ],
  },
  {
    id: "bhavesh-nawani",
    author: "Bhavesh Nawani",
    stars: 5,
    when: "a month ago",
    quote: "Good quality",
    photos: [photo("bhavesh-1.jpg", "Bhavesh Nawani")],
  },
  {
    id: "moni-vora",
    author: "Moni Vora",
    stars: 5,
    when: "2 weeks ago",
    quote:
      "Really loved the experience here! 😍 The dosa was absolutely delicious, with a great variety of amazing flavours to choose from. Everything was fresh, tasty, and perfectly prepared. The service was also very good—friendly, quick, and attentive. Overall, a wonderful place for dosa lovers. Highly recommended! ❤️✨",
    photos: [
      photo("moni-1.jpg", "Moni Vora"),
      photo("moni-2.jpg", "Moni Vora"),
      photo("moni-3.jpg", "Moni Vora"),
      photo("moni-4.jpg", "Moni Vora"),
    ],
  },
  {
    id: "rakshit-sojitra",
    author: "Rakshit Sojitra",
    stars: 5,
    when: "3 weeks ago",
    quote: "this is very good place for dhosa\nvery dicicious test",
    photos: [photo("rakshit-1.jpg", "Rakshit Sojitra")],
  },
  {
    id: "deepen-shah",
    author: "Deepen Shah",
    stars: 5,
    when: "a month ago",
    quote: "Good Quality of food and best service by staff.",
    photos: [photo("deepen-1.jpg", "Deepen Shah")],
  },
  {
    id: "bhadu-gajera",
    author: "Bhadu Gajera",
    stars: 5,
    when: "a month ago",
    quote:
      "I was craving a delicious dosa and Govinda dosa totally hit the spot with their fresh and tasty dishes, the ambiance was cozy and service was quick and friendly",
    photos: [
      photo("bhadu-1.jpg", "Bhadu Gajera"),
      photo("bhadu-2.jpg", "Bhadu Gajera"),
    ],
  },
  {
    id: "umang-gajera",
    author: "12-Umang Gajera",
    stars: 5,
    when: "a month ago",
    quote:
      "I had the best dosa at Govinda dosa, so tasty and fresh, the flavors were amazing, minor wait but worth it, great ambiance and service",
    photos: [photo("umang-1.jpg", "12-Umang Gajera")],
  },
  {
    id: "arth-pansuriya",
    author: "ARTH PANSURIYA",
    stars: 5,
    when: "a month ago",
    quote:
      "I'm a big fan of South Indian food and Govinda dosa totally hit the spot with their delicious dosas, fresh and tasty, love the ambiance and quick service, makes me feel so warm and cozy",
    photos: [
      photo("arth-1.jpg", "ARTH PANSURIYA"),
      photo("arth-2.jpg", "ARTH PANSURIYA"),
    ],
  },
  {
    id: "ayush-shersiya",
    author: "Ayush Shersiya",
    stars: 5,
    when: "a month ago",
    quote: "Nice",
    photos: [photo("ayush-1.jpg", "Ayush Shersiya")],
  },
  {
    id: "bhuva-heet",
    author: "ẞhuva heet",
    stars: 5,
    when: "a month ago",
    quote:
      "I was seated quickly at Govinda dosa and ordered the masala dosa which was tasty and fresh. The ambiance was cozy and service was prompt. Food was delicious and well presented",
    photos: [photo("bhuva-1.jpg", "ẞhuva heet")],
  },
  {
    id: "avinash-shingala",
    author: "AVINASH SHINGALA",
    stars: 5,
    when: "a month ago",
    quote:
      "I am going to make Govinda dosa, I am going to use fresh ingredients, the dosa is crispy and tasty, I am going to make it delicious.",
    photos: [photo("avinash-1.jpg", "AVINASH SHINGALA")],
  },
  {
    id: "ajit-thakor",
    author: "Ajit Thakor",
    stars: 5,
    when: "a month ago",
    quote:
      "I liked Kolhapuri so much that I didn't even ask for the best dosa in entire Ahmedabad.",
    photos: [photo("ajit-1.jpg", "Ajit Thakor")],
  },
  {
    id: "padariya-shubham",
    author: "Padariya Shubham",
    stars: 5,
    when: "a month ago",
    quote: "Food news Saras che",
    photos: [photo("shubham-1.jpg", "Padariya Shubham")],
  },
  {
    id: "krish-korat",
    author: "Krish Korat",
    stars: 5,
    when: "3 weeks ago",
    photos: [photo("krish-1.jpg", "Krish Korat")],
  },
  {
    id: "manish-goswami",
    author: "Manish Goswami",
    stars: 5,
    when: "a month ago",
    photos: [photo("manish-1.jpg", "Manish Goswami")],
  },
];
