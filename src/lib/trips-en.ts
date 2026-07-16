import type { Trip } from "@/lib/trips";

type TripEnOverride = Partial<
  Pick<
    Trip,
    | "title"
    | "destination"
    | "dates"
    | "duration"
    | "priceInstallments"
    | "tagline"
    | "description"
    | "urgentBadge"
    | "whatsappMessage"
    | "paymentMethods"
    | "included"
    | "notIncluded"
    | "itinerary"
    | "accommodation"
    | "forWhom"
    | "faqs"
    | "priceDisplay"
  >
>;

export const tripsEn: Record<string, TripEnOverride> = {
  "lencois-maranhenses": {
    destination: "Lençóis Maranhenses, Brazil",
    dates: "september 4–7, 2026",
    duration: "4 days",
    priceDisplay: "R$ 2,500",
    priceInstallments:
      "R$ 1,250 deposit to book — the rest in up to 4 interest-free installments or up to 6 with interest",
    tagline:
      "a 3-day trek across the dunes of the national park, sleeping in hammocks at native families' homes",
    description:
      "4 days in the Lençóis Maranhenses with Trilha Ecoaventura. arrival in Barreirinhas on the 4th to rest, since pickup for the trek is at 4am on the 5th. it's 3 days of trekking through the Lençóis Maranhenses National Park, sleeping in hammocks at native families' homes in the Oásis Baixa Grande and Oásis Queimada dos Britos, river crossings, lagoon swims and the vastness of the dunes at sunrise. bonus: the trip runs friday through monday, right into Brazil's september 7th independence day holiday — a long weekend without spending a single vacation day. peak weekendmaxxing.",
    urgentBadge: "5 spots left",
    whatsappMessage:
      "Hi Julia! I want to know more about the Lençóis Maranhenses trip (september 4–7, 2026) :)",
    paymentMethods: [
      "cash",
      "pix",
      "bank transfer",
      "credit card, in full or up to 3 installments",
    ],
    included: [
      "transfer São Luís ↔ Barreirinhas",
      "speedboat tour with a visit to the APA Pequenos Lençóis Maranhenses, stopping in Vassouras and Mandacaru",
      "lunch at Caburé beach",
      "private 4x4 transport from Atins port to the mouth of the Rio Negro",
      "dinner and hammock lodging at Oásis Baixa Grande (breakfast included)",
      "lunch, dinner and hammock lodging at Oásis Queimada dos Britos (breakfast included)",
      "private transport on the Betânia/Santo Amaro stretch",
      "transfer Santo Amaro ↔ São Luís",
      "local eco guide, ICMBio certified",
      "individual Porto Seguro travel insurance",
    ],
    notIncluded: [
      "drinks",
      "extra meals at support points (the included meals are simple: rice, beans, pasta and animal protein depending on what the family has that day)",
      "payment for drinks to the families, made in cash",
      "personal luggage porter (1 bag up to 12kg) — R$ 250 per day",
    ],
    itinerary: [
      {
        day: 1,
        title: "day 5 — barreirinhas → oásis baixa grande",
        description:
          "departure from Barreirinhas at 8:30am on a speedboat tour, visiting the APA Pequenos Lençóis Maranhenses and passing through the villages of Vassouras and Mandacaru. lunch stop at Caburé beach. at 1:40pm the boat continues to Atins, arriving at 2pm. from there, 4x4 transport to the mouth of the Rio Negro (about 1h), followed by a 7 to 8km trek (2 to 3h) to Oásis Baixa Grande, where we sleep in hammocks at a native family's home.",
      },
      {
        day: 2,
        title: "day 6 — oásis baixa grande → oásis queimada dos britos (10km)",
        description:
          "trek starting at 5:30am (breakfast at 5am), about 10km over 3 to 4 hours, watching the sunrise and crossing the Rio Negro. passing through Ponta do Peadouro, an area of tall dunes. expected arrival at the village at 10:30am, staying at a native family's home. from 11am to 3:30pm, lunch and rest; at 4pm, a lagoon swim and sunset; at 7pm, dinner and a free evening.",
      },
      {
        day: 3,
        title: "day 7 — oásis queimada dos britos → lagoa do junco (14km)",
        description:
          "departure at 3am (breakfast at 2:30am), with a 6 to 9 hour trek combining walking and swims, passing Lagoa das Cabras and Lagoa do Junco. expected arrival at 10am, continuing at 10:30am by 4x4 to Santo Amaro. at 1pm, return to Barreirinhas or São Luís.",
      },
    ],
    accommodation: `hammock lodging at native families' homes, in the Oásis Baixa Grande and Oásis Queimada dos Britos — no luxury, but a lot of hospitality. breakfast included on both nights.

Oásis Baixa Grande is home to 6 families, with plenty of cashew fruit between august and october and the region's traditional tiquira (cassava spirit). Oásis Queimada dos Britos is larger, with about 20 families and a small local school.

the oases have electricity from solar panels. it's recommended to pay the families before sleeping and keep your things organized, which helps with a quick departure before dawn — bring cash in small bills.`,
    forWhom: [
      {
        title: "those who want to truly disconnect",
        description:
          "3 days of trekking across the national park's dunes, sleeping in hammocks at native families' homes, with no rush and no luxury.",
      },
      {
        title: "those who love a real trek",
        description:
          "8km, 10km and 14km stretches between dunes, rivers and lagoons, with pre-dawn departures to catch the sunrise.",
      },
      {
        title: "those who want to meet local communities",
        description:
          "lodging and meals at families' homes in the Oásis Baixa Grande and Oásis Queimada dos Britos, with local guides certified by ICMBio.",
      },
    ],
    faqs: [
      {
        question: "what should i bring?",
        answer: `a headlamp, UV-protective clothing, a cap, sunglasses, sunscreen, a rain cover, a 30, 40 or 60L backpack, a trekking pole, a 1.5L water bottle or hydration pack, swimwear, cereal bars/nuts/fruit for trail snacks, a camera, sandals or flip-flops, socks, a beach towel, personal hygiene products and personal medication.

avoid heavy items: books, planners, heavy electronics and excess clothing. the ideal is to carry around 4kg in your backpack — less is more.`,
      },
      {
        question: "how does payment work?",
        answer:
          "the booking is confirmed with a R$ 1,250 deposit, via pix or bank transfer. the rest can be split into up to 4 interest-free installments or up to 6 installments with interest on your card. we also accept cash.",
      },
      {
        question: "what's the cancellation policy?",
        answer:
          "full refund for cancellations up to 15 days before the tour starts. after that, the amount paid is converted into credit valid for 12 months from the cancellation date. if a participant drops out during the tour, there is no refund of any amount paid.",
      },
      {
        question: "is there a vegetarian or vegan option?",
        answer:
          "yes, but it needs to be informed at the time of booking so the family responsible for the meal can prepare accordingly.",
      },
      {
        question: "why does it depart before dawn?",
        answer:
          "the trek always runs from Barreirinhas towards Santo Amaro, which avoids walking straight into the sun and wind, and makes climbing the dunes easier. that's why arriving in Barreirinhas on the 4th is recommended, a day before the 4am pickup on the 5th.",
      },
      {
        question: "will Julia be there on this trip?",
        answer:
          "for this edition i won't be there in person, but you'll be in great hands: Giovana Gentil, my business partner, accompanies the group on every expedition, start to finish. i've done this trip myself and hand-picked this agency, so you can trust every detail has been thought through. and of course, i'll always be available for any questions that come up, before or during the trip. want to get to know Gi? just check out her Instagram: @giovanagentil.travel 💛",
      },
    ],
  },
  "surfcamp-saquarema": {
    destination: "Saquarema, Rio de Janeiro, Brazil",
    dates: "january 7–10, 2027",
    duration: "4 days · 3 nights",
    priceDisplay: "R$ 2,990",
    priceInstallments:
      "R$ 890 deposit via Pix to book — installments due 09/30, 10/31 and 11/30",
    urgentBadge: "15 spots",
    tagline:
      "4 days of surf, outrigger canoe, yoga and sun in saquarema, women only",
    description:
      "four days in the brazilian capital of surf, in a closed group of up to 15 girls. you show up, we handle the rest: surf lessons, outrigger canoe, beach yoga, buggy tours, themed nights and plenty of time to relax and make new friends. just get to the meeting point in rio — we take care of everything else. perfect whether you're catching your first wave or already surf at any level: we'll have guides to support you and video analysis so you can see your progress.",
    whatsappMessage:
      "Hi Julia! I want to know more about the Saquarema Surfcamp (january 7–10, 2027) :)",
    paymentMethods: ["Pix"],
    included: [
      "3 nights of lodging (shared room)",
      "Rio ↔ Saquarema transfer (round trip)",
      "surf lessons",
      "outrigger canoe",
      "yoga session",
      "stand-up paddle (sunset/sunrise)",
      "buggy tours",
      "drone videos",
      "premium lunch",
      "Burger Night (dinner)",
      "Sushi Night (dinner)",
      "welcome reception",
    ],
    notIncluded: [
      "transport to the meeting point in Rio",
      "meals other than those listed (coffees, drinks, other lunches)",
      "optional extra lessons on sunday",
      "personal expenses and tips",
      "travel insurance",
    ],
    itinerary: [
      {
        day: 1,
        title: "thursday, 1/7 — arrival, heading to saquarema",
        description:
          "departure from Rio around noon, in an exclusive group transfer. late afternoon arrival and welcome reception from the crew. check-in at the lodging and Burger Night — our opening dinner.",
      },
      {
        day: 2,
        title: "friday, 1/8 — water & adventure: outrigger canoe + surf + buggy",
        description:
          "morning outrigger canoe session at sea, followed by a surf lesson with instructors. buggy tour along the coast and lagoon in the afternoon, with drone videos to take home as keepsakes.",
      },
      {
        day: 3,
        title: "saturday, 1/9 — balance: surf + yoga + sushi",
        description:
          "another surf session in the morning, followed by a yoga session to stretch and relax. buggy tour in the afternoon and Sushi Night — the group's special dinner.",
      },
      {
        day: 4,
        title: "sunday, 1/10 — free time & return: sunset stand-up paddle",
        description:
          "free morning or day to explore the town at your own pace. sunset stand-up paddle (or sunrise), with optional extra lessons for anyone who wants more time in the water. transfer back to Rio after sunset (~4pm).",
      },
    ],
    accommodation:
      "3 nights in a shared room, in partnership with Green House Saqua — a local guesthouse and surf school that handles the full trip structure in Saquarema.",
    forWhom: [
      {
        title: "women of every level",
        description:
          "from those who've never caught a wave to those who already surf and want to improve — we'll have guides supporting you closely and video analysis so you can correct the details and see your progress.",
      },
    ],
    faqs: [
      {
        question: "do i need to know how to surf to join?",
        answer:
          "no! the camp is for women of every level, beginner or not — we'll have guides supporting you closely and video analysis so you can correct the details and see your progress.",
      },
      {
        question: "who organizes the activities in saquarema?",
        answer:
          "this trip is in partnership with Green House Saqua, a local guesthouse and surf school that handles the full structure in Saquarema.",
      },
      {
        question: "what if the ocean is too big or too small, will i still be able to surf?",
        answer:
          "always! we pick the ideal tide at the Canal — the lagoon channel with direct access to the ocean. no matter how big or small the swell is, there's always a wave there, and it's where everyone learns to surf: catching your first wave and getting the photo to prove it.",
      },
      {
        question: "where exactly will we surf?",
        answer:
          "at Barrinha — a gentle, waist-high wave that's great for practicing. the spot is full of sea turtles and has a church in the background, one of the most beautiful and classic scenes in Saquarema.",
      },
      {
        question: "how does payment work?",
        answer:
          "payment is via Pix, in 4 installments:\n\non booking (deposit) — R$ 890 (secures your spot)\nby 09/30 — R$ 700\nby 10/31 — R$ 700\nby 11/30 — R$ 700 (final balance, 1 month before the trip, which starts on 1/7)\n\ntotal: R$ 2,990 per person.",
      },
    ],
  },
  "surfcamp-ubatuba": {
    destination: "Ubatuba, São Paulo, Brazil",
    dates: "january 14–18, 2027",
    duration: "5 days · 4 nights",
    priceDisplay: "R$ 3,500",
    tagline: "4 days of surf, nature and good vibes among women",
    description:
      "a retreat for you to slow down, connect with the ocean and live real surf days — from sunrise to sunset — on one of the most beautiful beaches on São Paulo's north coast. if you've always wanted to learn to surf (or take what you already know further) in a welcoming, women-only environment, with full structure and nothing to worry about, this camp is for you.",
    urgentBadge: "15 spots",
    whatsappMessage:
      "Hi Julia! I want to know more about the Ubatuba Surfcamp (january 14–18, 2027) :)",
    included: [
      "full lodging in an exclusive group house, with individual beds and a hand-picked location",
      "all meals prepared by a chef — just sit down and enjoy",
      "surf lessons with an instructor for every 2 students (close guidance)",
      "video analysis so you can see your progress and correct the details",
      "sunrise yoga to prepare your body before hitting the water",
      "post-surf recovery and muscle recovery session",
      "boards and equipment included",
      "professional surf photos and videos for you to take home",
      "full transport: executive van São Paulo ↔ Ubatuba and local transfers between beaches",
      "easy hike and experiences around town",
    ],
    itinerary: [
      {
        day: 1,
        title: "thursday — arrival",
        description:
          "arrival in Ubatuba, check-in at the house and first dinner together in town, at a cozy bar to kick off the camp.",
      },
      {
        day: 2,
        title: "friday — warming up",
        description:
          "an easy hike through nature (nothing tiring for the surf days ahead), a beach afternoon and a relaxed evening: dinner at home and a stroll around downtown to get to know the town.",
      },
      {
        day: 3,
        title: "saturday — full day of surf",
        description:
          "6am: sunrise yoga to prepare your body. back home, breakfast and getting ready. 8am: surf lesson. afterward: video analysis and a recovery / muscle recovery session.",
      },
      {
        day: 4,
        title: "sunday — more surf",
        description:
          "another day of surf to lock in everything you learned and enjoy the ocean.",
      },
      {
        day: 5,
        title: "monday — farewell",
        description:
          "breakfast, packing and heading home with a full heart (and maybe a few surfer bruises).",
      },
    ],
    forWhom: [
      {
        title: "women of every level",
        description:
          "from those who've never caught a wave to those who already surf and want to improve. the environment is 100% women, welcoming and pressure-free: everyone progresses at her own pace.",
      },
    ],
  },
  jalapao: {
    destination: "Jalapão, Tocantins, Brazil",
    dates: "october 9–12, 2026",
    duration: "4 days",
    priceInstallments:
      "per person — lodging, full meals, transfers and entrance fees included",
    tagline:
      "natural springs, golden dunes, canyons and brazil's wildest cerrado",
    description:
      "a 4-day expedition through the Jalapão region of Tocantins with Gio — crystal-clear natural springs that bubble up from the ground, golden dunes of capim dourado, breathtaking canyons and waterfalls hidden in the heart of the cerrado. everything included: lodging, 3 full meals a day, transfers, 4x4 transport, licensed environmental guide and entrance to every attraction. arrive in palmas on the 8th, the expedition starts early on the 9th. spots are sold out!",
    urgentBadge: "sold out",
    whatsappMessage:
      "Hi Julia! I want to know more about the Jalapão expedition (october 9–12, 2026) :)",
    paymentMethods: [
      "pix upfront",
      "bank transfer",
      "boleto",
      "credit card in up to 10 installments",
    ],
    included: [
      "transfer Palmas ↔ Jalapão (round trip)",
      "4x4 vehicle transport throughout the expedition",
      "environmental guide licensed by the local authority",
      "lodging in Jalapão guesthouses",
      "full meals — breakfast, lunch and dinner every day",
      "mineral water on board throughout the trip",
      "entrance fees for every attraction on the itinerary",
      "accident insurance",
    ],
    notIncluded: [
      "airfare",
      "environmental fee — R$ 30 per person (paid at the park entrance)",
      "hotel in Palmas on the night of october 8",
      "transfer airport ↔ hotel in Palmas",
      "drinks with meals",
      "optional activities",
      "personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "expedition day 1 — lagoa do japonês + pedra furada",
        description:
          "departure from Palmas at 8am. first stop: Lagoa do Japonês, one of Jalapão's postcard sights. lunch en route. in the afternoon, Pedra Furada — a one-of-a-kind rock formation in the middle of the cerrado. dinner at 7pm and check-in at the guesthouse.",
      },
      {
        day: 2,
        title: "day 2 — sussuapara canyon + jalapão dunes",
        description:
          "breakfast at 7am. Sussuapara canyon — breathtaking rock walls. lunch at the Rio Novo quilombola community. afternoon at Prainha do Rio Novo. photo stop at Morro do Saca Trapo. Lagoa do Jacaré and the Serra do Espírito Santo cliff wall. Jalapão Dunes at sunset. dinner at 7:30pm and check-in at the guesthouse.",
      },
      {
        day: 3,
        title: "day 3 — natural springs + formiga waterfall",
        description:
          "breakfast at 7am. Buritis spring. Formiga Waterfall — emerald waters and surreal transparency. lunch. visit to Jane's capim dourado handicraft cabin. Beija Flor spring. Por Enquanto spring. dinner at 7pm and check-in at the guesthouse.",
      },
      {
        day: 4,
        title: "day 4 — bela vista spring + return to palmas",
        description:
          "breakfast at 7am. Bela Vista spring. photo stop at Serra da Catedral. Poço Encantado waterfall. lunch. departure for Palmas — expected arrival at 6pm. return flights from 6pm on the 12th.",
      },
    ],
    accommodation: `lodging in comfortable guesthouses in the Jalapão interior, selected by Tour Jalapão. all meals are included: breakfast, lunch and dinner, with regional food — simple, generous and made with lots of love.

- heads up: internet signal at the guesthouses is weak. wi-fi is available only in the morning, before departure, and at the end of the day upon return. it's the disconnection Jalapão asks for — and that we embrace!
- special diets (vegan, vegetarian, etc.): possible with advance notice — the menu needs to stay within what the region can offer.`,
    forWhom: [
      {
        title: "those who want adventure in the heart of brazil",
        description:
          "Jalapão is one of Brazil's most incredible and least known destinations — ideal for those who want to skip the obvious and discover otherworldly landscapes.",
      },
      {
        title: "those who love untouched nature",
        description:
          "natural springs, dunes, canyons and preserved cerrado — all far from crowds and truly connected with nature.",
      },
      {
        title: "those who want everything taken care of",
        description:
          "with lodging, full meals, transport, guide and entrance fees included, all you have to do is arrive in Palmas on the 8th and set off on the adventure.",
      },
    ],
    faqs: [
      {
        question: "when do i need to arrive in palmas?",
        answer:
          "we recommend arriving in Palmas on the night of october 8 (evening flight) or very early on the 9th, before 7am. the expedition leaves Palmas at 8am on the 9th — Tour Jalapão picks everyone up at their hotels between 6:30am and 7:20am.",
      },
      {
        question: "when can i book return flights?",
        answer:
          "the expedition returns to Palmas with expected arrival at 6pm on october 12. we recommend return flights from 8pm onwards for a comfortable margin.",
      },
      {
        question: "is the hotel in palmas included?",
        answer:
          "no, the hotel on the night of the 8th in Palmas is not included. but Gio can suggest affordable, central options — just reach out on WhatsApp!",
      },
      {
        question: "what is a fervedouro?",
        answer:
          "fervedouros are natural springs where water rises from the ground with so much pressure it creates a 'boiling' effect — even though the water is cold! the transparency and turquoise color are out of this world. one of Brazil's most unique experiences.",
      },
      {
        question: "can i wear sunscreen in the springs?",
        answer:
          "no! it's forbidden to enter the attractions with repellent, sunscreen, tanning oil or similar products on your body. this is mandatory to preserve the springs. bring UV-protection clothing if you prefer.",
      },
      {
        question: "what's the luggage allowance?",
        answer:
          "luggage allowed on board the 4x4 vehicle is at most 20 liters (equivalent to a small 10 kg backpack). respecting this is important to guarantee space for everyone.",
      },
      {
        question: "is there internet and cell signal in jalapão?",
        answer:
          "internet and cell signal at the guesthouses is weak. wi-fi is available only in the morning and at the end of the day. it's the total disconnection Jalapão offers — and that we wholeheartedly embrace!",
      },
      {
        question: "are there optional activities?",
        answer: `yes! there are several paid options:
- rappelling at Roncadeira Waterfall (70m) — R$ 120/person
- zipline in Taquaruçu (1,000m descent) — R$ 120/person
- zipline at Lagoa do Japonês — R$ 40/person
- trekking at Serra do Jacurutu (sunrise) — R$ 160/person
- rafting on the Sono River (~2h descent) — R$ 200/person

we recommend bringing cash, as some places don't take cards.`,
      },
      {
        question: "is the trip women-only?",
        answer:
          "yes, all Giovana Gentil experiences are exclusively for women.",
      },
      {
        question: "is the environmental fee included?",
        answer:
          "no, the Jalapão State Park environmental fee is R$ 30 per person and is paid directly at the park entrance. don't forget to bring cash!",
      },
      {
        question: "will Julia be there on this trip?",
        answer:
          "for this edition i won't be there in person, but you'll be in great hands: Giovana Gentil, my business partner, accompanies the group on every expedition, start to finish. i've done this trip myself and hand-picked this agency, so you can trust every detail has been thought through. and of course, i'll always be available for any questions that come up, before or during the trip. want to get to know Gi? just check out her Instagram: @giovanagentil.travel 💛",
      },
    ],
  },
  laponia: {
    title: "Lapland",
    destination: "Lapland, Finland",
    dates: "december 13–19, 2026",
    duration: "7 days",
    priceInstallments: "€ 100 deposit · remainder due by 11/13/2026",
    tagline:
      "northern lights, santa claus village and the arctic ocean in 7 days",
    description:
      "7 days, 12 girls, northern Finland in december. a trip created in partnership with Giovana Gentil and the TimeTravels agency: northern lights hunting, husky sledding, a visit to Santa Claus Village, a crossing into Norway and a sauna after a dip in the Arctic Ocean. 2026 is the best year of all to see the aurora — and we'll be there.",
    urgentBadge: "5 spots left",
    whatsappMessage:
      "Hi Julia! I want to know more about the Lapland Girls Trip (december 13–19, 2026) :)",
    included: [
      "4 nights in shared chalets with kitchen, bathroom and sauna (4–8 people per chalet)",
      "bed linens and towels",
      "ground transport (bus Helsinki → Saariselkä → Helsinki, with stops at well-equipped stations)",
      "visit to Santa Claus Village in Rovaniemi",
      "specialized tour guide",
      "husky farm visit + sled ride",
      "ice skating on Lapland's only natural frozen lake",
      "northern lights hunt",
      "guided snowshoe hike",
      "bonfire night",
      "trip to the Arctic Ocean (Bugøynes, Norway) with lunch and sauna",
    ],
    notIncluded: [
      "flights (round trip to Helsinki — suggestions: Finnair, Ryanair, TAP)",
      "transfers airport ↔ bus station",
      "final chalet cleaning (€ 250 per chalet — split among the group)",
      "meals (estimated € 100 total — we cook together in the chalets, ~€ 15/day)",
      "tips",
      "optional activities: ice fishing + bonfire (€ 39), skiing (€ 44), reindeer farm (€ 49), cross-country skiing (€ 39)",
    ],
    itinerary: [
      {
        day: 1,
        title: "arrival in helsinki + night bus departure",
        description:
          "arrival in Helsinki throughout the day. at night, at 9pm, we board the overnight bus to Lapland. the bus stops every 4–5 hours at well-equipped stations with bathrooms, convenience stores and cafés.",
      },
      {
        day: 2,
        title: "santa claus village + arrival in saariselkä",
        description:
          "at 11am, we arrive in Rovaniemi to visit Santa Claus Village — Santa's official address on the Arctic Circle. at 2:30pm, we continue the remaining 260km. at 5pm, we arrive in Saariselkä and check into the chalets. here we'll be in a prime spot to see the northern lights!",
      },
      {
        day: 3,
        title: "snowshoe hike",
        description:
          "a full day of snowshoe hiking through untouched Arctic nature. specialized guides ensure safety on any terrain. with a bit of luck, it's possible to see the northern lights along the way. don't forget to bring proper snow clothing!",
      },
      {
        day: 4,
        title: "arctic ocean + bugøynes, norway + sauna",
        description:
          "from dawn to dusk, we explore the best of Lapland heading toward the fjords to the charming village of Bugøynes, in northern Norway — a place at the end of the world. dip in the Arctic Ocean (optional), walk along sandy beaches and breathtaking landscapes. at night, a warm sauna to recover and dinner with traditional soup at a local restaurant.",
      },
      {
        day: 5,
        title: "huskies + frozen lake skating + skiing",
        description:
          "morning at the husky farm: introduction to farm life and a sled ride — the huskies are strong, excited and love to pull! then, skating on Lapland's only natural ice rink. for those who want, beginner skiing with guide and equipment rental included (€ 44, optional).",
      },
      {
        day: 6,
        title: "chalet check-out + ice fishing or free day",
        description:
          "at 10am, chalet check-out. the afternoon is free: ice fishing + bonfire (€ 39, optional) — learn to start a fire without matches and try ice fishing, Arctic survival skills. or: shopping, restaurants, sledding or alpine skiing at your own pace. at night, bus back to Helsinki.",
      },
      {
        day: 7,
        title: "arrival in helsinki + flight home",
        description:
          "at 8:30am, we arrive in Helsinki. free time for coffee, last-minute shopping or the airport lounge before the flight home. the end of one of the most unforgettable trips of a lifetime.",
      },
    ],
    accommodation: `saariselkä — shared chalets: 4 nights in chalets for 4–8 people, located near markets, restaurants and all the itinerary's activities.

each chalet has:
• living room with TV
• equipped kitchen
• bathroom
• sauna
• bed linens and towels included

meals: the chalets have equipped kitchens, so we'll split groceries and cook as a group — a great way to bond! estimated € 15/day per person (€ 100 total).

transit: 2 nights on the overnight bus (Helsinki → Saariselkä going, Saariselkä → Helsinki returning) — with stops at equipped stations every 4–5 hours.

on this trip we're part of a larger group of 45–55 people from the partner agency.`,
    forWhom: [
      {
        title: "those who dream of seeing the northern lights",
        description:
          "2026 is the peak of the 11-year solar cycle — Olivia, the local agency's specialist, confirmed: with 5 nights in the right window, our chances reach 99%. Lapland in december is the moment.",
      },
      {
        title: "those who want the most magical christmas of their life",
        description:
          "real snow, snowy forest, husky sledding, sauna in the Arctic cold and the real Santa Claus Village in Rovaniemi. december in Lapland is exactly what you imagine — and more.",
      },
      {
        title: "those who want to completely break the routine",
        description:
          "days with 4 hours of light, below-zero temperatures, absolute silence, Arctic forest and the frozen Arctic Ocean. an experience that changes what you understand as extreme.",
      },
    ],
    faqs: [
      {
        question: "will i get to see the northern lights?",
        answer: `2026 is the peak of the 11-year solar cycle — the best moment in over a decade to see the aurora. Olivia, the local partner agency's specialist, confirmed: with 5 nights in the right window, our chances reach 99%.

the northern lights are a natural phenomenon and can't be 100% guaranteed — we depend on weather conditions. but december in Saariselkä is the right place and the right time.`,
      },
      {
        question: "how does payment work?",
        answer: `the total is € 1,500 per person, paid upfront in euros.

• € 100 deposit to secure your spot
• the remainder (€ 1,400) can be paid until 11/13/2026

you can use a credit card through the partner agency's direct link (automatic conversion by your bank) or Wise/Nomad. there will be a contract regulating the service.`,
      },
      {
        question: "what's the cancellation policy?",
        answer: `cancellation must be requested in writing (WhatsApp or e-mail).

• until october 31, 2026: full refund (€ 40 non-refundable service fee)
• from november 1, 2026: no refund

you can name someone else to take your spot at no additional cost.`,
      },
      {
        question: "are meals included?",
        answer: `no, meals are not included on this trip. but the chalets have equipped kitchens — the idea is to split groceries and cook together, which is an experience in itself!

estimate: € 15/day per person, i.e. around € 100 for the 7 days.`,
      },
      {
        question: "what's the accommodation like?",
        answer: `we stay in shared chalets for 4–8 people in Saariselkä, near markets, restaurants and activities. each chalet has a living room with TV, kitchen, bathroom and sauna. bed linens and towels are included.

note: there's a final cleaning fee of € 250 per chalet, split among the group.`,
      },
      {
        question: "how does transport work?",
        answer: `ground transport between Helsinki and Saariselkä is by overnight bus — 2 nights on the bus (round trip). the bus stops every 4–5 hours at well-equipped stations with bathrooms, shops and cafés.

transfers between the airport and the bus station are not included — you cover that stretch on your own.`,
      },
      {
        question: "do i need a visa for Finland and Norway?",
        answer:
          "no! brazilian citizens don't need a visa for tourist stays of up to 90 days in the Schengen area, which includes Finland and Norway — just a passport valid for at least 3 months after your return date. keep an eye on ETIAS, the new electronic travel authorization for the Schengen area, which is expected to become mandatory soon — we recommend checking closer to your travel date.",
      },
      {
        question: "what clothes should i bring?",
        answer:
          "Lapland in december can reach -20°C. essentials: thermal base layer (merino wool or synthetic), warm mid layers, waterproof jacket, snow pants, double gloves, insulated waterproof boots, beanie and balaclava. Gio sends a complete packing guide after registration.",
      },
      {
        question: "does Ju join this trip?",
        answer:
          "yes! this trip is organized in partnership with Giovana Gentil and both will be present at every moment of the trip — except free time, of course :)",
      },
    ],
  },
  amazonia: {
    title: "Amazon",
    destination: "Amazon, Brazil",
    dates: "march 19–23, 2027",
    duration: "5 days · 4 nights",
    priceDisplay: "R$ 4,500",
    urgentBadge: "sold out",
    tagline:
      "the meeting of the waters, pink river dolphins and a whole night sleeping in the jungle",
    description:
      "5 days and 4 nights at the Amazônia Jungle Hotel, on the banks of the Rio Negro. the uirapuru package: caiman spotting, jungle trekking, swimming with pink river dolphins, visits to indigenous and riverside communities, and one night camping in the forest with hanging hammocks and a bonfire. the lungs of the world, live.",
    whatsappMessage:
      "Hi Julia! I want to know more about the Amazon trip (march 19–23, 2027) :)",
    included: [
      "round-trip transfer (we pick you up wherever you like in Manaus and drop you back at the end of the package)",
      "full board: breakfast, lunch and dinner every day",
      "overnight stays in suites with air conditioning, electric shower and minibar (except the jungle camping night)",
      "jungle outings: nighttime caiman spotting, swimming with pink river dolphins, piranha and pirarucu fishing",
      "visit to an indigenous community, a riverside caboclo home and the floating community of Catalão",
      "1 night camping in the jungle with hanging hammocks, bonfire and fresh fish dinner grilled over the fire",
      "planting of an amazonian tree seedling",
      "full Amazônia Jungle Hotel infrastructure (pool, restaurant, common areas)",
    ],
    notIncluded: [
      "airfare to Manaus",
      "alcoholic drinks and personal items",
      "tips and optional activities not listed in the itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "arrival + caiman spotting",
        description:
          'departure from Manaus (we pick you up at the airport or any hotel within the city limits) toward the Amazônia Jungle Hotel — about 45 minutes by car over the Rio Negro bridge plus a 5-minute crossing in a motorized canoe with life jackets. check-in with a regional welcome juice and a tour of the hotel and its fruit trees. lunch with regional and international cuisine. in the afternoon, a fauna and flora orientation outing: igarapés, igapós and a visit to the exuberant Sumaúma, called "the mother" of trees by indigenous peoples, plus the ruins of the old Ariaú Towers, once the largest jungle hotel in the world (Guinness Book). before dinner, nighttime caiman spotting on the Ariaú river — the guide shines a flashlight along the banks and the caimans\' eyes glow red, revealing their location. dinner with regional and international cuisine.',
      },
      {
        day: 2,
        title: "jungle trek + piranha fishing",
        description:
          "breakfast with typical regional fruits. jungle trek along rarely explored trails — the guide teaches forest survival basics and points out edible and medicinal plants (pants, long sleeves and closed shoes recommended; the hotel sells repellent if you need it). lunch with regional and international cuisine. in the afternoon, recreational fishing for piranha and other amazonian fish — if you want, the chef prepares your catch for dinner. dinner with regional and international cuisine.",
      },
      {
        day: 3,
        title: "pink river dolphins + indigenous community",
        description:
          "breakfast with typical fruits. outing to a floating platform to interact with pink river dolphins — always accompanied by an instructor, with the chance to swim in the world's largest river in total safety, photos guaranteed. next, a visit to the Kubeua indigenous tribe, a welcoming community where you observe ways of life, culture, rituals and traditions. lunch with regional and international cuisine. in the afternoon, a visit to a riverside caboclo home, where they share how they live in harmony with nature — including açaí harvesting and cassava flour production. dinner with regional and international cuisine.",
      },
      {
        day: 4,
        title: "sunrise + overnight jungle camp",
        description:
          "the day starts early (5am) with a sunrise watching outing, with chances to see birds, dolphins and wild animals. breakfast and lunch with regional and international cuisine. in the afternoon, departure for the package's most immersive experience: an overnight camp in the amazon forest, guided only by flashlight, with hands-on survival basics. the guides set up a camp with hanging hammocks (protected from nocturnal animals) and build a bonfire to grill the fish for dinner with typical sides. the night flows with stories and legends of amazonian folklore told by the guides.",
      },
      {
        day: 5,
        title: "tree planting + meeting of the waters + return to manaus",
        description:
          "the forest wakes with birdsong. camp breakdown and return to the hotel for breakfast with typical fruits. next, you plant an amazonian tree seedling, symbolizing the commitment to preserving the forest. lunch with regional and international cuisine. in the afternoon, return to Manaus to visit the Meeting of the Waters — the point where the Rio Negro and the Rio Solimões run side by side without mixing for up to 8 km — with recreational pirarucu fishing (a freshwater fish that reaches 150 kg) and a visit to the floating community of Catalão, with churches, markets and a school on the water. at 5pm, return and transfer to the airport or your hotel in Manaus.",
      },
    ],
    accommodation: `Amazônia Jungle Hotel — on the banks of the Rio Negro, about 45 minutes from Manaus by car plus a canoe crossing.

suites with air conditioning, electric shower and minibar. the hotel has a pool, a restaurant with regional and international cuisine, and full jungle infrastructure.

on the 4th night, lodging is replaced by the overnight jungle camping experience, in hanging hammocks set up by the guides — the package's most immersive experience.

important: outings and the schedule are subject to change according to the river season — high water (february to july) or low water (august to january).`,
    forWhom: [
      {
        title: "those who want to truly live the forest",
        description:
          "nights in the amazon forest, piranha fishing, swimming with pink river dolphins, caiman spotting and the meeting of the waters of the Rio Negro and the Solimões. the Amazon is transformative.",
      },
      {
        title: "those who want to see brazil from a different angle",
        description:
          "the most biodiverse forest on the planet is right here in Brazil — and most brazilian women have never been. this trip changes your relationship with your own country.",
      },
      {
        title: "those who want to truly disconnect",
        description:
          "a whole night camping in the jungle, guided only by flashlight and the local guides' experience. no signal, no rush, no routine — just the forest, the river and the crew.",
      },
    ],
    faqs: [
      {
        question: "how do we get to the hotel?",
        answer:
          "we leave from Manaus (we pick you up at the international airport or any hotel within the city limits). the drive takes about 45 minutes, over the Rio Negro bridge, plus a 5-minute crossing in a motorized canoe with life jackets to the Amazônia Jungle Hotel.",
      },
      {
        question: "are meals included?",
        answer:
          "yes! the package includes full board — breakfast, lunch and dinner with regional and international cuisine every day, including during the jungle camping night.",
      },
      {
        question: "how does the night sleeping in the jungle work?",
        answer:
          "on the 4th day, we head out for a fully immersive experience in the amazon forest, guided only by flashlight. the guides set up a camp with hanging hammocks (to avoid nocturnal animals) and build a bonfire to grill dinner. it's a guided, safe and unforgettable survival experience.",
      },
      {
        question: "will i get to swim with the pink river dolphins?",
        answer:
          "yes! on the 3rd day we visit a floating platform where an instructor feeds the dolphins and encourages them to come close, letting you swim with them in the river in total safety with great photos.",
      },
      {
        question: "can the itinerary change?",
        answer:
          "outings and the schedule can change according to the river season: high water (february to july) or low water (august to january). this may slightly alter the spots visited, but the package's overall structure stays the same.",
      },
      {
        question: "what can't i forget to bring?",
        answer:
          'light clothes and long sleeves, pants (for the jungle trek), closed shoes, sunscreen, repellent (also sold at the hotel) and a camera — because "from the forest, we take nothing but photographs and memories; in the forest, we leave nothing but footprints."',
      },
      {
        question: "is the trip women-only?",
        answer: "yes, as always — experiences exclusively for women.",
      },
      {
        question: "will Julia be there on this trip?",
        answer:
          "for this edition i won't be there in person, but you'll be in great hands: Giovana Gentil, my business partner, accompanies the group on every expedition, start to finish. i've done this trip myself and hand-picked this agency, so you can trust every detail has been thought through. and of course, i'll always be available for any questions that come up, before or during the trip. want to get to know Gi? just check out her Instagram: @giovanagentil.travel 💛",
      },
    ],
  },
  "amazonia-2": {
    title: "Amazon",
    destination: "Amazon, Brazil",
    dates: "march 24–28, 2027",
    duration: "5 days · 4 nights",
    priceDisplay: "R$ 4,500",
    urgentBadge: "3 spots left",
    tagline:
      "the meeting of the waters, pink river dolphins and a whole night sleeping in the jungle",
    description:
      "5 days and 4 nights at the Amazônia Jungle Hotel, on the banks of the Rio Negro. the uirapuru package: caiman spotting, jungle trekking, swimming with pink river dolphins, visits to indigenous and riverside communities, and one night camping in the forest with hanging hammocks and a bonfire. the lungs of the world, live.",
    whatsappMessage:
      "Hi Julia! I want to know more about the Amazon trip (march 24–28, 2027) :)",
    included: [
      "round-trip transfer (we pick you up wherever you like in Manaus and drop you back at the end of the package)",
      "full board: breakfast, lunch and dinner every day",
      "overnight stays in suites with air conditioning, electric shower and minibar (except the jungle camping night)",
      "jungle outings: nighttime caiman spotting, swimming with pink river dolphins, piranha and pirarucu fishing",
      "visit to an indigenous community, a riverside caboclo home and the floating community of Catalão",
      "1 night camping in the jungle with hanging hammocks, bonfire and fresh fish dinner grilled over the fire",
      "planting of an amazonian tree seedling",
      "full Amazônia Jungle Hotel infrastructure (pool, restaurant, common areas)",
    ],
    notIncluded: [
      "airfare to Manaus",
      "alcoholic drinks and personal items",
      "tips and optional activities not listed in the itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "arrival + caiman spotting",
        description:
          'departure from Manaus (we pick you up at the airport or any hotel within the city limits) toward the Amazônia Jungle Hotel — about 45 minutes by car over the Rio Negro bridge plus a 5-minute crossing in a motorized canoe with life jackets. check-in with a regional welcome juice and a tour of the hotel and its fruit trees. lunch with regional and international cuisine. in the afternoon, a fauna and flora orientation outing: igarapés, igapós and a visit to the exuberant Sumaúma, called "the mother" of trees by indigenous peoples, plus the ruins of the old Ariaú Towers, once the largest jungle hotel in the world (Guinness Book). before dinner, nighttime caiman spotting on the Ariaú river — the guide shines a flashlight along the banks and the caimans\' eyes glow red, revealing their location. dinner with regional and international cuisine.',
      },
      {
        day: 2,
        title: "jungle trek + piranha fishing",
        description:
          "breakfast with typical regional fruits. jungle trek along rarely explored trails — the guide teaches forest survival basics and points out edible and medicinal plants (pants, long sleeves and closed shoes recommended; the hotel sells repellent if you need it). lunch with regional and international cuisine. in the afternoon, recreational fishing for piranha and other amazonian fish — if you want, the chef prepares your catch for dinner. dinner with regional and international cuisine.",
      },
      {
        day: 3,
        title: "pink river dolphins + indigenous community",
        description:
          "breakfast with typical fruits. outing to a floating platform to interact with pink river dolphins — always accompanied by an instructor, with the chance to swim in the world's largest river in total safety, photos guaranteed. next, a visit to the Kubeua indigenous tribe, a welcoming community where you observe ways of life, culture, rituals and traditions. lunch with regional and international cuisine. in the afternoon, a visit to a riverside caboclo home, where they share how they live in harmony with nature — including açaí harvesting and cassava flour production. dinner with regional and international cuisine.",
      },
      {
        day: 4,
        title: "sunrise + overnight jungle camp",
        description:
          "the day starts early (5am) with a sunrise watching outing, with chances to see birds, dolphins and wild animals. breakfast and lunch with regional and international cuisine. in the afternoon, departure for the package's most immersive experience: an overnight camp in the amazon forest, guided only by flashlight, with hands-on survival basics. the guides set up a camp with hanging hammocks (protected from nocturnal animals) and build a bonfire to grill the fish for dinner with typical sides. the night flows with stories and legends of amazonian folklore told by the guides.",
      },
      {
        day: 5,
        title: "tree planting + meeting of the waters + return to manaus",
        description:
          "the forest wakes with birdsong. camp breakdown and return to the hotel for breakfast with typical fruits. next, you plant an amazonian tree seedling, symbolizing the commitment to preserving the forest. lunch with regional and international cuisine. in the afternoon, return to Manaus to visit the Meeting of the Waters — the point where the Rio Negro and the Rio Solimões run side by side without mixing for up to 8 km — with recreational pirarucu fishing (a freshwater fish that reaches 150 kg) and a visit to the floating community of Catalão, with churches, markets and a school on the water. at 5pm, return and transfer to the airport or your hotel in Manaus.",
      },
    ],
    accommodation: `Amazônia Jungle Hotel — on the banks of the Rio Negro, about 45 minutes from Manaus by car plus a canoe crossing.

suites with air conditioning, electric shower and minibar. the hotel has a pool, a restaurant with regional and international cuisine, and full jungle infrastructure.

on the 4th night, lodging is replaced by the overnight jungle camping experience, in hanging hammocks set up by the guides — the package's most immersive experience.

important: outings and the schedule are subject to change according to the river season — high water (february to july) or low water (august to january).`,
    forWhom: [
      {
        title: "those who want to truly live the forest",
        description:
          "nights in the amazon forest, piranha fishing, swimming with pink river dolphins, caiman spotting and the meeting of the waters of the Rio Negro and the Solimões. the Amazon is transformative.",
      },
      {
        title: "those who want to see brazil from a different angle",
        description:
          "the most biodiverse forest on the planet is right here in Brazil — and most brazilian women have never been. this trip changes your relationship with your own country.",
      },
      {
        title: "those who want to truly disconnect",
        description:
          "a whole night camping in the jungle, guided only by flashlight and the local guides' experience. no signal, no rush, no routine — just the forest, the river and the crew.",
      },
    ],
    faqs: [
      {
        question: "how do we get to the hotel?",
        answer:
          "we leave from Manaus (we pick you up at the international airport or any hotel within the city limits). the drive takes about 45 minutes, over the Rio Negro bridge, plus a 5-minute crossing in a motorized canoe with life jackets to the Amazônia Jungle Hotel.",
      },
      {
        question: "are meals included?",
        answer:
          "yes! the package includes full board — breakfast, lunch and dinner with regional and international cuisine every day, including during the jungle camping night.",
      },
      {
        question: "how does the night sleeping in the jungle work?",
        answer:
          "on the 4th day, we head out for a fully immersive experience in the amazon forest, guided only by flashlight. the guides set up a camp with hanging hammocks (to avoid nocturnal animals) and build a bonfire to grill dinner. it's a guided, safe and unforgettable survival experience.",
      },
      {
        question: "will i get to swim with the pink river dolphins?",
        answer:
          "yes! on the 3rd day we visit a floating platform where an instructor feeds the dolphins and encourages them to come close, letting you swim with them in the river in total safety with great photos.",
      },
      {
        question: "can the itinerary change?",
        answer:
          "outings and the schedule can change according to the river season: high water (february to july) or low water (august to january). this may slightly alter the spots visited, but the package's overall structure stays the same.",
      },
      {
        question: "what can't i forget to bring?",
        answer:
          'light clothes and long sleeves, pants (for the jungle trek), closed shoes, sunscreen, repellent (also sold at the hotel) and a camera — because "from the forest, we take nothing but photographs and memories; in the forest, we leave nothing but footprints."',
      },
      {
        question: "is the trip women-only?",
        answer: "yes, as always — experiences exclusively for women.",
      },
      {
        question: "will Julia be there on this trip?",
        answer:
          "for this edition i won't be there in person, but you'll be in great hands: Giovana Gentil, my business partner, accompanies the group on every expedition, start to finish. i've done this trip myself and hand-picked this agency, so you can trust every detail has been thought through. and of course, i'll always be available for any questions that come up, before or during the trip. want to get to know Gi? just check out her Instagram: @giovanagentil.travel 💛",
      },
    ],
  },
  nicaragua: {
    title: "Nicaragua Retreat — Villa Laguna",
    destination: "Laguna de Apoyo, Nicaragua",
    dates: "october 22–27, 2026",
    duration: "6 days · 5 nights",
    priceDisplay: "US$ 1,500",
    priceInstallments:
      "payment via Wise in 3 installments: US$ 100 by 07/28 · US$ 650 by 08/15 · US$ 750 by 09/30",
    urgentBadge: "7 spots left",
    tagline:
      "an intimate retreat by a volcanic lagoon, an exclusive villa for the group and everything included",
    description:
      "an intimate retreat by a warm-water volcanic lagoon, inside the Laguna de Apoyo nature reserve, between Granada and Masaya. a villa just for our group, 100% vegan kitchen, yoga overlooking the water and days exploring Nicaragua. all you have to do is show up — we handle everything: transfers, meals, activities and logistics.",
    whatsappMessage:
      "Hi Julia! I want to know more about the Nicaragua trip (october 22–27, 2026) :)",
    paymentMethods: ["Wise"],
    included: [
      "5 nights of lodging in a shared room, with private bathroom and daily cleaning",
      "3 homemade vegan meals a day, with a natural drink (dinner on arrival day and breakfast on departure day included)",
      "airport ↔ villa transfers (Managua, MGA), individual and available 24h",
      "welcome gift: hand-painted tote bag, local organic coffee and a handmade card",
      "water, organic farm coffee and teas at will",
      "exclusive use of the property for our group",
      "every activity on the itinerary: a day in Granada + the Isletas, a day in San Juan del Sur + catamaran, an evening visit to Masaya Volcano, an intro freediving course, 1 yoga class and 1 60-minute massage",
      "local coordination and team taking care of everything day to day",
    ],
    notIncluded: [
      "flights to Managua (MGA)",
      "travel insurance (strongly recommended)",
      "meals out on tour days: lunch in Granada (~US$ 15) and lunch in San Juan del Sur (~US$ 15) — dinner (pizza) in San Juan is already included",
      "extra alcoholic drinks (the catamaran's open bar is already included)",
      "tips (voluntary) and personal shopping / souvenirs",
    ],
    itinerary: [
      {
        day: 1,
        title: "thu, oct 22 — arrival",
        description:
          "transfers starting at 2pm (about 1h from the airport). welcome gathering, dinner and a first night to relax.",
      },
      {
        day: 2,
        title: "fri, oct 23 — yoga, massage and volcano",
        description:
          "sunrise yoga (7–8:15am) and breakfast. free afternoon. around 4pm we head out for the evening visit to Masaya Volcano — a chance to peer inside an active volcano, with a stop at the Masaya craft market. return around 7:30pm and a late dinner.",
      },
      {
        day: 3,
        title: "sat, oct 24 — Granada + the Isletas",
        description:
          "breakfast and departure around 9:30am. a day in the colonial city of Granada, with lunch there (on your own) and a boat tour through the Isletas in the afternoon. back at the villa between 4 and 5pm for dinner.",
      },
      {
        day: 4,
        title: "sun, oct 25 — freediving and rest",
        description:
          "after breakfast, an introductory freediving course right in the lagoon (theory + open-water practice). lunch at the house and return around 1–2pm. a restful afternoon, a 60-minute full-body massage and dinner at the villa.",
      },
      {
        day: 5,
        title: "mon, oct 26 — beach day in San Juan del Sur",
        description:
          "early breakfast and a full day at the beach: the Christ viewpoint, free time in town, lunch there (on your own) and, in the afternoon, a catamaran ride (open bar and snacks included) into the sunset, with a beachside happy hour. dinner in San Juan (pizza dinner included).",
      },
      {
        day: 6,
        title: "tue, oct 27 — farewell",
        description:
          "breakfast and departure at 11am, with transfers back to the airport.",
      },
    ],
    accommodation: `Villa Laguna, on the shores of Laguna de Apoyo — a 20,000-year-old volcanic crater between Granada and Masaya, with warm, mineral-rich waters.

accommodation across 7 rooms (2 lake-view suites with balcony, 2 double rooms with a patio facing the lagoon, and 3 double rooms with garden views), all with private bathroom, daily cleaning and towels changed every 3 days.

common spaces: an open living room and kitchen with large tables and hammock chairs; a lakefront yoga shala equipped with mats, blocks and cushions; and an open-air rancho used for meals, workshops and activities, with a stunning view of the lagoon.

exclusive use of the property throughout your stay — no sharing space with other guests.`,
    forWhom: [
      {
        title: "those who want to truly disconnect",
        description:
          "a private retreat with exclusive use of the property, inside a volcanic crater surrounded by tropical forest — no signal, no rush, just the lagoon and the crew.",
      },
      {
        title: "those who want adventure and scenery",
        description:
          "an active volcano at night, a catamaran with open bar in San Juan del Sur, a boat tour through the Isletas in Granada and an intro to freediving — all included in the package.",
      },
      {
        title: "those looking for an intimate experience",
        description:
          "a closed, limited-spots group, exclusive use of the villa, and personalized local coordination from start to finish.",
      },
    ],
    faqs: [
      {
        question: "how does payment work?",
        answer:
          "payment via Wise, in 3 installments:\n\n1st installment (to secure your spot) — US$ 100 by 07/28\n2nd installment — US$ 650 by 08/15\n3rd installment (final balance) — US$ 750 by 09/30\n\nyour spot is only guaranteed after the 1st installment is paid. the initial installment is part of the reservation deposit and is non-refundable. each participant covers their own Wise fee, so the full amount comes through. spots are limited — the group is small and fills up fast.",
      },
      {
        question: "what should i know before traveling?",
        answer:
          "a valid passport is required — check its validity in advance. the kitchen is 100% vegan, with gluten-free options and other dietary restrictions accommodated with advance notice. the climate is warm and tropical: bring light clothes, swimwear, sunscreen, repellent, a hat and yoga wear. we recommend getting travel insurance for the whole stay. any questions, just reach out to Julia.",
      },
      {
        question: "is the trip women-only?",
        answer: "yes, as always — experiences exclusively for women.",
      },
    ],
  },
};

export function localizeTrip(trip: Trip, lang: "pt" | "en"): Trip {
  if (lang === "pt") return trip;
  const override = tripsEn[trip.slug];
  if (!override) return trip;
  return { ...trip, ...override };
}
