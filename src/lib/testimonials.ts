export type Testimonial = {
  name: string;
  destination: string;
  context: string;
  quote: string;
  contextEn: string;
  quoteEn: string;
  photo?: string;
  priority?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Safira Elias",
    destination: "amazonia",
    context: "grupo Amazônia, maio de 2026",
    quote: `A viagem à Amazónia foi uma experiência verdadeiramente transformadora para mim. Foi a minha primeira viagem sozinha e, apesar de ter ido cheia de receios por não conhecer ninguém, acabou por ser uma das melhores decisões que tomei. Foi uma experiência verdadeiramente surreal. Ao longo desta aventura, não só conheci lugares incríveis, como também pessoas inspiradoras, com histórias de vida que me tocaram profundamente. A partilha, as conversas, os momentos vividos em conjunto e as ligações que se criaram fizeram toda a diferença.

Voltei para casa a sentir-me realizada, mais segura de mim mesma e com a sensação de que sou capaz de muito mais do que imaginava. Aquilo que começou com medo e incerteza acabou por se tornar numa das experiências mais enriquecedoras da minha vida. Foi um desafio pessoal enorme, mas compensou cada receio que tive antes de partir. A qualquer mulher que queira crescer, sair da sua zona de conforto e viver algo verdadeiramente especial, permita-se também`,
    contextEn: "Amazon group, may 2026",
    quoteEn: `The trip to the Amazon was a truly transformative experience for me. It was my first trip alone and, even though I went full of fears for not knowing anyone, it turned out to be one of the best decisions I've ever made. It was a truly surreal experience. Throughout this adventure, I not only got to know incredible places, but also inspiring people, with life stories that touched me deeply. The sharing, the conversations, the moments lived together and the connections that formed made all the difference.

I came home feeling fulfilled, more sure of myself and with the sense that I'm capable of much more than I imagined. What began with fear and uncertainty ended up becoming one of the most enriching experiences of my life. It was a huge personal challenge, but it made up for every fear I had before leaving. To any woman who wants to grow, step out of her comfort zone and live something truly special: allow yourself too`,
    photo: "/images/testimonials/safira-amazonia.jpg",
  },
  {
    name: "Bianca Tognasca",
    destination: "amazonia",
    context: "grupo Amazônia, maio de 2026",
    quote: `Viajar para a Amazônia foi uma das experiências mais incríveis que já vivi. Desde o começo, tudo foi muito bem organizado e eu realmente só precisei me preocupar em aproveitar a viagem, porque cada detalhe já estava planejado pela Ju. A escolha do Amazon Jungle Hotel foi perfeita, e o cuidado de toda a equipe fez com que eu me sentisse acolhida o tempo todo, como se estivesse entre pessoas da minha própria família.

O que mais me marcou, porém, foi a experiência como um todo. Sou uma pessoa bem tímida e introvertida, então viajar com um grupo de pessoas que eu nunca tinha visto antes me deixava um pouco apreensiva. Mas logo no primeiro dia me senti completamente à vontade. Fiz amizades, dei muitas risadas, vivi momentos inesquecíveis e criei uma conexão muito especial com as meninas. Foi uma viagem leve, segura e cheia de carinho em cada detalhe. Quando chegou a hora de ir embora, eu chorei porque realmente não queria que acabasse. Se pudesse, teria ficado muito mais tempo. É uma daquelas experiências que ficam para sempre na memória e no coração.`,
    contextEn: "Amazon group, may 2026",
    quoteEn: `Traveling to the Amazon was one of the most incredible experiences I've ever lived. From the start, everything was very well organized and I really only had to worry about enjoying the trip, because every detail had already been planned by Ju. The choice of the Amazon Jungle Hotel was perfect, and the care of the whole team made me feel welcomed the entire time, as if I were among people from my own family.

What struck me most, though, was the experience as a whole. I'm a pretty shy and introverted person, so traveling with a group of people I had never seen before made me a little apprehensive. But on the very first day I felt completely at ease. I made friends, laughed a lot, lived unforgettable moments and created a very special connection with the girls. It was a light, safe trip, full of care in every detail. When it was time to leave, I cried because I really didn't want it to end. If I could, I would have stayed much longer. It's one of those experiences that stay in your memory and heart forever.`,
    photo: "/images/testimonials/bianca-amazonia.jpg",
  },
  {
    name: "Giovana Santarem",
    destination: "amazonia",
    context: "grupo Amazônia, maio de 2026",
    quote: `Viajar com a Júlia para a Amazônia foi uma das experiências mais marcantes que já vivi. Mesmo sem conhecer nenhuma das meninas antes da viagem, me senti acolhida desde o primeiro momento e voltei com amizades que vou levar para a vida.

A organização da Júlia foi impecável e isso fez toda a diferença, conseguimos aproveitar cada segundo da viagem, sem preocupações.

Foi um momento muito importante para mim, de conexão, aprendizado e muitas memórias inesquecíveis. Sou muito grata por tudo e, sem dúvida, viajaria com a Ju novamente. Recomendo de olhos fechados!`,
    contextEn: "Amazon group, may 2026",
    quoteEn: `Traveling with Júlia to the Amazon was one of the most remarkable experiences I've ever lived. Even without knowing any of the girls before the trip, I felt welcomed from the first moment and came back with friendships I'll carry for life.

Júlia's organization was impeccable and that made all the difference — we got to enjoy every second of the trip, without worries.

It was a very important moment for me, of connection, learning and many unforgettable memories. I'm very grateful for everything and, without a doubt, I would travel with Ju again. I recommend her with my eyes closed!`,
    photo: "/images/testimonials/giovana-amazonia.jpg",
  },
  {
    name: "Maria Clara Stoll",
    destination: "amazonia",
    context: "grupo Amazônia, maio de 2026",
    quote: `fechei a viagem pra amazônia e com certeza foi uma das experiência mais encantadoras que já vivi! a julia foi extremamente prestativa, ofereceu todo o suporte e esclarecimentos necessários.

estar em um grupo só de meninas fez com que a viagem fosse ainda mais especial. nos acolhemos, nos conectamos e nos divertimos muito. faria de novo mil e uma vezes!!! eterna gratidão`,
    contextEn: "Amazon group, may 2026",
    quoteEn: `i booked the trip to the amazon and it was certainly one of the most enchanting experiences i've ever lived! julia was extremely helpful, offering all the support and answers i needed.

being in a girls-only group made the trip even more special. we welcomed each other, connected and had so much fun. i'd do it again a thousand and one times!!! eternal gratitude`,
    photo: "/images/testimonials/clara-amazonia.jpg",
  },
  {
    name: "Ayla Camargo",
    destination: "guatemala",
    context: "grupo Guatemala, março de 2026",
    quote: `Essa viagem pra Guatemala foi simplesmente incrível. Me conectar com 10 meninas que eu nunca tinha visto pessoalmente antes foi, ao mesmo tempo, bizarro e muito especial. A organização de vocês e o cuidado em fazer tudo ser perfeito pra gente viver a melhor experiência fizeram toda a diferença. Volto com muito mais do que memórias… agora tenho não só companheiras de viagem pra vida, mas amigas de verdade. Já tô morrendo de saudade de todas e contando os dias pra próxima.`,
    contextEn: "Guatemala group, march 2026",
    quoteEn: `This trip to Guatemala was simply incredible. Connecting with 10 girls I had never seen in person before was, at the same time, bizarre and very special. Your organization and the care in making everything perfect so we could live the best experience made all the difference. I come back with much more than memories… now I have not only travel companions for life, but true friends. I'm already missing everyone so much and counting the days until the next one.`,
    photo: "/images/testimonials/ayla-guatemala.jpg",
  },
  {
    name: "Giovana Pedrosa",
    destination: "lencois",
    context: "grupo Lençóis Maranhenses, maio de 2026",
    quote: `Eu viajei com a ju e outras 13 meninas para o Maranhão em maio de 2026. Foi uma das melhores experiências da vida! Além da experiência da viagem, fui bem acolhida por todas e me senti muito segura o tempo todo. O roteiro foi bem explicado e ela estava sempre disponivel para tirar nossas dúvidas. Recomendei pra todas as minhas amigas❤️❤️`,
    contextEn: "Lençóis Maranhenses group, may 2026",
    quoteEn: `I traveled with Ju and 13 other girls to Maranhão in may 2026. It was one of the best experiences of my life! Beyond the trip itself, I was warmly welcomed by everyone and felt very safe the whole time. The itinerary was well explained and she was always available to answer our questions. I've recommended her to all my friends❤️❤️`,
    photo: "/images/testimonials/giovana-lencois.jpg",
  },
  {
    name: "Ayla Neves",
    destination: "lencois",
    context: "grupo Lençóis Maranhenses, maio de 2026",
    quote: `Fiz meu primeiro trekking com a Julia para os Lençois Maranhenses, numa passagem de 3 dias com 12 garotas desconhecidas. Tudo nessa experiência poderia ter acontecido totalmente diferente, mas me fez voltar totalmente realizada e feliz com as novas conexões. A Julia faz questão de interagir e criar ligas entre todas as meninas da viagem, o que torna uma experiência única pra quem na vida adulta busca conhecer pessoas novas de diferentes vidas e ciclos sociais. Tivemos guias incríveis que acompanharam a gente por toda a viagem de forma respeitosa e acolhedora. 10/10`,
    contextEn: "Lençóis Maranhenses group, may 2026",
    quoteEn: `I did my first trek with Julia to the Lençóis Maranhenses, on a 3-day passage with 12 girls I didn't know. Everything in this experience could have gone completely differently, but it sent me home totally fulfilled and happy with the new connections. Julia makes a point of interacting and creating bonds among all the girls on the trip, which makes it a unique experience for anyone who, in adult life, is looking to meet new people from different lives and social circles. We had incredible guides who accompanied us throughout the trip in a respectful and welcoming way. 10/10`,
    photo: "/images/testimonials/ayla-lencois.jpg",
  },
  {
    name: "Amanda Mendes",
    destination: "amazonia",
    context: "grupo Amazônia, maio de 2026",
    quote: `Viajei para a Amazonia com a Julia e foi uma experiência maravilhosa do começo ao fim. A organização do roteiro e todo o cuidado no decorrer da viagem foi um diferencial. Foi a viagem mais distante que eu tinha feito sozinha e me senti muito segura e acolhida.`,
    contextEn: "Amazon group, may 2026",
    quoteEn: `I traveled to the Amazon with Julia and it was a wonderful experience from beginning to end. The organization of the itinerary and all the care throughout the trip made all the difference. It was the farthest trip I had ever taken on my own and I felt very safe and welcomed.`,
    photo: "/images/testimonials/amanda-amazonia.jpg",
  },
  {
    name: "Mariana Scherer",
    destination: "lencois",
    context: "grupo Lençóis Maranhenses, maio de 2026",
    quote: `Viajar com a Ju foi uma das melhores decisões que tomei. Me senti segura em todos os momentos, conheci mulheres incríveis e vivi experiências que provavelmente não teria viajando completamente sozinha. A experiencia ja era demais, e ir pra conhecer as meninas fez tudo tornar mais especial ainda, com ctz esta no meu top 3 viagens e estou animada pra próxima! ♥️`,
    contextEn: "Lençóis Maranhenses group, may 2026",
    quoteEn: `Traveling with Ju was one of the best decisions I've ever made. I felt safe at every moment, met incredible women and lived experiences I probably wouldn't have had traveling completely on my own. The experience was already amazing, and going to meet the girls made everything even more special — it's definitely in my top 3 trips and I'm excited for the next one! ♥️`,
    photo: "/images/testimonials/mariana-lencois.jpg",
  },
  {
    name: "Manuela Barbosa",
    destination: "guatemala",
    context: "grupo Guatemala, março de 2026",
    quote: `Essa viagem para mim foi sobre encontros, um grupo incrível de meninas, a conexão foi instantânea! Lugares incríveis que fomos, muita cultura, pessoas que nos receberam de coração aberto, comida muito gostosa e bem temperada! Roteiro maravilhoso!! Ja planejando de marcar a próxima viagem!`,
    contextEn: "Guatemala group, march 2026",
    quoteEn: `This trip for me was about encounters, an incredible group of girls, the connection was instant! Amazing places we went to, so much culture, people who welcomed us with open hearts, really tasty and well-seasoned food! Wonderful itinerary!! Already planning to book the next trip!`,
    photo: "/images/testimonials/manuela-guatemala.jpg",
  },
  {
    name: "Allegra Rossini",
    destination: "amazonia",
    context: "grupo Amazônia, maio de 2026",
    priority: true,
    quote: `desde o momento que descobri a possibilidade de ir para a Amazônia com um grupo de mulheres, não quis saber de outra coisa. desde o primeiro contato, a Júlia tomou conta de tudo e me tranquilizou sobre todas as etapas.

durante a viagem, fui surpreendida com a organização e qualidade, superando muito minhas expectativas.

fiz amizades que vou levar para a vida e não vejo a hora de embarcar na próxima aventura!`,
    contextEn: "Amazon group, may 2026",
    quoteEn: `from the moment I found out about the chance to go to the Amazon with a group of women, I didn't want anything else. from the very first contact, Júlia took care of everything and reassured me about every step.

during the trip, I was surprised by the organization and quality, which went far beyond my expectations.

I made friendships I'll carry for life and can't wait to embark on the next adventure!`,
    photo: "/images/testimonials/allegra-amazonia.jpg",
  },
  {
    name: "Laura Miano",
    destination: "guatemala",
    context: "grupo Guatemala, março de 2026",
    quote: `a viagem pra Guatemala com a Júlia foi muito especial! foi a primeira vez que fiz um trekking na vida e me senti muito acolhida por ela e todo o grupo de meninas que foram, e levo as amizades que fiz na viagem comigo até hoje.`,
    contextEn: "Guatemala group, march 2026",
    quoteEn: `the trip to Guatemala with Júlia was very special! it was the first time I ever did a trek in my life and I felt very welcomed by her and the whole group of girls who went, and I carry the friendships I made on the trip with me to this day.`,
    photo: "/images/testimonials/laura-guatemala.jpg",
  },
  {
    name: "Julia Lucena",
    destination: "madeira",
    context: "grupo Ilha da Madeira, Portugal, 2026",
    priority: true,
    quote: `essa foi uma das melhores viagens que já fiz na vida! a Ju montou o roteiro perfeito, parecia que eu estava num filme. as companhias também foram muito boas, de início fiquei com "medo" de viajar com algumas pessoas que eu não conhecia mas nos demos tão bem e viramos todas amigas! já tô de olho nas próximas viagens!!`,
    contextEn: "Madeira Island group, Portugal, 2026",
    quoteEn: `this was one of the best trips I've ever taken in my life! Ju put together the perfect itinerary, it felt like I was in a movie. the company was also great — at first I was a little "scared" of traveling with people I didn't know but we got along so well and became friends! I'm already eyeing the next trips!!`,
    photo: "/images/testimonials/julia-madeira.jpg",
  },
];
