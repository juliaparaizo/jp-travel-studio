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
    | "travelRequirements"
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
    urgentBadge: "sold out",
    whatsappMessage:
      "Hi Julia! I just read the material about the Lençóis Maranhenses trip (september 4–7, 2026) and I want to secure my spot :)",
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
  "lencois-maranhenses-2": {
    destination: "Lençóis Maranhenses, Brazil",
    dates: "june 4–7, 2027",
    duration: "4 days",
    priceDisplay: "R$ 2,700",
    priceInstallments:
      "1st batch (first 3 spots): R$ 2,700 · 2nd batch (remaining spots): R$ 3,000 — R$ 300 deposit to book (non-refundable), the rest in up to 4 interest-free installments or up to 6 with interest",
    tagline:
      "a 3-day trek across the dunes of the national park, sleeping in hammocks at native families' homes",
    description:
      "4 days in the Lençóis Maranhenses with Giovana Gentil. arrival in São Luís/Barreirinhas on the 4th to rest, since pickup for the trek is before dawn on the 5th. it's 3 days of trekking through the Lençóis Maranhenses National Park (between 30 and 40km total), sleeping in hammocks at native families' homes in the Oásis Baixa Grande and Oásis Queimada dos Britos, a Rio Negro crossing, lagoon swims and the vastness of the dunes at sunrise. a group of up to 12 girls, in one of the most unique and exotic landscapes in the world — no hotel, no luxury: home-cooked food, lagoon baths and the silence only the desert has.",
    whatsappMessage:
      "Hi Julia! I just read the material about the Lençóis Maranhenses trip (june 4–7, 2027) and I want to secure my spot :)",
    paymentMethods: ["pix", "boleto", "credit card"],
    included: [
      "transfer São Luís ↔ Barreirinhas",
      "all transport for the crossing (4x4, boat or speedboat, depending on the route)",
      "breakfast, lunch and dinner on trekking days",
      "hammock lodging at native families' homes (2 nights)",
      "local eco guide, ICMBio certified",
      "individual travel insurance",
      "transfer back Santo Amaro ↔ São Luís",
    ],
    notIncluded: [
      "airfare",
      "hotel in Barreirinhas",
      "airport ↔ hotel transfers and vice versa",
      "drinks (paid directly to the families, in cash — about R$ 30 per day)",
      "anything not listed in \"what's included\"",
    ],
    itinerary: [
      {
        day: 1,
        title: "day 5 — barreirinhas → oásis baixa grande",
        description:
          "departure from São Luís to Barreirinhas at 4am, by van. at 8:30am, departure by boat from Barreirinhas, visiting the APA Pequenos Lençóis Maranhenses and passing through the villages of Vassouras and Mandacaru, with lunch at Caburé beach. in the afternoon, we continue by boat to Atins and from there, by 4x4, to the mouth of the Rio Negro, where the roughly 8km trek to Oásis Baixa Grande begins — home to 6 families living amid the restinga, in the middle of the desert. overnight in a hammock at a native family's home, with a home-cooked dinner. lunch and dinner included.",
      },
      {
        day: 2,
        title: "day 6 — oásis baixa grande → oásis queimada dos britos (10km)",
        description:
          "departure at 5:30am to catch the sunrise and cross the Rio Negro. it's a 10km trek to Oásis Queimada dos Britos, passing through Ponta do Peadouro, a region of tall dunes with an incredible view over the desert. arrival around 10:30/11am, with lunch and a free afternoon to rest. at 4pm we head out to watch the sunset, then on to the overnight hammock stay in a village of about 20 families, with dinner. breakfast, lunch and dinner included.",
      },
      {
        day: 3,
        title: "day 7 — oásis queimada dos britos → lagoa do junco (14km)",
        description:
          "departure before dawn, around 3am, for the final 14km trek to Lagoa do Junco, with swims along the way in other lagoons in the region. expected arrival at 10am, followed by 4x4 to Santo Amaro and from there the transfer back to Barreirinhas or São Luís. breakfast included.",
      },
    ],
    accommodation: `lodging in hammock shelters built by the local residents, in the Oásis Baixa Grande and Oásis Queimada dos Britos — we all sleep side by side in hammocks, with bedsheets provided by the families. the shelters usually have outlets to charge your phone and wi-fi (with restricted hours to save generator power) — a portable charger can help. bathrooms are communal, so there's always a line for showers, which should be quick.

Oásis Baixa Grande is home to 6 families; Oásis Queimada dos Britos is larger, with about 20 families. lodging and meals at the shelters are already included in the package — bring small cash bills for drinks, paid directly to the families (about R$ 30 per day).`,
    forWhom: [
      {
        title: "those who want to truly disconnect",
        description:
          "3 days of trekking across the national park's dunes, sleeping in hammocks at native families' homes, with no rush and no luxury.",
      },
      {
        title: "those who love a real trek",
        description:
          "stretches of up to 8km, 10km and 14km between dunes, rivers and lagoons — between 30 and 40km total over 3 days. it's a genuinely physical itinerary, so make sure you're up for the adventure.",
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
          "the package has 2 price batches: 1st batch (first 3 spots) — R$ 2,700; 2nd batch (remaining spots) — R$ 3,000. to confirm your spot, the deposit is R$ 300 (non-refundable). the rest can be split into up to 4 interest-free installments or up to 6 with interest, via pix, boleto or credit card.",
      },
      {
        question: "what's the cancellation policy?",
        answer:
          "cancellations must be requested at least 15 days before the contracted services begin; after that, a fee of 50% of the amount paid applies. refunds are issued minus bank transfer fees. no-shows are charged 100% of the contracted services.",
      },
      {
        question: "is there a vegetarian or vegan option?",
        answer:
          "yes, but it needs to be informed at the time of booking so the family responsible for the meal can prepare accordingly.",
      },
      {
        question: "why does it depart before dawn?",
        answer:
          "the trek always runs from Barreirinhas towards Santo Amaro, which avoids walking straight into the sun and wind, and makes climbing the dunes easier. that's why arriving in São Luís/Barreirinhas on the 4th is recommended — look for flights landing by early afternoon, to have some slack for the trip to Barreirinhas. on the 5th, pickup is before dawn, at the airport or your hotel. on the way back, we recommend flights from 6pm on the 7th, to allow a margin for any last-minute issues.",
      },
      {
        question: "will Julia be there on this trip?",
        answer:
          "for this edition i won't be there in person, but you'll be in great hands: Giovana Gentil, my business partner, accompanies the group on every expedition, start to finish. Gio is 24, from São Paulo, and spent 5 months backpacking solo around the world — today she organizes group trips for women, with the purpose of helping those who want to travel but don't know how. i've done this trip myself and hand-picked this agency, so you can trust every detail has been thought through. and of course, i'll always be available for any questions that come up, before or during the trip. want to get to know Gi? just check out her Instagram: @giovanagentil.travel 💛",
      },
    ],
  },
  "surfcamp-saquarema": {
    destination: "Saquarema, Rio de Janeiro, Brazil",
    dates: "january 7–10, 2027",
    duration: "4 days · 3 nights",
    priceDisplay: "R$ 2,500",
    priceInstallments:
      "R$ 200 deposit via Pix to book — R$ 1,150 due by 10/31 and the remaining R$ 1,150 due by 12/15",
    urgentBadge: "5 spots",
    tagline:
      "4 days of surf, outrigger canoe, yoga and sun in saquarema, women only",
    description:
      "four days in the brazilian capital of surf, in a closed group of 6 — 5 open spots + me as host. you show up, we handle the rest: surf lessons, outrigger canoe, beach yoga, buggy tours, themed nights and plenty of time to relax and make new friends. just get to the meeting point in rio — we take care of everything else. perfect whether you're catching your first wave or already surf at any level: we'll have guides to support you, and i'll be capturing it all in photo and video for you to take home.",
    whatsappMessage:
      "Hi Julia! I just read the material about the Saquarema Surfcamp (january 7–10, 2027) and I want to secure my spot :)",
    paymentMethods: ["Pix"],
    included: [
      "3 nights of lodging (women-only shared room)",
      "breakfast included every day",
      "Rio ↔ Saquarema transfer (round trip)",
      "surf lessons",
      "outrigger canoe",
      "yoga session",
      "buggy tours",
      "premium lunch",
      "Sushi Night (saturday dinner)",
      "welcome reception",
    ],
    notIncluded: [
      "transport to the meeting point in Rio",
      "thursday dinner",
      "friday dinner",
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
          "departure from Rio around noon, in an exclusive group transfer. late afternoon arrival and welcome reception from the crew. check-in at the lodging and free dinner — we pick a spot in Saquarema to go together and get to know each other.",
      },
      {
        day: 2,
        title: "friday, 1/8 — water & adventure: outrigger canoe + surf + buggy",
        description:
          "breakfast included. morning outrigger canoe session at sea, followed by a surf lesson with instructors. buggy tour along the coast and lagoon in the afternoon. dinner on your own — a great chance to check out Saquarema's restaurants.",
      },
      {
        day: 3,
        title: "saturday, 1/9 — balance: surf + yoga + sushi",
        description:
          "breakfast included. another surf session in the morning, followed by a yoga session to stretch and relax. buggy tour in the afternoon and Sushi Night — the group's special dinner.",
      },
      {
        day: 4,
        title: "sunday, 1/10 — free time & return",
        description:
          "breakfast included. free morning or day to explore the town at your own pace, with optional extra surf lessons for anyone who wants more time in the water. transfer back to Rio after sunset (~4pm).",
      },
    ],
    accommodation:
      "3 nights in a women-only shared room, in partnership with Green House Saqua — a local guesthouse and surf school that handles the full trip structure in Saquarema.",
    forWhom: [
      {
        title: "women of every level",
        description:
          "from those who've never caught a wave to those who already surf and want to improve — we'll have guides supporting you closely, and i'll be capturing it all in photo and video for you to take home.",
      },
    ],
    faqs: [
      {
        question: "do i need to know how to surf to join?",
        answer:
          "no! the camp is for women of every level, beginner or not — we'll have guides supporting you closely, and i'll be capturing it all in photo and video for you to take home.",
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
          "payment method: Pix, credit card not accepted.\n\nprice per person: R$ 2,500, split into 3 steps:\n\n1) deposit — R$ 200 → to secure your spot (only 5 spots, confirmed in order of payment)\n2) down payment — R$ 1,150 → due by 10/31\n\nthese two are fixed.\n\n3) remaining balance — R$ 1,150 → just needs to be settled by 12/15\n\nthis last part is up to you: pay it all at once, or break it into smaller chunks through november/december if you prefer. what matters is being fully paid by 12/15.\n\nPix key: (79) 98858-8863. send me the receipt here and i'll mark you down.\n\nthe deposit and down payment are non-refundable.",
      },
    ],
  },
  "surfcamp-ubatuba": {
    destination: "Ubatuba, São Paulo, Brazil",
    dates: "january 14–18, 2027",
    duration: "5 days · 4 nights",
    priceDisplay: "R$ 3,000",
    tagline: "4 days of surf, nature and good vibes among women",
    description:
      "a retreat for you to slow down, connect with the ocean and live real surf days — from sunrise to sunset — on one of the most beautiful beaches on São Paulo's north coast. if you've always wanted to learn to surf (or take what you already know further) in a welcoming, women-only environment, with full structure and nothing to worry about, this camp is for you.",
    urgentBadge: "15 spots",
    whatsappMessage:
      "Hi Julia! I just read the material about the Ubatuba Surfcamp (january 14–18, 2027) and I want to secure my spot :)",
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
      "Hi Julia! I just read the material about the Jalapão expedition (october 9–12, 2026) and I want to secure my spot :)",
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
          "yes, all Julia Paraizo experiences are exclusively for women.",
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
  "jalapao-2": {
    destination: "Jalapão, Tocantins, Brazil",
    dates: "october 14–17, 2026",
    duration: "4 days",
    priceInstallments:
      "per person — lodging, full meals, transfers and entrance fees included",
    tagline:
      "natural springs, golden dunes, canyons and brazil's wildest cerrado",
    description:
      "a 4-day expedition through the Jalapão region of Tocantins with Gio — crystal-clear natural springs that bubble up from the ground, golden dunes of capim dourado, breathtaking canyons and waterfalls hidden in the heart of the cerrado. everything included: lodging, 3 full meals a day, transfers, 4x4 transport, licensed environmental guide and entrance to every attraction. arrive in palmas on the 13th, the expedition starts early on the 14th.",
    whatsappMessage:
      "Hi Julia! I just read the material about the Jalapão expedition (october 14–17, 2026) and I want to secure my spot :)",
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
      "hotel in Palmas on the night of october 13",
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
          "breakfast at 7am. Bela Vista spring. photo stop at Serra da Catedral. Poço Encantado waterfall. lunch. departure for Palmas — expected arrival at 6pm. return flights from 6pm on the 17th.",
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
          "with lodging, full meals, transport, guide and entrance fees included, all you have to do is arrive in Palmas on the 13th and set off on the adventure.",
      },
    ],
    faqs: [
      {
        question: "when do i need to arrive in palmas?",
        answer:
          "we recommend arriving in Palmas on the night of october 13 (evening flight) or very early on the 14th, before 7am. the expedition leaves Palmas at 8am on the 14th — Tour Jalapão picks everyone up at their hotels between 6:30am and 7:20am.",
      },
      {
        question: "when can i book return flights?",
        answer:
          "the expedition returns to Palmas with expected arrival at 6pm on october 17. we recommend return flights from 8pm onwards for a comfortable margin.",
      },
      {
        question: "is the hotel in palmas included?",
        answer:
          "no, the hotel on the night of the 13th in Palmas is not included. but Gio can suggest affordable, central options — just reach out on WhatsApp!",
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
          "yes, all Julia Paraizo experiences are exclusively for women.",
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
    urgentBadge: "sold out",
    whatsappMessage:
      "Hi Julia! I just read the material about the Lapland Girls Trip (december 13–19, 2026) and I want to secure my spot :)",
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
      "Hi Julia! I just read the material about the Amazon trip (march 19–23, 2027) and I want to secure my spot :)",
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
          'light clothes and long sleeves, pants (for the jungle trek), closed shoes, sunscreen, repellent (also sold at the hotel) and a camera.',
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
    urgentBadge: "sold out",
    tagline:
      "the meeting of the waters, pink river dolphins and a whole night sleeping in the jungle",
    description:
      "5 days and 4 nights at the Amazônia Jungle Hotel, on the banks of the Rio Negro. the uirapuru package: caiman spotting, jungle trekking, swimming with pink river dolphins, visits to indigenous and riverside communities, and one night camping in the forest with hanging hammocks and a bonfire. the lungs of the world, live.",
    whatsappMessage:
      "Hi Julia! I just read the material about the Amazon trip (march 24–28, 2027) and I want to secure my spot :)",
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
          'light clothes and long sleeves, pants (for the jungle trek), closed shoes, sunscreen, repellent (also sold at the hotel) and a camera.',
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
  "amazonia-4": {
    title: "Amazon",
    destination: "Amazon, Brazil",
    dates: "may 27–31, 2027",
    duration: "5 days · 4 nights",
    priceDisplay: "R$ 4,500",
    tagline:
      "the meeting of the waters, pink river dolphins and a whole night sleeping in the jungle",
    description:
      "5 days and 4 nights at the Amazônia Jungle Hotel, on the banks of the Rio Negro. the uirapuru package: caiman spotting, jungle trekking, swimming with pink river dolphins, visits to indigenous and riverside communities, and one night camping in the forest with hanging hammocks and a bonfire. the lungs of the world, live.",
    whatsappMessage:
      "Hi Julia! I just read the material about the Amazon trip (may 27–31, 2027) and I want to secure my spot :)",
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
          'light clothes and long sleeves, pants (for the jungle trek), closed shoes, sunscreen, repellent (also sold at the hotel) and a camera.',
      },
      {
        question: "is the trip women-only?",
        answer: "yes, as always — experiences exclusively for women.",
      },
      {
        question: "will Julia be there on this trip?",
        answer:
          "for this edition i won't be there in person, but you'll be in great hands: Mariana Scherer, my business partner, will accompany the group start to finish. i've done this trip myself and hand-picked this agency, so you can trust every detail has been thought through. and of course, i'll always be available for any questions that come up, before or during the trip. want to get to know Mari? just check out her Instagram: @_whereis_mari 💛",
      },
    ],
  },
  "amazonia-3": {
    title: "Amazon",
    destination: "Amazon, Brazil",
    dates: "march 29 – april 2, 2027",
    duration: "5 days · 4 nights",
    priceDisplay: "R$ 5,000",
    tagline:
      "the meeting of the waters, pink river dolphins and a whole night sleeping in the jungle",
    description:
      "5 days and 4 nights at the Amazônia Jungle Hotel, on the banks of the Rio Negro. the uirapuru package: caiman spotting, jungle trekking, swimming with pink river dolphins, visits to indigenous and riverside communities, and one night camping in the forest with hanging hammocks and a bonfire. the lungs of the world, live.",
    whatsappMessage:
      "Hi Julia! I just read the material about the Amazon trip (march 29 – april 2, 2027) and I want to secure my spot :)",
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
          'light clothes and long sleeves, pants (for the jungle trek), closed shoes, sunscreen, repellent (also sold at the hotel) and a camera.',
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
    dates: "march 8–13, 2027",
    duration: "6 days · 5 nights",
    priceDisplay: "US$ 1,500",
    priceInstallments:
      "payment via Wise in 3 installments: US$ 100 by 12/12 · US$ 650 by 12/30 · US$ 750 by 01/30",
    urgentBadge: "7 spots left",
    tagline:
      "an intimate retreat by a volcanic lagoon, an exclusive villa for the group and everything included",
    description:
      "an intimate retreat by a warm-water volcanic lagoon, inside the Laguna de Apoyo nature reserve, between Granada and Masaya. a villa just for our group, 100% vegan kitchen, yoga overlooking the water and days exploring Nicaragua. all you have to do is show up — we handle everything: transfers, meals, activities and logistics.",
    whatsappMessage:
      "Hi Julia! I just read the material about the Nicaragua trip (march 8–13, 2027) and I want to secure my spot :)",
    paymentMethods: ["Wise"],
    included: [
      "5 nights of lodging in a shared room, with private bathroom and daily cleaning",
      "3 homemade vegan meals a day, with a natural drink (dinner on arrival day and breakfast on departure day included)",
      "airport ↔ villa transfers (Managua, MGA), individual and available 24h",
      "welcome gift from local artisans",
      "water, organic farm coffee and teas at will",
      "exclusive use of the property for our group",
      "every activity on the itinerary: a day in Granada + the Isletas, a day in San Juan del Sur + catamaran, an evening visit to Masaya Volcano, an intro freediving course, 1 yoga class and 60-minute massages (on days 2 and 4)",
      "local coordination and team taking care of everything day to day",
    ],
    notIncluded: [
      "flights to Managua (MGA)",
      "travel insurance (strongly recommended)",
      "meals out on tour days: lunch in Granada (~US$ 15) and lunch in San Juan del Sur (~US$ 15) — dinner (pizza) in San Juan is already included",
      "extra alcoholic drinks (bar and snacks on the catamaran already included)",
      "tips (voluntary) and personal shopping / souvenirs",
    ],
    itinerary: [
      {
        day: 1,
        title: "mon, mar 8 — arrival",
        description:
          "transfers available any time on arrival day (about 1h from the airport). check-in starting at 2pm. welcome gathering, dinner and a first night to relax.",
      },
      {
        day: 2,
        title: "tue, mar 9 — yoga, massage and volcano",
        description:
          "sunrise yoga (7–8:15am), breakfast and lunch included. 60-minute massage during the afternoon, with free time for the rest. around 4pm we head out for the evening visit to Masaya Volcano — a chance to peer inside an active volcano, with a stop at the Masaya craft market. return around 7:30pm and a late dinner.",
      },
      {
        day: 3,
        title: "wed, mar 10 — Granada + the Isletas",
        description:
          "breakfast and departure around 9:30am. a day in the colonial city of Granada, with lunch there (on your own) and a boat tour through the Isletas in the afternoon. back at the villa between 4 and 5pm for dinner.",
      },
      {
        day: 4,
        title: "thu, mar 11 — freediving and rest",
        description:
          "after breakfast, an introductory freediving course right in the lagoon (theory + open-water practice). return to the villa around 2pm for lunch at home (not at the freediving school). a restful afternoon, a 60-minute full-body massage and dinner at the villa.",
      },
      {
        day: 5,
        title: "fri, mar 12 — beach day in San Juan del Sur",
        description:
          "early breakfast and a full day at the beach: the Christ viewpoint, free time in town, lunch there (on your own) and, in the afternoon, a catamaran ride (bar and snacks included) into the sunset. dinner in San Juan (pizza dinner included).",
      },
      {
        day: 6,
        title: "sat, mar 13 — farewell",
        description:
          "breakfast and departure at 11am, with transfers back to the airport.",
      },
    ],
    accommodation: `Villa Laguna, on the shores of Laguna de Apoyo — a 20,000-year-old volcanic crater between Granada and Masaya, with warm, mineral-rich waters.

accommodation across 7 rooms (2 lake-view suites with balcony, 2 double rooms with a patio facing the lagoon, and 3 double rooms with garden views), all with private bathroom, daily cleaning and towels changed every 3 days.

common spaces: an open living room and kitchen with large tables and hammock chairs; a lakefront yoga shala equipped with mats, blocks and cushions; and an open-air rancho used for meals, workshops and activities, with a stunning view of the lagoon.

exclusive use of the property throughout your stay — no sharing space with other guests.`,
    travelRequirements:
      "Brazilian citizens don't need a tourist visa for stays of up to 90 days in Nicaragua. just bring a passport valid for at least six months, proof of a round-trip flight, and pay an entry fee of approximately US$ 10 (tourist card) on arrival. the International Certificate of Vaccination against Yellow Fever is also mandatory.",
    forWhom: [
      {
        title: "those who want to truly disconnect",
        description:
          "a private retreat with exclusive use of the property, inside a volcanic crater surrounded by tropical forest — no signal, no rush, just the lagoon and the crew.",
      },
      {
        title: "those who want adventure and scenery",
        description:
          "an active volcano at night, a catamaran with bar in San Juan del Sur, a boat tour through the Isletas in Granada and an intro to freediving — all included in the package.",
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
          "payment via Wise, in 3 installments:\n\n1st installment (to secure your spot) — US$ 100 by 12/12\n2nd installment — US$ 650 by 12/30\n3rd installment (final balance) — US$ 750 by 01/30\n\nyour spot is only guaranteed after the 1st installment is paid. the initial installment is part of the reservation deposit and is non-refundable. each participant covers their own Wise fee, so the full amount comes through. spots are limited — the group is small and fills up fast.",
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
  itacare: {
    destination: "Itacaré, Brazil",
    dates: "june 29 – july 3, 2027",
    duration: "5 days",
    priceDisplay: "R$ 2,500",
    priceInstallments:
      "we accept pix, boleto or credit card — card installments up to 6x with interest; pix payments need to be fully settled before the trip starts",
    tagline:
      "trails, wild beaches and waterfalls in Bahia, in a brand-new partnership with Numaré Brand",
    description:
      "5 days, 12 girls, in one of Brazil's biggest postcard destinations. Itacaré isn't just pretty beaches and crystal-clear water: it's Atlantic rainforest, trails, rivers, waterfalls and local communities, with beaches only reachable after a walk through the forest. in a brand-new partnership, our partner this edition is Numaré Brand — every girl gets a special kit from the brand to wear on the trip (and take home afterward). round-trip flight to Ilhéus (IOS).",
    whatsappMessage:
      "Hi Julia! I just read the material about the Itacaré trip (june 29 – july 3, 2027) and I want to secure my spot :)",
    paymentMethods: ["pix", "boleto", "credit card"],
    included: [
      "transfer Ilhéus ↔ Itacaré",
      "full Numaré Brand kit",
      "Mahai brand kit",
      "lodging",
      "breakfast",
      "surf lesson",
      "outing to Praia da Engenhoca",
      "footvolley (altinha) lesson",
    ],
    notIncluded: [
      "airfare",
      "meals (lunches and dinners)",
      "drinks and personal expenses (shopping, souvenirs, snacks — estimated R$ 300 to R$ 500 over the 5 days)",
      "local transport within Itacaré (local drivers and parking)",
      "anything not listed in \"what's included\"",
    ],
    itinerary: [
      {
        day: 1,
        title: "day 1 — arrival in Itacaré (Ilhéus → Itacaré)",
        description:
          "the first day is for arriving, breathing and starting to get into the Itacaré mood. after the flight and the transfer to the lodging, we enjoy the afternoon at Praia da Concha, with calm water — a perfect scene to unwind after traveling. at night, a special dinner in the historic center, to officially kick off this experience together.",
      },
      {
        day: 2,
        title: "day 2 — Itacarezinho (Itacarezinho beach → footvolley → downtown)",
        description:
          "a full day to experience one of Itacaré's most beautiful beaches: Itacarezinho (or Prainha, depending on conditions). the idea is to enjoy the day unhurried, with sea, sand, sun and lots of conversation. to make it even more fun, we'll have a group footvolley (altinha) lesson — because a good trip also needs movement and laughter. late afternoon, we head back to the lodging to rest.",
      },
      {
        day: 3,
        title: "day 3 — surf lesson and Engenhoca",
        description:
          "sunday is for putting your feet in the sand and giving surfing a try! we'll do a short morning trail to Praia da Engenhoca, where we'll have a group surf lesson and enjoy the rest of the day there, taking in the beach, the sea and Itacaré's unhurried vibe. a day to try something new, have fun together and, of course, soak up some sun.",
      },
      {
        day: 4,
        title: "day 4 — Praia da Tiririca",
        description:
          "a full day to experience one of Itacaré's most beautiful beaches: Itacarezinho (or Prainha, depending on conditions). the idea is to enjoy the day unhurried, with sea, sand, sun and lots of conversation. to make it even more fun, we'll have a group footvolley (altinha) lesson — because a good trip also needs movement and laughter. late afternoon, we head back to the lodging to rest.",
      },
      {
        day: 5,
        title: "day 5 — farewell",
        description:
          "before saying goodbye to Itacaré, a free morning to walk around the historic center, check out the little shops, buy some handicrafts and soak up the last moments in town. we wrap up with a farewell breakfast together, before heading to the airport — transfers are organized around each person's flight time, so if anyone has an earlier flight, just let us know.",
      },
    ],
    accommodation: `a triplex house 450m from the historic center and 250m from Praia da Concha — 12 guests, 5 bedrooms, 10 beds and 5 bathrooms.

suite 1: 2 twin beds · suite 2: 2 twin beds · suite 3: 1 twin bed and 1 double bed · suite 4: 1 twin bed and 1 double bed · suite 5: 1 double bed.

room assignments are decided together on arrival, no stress — we make it work!`,
    forWhom: [
      {
        title: "those who want to go beyond the obvious",
        description:
          "Itacaré is much more than a beach: Atlantic rainforest trails, rivers, waterfalls and local communities that don't show up much in the typical itineraries.",
      },
      {
        title: "those who want to connect and move",
        description:
          "a surf lesson, a footvolley lesson, trails to preserved beaches and plenty of time to slow down, eat well and swap stories.",
      },
      {
        title: "those who love fashion and new experiences",
        description:
          "in partnership with Numaré Brand, every girl gets a special kit of pieces to wear on the trip (and take home) and takes part in the brand's photo and video shoots.",
      },
    ],
    faqs: [
      {
        question: "how does the trip work?",
        answer:
          "getting to Ilhéus is on your own. on arrival, you'll already have a car assigned, heading out from Ilhéus to Itacaré — Gio spends the day at the airport welcoming everyone and helping match people with the right transfer. on july 3rd, transfers leave Itacaré back to Ilhéus Airport.",
      },
      {
        question: "do i have to do every activity?",
        answer:
          "no! since the whole program is already included in the package, we encourage you to make the most of it, but you're not required to join anything.",
      },
      {
        question: "how are the beds set up?",
        answer:
          "the house has different bed setups — 10 beds total, across 5 bedrooms. room assignments are decided together on arrival, nice and easy.",
      },
      {
        question: "do you help with booking flights?",
        answer:
          "yes! we have a partner agency that helps you find good-value flights — just reach out to Gio and ask for help.",
      },
      {
        question: "how does Numaré fit into the trip?",
        answer:
          "Numaré is this edition's sponsor. on arrival, each person gets a kit with pieces from the brand to wear during the trip — and of course, take home afterward. throughout the days, we'll shoot photos and videos for Numaré's use; by joining the trip, you grant image usage rights for that content to be published on the brand's social media. if you have any objection to this, it's essential to speak with Gio before the trip.",
      },
      {
        question: "i don't want to join the surf lesson — what now?",
        answer:
          "no problem! just let Gio or Malice know ahead of time — while the group is in the lesson, you're free to enjoy the beach at your own pace.",
      },
      {
        question: "how does payment work?",
        answer:
          "we accept pix, boleto or credit card. on the card, installments go up to 6x with interest; via pix, the full amount needs to be settled before the trip starts.",
      },
      {
        question: "what's the cancellation policy?",
        answer:
          "cancellations must be requested at least 15 days before the contracted services begin; after that, a fee of 50% of the amount paid applies. refunds are issued minus bank transfer fees. no-shows are charged 100% of the contracted services.",
      },
      {
        question: "will Julia be there on this trip?",
        answer:
          "for this edition i won't be there in person, but you'll be in great hands: Giovana Gentil, my business partner, accompanies the group start to finish. Gio is 24, from São Paulo, and spent 5 months backpacking solo around the world — today she organizes group trips for women, with the purpose of helping those who want to travel but don't know how. i've done this trip myself and hand-picked this partnership, so you can trust every detail has been thought through. and of course, i'll always be available for any questions that come up, before or during the trip. want to get to know Gi? just check out her Instagram: @giovanagentil.travel 💛",
      },
    ],
  },
  "itacare-2": {
    destination: "Itacaré, Brazil",
    dates: "october 30 – november 3, 2026",
    duration: "5 days",
    priceDisplay: "R$ 2,500",
    priceInstallments:
      "we accept pix, boleto or credit card — card installments up to 6x with interest; pix payments need to be fully settled before the trip starts",
    tagline:
      "trails, wild beaches and waterfalls in Bahia, in a brand-new partnership with Numaré Brand",
    description:
      "5 days, 12 girls, in one of Brazil's biggest postcard destinations. Itacaré isn't just pretty beaches and crystal-clear water: it's Atlantic rainforest, trails, rivers, waterfalls and local communities, with beaches only reachable after a walk through the forest. in a brand-new partnership, our partner this edition is Numaré Brand — every girl gets a special kit from the brand to wear on the trip (and take home afterward). round-trip flight to Ilhéus (IOS).",
    whatsappMessage:
      "Hi Julia! I just read the material about the Itacaré trip (october 30 – november 3, 2026) and I want to secure my spot :)",
    paymentMethods: ["pix", "boleto", "credit card"],
    included: [
      "transfer Ilhéus ↔ Itacaré",
      "full Numaré Brand kit",
      "Mahai brand kit",
      "lodging",
      "breakfast",
      "surf lesson",
      "outing to Praia da Engenhoca",
      "footvolley (altinha) lesson",
    ],
    notIncluded: [
      "airfare",
      "meals (lunches and dinners)",
      "drinks and personal expenses (shopping, souvenirs, snacks — estimated R$ 300 to R$ 500 over the 5 days)",
      "local transport within Itacaré (local drivers and parking)",
      "anything not listed in \"what's included\"",
    ],
    itinerary: [
      {
        day: 1,
        title: "day 1 — arrival in Itacaré (Ilhéus → Itacaré)",
        description:
          "the first day is for arriving, breathing and starting to get into the Itacaré mood. after the flight and the transfer to the lodging, we enjoy the afternoon at Praia da Concha, with calm water — a perfect scene to unwind after traveling. at night, a special dinner in the historic center, to officially kick off this experience together.",
      },
      {
        day: 2,
        title: "day 2 — Itacarezinho (Itacarezinho beach → footvolley → downtown)",
        description:
          "a full day to experience one of Itacaré's most beautiful beaches: Itacarezinho (or Prainha, depending on conditions). the idea is to enjoy the day unhurried, with sea, sand, sun and lots of conversation. to make it even more fun, we'll have a group footvolley (altinha) lesson — because a good trip also needs movement and laughter. late afternoon, we head back to the lodging to rest.",
      },
      {
        day: 3,
        title: "day 3 — surf lesson and Engenhoca",
        description:
          "sunday is for putting your feet in the sand and giving surfing a try! we'll do a short morning trail to Praia da Engenhoca, where we'll have a group surf lesson and enjoy the rest of the day there, taking in the beach, the sea and Itacaré's unhurried vibe. a day to try something new, have fun together and, of course, soak up some sun.",
      },
      {
        day: 4,
        title: "day 4 — Praia da Tiririca",
        description:
          "a full day to experience one of Itacaré's most beautiful beaches: Itacarezinho (or Prainha, depending on conditions). the idea is to enjoy the day unhurried, with sea, sand, sun and lots of conversation. to make it even more fun, we'll have a group footvolley (altinha) lesson — because a good trip also needs movement and laughter. late afternoon, we head back to the lodging to rest.",
      },
      {
        day: 5,
        title: "day 5 — farewell",
        description:
          "before saying goodbye to Itacaré, a free morning to walk around the historic center, check out the little shops, buy some handicrafts and soak up the last moments in town. we wrap up with a farewell breakfast together, before heading to the airport — transfers are organized around each person's flight time, so if anyone has an earlier flight, just let us know.",
      },
    ],
    accommodation: `a triplex house 450m from the historic center and 250m from Praia da Concha — 12 guests, 5 bedrooms, 10 beds and 5 bathrooms.

suite 1: 2 twin beds · suite 2: 2 twin beds · suite 3: 1 twin bed and 1 double bed · suite 4: 1 twin bed and 1 double bed · suite 5: 1 double bed.

room assignments are decided together on arrival, no stress — we make it work!`,
    forWhom: [
      {
        title: "those who want to go beyond the obvious",
        description:
          "Itacaré is much more than a beach: Atlantic rainforest trails, rivers, waterfalls and local communities that don't show up much in the typical itineraries.",
      },
      {
        title: "those who want to connect and move",
        description:
          "a surf lesson, a footvolley lesson, trails to preserved beaches and plenty of time to slow down, eat well and swap stories.",
      },
      {
        title: "those who love fashion and new experiences",
        description:
          "in partnership with Numaré Brand, every girl gets a special kit of pieces to wear on the trip (and take home) and takes part in the brand's photo and video shoots.",
      },
    ],
    faqs: [
      {
        question: "how does the trip work?",
        answer:
          "getting to Ilhéus is on your own. on arrival, you'll already have a car assigned, heading out from Ilhéus to Itacaré — Gio spends the day at the airport welcoming everyone and helping match people with the right transfer. on november 3rd, transfers leave Itacaré back to Ilhéus Airport.",
      },
      {
        question: "do i have to do every activity?",
        answer:
          "no! since the whole program is already included in the package, we encourage you to make the most of it, but you're not required to join anything.",
      },
      {
        question: "how are the beds set up?",
        answer:
          "the house has different bed setups — 10 beds total, across 5 bedrooms. room assignments are decided together on arrival, nice and easy.",
      },
      {
        question: "do you help with booking flights?",
        answer:
          "yes! we have a partner agency that helps you find good-value flights — just reach out to Gio and ask for help.",
      },
      {
        question: "how does Numaré fit into the trip?",
        answer:
          "Numaré is this edition's sponsor. on arrival, each person gets a kit with pieces from the brand to wear during the trip — and of course, take home afterward. throughout the days, we'll shoot photos and videos for Numaré's use; by joining the trip, you grant image usage rights for that content to be published on the brand's social media. if you have any objection to this, it's essential to speak with Gio before the trip.",
      },
      {
        question: "i don't want to join the surf lesson — what now?",
        answer:
          "no problem! just let Gio or Malice know ahead of time — while the group is in the lesson, you're free to enjoy the beach at your own pace.",
      },
      {
        question: "how does payment work?",
        answer:
          "we accept pix, boleto or credit card. on the card, installments go up to 6x with interest; via pix, the full amount needs to be settled before the trip starts.",
      },
      {
        question: "what's the cancellation policy?",
        answer:
          "cancellations must be requested at least 15 days before the contracted services begin; after that, a fee of 50% of the amount paid applies. refunds are issued minus bank transfer fees. no-shows are charged 100% of the contracted services.",
      },
      {
        question: "will Julia be there on this trip?",
        answer:
          "for this edition i won't be there in person, but you'll be in great hands: Giovana Gentil, my business partner, accompanies the group start to finish. Gio is 24, from São Paulo, and spent 5 months backpacking solo around the world — today she organizes group trips for women, with the purpose of helping those who want to travel but don't know how. i've done this trip myself and hand-picked this partnership, so you can trust every detail has been thought through. and of course, i'll always be available for any questions that come up, before or during the trip. want to get to know Gi? just check out her Instagram: @giovanagentil.travel 💛",
      },
    ],
  },
  "lombok-bali-2027": {
    title: "Lombok + Bali",
    destination: "Lombok and Bali, Indonesia",
    dates: "january 6–17, 2027",
    duration: "12 days",
    priceDisplay: "USD 1,193",
    priceInstallments:
      "payment made directly with Gio via WhatsApp — accepts Wise and international transfer",
    tagline:
      "Lombok, the Gilis and Bali in 12 days — waterfalls, paradise islands and Balinese culture",
    description:
      "we start in Lombok — with breathtaking waterfalls, the Sasak village and a surf lesson. then, the Gilis for island hopping and swimming with turtles in crystal-clear water. and we end in Bali — from Ubud to Canggu — with a Balinese cooking class, rafting, a purification ceremony in sacred waters and the most beautiful sunsets in Southeast Asia. 12 days, 11 nights, a group of up to 20 women.",
    whatsappMessage:
      "Hi Julia! I just read the material about the Lombok + Bali trip (january 6–17, 2027) and I want to secure my spot :)",
    paymentMethods: ["Wise", "international transfer"],
    included: [
      "airport transfer on arrival (if arriving on the trip's start date or a pre-night booked with the operator)",
      "11 nights in 3-star hotels, twin-share rooms",
      "11 breakfasts",
      "1 welcome dinner + 1 local BBQ + 1 lunch",
      "visit to the Sasak Village and Benang Stokel and Benang Kelambu waterfalls",
      "yoga session",
      "surf lesson in Lombok",
      "fast boat crossing to Gili Trawangan",
      "private island hopping: Gili Meno + swimming with turtles and underwater statues",
      "cycling tour around Gili Trawangan",
      "fast boat Gili → Bali (Canggu)",
      "Balinese cooking class in Ubud",
      "white water rafting in Bali",
      "Balinese purification ceremony (Taman Beji Griya)",
      "visit to the rice terraces and temples of Bali",
      "private van transfers throughout the trip",
      "dedicated tour leader for the 12 days",
    ],
    notIncluded: [
      "international airfare",
      "travel insurance (mandatory)",
      "Indonesia entry visa (VOA ~USD 35)",
      "night taxis",
      "tip for the tour leader",
      "airport drop-off at the end",
      "optional activities not listed",
      "personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "day 1 — arrival in Lombok, welcome to the island!",
        description:
          "landing in Lombok (LOP). transfer to the lodging and time to settle in. at night, welcome dinner with the group — new faces, delicious food and cocktails under the stars.",
      },
      {
        day: 2,
        title: "day 2 — culture and waterfalls",
        description:
          "immersion in Sasak culture: visit to the traditional village, learning about local customs and crafts. next, the stunning Benang Stokel and Benang Kelambu waterfalls. a relaxed afternoon with a drink and dinner at the hotel.",
      },
      {
        day: 3,
        title: "day 3 — yoga + surf + sunset BBQ",
        description:
          "morning yoga session, followed by a surf lesson on one of Lombok's best beaches. whether it's your first wave or an improvement on what you already know — the focus is having fun in the sun. at night, a traditional BBQ with drinks and an unforgettable sunset.",
      },
      {
        day: 4,
        title: "day 4 — Gili Trawangan, the car-free paradise",
        description:
          "fast boat to Gili Trawangan, the car-free island. cycling around the island, relaxing on the beach and enjoying the island's pace. an island-themed dinner, music and, of course, karaoke — the night promises!",
      },
      {
        day: 5,
        title: "day 5 — private island hopping",
        description:
          "exclusive boat trip around Gili Meno and Gili Trawangan. snorkeling with turtles, exploring the underwater statues and lunch in Gili Meno. in the afternoon, drinks at the best beach bars with sunset views.",
      },
      {
        day: 6,
        title: "day 6 — sunset ride + Gili viewpoint",
        description:
          "a calm morning and a sunset cycling tour around Gili Trawangan, with stops at hidden corners and the island's best viewpoint. farewell dinner from the Gilis.",
      },
      {
        day: 7,
        title: "day 7 — arrival in Bali, Ubud",
        description:
          "fast boat to Bali. arrival in Canggu and transfer to Ubud, the island's cultural heart. free afternoon to explore the hotel, rest or walk around downtown Ubud.",
      },
      {
        day: 8,
        title: "day 8 — cooking class + rafting",
        description:
          "morning Balinese cooking class — learning to prepare traditional dishes with fresh ingredients. in the afternoon, white water rafting on Bali's river. a celebration dinner to look back on the adventures.",
      },
      {
        day: 9,
        title: "day 9 — Balinese purification ceremony",
        description:
          "visit to the sacred sanctuary of Taman Beji Griya for a purification ceremony led by a local priest — a powerful ritual of reconnection with Bali's essence. free afternoon to explore Ubud: markets, art shops or the pool.",
      },
      {
        day: 10,
        title: "day 10 — rice terraces + departure to Canggu",
        description:
          "a stop at Bali's iconic rice terraces to take in the endless green. then, Canggu — known for surf, beach bars and incredible restaurants. dive into the island's lively scene.",
      },
      {
        day: 11,
        title: "day 11 — cultural exploration of Bali",
        description:
          "visit to the Royal Temple of Taman Ayun, a casual lunch in the Tanah Lot area, and then Tanah Lot Temple itself — a rock in the middle of the ocean with a breathtaking sunset. free evening in Canggu.",
      },
      {
        day: 12,
        title: "day 12 — bye Bali, until next time!",
        description:
          "final group breakfast. the tour leader assists with check-out and the airport transfer. it's not a goodbye — it's the beginning of many more adventures together.",
      },
    ],
    accommodation:
      "11 nights in selected 3-star hotels — twin-share rooms (double bed available on request). lodging in Kuta Lombok, Gili Trawangan, Ubud and Canggu, all with breakfast included.",
    forWhom: [
      {
        title: "those who want the perfect balance",
        description:
          "culture, adventure and rest in a single itinerary. wild Lombok with waterfalls and Sasak Village, the Gilis with turtles and island hopping, a purification ceremony in Ubud and surf in Canggu. 12 days that have it all.",
      },
      {
        title: "those who want to experience the real Indonesia",
        description:
          "it's not just Bali. we start in Lombok — untouched beaches, breathtaking waterfalls, rich local culture — and pass through the Gilis before diving into Bali. the complete Indonesia itinerary.",
      },
      {
        title: "those who want a stress-free trip",
        description:
          "airport transfer included, private van, local guide throughout the trip and an incredible group of women. all you have to do is show up with your backpack.",
      },
    ],
    faqs: [
      {
        question: "do i need a visa for Indonesia?",
        answer:
          "Brazilian women can get a visa on arrival (VOA) at Lombok (LOP) or Denpasar (DPS) airport, valid for 30 days and costing approximately USD 35.",
      },
      {
        question: "how does payment work?",
        answer:
          "the whole purchase is made directly with Gio via WhatsApp. she'll walk you through all the payment options, including Wise and international transfer.",
      },
      {
        question: "is the trip women-only?",
        answer: "yes, all Julia Paraizo experiences are exclusively for women.",
      },
      {
        question: "is travel insurance mandatory?",
        answer:
          "yes, travel insurance is mandatory and not included. we recommend coverage for cancellation and medical assistance abroad.",
      },
      {
        question: "what's the minimum number of participants?",
        answer:
          "the trip needs at least 7 participants to happen. if that number isn't reached 30 days in advance, the trip may be cancelled or rescheduled.",
      },
      {
        question: "can i buy this trip combined with the Philippines?",
        answer:
          "yes! there's a Lombok + Bali + Philippines combo package, which includes the internal Bali → Philippines flight. talk to Gio to learn more.",
      },
      {
        question: "is the room shared?",
        answer:
          "yes, rooms are twin-share (2 people per room). a double room can be requested, subject to availability confirmation.",
      },
      {
        question: "will Julia be there on this trip?",
        answer:
          "for this edition i won't be there in person, but you'll be in great hands: Giovana Gentil, my business partner, accompanies the group on every expedition, start to finish. i've done this trip myself and hand-picked this agency, so you can trust every detail has been thought through. and of course, i'll always be available for any questions that come up, before or during the trip. want to get to know Gi? just check out her Instagram: @giovanagentil.travel 💛",
      },
    ],
  },
  "lombok-bali-filipinas-2027": {
    title: "Lombok + Bali + Philippines",
    destination: "Lombok, Bali and the Philippines",
    dates: "january 6–27, 2027",
    duration: "22 days",
    priceDisplay: "USD 3,051",
    priceInstallments:
      "payment made directly with Gio via WhatsApp — accepts Wise and international transfer",
    tagline:
      "the complete Southeast Asia combo — Lombok, Bali and the Philippines in 22 days, with the internal flight already included",
    description:
      "for those who want to experience it all. 12 days in Lombok and Bali — the Gilis, Ubud, Canggu — followed by 10 days in the Philippines, between Cebu and Siargao. the flight from Bali to the Philippines is already included in the combo package. it's the complete Southeast Asia trip: over 3 weeks with Gio and an incredible group of women.",
    whatsappMessage:
      "Hi Julia! I just read the material about the full Lombok + Bali + Philippines package (january 6–27, 2027) and I want to secure my spot :)",
    paymentMethods: ["Wise", "international transfer"],
    included: [
      "everything included in the Lombok + Bali package (jan 6–17)",
      "everything included in the Philippines package — Cebu + Siargao (jan 18–27)",
      "domestic flight Bali → Cebu, Philippines (included exclusively in the combo package)",
      "20 nights in 3-star hotels, twin-share rooms",
      "20 breakfasts + meals according to each individual itinerary",
      "dedicated tour leader for the 22 days",
    ],
    notIncluded: [
      "international airfare (arrival in Lombok, departure from the Philippines)",
      "mandatory travel insurance",
      "night taxis",
      "tip for the tour leader",
      "optional activities",
      "personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "day 1 — arrival in Lombok",
        description: "landing in Lombok (LOP). welcome dinner with the group.",
      },
      {
        day: 2,
        title: "day 2 — culture and waterfalls in Lombok",
        description: "Sasak village + Benang Stokel and Benang Kelambu waterfalls.",
      },
      {
        day: 3,
        title: "day 3 — yoga + surf + BBQ",
        description: "yoga session, surf lesson on a Lombok beach and sunset BBQ.",
      },
      {
        day: 4,
        title: "day 4 — Gili Trawangan",
        description: "fast boat to Gili Trawangan. cycling, beach, dinner and karaoke.",
      },
      {
        day: 5,
        title: "day 5 — private island hopping",
        description: "Gili Meno: snorkeling with turtles and underwater statues. drinks and sunset.",
      },
      {
        day: 6,
        title: "day 6 — sunset ride in Gili",
        description: "cycling tour and the island's best viewpoint. farewell dinner from the Gilis.",
      },
      {
        day: 7,
        title: "day 7 — arrival in Ubud, Bali",
        description: "fast boat to Bali. transfer to Ubud, the island's cultural heart.",
      },
      {
        day: 8,
        title: "day 8 — Balinese cooking + rafting",
        description: "Balinese cooking class + white water rafting on Bali's river.",
      },
      {
        day: 9,
        title: "day 9 — purification ceremony",
        description: "purification ritual at the sacred sanctuary of Taman Beji Griya. free afternoon in Ubud.",
      },
      {
        day: 10,
        title: "day 10 — rice terraces + Canggu",
        description: "stop at the Tegalalang rice terraces. arrival in Canggu.",
      },
      {
        day: 11,
        title: "day 11 — Bali temples",
        description: "Taman Ayun Temple + Tanah Lot with sunset over the ocean.",
      },
      {
        day: 12,
        title: "day 12 — last moments in Bali + flight → Philippines",
        description: "group breakfast. flight Bali (DPS) → Cebu (CEB), Philippines. check-in at the hotel in Cebu.",
      },
      {
        day: 13,
        title: "day 13 — Moalboal, sardine run and turtles",
        description: "drive to Moalboal. snorkeling in the legendary sardine run and sea turtle sightings.",
      },
      {
        day: 14,
        title: "day 14 — canyoneering in Kawasan",
        description: "adventure through Kawasan Falls' canyons and waterfalls.",
      },
      {
        day: 15,
        title: "day 15 — whale sharks in Oslob + Tumalog Falls",
        description: "swimming with whale sharks + Tumalog waterfalls. return to Cebu.",
      },
      {
        day: 16,
        title: "day 16 — flight Cebu → Siargao + Cloud 9 at sunset",
        description: "domestic flight (included). arrival in Siargao. sunset at Cloud 9 Boardwalk.",
      },
      {
        day: 17,
        title: "day 17 — surf lesson at Cloud 9",
        description: "surf lesson with local instructors at Cloud 9. free afternoon.",
      },
      {
        day: 18,
        title: "day 18 — Siargao land tour",
        description: "Magpupungko, Coconut Road, Maasin River and Sugba Lagoon.",
      },
      {
        day: 19,
        title: "day 19 — Sohoton Cove, jellyfish lagoon",
        description: "boat trip: caves, hidden lagoons and the stingless jellyfish sanctuary.",
      },
      {
        day: 20,
        title: "day 20 — free day in Siargao",
        description: "rest, optional surfing or the Tri-Island Tour (Guyam, Daku and Naked Island).",
      },
      {
        day: 21,
        title: "day 21 — last hours in the Philippines",
        description: "final group breakfast. check-out and transfer to Siargao Airport (IAO).",
      },
      {
        day: 22,
        title: "day 22 — departure",
        description: "return flights throughout the day. 22 days, 4 islands, memories for a lifetime.",
      },
    ],
    accommodation:
      "20 nights in selected 3-star hotels in Lombok, Gili Trawangan, Ubud, Canggu, Cebu, Moalboal and Siargao. twin-share rooms with breakfast included.",
    forWhom: [
      {
        title: "those who want to live it to the fullest",
        description:
          "culture, adventure, ocean and connection in two incredible countries. Lombok, the Gilis, Ubud, Canggu, Cebu and Siargao — 22 days, 15 girls and the Bali → Philippines flight already included in the package.",
      },
      {
        title: "those who don't want to choose between Indonesia and the Philippines",
        description:
          "why leave when you can keep going? you finish Bali on day 18 and the trip to the Philippines starts the same day. just board and keep the adventure going.",
      },
      {
        title: "those who want the best value in Southeast Asia",
        description:
          "the combo works out cheaper than the two trips separately. and the domestic Bali → Cebu flight — which is worth a lot — is already included. 22 days for less.",
      },
    ],
    faqs: [
      {
        question: "what's included in the combo package that's not in the separate trips?",
        answer:
          "the only combo-exclusive item is the flight from Bali to the Philippines (Denpasar/DPS → Cebu/CEB). everything else is the sum of the two itineraries: Lombok + Bali and the Philippines.",
      },
      {
        question: "how does payment work?",
        answer:
          "the whole purchase is made directly with Gio via WhatsApp. she'll walk you through all the payment options, including Wise and international transfer.",
      },
      {
        question: "what's the price of each trip separately?",
        answer:
          "Lombok + Bali (jan 6–17): USD 1,193/person. Philippines (jan 18–27): USD 1,485/person. Combo with internal flight included: USD 3,051/person.",
      },
      {
        question: "is the trip women-only?",
        answer: "yes, all Julia Paraizo experiences are exclusively for women.",
      },
      {
        question: "is travel insurance mandatory?",
        answer:
          "yes, travel insurance is mandatory and not included. we recommend broad coverage: cancellation, medical assistance, water sports and multi-destination coverage.",
      },
      {
        question: "do i need a visa?",
        answer:
          "for Indonesia: visa on arrival (VOA), ~USD 35. for the Philippines: Brazilian women enter visa-free for up to 30 days.",
      },
      {
        question: "what's the minimum number of participants?",
        answer:
          "minimum 7 participants for each leg of the trip. Gio and the tour leader guarantee the best experience regardless of group size.",
      },
      {
        question: "will Julia be there on this trip?",
        answer:
          "for this edition i won't be there in person, but you'll be in great hands: Giovana Gentil, my business partner, accompanies the group on every expedition, start to finish. i've done this trip myself and hand-picked this agency, so you can trust every detail has been thought through. and of course, i'll always be available for any questions that come up, before or during the trip. want to get to know Gi? just check out her Instagram: @giovanagentil.travel 💛",
      },
    ],
  },
  "filipinas-2027": {
    title: "Philippines",
    destination: "Cebu and Siargao, Philippines",
    dates: "january 18–27, 2027",
    duration: "10 days",
    priceDisplay: "USD 1,485",
    priceInstallments:
      "payment made directly with Gio via WhatsApp — accepts Wise and international transfer",
    tagline:
      "Cebu and Siargao in 10 days — sardine run, canyoneering, whale sharks and surf at Cloud 9",
    description:
      "10 days across the Philippines' two greatest treasures with Gio. we start in Cebu — snorkeling in Moalboal's sardine run, canyoneering at Kawasan Falls and swimming with whale sharks in Oslob. then we fly to Siargao, the surf island: a surf lesson at Cloud 9, an island land tour, the incredible Sohoton Cove and the otherworldly jellyfish lagoon.",
    whatsappMessage:
      "Hi Julia! I just read the material about the Philippines trip — Cebu + Siargao (january 18–27, 2027) and I want to secure my spot :)",
    paymentMethods: ["Wise", "international transfer"],
    included: [
      "airport transfer on arrival in Cebu (if arriving on the start date or a pre-night with the operator)",
      "9 nights in 3-star hotels, twin-share rooms",
      "9 breakfasts + 4 lunches + 1 welcome dinner",
      "snorkeling in Moalboal's sardine run and turtle reefs",
      "full canyoneering at Kawasan Falls (guide included)",
      "swimming with whale sharks in Oslob",
      "visit to Tumalog Falls",
      "domestic flight Cebu → Siargao (economy class)",
      "surf lesson with local instructor at Cloud 9",
      "Siargao Land Tour (Magpupungko, Coconut Road, Maasin River, Sugba Lagoon)",
      "boat trip to Sohoton Cove (caves, lagoons, jellyfish sanctuary)",
      "private van transfers every day",
      "dedicated tour leader for the 10 days",
    ],
    notIncluded: [
      "international airfare to/from the Philippines",
      "mandatory travel insurance",
      "night taxis",
      "tip for the tour leader",
      "optional Tri-Island tour on day 9 (Guyam, Daku and Naked Island)",
      "extra surf sessions beyond the day 6 lesson",
      "motorbike rental for independent exploring",
      "personal expenses, souvenirs and snacks",
    ],
    itinerary: [
      {
        day: 1,
        title: "day 1 — arrival in Cebu + welcome dinner",
        description:
          "landing at Mactan-Cebu International Airport (CEB). private transfer to the hotel in the city. free afternoon to settle in and explore. at night, welcome dinner with the group — meet your adventure companions, try Filipino cuisine and get ready for what's ahead.",
      },
      {
        day: 2,
        title: "day 2 — Moalboal, sardine run and sea turtles",
        description:
          "scenic drive south of Cebu (3-4h) to the charming coastal town of Moalboal. check-in and settle into the island's pace. at dusk, snorkeling through the legendary sardine run — millions of fish in silver formations just meters from shore. sea turtles frequently spotted on nearby reefs.",
      },
      {
        day: 3,
        title: "day 3 — canyoneering at Kawasan Falls",
        description:
          "full-day adventure through Cebu's jungles — climbing up rivers, jumping into turquoise pools, sliding down smooth rock waterfalls. the route culminates at the iconic multi-tiered Kawasan Falls. group dinner to celebrate the day's adrenaline.",
      },
      {
        day: 4,
        title: "day 4 — Oslob, swimming with whale sharks + Tumalog Falls",
        description:
          "early wake-up for Oslob to swim alongside the ocean's largest fish: whale sharks. a unique and thrilling experience. then, a short walk to the ethereal Tumalog Falls, where mist and curtains of water create a jungle sanctuary. return to Cebu in the evening.",
      },
      {
        day: 5,
        title: "day 5 — flight Cebu → Siargao + sunset at Cloud 9",
        description:
          "breakfast and transfer to the airport for the domestic flight to Siargao (included). check-in at the hotel and settle into the island's slower pace. in the afternoon, a walk to the iconic Cloud 9 Boardwalk to watch experienced surfers on Siargao's most famous waves at sunset.",
      },
      {
        day: 6,
        title: "day 6 — surf lesson at Cloud 9",
        description:
          "beginner surf lesson with professional local instructors at one of the world's most celebrated surf spots. after the session, a completely free afternoon — explore beachside cafés, rent a motorbike, relax at the resort or book an extra surf session.",
      },
      {
        day: 7,
        title: "day 7 — Siargao land tour",
        description:
          "full island exploration: tide pools and rock formations at Magpupungko, a drive down palm-lined Coconut Road, ziplining and river boats at Maasin River, and swimming or kayaking in the emerald waters of Sugba Lagoon, surrounded by untouched jungle.",
      },
      {
        day: 8,
        title: "day 8 — Sohoton Cove, limestone paradise",
        description:
          "boat crossing to the paradise of Sohoton Cove: Hagukan Cave, Magkukuob Cave, hidden lagoons with cliff jumps and — the highlight — the Jellyfish Sanctuary, where stingless jellyfish float in turquoise waters. an otherworldly experience.",
      },
      {
        day: 9,
        title: "day 9 — free day, optional Tri-Island",
        description:
          "a day of rest and exploration at your own pace. sleep in, surf one more time, rent a motorbike or join the optional Tri-Island Tour (Guyam Island, Daku Island and Naked Island) — three of Siargao's most iconic spots in one afternoon.",
      },
      {
        day: 10,
        title: "day 10 — departure, until the next adventure!",
        description:
          "last group breakfast. the tour leader assists with check-out and the transfer to Siargao Airport (IAO). flights depart throughout the day. the trip ends here — but the memories, friendships and island stories travel with you forever.",
      },
    ],
    accommodation:
      "9 nights in selected 3-star hotels: in Cebu and Moalboal (Cebu) and on Siargao island. twin-share rooms (double room available on request). breakfast included.",
    forWhom: [
      {
        title: "those with an adventurous spirit",
        description:
          "sardine run in Moalboal, canyoneering at Kawasan Falls, swimming with whale sharks in Oslob, surf at Cloud 9 and the jellyfish sanctuary in Sohoton Cove. 10 days of pure adrenaline.",
      },
      {
        title: "those who love wild nature and the ocean",
        description:
          "hidden lagoons, limestone caves, untouched islands and marine biodiversity that very few people get to see. the Philippines is one of Asia's best-kept secrets.",
      },
      {
        title: "those who want to go off the beaten path",
        description:
          "very few Brazilian women have been to the Philippines. you'll come back with stories no one will believe and photos that look photoshopped. this destination changes you.",
      },
    ],
    faqs: [
      {
        question: "do i need a visa for the Philippines?",
        answer:
          "Brazilian women can enter the Philippines visa-free for up to 30 days. just a passport valid for at least 6 months and a return ticket or proof of onward travel.",
      },
      {
        question: "how does payment work?",
        answer:
          "the whole purchase is made directly with Gio via WhatsApp. she'll walk you through all the payment options, including Wise and international transfer.",
      },
      {
        question: "is the trip women-only?",
        answer: "yes, all Julia Paraizo experiences are exclusively for women.",
      },
      {
        question: "is travel insurance mandatory?",
        answer:
          "yes, travel insurance is mandatory and not included. we recommend coverage for cancellation, medical assistance abroad and water sports.",
      },
      {
        question: "what's the minimum number of participants?",
        answer:
          "the trip needs at least 7 participants to happen. if that number isn't reached 30 days in advance, the trip may be cancelled or rescheduled.",
      },
      {
        question: "can i combine it with the Lombok + Bali trip?",
        answer:
          "yes! there's a Lombok + Bali + Philippines combo package that runs from january 6 to january 27, 2027. the Bali → Philippines flight is already included in the combo. talk to Gio to learn more.",
      },
      {
        question: "is the room shared?",
        answer:
          "yes, rooms are twin-share (2 people per room). a double room can be requested, subject to availability confirmation.",
      },
      {
        question: "will Julia be there on this trip?",
        answer:
          "for this edition i won't be there in person, but you'll be in great hands: Giovana Gentil, my business partner, accompanies the group on every expedition, start to finish. i've done this trip myself and hand-picked this agency, so you can trust every detail has been thought through. and of course, i'll always be available for any questions that come up, before or during the trip. want to get to know Gi? just check out her Instagram: @giovanagentil.travel 💛",
      },
    ],
  },
  "atacama-uyuni-2027": {
    title: "Atacama + Salar de Uyuni",
    destination: "Atacama, Chile + Salar de Uyuni, Bolivia",
    dates: "february 14–22, 2027",
    duration: "9 days",
    priceDisplay: "R$ 7,350",
    priceInstallments: "5% discount on pix · up to 10x interest-free on credit card",
    tagline:
      "geysers at dawn, moon valleys and the absolute silence of the Salar de Uyuni, over 9 days",
    description:
      "9 days between Chile and Bolivia: geysers at dawn, moon valleys in colors from another planet, lagoons with flamingos, a salt hotel in Colchani and the absolute silence of the Salar de Uyuni. one of the most surreal experiences you'll ever live.",
    whatsappMessage:
      "Hi Julia! I just read the material about the Atacama + Uyuni trip (february 14–22, 2027) and I want to secure my spot :)",
    paymentMethods: ["pix", "credit card"],
    included: [
      "shared transfer Calama Airport (CJC) → San Pedro de Atacama (day 1)",
      "private Valle del Arco Iris excursion with guide and entrance fees (day 2)",
      "private Valle de la Luna excursion + sunset with picnic and entrance fees (day 2)",
      "private Salar de Atacama excursion + Miscanti, Miñiques and Piedras Rojas Lagoons with guide, entrance fees and lunch (day 3)",
      "astronomy tour with telescopes and Andean mythology (day 3)",
      "private Tatio Geysers excursion with guide, entrance fees and breakfast (day 4)",
      "Cejar Lagoon, Ojos del Salar and Tebinquinche excursion with entrance fees (day 4)",
      "4D/3N jeep tour across the Bolivian altiplano with bilingual local guide and entrance fees (days 5–8)",
      "lunches and dinners included during the altiplano tour",
      "all lodging + breakfast",
      "private transfers for the Chile–Bolivia border crossings",
      "shared transfer San Pedro de Atacama → Calama Airport (day 9)",
    ],
    notIncluded: [
      "airfare (flight to Calama/CJC — suggestion: LATAM and Sky Airline)",
      "travel insurance (mandatory — coverage for high altitude, cancellation and medical assistance)",
      "meals not specified in the itinerary",
      "personal expenses, souvenirs and shopping",
    ],
    itinerary: [
      {
        day: 1,
        title: "day 1 — arrival in San Pedro de Atacama",
        description:
          "upon landing in Calama, your private transport takes you to San Pedro de Atacama — 2,440m of altitude, one of the driest places on earth. free afternoon to get into the mood: walk around downtown, hydrate and feel the desert calling for adventure.",
      },
      {
        day: 2,
        title: "day 2 — Valle del Arco Iris + Valle de la Luna at sunset",
        description:
          "after breakfast, we head to Yerbas Buenas — ancestral petroglyphs reveal old desert routes. at Valle del Arco Iris, we walk among mountains with intense colors shaped by minerals. in the afternoon, Valle de la Luna: dunes, craters and almost extraterrestrial rock formations. the sunset turns everything golden and pink — bring a jacket, the temperature drops fast at nightfall.",
      },
      {
        day: 3,
        title: "day 3 — Salar de Atacama + astronomy tour",
        description:
          "we head to the Salar de Atacama, Chile's largest salt flat. we visit Miscanti and Miñiques Lagoons with imposing volcanoes in the background, and at Piedras Rojas the red of the formations impresses. at night, under one of the cleanest skies on the planet, we observe constellations and galaxies through telescopes while learning about Andean mythology.",
      },
      {
        day: 4,
        title: "day 4 — Tatio Geysers + Cejar Lagoon + sunset at Tebinquinche",
        description:
          "departure before dawn towards the Tatio Geysers, over 4,300m of altitude. in the cold morning air, columns of steam rise at sunrise. breakfast among mountains and a stop in Machuca. in the afternoon: Cejar Lagoon (ultra-salty waters), Ojos del Salar (freshwater pools in the middle of the desert) and a spectacular sunset at Tebinquinche.",
      },
      {
        day: 5,
        title: "day 5 — crossing the border: Laguna Verde + Laguna Colorada",
        description:
          "the adventure begins before sunrise. we cross the border at Hito Cajones and board private 4x4 jeeps with a bilingual local guide. Laguna Verde at the foot of Licancabur Volcano, then Laguna Colorada — famous for its reddish tones and the three flamingo species on its shores. overnight in the village of Villa Mar.",
      },
      {
        day: 6,
        title: "day 6 — Bolivian altiplano + salt hotel + starry sky over Uyuni",
        description:
          "crossing the altiplano with Qatal and Negra Lagoons, a stop in San Cristóbal and the Valley of Rocks — geological formations sculpted by the wind. in the afternoon, we arrive in Colchani, on the edge of the Salar de Uyuni, where we spend the night at a salt hotel. at dusk, we return to the salt flat for the starry sky tour — Milky Way, absolute silence and your camera working overtime.",
      },
      {
        day: 7,
        title: "day 7 — Salar de Uyuni, the planet's largest salt desert",
        description:
          "after breakfast, the Train Cemetery — rusted locomotives and wagons that preserved the region's railway history. then we truly enter the Salar de Uyuni: white immensity to the horizon, surreal photos, lunch in the middle of the salt flat. Incahuasi Island covered in giant cacti with a panoramic view. the sunset painting the horizon is the perfect closing.",
      },
      {
        day: 8,
        title: "day 8 — return to Chile, San Pedro de Atacama",
        description:
          "return to Chile crossing the border. after immigration procedures, a free afternoon in San Pedro de Atacama to relax, buy souvenirs or take one last walk through the desert.",
      },
      {
        day: 9,
        title: "day 9 — departure, Calama Airport",
        description:
          "after breakfast, at the agreed time, your driver takes you on a shared transfer to Calama Airport (CJC). end of services — and of one of the most unforgettable trips of your life.",
      },
    ],
    accommodation: `san pedro de atacama: lodging in San Pedro de Atacama for 4 nights (days 1–4 and 8), with breakfast included.

villa mar / south lipez: overnight in the village of Villa Mar (day 5), in the heart of the Bolivian altiplano, with dinner included.

uyuni / colchani: 2 nights in the Bolivian altiplano (days 6 and 7), including the famous experience of sleeping in a salt hotel on the edge of the Salar de Uyuni.

heads up: the whole route involves altitudes between 2,440m (San Pedro) and over 4,300m (Tatio Geysers). acclimatization is gradual and guided by Gio, but prepare in advance.`,
    forWhom: [
      {
        title: "those who dream of otherworldly landscapes",
        description:
          "moon valleys, geysers steaming at dawn, Laguna Verde, Laguna Colorada with flamingos and the endless white of the Salar de Uyuni. Atacama + Uyuni is unlike anything you've seen.",
      },
      {
        title: "those who want to step out of their comfort zone",
        description:
          "altitude, absolute silence, arid desert and nature that feels unreal. this trip is for those who want to feel tiny in front of the world — and grow from it.",
      },
      {
        title: "those building their list of the most surreal destinations",
        description:
          "northern Chile and the Bolivian altiplano are two of South America's most impressive landscapes. together, in a 9-day itinerary, they form one of the most unique trips of your life.",
      },
    ],
    faqs: [
      {
        question: "do i need a visa for Chile and Bolivia?",
        answer:
          "no, Brazilian women don't need a visa to enter either Chile or Bolivia. a valid passport is enough — valid for at least 6 months after the return date.",
      },
      {
        question: "will the altitude affect me?",
        answer:
          "the itinerary passes through altitudes between 2,440m (San Pedro de Atacama) and over 4,300m (Tatio Geysers). acclimatization is gradual and Gio guides everyone on how to prepare in advance. constant hydration, avoiding alcohol in the first days and rest are the main tips.",
      },
      {
        question: "is travel insurance mandatory?",
        answer:
          "yes. we recommend coverage for high altitude, cancellation and international medical assistance.",
      },
      {
        question: "how does the crossing into Bolivia work?",
        answer:
          "on day 5 we cross the border at Hito Cajones. all logistical support (transport, bilingual guide) is included. you just need your passport in hand for the immigration procedures.",
      },
      {
        question: "what should i bring for the trip?",
        answer:
          "layered clothing (the desert is hot during the day and very cold at night), high-SPF sunscreen, sunglasses, altitude sickness medication (optional, check with your doctor), documents and travel insurance. Gio sends a complete guide after you sign up.",
      },
      {
        question: "how does payment work?",
        answer: "5% discount on pix. up to 10x interest-free installments on credit card.",
      },
      {
        question: "will Julia be there on this trip?",
        answer:
          "for this edition i won't be there in person, but you'll be in great hands: Giovana Gentil, my business partner, accompanies the group on every expedition, start to finish. i've done this trip myself and hand-picked this agency, so you can trust every detail has been thought through. and of course, i'll always be available for any questions that come up, before or during the trip. want to get to know Gi? just check out her Instagram: @giovanagentil.travel 💛",
      },
      {
        question: "if the room is a double, who will my roommate be?",
        answer:
          "our groups focus heavily on social interaction — Gio picks someone who'll likely have a good connection with you. that magic usually works out! but if you have a friend also going on the trip, you can choose to room together.",
      },
    ],
  },
  "peru-2027": {
    title: "Peru",
    destination: "Peru",
    dates: "june 13–23, 2027",
    duration: "11 days",
    priceDisplay: "R$ 8,700",
    priceInstallments: "",
    tagline: "Machu Picchu, the Sacred Valley of the Incas, Cusco and Lake Titicaca over 11 days",
    description:
      "Peru is one of the richest destinations in the world — Machu Picchu, the Sacred Valley of the Incas, Cusco, Lake Titicaca and a cuisine recognized as the best in Latin America. june 13–23, 2027 with Gio.",
    whatsappMessage:
      "Hi Julia! I just read the material about the Peru trip (june 13–23, 2027) and I want to secure my spot :)",
    paymentMethods: [],
    included: [],
    notIncluded: [],
    itinerary: [
      {
        day: 1,
        title: "day 1 — welcome to Lima!",
        description:
          "06/13 · upon landing in Lima, a driver will be waiting to take you comfortably to the hotel in Miraflores, one of the best-located neighborhoods in the Peruvian capital. after check-in, take the chance to discover why Lima is a world reference in gastronomy: fresh ceviche, causa peruana and lomo saltado are part of the country's identity. at the end of the day, walk along the Malecón de Miraflores, overlooking the Pacific Ocean, passing through coastal parks and the iconic Parque del Amor. overnight in Lima.",
      },
      {
        day: 2,
        title: "day 2 — visiting Lima's main treasures",
        description:
          "06/14 · today Lima shows two faces in a single day: historic and modern. city tour through Plaza de Armas, with the Cathedral and Government Palace; the Catacombs of the Monastery of San Francisco; Huaca Pucllana, a pre-Inca pyramid in Miraflores; and Larcomar, with open views of the Pacific Ocean. at night, we recommend an optional visit to the Magic Water Circuit, with a light and dancing fountain show. overnight in Lima.",
      },
      {
        day: 3,
        title: "day 3 — arriving in Cusco, ancient capital of the Inca Empire",
        description:
          "06/15 · after breakfast in Lima, board your flight to Cusco. on arrival, a driver will be waiting to take you to the hotel in the historic center. the rest of the day is dedicated to acclimatization: hydrate, go at your own pace and take a light walk through the cobblestone streets. our team will meet you to answer questions, hand over documents and go over the essential information. overnight in Cusco.",
      },
      {
        day: 4,
        title: "day 4 — exploring Cusco and its archaeological sites",
        description:
          "06/16 · the day combines archaeology, landscapes and Inca practical genius. visit to Sacsayhuamán, with its monumental walls and panoramic city view; Qoricancha, the Temple of the Sun; Tambomachay, the Inca's Bath; and Puca Pucara, the Red Fortress. the Cusco Tourist Ticket is included. overnight in Cusco.",
      },
      {
        day: 5,
        title: "day 5 — Laguna Humantay, the trek to the sacred Andean waters",
        description:
          "06/17 · Laguna Humantay is one of the most striking sights in the Andes. the trail climbs between valleys and mountains until it reveals a lake of intense blue at the feet of snow-capped peaks. at the top, a pause to contemplate, take photos and feel the force of Andean nature, with a return to Cusco and professional support from start to finish. the activity requires good physical fitness due to the 4,200-meter altitude; ask about lighter options, like access on horseback. overnight in Cusco.",
      },
      {
        day: 6,
        title:
          "day 6 — Sacred Valley: Maras, Moray, Chinchero, Ollantaytambo and train to Aguas Calientes",
        description:
          "06/18 · get ready for the Sacred Valley, where Inca engineering and stunning landscapes go hand in hand. visit to Moray, with its circular terraces; Maras, with its handmade salt pools; Chinchero, living textile tradition; and Ollantaytambo, one of the best-preserved Inca towns, with lunch included. late in the afternoon, board the train to Machu Picchu Pueblo, also known as Aguas Calientes. overnight in Aguas Calientes.",
      },
      {
        day: 7,
        title: "day 7 — Machu Picchu: feel this place's powerful energy!",
        description:
          "06/19 · you enter one of the most impressive settings on the planet with a guide. see the Temple of the Sun, the Temple of the Three Windows, the Intihuatana, the Temple of the Condor and the Sacred Plaza. tickets are limited and sell out fast. optional experiences: visit to Huayna Picchu, lunch at the Belmond Hotel, private guide or the Vistadome premium train. afterward, train return and transfer to Cusco. overnight in Cusco.",
      },
      {
        day: 8,
        title: "day 8 — Rainbow Mountain: the adventurers' classic trek",
        description:
          "06/20 · the Rainbow Mountain is for those seeking a real challenge in the Andes. the trail happens at high altitude, with demanding climbs and open views of snow-capped mountains and wide valleys. at the top, a pause to catch your breath and see up close the natural colors that made this one of Peru's most impressive postcards. requires good physical fitness due to the 5,000-meter altitude; ask about lighter options, like access by quad bike or horseback. overnight in Cusco.",
      },
      {
        day: 9,
        title: "day 9 — Route of the Sun: the Andean crossing from Cusco to Puno",
        description:
          "06/21 · crossing from Cusco to Puno through Andean landscapes and villages, with cultural stops and entrance fees included. visit Andahuaylillas, the Sistine Chapel of the Americas; Raqchi and the Temple of Wiracocha; Sicuani, with a buffet lunch; La Raya, at the highest point at 4,335 meters; and Pukara, with its museum and pre-Inca culture. arrival in Puno and transfer to the downtown hotel. overnight in Puno.",
      },
      {
        day: 10,
        title: "day 10 — Lake Titicaca: sailing the highest lake in the world!",
        description:
          "06/22 · after breakfast, we head to the Lake Titicaca port. visit the Uros Floating Islands, made of totora reeds, with a totora boat ride; and Taquile Island, famous for its welcoming culture and UNESCO-recognized handwoven textiles. the day includes lunch on Taquile Island and ends with the return to Puno. overnight in Puno.",
      },
      {
        day: 11,
        title: "day 11 — end of the itinerary, but you can still extend your adventure!",
        description:
          "06/23 · after breakfast, at the agreed time, your driver will be waiting to take you by private car to Juliaca Airport, a trip of about 1h30. this is where our services end. if you'd like to extend the trip, talk to us to add optional experiences and other incredible Peruvian destinations.",
      },
    ],
    accommodation:
      "accommodation details will be announced along with the official launch of the itinerary.",
    forWhom: [
      {
        title: "those who want to experience one of the 7 wonders of the world",
        description:
          "Machu Picchu at dawn, with mist rolling down over the ruins — one of the most iconic images in the world. and nothing compares to being there.",
      },
      {
        title: "those who love culture, history and gastronomy",
        description:
          "Peru has one of the world's most celebrated cuisines (ceviche, lomo saltado, causa) and a breathtaking Inca history. Cusco is magical.",
      },
      {
        title: "those who want adventure with comfort",
        description:
          "a hike in the Sacred Valley, a train to Aguas Calientes, visits to archaeological sites and boutique lodging. Peru, just right.",
      },
    ],
    faqs: [
      {
        question: "do i need a visa for Peru?",
        answer: "no, Brazilian women don't need a visa to enter Peru — just a valid passport.",
      },
      {
        question: "does Cusco's altitude affect you?",
        answer:
          "Cusco sits at 3,400m of altitude and adjusting is necessary. the itinerary is designed with a gradual arrival to minimize altitude effects. Gio guides all participants in advance.",
      },
      {
        question: "how do i book my spot?",
        answer:
          "talk to Gio on WhatsApp to confirm the details and receive the next steps for booking.",
      },
      {
        question: "is the trip women-only?",
        answer: "yes, as always — experiences exclusively for women.",
      },
    ],
  },
  "reveillon-caraiva-2026": {
    title: "New Year's in Caraíva",
    destination: "Caraíva, Brazil",
    dates: "december 26, 2026 – january 2, 2027",
    duration: "8 days",
    priceDisplay: "R$ 4,850",
    priceInstallments: "up to 12x with interest",
    tagline:
      "beach, river and Pataxó culture to welcome 2027 in Caraíva, with the New Year's party on your own",
    description:
      "8 days of New Year's in Caraíva with Gio and a group of up to 12 women. group-exclusive lodging at Tupinambá Pousada e Hostel, breakfast, transfers from Porto Seguro, a boat trip along the Caraíva River and a visit to the Pataxó Reserve at Porto do Boi. the New Year's Eve party isn't included, so each of you can choose how to celebrate.",
    whatsappMessage:
      "Hi Julia! I just read the material about the New Year's trip to Caraíva (december 26, 2026 – january 2, 2027) and I want to secure my spot :)",
    paymentMethods: ["credit card"],
    included: [
      "full lodging at Tupinambá Pousada e Hostel Caraíva",
      "2 rooms exclusive to the group: one with 8 beds and another with 4 beds",
      "breakfast every day",
      "round-trip transfer between Porto Seguro airport and Caraíva",
      "boat trip along the Caraíva River",
      "buggy tour to the Pataxó Reserve at Porto do Boi",
    ],
    notIncluded: [
      "airfare to Porto Seguro",
      "lunches and dinners",
      "travel insurance",
      "New Year's Eve party",
      "traditional lunch at the Pataxó Reserve",
      "personal expenses and anything not mentioned in the inclusions",
    ],
    itinerary: [
      {
        day: 1,
        title: "day 1 — arrival in Caraíva",
        description:
          "12/26 · transfer from Porto Seguro airport to Caraíva, the river crossing and check-in at the pousada. free afternoon to feel the village's energy and enjoy the sunset by the river.",
      },
      {
        day: 2,
        title: "day 2 — Praia do Satu",
        description:
          "12/27 · a day dedicated to Praia do Satu, with time to enjoy the sea, walk the sand and experience Caraíva unhurried.",
      },
      {
        day: 3,
        title: "day 3 — boat trip along the Caraíva River",
        description:
          "12/28 · a boat trip along the Caraíva River and a free afternoon to explore the village, rest or enjoy the beach.",
      },
      {
        day: 4,
        title: "day 4 — Pataxó Reserve at Porto do Boi",
        description:
          "12/29 · buggy tour to the Pataxó Reserve at Porto do Boi, with body painting, ritual and contact with indigenous culture. traditional lunch available separately.",
      },
      {
        day: 5,
        title: "day 5 — free beach day",
        description:
          "12/30 · a whole free day to pick a beach, rest and enjoy the village's relaxed pace.",
      },
      {
        day: 6,
        title: "day 6 — beach + New Year's Eve",
        description:
          "12/31 · a beach day and New Year's Eve night. the party isn't included in the package; those who want to can choose options like Sal de Caraíva or forró, with a discount coupon.",
      },
      {
        day: 7,
        title: "day 7 — first day of the year in Caraíva",
        description:
          "01/01 · a free day to rest, check out local crafts and enjoy the last moments in the village.",
      },
      {
        day: 8,
        title: "day 8 — free morning + return",
        description:
          "01/02 · a free morning in Caraíva and, at the agreed time, transfer back to Porto Seguro airport.",
      },
    ],
    accommodation:
      "Tupinambá Pousada e Hostel Caraíva — a pousada and a hostel side by side, under the same owner, with breakfast shared between the two spaces. the group gets two exclusive rooms, with no outside guests: one room with 8 beds and another with 4 beds.",
    forWhom: [
      {
        title: "those who want to start the year with their feet in the sand",
        description:
          "beach days, sunsets by the river and the unique energy of Caraíva village to welcome 2027.",
      },
      {
        title: "those who want the freedom to choose their own New Year's Eve",
        description:
          "the party isn't included in the package: those who want to can enjoy Sal de Caraíva or forró, with a discount coupon, and those who prefer can celebrate their own way.",
      },
      {
        title: "those who love culture and nature",
        description:
          "a boat trip along the Caraíva River and a visit to the Pataxó Reserve at Porto do Boi, with ritual, body painting and an immersion in indigenous culture.",
      },
    ],
    faqs: [
      {
        question: "is the New Year's Eve party included?",
        answer:
          "no. the party was left out of the package to keep the price more accessible for those who aren't into partying. those who want to join will have options like Sal de Caraíva or forró, plus a discount coupon.",
      },
      {
        question: "how do we get to Caraíva?",
        answer:
          "the package includes the round-trip transfer between Porto Seguro airport and Caraíva. the final river crossing is also part of arriving at the village.",
      },
      {
        question: "what's the lodging like?",
        answer:
          "we'll stay at Tupinambá Pousada e Hostel Caraíva, with two rooms exclusive to our group: one with 8 beds and another with 4. breakfast is shared between the pousada and the hostel.",
      },
      {
        question: "is travel insurance included?",
        answer: "no. we have a partner agency to help anyone who needs to get insurance.",
      },
      {
        question: "how do i book my spot?",
        answer:
          "talk to Gio on WhatsApp to confirm the details and get the payment options, up to 12x with interest.",
      },
      {
        question: "is the trip women-only?",
        answer: "yes, all Julia Paraizo experiences are exclusively for women.",
      },
    ],
  },
  "lencois-maranhenses-3": {
    destination: "Lençóis Maranhenses, Brazil",
    dates: "july 23–26, 2027",
    duration: "4 days",
    priceDisplay: "R$ 2,700",
    priceInstallments:
      "R$ 1,250 deposit to book, the rest in up to 4 interest-free installments or up to 6 with interest via pix, boleto or credit card",
    tagline:
      "a 3-day trek across the dunes of the national park, sleeping in hammocks at native families' homes",
    description:
      "4 days in the Lençóis Maranhenses. arrival in São Luís on the 23rd, the eve of the trek, to already be in Barreirinhas and rested — pickup is before dawn on the 24th. it's 3 days of trekking through the Lençóis Maranhenses National Park (between 30 and 38km total), sleeping in hammocks at native families' homes, a Rio Negro crossing, lagoon swims and the vastness of the dunes at sunrise. a mixed group of up to 15 people, in one of the most unique and exotic landscapes in the world — no hotel, no luxury: home-cooked food, lagoon baths and the silence only the desert has.",
    whatsappMessage:
      "Hi Julia! I just read the material about the Lençóis Maranhenses trip (july 23–26, 2027) and I want to secure my spot :)",
    paymentMethods: ["pix", "boleto", "credit card"],
    included: [
      "transfer São Luís ↔ Barreirinhas",
      "all transport for the crossing (4x4, boat or speedboat, depending on the route)",
      "breakfast, lunch and dinner on trekking days",
      "hammock lodging at native families' homes (2 nights)",
      "local eco guide, ICMBio certified",
      "individual travel insurance",
      "transfer back Santo Amaro ↔ São Luís",
    ],
    notIncluded: [
      "airfare",
      "hotel in Barreirinhas",
      "airport ↔ hotel transfers and vice versa",
      "drinks (paid directly to the families, in cash)",
      "anything not listed in \"what's included\"",
    ],
    itinerary: [
      {
        day: 1,
        title: "july 23 — arrival in São Luís",
        description:
          "look for flights landing by early afternoon, so anyone who wants to can book a hotel in town and rest before the expedition begins (recommended, since the van passes by at 3am to pick everyone up from the hotel door or the airport, headed to Barreirinhas).",
      },
      {
        day: 2,
        title: "july 24 — first day of the expedition",
        description:
          "we don't yet know which of the two routes we'll take (that depends on how the lagoons look in july — the guide decides closer to the date, but both are equally beautiful and follow the same 3-day, 2-night hammock structure). route 1: departure by boat from Barreirinhas at 8:30am, passing the APA Pequenos Lençóis, Atins, and a trek to Oásis Baixa Grande. route 2: departure by 4x4 at 3am to the Lagoa Bonita circuit, with breakfast along the way, followed by a 12km trek to Mucambo, a community of 20 families.",
      },
      {
        day: 3,
        title: "july 25 — second day of the expedition",
        description:
          "route 1: departure at 5:30am to catch the sunrise and cross the Rio Negro — a 10km trek to Oásis Queimada dos Britos, passing through Ponta do Peadouro. route 2: a 15km trek split into two parts, to the village of Buriti Grosso and then on to Rancharia, crossing the Rio Negro and a region of tall dunes. overnight in hammocks in the community.",
      },
      {
        day: 4,
        title: "july 26 — third and final day of the expedition + return",
        description:
          "route 1: departure before dawn, around 3am, for the final 14km trek to Lagoa do Junco, with swims along the way. route 2: an early departure for the final 11km trek to Lagoa do Junco. in both cases, expected arrival at 10am, followed by 4x4 to Santo Amaro and from there the transfer back to Barreirinhas or São Luís — we recommend flights from 3pm onward.",
      },
    ],
    accommodation: `lodging in hammock shelters built by the local residents, along whichever route is chosen — we all sleep side by side in hammocks, with bedsheets provided by the families. the shelters usually have outlets to charge your phone and wi-fi (with restricted hours to save generator power) — a portable charger can help. bathrooms are communal, so there's always a line for showers, which should be quick.

lodging and meals at the shelters are already included in the package — bring small cash bills for drinks, paid directly to the families.`,
    forWhom: [
      {
        title: "those who want to truly disconnect",
        description:
          "3 days of trekking across the national park's dunes, sleeping in hammocks at native families' homes, with no rush and no luxury.",
      },
      {
        title: "those who love a real trek",
        description:
          "stretches of 7 to 15km per day, between dunes, rivers and lagoons — between 30 and 38km total over 3 days. it's a genuinely physical itinerary, so make sure you're up for the adventure.",
      },
      {
        title: "those who want to meet local communities",
        description:
          "lodging and meals at native families' homes, with a local eco guide certified by ICMBio and a host photographer to capture it all.",
      },
    ],
    faqs: [
      {
        question: "what should i bring?",
        answer: `a headlamp, UV-protective clothing, a cap, sunglasses, sunscreen, a rain cover, a 30, 40 or 60L backpack, a trekking pole, a 1.5L water bottle or hydration pack, swimwear, cereal bars/nuts/fruit for trail snacks, a camera, sandals or flip-flops, socks, a beach towel, personal hygiene products and personal medication.

avoid heavy items: books, planners, heavy electronics and excess clothing. keep your pack light — less is more.`,
      },
      {
        question: "how does payment work?",
        answer:
          "the investment is R$ 2,700. to confirm your spot, the deposit is R$ 1,250, and the rest can be split into up to 4 interest-free installments or up to 6 with interest, via pix, boleto or credit card.",
      },
      {
        question: "what's the cancellation policy?",
        answer:
          "cancellations must be requested at least 15 days before the contracted services begin; after that, a fee of 50% of the amount paid applies. refunds are issued minus bank transfer fees. no-shows are charged 100% of the contracted services.",
      },
      {
        question: "what are the two possible routes?",
        answer:
          "the two routes are very similar — the difference is which community and which lagoons we visit, depending on which is less crowded in july. in both cases, it's 3 days, 2 nights in hammocks at native families' homes, a Rio Negro crossing and the final arrival at Lagoa do Junco. the guide evaluates this closer to the date and lets us know which one we're doing.",
      },
      {
        question: "will Julia be there on this trip?",
        answer:
          "for this edition i won't be there in person, but you'll be in great hands: Marcella and Salo accompany the group start to finish. they're 24, from Porto Alegre, and live for traveling together — they've already road-tripped across Brazil in a motorhome and spent almost a month in Panama partnering with hotels. Marcella is also a photographer, so you'll leave with amazing photos. and of course, i'll always be available for any questions that come up, before or during the trip 💛",
      },
      {
        question: "is the trip women-only?",
        answer:
          "no — this is one of Julia Paraizo's mixed experiences, and a couple will be hosting.",
      },
    ],
  },
  "atacama-2027": {
    destination: "Atacama Desert, Chile",
    dates: "april 30 – may 6, 2027",
    duration: "6 nights",
    priceDisplay: "R$ 7,500",
    priceInstallments: "",
    tagline:
      "hot springs, colorful valleys, salt flats and a stargazing tour under one of the clearest skies in the world, over 6 nights",
    description:
      "6 nights in the Atacama Desert, staying at CKOI Atacama Lodge, in San Pedro. a route designed for comfort and safety, with excellent food on every excursion: Puritama Hot Springs, Cordillera de la Sal, Valle del Arcoíris, Altiplanic Lagoons, Piedras Rojas, Tatio Geysers, Aguas Calientes Salt Flat and a night of stargazing under one of the clearest skies in the world. a group of 12 girls, accompanied on every excursion by a guide, an assistant and a host.",
    whatsappMessage:
      "Hi Julia! I just read the material about the Atacama trip (april 30 – may 6, 2027) and I want to secure my spot :)",
    paymentMethods: [],
    included: [
      "6 nights of lodging in a double room at CKOI Atacama Lodge",
      "breakfast every day at the hotel",
      "transport from Calama Airport (CJC) to San Pedro de Atacama",
      "all excursions (except entrance fees for some parks, paid on-site)",
      "food and drinks on excursions",
    ],
    notIncluded: [
      "airfare",
      "park entrance fees (best to pay on-site — around 90,000 Chilean pesos total)",
      "travel insurance",
      "free-time meals",
      "anything not listed in \"what's included\"",
    ],
    itinerary: [
      {
        day: 1,
        title: "apr 30 — arrival in Calama",
        description:
          "as soon as you land in Calama, a driver picks you up and takes you to the hotel, in the center of San Pedro de Atacama — no need to wait for everyone to arrive, each of you heads to the hotel as you land. the rest of the day and evening are free to explore the surroundings and the charming town center.",
      },
      {
        day: 2,
        title: "may 1 — Baltinache Hidden Lagoons + Cordillera de la Sal",
        description:
          "after breakfast at the hotel, we head to the Hidden Lagoons, about 60km from San Pedro — time to see the 7 salt lagoons and float in one of them. lunch included. we continue to the Cordillera de la Sal, part of the Valle de la Luna where the abandoned bus is, with a photo stop and a short hike. dinner free.",
      },
      {
        day: 3,
        title: "may 2 — Puritama Hot Springs + Valle del Arcoíris",
        description:
          "Puritama's hot springs, an 8-pool complex nestled in the Andes, with temperatures between 27 and 30 degrees. brunch included, and in the afternoon a visit to the Yerbas Buenas archaeological reserve with a lesson on ancestral Atacameño culture, followed by the Valle del Arcoíris tour, with its colorful rock formations.",
      },
      {
        day: 4,
        title: "may 3 — Altiplanic Lagoons + Piedras Rojas",
        description:
          "a full day surrounded by volcanoes, with distinct ecological zones to observe fauna, flora and geology. a hike through Piedras Rojas and the Altiplanic Lagoons, with a wine-paired lunch in the village of Socaire. evening free.",
      },
      {
        day: 5,
        title: "may 4 — Tatio Geysers + Geiser Blanco + Guatín",
        description:
          "a morning that starts early (and cold) at the El Tatio geothermal field, over 4,000 meters above sea level, with around 80 geysers. breakfast at Geiser Blanco and a visit to Guatín canyon, with its giant cacti. rest of the day free.",
      },
      {
        day: 6,
        title: "may 5 — Salt Flats Route + stargazing tour",
        description:
          "a trip toward the border between Chile, Argentina and Bolivia, with volcanic landscapes, the Monjes de la Pacana and the Quepiaco bofedal, finishing with a lovely lunch. at night, at 7:45pm, a stargazing tour guided by an astronomer, observing constellations, nebulae and planets with the naked eye and by telescope — a souvenir photo included.",
      },
    ],
    accommodation:
      "CKOI Atacama Lodge, in the center of San Pedro de Atacama, in a double room. meals on excursions are prepared with care, fresh ingredients and vegetarian and vegan options — you'll fill out a questionnaire about dietary restrictions before the trip.",
    forWhom: [
      {
        title: "those who want comfort and safety",
        description:
          "the whole team (host, guide and assistant) is trained in remote and mountain first aid, with vehicles under regular maintenance.",
      },
      {
        title: "those who want the Atacama without the usual tourist crowds",
        description:
          "excursion times are only announced the day before, to avoid the regular agencies' tourist groups — and the food at every stop is a real treat.",
      },
      {
        title: "those who don't mind acclimating gradually",
        description:
          "the route is designed for proper acclimatization, preventing altitude sickness symptoms — excursions climb gradually up to the 4,800m of the stargazing tour.",
      },
    ],
    faqs: [
      {
        question: "what should i bring?",
        answer:
          "swimwear, flip-flops, sunglasses, sunscreen and a windbreaker — temperatures vary a lot between day and night in the desert.",
      },
      {
        question: "how does payment work?",
        answer:
          "the package costs R$ 7,500. on top of that, you'll need to bring cash for park entrance fees not included in the package, around 90,000 Chilean pesos total over the trip.",
      },
      {
        question: "can the itinerary change?",
        answer:
          "yes — desert weather changes suddenly, and rain, snow or strong winds can close roads and parks. in those cases, excursions may be rescheduled or the route changed to another available spot. the order of excursions can also change based on park entrance availability.",
      },
      {
        question: "what about altitude sickness?",
        answer:
          "the route is designed for proper acclimatization, climbing gradually toward the highest points (the stargazing tour reaches 4,800m). still, it's important to stay well hydrated and take it easy in the first few days.",
      },
      {
        question: "will Julia be there on this trip?",
        answer:
          "for this edition i won't be there in person, but you'll be in great hands: Marcella accompanies the group on every excursion, along with a local guide and assistant. Marcella is 24, from Porto Alegre, fell in love with the Atacama on a past trip — and came back with everything organized with a lot of care to bring a group of women. and of course, i'll always be available for any questions that come up, before or during the trip 💛",
      },
      {
        question: "is the trip women-only?",
        answer: "yes, all Julia Paraizo experiences are exclusively for women.",
      },
    ],
  },
  "amazonia-casais-2026": {
    title: "Amazon — Couples Trip",
    destination: "Amazon, Brazil",
    dates: "april 3–7, 2027",
    duration: "5 days",
    priceDisplay: "R$ 5,400",
    priceInstallments:
      "payment via pix or credit card in up to 3 interest-free installments, directly through the hotel's link (with receipt and contract)",
    tagline:
      "swim with pink river dolphins, dinner in the jungle and a full night camping in the forest — as a couple",
    description:
      "a special edition designed for couples: 5 days at the Amazônia Jungle Hotel, on the banks of the Rio Negro, to experience the forest together. caiman spotting, a guided jungle trek, swimming with pink river dolphins, a visit to an indigenous community and a riverside family's home, piranha and pirarucu fishing, tree planting and a full night camping in the jungle, in hanging hammocks with dinner by the campfire. up to 10 couples, with the hotel's full infrastructure at your disposal.",
    whatsappMessage:
      "Hi Julia! I just read the material about the Amazon Couples Trip (april 3–7, 2027) and I want to secure my spot :)",
    paymentMethods: ["pix", "credit card"],
    included: [
      "round-trip transfer (we pick you up at the airport or any hotel in Manaus' urban perimeter)",
      "full board: breakfast, lunch, dinner, juices and desserts every day",
      "lodging with the hotel's full infrastructure: wi-fi, restaurant and bar, two pools, hammocks, tv/video room, game room, sand court (volleyball, soccer and beach tennis), soccer field, nature trail, conventional power + generator, and fully sanitized bed and bath linens",
      "jungle excursions: caiman spotting, guided trek, swimming with pink river dolphins, piranha and pirarucu fishing",
      "visit to an indigenous community, a riverside family's home and the Catalão floating community",
      "1 night camping in the jungle in hanging hammocks with a campfire dinner",
      "planting an Amazonian tree sapling",
    ],
    notIncluded: [
      "airfare to Manaus",
      "alcoholic drinks and personal items",
      "tips and optional activities not listed in the itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "arrival + welcome tour + caiman spotting",
        description:
          "departure from Manaus to the hotel (we pick you up at the airport or any hotel in the urban perimeter). check-in from 10am, with a welcome drink and a tour of the hotel and its fruit trees — including the Sumaúma tree and the ruins of the former Ariaú Towers. the first excursion starts at 3:30pm, so plan to reach the airport before 1pm. caiman spotting in the afternoon. dinner at the hotel.",
      },
      {
        day: 2,
        title: "jungle trek + piranha fishing",
        description:
          "breakfast, then a guided jungle trek with a native guide along little-explored trails. piranha fishing in the afternoon — if you'd like, the chef will prepare your catch for dinner.",
      },
      {
        day: 3,
        title: "swimming with dolphins + indigenous community + riverside home",
        description:
          "a morning swimming with pink river dolphins, always accompanied by an instructor. a visit to an indigenous community and, in the afternoon, to a riverside family's home. later, the meeting of the waters, recreational pirarucu fishing and a visit to the Catalão floating community.",
      },
      {
        day: 4,
        title: "sunrise birdwatching + overnight camping in the jungle",
        description:
          "the day starts at 5am with a sunrise and birdwatching excursion. at night, departure for the package's most immersive experience: camping overnight in the forest, in hanging hammocks, with dinner prepared over a campfire.",
      },
      {
        day: 5,
        title: "tree planting + departure",
        description:
          "breakfast, then planting an Amazonian tree sapling, symbolizing a commitment to preserving the forest. checkout at 9am and transfer back to Manaus (airport or any hotel in the urban perimeter) — flights from 1pm onward.",
      },
    ],
    accommodation: `the hotel's full infrastructure at the couple's disposal: wi-fi, restaurant and bar, two pools, hammocks, tv/video room, game room, sand court (volleyball, soccer and beach tennis), soccer field, nature trail, conventional power + generator, and fully sanitized bed and bath linens.

on the night of camping in the jungle, lodging is replaced by the camping experience, in hanging hammocks set up by the guides.

important: excursions and the schedule are subject to change depending on the river's season — high or low water — or bad weather.`,
    forWhom: [
      {
        title: "couples who want an adventure together",
        description:
          "swimming with pink river dolphins, dinner in the jungle and a full night camping in the Amazon rainforest — an edition designed especially for couples.",
      },
      {
        title: "those who want to break routine in good company",
        description:
          "five disconnected days, between trails, rivers and riverside communities, with the hotel's full infrastructure to relax after each excursion.",
      },
      {
        title: "those who want to see Brazil from a different angle",
        description:
          "the most biodiverse forest on the planet is right here, and experiencing it as a couple completely changes your relationship with your own country.",
      },
    ],
    faqs: [
      {
        question: "how does payment work?",
        answer:
          "the investment is R$ 5,400 per person. payment can be made via pix or credit card in up to 3 interest-free installments, directly through the hotel's link (with receipt and contract).",
      },
      {
        question: "what's the cancellation policy?",
        answer:
          "up to 4 days before check-in, full refund of the amount invested in case of cancellation.",
      },
      {
        question: "is food included?",
        answer:
          "yes! the package includes full board — breakfast, lunch, dinner, juices and desserts every day, including during the night of camping in the jungle.",
      },
      {
        question: "is this trip women-only?",
        answer:
          "no — this is a special edition designed for couples, with an itinerary adapted to experience the Amazon together. Julia Paraizo's other trips remain exclusively for women.",
      },
      {
        question: "who are the hosts?",
        answer:
          "Marcella and Salo accompany the group start to finish. they're 24, from Porto Alegre, and live for traveling together — they've already road-tripped across Brazil in a motorhome and spent almost a month in Panama partnering with hotels. Marcella is also a photographer, so the two of you will leave with amazing photos.",
      },
    ],
  },
  "cote-dazur-nice": {
    title: "Côte d'Azur Girls Trip",
    destination: "Nice, French Riviera — France",
    dates: "july 25–31, 2027",
    duration: "7 days · 6 nights",
    priceDisplay: "€ 1,600",
    priceInstallments:
      "€ 500 non-refundable deposit to secure your spot — € 1,100 balance due 60 days before the trip",
    urgentBadge: "6 spots",
    tagline:
      "the french riviera with a fixed base in nice — monaco, cannes, èze and saint-tropez by boat, over 7 days",
    description:
      "seven days on the french riviera with a fixed base in Nice, in a closed group of 7 — 6 open spots + me as host. you unpack once, that's it: no switching hotels, no dragging luggage through train stations, no renting a car. every day is a different destination (Monaco, Cannes, Èze, Villefranche, Saint-Tropez by boat) and every night we come back to the same apartment in Nice. i handle everything — lodging, transport, reservations, the itinerary — and i'll capture it all in photo and video for you to take home.",
    whatsappMessage:
      "Hi Julia! I just read the material about the Côte d'Azur Girls Trip (july 25–31, 2027) and I want to secure my spot :)",
    paymentMethods: ["credit card", "Wise/Nomad"],
    included: [
      "6 nights in a full apartment in central Nice (shared bedrooms)",
      "breakfast every day",
      "7-day regional transport pass (unlimited trains and buses across the riviera)",
      "airport ↔ city center tram, round trip",
      "round-trip boat Nice ↔ Saint-Tropez",
      "ferry to the Lérins Islands",
      "Èze Exotic Garden entrance",
      "Monte-Carlo Casino entrance",
      "3 group dinners (tuesday, friday and saturday)",
      "city tourist tax",
      "all reservations booked in advance",
      "photo and video coverage of the trip",
    ],
    notIncluded: [
      "international airfare",
      "travel insurance (mandatory — proof required before the balance is due)",
      "lunches (~€12 to €30 per day)",
      "the 3 free-choice dinners (sunday, monday and thursday)",
      "drinks, coffees and apéros",
      "personal expenses, shopping and tips",
      "estimated personal spend for the week: ~€450 per person",
    ],
    itinerary: [
      {
        day: 1,
        title: "sunday, 7/25 — arrival in nice",
        description:
          "direct tram from the airport to the city center. check-in at the apartment, a first walk through Vieux Nice and sunset at the Colline du Château. welcome dinner at L'Écurie (on your own). day zero of commuting.",
      },
      {
        day: 2,
        title: "monday, 7/26 — villefranche-sur-mer",
        description:
          "a seven-minute train ride. beach, colorful harbor and a seaside lunch at Alma Goût Méditerranée (on your own). free afternoon. at night, apéro and a cheese board at the apartment — we cook together.",
      },
      {
        day: 3,
        title: "tuesday, 7/27 — all of nice, on foot",
        description:
          "the Cours Saleya flower market in the morning, the Promenade des Anglais, the beach and Port Lympia in the late afternoon. group dinner at Chez Acchiardo (included) — a family restaurant since 1927, the classic niçoise spot.",
      },
      {
        day: 4,
        title: "wednesday, 7/28 — monaco",
        description:
          "a twenty-minute train ride. Monte-Carlo, the Exotic Garden (included), Port Hercule and the Monte-Carlo Casino in the late afternoon (entrance included). fresh pasta lunch at the Condamine market.",
      },
      {
        day: 5,
        title: "thursday, 7/29 — èze village",
        description:
          "the only destination without a train: a mountain bus up to the medieval village perched 427m above the sea. the Exotic Garden with the riviera's best view, lunch on the terrace. free afternoon back in Nice for the beach, shopping or a spa. optional group dinner at Lu Fran Calin.",
      },
      {
        day: 6,
        title: "friday, 7/30 — cannes + the lérins islands",
        description:
          "a thirty-minute train ride. La Croisette, the Forville market, the old town of Le Suquet and a ferry to Île Sainte-Marguerite (included) — the itinerary's real beach day. group dinner at Le Rendez-Vous des Copains (included).",
      },
      {
        day: 7,
        title: "saturday, 7/31 — saint-tropez by boat",
        description:
          "boat departing from the port of Nice at 9am, two and a half hours hugging the riviera coastline (included). a full day in Saint-Tropez: the Place des Lices market, the harbor, the beach. return at 7pm. farewell dinner at La Maison de Marie (included).",
      },
    ],
    accommodation:
      "a full 4-bedroom apartment in central Nice, between Vieux Nice and the train station — walking distance to everything and 5 minutes from the train that connects the whole riviera. shared women-only bedrooms, a fully equipped kitchen for breakfasts and a living room for the group's apéros. you unpack once and that's it.",
    forWhom: [
      {
        title: "women who want the riviera without the stress",
        description:
          "for those who want the real Côte d'Azur — medieval village, Monte-Carlo, french market, beach — without driving through the mountains, hunting for parking or repacking five times. all by train and on foot, at a pace that alternates full days with breathing room.",
      },
    ],
    faqs: [
      {
        question: "do i need to speak french or english?",
        answer: "no, i handle all the communication, reservations and ticket purchases.",
      },
      {
        question: "how much extra cash should i bring?",
        answer:
          "around €450 for lunches, the 3 free-choice dinners and drinks. you can spend less by eating at markets and the beach.",
      },
      {
        question: "will we need a car?",
        answer:
          "no. the whole itinerary runs on train, bus, boat and foot — that's exactly why the base is fixed in Nice.",
      },
      {
        question: "what if i don't want to join a particular outing?",
        answer:
          "no problem, the base is the same every day. you can stay at the beach while the group heads to Monaco.",
      },
      {
        question: "how does payment work?",
        answer:
          "€500 deposit at sign-up (non-refundable) and €1,100 due 60 days before the trip (may 26, 2027).",
      },
      {
        question: "what if i back out?",
        answer:
          "the deposit isn't refunded. the balance is only refunded if your spot gets resold.",
      },
      {
        question: "what if the trip doesn't reach the minimum group size?",
        answer:
          "if we don't have 4 women signed up by 60 days before the trip (may 26, 2027), i'll cancel and refund 100% of what was paid, deposit included.",
      },
      {
        question: "is the trip safe for solo travelers?",
        answer:
          "yes, a closed group of women, a single home base and me with you for all 7 days.",
      },
    ],
  },
  "surfcamp-ubatuba-praiah": {
    title: "Ubatuba Surfcamp × Praiah Surf",
    destination: "Ubatuba, São Paulo, Brazil",
    dates: "january 22–24, 2027",
    duration: "3 days · 2 nights",
    priceDisplay: "R$ 2,500",
    priceInstallments:
      "R$ 2,500 via Pix or R$ 2,800 by card — split into up to 4x of R$ 700",
    tagline:
      "3 days of surf in Ubatuba, with yoga, recovery and video analysis, in partnership with Praiah Surf",
    description:
      "3 days in Ubatuba, in collaboration with Praiah Surf and Mariana Scherer. lodging at a guesthouse in the city's best neighborhood, close to the top restaurants and Rua Guarani. surf lessons for every level — from those who've never surfed to those who already surf and want to improve — with a yoga session, recovery and video analysis of every session, so you can correct your technique and see your progress. a welcome dinner on the first night, plenty of surf, and the trip's photos and videos to take home.",
    whatsappMessage:
      "Hi Julia! I just read the material about the Ubatuba Surfcamp (january 22–24, 2027) and I want to secure my spot :)",
    paymentMethods: ["Pix", "credit card"],
    included: [
      "2 nights of lodging at a guesthouse in Ubatuba, in the city's best neighborhood",
      "breakfast included",
      "welcome dinner on the first night",
      "surf lessons with equipment included (board, leash and rash guard)",
      "yoga session",
      "recovery session",
      "video analysis of every surf session",
      "photos and videos of the trip",
    ],
    notIncluded: [
      "transport to Ubatuba",
      "meals other than those listed (lunches, other dinners, drinks)",
      "personal expenses and tips",
      "travel insurance",
    ],
    itinerary: [
      {
        day: 1,
        title: "friday, 1/22 — arrival + welcome dinner",
        description:
          "check-in at the guesthouse throughout the day. at 8pm, a welcome and get-to-know-you dinner at one of Ubatuba's best restaurants — a great way for everyone to meet before the surf begins.",
      },
      {
        day: 2,
        title: "saturday, 1/23 — yoga + surf + recovery",
        description:
          "6am: a 1-hour yoga session. breakfast at the guesthouse at 7:30am. surf lesson from 8:30 to 10am and 10:30 to 11:30am, with a 30-minute rest and hydration break in between. in the afternoon, video analysis of the sessions and recovery (time TBD).",
      },
      {
        day: 3,
        title: "sunday, 1/24 — surf + return",
        description:
          "breakfast at the guesthouse at 7:30am. surf lesson (beach TBD) from 8:30 to 10am and 10:30 to 11:30am, with a 30-minute rest and hydration break in between. end of the surfcamp's activities.",
      },
    ],
    accommodation:
      "a guesthouse in Ubatuba's best neighborhood, close to the top restaurants and Rua Guarani, the city's liveliest spot. rooms with full structure and comfort, with breakfast included.",
    forWhom: [
      {
        title: "those who've never surfed",
        description:
          "our instructors are ready to teach from the very first steps, always respecting each woman's own pace.",
      },
      {
        title: "surfers looking for independence",
        description:
          "beaches chosen with priority on wave quality and safety, at a pace designed to build your confidence in the water on your own.",
      },
      {
        title: "intermediate surfers who want to improve",
        description:
          "video analysis of every session, to correct and teach the right movements so you can see your progress up close.",
      },
    ],
    faqs: [
      {
        question: "i'd love to learn but have never surfed before. can i still join?",
        answer:
          "of course! our surfcamp is perfect for beginners and anyone who wants to learn from scratch. our instructors are ready to teach from the very first steps, always respecting each woman's own pace.",
      },
      {
        question: "i don't have a board. do you provide all the equipment?",
        answer:
          "yes, we provide all the equipment needed for surfing, like boards, leashes and rash guards. we have boards for every level.",
      },
      {
        question: "what if i have my own board? can i bring it?",
        answer:
          "sure. if you have your own equipment, even better — you'll improve on your own board. but if it doesn't work out, we still have our boards to match your level.",
      },
      {
        question: "i'd love to go with my friends! do you offer group discounts?",
        answer:
          "we do. the discount varies depending on the group size — just get in touch with us for more information.",
      },
      {
        question: "i'd like to bring my partner along, but they're not interested in the surfcamp activities. can i bring a companion?",
        answer:
          "sure. the rate for companions is R$500, including lodging (in the same room) and the welcome dinner.",
      },
      {
        question: "what happens if the weather (or wave) forecast is really bad?",
        answer:
          "if the forecast looks really bad, we'll reschedule the surfcamp to a date that works for everyone. if we can't reach an agreement, a full refund is issued to anyone unavailable on the new date.",
      },
      {
        question: "will Julia be there on this trip?",
        answer:
          "this edition is in partnership with Praiah Surf: Mariana Scherer accompanies the group from start to finish, along with the school's instructors. i handle all the organization and communication, and i'm always available for any questions that come up, before or during the trip 💛",
      },
      {
        question: "is the trip women-only?",
        answer:
          "yes, all Julia Paraizo experiences are exclusively for women.",
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
