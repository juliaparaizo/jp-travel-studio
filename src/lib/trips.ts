export type ForWhom = {
  title: string;
  description: string;
};

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Trip = {
  slug: string;
  title: string;
  destination: string;
  cardImage: string;
  heroImage: string;
  heroImages?: string[];
  dates: string;
  dateForSort: string;
  /** ISO end date ("YYYY-MM-DD") — the trip's actual last day, used by the availability date filter. */
  dateForSortEnd: string;
  duration: string;
  priceDisplay: string;
  priceValue: number;
  national: boolean;
  priceInstallments: string;
  agency: string;
  tagline: string;
  description: string;
  urgentBadge?: string;
  whatsappMessage: string;
  paymentMethods: string[];
  included: string[];
  notIncluded: string[];
  itinerary: ItineraryDay[];
  accommodation: string;
  accommodationImages?: string[];
  forWhom: ForWhom[];
  travelRequirements?: string;
  faqs: Faq[];
  pending?: boolean;
  isPlaceholderImage?: boolean;
  soldOut?: boolean;
  hidden?: boolean;
};

export const whatsappNumber = "16022065421";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const trips: Trip[] = [
  {
    slug: "lencois-maranhenses",
    hidden: true,
    title: "Lençóis Maranhenses",
    destination: "Lençóis Maranhenses, Maranhão",
    cardImage: "/images/trips/lencois-maranhenses/hero/hero-1.jpg",
    heroImage: "/images/trips/lencois-maranhenses/hero/hero-1.jpg",
    heroImages: [
      "/images/trips/lencois-maranhenses/hero/hero-1.jpg",
      "/images/trips/lencois-maranhenses/hero/hero-2.jpg",
      "/images/trips/lencois-maranhenses/hero/hero-3.jpg",
      "/images/trips/lencois-maranhenses/hero/hero-4.jpg",
      "/images/trips/lencois-maranhenses/hero/hero-5.jpg",
      "/images/trips/lencois-maranhenses/hero/hero-6.jpg",
    ],
    dates: "04 a 07 de setembro de 2026",
    dateForSort: "2026-09-04",
    dateForSortEnd: "2026-09-07",
    duration: "4 dias",
    priceDisplay: "R$ 2.500",
    priceValue: 2500,
    national: true,
    priceInstallments:
      "entrada de R$ 1.250 para reservar — restante em até 4x sem juros ou 6x com juros",
    agency: "Trilha Ecoaventura",
    tagline:
      "travessia de 3 dias pelas dunas do parque nacional, dormindo em rede na casa de famílias nativas",
    description:
      "4 dias nos lençóis maranhenses com a trilha ecoaventura. chegada em barreirinhas no dia 4 para descansar, já que a busca para a travessia é às 4h da manhã do dia 5. são 3 dias de trekking pelo parque nacional dos lençóis maranhenses, com pernoite em rede na casa de famílias nativas nos oásis baixa grande e queimada dos britos, travessia de rios, banho de lagoa e a imensidão das dunas ao amanhecer. bônus: a viagem cai numa sexta a segunda que já emenda com o feriado de 7 de setembro — dá pra aproveitar o feriado prolongado sem gastar dia de férias. weekendmaxxing nível máximo.",
    urgentBadge: "esgotado",
    soldOut: true,
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a viagem aos Lençóis Maranhenses (4 a 7 de setembro de 2026) e quero garantir minha vaga :)",
    paymentMethods: [
      "dinheiro",
      "pix",
      "transferência bancária",
      "cartão de crédito à vista ou em até 3x",
    ],
    included: [
      "transfer São Luís ↔ Barreirinhas",
      "tour em lancha voadeira com visita à APA Pequenos Lençóis Maranhenses, com paradas em Vassouras e Mandacaru",
      "almoço na praia de Caburé",
      "transporte privado do porto de Atins até a foz do Rio Negro em 4x4",
      "jantar e hospedagem em redário no Oásis Baixa Grande (café da manhã incluso)",
      "almoço, jantar e hospedagem em redário no Oásis Queimada dos Britos (café da manhã incluso)",
      "transporte privado no trecho Betânia/Santo Amaro",
      "transfer Santo Amaro ↔ São Luís",
      "condutor ecológico local, credenciado no ICMBio",
      "seguro viagem individual Porto Seguro",
    ],
    notIncluded: [
      "bebidas",
      "refeições extras nos pontos de apoio (a alimentação inclusa é simples: arroz, feijão, macarrão e proteína animal conforme disponibilidade da família no dia)",
      "pagamento de bebidas às famílias, feito em dinheiro",
      "carregador de bagagem pessoal (1 mochila até 12kg) — R$ 250 a diária",
    ],
    itinerary: [
      {
        day: 1,
        title: "dia 5 — barreirinhas → oásis baixa grande",
        description:
          "saída de Barreirinhas às 8h30 em tour de barco voadeira, com visita à APA Pequenos Lençóis Maranhenses e passagem pelos povoados de Vassouras e Mandacaru. parada para almoço na praia de Caburé. às 13h40 o barco segue para Atins, chegando às 14h. de lá, transporte 4x4 até a foz do Rio Negro (cerca de 1h), seguido de caminhada de 7 a 8km (2 a 3h) até o Oásis Baixa Grande, onde pernoitamos em rede na casa de uma família nativa.",
      },
      {
        day: 2,
        title: "dia 6 — oásis baixa grande → oásis queimada dos britos (10km)",
        description:
          "caminhada com início às 5h30 (café servido às 5h), cerca de 10km em 3 a 4 horas, com o nascer do sol e a travessia do Rio Negro. passagem pela Ponta do Peadouro, região de dunas altas. chegada prevista para 10h30 no povoado, onde ficamos na casa de uma família nativa. das 11h às 15h30, almoço e descanso; às 16h, banho de lagoa e pôr do sol; às 19h, jantar e noite livre.",
      },
      {
        day: 3,
        title: "dia 7 — oásis queimada dos britos → lagoa do junco (14km)",
        description:
          "saída às 3h da manhã (café servido às 2h30), com caminhada de 6 a 9 horas entre trechos a pé e banhos, passando pela lagoa das Cabras e pela lagoa do Junco. chegada prevista para as 10h, seguindo às 10h30 de 4x4 até Santo Amaro. às 13h, retorno para Barreirinhas ou São Luís.",
      },
    ],
    accommodation: `hospedagem em redário na casa de famílias nativas, nos oásis Baixa Grande e Queimada dos Britos — sem luxo, mas com muita hospitalidade. café da manhã incluso nas duas noites.

o Oásis Baixa Grande reúne 6 famílias, com fartura de caju entre agosto e outubro e a tradição da tiquira (aguardente de mandioca) da região. o Oásis Queimada dos Britos é maior, com cerca de 20 famílias e uma pequena escola local.

nos oásis há eletricidade por placas solares. é recomendado pagar as famílias antes de dormir e deixar o material organizado, o que ajuda na agilidade da saída pela madrugada — leve dinheiro trocado.`,
    forWhom: [
      {
        title: "quem quer se desconectar de verdade",
        description:
          "3 dias de trekking pelas dunas do parque nacional, dormindo em rede na casa de famílias nativas, sem pressa e sem luxo.",
      },
      {
        title: "quem gosta de caminhada de verdade",
        description:
          "trechos de 8km, 10km e 14km entre dunas, rios e lagoas, com saídas de madrugada para acompanhar o nascer do sol.",
      },
      {
        title: "quem quer conhecer as comunidades locais",
        description:
          "hospedagem e refeições nas casas de famílias dos oásis Baixa Grande e Queimada dos Britos, com guias locais credenciados no ICMBio.",
      },
    ],
    faqs: [
      {
        question: "o que preciso levar?",
        answer: `lanterna de cabeça, roupas com proteção UV, boné, óculos de sol, protetor solar, capa de chuva, mochila de 30, 40 ou 60L, bastão de caminhada, garrafa de água de 1,5L ou mochila de hidratação, roupa de banho, barra de cereal/castanhas/frutas para lanche na trilha, câmera fotográfica, sandálias ou chinelos, meias, toalha de praia, produtos de higiene pessoal e medicamentos pessoais.

evite itens pesados: livros, agendas, eletrônicos pesados e excesso de roupa. o ideal é carregar cerca de 4kg de mochila — menos é mais.`,
      },
      {
        question: "como funciona o pagamento?",
        answer:
          "a reserva é confirmada com uma entrada de R$ 1.250, via pix ou transferência bancária. o restante pode ser parcelado em até 4x sem juros ou em até 6x com juros no cartão. também aceitamos dinheiro.",
      },
      {
        question: "qual a política de cancelamento?",
        answer:
          "cancelamento com reembolso total até 15 dias antes do início do tour. após esse prazo, o valor antecipado é convertido em crédito válido por 12 meses a partir da data do cancelamento. em caso de desistência durante o tour, não há reembolso de nenhum valor pago.",
      },
      {
        question: "tem opção vegetariana ou vegana?",
        answer:
          "sim, mas é preciso informar no ato da reserva para que a família responsável pela refeição possa se organizar.",
      },
      {
        question: "por que a saída é de madrugada?",
        answer:
          "o trekking segue sempre no sentido Barreirinhas → Santo Amaro, o que evita caminhar com o sol e o vento de frente, além de facilitar a subida nas dunas. por isso a chegada em Barreirinhas é recomendada no dia 4, um dia antes da busca às 4h da manhã do dia 5.",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "nessa edição eu não estarei presencialmente, mas vocês estarão em ótimas mãos: a Giovana Gentil, minha sócia, acompanha o grupo em todas as expedições, do começo ao fim. eu já fiz essa viagem pessoalmente e escolhi essa agência a dedo, então pode confiar que está tudo pensado nos mínimos detalhes. e claro, estarei sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem. quiser conhecer a Gi, é só dar uma olhada no Instagram dela: @giovanagentil.travel 💛",
      },
    ],
  },
  {
    slug: "lencois-maranhenses-2",
    title: "Lençóis Maranhenses",
    destination: "Lençóis Maranhenses, Maranhão",
    cardImage: "/images/trips/lencois-maranhenses/hero/hero-1.jpg",
    heroImage: "/images/trips/lencois-maranhenses/hero/hero-1.jpg",
    heroImages: [
      "/images/trips/lencois-maranhenses/hero/hero-1.jpg",
      "/images/trips/lencois-maranhenses/hero/hero-2.jpg",
      "/images/trips/lencois-maranhenses/hero/hero-3.jpg",
      "/images/trips/lencois-maranhenses/hero/hero-4.jpg",
      "/images/trips/lencois-maranhenses/hero/hero-5.jpg",
      "/images/trips/lencois-maranhenses/hero/hero-6.jpg",
    ],
    dates: "4 a 7 de junho de 2027",
    dateForSort: "2027-06-04",
    dateForSortEnd: "2027-06-07",
    duration: "4 dias",
    priceDisplay: "R$ 2.700",
    priceValue: 2700,
    national: true,
    priceInstallments:
      "1º lote (3 primeiras vagas): R$ 2.700 · 2º lote (demais vagas): R$ 3.000 — entrada de R$ 300 para reservar (não reembolsável), restante em até 4x sem juros ou até 6x com juros",
    agency: "Trilha Ecoaventura",
    tagline:
      "travessia de 3 dias pelas dunas do parque nacional, dormindo em rede na casa de famílias nativas",
    description:
      "4 dias nos lençóis maranhenses com a Giovana Gentil. chegada em são luís/barreirinhas no dia 4 para descansar, já que a busca para a travessia é de madrugada no dia 5. são 3 dias de trekking pelo parque nacional dos lençóis maranhenses (entre 30 e 40km no total), com pernoite em rede na casa de famílias nativas nos oásis baixa grande e queimada dos britos, travessia do rio negro, banho de lagoa e a imensidão das dunas ao amanhecer. um grupo de até 12 meninas, numa das paisagens mais únicas e exóticas do mundo — sem hotel, sem luxo: comida caseira, banho de lagoa e o silêncio que só o deserto tem.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a viagem aos Lençóis Maranhenses (4 a 7 de junho de 2027) e quero garantir minha vaga :)",
    paymentMethods: ["pix", "boleto", "cartão de crédito"],
    included: [
      "transfer São Luís ↔ Barreirinhas",
      "todo o transporte da travessia (4x4, barco ou lancha, conforme o roteiro)",
      "café da manhã, almoço e jantar nos dias de caminhada",
      "hospedagem em rede na casa de famílias nativas (2 noites)",
      "condutor ecológico local, credenciado no ICMBio",
      "seguro viagem individual",
      "transfer de volta Santo Amaro ↔ São Luís",
    ],
    notIncluded: [
      "passagem aérea",
      "hotel em Barreirinhas",
      "traslados aeroporto ↔ hotel e vice-versa",
      "bebidas (pagas direto às famílias, em dinheiro — cerca de R$ 30 por dia)",
      'tudo o que não estiver listado em "o que está incluso"',
    ],
    itinerary: [
      {
        day: 1,
        title: "dia 5 — barreirinhas → oásis baixa grande",
        description:
          "saída de São Luís para Barreirinhas às 4h, de van. às 8h30, saída de barco de Barreirinhas, com visita à APA Pequenos Lençóis Maranhenses, passando pelos povoados de Vassouras e Mandacaru, com almoço na praia de Caburé. à tarde, seguimos de barco até Atins e de lá, de 4x4, até a foz do Rio Negro, onde começa a caminhada de cerca de 8km até o Oásis Baixa Grande — onde 6 famílias vivem cercadas por restinga, no meio do deserto. pernoite em rede na casa de uma família nativa, com jantar caseiro. almoço e jantar inclusos.",
      },
      {
        day: 2,
        title: "dia 6 — oásis baixa grande → oásis queimada dos britos (10km)",
        description:
          "saída às 5h30 para acompanhar o nascer do sol e cruzar o Rio Negro. são 10km de caminhada até o Oásis Queimada dos Britos, passando pela Ponta do Peadouro, região de dunas altas com vista incrível sobre o deserto. chegada por volta das 10h30/11h, com almoço e tarde livre pra descansar. às 16h saímos para observar o pôr do sol, seguindo para o pernoite em rede numa vila de cerca de 20 famílias, com jantar. café da manhã, almoço e jantar inclusos.",
      },
      {
        day: 3,
        title: "dia 7 — oásis queimada dos britos → lagoa do junco (14km)",
        description:
          "saída de madrugada, por volta das 3h, para a caminhada final de 14km até a Lagoa do Junco, com banhos ao longo do caminho em outras lagoas da região. chegada prevista para as 10h, seguindo de 4x4 até Santo Amaro e de lá o transfer de volta a Barreirinhas ou São Luís. café da manhã incluso.",
      },
    ],
    accommodation: `hospedagem em redários construídos pelos moradores, nos oásis Baixa Grande e Queimada dos Britos — dormimos todas lado a lado nas redes, com lençóis fornecidos pelas famílias. os redários costumam ter tomadas para recarregar o celular e wi-fi (com horários restritos para economizar energia dos geradores) — um carregador portátil pode ajudar. os banheiros são comunitários, então sempre tem fila para o banho, que deve ser rapidinho.

o Oásis Baixa Grande reúne 6 famílias; o Oásis Queimada dos Britos é maior, com cerca de 20 famílias. estadia e alimentação nos redários já estão inclusas no pacote — leve dinheiro trocado para as bebidas, pagas direto às famílias (cerca de R$ 30 por dia).`,
    forWhom: [
      {
        title: "quem quer se desconectar de verdade",
        description:
          "3 dias de trekking pelas dunas do parque nacional, dormindo em rede na casa de famílias nativas, sem pressa e sem luxo.",
      },
      {
        title: "quem gosta de caminhada de verdade",
        description:
          "trechos de até 8km, 10km e 14km entre dunas, rios e lagoas — ao todo, entre 30 e 40km em 3 dias. é um itinerário físico de verdade, então vale ter certeza de que está apta pra aventura.",
      },
      {
        title: "quem quer conhecer as comunidades locais",
        description:
          "hospedagem e refeições nas casas de famílias dos oásis Baixa Grande e Queimada dos Britos, com guias locais credenciados no ICMBio.",
      },
    ],
    faqs: [
      {
        question: "o que preciso levar?",
        answer: `lanterna de cabeça, roupas com proteção UV, boné, óculos de sol, protetor solar, capa de chuva, mochila de 30, 40 ou 60L, bastão de caminhada, garrafa de água de 1,5L ou mochila de hidratação, roupa de banho, barra de cereal/castanhas/frutas para lanche na trilha, câmera fotográfica, sandálias ou chinelos, meias, toalha de praia, produtos de higiene pessoal e medicamentos pessoais.

evite itens pesados: livros, agendas, eletrônicos pesados e excesso de roupa. o ideal é carregar cerca de 4kg de mochila — menos é mais.`,
      },
      {
        question: "como funciona o pagamento?",
        answer:
          "o pacote tem 2 lotes de preço: 1º lote (3 primeiras vagas) — R$ 2.700; 2º lote (demais vagas) — R$ 3.000. para confirmar a vaga, a entrada é de R$ 300 (depósito não reembolsável). o restante pode ser parcelado em até 4x sem juros ou até 6x com juros, via pix, boleto ou cartão.",
      },
      {
        question: "qual a política de cancelamento?",
        answer:
          "o cancelamento deve ser solicitado até 15 dias antes do início dos serviços contratados; após esse prazo, será cobrada uma taxa de 50% do valor contratado. devoluções são feitas com desconto das taxas de transferência bancária. em caso de não comparecimento (no-show), a cobrança é de 100% dos serviços contratados.",
      },
      {
        question: "tem opção vegetariana ou vegana?",
        answer:
          "sim, mas é preciso informar no ato da reserva para que a família responsável pela refeição possa se organizar.",
      },
      {
        question: "por que a saída é de madrugada?",
        answer:
          "o trekking segue sempre no sentido Barreirinhas → Santo Amaro, o que evita caminhar com o sol e o vento de frente, além de facilitar a subida nas dunas. por isso a chegada em São Luís/Barreirinhas é recomendada no dia 4 — procure voos que pousem até o início da tarde, pra ter folga no trajeto até Barreirinhas. no dia 5, a busca é de madrugada, no aeroporto ou no hotel. na volta, recomendamos voos a partir das 18h do dia 7, pra dar margem para imprevistos.",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "nessa edição eu não estarei presencialmente, mas vocês estarão em ótimas mãos: a Giovana Gentil, minha sócia, acompanha o grupo em todas as expedições, do começo ao fim. a Gio tem 24 anos, é de São Paulo, e já passou 5 meses mochilando sozinha pelo mundo — hoje organiza viagens em grupo pra mulheres com o propósito de ajudar quem quer viajar, mas não sabe como. eu já fiz essa viagem pessoalmente e escolhi essa agência a dedo, então pode confiar que está tudo pensado nos mínimos detalhes. e claro, estarei sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem. quiser conhecer a Gi, é só dar uma olhada no Instagram dela: @giovanagentil.travel 💛",
      },
    ],
  },
  {
    slug: "jalapao",
    title: "Jalapão",
    destination: "Jalapão, Tocantins",
    cardImage: "/images/trips/jalapao/jalapao-2.jpeg",
    heroImage: "/images/trips/jalapao/jalapao-1.jpeg",
    heroImages: [
      "/images/trips/jalapao/hero/hero-1.jpg",
      "/images/trips/jalapao/hero/hero-2.jpg",
      "/images/trips/jalapao/hero/hero-3.jpg",
      "/images/trips/jalapao/hero/hero-4.jpg",
      "/images/trips/jalapao/hero/hero-5.jpg",
      "/images/trips/jalapao/hero/hero-6.jpg",
    ],
    dates: "09 a 12 de outubro de 2026",
    dateForSort: "2026-10-09",
    dateForSortEnd: "2026-10-12",
    duration: "4 dias",
    priceDisplay: "R$ 3.500",
    priceValue: 3500,
    national: true,
    priceInstallments:
      "por pessoa — hospedagem, alimentação completa, translados e entradas inclusos",
    agency: "Tour Jalapão x Giovana Gentil",
    tagline:
      "fervedouros, dunas douradas, cânions e o cerrado mais selvagem do brasil",
    description:
      "4 dias de expedição no Jalapão tocantinense com a Gio — fervedouros de água cristalina que borbulha do chão, dunas douradas de capim doirado, cânions impressionantes e cachoeiras escondidas no coração do cerrado. tudo incluso: hospedagem, 3 refeições completas por dia, translado, transporte 4x4, guia ambiental credenciado e entradas em todos os atrativos. chegue em palmas no dia 8, a expedição começa cedo no dia 9. vagas esgotadas!",
    urgentBadge: "esgotado",
    soldOut: true,
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a expedição ao Jalapão (9 a 12 de outubro de 2026) e quero garantir minha vaga :)",
    paymentMethods: [
      "pix à vista",
      "transferência bancária",
      "boleto",
      "cartão de crédito em até 10x",
    ],
    included: [
      "translado Palmas ↔ Jalapão (ida e volta)",
      "transporte em veículo 4x4 durante toda a expedição",
      "condutor ambiental credenciado pelo órgão competente",
      "hospedagem nas pousadas do Jalapão",
      "alimentação completa — café da manhã, almoço e jantar em todos os dias",
      "água mineral a bordo durante todo o trajeto",
      "taxa de visitação de todos os atrativos do roteiro",
      "seguro de acidente",
    ],
    notIncluded: [
      "passagem aérea",
      "taxa ambiental — R$ 30 por pessoa (pago na entrada do parque)",
      "hotel em Palmas na noite do dia 8 de outubro",
      "traslado aeroporto ↔ hotel em Palmas",
      "bebidas durante as refeições",
      "atividades opcionais",
      "despesas pessoais",
    ],
    itinerary: [
      {
        day: 1,
        title: "1º dia de expedição — lagoa do japonês + pedra furada",
        description:
          "saída de Palmas às 8h. primeiro destino: Lagoa do Japonês, um dos cartões-postais do Jalapão. almoço em rota. à tarde, Pedra Furada — uma formação rochosa única no meio do cerrado. jantar às 19h e check-in na pousada.",
      },
      {
        day: 2,
        title: "2º dia — cânion do sussuapara + dunas do jalapão",
        description:
          "café da manhã às 7h. cânion do Sussuapara — paredes de rocha de tirar o fôlego. almoço na comunidade quilombola do Rio Novo. tarde na Prainha do Rio Novo. parada fotográfica no Morro do Saca Trapo. Lagoa do Jacaré e Paredão da Serra do Espírito Santo. Dunas do Jalapão ao entardecer. jantar às 19:30h e check-in na pousada.",
      },
      {
        day: 3,
        title: "3º dia — fervedouros + cachoeira do formiga",
        description:
          "café da manhã às 7h. Fervedouro dos Buritis. Cachoeira do Formiga — águas esmeraldas e transparência surreal. almoço. visita à cabana de artesanato de capim dourado da Jane. Fervedouro Beija Flor. Fervedouro Por Enquanto. jantar às 19h e check-in na pousada.",
      },
      {
        day: 4,
        title: "4º dia — fervedouro bela vista + retorno a palmas",
        description:
          "café da manhã às 7h. Fervedouro Bela Vista. parada fotográfica na Serra da Catedral. Cachoeira do Poço Encantado. almoço. saída rumo a Palmas — chegada prevista às 18h. voos de retorno a partir das 18h do dia 12.",
      },
    ],
    accommodation: `hospedagem em pousadas confortáveis no interior do Jalapão, selecionadas pela Tour Jalapão. todas as refeições são incluídas: café da manhã, almoço e jantar, com comida regional, simples, farta e feita com muito amor.

- atenção: o sinal de internet nas pousadas é fraco. wi-fi disponível somente pela manhã, antes da saída, e no final do dia ao retornar. é a desconexão que o Jalapão pede — e que a gente abraça!
- dieta especial (vegana, vegetariana, etc.): possível mediante aviso prévio — o cardápio precisa estar dentro das possibilidades da região.`,
    forWhom: [
      {
        title: "quem quer aventura no coração do brasil",
        description:
          "o Jalapão é um dos destinos mais incríveis e menos conhecidos do Brasil — ideal para quem quer sair do óbvio e descobrir paisagens de outro mundo.",
      },
      {
        title: "quem ama natureza intocada",
        description:
          "fervedouros, dunas, cânions e o cerrado preservado — tudo longe de multidões e conectado de verdade com a natureza.",
      },
      {
        title: "quem quer tudo resolvido",
        description:
          "com hospedagem, alimentação completa, transporte, guia e entradas incluídos, é só chegar em Palmas no dia 8 e embarcar na aventura.",
      },
    ],
    faqs: [
      {
        question: "quando preciso chegar em palmas?",
        answer:
          "recomendamos chegar em Palmas na noite do dia 8 de outubro (voo noturno) ou muito cedo no dia 9, antes das 7h da manhã. a expedição sai de Palmas às 8h do dia 9 — a Tour Jalapão busca nos hotéis entre 6h30 e 7h20.",
      },
      {
        question: "quando posso comprar voos de volta?",
        answer:
          "a expedição retorna a Palmas com chegada prevista às 18h do dia 12 de outubro. recomendamos voos de volta a partir das 20h para ter uma margem tranquila.",
      },
      {
        question: "o hotel em palmas está incluso?",
        answer:
          "não, o hotel na noite do dia 8 em Palmas não está incluso. mas a Gio pode indicar opções econômicas e centrais — é só chamar no WhatsApp!",
      },
      {
        question: "o que é um fervedouro?",
        answer:
          "fervedouros são nascentes naturais onde a água brota do chão com tanta pressão que cria um 'fervimento' — mesmo que a água seja gelada! a transparência e a cor turquesa são de outro mundo. uma das experiências mais únicas do Brasil.",
      },
      {
        question: "posso usar protetor solar nos fervedouros?",
        answer:
          "não! é proibido entrar nos atrativos com repelente, protetor solar, bronzeador ou similares no corpo. isso é obrigatório para preservar as nascentes. leve roupas de proteção UV se preferir.",
      },
      {
        question: "qual a franquia de bagagem?",
        answer:
          "a bagagem permitida a bordo do veículo 4x4 é de no máximo 20 litros (equivalente a uma mochila pequena de 10 kg). é importante respeitar isso para garantir espaço para todas.",
      },
      {
        question: "tem internet e celular no jalapão?",
        answer:
          "o sinal de internet e celular nas pousadas é fraco. wi-fi disponível somente pela manhã e ao final do dia. é a desconexão total que o Jalapão oferece — e que a gente abraça de coração!",
      },
      {
        question: "tem atividades opcionais?",
        answer: `sim! há várias opções pagas:
- rapel na Cachoeira da Roncadeira (70m) — R$ 120/pessoa
- tirolesa em Taquaruçu (1.000m de descida) — R$ 120/pessoa
- tirolesa na Lagoa do Japonês — R$ 40/pessoa
- trekking na Serra do Jacurutu (nascer do sol) — R$ 160/pessoa
- rafting no Rio Sono (~2h de descida) — R$ 200/pessoa

recomendamos levar dinheiro em espécie, pois alguns locais não aceitam cartão.`,
      },
      {
        question: "a viagem é só para mulheres?",
        answer:
          "sim, todas as experiências da Julia Paraizo são exclusivas para mulheres.",
      },
      {
        question: "a taxa ambiental está inclusa?",
        answer:
          "não, a taxa ambiental do Parque Estadual do Jalapão é de R$ 30 por pessoa e é paga diretamente na entrada do parque. não esqueça de levar em espécie!",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "nessa edição eu não estarei presencialmente, mas vocês estarão em ótimas mãos: a Giovana Gentil, minha sócia, acompanha o grupo em todas as expedições, do começo ao fim. eu já fiz essa viagem pessoalmente e escolhi essa agência a dedo, então pode confiar que está tudo pensado nos mínimos detalhes. e claro, estarei sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem. quiser conhecer a Gi, é só dar uma olhada no Instagram dela: @giovanagentil.travel 💛",
      },
    ],
  },
  {
    slug: "jalapao-2",
    title: "Jalapão",
    destination: "Jalapão, Tocantins",
    cardImage: "/images/trips/jalapao/jalapao-2.jpeg",
    heroImage: "/images/trips/jalapao/jalapao-1.jpeg",
    heroImages: [
      "/images/trips/jalapao/hero/hero-1.jpg",
      "/images/trips/jalapao/hero/hero-2.jpg",
      "/images/trips/jalapao/hero/hero-3.jpg",
      "/images/trips/jalapao/hero/hero-4.jpg",
      "/images/trips/jalapao/hero/hero-5.jpg",
      "/images/trips/jalapao/hero/hero-6.jpg",
    ],
    dates: "14 a 17 de outubro de 2026",
    dateForSort: "2026-10-14",
    dateForSortEnd: "2026-10-17",
    duration: "4 dias",
    priceDisplay: "R$ 3.800",
    priceValue: 3800,
    national: true,
    priceInstallments:
      "por pessoa — hospedagem, alimentação completa, translados e entradas inclusos",
    agency: "Tour Jalapão x Giovana Gentil",
    tagline:
      "fervedouros, dunas douradas, cânions e o cerrado mais selvagem do brasil",
    description:
      "4 dias de expedição no Jalapão tocantinense com a Gio — fervedouros de água cristalina que borbulha do chão, dunas douradas de capim doirado, cânions impressionantes e cachoeiras escondidas no coração do cerrado. tudo incluso: hospedagem, 3 refeições completas por dia, translado, transporte 4x4, guia ambiental credenciado e entradas em todos os atrativos. chegue em palmas no dia 13, a expedição começa cedo no dia 14.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a expedição ao Jalapão (14 a 17 de outubro de 2026) e quero garantir minha vaga :)",
    paymentMethods: [
      "pix à vista",
      "transferência bancária",
      "boleto",
      "cartão de crédito em até 10x",
    ],
    included: [
      "translado Palmas ↔ Jalapão (ida e volta)",
      "transporte em veículo 4x4 durante toda a expedição",
      "condutor ambiental credenciado pelo órgão competente",
      "hospedagem nas pousadas do Jalapão",
      "alimentação completa — café da manhã, almoço e jantar em todos os dias",
      "água mineral a bordo durante todo o trajeto",
      "taxa de visitação de todos os atrativos do roteiro",
      "seguro de acidente",
    ],
    notIncluded: [
      "passagem aérea",
      "taxa ambiental — R$ 30 por pessoa (pago na entrada do parque)",
      "hotel em Palmas na noite do dia 13 de outubro",
      "traslado aeroporto ↔ hotel em Palmas",
      "bebidas durante as refeições",
      "atividades opcionais",
      "despesas pessoais",
    ],
    itinerary: [
      {
        day: 1,
        title: "1º dia de expedição — lagoa do japonês + pedra furada",
        description:
          "saída de Palmas às 8h. primeiro destino: Lagoa do Japonês, um dos cartões-postais do Jalapão. almoço em rota. à tarde, Pedra Furada — uma formação rochosa única no meio do cerrado. jantar às 19h e check-in na pousada.",
      },
      {
        day: 2,
        title: "2º dia — cânion do sussuapara + dunas do jalapão",
        description:
          "café da manhã às 7h. cânion do Sussuapara — paredes de rocha de tirar o fôlego. almoço na comunidade quilombola do Rio Novo. tarde na Prainha do Rio Novo. parada fotográfica no Morro do Saca Trapo. Lagoa do Jacaré e Paredão da Serra do Espírito Santo. Dunas do Jalapão ao entardecer. jantar às 19:30h e check-in na pousada.",
      },
      {
        day: 3,
        title: "3º dia — fervedouros + cachoeira do formiga",
        description:
          "café da manhã às 7h. Fervedouro dos Buritis. Cachoeira do Formiga — águas esmeraldas e transparência surreal. almoço. visita à cabana de artesanato de capim dourado da Jane. Fervedouro Beija Flor. Fervedouro Por Enquanto. jantar às 19h e check-in na pousada.",
      },
      {
        day: 4,
        title: "4º dia — fervedouro bela vista + retorno a palmas",
        description:
          "café da manhã às 7h. Fervedouro Bela Vista. parada fotográfica na Serra da Catedral. Cachoeira do Poço Encantado. almoço. saída rumo a Palmas — chegada prevista às 18h. voos de retorno a partir das 18h do dia 17.",
      },
    ],
    accommodation: `hospedagem em pousadas confortáveis no interior do Jalapão, selecionadas pela Tour Jalapão. todas as refeições são incluídas: café da manhã, almoço e jantar, com comida regional, simples, farta e feita com muito amor.

- atenção: o sinal de internet nas pousadas é fraco. wi-fi disponível somente pela manhã, antes da saída, e no final do dia ao retornar. é a desconexão que o Jalapão pede — e que a gente abraça!
- dieta especial (vegana, vegetariana, etc.): possível mediante aviso prévio — o cardápio precisa estar dentro das possibilidades da região.`,
    forWhom: [
      {
        title: "quem quer aventura no coração do brasil",
        description:
          "o Jalapão é um dos destinos mais incríveis e menos conhecidos do Brasil — ideal para quem quer sair do óbvio e descobrir paisagens de outro mundo.",
      },
      {
        title: "quem ama natureza intocada",
        description:
          "fervedouros, dunas, cânions e o cerrado preservado — tudo longe de multidões e conectado de verdade com a natureza.",
      },
      {
        title: "quem quer tudo resolvido",
        description:
          "com hospedagem, alimentação completa, transporte, guia e entradas incluídos, é só chegar em Palmas no dia 13 e embarcar na aventura.",
      },
    ],
    faqs: [
      {
        question: "quando preciso chegar em palmas?",
        answer:
          "recomendamos chegar em Palmas na noite do dia 13 de outubro (voo noturno) ou muito cedo no dia 14, antes das 7h da manhã. a expedição sai de Palmas às 8h do dia 14 — a Tour Jalapão busca nos hotéis entre 6h30 e 7h20.",
      },
      {
        question: "quando posso comprar voos de volta?",
        answer:
          "a expedição retorna a Palmas com chegada prevista às 18h do dia 17 de outubro. recomendamos voos de volta a partir das 20h para ter uma margem tranquila.",
      },
      {
        question: "o hotel em palmas está incluso?",
        answer:
          "não, o hotel na noite do dia 13 em Palmas não está incluso. mas a Gio pode indicar opções econômicas e centrais — é só chamar no WhatsApp!",
      },
      {
        question: "o que é um fervedouro?",
        answer:
          "fervedouros são nascentes naturais onde a água brota do chão com tanta pressão que cria um 'fervimento' — mesmo que a água seja gelada! a transparência e a cor turquesa são de outro mundo. uma das experiências mais únicas do Brasil.",
      },
      {
        question: "posso usar protetor solar nos fervedouros?",
        answer:
          "não! é proibido entrar nos atrativos com repelente, protetor solar, bronzeador ou similares no corpo. isso é obrigatório para preservar as nascentes. leve roupas de proteção UV se preferir.",
      },
      {
        question: "qual a franquia de bagagem?",
        answer:
          "a bagagem permitida a bordo do veículo 4x4 é de no máximo 20 litros (equivalente a uma mochila pequena de 10 kg). é importante respeitar isso para garantir espaço para todas.",
      },
      {
        question: "tem internet e celular no jalapão?",
        answer:
          "o sinal de internet e celular nas pousadas é fraco. wi-fi disponível somente pela manhã e ao final do dia. é a desconexão total que o Jalapão oferece — e que a gente abraça de coração!",
      },
      {
        question: "tem atividades opcionais?",
        answer: `sim! há várias opções pagas:
- rapel na Cachoeira da Roncadeira (70m) — R$ 120/pessoa
- tirolesa em Taquaruçu (1.000m de descida) — R$ 120/pessoa
- tirolesa na Lagoa do Japonês — R$ 40/pessoa
- trekking na Serra do Jacurutu (nascer do sol) — R$ 160/pessoa
- rafting no Rio Sono (~2h de descida) — R$ 200/pessoa

recomendamos levar dinheiro em espécie, pois alguns locais não aceitam cartão.`,
      },
      {
        question: "a viagem é só para mulheres?",
        answer:
          "sim, todas as experiências da Julia Paraizo são exclusivas para mulheres.",
      },
      {
        question: "a taxa ambiental está inclusa?",
        answer:
          "não, a taxa ambiental do Parque Estadual do Jalapão é de R$ 30 por pessoa e é paga diretamente na entrada do parque. não esqueça de levar em espécie!",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "nessa edição eu não estarei presencialmente, mas vocês estarão em ótimas mãos: a Giovana Gentil, minha sócia, acompanha o grupo em todas as expedições, do começo ao fim. eu já fiz essa viagem pessoalmente e escolhi essa agência a dedo, então pode confiar que está tudo pensado nos mínimos detalhes. e claro, estarei sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem. quiser conhecer a Gi, é só dar uma olhada no Instagram dela: @giovanagentil.travel 💛",
      },
    ],
  },
  {
    slug: "laponia",
    title: "Lapônia",
    destination: "Lapônia, Finlândia",
    cardImage: "/images/trips/laponia/laponia-1.jpeg",
    heroImage: "/images/trips/laponia/laponia-1.jpeg",
    heroImages: [
      "/images/trips/laponia/hero/hero-1.jpg",
      "/images/trips/laponia/hero/hero-3.jpg",
      "/images/trips/laponia/hero/hero-4.jpg",
      "/images/trips/laponia/hero/hero-5.jpg",
      "/images/trips/laponia/hero/hero-6.jpg",
    ],
    dates: "13 a 19 de dezembro de 2026",
    dateForSort: "2026-12-13",
    dateForSortEnd: "2026-12-19",
    duration: "7 dias",
    priceDisplay: "€ 1.500",
    priceValue: 9000,
    national: false,
    priceInstallments: "entrada de € 100 · restante até 13/11/2026",
    agency: "",
    tagline: "aurora boreal, vila do papai noel e o oceano ártico em 7 dias",
    description:
      "7 dias, 12 meninas, o norte da Finlândia em dezembro. uma trip criada em parceria com a Giovana Gentil e a agência TimeTravels: caça à aurora boreal, trenó com huskies, visita à Vila do Papai Noel, travessia até a Noruega e sauna após mergulho no Oceano Ártico. 2026 é o melhor ano de todos para ver a aurora — e nós vamos estar lá.",
    urgentBadge: "esgotado",
    soldOut: true,
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a Lapland Girls Trip (13 a 19 de dezembro de 2026) e quero garantir minha vaga :)",
    paymentMethods: [],
    included: [
      "4 noites em chalés compartilhados com cozinha, banheiro e sauna (4–8 pessoas por chalé)",
      "roupa de cama e toalhas",
      "transporte terrestre (ônibus Helsinki → Saariselkä → Helsinki, com paradas em postos equipados)",
      "visita à Vila do Papai Noel em Rovaniemi",
      "guia turístico especializado",
      "visita à fazenda de huskies + passeio de trenó",
      "patinação no único lago natural gelado da Lapônia",
      "caça à aurora boreal",
      "caminhada com raquetes de neve (snowshoe) com guia",
      "noite de fogueira",
      "passeio até o Oceano Ártico (Bugøynes, Noruega) com almoço e sauna",
    ],
    notIncluded: [
      "voos (ida e volta para Helsinki — sugestão: Finnair, Ryanair, TAP)",
      "transfers aeroporto ↔ estação de ônibus",
      "limpeza final dos chalés (€ 250 por chalé — dividida entre o grupo)",
      "refeições (estimativa € 100 total — cozinhamos juntas nos chalés, ~€ 15/dia)",
      "gorjetas",
      "atividades opcionais: pesca no gelo + fogueira (€ 39), esqui (€ 44), fazenda de renas (€ 49), esqui cross-country (€ 39)",
    ],
    itinerary: [
      {
        day: 1,
        title: "chegada em helsinque + saída do ônibus",
        description:
          "chegada em Helsinki ao longo do dia. à noite, às 21h, embarcamos no ônibus noturno rumo à Lapônia. o ônibus faz paradas a cada 4–5 horas em postos bem equipados com banheiros, lojas de conveniência e cafés.",
      },
      {
        day: 2,
        title: "vila do papai noel + chegada em saariselkä",
        description:
          "às 11h, chegamos a Rovaniemi para visitar a Vila do Papai Noel — o endereço oficial do Papai Noel no Círculo Polar Ártico. às 14h30, seguimos os 260km restantes. às 17h, chegamos em Saariselkä e fazemos check-in nos chalés. aqui estaremos em um ponto privilegiado para avistar a aurora boreal!",
      },
      {
        day: 3,
        title: "trilha na neve com raquetes (snowshoe)",
        description:
          "dia inteiro de trilha de snowshoe em meio à natureza intocada do Ártico. guias especializados garantem segurança em qualquer terreno. se tivermos sorte, é possível ver a aurora boreal durante o percurso. não esqueça de trazer roupas adequadas para neve!",
      },
      {
        day: 4,
        title: "oceano ártico + bugøynes, noruega + sauna",
        description:
          "do amanhecer ao anoitecer, exploramos o melhor da Lapônia em direção aos fiordes até o charmoso vilarejo de Bugøynes, no norte da Noruega — um lugar no fim do mundo. mergulho no Oceano Ártico (opcional), caminhada nas praias de areia e paisagens de tirar o fôlego. à noite, sauna quentinha para recuperar as energias e jantar com sopa tradicional em restaurante local.",
      },
      {
        day: 5,
        title: "huskies + patinação em lago congelado + esqui",
        description:
          "manhã na fazenda de huskies: introdução à vida na fazenda e passeio de trenó — os huskies são fortes, animados e amam puxar! depois, patinação na única pista de gelo natural de toda a Lapônia. para quem quiser, esqui para iniciantes com guia e aluguel de equipamento incluso (€ 44, opcional).",
      },
      {
        day: 6,
        title: "saída dos chalés + pesca no gelo ou dia livre",
        description:
          "às 10h, check-out dos chalés. a tarde é livre: pesca no gelo + fogueira (€ 39, opcional) — aprenda a acender fogo sem fósforos e pratique pesca no gelo, habilidades de sobrevivência no Ártico. ou então: compras, restaurantes, trenó ou esqui alpino no seu ritmo. à noite, ônibus de volta para Helsinki.",
      },
      {
        day: 7,
        title: "chegada em helsinque + voo de volta",
        description:
          "às 8h30, chegamos em Helsinki. tempo livre para café, compras de última hora ou lounge no aeroporto antes do voo de volta. fim de uma das viagens mais inesquecíveis da vida.",
      },
    ],
    accommodation: `saariselkä — chalés compartilhados: 4 noites em chalés para 4–8 pessoas, localizados perto de mercados, restaurantes e todas as atividades do roteiro.

cada chalé conta com:
• sala com TV
• cozinha equipada
• banheiro
• sauna
• roupa de cama e toalhas incluídas

alimentação: os chalés têm cozinha equipada, então vamos dividir as compras e cozinhar em grupo — uma ótima forma de entrosar! estimativa de € 15/dia por pessoa (€ 100 no total).

trânsito: 2 noites no ônibus noturno (Helsinki → Saariselkä na ida, Saariselkä → Helsinki na volta) — com paradas em postos equipados a cada 4–5 horas.

nessa viagem fazemos parte de um grupo maior de 45–55 pessoas da agência parceira.`,
    forWhom: [
      {
        title: "quem sonha em ver a aurora boreal",
        description:
          "2026 é o pico do ciclo solar de 11 anos — a Olivia, especialista da agência local, confirmou: com 5 noites no período certo, nossas chances chegam a 99%. a Lapônia em dezembro é o momento.",
      },
      {
        title: "quem quer o natal mais mágico da vida",
        description:
          "neve de verdade, floresta nevada, trenó com huskies, sauna no frio ártico e a Vila do Papai Noel de verdade em Rovaniemi. dezembro na Lapônia é exatamente o que você imagina — e mais.",
      },
      {
        title: "quem quer sair completamente da rotina",
        description:
          "dias de 4 horas de luz, temperaturas abaixo de zero, silêncio absoluto, floresta ártica e o Oceano Ártico congelado. uma experiência que muda o que você entende como extremo.",
      },
    ],
    faqs: [
      {
        question: "vou conseguir ver a aurora boreal?",
        answer: `2026 é o pico do ciclo solar de 11 anos — o melhor momento em mais de uma década para ver a aurora. a Olivia, especialista da agência local parceira, confirmou: com 5 noites no período certo, nossas chances chegam a 99%.

a aurora boreal é um fenômeno natural e não pode ser 100% garantida — dependemos das condições climáticas. mas dezembro em Saariselkä é o lugar e a hora certa.`,
      },
      {
        question: "como funciona o pagamento?",
        answer: `o valor total é € 1.500 por pessoa, pago à vista em euros.

• entrada de € 100 para garantir sua reserva
• restante (€ 1.400) pode ser pago até 13/11/2026

pode usar cartão de crédito pelo link direto da agência parceira (conversão automática pelo banco) ou Wise/Nomad. teremos contrato regulamentando a prestação do serviço.`,
      },
      {
        question: "qual é a política de cancelamento?",
        answer: `o cancelamento deve ser solicitado por escrito (WhatsApp ou e-mail).

• até 31 de outubro de 2026: reembolso integral (€ 40 de taxa de serviço não reembolsável)
• a partir de 1º de novembro de 2026: sem devolução

você pode indicar outra pessoa para ocupar sua vaga sem custo adicional.`,
      },
      {
        question: "a alimentação está inclusa?",
        answer: `não, a alimentação não está inclusa nessa viagem. mas os chalés têm cozinha equipada — a proposta é dividir as compras e cozinhar juntas, o que é uma experiência por si só!

estimativa: € 15/dia por pessoa, ou seja, cerca de € 100 para os 7 dias.`,
      },
      {
        question: "como é a acomodação?",
        answer: `ficamos em chalés compartilhados para 4–8 pessoas em Saariselkä, perto de mercados, restaurantes e atividades. cada chalé tem sala com TV, cozinha, banheiro e sauna. roupa de cama e toalhas estão incluídas.

nota: há uma taxa de limpeza final de € 250 por chalé, dividida entre o grupo.`,
      },
      {
        question: "como funciona o transporte?",
        answer: `o transporte terrestre entre Helsinki e Saariselkä é feito de ônibus noturno — são 2 noites de ônibus (ida e volta). o ônibus para a cada 4–5 horas em postos bem equipados com banheiros, lojas e cafés.

os transfers entre aeroporto e a estação de ônibus não estão inclusos — você faz esse trecho por conta.`,
      },
      {
        question: "preciso de visto para a Finlândia e a Noruega?",
        answer:
          "não! brasileiras não precisam de visto para estadias turísticas de até 90 dias no espaço Schengen, que inclui a Finlândia e a Noruega — só passaporte válido por pelo menos 3 meses após a data de retorno. fique de olho no ETIAS, a nova autorização eletrônica de viagem para o espaço Schengen, que deve passar a ser exigida em breve — recomendamos verificar a exigência mais perto da data da viagem.",
      },
      {
        question: "que roupas levar?",
        answer:
          "a Lapônia em dezembro pode chegar a -20°C. essencial: base térmica (lã merino ou sintético), camadas intermediárias quentes, jaqueta impermeável, calça de neve, luvas duplas, bota impermeável com isolamento, gorro e balaclava. a Gio envia um guia completo de packing após a inscrição.",
      },
      {
        question: "a Ju acompanha essa viagem?",
        answer:
          "sim! essa trip é organizada em parceria com a Giovana Gentil e as duas estarão presentes em todos os momentos da viagem — com exceção do tempo livre, é claro :)",
      },
    ],
  },
  {
    slug: "surfcamp-saquarema",
    title: "Saquarema Surf Trip",
    destination: "Saquarema, Rio de Janeiro",
    cardImage: "/images/trips/surfcamp-saquarema/cover.jpg",
    heroImage: "/images/trips/surfcamp-saquarema/cover.jpg",
    heroImages: [
      "/images/trips/surfcamp-saquarema/hero/hero-1.jpg",
      "/images/trips/surfcamp-saquarema/hero/hero-2.jpg",
      "/images/trips/surfcamp-saquarema/hero/hero-3.jpg",
      "/images/trips/surfcamp-saquarema/hero/hero-4.jpg",
      "/images/trips/surfcamp-saquarema/hero/hero-5.jpg",
      "/images/trips/surfcamp-saquarema/hero/hero-6.jpg",
    ],
    dates: "07 a 10 de janeiro de 2027",
    dateForSort: "2027-01-07",
    dateForSortEnd: "2027-01-10",
    duration: "4 dias · 3 noites",
    priceDisplay: "R$ 2.500",
    priceValue: 2500,
    national: true,
    priceInstallments:
      "sinal de R$ 200 via Pix para reservar — entrada de R$ 1.150 até 31/10 e restante de R$ 1.150 até 15/12",
    agency: "Green House Saqua",
    urgentBadge: "5 vagas",
    tagline:
      "4 dias de surf, canoa havaiana, yoga e sol em saquarema, só entre meninas",
    description:
      "quatro dias na capital brasileira do surf, num grupo fechado de 6 — 5 vagas abertas + eu como host. você chega, a gente cuida de tudo: aulas de surf, canoa havaiana, yoga na praia, passeios de buggy, noites temáticas e muito tempo pra relaxar e fazer amizades novas. é só chegar no rio no ponto de encontro — do resto cuidamos nós. ideal pra quem tá pegando a primeira onda ou já surfa em qualquer nível: teremos guias pra te acompanhar e eu registrando tudo em foto e vídeo pra você levar de recordação.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre o Surfcamp Saquarema (7 a 10 de janeiro de 2027) e quero garantir minha vaga :)",
    paymentMethods: ["Pix"],
    included: [
      "3 noites de hospedagem (quarto feminino compartilhado)",
      "café da manhã incluso todos os dias",
      "transfer Rio ↔ Saquarema (ida e volta)",
      "aulas de surf",
      "canoa havaiana",
      "sessão de yoga",
      "passeios de buggy",
      "almoço premium",
      "Noite do Sushi (jantar de sábado)",
      "recepção de boas-vindas",
    ],
    notIncluded: [
      "transporte até o ponto de encontro no Rio",
      "jantar de quinta",
      "jantar de sexta",
      "refeições fora as citadas (cafés, bebidas, outros almoços)",
      "aulas extras opcionais de domingo",
      "despesas pessoais e gorjetas",
      "seguro viagem",
    ],
    itinerary: [
      {
        day: 1,
        title: "quinta, 7/jan — chegada, rumo a Saquarema",
        description:
          "saída do Rio por volta das 12h, em transfer exclusivo do grupo. chegada no fim da tarde e recepção de boas-vindas da galera. check-in na hospedagem e jantar livre — a gente escolhe um lugar em Saquarema pra ir junto e se conhecer.",
      },
      {
        day: 2,
        title: "sexta, 8/jan — água & aventura: canoa havaiana + surf + buggy",
        description:
          "café da manhã incluso. manhã de canoa havaiana no mar, seguida de aula de surf com instrutores. passeio de buggy pela orla e lagoa à tarde. jantar livre (por conta) — aproveita pra conhecer os restaurantes de Saquarema.",
      },
      {
        day: 3,
        title: "sábado, 9/jan — equilíbrio: surf + yoga + sushi",
        description:
          "café da manhã incluso. mais uma sessão de surf pela manhã, seguida de sessão de yoga pra alongar e relaxar. passeio de buggy à tarde e Noite do Sushi — jantar especial do grupo.",
      },
      {
        day: 4,
        title: "domingo, 10/jan — livre & volta",
        description:
          "café da manhã incluso. manhã ou dia livre pra conhecer a cidade no seu ritmo, com aulas extras de surf opcionais pra quem quiser mais mar. transfer de volta ao Rio depois do pôr do sol (~16h).",
      },
    ],
    accommodation:
      "3 noites em quarto feminino compartilhado, em parceria com a Green House Saqua — pousada e escola de surf local que cuida de toda a estrutura da viagem em Saquarema.",
    accommodationImages: [
      "/images/trips/surfcamp-saquarema/acomodacao/1.jpg",
      "/images/trips/surfcamp-saquarema/acomodacao/2.jpg",
      "/images/trips/surfcamp-saquarema/acomodacao/3.jpg",
      "/images/trips/surfcamp-saquarema/acomodacao/4.jpg",
      "/images/trips/surfcamp-saquarema/acomodacao/5.jpg",
      "/images/trips/surfcamp-saquarema/acomodacao/6.jpg",
      "/images/trips/surfcamp-saquarema/acomodacao/7.jpg",
      "/images/trips/surfcamp-saquarema/acomodacao/8.jpg",
      "/images/trips/surfcamp-saquarema/acomodacao/9.jpg",
      "/images/trips/surfcamp-saquarema/acomodacao/10.jpg",
      "/images/trips/surfcamp-saquarema/acomodacao/11.jpg",
      "/images/trips/surfcamp-saquarema/acomodacao/12.jpg",
    ],
    forWhom: [
      {
        title: "meninas de todos os níveis",
        description:
          "de quem nunca pegou uma onda até quem já surfa e quer evoluir — temos guias acompanhando de perto e eu registrando tudo em foto e vídeo pra você levar de recordação.",
      },
    ],
    faqs: [
      {
        question: "preciso saber surfar pra participar?",
        answer:
          "não! o camp é pra meninas de todos os níveis, iniciante ou não — temos guias pra te acompanhar de perto e eu registrando tudo em foto e vídeo pra você levar de recordação.",
      },
      {
        question: "quem organiza os passeios em Saquarema?",
        answer:
          "essa trip é em parceria com a Green House Saqua, pousada e escola de surf local que cuida de toda a estrutura em Saquarema.",
      },
      {
        question: "e se o mar tiver grande ou pequeno, ainda vou conseguir surfar?",
        answer:
          "sempre! a gente escolhe uma maré ideal no Canal — o canal da lagoa que tem acesso direto ao mar. seja qual for o tamanho do mar, ali sempre vai ter onda, e é onde todo mundo consegue aprender a surfar: pegar sua primeira onda e tirar a foto pra provar.",
      },
      {
        question: "onde exatamente vamos surfar?",
        answer:
          "na Barrinha — uma ondinha suave que bate na cintura, ótima pra treinar. o point é cheio de tartarugas e ainda tem a igreja no fundo, um dos cenários mais bonitos e clássicos de Saquarema.",
      },
      {
        question: "como funciona o pagamento?",
        answer:
          "forma de pagamento: Pix, não aceito cartão de crédito.\n\nvalor por pessoa: R$ 2.500, dividido em 3 etapas:\n\n1) sinal — R$ 200 → pra garantir sua vaga (só 5 vagas, confirmo por ordem de pagamento)\n2) entrada — R$ 1.150 → até 31/10\n\nessas duas são fixas.\n\n3) restante — R$ 1.150 → é só quitar até 15/12\n\nessa última parte fica do seu jeito: se quiser pagar tudo de uma vez, pode. se preferir ir quebrando em pedacinhos ao longo de nov/dez, também pode. o que importa é estar quitado até 15/12.\n\nchave Pix: (79) 98858-8863. manda o comprovante aqui que eu vou marcando.\n\no sinal e a entrada não são reembolsáveis.",
      },
    ],
    pending: false,
    isPlaceholderImage: false,
  },
  {
    slug: "surfcamp-ubatuba",
    hidden: true,
    title: "Ubatuba Surf Trip",
    destination: "Ubatuba, São Paulo",
    cardImage: "/images/trips/surfcamp-ubatuba/cover.jpg",
    heroImage: "/images/trips/surfcamp-ubatuba/cover.jpg",
    heroImages: [
      "/images/trips/surfcamp-ubatuba/hero/hero-1.jpg",
      "/images/trips/surfcamp-ubatuba/hero/hero-2.jpg",
      "/images/trips/surfcamp-ubatuba/hero/hero-3.jpg",
      "/images/trips/surfcamp-ubatuba/hero/hero-4.jpg",
      "/images/trips/surfcamp-ubatuba/hero/hero-5.jpg",
      "/images/trips/surfcamp-ubatuba/hero/hero-6.jpg",
    ],
    dates: "14 a 18 de janeiro de 2027",
    dateForSort: "2027-01-14",
    dateForSortEnd: "2027-01-18",
    duration: "5 dias · 4 noites",
    priceDisplay: "R$ 3.000",
    priceValue: 3000,
    national: true,
    priceInstallments: "",
    agency: "",
    tagline: "4 dias de surf, natureza e boas energias entre mulheres",
    description:
      "um refúgio pra você desacelerar, se conectar com o mar e viver dias de surf de verdade — do nascer do sol ao pôr do sol — em uma das praias mais lindas do litoral norte de São Paulo. se você sempre quis aprender a surfar (ou aprofundar o que já sabe) em um ambiente acolhedor, só entre meninas, com estrutura completa e sem se preocupar com nada, esse camp é pra você.",
    urgentBadge: "15 vagas",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre o Surfcamp Ubatuba (14 a 18 de janeiro de 2027) e quero garantir minha vaga :)",
    paymentMethods: [],
    included: [
      "hospedagem completa em casa exclusiva do grupo, com camas individuais e localização escolhida a dedo",
      "todas as refeições preparadas por chef de cozinha — é só sentar e aproveitar",
      "aulas de surf com instrutor para cada 2 alunas (acompanhamento de perto)",
      "vídeo análise pra você ver sua evolução e corrigir os detalhes",
      "yoga ao nascer do sol pra preparar o corpo antes de cair na água",
      "sessão de recovery e recuperação muscular pós-surf",
      "pranchas e equipamentos inclusos",
      "fotos e vídeos profissionais de surf pra você levar de recordação",
      "transporte completo: van executiva São Paulo ↔ Ubatuba e transfers locais entre as praias",
      "trilha leve e experiências pela cidade",
    ],
    notIncluded: [],
    itinerary: [
      {
        day: 1,
        title: "quinta — chegada",
        description:
          "chegada em Ubatuba, acomodação na casa e primeiro jantar juntas na cidade, num barzinho gostoso pra dar o start no camp.",
      },
      {
        day: 2,
        title: "sexta — aquecendo os motores",
        description:
          "trilha leve pela natureza (nada que canse pros dias de surf), tarde de praia e uma noite tranquila: jantar em casa e um passeio pelo centrinho pra conhecer a cidade.",
      },
      {
        day: 3,
        title: "sábado — dia completo de surf",
        description:
          "6h, yoga do nascer do sol pra preparar o corpo. volta pra casa, café da manhã e se arrumar. 8h, aula de surf. depois, vídeo análise e sessão de recovery / recuperação muscular.",
      },
      {
        day: 4,
        title: "domingo — mais surf",
        description:
          "novo dia de surf pra fixar tudo que você aprendeu e curtir o mar.",
      },
      {
        day: 5,
        title: "segunda — despedida",
        description:
          "café da manhã, bagagens e volta pra casa com o coração cheio (e talvez uns roxinhos de surfista).",
      },
    ],
    accommodation: "",
    forWhom: [
      {
        title: "mulheres de todos os níveis",
        description:
          "desde quem nunca pegou uma onda até quem já surfa e quer aperfeiçoar. o ambiente é 100% feminino, acolhedor e sem pressão: aqui cada uma evolui no seu tempo.",
      },
    ],
    faqs: [],
    pending: false,
  },
  {
    slug: "amazonia",
    title: "Amazônia",
    destination: "Amazônia, Brasil",
    cardImage: "/images/trips/amazonia/amazonia-1.jpeg",
    heroImage: "/images/trips/amazonia/amazonia-1.jpeg",
    heroImages: [
      "/images/trips/amazonia/hero/hero-1.jpg",
      "/images/trips/amazonia/hero/hero-2.jpg",
      "/images/trips/amazonia/hero/hero-3.jpg",
      "/images/trips/amazonia/hero/hero-4.jpg",
      "/images/trips/amazonia/hero/hero-5.jpg",
      "/images/trips/amazonia/hero/hero-6.jpg",
    ],
    dates: "19 a 23 de março de 2027",
    dateForSort: "2027-03-19",
    dateForSortEnd: "2027-03-23",
    duration: "5 dias · 4 noites",
    priceDisplay: "R$ 4.500",
    priceValue: 4500,
    national: true,
    priceInstallments: "",
    agency: "Amazônia Jungle Hotel",
    urgentBadge: "esgotado",
    soldOut: true,
    tagline:
      "encontro das águas, botos cor-de-rosa e uma noite inteira dormindo na selva",
    description:
      "5 dias e 4 noites no Amazônia Jungle Hotel, às margens do Rio Negro. pacote uirapuru: focagem de jacarés, caminhada na selva, nado com botos cor-de-rosa, visita a comunidades indígenas e ribeirinhas, e uma noite de pernoite acampada na floresta com redes suspensas e fogueira. o pulmão do mundo, ao vivo.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a viagem à Amazônia (19 a 23 de março de 2027) e quero garantir minha vaga :)",
    paymentMethods: [],
    included: [
      "traslado ida e volta (buscamos você no local desejado em Manaus e levamos de volta ao final do pacote)",
      "pensão completa: café da manhã, almoço e jantar em todos os dias",
      "pernoites em suítes com ar-condicionado, chuveiro elétrico e frigobar (exceto na noite de acampamento na selva)",
      "passeios de selva: focagem de jacarés à noite, nado com botos cor-de-rosa, pescaria de piranha e de pirarucu",
      "visita a comunidade indígena, a uma casa de caboclos ribeirinhos e à comunidade flutuante do Catalão",
      "1 noite de pernoite acampada na selva com redes suspensas, fogueira e jantar de peixe assado na brasa",
      "plantio de uma muda de árvore amazônica",
      "toda a infraestrutura do Amazônia Jungle Hotel (piscina, restaurante, áreas de convivência)",
    ],
    notIncluded: [
      "passagem aérea até Manaus",
      "bebidas alcoólicas e itens de consumo pessoal",
      "gorjetas e atividades opcionais não listadas no roteiro",
    ],
    itinerary: [
      {
        day: 1,
        title: "chegada + focagem de jacarés",
        description:
          'saída de Manaus (buscamos no aeroporto ou em qualquer hotel do perímetro urbano) rumo ao Amazônia Jungle Hotel — cerca de 45 minutos de carro pela ponte sobre o Rio Negro e mais 5 minutos de travessia em canoa motorizada com colete salva-vidas. check-in com suco regional de boas-vindas e reconhecimento do hotel e suas árvores frutíferas. almoço com culinária regional e internacional. à tarde, passeio de reconhecimento da fauna e flora: igarapés, igapós e visita à exuberante Sumaúma, chamada pelos indígenas de "a mãe" das árvores, além das ruínas do antigo Ariaú Towers, que já foi o maior hotel de selva do mundo (Guinness Book). antes do jantar, saída para focagem de jacarés no rio Ariaú — o guia foca a lanterna nas margens e os olhos do jacaré brilham vermelhos, revelando sua localização. jantar com culinária regional e internacional.',
      },
      {
        day: 2,
        title: "caminhada na selva + pescaria de piranha",
        description:
          "café da manhã com frutas típicas da região. caminhada na selva por trilhas pouco exploradas — o guia ensina noções de sobrevivência na floresta e mostra plantas comestíveis e medicinais (recomendado usar calça, manga comprida e sapato fechado; o hotel vende repelente se precisar). almoço com culinária regional e internacional. à tarde, pescaria recreativa de piranha e outros peixes da região amazônica — se quiser, o chef prepara sua pesca para o jantar. jantar com culinária regional e internacional.",
      },
      {
        day: 3,
        title: "botos cor-de-rosa + comunidade indígena",
        description:
          "café da manhã com frutas típicas. passeio até uma estrutura flutuante para interação com os botos cor-de-rosa — sempre acompanhada por um instrutor, com direito a nadar no maior rio do mundo com segurança total e fotos garantidas. em seguida, visita à tribo indígena Kubeua, uma comunidade receptiva onde você observa modos de vida, cultura, rituais e tradições. almoço com culinária regional e internacional. à tarde, visita a uma casa de caboclos ribeirinhos, que compartilham como vivem em harmonia com a natureza — incluindo a colheita do açaí e a produção da farinha de mandioca. jantar com culinária regional e internacional.",
      },
      {
        day: 4,
        title: "nascer do sol + pernoite acampada na selva",
        description:
          "o dia começa cedo (05h) com passeio de observação do nascer do sol, com chance de ver pássaros, botos e animais silvestres. café da manhã e almoço com culinária regional e internacional. à tarde, saída para a experiência mais imersiva do pacote: pernoite acampada na floresta amazônica, guiada apenas por lanterna, com noções práticas de sobrevivência. os guias montam um acampamento com redes suspensas (protegidas dos animais noturnos) e fazem uma fogueira para assar o peixe do jantar e acompanhamentos típicos. a noite é regada a histórias e lendas do folclore amazônico contadas pelos guias.",
      },
      {
        day: 5,
        title: "plantio + encontro das águas + retorno a manaus",
        description:
          "a floresta acorda com o canto dos pássaros. desativação do acampamento e retorno ao hotel para café da manhã com frutas típicas. em seguida, você planta uma muda de árvore amazônica, simbolizando o compromisso com a preservação da floresta. almoço com culinária regional e internacional. à tarde, retorno a Manaus para visitar o Encontro das Águas — o ponto onde o Rio Negro e o Rio Solimões correm lado a lado sem se misturar por até 8 km — com pescaria recreativa de pirarucu (peixe de água doce que chega a 150 kg) e visita à comunidade flutuante do Catalão, com igrejas, mercados e escola sobre a água. às 17h, retorno e traslado para o aeroporto ou hotel em Manaus.",
      },
    ],
    accommodation: `Amazônia Jungle Hotel — às margens do Rio Negro, a cerca de 45 minutos de Manaus de carro mais uma travessia de canoa.

suítes com ar-condicionado, chuveiro elétrico e frigobar. o hotel conta com piscina, restaurante com culinária regional e internacional, e toda a infraestrutura de selva.

na noite do 4º dia, a hospedagem é substituída pela experiência de pernoite acampada na floresta, em redes suspensas montadas pelos guias — a vivência mais imersiva do pacote.

importante: os passeios e o cronograma estão sujeitos a alterações de acordo com a época do rio — cheia (fevereiro a julho) ou seca (agosto a janeiro).`,
    accommodationImages: [
      "/images/trips/amazonia/acomodacao/1.jpeg",
      "/images/trips/amazonia/acomodacao/2.jpeg",
      "/images/trips/amazonia/acomodacao/3.jpeg",
      "/images/trips/amazonia/acomodacao/4.jpeg",
      "/images/trips/amazonia/acomodacao/5.jpeg",
      "/images/trips/amazonia/acomodacao/6.jpeg",
      "/images/trips/amazonia/acomodacao/7.jpeg",
      "/images/trips/amazonia/acomodacao/8.jpeg",
    ],
    forWhom: [
      {
        title: "quem quer viver a floresta de verdade",
        description:
          "noites na floresta amazônica, pesca de piranha, nado com boto cor-de-rosa, focagem de jacarés e o encontro das águas do Rio Negro com o Solimões. a Amazônia é transformadora.",
      },
      {
        title: "quem quer ver o brasil de um ângulo diferente",
        description:
          "a floresta mais biodiversa do planeta fica aqui no Brasil — e a maioria das brasileiras nunca foi. essa trip muda a relação com o próprio país.",
      },
      {
        title: "quem quer desconectar de verdade",
        description:
          "uma noite inteira acampada na selva, guiada só pela lanterna e pela experiência dos guias locais. sem sinal, sem pressa, sem rotina — só a floresta, o rio e a turma.",
      },
    ],
    faqs: [
      {
        question: "como chegamos até o hotel?",
        answer:
          "saímos de Manaus (buscamos no aeroporto internacional ou em qualquer hotel do perímetro urbano). o trajeto de carro dura cerca de 45 minutos, pela ponte sobre o Rio Negro, mais 5 minutos de travessia em canoa motorizada com colete salva-vidas até o Amazônia Jungle Hotel.",
      },
      {
        question: "a alimentação está inclusa?",
        answer:
          "sim! o pacote inclui pensão completa — café da manhã, almoço e jantar com culinária regional e internacional em todos os dias, inclusive durante a noite de acampamento na selva.",
      },
      {
        question: "como funciona a noite dormindo na selva?",
        answer:
          "no 4º dia, saímos para uma experiência totalmente imersiva na floresta amazônica, guiadas apenas por lanterna. os guias montam um acampamento com redes suspensas (para evitar animais noturnos) e fazem uma fogueira para assar o jantar. é uma vivência de sobrevivência guiada, segura e inesquecível.",
      },
      {
        question: "vou conseguir nadar com os botos cor-de-rosa?",
        answer:
          "sim! no 3º dia visitamos uma estrutura flutuante onde um instrutor alimenta os botos e estimula que eles se aproximem, permitindo nadar com eles no rio com total segurança e ótimas fotos.",
      },
      {
        question: "o roteiro pode mudar?",
        answer:
          "os passeios e o cronograma podem sofrer alterações conforme a época do rio: cheia (fevereiro a julho) ou seca (agosto a janeiro). isso pode alterar levemente os pontos visitados, mas a estrutura geral do pacote se mantém.",
      },
      {
        question: "o que não posso esquecer de levar?",
        answer:
          'roupas leves e de manga comprida, calça (para a caminhada na selva), sapato fechado, protetor solar, repelente (também vendido no hotel) e uma câmera.',
      },
      {
        question: "a viagem é só para mulheres?",
        answer: "sim, como sempre — experiências exclusivas para mulheres.",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "nessa edição eu não estarei presencialmente, mas vocês estarão em ótimas mãos: a Giovana Gentil, minha sócia, acompanha o grupo em todas as expedições, do começo ao fim. eu já fiz essa viagem pessoalmente e escolhi essa agência a dedo, então pode confiar que está tudo pensado nos mínimos detalhes. e claro, estarei sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem. quiser conhecer a Gi, é só dar uma olhada no Instagram dela: @giovanagentil.travel 💛",
      },
    ],
  },
  {
    slug: "amazonia-2",
    title: "Amazônia",
    destination: "Amazônia, Brasil",
    cardImage: "/images/trips/amazonia/amazonia-1.jpeg",
    heroImage: "/images/trips/amazonia/amazonia-1.jpeg",
    heroImages: [
      "/images/trips/amazonia/hero/hero-1.jpg",
      "/images/trips/amazonia/hero/hero-2.jpg",
      "/images/trips/amazonia/hero/hero-3.jpg",
      "/images/trips/amazonia/hero/hero-4.jpg",
      "/images/trips/amazonia/hero/hero-5.jpg",
      "/images/trips/amazonia/hero/hero-6.jpg",
    ],
    dates: "24 a 28 de março de 2027",
    dateForSort: "2027-03-24",
    dateForSortEnd: "2027-03-28",
    duration: "5 dias · 4 noites",
    priceDisplay: "R$ 4.500",
    priceValue: 4500,
    national: true,
    priceInstallments: "",
    agency: "Amazônia Jungle Hotel",
    urgentBadge: "esgotado",
    soldOut: true,
    tagline:
      "encontro das águas, botos cor-de-rosa e uma noite inteira dormindo na selva",
    description:
      "5 dias e 4 noites no Amazônia Jungle Hotel, às margens do Rio Negro. pacote uirapuru: focagem de jacarés, caminhada na selva, nado com botos cor-de-rosa, visita a comunidades indígenas e ribeirinhas, e uma noite de pernoite acampada na floresta com redes suspensas e fogueira. o pulmão do mundo, ao vivo.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a viagem à Amazônia (24 a 28 de março de 2027) e quero garantir minha vaga :)",
    paymentMethods: [],
    included: [
      "traslado ida e volta (buscamos você no local desejado em Manaus e levamos de volta ao final do pacote)",
      "pensão completa: café da manhã, almoço e jantar em todos os dias",
      "pernoites em suítes com ar-condicionado, chuveiro elétrico e frigobar (exceto na noite de acampamento na selva)",
      "passeios de selva: focagem de jacarés à noite, nado com botos cor-de-rosa, pescaria de piranha e de pirarucu",
      "visita a comunidade indígena, a uma casa de caboclos ribeirinhos e à comunidade flutuante do Catalão",
      "1 noite de pernoite acampada na selva com redes suspensas, fogueira e jantar de peixe assado na brasa",
      "plantio de uma muda de árvore amazônica",
      "toda a infraestrutura do Amazônia Jungle Hotel (piscina, restaurante, áreas de convivência)",
    ],
    notIncluded: [
      "passagem aérea até Manaus",
      "bebidas alcoólicas e itens de consumo pessoal",
      "gorjetas e atividades opcionais não listadas no roteiro",
    ],
    itinerary: [
      {
        day: 1,
        title: "chegada + focagem de jacarés",
        description:
          'saída de Manaus (buscamos no aeroporto ou em qualquer hotel do perímetro urbano) rumo ao Amazônia Jungle Hotel — cerca de 45 minutos de carro pela ponte sobre o Rio Negro e mais 5 minutos de travessia em canoa motorizada com colete salva-vidas. check-in com suco regional de boas-vindas e reconhecimento do hotel e suas árvores frutíferas. almoço com culinária regional e internacional. à tarde, passeio de reconhecimento da fauna e flora: igarapés, igapós e visita à exuberante Sumaúma, chamada pelos indígenas de "a mãe" das árvores, além das ruínas do antigo Ariaú Towers, que já foi o maior hotel de selva do mundo (Guinness Book). antes do jantar, saída para focagem de jacarés no rio Ariaú — o guia foca a lanterna nas margens e os olhos do jacaré brilham vermelhos, revelando sua localização. jantar com culinária regional e internacional.',
      },
      {
        day: 2,
        title: "caminhada na selva + pescaria de piranha",
        description:
          "café da manhã com frutas típicas da região. caminhada na selva por trilhas pouco exploradas — o guia ensina noções de sobrevivência na floresta e mostra plantas comestíveis e medicinais (recomendado usar calça, manga comprida e sapato fechado; o hotel vende repelente se precisar). almoço com culinária regional e internacional. à tarde, pescaria recreativa de piranha e outros peixes da região amazônica — se quiser, o chef prepara sua pesca para o jantar. jantar com culinária regional e internacional.",
      },
      {
        day: 3,
        title: "botos cor-de-rosa + comunidade indígena",
        description:
          "café da manhã com frutas típicas. passeio até uma estrutura flutuante para interação com os botos cor-de-rosa — sempre acompanhada por um instrutor, com direito a nadar no maior rio do mundo com segurança total e fotos garantidas. em seguida, visita à tribo indígena Kubeua, uma comunidade receptiva onde você observa modos de vida, cultura, rituais e tradições. almoço com culinária regional e internacional. à tarde, visita a uma casa de caboclos ribeirinhos, que compartilham como vivem em harmonia com a natureza — incluindo a colheita do açaí e a produção da farinha de mandioca. jantar com culinária regional e internacional.",
      },
      {
        day: 4,
        title: "nascer do sol + pernoite acampada na selva",
        description:
          "o dia começa cedo (05h) com passeio de observação do nascer do sol, com chance de ver pássaros, botos e animais silvestres. café da manhã e almoço com culinária regional e internacional. à tarde, saída para a experiência mais imersiva do pacote: pernoite acampada na floresta amazônica, guiada apenas por lanterna, com noções práticas de sobrevivência. os guias montam um acampamento com redes suspensas (protegidas dos animais noturnos) e fazem uma fogueira para assar o peixe do jantar e acompanhamentos típicos. a noite é regada a histórias e lendas do folclore amazônico contadas pelos guias.",
      },
      {
        day: 5,
        title: "plantio + encontro das águas + retorno a manaus",
        description:
          "a floresta acorda com o canto dos pássaros. desativação do acampamento e retorno ao hotel para café da manhã com frutas típicas. em seguida, você planta uma muda de árvore amazônica, simbolizando o compromisso com a preservação da floresta. almoço com culinária regional e internacional. à tarde, retorno a Manaus para visitar o Encontro das Águas — o ponto onde o Rio Negro e o Rio Solimões correm lado a lado sem se misturar por até 8 km — com pescaria recreativa de pirarucu (peixe de água doce que chega a 150 kg) e visita à comunidade flutuante do Catalão, com igrejas, mercados e escola sobre a água. às 17h, retorno e traslado para o aeroporto ou hotel em Manaus.",
      },
    ],
    accommodation: `Amazônia Jungle Hotel — às margens do Rio Negro, a cerca de 45 minutos de Manaus de carro mais uma travessia de canoa.

suítes com ar-condicionado, chuveiro elétrico e frigobar. o hotel conta com piscina, restaurante com culinária regional e internacional, e toda a infraestrutura de selva.

na noite do 4º dia, a hospedagem é substituída pela experiência de pernoite acampada na floresta, em redes suspensas montadas pelos guias — a vivência mais imersiva do pacote.

importante: os passeios e o cronograma estão sujeitos a alterações de acordo com a época do rio — cheia (fevereiro a julho) ou seca (agosto a janeiro).`,
    accommodationImages: [
      "/images/trips/amazonia/acomodacao/1.jpeg",
      "/images/trips/amazonia/acomodacao/2.jpeg",
      "/images/trips/amazonia/acomodacao/3.jpeg",
      "/images/trips/amazonia/acomodacao/4.jpeg",
      "/images/trips/amazonia/acomodacao/5.jpeg",
      "/images/trips/amazonia/acomodacao/6.jpeg",
      "/images/trips/amazonia/acomodacao/7.jpeg",
      "/images/trips/amazonia/acomodacao/8.jpeg",
    ],
    forWhom: [
      {
        title: "quem quer viver a floresta de verdade",
        description:
          "noites na floresta amazônica, pesca de piranha, nado com boto cor-de-rosa, focagem de jacarés e o encontro das águas do Rio Negro com o Solimões. a Amazônia é transformadora.",
      },
      {
        title: "quem quer ver o brasil de um ângulo diferente",
        description:
          "a floresta mais biodiversa do planeta fica aqui no Brasil — e a maioria das brasileiras nunca foi. essa trip muda a relação com o próprio país.",
      },
      {
        title: "quem quer desconectar de verdade",
        description:
          "uma noite inteira acampada na selva, guiada só pela lanterna e pela experiência dos guias locais. sem sinal, sem pressa, sem rotina — só a floresta, o rio e a turma.",
      },
    ],
    faqs: [
      {
        question: "como chegamos até o hotel?",
        answer:
          "saímos de Manaus (buscamos no aeroporto internacional ou em qualquer hotel do perímetro urbano). o trajeto de carro dura cerca de 45 minutos, pela ponte sobre o Rio Negro, mais 5 minutos de travessia em canoa motorizada com colete salva-vidas até o Amazônia Jungle Hotel.",
      },
      {
        question: "a alimentação está inclusa?",
        answer:
          "sim! o pacote inclui pensão completa — café da manhã, almoço e jantar com culinária regional e internacional em todos os dias, inclusive durante a noite de acampamento na selva.",
      },
      {
        question: "como funciona a noite dormindo na selva?",
        answer:
          "no 4º dia, saímos para uma experiência totalmente imersiva na floresta amazônica, guiadas apenas por lanterna. os guias montam um acampamento com redes suspensas (para evitar animais noturnos) e fazem uma fogueira para assar o jantar. é uma vivência de sobrevivência guiada, segura e inesquecível.",
      },
      {
        question: "vou conseguir nadar com os botos cor-de-rosa?",
        answer:
          "sim! no 3º dia visitamos uma estrutura flutuante onde um instrutor alimenta os botos e estimula que eles se aproximem, permitindo nadar com eles no rio com total segurança e ótimas fotos.",
      },
      {
        question: "o roteiro pode mudar?",
        answer:
          "os passeios e o cronograma podem sofrer alterações conforme a época do rio: cheia (fevereiro a julho) ou seca (agosto a janeiro). isso pode alterar levemente os pontos visitados, mas a estrutura geral do pacote se mantém.",
      },
      {
        question: "o que não posso esquecer de levar?",
        answer:
          'roupas leves e de manga comprida, calça (para a caminhada na selva), sapato fechado, protetor solar, repelente (também vendido no hotel) e uma câmera.',
      },
      {
        question: "a viagem é só para mulheres?",
        answer: "sim, como sempre — experiências exclusivas para mulheres.",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "nessa edição eu não estarei presencialmente, mas vocês estarão em ótimas mãos: a Giovana Gentil, minha sócia, acompanha o grupo em todas as expedições, do começo ao fim. eu já fiz essa viagem pessoalmente e escolhi essa agência a dedo, então pode confiar que está tudo pensado nos mínimos detalhes. e claro, estarei sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem. quiser conhecer a Gi, é só dar uma olhada no Instagram dela: @giovanagentil.travel 💛",
      },
    ],
  },
  {
    slug: "amazonia-3",
    title: "Amazônia",
    destination: "Amazônia, Brasil",
    cardImage: "/images/trips/amazonia/amazonia-1.jpeg",
    heroImage: "/images/trips/amazonia/amazonia-1.jpeg",
    heroImages: [
      "/images/trips/amazonia/hero/hero-1.jpg",
      "/images/trips/amazonia/hero/hero-2.jpg",
      "/images/trips/amazonia/hero/hero-3.jpg",
      "/images/trips/amazonia/hero/hero-4.jpg",
      "/images/trips/amazonia/hero/hero-5.jpg",
      "/images/trips/amazonia/hero/hero-6.jpg",
    ],
    dates: "29 de março a 2 de abril de 2027",
    dateForSort: "2027-03-29",
    dateForSortEnd: "2027-04-02",
    duration: "5 dias · 4 noites",
    priceDisplay: "R$ 5.000",
    priceValue: 5000,
    national: true,
    priceInstallments: "",
    agency: "Amazônia Jungle Hotel",
    tagline:
      "encontro das águas, botos cor-de-rosa e uma noite inteira dormindo na selva",
    description:
      "5 dias e 4 noites no Amazônia Jungle Hotel, às margens do Rio Negro. pacote uirapuru: focagem de jacarés, caminhada na selva, nado com botos cor-de-rosa, visita a comunidades indígenas e ribeirinhas, e uma noite de pernoite acampada na floresta com redes suspensas e fogueira. o pulmão do mundo, ao vivo.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a viagem à Amazônia (29 de março a 2 de abril de 2027) e quero garantir minha vaga :)",
    paymentMethods: [],
    included: [
      "traslado ida e volta (buscamos você no local desejado em Manaus e levamos de volta ao final do pacote)",
      "pensão completa: café da manhã, almoço e jantar em todos os dias",
      "pernoites em suítes com ar-condicionado, chuveiro elétrico e frigobar (exceto na noite de acampamento na selva)",
      "passeios de selva: focagem de jacarés à noite, nado com botos cor-de-rosa, pescaria de piranha e de pirarucu",
      "visita a comunidade indígena, a uma casa de caboclos ribeirinhos e à comunidade flutuante do Catalão",
      "1 noite de pernoite acampada na selva com redes suspensas, fogueira e jantar de peixe assado na brasa",
      "plantio de uma muda de árvore amazônica",
      "toda a infraestrutura do Amazônia Jungle Hotel (piscina, restaurante, áreas de convivência)",
    ],
    notIncluded: [
      "passagem aérea até Manaus",
      "bebidas alcoólicas e itens de consumo pessoal",
      "gorjetas e atividades opcionais não listadas no roteiro",
    ],
    itinerary: [
      {
        day: 1,
        title: "chegada + focagem de jacarés",
        description:
          'saída de Manaus (buscamos no aeroporto ou em qualquer hotel do perímetro urbano) rumo ao Amazônia Jungle Hotel — cerca de 45 minutos de carro pela ponte sobre o Rio Negro e mais 5 minutos de travessia em canoa motorizada com colete salva-vidas. check-in com suco regional de boas-vindas e reconhecimento do hotel e suas árvores frutíferas. almoço com culinária regional e internacional. à tarde, passeio de reconhecimento da fauna e flora: igarapés, igapós e visita à exuberante Sumaúma, chamada pelos indígenas de "a mãe" das árvores, além das ruínas do antigo Ariaú Towers, que já foi o maior hotel de selva do mundo (Guinness Book). antes do jantar, saída para focagem de jacarés no rio Ariaú — o guia foca a lanterna nas margens e os olhos do jacaré brilham vermelhos, revelando sua localização. jantar com culinária regional e internacional.',
      },
      {
        day: 2,
        title: "caminhada na selva + pescaria de piranha",
        description:
          "café da manhã com frutas típicas da região. caminhada na selva por trilhas pouco exploradas — o guia ensina noções de sobrevivência na floresta e mostra plantas comestíveis e medicinais (recomendado usar calça, manga comprida e sapato fechado; o hotel vende repelente se precisar). almoço com culinária regional e internacional. à tarde, pescaria recreativa de piranha e outros peixes da região amazônica — se quiser, o chef prepara sua pesca para o jantar. jantar com culinária regional e internacional.",
      },
      {
        day: 3,
        title: "botos cor-de-rosa + comunidade indígena",
        description:
          "café da manhã com frutas típicas. passeio até uma estrutura flutuante para interação com os botos cor-de-rosa — sempre acompanhada por um instrutor, com direito a nadar no maior rio do mundo com segurança total e fotos garantidas. em seguida, visita à tribo indígena Kubeua, uma comunidade receptiva onde você observa modos de vida, cultura, rituais e tradições. almoço com culinária regional e internacional. à tarde, visita a uma casa de caboclos ribeirinhos, que compartilham como vivem em harmonia com a natureza — incluindo a colheita do açaí e a produção da farinha de mandioca. jantar com culinária regional e internacional.",
      },
      {
        day: 4,
        title: "nascer do sol + pernoite acampada na selva",
        description:
          "o dia começa cedo (05h) com passeio de observação do nascer do sol, com chance de ver pássaros, botos e animais silvestres. café da manhã e almoço com culinária regional e internacional. à tarde, saída para a experiência mais imersiva do pacote: pernoite acampada na floresta amazônica, guiada apenas por lanterna, com noções práticas de sobrevivência. os guias montam um acampamento com redes suspensas (protegidas dos animais noturnos) e fazem uma fogueira para assar o peixe do jantar e acompanhamentos típicos. a noite é regada a histórias e lendas do folclore amazônico contadas pelos guias.",
      },
      {
        day: 5,
        title: "plantio + encontro das águas + retorno a manaus",
        description:
          "a floresta acorda com o canto dos pássaros. desativação do acampamento e retorno ao hotel para café da manhã com frutas típicas. em seguida, você planta uma muda de árvore amazônica, simbolizando o compromisso com a preservação da floresta. almoço com culinária regional e internacional. à tarde, retorno a Manaus para visitar o Encontro das Águas — o ponto onde o Rio Negro e o Rio Solimões correm lado a lado sem se misturar por até 8 km — com pescaria recreativa de pirarucu (peixe de água doce que chega a 150 kg) e visita à comunidade flutuante do Catalão, com igrejas, mercados e escola sobre a água. às 17h, retorno e traslado para o aeroporto ou hotel em Manaus.",
      },
    ],
    accommodation: `Amazônia Jungle Hotel — às margens do Rio Negro, a cerca de 45 minutos de Manaus de carro mais uma travessia de canoa.

suítes com ar-condicionado, chuveiro elétrico e frigobar. o hotel conta com piscina, restaurante com culinária regional e internacional, e toda a infraestrutura de selva.

na noite do 4º dia, a hospedagem é substituída pela experiência de pernoite acampada na floresta, em redes suspensas montadas pelos guias — a vivência mais imersiva do pacote.

importante: os passeios e o cronograma estão sujeitos a alterações de acordo com a época do rio — cheia (fevereiro a julho) ou seca (agosto a janeiro).`,
    accommodationImages: [
      "/images/trips/amazonia/acomodacao/1.jpeg",
      "/images/trips/amazonia/acomodacao/2.jpeg",
      "/images/trips/amazonia/acomodacao/3.jpeg",
      "/images/trips/amazonia/acomodacao/4.jpeg",
      "/images/trips/amazonia/acomodacao/5.jpeg",
      "/images/trips/amazonia/acomodacao/6.jpeg",
      "/images/trips/amazonia/acomodacao/7.jpeg",
      "/images/trips/amazonia/acomodacao/8.jpeg",
    ],
    forWhom: [
      {
        title: "quem quer viver a floresta de verdade",
        description:
          "noites na floresta amazônica, pesca de piranha, nado com boto cor-de-rosa, focagem de jacarés e o encontro das águas do Rio Negro com o Solimões. a Amazônia é transformadora.",
      },
      {
        title: "quem quer ver o brasil de um ângulo diferente",
        description:
          "a floresta mais biodiversa do planeta fica aqui no Brasil — e a maioria das brasileiras nunca foi. essa trip muda a relação com o próprio país.",
      },
      {
        title: "quem quer desconectar de verdade",
        description:
          "uma noite inteira acampada na selva, guiada só pela lanterna e pela experiência dos guias locais. sem sinal, sem pressa, sem rotina — só a floresta, o rio e a turma.",
      },
    ],
    faqs: [
      {
        question: "como chegamos até o hotel?",
        answer:
          "saímos de Manaus (buscamos no aeroporto internacional ou em qualquer hotel do perímetro urbano). o trajeto de carro dura cerca de 45 minutos, pela ponte sobre o Rio Negro, mais 5 minutos de travessia em canoa motorizada com colete salva-vidas até o Amazônia Jungle Hotel.",
      },
      {
        question: "a alimentação está inclusa?",
        answer:
          "sim! o pacote inclui pensão completa — café da manhã, almoço e jantar com culinária regional e internacional em todos os dias, inclusive durante a noite de acampamento na selva.",
      },
      {
        question: "como funciona a noite dormindo na selva?",
        answer:
          "no 4º dia, saímos para uma experiência totalmente imersiva na floresta amazônica, guiadas apenas por lanterna. os guias montam um acampamento com redes suspensas (para evitar animais noturnos) e fazem uma fogueira para assar o jantar. é uma vivência de sobrevivência guiada, segura e inesquecível.",
      },
      {
        question: "vou conseguir nadar com os botos cor-de-rosa?",
        answer:
          "sim! no 3º dia visitamos uma estrutura flutuante onde um instrutor alimenta os botos e estimula que eles se aproximem, permitindo nadar com eles no rio com total segurança e ótimas fotos.",
      },
      {
        question: "o roteiro pode mudar?",
        answer:
          "os passeios e o cronograma podem sofrer alterações conforme a época do rio: cheia (fevereiro a julho) ou seca (agosto a janeiro). isso pode alterar levemente os pontos visitados, mas a estrutura geral do pacote se mantém.",
      },
      {
        question: "o que não posso esquecer de levar?",
        answer:
          'roupas leves e de manga comprida, calça (para a caminhada na selva), sapato fechado, protetor solar, repelente (também vendido no hotel) e uma câmera.',
      },
      {
        question: "a viagem é só para mulheres?",
        answer: "sim, como sempre — experiências exclusivas para mulheres.",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "nessa edição eu não estarei presencialmente, mas vocês estarão em ótimas mãos: a Giovana Gentil, minha sócia, acompanha o grupo em todas as expedições, do começo ao fim. eu já fiz essa viagem pessoalmente e escolhi essa agência a dedo, então pode confiar que está tudo pensado nos mínimos detalhes. e claro, estarei sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem. quiser conhecer a Gi, é só dar uma olhada no Instagram dela: @giovanagentil.travel 💛",
      },
    ],
  },
  {
    slug: "amazonia-4",
    title: "Amazônia",
    destination: "Amazônia, Brasil",
    cardImage: "/images/trips/amazonia/amazonia-1.jpeg",
    heroImage: "/images/trips/amazonia/amazonia-1.jpeg",
    heroImages: [
      "/images/trips/amazonia/hero/hero-1.jpg",
      "/images/trips/amazonia/hero/hero-2.jpg",
      "/images/trips/amazonia/hero/hero-3.jpg",
      "/images/trips/amazonia/hero/hero-4.jpg",
      "/images/trips/amazonia/hero/hero-5.jpg",
      "/images/trips/amazonia/hero/hero-6.jpg",
    ],
    dates: "27 a 31 de maio de 2027",
    dateForSort: "2027-05-27",
    dateForSortEnd: "2027-05-31",
    duration: "5 dias · 4 noites",
    priceDisplay: "R$ 4.500",
    priceValue: 4500,
    national: true,
    priceInstallments: "",
    agency: "Amazônia Jungle Hotel",
    tagline:
      "encontro das águas, botos cor-de-rosa e uma noite inteira dormindo na selva",
    description:
      "5 dias e 4 noites no Amazônia Jungle Hotel, às margens do Rio Negro. pacote uirapuru: focagem de jacarés, caminhada na selva, nado com botos cor-de-rosa, visita a comunidades indígenas e ribeirinhas, e uma noite de pernoite acampada na floresta com redes suspensas e fogueira. o pulmão do mundo, ao vivo.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a viagem à Amazônia (27 a 31 de maio de 2027) e quero garantir minha vaga :)",
    paymentMethods: [],
    included: [
      "traslado ida e volta (buscamos você no local desejado em Manaus e levamos de volta ao final do pacote)",
      "pensão completa: café da manhã, almoço e jantar em todos os dias",
      "pernoites em suítes com ar-condicionado, chuveiro elétrico e frigobar (exceto na noite de acampamento na selva)",
      "passeios de selva: focagem de jacarés à noite, nado com botos cor-de-rosa, pescaria de piranha e de pirarucu",
      "visita a comunidade indígena, a uma casa de caboclos ribeirinhos e à comunidade flutuante do Catalão",
      "1 noite de pernoite acampada na selva com redes suspensas, fogueira e jantar de peixe assado na brasa",
      "plantio de uma muda de árvore amazônica",
      "toda a infraestrutura do Amazônia Jungle Hotel (piscina, restaurante, áreas de convivência)",
    ],
    notIncluded: [
      "passagem aérea até Manaus",
      "bebidas alcoólicas e itens de consumo pessoal",
      "gorjetas e atividades opcionais não listadas no roteiro",
    ],
    itinerary: [
      {
        day: 1,
        title: "chegada + focagem de jacarés",
        description:
          'saída de Manaus (buscamos no aeroporto ou em qualquer hotel do perímetro urbano) rumo ao Amazônia Jungle Hotel — cerca de 45 minutos de carro pela ponte sobre o Rio Negro e mais 5 minutos de travessia em canoa motorizada com colete salva-vidas. check-in com suco regional de boas-vindas e reconhecimento do hotel e suas árvores frutíferas. almoço com culinária regional e internacional. à tarde, passeio de reconhecimento da fauna e flora: igarapés, igapós e visita à exuberante Sumaúma, chamada pelos indígenas de "a mãe" das árvores, além das ruínas do antigo Ariaú Towers, que já foi o maior hotel de selva do mundo (Guinness Book). antes do jantar, saída para focagem de jacarés no rio Ariaú — o guia foca a lanterna nas margens e os olhos do jacaré brilham vermelhos, revelando sua localização. jantar com culinária regional e internacional.',
      },
      {
        day: 2,
        title: "caminhada na selva + pescaria de piranha",
        description:
          "café da manhã com frutas típicas da região. caminhada na selva por trilhas pouco exploradas — o guia ensina noções de sobrevivência na floresta e mostra plantas comestíveis e medicinais (recomendado usar calça, manga comprida e sapato fechado; o hotel vende repelente se precisar). almoço com culinária regional e internacional. à tarde, pescaria recreativa de piranha e outros peixes da região amazônica — se quiser, o chef prepara sua pesca para o jantar. jantar com culinária regional e internacional.",
      },
      {
        day: 3,
        title: "botos cor-de-rosa + comunidade indígena",
        description:
          "café da manhã com frutas típicas. passeio até uma estrutura flutuante para interação com os botos cor-de-rosa — sempre acompanhada por um instrutor, com direito a nadar no maior rio do mundo com segurança total e fotos garantidas. em seguida, visita à tribo indígena Kubeua, uma comunidade receptiva onde você observa modos de vida, cultura, rituais e tradições. almoço com culinária regional e internacional. à tarde, visita a uma casa de caboclos ribeirinhos, que compartilham como vivem em harmonia com a natureza — incluindo a colheita do açaí e a produção da farinha de mandioca. jantar com culinária regional e internacional.",
      },
      {
        day: 4,
        title: "nascer do sol + pernoite acampada na selva",
        description:
          "o dia começa cedo (05h) com passeio de observação do nascer do sol, com chance de ver pássaros, botos e animais silvestres. café da manhã e almoço com culinária regional e internacional. à tarde, saída para a experiência mais imersiva do pacote: pernoite acampada na floresta amazônica, guiada apenas por lanterna, com noções práticas de sobrevivência. os guias montam um acampamento com redes suspensas (protegidas dos animais noturnos) e fazem uma fogueira para assar o peixe do jantar e acompanhamentos típicos. a noite é regada a histórias e lendas do folclore amazônico contadas pelos guias.",
      },
      {
        day: 5,
        title: "plantio + encontro das águas + retorno a manaus",
        description:
          "a floresta acorda com o canto dos pássaros. desativação do acampamento e retorno ao hotel para café da manhã com frutas típicas. em seguida, você planta uma muda de árvore amazônica, simbolizando o compromisso com a preservação da floresta. almoço com culinária regional e internacional. à tarde, retorno a Manaus para visitar o Encontro das Águas — o ponto onde o Rio Negro e o Rio Solimões correm lado a lado sem se misturar por até 8 km — com pescaria recreativa de pirarucu (peixe de água doce que chega a 150 kg) e visita à comunidade flutuante do Catalão, com igrejas, mercados e escola sobre a água. às 17h, retorno e traslado para o aeroporto ou hotel em Manaus.",
      },
    ],
    accommodation: `Amazônia Jungle Hotel — às margens do Rio Negro, a cerca de 45 minutos de Manaus de carro mais uma travessia de canoa.

suítes com ar-condicionado, chuveiro elétrico e frigobar. o hotel conta com piscina, restaurante com culinária regional e internacional, e toda a infraestrutura de selva.

na noite do 4º dia, a hospedagem é substituída pela experiência de pernoite acampada na floresta, em redes suspensas montadas pelos guias — a vivência mais imersiva do pacote.

importante: os passeios e o cronograma estão sujeitos a alterações de acordo com a época do rio — cheia (fevereiro a julho) ou seca (agosto a janeiro).`,
    accommodationImages: [
      "/images/trips/amazonia/acomodacao/1.jpeg",
      "/images/trips/amazonia/acomodacao/2.jpeg",
      "/images/trips/amazonia/acomodacao/3.jpeg",
      "/images/trips/amazonia/acomodacao/4.jpeg",
      "/images/trips/amazonia/acomodacao/5.jpeg",
      "/images/trips/amazonia/acomodacao/6.jpeg",
      "/images/trips/amazonia/acomodacao/7.jpeg",
      "/images/trips/amazonia/acomodacao/8.jpeg",
    ],
    forWhom: [
      {
        title: "quem quer viver a floresta de verdade",
        description:
          "noites na floresta amazônica, pesca de piranha, nado com boto cor-de-rosa, focagem de jacarés e o encontro das águas do Rio Negro com o Solimões. a Amazônia é transformadora.",
      },
      {
        title: "quem quer ver o brasil de um ângulo diferente",
        description:
          "a floresta mais biodiversa do planeta fica aqui no Brasil — e a maioria das brasileiras nunca foi. essa trip muda a relação com o próprio país.",
      },
      {
        title: "quem quer desconectar de verdade",
        description:
          "uma noite inteira acampada na selva, guiada só pela lanterna e pela experiência dos guias locais. sem sinal, sem pressa, sem rotina — só a floresta, o rio e a turma.",
      },
    ],
    faqs: [
      {
        question: "como chegamos até o hotel?",
        answer:
          "saímos de Manaus (buscamos no aeroporto internacional ou em qualquer hotel do perímetro urbano). o trajeto de carro dura cerca de 45 minutos, pela ponte sobre o Rio Negro, mais 5 minutos de travessia em canoa motorizada com colete salva-vidas até o Amazônia Jungle Hotel.",
      },
      {
        question: "a alimentação está inclusa?",
        answer:
          "sim! o pacote inclui pensão completa — café da manhã, almoço e jantar com culinária regional e internacional em todos os dias, inclusive durante a noite de acampamento na selva.",
      },
      {
        question: "como funciona a noite dormindo na selva?",
        answer:
          "no 4º dia, saímos para uma experiência totalmente imersiva na floresta amazônica, guiadas apenas por lanterna. os guias montam um acampamento com redes suspensas (para evitar animais noturnos) e fazem uma fogueira para assar o jantar. é uma vivência de sobrevivência guiada, segura e inesquecível.",
      },
      {
        question: "vou conseguir nadar com os botos cor-de-rosa?",
        answer:
          "sim! no 3º dia visitamos uma estrutura flutuante onde um instrutor alimenta os botos e estimula que eles se aproximem, permitindo nadar com eles no rio com total segurança e ótimas fotos.",
      },
      {
        question: "o roteiro pode mudar?",
        answer:
          "os passeios e o cronograma podem sofrer alterações conforme a época do rio: cheia (fevereiro a julho) ou seca (agosto a janeiro). isso pode alterar levemente os pontos visitados, mas a estrutura geral do pacote se mantém.",
      },
      {
        question: "o que não posso esquecer de levar?",
        answer:
          'roupas leves e de manga comprida, calça (para a caminhada na selva), sapato fechado, protetor solar, repelente (também vendido no hotel) e uma câmera.',
      },
      {
        question: "a viagem é só para mulheres?",
        answer: "sim, como sempre — experiências exclusivas para mulheres.",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "nessa edição eu não estarei presencialmente, mas vocês estarão em ótimas mãos: a Mariana Scherer, minha sócia, acompanhará o grupo do começo ao fim. eu já fiz essa viagem pessoalmente e escolhi essa agência a dedo, então pode confiar que está tudo pensado nos mínimos detalhes. e claro, estarei sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem. quiser conhecer a Mari, é só dar uma olhada no Instagram dela: @_whereis_mari 💛",
      },
    ],
  },
  {
    slug: "nicaragua",
    hidden: true,
    title: "Retiro na Nicarágua — Villa Laguna",
    destination: "Laguna de Apoyo, Nicarágua",
    cardImage: "/images/trips/nicaragua/nicaragua-card.jpg",
    heroImage: "/images/trips/nicaragua/nicaragua-hero.jpg",
    dates: "8 a 13 de março de 2027",
    dateForSort: "2027-03-08",
    dateForSortEnd: "2027-03-13",
    duration: "6 dias · 5 noites",
    priceDisplay: "US$ 1.500",
    priceValue: 8250,
    national: false,
    priceInstallments:
      "pagamento via Wise em 3 parcelas: US$ 100 até 12/12 · US$ 650 até 30/12 · US$ 750 até 30/01",
    agency: "Villa Laguna",
    urgentBadge: "7 vagas restantes",
    tagline:
      "retiro intimista à beira de uma laguna vulcânica, villa exclusiva pro grupo e tudo incluso",
    description:
      "um retiro intimista à beira de uma laguna vulcânica de águas quentes, dentro da reserva natural de Laguna de Apoyo, entre Granada e Masaya. uma villa só para o nosso grupo, cozinha 100% vegana, yoga com vista para a água e dias de passeio pela Nicarágua. é só chegar — cuidam de tudo: traslados, refeições, atividades e logística.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a viagem à Nicarágua (8 a 13 de março de 2027) e quero garantir minha vaga :)",
    paymentMethods: ["Wise"],
    included: [
      "hospedagem por 5 noites em quarto compartilhado, com banheiro privativo e limpeza diária",
      "3 refeições veganas caseiras por dia, com bebida natural (jantar já no dia da chegada e café da manhã no dia da saída)",
      "traslados aeroporto ↔ villa (Manágua, MGA), individuais e disponíveis 24h",
      "presente de boas-vindas de artesãos locais",
      "água, café orgânico da fazenda e chás à vontade",
      "uso exclusivo da propriedade para o nosso grupo",
      "todas as atividades do roteiro: dia em Granada + Ilhotas, dia em San Juan del Sur + catamarã, visita noturna ao Vulcão Masaya, curso intro de freediving, 1 aula de yoga e massagens de 60 min (nos dias 2 e 4)",
      "coordenação e equipe local cuidando de tudo no dia a dia",
    ],
    notIncluded: [
      "voos até Manágua (MGA)",
      "seguro viagem (fortemente recomendado)",
      "refeições fora nos dias de passeio: almoço em Granada (~US$ 15) e almoço em San Juan del Sur (~US$ 15) — o jantar (pizza) em San Juan já está incluso",
      "bebidas alcoólicas extras (bar e petiscos do catamarã já estão inclusos)",
      "gorjetas (voluntárias) e compras pessoais / souvenirs",
    ],
    itinerary: [
      {
        day: 1,
        title: "seg, 08/mar — chegada",
        description:
          "traslados disponíveis a qualquer horário no dia da chegada (cerca de 1h do aeroporto). check-in a partir das 14h. encontro de boas-vindas, jantar e uma primeira noite para relaxar.",
      },
      {
        day: 2,
        title: "ter, 09/mar — yoga, massagem e vulcão",
        description:
          "yoga ao amanhecer (7h–8h15), café da manhã e almoço inclusos. massagem de 60 min ao longo da tarde, com tempo livre no restante. por volta das 16h saímos para a visita noturna ao Vulcão Masaya — dá pra espiar dentro de um vulcão ativo, com parada no mercado de artesanato de Masaya. retorno ~19h30 e jantar tardio.",
      },
      {
        day: 3,
        title: "qua, 10/mar — Granada + Ilhotas",
        description:
          "café da manhã e saída por volta das 9h30. dia na cidade colonial de Granada, com almoço por lá (por conta) e passeio de barco pelas Isletas à tarde. de volta à villa entre 16h e 17h para o jantar.",
      },
      {
        day: 4,
        title: "qui, 11/mar — freediving e descanso",
        description:
          "após o café, curso introdutório de freediving na própria laguna (teoria + prática em águas abertas). retorno à villa por volta das 14h para almoço em casa (não na escola de freediving). tarde de descanso, massagem full-body de 60 min e jantar na villa.",
      },
      {
        day: 5,
        title: "sex, 12/mar — dia de praia em San Juan del Sur",
        description:
          "café cedo e dia inteiro na praia: mirante do Cristo, tempo livre na cidade, almoço por lá (por conta) e, à tarde, passeio de catamarã (bar e petiscos inclusos) até o pôr do sol. jantar em San Juan (a pizza do jantar será inclusa).",
      },
      {
        day: 6,
        title: "sáb, 13/mar — despedida",
        description:
          "café da manhã e saída às 11h, com traslados de volta ao aeroporto.",
      },
    ],
    travelRequirements:
      "brasileiros não precisam de visto de turismo para estadias de até 90 dias na Nicarágua. basta apresentar um passaporte com validade mínima de seis meses, comprovante de voo de ida e volta, e pagar uma taxa de entrada de aproximadamente US$ 10 (tourist card) ao chegar ao país. além disso, o Certificado Internacional de Vacinação contra a Febre Amarela é obrigatório.",
    accommodation: `Villa Laguna, às margens da Laguna de Apoyo — uma cratera vulcânica de 20.000 anos entre Granada e Masaya, de águas mornas e mineral-ricas.

acomodação em 7 quartos (2 suítes vista lago com varanda, 2 quartos duplos com pátio de frente pra lagoa e 3 quartos duplos vista jardim), todos com banheiro privativo, limpeza diária e troca de toalhas a cada 3 dias.

espaços comuns: sala de estar e cozinha aberta com mesas grandes e redes; yoga shala de frente pro lago, equipada com tapetes, blocos e almofadas; rancho ao ar livre, usado para refeições, workshops e atividades, com vista estonteante para a lagoa.

uso exclusivo da propriedade durante toda a estadia — sem dividir espaço com outros hóspedes.`,
    forWhom: [
      {
        title: "quem quer desconectar de verdade",
        description:
          "retiro privativo com uso exclusivo da propriedade, dentro de uma cratera vulcânica cercada de floresta tropical — sem sinal, sem pressa, só a lagoa e a turma.",
      },
      {
        title: "quem quer aventura e paisagem",
        description:
          "vulcão ativo à noite, catamarã com bar em San Juan del Sur, passeio pelas Isletas em Granada e introdução ao freediving — tudo incluso no pacote.",
      },
      {
        title: "quem busca uma experiência íntima",
        description:
          "grupo fechado e vagas limitadas, hospedagem com uso exclusivo da villa e coordenação local personalizada do início ao fim.",
      },
    ],
    faqs: [
      {
        question: "como funciona o pagamento?",
        answer:
          "pagamento via Wise, em 3 parcelas:\n\n1ª parcela (reserva da vaga) — US$ 100 até 12/12\n2ª parcela — US$ 650 até 30/12\n3ª parcela (saldo final) — US$ 750 até 30/01\n\na vaga só é garantida após o pagamento da 1ª parcela. a parcela inicial faz parte do depósito de reserva e é não reembolsável. cada participante cobre a própria taxa do Wise, para que o valor chegue completo. vagas limitadas — o grupo é pequeno e fecha rápido.",
      },
      {
        question: "o que preciso saber antes de viajar?",
        answer:
          "passaporte válido é obrigatório — confira a validade com antecedência. a cozinha é 100% vegana, com opções sem glúten e outras restrições alimentares atendidas mediante aviso prévio. o clima é quente e tropical: leve roupas leves, traje de banho, protetor solar, repelente, chapéu e roupa de yoga. recomendamos contratar seguro viagem para toda a estadia. qualquer dúvida, é só chamar a Julia.",
      },
      {
        question: "a viagem é só para mulheres?",
        answer: "sim, como sempre — experiências exclusivas para mulheres.",
      },
    ],
  },
  {
    slug: "itacare",
    title: "Itacaré",
    destination: "Itacaré, Bahia",
    cardImage: "/images/trips/itacare/hero/hero-1.jpg",
    heroImage: "/images/trips/itacare/hero/hero-1.jpg",
    heroImages: [
      "/images/trips/itacare/hero/hero-1.jpg",
      "/images/trips/itacare/hero/hero-2.jpg",
      "/images/trips/itacare/hero/hero-3.jpg",
      "/images/trips/itacare/hero/hero-4.jpg",
    ],
    dates: "29 de junho a 03 de julho de 2027",
    dateForSort: "2027-06-29",
    dateForSortEnd: "2027-07-03",
    duration: "5 dias",
    priceDisplay: "R$ 2.500",
    priceValue: 2500,
    national: true,
    priceInstallments:
      "aceitamos pix, boleto ou cartão — parcelamento no cartão em até 6x com juros; no pix, os valores precisam estar quitados até o início da viagem",
    agency: "Giovana Gentil x Numaré Brand",
    tagline:
      "trilhas, praias selvagens e cachoeiras na Bahia, em parceria inédita com a Numaré Brand",
    description:
      "5 dias, 12 meninas, em um dos maiores cartões postais do Brasil. Itacaré não é só praia bonita e água cristalina: é mata atlântica, trilhas, rios, cachoeiras e comunidades locais, com praias que só são acessíveis depois de uma caminhada pela mata. em uma edição inédita, teremos como parceira a Numaré Brand — cada menina recebe um kit especial da marca pra usar na viagem (e levar pra casa depois). voo de ida e volta para Ilhéus (IOS).",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a viagem a Itacaré (29 de junho a 3 de julho de 2027) e quero garantir minha vaga :)",
    paymentMethods: ["pix", "boleto", "cartão de crédito"],
    included: [
      "transfer Ilhéus ↔ Itacaré",
      "kit completo Numaré Brand",
      "kit da marca Mahai",
      "hospedagem",
      "café da manhã",
      "aula de surf",
      "passeio na Praia da Engenhoca",
      "aula de altinha",
    ],
    notIncluded: [
      "passagem aérea",
      "refeições (almoços e jantares)",
      "bebidas e gastos pessoais (compras, souvenirs, snacks — estimativa de R$ 300 a R$ 500 ao longo dos 5 dias)",
      "deslocamentos internos em Itacaré (motoristas locais e estacionamentos)",
      'tudo não mencionado em "o que está incluso"',
    ],
    itinerary: [
      {
        day: 1,
        title: "dia 1 — chegada a Itacaré (Ilhéus → Itacaré)",
        description:
          "o primeiro dia é para chegar, respirar e começar a entrar no clima de Itacaré. depois do voo e do transfer até a hospedagem, aproveitamos a tarde na Praia da Concha, com mar calminho — cenário perfeito pra desacelerar depois da viagem. à noite, jantar especial no centro histórico, pra começar oficialmente essa experiência juntas.",
      },
      {
        day: 2,
        title: "dia 2 — Itacarezinho (praia de Itacarezinho → altinha → centrinho)",
        description:
          "dia inteiro para viver uma das praias mais bonitas de Itacaré: Itacarezinho (ou Prainha, dependendo das condições). a ideia é aproveitar o dia sem pressa, entre mar, areia, sol e muita conversa. pra deixar tudo ainda mais divertido, teremos uma aula de altinha em grupo — porque viagem boa também tem que ter movimento e risada. no fim da tarde, voltamos pra hospedagem pra descansar.",
      },
      {
        day: 3,
        title: "dia 3 — aula de surf e Engenhoca",
        description:
          "domingo é dia de colocar o pé na areia e se aventurar no surf! faremos uma trilha curta, pela manhã, até a Praia da Engenhoca, onde teremos uma aula de surf em grupo e aproveitaremos o restante do dia por lá, curtindo a praia, o mar e o clima de Itacaré sem pressa. um dia pra experimentar algo novo, se divertir juntas e, claro, pegar bastante sol.",
      },
      {
        day: 4,
        title: "dia 4 — Praia da Tiririca",
        description:
          "dia inteiro para viver uma das praias mais bonitas de Itacaré: Itacarezinho (ou Prainha, dependendo das condições). a ideia é aproveitar o dia sem pressa, entre mar, areia, sol e muita conversa. pra deixar tudo ainda mais divertido, teremos uma aula de altinha em grupo — porque viagem boa também tem que ter movimento e risada. no fim da tarde, voltamos pra hospedagem pra descansar.",
      },
      {
        day: 5,
        title: "dia 5 — a despedida",
        description:
          "antes de dizer adeus a Itacaré, uma manhã livre pra caminhar pelo centro histórico, conhecer lojinhas, comprar artesanatos e aproveitar os últimos momentos na cidade. fechamos com um café da manhã juntas, de despedida, antes de seguir pro aeroporto — os transfers são organizados de acordo com o horário do voo de cada uma, então se alguém tiver um voo mais cedo, é só avisar.",
      },
    ],
    accommodation: `casa triplex a 450m do centro histórico e a 250m da Praia da Concha — 12 hóspedes, 5 quartos, 10 camas e 5 banheiros.

suíte 1: 2 camas de solteiro · suíte 2: 2 camas de solteiro · suíte 3: 1 cama de solteiro e 1 de casal · suíte 4: 1 cama de solteiro e 1 de casal · suíte 5: 1 cama de casal.

a organização dos quartos é decidida coletivamente na chegada, de forma tranquila — a gente se ajeita!`,
    accommodationImages: [
      "/images/trips/itacare/acomodacao/1.jpg",
      "/images/trips/itacare/acomodacao/2.jpg",
      "/images/trips/itacare/acomodacao/3.jpg",
      "/images/trips/itacare/acomodacao/4.jpg",
    ],
    forWhom: [
      {
        title: "quem quer ir além do óbvio",
        description:
          "Itacaré é muito mais que praia: trilhas na mata atlântica, rios, cachoeiras e comunidades locais que não aparecem tanto nos roteiros tradicionais.",
      },
      {
        title: "quem quer se conectar e se mover",
        description:
          "aula de surf, aula de altinha, trilhas até praias preservadas e muito tempo pra desacelerar, comer bem e trocar histórias.",
      },
      {
        title: "quem gosta de moda e experiências novas",
        description:
          "em parceria com a Numaré Brand, cada menina recebe um kit especial de peças pra usar na viagem (e levar pra casa) e participa de fotos e vídeos da marca.",
      },
    ],
    faqs: [
      {
        question: "como funciona a expedição?",
        answer:
          "a ida até Ilhéus é por conta de cada uma. na chegada, você já tem um carro designado, saindo de Ilhéus rumo a Itacaré — a Gio passa o dia no aeroporto recebendo todo mundo e ajudando a encontrar o transfer certo. no dia 3 de julho, os transfers saem de Itacaré de volta ao Aeroporto de Ilhéus.",
      },
      {
        question: "preciso fazer todas as atividades?",
        answer:
          "não! como toda a programação já está inclusa no pacote, incentivamos que você aproveite ao máximo, mas não é obrigada a participar de nada.",
      },
      {
        question: "como será a configuração das camas?",
        answer:
          "a casa tem diferentes configurações — são 10 camas no total, em 5 quartos. a organização dos quartos é decidida coletivamente na chegada, de forma bem tranquila.",
      },
      {
        question: "vocês ajudam na compra do aéreo?",
        answer:
          "sim! temos uma agência parceira que ajuda vocês a encontrar passagens baratas e com bom custo-benefício — é só falar com a Gio e pedir ajuda.",
      },
      {
        question: "como a Numaré entra na viagem?",
        answer:
          "a Numaré é a patrocinadora dessa expedição. na chegada, cada uma recebe um kit com peças da marca pra usar durante a viagem — e claro, levar pra casa depois. ao longo dos dias, registramos fotos e vídeos para uso da Numaré; ao participar da viagem, você concede o direito de uso de imagem para publicação desse conteúdo nas redes sociais da marca. se tiver alguma objeção quanto a esse ponto, é essencial falar com a Gio antes da viagem.",
      },
      {
        question: "não quero participar da aula de surf, e agora?",
        answer:
          "sem problema! é só avisar a Gio ou a Malice com antecedência — enquanto o grupo estiver na aula, você pode curtir a praia à vontade.",
      },
      {
        question: "como funciona o pagamento?",
        answer:
          "aceitamos pix, boleto ou cartão. no cartão, o parcelamento é em até 6x com juros; no pix, o valor total precisa estar quitado até o início da viagem.",
      },
      {
        question: "qual a política de cancelamento?",
        answer:
          "o cancelamento deve ser solicitado até 15 dias antes do início dos serviços contratados; após esse prazo, será cobrada uma taxa de 50% do valor contratado. devoluções são feitas com desconto das taxas de transferência bancária. em caso de não comparecimento (no-show), a cobrança é de 100% dos serviços contratados.",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "nessa edição eu não estarei presencialmente, mas vocês estarão em ótimas mãos: a Giovana Gentil, minha sócia, acompanha o grupo do início ao fim. a Gio tem 24 anos, é de São Paulo, e já passou 5 meses mochilando sozinha pelo mundo — hoje organiza viagens em grupo pra mulheres com o propósito de ajudar quem quer viajar, mas não sabe como. eu já fiz essa viagem pessoalmente e escolhi essa parceria a dedo, então pode confiar que está tudo pensado nos mínimos detalhes. e claro, estarei sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem. quiser conhecer a Gi, é só dar uma olhada no Instagram dela: @giovanagentil.travel 💛",
      },
    ],
  },
  {
    slug: "itacare-2",
    title: "Itacaré",
    destination: "Itacaré, Bahia",
    cardImage: "/images/trips/itacare/hero/hero-1.jpg",
    heroImage: "/images/trips/itacare/hero/hero-1.jpg",
    heroImages: [
      "/images/trips/itacare/hero/hero-1.jpg",
      "/images/trips/itacare/hero/hero-2.jpg",
      "/images/trips/itacare/hero/hero-3.jpg",
      "/images/trips/itacare/hero/hero-4.jpg",
    ],
    dates: "30 de outubro a 03 de novembro de 2026",
    dateForSort: "2026-10-30",
    dateForSortEnd: "2026-11-03",
    duration: "5 dias",
    priceDisplay: "R$ 2.500",
    priceValue: 2500,
    national: true,
    priceInstallments:
      "aceitamos pix, boleto ou cartão — parcelamento no cartão em até 6x com juros; no pix, os valores precisam estar quitados até o início da viagem",
    agency: "Giovana Gentil x Numaré Brand",
    tagline:
      "trilhas, praias selvagens e cachoeiras na Bahia, em parceria inédita com a Numaré Brand",
    description:
      "5 dias, 12 meninas, em um dos maiores cartões postais do Brasil. Itacaré não é só praia bonita e água cristalina: é mata atlântica, trilhas, rios, cachoeiras e comunidades locais, com praias que só são acessíveis depois de uma caminhada pela mata. em uma edição inédita, teremos como parceira a Numaré Brand — cada menina recebe um kit especial da marca pra usar na viagem (e levar pra casa depois). voo de ida e volta para Ilhéus (IOS).",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a viagem a Itacaré (30 de outubro a 3 de novembro de 2026) e quero garantir minha vaga :)",
    paymentMethods: ["pix", "boleto", "cartão de crédito"],
    included: [
      "transfer Ilhéus ↔ Itacaré",
      "kit completo Numaré Brand",
      "kit da marca Mahai",
      "hospedagem",
      "café da manhã",
      "aula de surf",
      "passeio na Praia da Engenhoca",
      "aula de altinha",
    ],
    notIncluded: [
      "passagem aérea",
      "refeições (almoços e jantares)",
      "bebidas e gastos pessoais (compras, souvenirs, snacks — estimativa de R$ 300 a R$ 500 ao longo dos 5 dias)",
      "deslocamentos internos em Itacaré (motoristas locais e estacionamentos)",
      'tudo não mencionado em "o que está incluso"',
    ],
    itinerary: [
      {
        day: 1,
        title: "dia 1 — chegada a Itacaré (Ilhéus → Itacaré)",
        description:
          "o primeiro dia é para chegar, respirar e começar a entrar no clima de Itacaré. depois do voo e do transfer até a hospedagem, aproveitamos a tarde na Praia da Concha, com mar calminho — cenário perfeito pra desacelerar depois da viagem. à noite, jantar especial no centro histórico, pra começar oficialmente essa experiência juntas.",
      },
      {
        day: 2,
        title: "dia 2 — Itacarezinho (praia de Itacarezinho → altinha → centrinho)",
        description:
          "dia inteiro para viver uma das praias mais bonitas de Itacaré: Itacarezinho (ou Prainha, dependendo das condições). a ideia é aproveitar o dia sem pressa, entre mar, areia, sol e muita conversa. pra deixar tudo ainda mais divertido, teremos uma aula de altinha em grupo — porque viagem boa também tem que ter movimento e risada. no fim da tarde, voltamos pra hospedagem pra descansar.",
      },
      {
        day: 3,
        title: "dia 3 — aula de surf e Engenhoca",
        description:
          "domingo é dia de colocar o pé na areia e se aventurar no surf! faremos uma trilha curta, pela manhã, até a Praia da Engenhoca, onde teremos uma aula de surf em grupo e aproveitaremos o restante do dia por lá, curtindo a praia, o mar e o clima de Itacaré sem pressa. um dia pra experimentar algo novo, se divertir juntas e, claro, pegar bastante sol.",
      },
      {
        day: 4,
        title: "dia 4 — Praia da Tiririca",
        description:
          "dia inteiro para viver uma das praias mais bonitas de Itacaré: Itacarezinho (ou Prainha, dependendo das condições). a ideia é aproveitar o dia sem pressa, entre mar, areia, sol e muita conversa. pra deixar tudo ainda mais divertido, teremos uma aula de altinha em grupo — porque viagem boa também tem que ter movimento e risada. no fim da tarde, voltamos pra hospedagem pra descansar.",
      },
      {
        day: 5,
        title: "dia 5 — a despedida",
        description:
          "antes de dizer adeus a Itacaré, uma manhã livre pra caminhar pelo centro histórico, conhecer lojinhas, comprar artesanatos e aproveitar os últimos momentos na cidade. fechamos com um café da manhã juntas, de despedida, antes de seguir pro aeroporto — os transfers são organizados de acordo com o horário do voo de cada uma, então se alguém tiver um voo mais cedo, é só avisar.",
      },
    ],
    accommodation: `casa triplex a 450m do centro histórico e a 250m da Praia da Concha — 12 hóspedes, 5 quartos, 10 camas e 5 banheiros.

suíte 1: 2 camas de solteiro · suíte 2: 2 camas de solteiro · suíte 3: 1 cama de solteiro e 1 de casal · suíte 4: 1 cama de solteiro e 1 de casal · suíte 5: 1 cama de casal.

a organização dos quartos é decidida coletivamente na chegada, de forma tranquila — a gente se ajeita!`,
    accommodationImages: [
      "/images/trips/itacare/acomodacao/1.jpg",
      "/images/trips/itacare/acomodacao/2.jpg",
      "/images/trips/itacare/acomodacao/3.jpg",
      "/images/trips/itacare/acomodacao/4.jpg",
    ],
    forWhom: [
      {
        title: "quem quer ir além do óbvio",
        description:
          "Itacaré é muito mais que praia: trilhas na mata atlântica, rios, cachoeiras e comunidades locais que não aparecem tanto nos roteiros tradicionais.",
      },
      {
        title: "quem quer se conectar e se mover",
        description:
          "aula de surf, aula de altinha, trilhas até praias preservadas e muito tempo pra desacelerar, comer bem e trocar histórias.",
      },
      {
        title: "quem gosta de moda e experiências novas",
        description:
          "em parceria com a Numaré Brand, cada menina recebe um kit especial de peças pra usar na viagem (e levar pra casa) e participa de fotos e vídeos da marca.",
      },
    ],
    faqs: [
      {
        question: "como funciona a expedição?",
        answer:
          "a ida até Ilhéus é por conta de cada uma. na chegada, você já tem um carro designado, saindo de Ilhéus rumo a Itacaré — a Gio passa o dia no aeroporto recebendo todo mundo e ajudando a encontrar o transfer certo. no dia 3 de novembro, os transfers saem de Itacaré de volta ao Aeroporto de Ilhéus.",
      },
      {
        question: "preciso fazer todas as atividades?",
        answer:
          "não! como toda a programação já está inclusa no pacote, incentivamos que você aproveite ao máximo, mas não é obrigada a participar de nada.",
      },
      {
        question: "como será a configuração das camas?",
        answer:
          "a casa tem diferentes configurações — são 10 camas no total, em 5 quartos. a organização dos quartos é decidida coletivamente na chegada, de forma bem tranquila.",
      },
      {
        question: "vocês ajudam na compra do aéreo?",
        answer:
          "sim! temos uma agência parceira que ajuda vocês a encontrar passagens baratas e com bom custo-benefício — é só falar com a Gio e pedir ajuda.",
      },
      {
        question: "como a Numaré entra na viagem?",
        answer:
          "a Numaré é a patrocinadora dessa expedição. na chegada, cada uma recebe um kit com peças da marca pra usar durante a viagem — e claro, levar pra casa depois. ao longo dos dias, registramos fotos e vídeos para uso da Numaré; ao participar da viagem, você concede o direito de uso de imagem para publicação desse conteúdo nas redes sociais da marca. se tiver alguma objeção quanto a esse ponto, é essencial falar com a Gio antes da viagem.",
      },
      {
        question: "não quero participar da aula de surf, e agora?",
        answer:
          "sem problema! é só avisar a Gio ou a Malice com antecedência — enquanto o grupo estiver na aula, você pode curtir a praia à vontade.",
      },
      {
        question: "como funciona o pagamento?",
        answer:
          "aceitamos pix, boleto ou cartão. no cartão, o parcelamento é em até 6x com juros; no pix, o valor total precisa estar quitado até o início da viagem.",
      },
      {
        question: "qual a política de cancelamento?",
        answer:
          "o cancelamento deve ser solicitado até 15 dias antes do início dos serviços contratados; após esse prazo, será cobrada uma taxa de 50% do valor contratado. devoluções são feitas com desconto das taxas de transferência bancária. em caso de não comparecimento (no-show), a cobrança é de 100% dos serviços contratados.",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "nessa edição eu não estarei presencialmente, mas vocês estarão em ótimas mãos: a Giovana Gentil, minha sócia, acompanha o grupo do início ao fim. a Gio tem 24 anos, é de São Paulo, e já passou 5 meses mochilando sozinha pelo mundo — hoje organiza viagens em grupo pra mulheres com o propósito de ajudar quem quer viajar, mas não sabe como. eu já fiz essa viagem pessoalmente e escolhi essa parceria a dedo, então pode confiar que está tudo pensado nos mínimos detalhes. e claro, estarei sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem. quiser conhecer a Gi, é só dar uma olhada no Instagram dela: @giovanagentil.travel 💛",
      },
    ],
  },
  {
    slug: "lombok-bali-2027",
    title: "Lombok + Bali",
    destination: "Lombok e Bali, Indonésia",
    cardImage: "/images/trips/lombok-bali-2027/hero/hero-1.jpg",
    heroImage: "/images/trips/lombok-bali-2027/hero/hero-1.jpg",
    heroImages: ["/images/trips/lombok-bali-2027/hero/hero-1.jpg"],
    dates: "06 a 17 de janeiro de 2027",
    dateForSort: "2027-01-06",
    dateForSortEnd: "2027-01-17",
    duration: "12 dias",
    priceDisplay: "USD 1.193",
    priceValue: 6562,
    national: false,
    priceInstallments:
      "pagamento feito diretamente com a Gio via WhatsApp — aceita Wise e transferência internacional",
    agency: "RootWave Travels",
    tagline:
      "Lombok, Gilis e Bali em 12 dias — cachoeiras, ilhas paradisíacas e cultura balinesa",
    description:
      "começamos em Lombok — com cachoeiras de tirar o fôlego, a aldeia Sasak e aula de surf. depois, as Gilis para island hopping e mergulho com tartarugas em águas cristalinas. e terminamos em Bali — de Ubud a Canggu — com aula de culinária balinesa, rafting, cerimônia de purificação nas águas sagradas e os pores do sol mais bonitos do sudeste asiático. 12 dias, 11 noites, uma turma de até 20 mulheres.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a viagem Lombok + Bali (6 a 17 de janeiro de 2027) e quero garantir minha vaga :)",
    paymentMethods: ["Wise", "transferência internacional"],
    included: [
      "transfer do aeroporto na chegada (se chegar no dia de início da viagem ou em pré-noite reservada com a operadora)",
      "11 noites em hotéis 3 estrelas, quartos twin-share",
      "11 cafés da manhã",
      "1 jantar de confraternização + 1 churrasco local + 1 almoço",
      "visita à Aldeia Sasak e cachoeiras Benang Stokel e Benang Kelambu",
      "sessão de yoga",
      "aula de surf em Lombok",
      "travessia de fast boat para Gili Trawangan",
      "island hopping privativo: Gili Meno + mergulho com tartarugas e estátuas subaquáticas",
      "ciclo turístico ao redor de Gili Trawangan",
      "fast boat Gili → Bali (Canggu)",
      "aula de culinária balinesa em Ubud",
      "white water rafting em Bali",
      "cerimônia de purificação balinesa (Taman Beji Griya)",
      "visita aos terraços de arroz e templos de Bali",
      "translados privados em van durante toda a viagem",
      "tour leader dedicada durante os 12 dias",
    ],
    notIncluded: [
      "passagem aérea internacional",
      "seguro viagem (obrigatório)",
      "visto de entrada na Indonésia (VOA ~USD 35)",
      "taxis noturnos",
      "gorjeta para a tour leader",
      "drop no aeroporto ao final",
      "atividades opcionais não listadas",
      "gastos pessoais",
    ],
    itinerary: [
      {
        day: 1,
        title: "dia 1 — chegada em Lombok, bem-vinda à ilha!",
        description:
          "pouso em Lombok (LOP). transfer para a hospedagem e tempo para se instalar. à noite, jantar de boas-vindas com a turma — novos rostos, comida deliciosa e coquetéis sob as estrelas.",
      },
      {
        day: 2,
        title: "dia 2 — cultura e cachoeiras",
        description:
          "imersão na cultura Sasak: visita à aldeia tradicional, aprendendo costumes e artesanato local. em seguida, as deslumbrantes Cachoeiras Benang Stokel e Benang Kelambu. tarde de descanso com drinque e jantar no hotel.",
      },
      {
        day: 3,
        title: "dia 3 — yoga + surf + churrasco ao pôr do sol",
        description:
          "manhã com sessão de yoga, seguida de aula de surf em uma das melhores praias de Lombok. seja sua primeira onda ou uma evolução do que já sabe — o foco é se divertir no sol. à noite, churrasco tradicional com drinks e pôr do sol inesquecível.",
      },
      {
        day: 4,
        title: "dia 4 — Gili Trawangan, o paraíso sem carros",
        description:
          "fast boat para Gili Trawangan, a ilha free de automóveis. pedalar ao redor da ilha, relaxar na praia e curtir o ritmo da ilha. jantar com temática de ilha, música e, claro, karaokê — a noite promete!",
      },
      {
        day: 5,
        title: "dia 5 — island hopping privativo",
        description:
          "passeio de barco exclusivo por Gili Meno e Gili Trawangan. snorkel com tartarugas, exploração das estátuas subaquáticas e almoço em Gili Meno. à tarde, drinks nos melhores beach bars com vista pro pôr do sol.",
      },
      {
        day: 6,
        title: "dia 6 — pedal ao pôr do sol + mirante de Gili",
        description:
          "manhã tranquila e ciclo turístico ao pôr do sol ao redor de Gili Trawangan, com paradas em recantos escondidos e o melhor mirante da ilha. jantar de despedida das Gilis.",
      },
      {
        day: 7,
        title: "dia 7 — chegada em Bali, Ubud",
        description:
          "fast boat para Bali. chegada em Canggu e transfer para Ubud, o coração cultural da ilha. tarde livre para explorar o hotel, descansar ou passear pelo centro de Ubud.",
      },
      {
        day: 8,
        title: "dia 8 — aula de culinária + rafting",
        description:
          "manhã com aula de culinária balinesa — aprender a preparar pratos tradicionais com ingredientes frescos. à tarde, descida de rafting nas águas do rio de Bali. jantar de celebração para relembrar as aventuras.",
      },
      {
        day: 9,
        title: "dia 9 — cerimônia de purificação balinesa",
        description:
          "visita ao santuário sagrado de Taman Beji Griya para uma cerimônia de purificação conduzida por um sacerdote local — um ritual poderoso de reconexão com a essência de Bali. tarde livre para explorar Ubud: mercados, lojas de arte ou piscina.",
      },
      {
        day: 10,
        title: "dia 10 — terraços de arroz + partida para Canggu",
        description:
          "parada nos icônicos terraços de arroz de Bali para contemplar o verde infinito. depois, Canggu — conhecida pelo surf, bares na praia e restaurantes incríveis. mergulhe na cena agitada da ilha.",
      },
      {
        day: 11,
        title: "dia 11 — exploração cultural de Bali",
        description:
          "visita ao Templo Real de Taman Ayun, almoço casual na área de Tanah Lot e depois o próprio Templo de Tanah Lot — uma rocha no meio do oceano com pôr do sol de tirar o fôlego. noite livre em Canggu.",
      },
      {
        day: 12,
        title: "dia 12 — tchau Bali, até a próxima!",
        description:
          "café da manhã final em grupo. a tour leader auxilia no check-out e transfer para o aeroporto. não é um adeus — é o começo de muitas outras aventuras juntas.",
      },
    ],
    accommodation:
      "11 noites em hotéis 3 estrelas selecionados — quartos twin-share (cama de casal disponível mediante solicitação). hospedagens em Kuta Lombok, Gili Trawangan, Ubud e Canggu, todas com café da manhã incluso.",
    forWhom: [
      {
        title: "quem quer o equilíbrio perfeito",
        description:
          "cultura, aventura e descanso num só roteiro. Lombok selvagem com cachoeiras e Vila Sasak, Gilis com tartarugas e island hopping, cerimônia de purificação em Ubud e surf em Canggu. 12 dias que têm de tudo.",
      },
      {
        title: "quem quer viver a Indonésia de verdade",
        description:
          "não é só Bali. a gente começa em Lombok — praias intocadas, cachoeiras de tirar o fôlego, cultura local riquíssima — e passa pelas Gilis antes de mergulhar em Bali. o roteiro completo da Indonésia.",
      },
      {
        title: "quem quer uma trip sem estresse",
        description:
          "transfer do aeroporto incluso, van privativa, guia local durante toda a viagem e um grupo incrível de mulheres. você só precisa aparecer com a mochila.",
      },
    ],
    faqs: [
      {
        question: "preciso de visto para a Indonésia?",
        answer:
          "brasileiras podem obter o visto on arrival (VOA) na chegada ao aeroporto de Lombok (LOP) ou Denpasar (DPS), com validade de 30 dias e custo de aprox. USD 35.",
      },
      {
        question: "como funciona o pagamento?",
        answer:
          "toda a compra é feita diretamente com a Gio via WhatsApp. ela te passa todas as opções de pagamento, incluindo Wise e transferência internacional.",
      },
      {
        question: "a viagem é só para mulheres?",
        answer: "sim, todas as experiências da Julia Paraizo são exclusivas para mulheres.",
      },
      {
        question: "seguro viagem é obrigatório?",
        answer:
          "sim, o seguro viagem é obrigatório e não está incluso. recomendamos cobertura para cancelamento e assistência médica no exterior.",
      },
      {
        question: "qual o número mínimo de participantes?",
        answer:
          "a viagem precisa de no mínimo 7 participantes para acontecer. se esse número não for atingido com 30 dias de antecedência, a viagem pode ser cancelada ou reagendada.",
      },
      {
        question: "posso comprar essa viagem em conjunto com as Filipinas?",
        answer:
          "sim! existe um pacote combo Lombok + Bali + Filipinas, que inclui o voo interno Bali → Filipinas. fala com a Gio para saber mais.",
      },
      {
        question: "o quarto é compartilhado?",
        answer:
          "sim, os quartos são twin-share (2 pessoas por quarto). quarto duplo pode ser solicitado com disponibilidade sujeita à confirmação.",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "nessa edição eu não estarei presencialmente, mas vocês estarão em ótimas mãos: a Giovana Gentil, minha sócia, acompanha o grupo em todas as expedições, do começo ao fim. eu já fiz essa viagem pessoalmente e escolhi essa agência a dedo, então pode confiar que está tudo pensado nos mínimos detalhes. e claro, estarei sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem. quiser conhecer a Gi, é só dar uma olhada no Instagram dela: @giovanagentil.travel 💛",
      },
    ],
  },
  {
    slug: "lombok-bali-filipinas-2027",
    title: "Lombok + Bali + Filipinas",
    destination: "Lombok, Bali e Filipinas",
    cardImage: "/images/trips/lombok-bali-filipinas-2027/hero/hero-1.jpg",
    heroImage: "/images/trips/lombok-bali-filipinas-2027/hero/hero-1.jpg",
    heroImages: ["/images/trips/lombok-bali-filipinas-2027/hero/hero-1.jpg"],
    dates: "06 a 27 de janeiro de 2027",
    dateForSort: "2027-01-06",
    dateForSortEnd: "2027-01-27",
    duration: "22 dias",
    priceDisplay: "USD 3.051",
    priceValue: 16781,
    national: false,
    priceInstallments:
      "pagamento feito diretamente com a Gio via WhatsApp — aceita Wise e transferência internacional",
    agency: "RootWave Travels",
    tagline:
      "o combo completo do sudeste asiático — Lombok, Bali e Filipinas em 22 dias, com o voo interno já incluso",
    description:
      "para quem quer viver tudo. 12 dias em Lombok e Bali — Gilis, Ubud, Canggu — seguidos de 10 dias nas Filipinas, entre Cebu e Siargao. a passagem de avião de Bali para as Filipinas já vem inclusa no pacote combo. é a trip completa do sudeste asiático: mais de 3 semanas com a Gio e uma turma incrível de mulheres.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre o pacote completo Lombok + Bali + Filipinas (6 a 27 de janeiro de 2027) e quero garantir minha vaga :)",
    paymentMethods: ["Wise", "transferência internacional"],
    included: [
      "tudo incluso no pacote Lombok + Bali (6 a 17/jan)",
      "tudo incluso no pacote Filipinas — Cebu + Siargao (18 a 27/jan)",
      "voo doméstico Bali → Cebu, Filipinas (incluso exclusivamente no pacote combo)",
      "20 noites em hotéis 3 estrelas, quartos twin-share",
      "20 cafés da manhã + refeições conforme os roteiros individuais",
      "tour leader dedicada durante os 22 dias",
    ],
    notIncluded: [
      "passagem aérea internacional (chegada em Lombok, saída das Filipinas)",
      "seguro viagem obrigatório",
      "taxis noturnos",
      "gorjeta para a tour leader",
      "atividades opcionais",
      "gastos pessoais",
    ],
    itinerary: [
      {
        day: 1,
        title: "dia 1 — chegada em Lombok",
        description: "pouso em Lombok (LOP). jantar de boas-vindas com a turma.",
      },
      {
        day: 2,
        title: "dia 2 — cultura e cachoeiras em Lombok",
        description: "aldeia Sasak + cachoeiras Benang Stokel e Benang Kelambu.",
      },
      {
        day: 3,
        title: "dia 3 — yoga + surf + churrasco",
        description:
          "sessão de yoga, aula de surf em praia de Lombok e churrasco ao pôr do sol.",
      },
      {
        day: 4,
        title: "dia 4 — Gili Trawangan",
        description: "fast boat para Gili Trawangan. pedalar, praia, jantar e karaokê.",
      },
      {
        day: 5,
        title: "dia 5 — island hopping privativo",
        description:
          "Gili Meno: snorkel com tartarugas e estátuas subaquáticas. drinks e pôr do sol.",
      },
      {
        day: 6,
        title: "dia 6 — pedal ao pôr do sol em Gili",
        description:
          "ciclo turístico e melhor mirante da ilha. jantar de despedida das Gilis.",
      },
      {
        day: 7,
        title: "dia 7 — chegada em Ubud, Bali",
        description: "fast boat para Bali. transfer para Ubud, coração cultural da ilha.",
      },
      {
        day: 8,
        title: "dia 8 — culinária balinesa + rafting",
        description: "aula de culinária balinesa + white water rafting no rio de Bali.",
      },
      {
        day: 9,
        title: "dia 9 — cerimônia de purificação",
        description:
          "ritual de purificação no santuário sagrado de Taman Beji Griya. tarde livre em Ubud.",
      },
      {
        day: 10,
        title: "dia 10 — terraços de arroz + Canggu",
        description: "parada nos terraços de arroz de Tegalalang. chegada em Canggu.",
      },
      {
        day: 11,
        title: "dia 11 — templos de Bali",
        description: "Taman Ayun Temple + Tanah Lot com pôr do sol sobre o oceano.",
      },
      {
        day: 12,
        title: "dia 12 — últimos momentos em Bali + voo → Filipinas",
        description:
          "café da manhã em grupo. voo Bali (DPS) → Cebu (CEB), Filipinas. check-in no hotel em Cebu.",
      },
      {
        day: 13,
        title: "dia 13 — Moalboal, sardinha e tartarugas",
        description:
          "drive para Moalboal. snorkeling no lendário cardume de sardinha e avistamento de tartarugas marinhas.",
      },
      {
        day: 14,
        title: "dia 14 — canyoneering em Kawasan",
        description: "aventura pelas cânions e cachoeiras de Kawasan Falls.",
      },
      {
        day: 15,
        title: "dia 15 — tubarões-baleia em Oslob + Tumalog Falls",
        description: "nado com tubarões-baleia + cachoeiras de Tumalog. retorno a Cebu.",
      },
      {
        day: 16,
        title: "dia 16 — voo Cebu → Siargao + Cloud 9 ao entardecer",
        description:
          "voo doméstico (incluso). chegada em Siargao. pôr do sol no Cloud 9 Boardwalk.",
      },
      {
        day: 17,
        title: "dia 17 — aula de surf no Cloud 9",
        description:
          "aula de surf com instrutores locais no Cloud 9. tarde livre.",
      },
      {
        day: 18,
        title: "dia 18 — land tour por Siargao",
        description: "Magpupungko, Coconut Road, Rio Maasin e Lagoa de Sugba.",
      },
      {
        day: 19,
        title: "dia 19 — Sohoton Cove, lagoa das águas-vivas",
        description:
          "passeio de barco: cavernas, lagoas escondidas e o santuário das águas-vivas sem ferrão.",
      },
      {
        day: 20,
        title: "dia 20 — dia livre em Siargao",
        description:
          "descanso, surf opcional ou o Tri-Island Tour (Guyam, Daku e Naked Island).",
      },
      {
        day: 21,
        title: "dia 21 — últimas horas nas Filipinas",
        description:
          "último café da manhã em grupo. check-out e transfer para o aeroporto de Siargao (IAO).",
      },
      {
        day: 22,
        title: "dia 22 — partida",
        description: "voos de retorno ao longo do dia. 22 dias, 4 ilhas, memórias para a vida toda.",
      },
    ],
    accommodation:
      "20 noites em hotéis 3 estrelas selecionados em Lombok, Gili Trawangan, Ubud, Canggu, Cebu, Moalboal e Siargao. quartos twin-share com café da manhã incluso.",
    forWhom: [
      {
        title: "quem quer viver ao máximo",
        description:
          "cultura, aventura, mar e conexão em dois países incríveis. Lombok, Gilis, Ubud, Canggu, Cebu e Siargao — 22 dias, 15 meninas e o voo Bali → Filipinas já incluso no pacote.",
      },
      {
        title: "quem não quer escolher entre a Indonésia e as Filipinas",
        description:
          "por que ir embora quando você pode continuar? você termina Bali no dia 18 e a viagem para as Filipinas começa no mesmo dia. só embarcar e seguir a aventura.",
      },
      {
        title: "quem quer o melhor custo-benefício do sudeste asiático",
        description:
          "o combo sai mais barato do que as duas viagens separadas. e o voo doméstico Bali → Cebu — que vale muito — já está incluso. 22 dias pelo preço de menos.",
      },
    ],
    faqs: [
      {
        question: "o que está incluso no pacote combo que não está nas viagens separadas?",
        answer:
          "o único item exclusivo do combo é o voo de Bali para as Filipinas (Denpasar/DPS → Cebu/CEB). todo o resto é a soma dos dois roteiros: Lombok + Bali e Filipinas.",
      },
      {
        question: "como funciona o pagamento?",
        answer:
          "toda a compra é feita diretamente com a Gio via WhatsApp. ela te passa todas as opções de pagamento, incluindo Wise e transferência internacional.",
      },
      {
        question: "qual o preço de cada viagem separada?",
        answer:
          "Lombok + Bali (6–17 jan): USD 1.193/pessoa. Filipinas (18–27 jan): USD 1.485/pessoa. Combo com voo interno incluso: USD 3.051/pessoa.",
      },
      {
        question: "a viagem é só para mulheres?",
        answer: "sim, todas as experiências da Julia Paraizo são exclusivas para mulheres.",
      },
      {
        question: "seguro viagem é obrigatório?",
        answer:
          "sim, o seguro viagem é obrigatório e não está incluso. recomendamos cobertura ampla: cancelamento, assistência médica, esportes aquáticos e cobertura multi-destino.",
      },
      {
        question: "preciso de visto?",
        answer:
          "para a Indonésia: visto on arrival (VOA) na chegada, ~USD 35. para as Filipinas: brasileiras entram sem visto por até 30 dias.",
      },
      {
        question: "qual o número mínimo de participantes?",
        answer:
          "mínimo 7 participantes para cada etapa da viagem. a Gio e a tour leader garantem a melhor experiência independentemente do tamanho do grupo.",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "nessa edição eu não estarei presencialmente, mas vocês estarão em ótimas mãos: a Giovana Gentil, minha sócia, acompanha o grupo em todas as expedições, do começo ao fim. eu já fiz essa viagem pessoalmente e escolhi essa agência a dedo, então pode confiar que está tudo pensado nos mínimos detalhes. e claro, estarei sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem. quiser conhecer a Gi, é só dar uma olhada no Instagram dela: @giovanagentil.travel 💛",
      },
    ],
  },
  {
    slug: "filipinas-2027",
    title: "Filipinas",
    destination: "Cebu e Siargao, Filipinas",
    cardImage: "/images/trips/filipinas-2027/hero/hero-1.jpg",
    heroImage: "/images/trips/filipinas-2027/hero/hero-1.jpg",
    heroImages: ["/images/trips/filipinas-2027/hero/hero-1.jpg"],
    dates: "18 a 27 de janeiro de 2027",
    dateForSort: "2027-01-18",
    dateForSortEnd: "2027-01-27",
    duration: "10 dias",
    priceDisplay: "USD 1.485",
    priceValue: 8168,
    national: false,
    priceInstallments:
      "pagamento feito diretamente com a Gio via WhatsApp — aceita Wise e transferência internacional",
    agency: "RootWave Travels",
    tagline:
      "Cebu e Siargao em 10 dias — sardine run, canyoneering, tubarões-baleia e surf no Cloud 9",
    description:
      "10 dias pelos dois maiores tesouros das Filipinas com a Gio. começamos em Cebu — snorkeling no cardume de sardinha de Moalboal, canyoneering nas Cataratas de Kawasan e nado com tubarões-baleia em Oslob. depois voamos para Siargao, a ilha do surf: aula de surf no Cloud 9, land tour pela ilha, a incrível Sohoton Cove e a lagoa de águas-vivas que parece de outro mundo.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a viagem para as Filipinas — Cebu + Siargao (18 a 27 de janeiro de 2027) e quero garantir minha vaga :)",
    paymentMethods: ["Wise", "transferência internacional"],
    included: [
      "transfer do aeroporto na chegada em Cebu (se chegar no dia de início ou em pré-noite com a operadora)",
      "9 noites em hotéis 3 estrelas, quartos twin-share",
      "9 cafés da manhã + 4 almoços + 1 jantar de boas-vindas",
      "snorkeling no cardume de sardinha de Moalboal e recifes de tartarugas",
      "canyoneering completo nas Cataratas de Kawasan (guia incluso)",
      "nado com tubarões-baleia em Oslob",
      "visita às Cataratas de Tumalog",
      "voo doméstico Cebu → Siargao (classe econômica)",
      "aula de surf com instrutor local no Cloud 9",
      "Siargao Land Tour (Magpupungko, Coconut Road, Rio Maasin, Lagoa de Sugba)",
      "passeio de barco em Sohoton Cove (cavernas, lagoas, santuário das águas-vivas)",
      "translados privados em van em todos os dias",
      "tour leader dedicada durante os 10 dias",
    ],
    notIncluded: [
      "passagem aérea internacional para/das Filipinas",
      "seguro viagem obrigatório",
      "taxis noturnos",
      "gorjeta para a tour leader",
      "tour opcional Tri-Island no dia 9 (Guyam, Daku e Naked Island)",
      "sessões de surf extras além da aula do dia 6",
      "aluguel de moto para exploração independente",
      "gastos pessoais, souvenirs e lanches",
    ],
    itinerary: [
      {
        day: 1,
        title: "dia 1 — chegada em Cebu + jantar de boas-vindas",
        description:
          "pouso no Aeroporto Internacional de Cebu (CEB). transfer privativo para o hotel na cidade. tarde livre para se instalar e explorar. à noite, jantar de boas-vindas com o grupo — conheça as companheiras de aventura, experimente a culinária filipina e prepare-se para o que vem pela frente.",
      },
      {
        day: 2,
        title: "dia 2 — Moalboal, cardume de sardinha e tartarugas marinhas",
        description:
          "drive panorâmico ao sul de Cebu (3-4h) até a charmosa cidade litorânea de Moalboal. check-in e mergulho no ritmo da ilha. ao entardecer, snorkeling pelo lendário cardume de sardinha — milhões de peixes em formações prateadas a poucos metros da costa. tartarugas marinhas avistadas com frequência nos recifes próximos.",
      },
      {
        day: 3,
        title: "dia 3 — canyoneering nas Cataratas de Kawasan",
        description:
          "aventura de dia inteiro nas selvas de Cebu — subindo rios, pulando em poços de águas turquesa, escorregando por cachoeiras de rocha lisa. o trajeto culmina nas icônicas Cataratas de Kawasan, em vários níveis. jantar em grupo para celebrar a adrenalina do dia.",
      },
      {
        day: 4,
        title: "dia 4 — Oslob, nado com tubarões-baleia + Cataratas de Tumalog",
        description:
          "acordar cedo para Oslob e nadar ao lado dos maiores peixes do oceano: os tubarões-baleia. uma experiência única e emocionante. depois, a curta caminhada até as etéreas Cataratas de Tumalog, onde névoa e cortinas de água criam um santuário na selva. retorno a Cebu à noite.",
      },
      {
        day: 5,
        title: "dia 5 — voo Cebu → Siargao + pôr do sol no Cloud 9",
        description:
          "café da manhã e transfer para o aeroporto para o voo doméstico até Siargao (incluso). check-in no hotel e mergulho no ritmo desacelerado da ilha. à tarde, passeio até o icônico Cloud 9 Boardwalk para assistir surfistas experientes nas ondas mais famosas de Siargao ao entardecer.",
      },
      {
        day: 6,
        title: "dia 6 — aula de surf no Cloud 9",
        description:
          "aula de surf para iniciantes com instrutores locais profissionais em um dos pontos de surf mais celebrados do mundo. após a sessão, tarde inteiramente livre — explorar cafés à beira-mar, alugar uma moto, relaxar no resort ou reservar uma sessão extra de surf.",
      },
      {
        day: 7,
        title: "dia 7 — land tour por Siargao",
        description:
          "exploração completa da ilha: piscinas de maré e formações de rocha em Magpupungko, drive pela Coconut Road ladeada de palmeiras, tirolesa e barcos de rio no Rio Maasin, e mergulho ou caiaque nas águas esmeralda da Lagoa de Sugba, rodeada de selva intocada.",
      },
      {
        day: 8,
        title: "dia 8 — Sohoton Cove, paraíso de pedra calcária",
        description:
          "travessia de barco até o paraíso de Sohoton Cove: Caverna de Hagukan, Caverna Magkukuob, lagoas escondidas com saltos de falésia e — o ponto alto — o Santuário das Águas-Vivas, onde águas-vivas sem ferrão flutuam em águas turquesas. uma experiência de outro mundo.",
      },
      {
        day: 9,
        title: "dia 9 — dia livre, Tri-Island opcional",
        description:
          "dia de descanso e exploração no seu ritmo. durma até tarde, surfe mais uma vez, alugue uma moto ou embarque no Tri-Island Tour opcional (Guyam Island, Daku Island e Naked Island) — três dos pontos mais icônicos de Siargao em uma só tarde.",
      },
      {
        day: 10,
        title: "dia 10 — partida, até a próxima aventura!",
        description:
          "último café da manhã em grupo. a tour leader auxilia no check-out e transfer para o aeroporto de Siargao (IAO). os voos partem ao longo do dia. a viagem termina aqui — mas as memórias, amizades e histórias das ilhas viajam com você para sempre.",
      },
    ],
    accommodation:
      "9 noites em hotéis 3 estrelas selecionados: em Cebu e Moalboal (Cebu) e na ilha de Siargao. quartos twin-share (quarto duplo disponível mediante solicitação). café da manhã incluso.",
    forWhom: [
      {
        title: "quem tem espírito aventureiro",
        description:
          "sardine run em Moalboal, canyoneering na Cachoeira Kawasan, nado com tubarão-baleia em Oslob, surf no Cloud 9 e santuário de águas-vivas em Sohoton Cove. 10 dias de adrenalina pura.",
      },
      {
        title: "quem ama natureza selvagem e oceano",
        description:
          "lagoas escondidas, cavernas de calcário, ilhas intocadas e uma biodiversidade marinha que pouquíssimas pessoas chegam a ver. as Filipinas são um dos segredos mais bem guardados da Ásia.",
      },
      {
        title: "quem quer sair do roteiro comum",
        description:
          "pouquíssimas brasileiras já foram às Filipinas. você vai voltar com histórias que ninguém vai acreditar e fotos que parecem photoshop. esse destino muda quem vai.",
      },
    ],
    faqs: [
      {
        question: "preciso de visto para as Filipinas?",
        answer:
          "brasileiras podem entrar nas Filipinas sem visto por até 30 dias. basta passaporte com validade mínima de 6 meses e passagem de retorno ou comprovante de continuação de viagem.",
      },
      {
        question: "como funciona o pagamento?",
        answer:
          "toda a compra é feita diretamente com a Gio via WhatsApp. ela te passa todas as opções de pagamento, incluindo Wise e transferência internacional.",
      },
      {
        question: "a viagem é só para mulheres?",
        answer: "sim, todas as experiências da Julia Paraizo são exclusivas para mulheres.",
      },
      {
        question: "seguro viagem é obrigatório?",
        answer:
          "sim, o seguro viagem é obrigatório e não está incluso. recomendamos cobertura para cancelamento, assistência médica no exterior e esportes aquáticos.",
      },
      {
        question: "qual o número mínimo de participantes?",
        answer:
          "a viagem precisa de no mínimo 7 participantes para acontecer. se esse número não for atingido com 30 dias de antecedência, a viagem pode ser cancelada ou reagendada.",
      },
      {
        question: "posso combinar com a viagem Lombok + Bali?",
        answer:
          "sim! existe um pacote combo Lombok + Bali + Filipinas que começa em 6 de janeiro e vai até 27 de janeiro de 2027. o voo Bali → Filipinas já vem incluso no combo. fala com a Gio para saber mais.",
      },
      {
        question: "o quarto é compartilhado?",
        answer:
          "sim, os quartos são twin-share (2 pessoas por quarto). quarto duplo pode ser solicitado com disponibilidade sujeita à confirmação.",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "nessa edição eu não estarei presencialmente, mas vocês estarão em ótimas mãos: a Giovana Gentil, minha sócia, acompanha o grupo em todas as expedições, do começo ao fim. eu já fiz essa viagem pessoalmente e escolhi essa agência a dedo, então pode confiar que está tudo pensado nos mínimos detalhes. e claro, estarei sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem. quiser conhecer a Gi, é só dar uma olhada no Instagram dela: @giovanagentil.travel 💛",
      },
    ],
  },
  {
    slug: "atacama-uyuni-2027",
    title: "Atacama + Salar de Uyuni",
    destination: "Atacama, Chile + Salar de Uyuni, Bolívia",
    cardImage: "/images/trips/atacama-uyuni-2027/hero/hero-1.jpg",
    heroImage: "/images/trips/atacama-uyuni-2027/hero/hero-1.jpg",
    heroImages: ["/images/trips/atacama-uyuni-2027/hero/hero-1.jpg"],
    dates: "14 a 22 de fevereiro de 2027",
    dateForSort: "2027-02-14",
    dateForSortEnd: "2027-02-22",
    duration: "9 dias",
    priceDisplay: "R$ 7.350",
    priceValue: 7350,
    national: false,
    priceInstallments: "5% de desconto no pix · parcelamento em até 10x sem juros no crédito",
    agency: "Fronttur",
    tagline:
      "geisers ao amanhecer, vales da lua e o silêncio absoluto do Salar de Uyuni, em 9 dias",
    description:
      "9 dias entre o Chile e a Bolívia: geisers ao amanhecer, vales da lua com cores de outro planeta, lagunas com flamingos, hotel de sal em Colchani e o silêncio absoluto do Salar de Uyuni. uma das experiências mais surreais que você vai viver.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a viagem Atacama + Uyuni (14 a 22 de fevereiro de 2027) e quero garantir minha vaga :)",
    paymentMethods: ["pix", "cartão de crédito"],
    included: [
      "traslado compartilhado Aeroporto Calama (CJC) → San Pedro de Atacama (dia 1)",
      "excursão privada Valle del Arco Iris com guia e ingressos (dia 2)",
      "excursão privada Valle de la Luna + pôr do sol com piquenique e ingressos (dia 2)",
      "excursão privada Salar do Atacama + Lagunas Miscanti, Miñiques e Piedras Rojas com guia, ingressos e almoço (dia 3)",
      "tour astronômico com telescópios e mitologia andina (dia 3)",
      "excursão privada Geysers del Tatio com guia, ingressos e café da manhã (dia 4)",
      "excursão Laguna Cejar, Ojos del Salar e Tebinquinche com ingressos (dia 4)",
      "tour de jipe 4D/3N pelo altiplano boliviano com guia local bilíngue e ingressos (dias 5–8)",
      "almoços e jantares incluídos durante o tour pelo altiplano",
      "todas as hospedagens + café da manhã",
      "traslados privados nas travessias de fronteira Chile–Bolívia",
      "traslado compartilhado San Pedro de Atacama → Aeroporto Calama (dia 9)",
    ],
    notIncluded: [
      "passagens aéreas (voo para Calama/CJC — sugestão: LATAM e Sky Airline)",
      "seguro viagem (obrigatório — cobertura para altitude elevada, cancelamento e assistência médica)",
      "refeições não especificadas no roteiro",
      "gastos pessoais, souvenirs e compras",
    ],
    itinerary: [
      {
        day: 1,
        title: "dia 1 — chegada em San Pedro de Atacama",
        description:
          "ao desembarcar em Calama, seu transporte privativo leva você a San Pedro de Atacama — 2.440m de altitude, um dos lugares mais secos do mundo. tarde livre para entrar no clima: caminha pelo centrinho, hidrate-se e sinta o deserto chamando para a aventura.",
      },
      {
        day: 2,
        title: "dia 2 — Valle del Arco Iris + Valle de la Luna ao pôr do sol",
        description:
          "após o café da manhã, partimos para Yerbas Buenas — petróglifos ancestrais revelam antigas rotas pelo deserto. no Valle del Arco Iris, caminhamos entre montanhas de cores intensas moldadas por minerais. à tarde, o Valle de la Luna: dunas, crateras e formações rochosas quase extraterrestres. o pôr do sol transforma tudo em tons dourados e rosados — leve um agasalho, a temperatura cai rápido ao anoitecer.",
      },
      {
        day: 3,
        title: "dia 3 — Salar do Atacama + tour astronômico",
        description:
          "partimos ao Salar do Atacama, o maior do Chile. visitamos as Lagunas Miscanti e Miñiques com vulcões imponentes ao fundo, e em Piedras Rojas o vermelho das formações impressiona. à noite, sob um dos céus mais limpos do planeta, observamos constelações e galáxias com telescópios enquanto conhecemos a mitologia andina.",
      },
      {
        day: 4,
        title: "dia 4 — Geysers del Tatio + Laguna Cejar + pôr do sol em Tebinquinche",
        description:
          "saída antes do amanhecer rumo aos Geysers del Tatio, a mais de 4.300m de altitude. no frio da madrugada, colunas de vapor se erguem ao nascer do sol. café da manhã entre montanhas e parada em Machuca. à tarde: Laguna Cejar (águas ultra salgadas), Ojos del Salar (poços de água doce no meio do deserto) e pôr do sol espetacular em Tebinquinche.",
      },
      {
        day: 5,
        title: "dia 5 — cruzando a fronteira: Laguna Verde + Laguna Colorada",
        description:
          "a aventura começa antes do nascer do sol. cruzamos a fronteira no Hito Cajones e embarcamos em jipes 4x4 privados com guia local bilíngue. Laguna Verde aos pés do Vulcão Licancabur, depois a Laguna Colorada — famosa pelos tons avermelhados e pelas três espécies de flamingos nas margens. pernoite no vilarejo de Villa Mar.",
      },
      {
        day: 6,
        title: "dia 6 — altiplano boliviano + hotel de sal + céu estrelado de Uyuni",
        description:
          "travessia pelo altiplano com Lagunas Qatal e Negra, parada em San Cristóbal e no Vale das Rochas — formações geológicas esculpidas pelo vento. à tarde, chegamos a Colchani, às margens do Salar de Uyuni, onde passamos a noite em um hotel de sal. ao anoitecer, voltamos ao salar para o passeio sob o céu estrelado — Via Láctea, silêncio absoluto e a câmera trabalhando bastante.",
      },
      {
        day: 7,
        title: "dia 7 — Salar de Uyuni, o maior deserto de sal do planeta",
        description:
          "após o café da manhã, o Cemitério de Trens — locomotivas e vagões enferrujados que guardaram a história ferroviária da região. depois entramos de fato no Salar de Uyuni: imensidão branca até o horizonte, fotos surreais, almoço no meio do salar. Ilha Incahuasi coberta de cactos gigantes com vista panorâmica. o pôr do sol pintando o horizonte é o encerramento perfeito.",
      },
      {
        day: 8,
        title: "dia 8 — retorno ao Chile, San Pedro de Atacama",
        description:
          "retorno ao Chile cruzando a fronteira. após os trâmites de imigração, tarde livre em San Pedro de Atacama para relaxar, comprar souvenirs ou fazer uma última caminhada pelo deserto.",
      },
      {
        day: 9,
        title: "dia 9 — partida, Aeroporto de Calama",
        description:
          "após o café da manhã, no horário combinado, seu motorista leva você em traslado compartilhado até o Aeroporto de Calama (CJC). encerramento dos serviços — e de uma das viagens mais inesquecíveis da sua vida.",
      },
    ],
    accommodation: `san pedro de atacama: hospedagem em San Pedro de Atacama por 4 noites (dias 1–4 e 8), com café da manhã incluso.

villa mar / south lipez: pernoite no vilarejo de Villa Mar (dia 5), no coração do altiplano boliviano, com jantar incluso.

uyuni / colchani: 2 noites no altiplano boliviano (dias 6 e 7), incluindo a famosa experiência de dormir em um hotel de sal às margens do Salar de Uyuni.

atenção: toda a rota envolve altitude entre 2.440m (San Pedro) e mais de 4.300m (Geysers del Tatio). a adaptação é gradual e orientada pela Gio, mas prepare-se com antecedência.`,
    forWhom: [
      {
        title: "quem sonha com paisagens de outro planeta",
        description:
          "vales da lua, geisers que fumegam ao amanhecer, laguna verde, laguna colorada com flamingos e o branco infinito do salar de Uyuni. o Atacama + Uyuni é diferente de qualquer coisa que você já viu.",
      },
      {
        title: "quem quer sair da zona de conforto",
        description:
          "altitude, silêncio absoluto, deserto árido e uma natureza que parece irreal. essa trip é para quem quer se sentir pequenininha diante do mundo — e crescer com isso.",
      },
      {
        title: "quem está montando a lista dos destinos mais surreais",
        description:
          "o norte do Chile e o altiplano boliviano são dois dos cenários mais impressionantes da América do Sul. juntos, num roteiro de 9 dias, eles formam uma das viagens mais únicas da vida.",
      },
    ],
    faqs: [
      {
        question: "preciso de visto para o Chile e a Bolívia?",
        answer:
          "não, brasileiras não precisam de visto para entrar nem no Chile nem na Bolívia. passaporte válido é suficiente — com validade mínima de 6 meses após a data de retorno.",
      },
      {
        question: "a altitude vai me afetar?",
        answer:
          "o roteiro passa por altitudes entre 2.440m (San Pedro de Atacama) e mais de 4.300m (Geysers del Tatio). a adaptação é gradual e a Gio orienta todas sobre como se preparar com antecedência. hidratação constante, evitar álcool nos primeiros dias e descanso são as principais dicas.",
      },
      {
        question: "seguro viagem é obrigatório?",
        answer:
          "sim. recomendamos cobertura para altitude elevada, cancelamento e assistência médica internacional.",
      },
      {
        question: "como funciona a travessia para a Bolívia?",
        answer:
          "no dia 5 cruzamos a fronteira no Hito Cajones. todo o suporte logístico (transporte, guia bilíngue) está incluso. você só precisa ter o passaporte em mãos para os trâmites de imigração.",
      },
      {
        question: "o que levar para a viagem?",
        answer:
          "roupas para camadas (o deserto é quente de dia e muito frio à noite), protetor solar alto fator, óculos de sol, remédio para altitude (opcional, consulte sua médica), documentos e seguro viagem. a Gio envia um guia completo após a inscrição.",
      },
      {
        question: "como funciona o pagamento?",
        answer: "5% de desconto no pix. parcelamento em até 10x sem juros no cartão de crédito.",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "nessa edição eu não estarei presencialmente, mas vocês estarão em ótimas mãos: a Giovana Gentil, minha sócia, acompanha o grupo em todas as expedições, do começo ao fim. eu já fiz essa viagem pessoalmente e escolhi essa agência a dedo, então pode confiar que está tudo pensado nos mínimos detalhes. e claro, estarei sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem. quiser conhecer a Gi, é só dar uma olhada no Instagram dela: @giovanagentil.travel 💛",
      },
      {
        question: "mas se o quarto é duplo, quem será minha dupla?",
        answer:
          "nossos grupos têm foco total na interação social — a Gio escolhe alguém que possivelmente vai ter uma boa troca com você. essa mágica costuma dar certo! mas se você tem uma amiga que também vai na viagem, é possível optar por ficar juntas.",
      },
    ],
  },
  {
    slug: "peru-2027",
    title: "Peru",
    destination: "Peru",
    cardImage: "/images/trips/peru-2027/hero/hero-1.jpg",
    heroImage: "/images/trips/peru-2027/hero/hero-1.jpg",
    heroImages: ["/images/trips/peru-2027/hero/hero-1.jpg"],
    dates: "13 a 23 de junho de 2027",
    dateForSort: "2027-06-13",
    dateForSortEnd: "2027-06-23",
    duration: "11 dias",
    priceDisplay: "R$ 8.700",
    priceValue: 8700,
    national: false,
    priceInstallments: "",
    agency: "",
    tagline:
      "Machu Picchu, o Vale Sagrado dos Incas, Cusco e o Lago Titicaca em 11 dias",
    description:
      "o Peru é um dos destinos mais ricos do mundo — Machu Picchu, o Vale Sagrado dos Incas, Cusco, o Lago Titicaca e uma gastronomia reconhecida como a melhor da América Latina. de 13 a 23 de junho de 2027 com a Gio.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a viagem ao Peru (13 a 23 de junho de 2027) e quero garantir minha vaga :)",
    paymentMethods: [],
    included: [],
    notIncluded: [],
    itinerary: [
      {
        day: 1,
        title: "dia 1 — bem-vinda a Lima!",
        description:
          "13/06 · ao desembarcar em Lima, um motorista estará à sua espera para levá-la com conforto até o hotel em Miraflores, um dos bairros mais bem localizados da capital peruana. após o check-in, aproveite para descobrir por que Lima é referência mundial na gastronomia: ceviche fresco, causa peruana e lomo saltado fazem parte da identidade do país. no fim do dia, caminhe pelo Malecón de Miraflores, com vista para o Oceano Pacífico, passando pelos parques costeiros e pelo icônico Parque do Amor. pernoite em Lima.",
      },
      {
        day: 2,
        title: "dia 2 — visitando os principais tesouros da cidade de Lima",
        description:
          "14/06 · hoje Lima mostra duas faces em um só dia: histórica e moderna. city tour pela Plaza de Armas, com a Catedral e o Palácio do Governo; Catacumbas do Mosteiro de São Francisco; Huaca Pucllana, pirâmide pré-inca em Miraflores; e Larcomar, com vista aberta para o Oceano Pacífico. à noite, recomendamos uma visita opcional ao Parque das Águas, com show de luzes e fontes dançantes. pernoite em Lima.",
      },
      {
        day: 3,
        title: "dia 3 — chegamos a Cusco, antiga capital do Império Inca",
        description:
          "15/06 · após o café da manhã em Lima, embarque rumo a Cusco. no desembarque, um motorista estará à sua espera para levá-la ao hotel no centro histórico. o restante do dia é dedicado à aclimatação: hidrate-se, vá no seu ritmo e faça uma caminhada leve pelas ruas de pedra. nossa equipe se encontrará com você para tirar dúvidas, entregar documentos e alinhar as informações essenciais. pernoite em Cusco.",
      },
      {
        day: 4,
        title: "dia 4 — conhecendo Cusco e seus sítios arqueológicos",
        description:
          "16/06 · o dia combina arqueologia, paisagens e a genialidade prática dos incas. visita a Sacsayhuamán, com suas muralhas monumentais e vista panorâmica da cidade; Qoricancha, o Templo do Sol; Tambomachay, o Banho do Inca; e Puca Pucara, a Fortaleza Vermelha. o Boleto Turístico de Cusco está incluído. pernoite em Cusco.",
      },
      {
        day: 5,
        title: "dia 5 — Laguna Humantay, a trilha até as águas sagradas dos Andes",
        description:
          "17/06 · a Laguna Humantay é um dos cenários mais impactantes dos Andes. a trilha sobe entre vales e montanhas até revelar um lago de azul intenso aos pés de picos nevados. no topo, a pausa é para contemplar, fotografar e sentir a força da natureza andina, com retorno a Cusco e suporte profissional do início ao fim. a atividade exige bom preparo físico por causa da altitude de 4.200 metros; consulte opções mais leves, como acesso a cavalo. pernoite em Cusco.",
      },
      {
        day: 6,
        title:
          "dia 6 — Vale Sagrado: Maras, Moray, Chinchero, Ollantaytambo e trem para Águas Calientes",
        description:
          "18/06 · prepare-se para o Vale Sagrado, onde a engenharia inca e paisagens impressionantes caminham lado a lado. visita a Moray, com seus terraços circulares; Maras, com as piscinas de sal artesanais; Chinchero, tradição têxtil viva; e Ollantaytambo, uma das cidades incas mais preservadas, com almoço incluído. no fim da tarde, embarque no trem rumo a Machu Picchu Pueblo, também conhecido como Águas Calientes. pernoite em Águas Calientes.",
      },
      {
        day: 7,
        title: "dia 7 — Machu Picchu: sinta a potente energia deste lugar!",
        description:
          "19/06 · você entra em um dos cenários mais impressionantes do planeta com acompanhamento de guia. conheça o Templo do Sol, o Templo das Três Janelas, o Intihuatana, o Templo do Condor e a Praça Sagrada. os ingressos são limitados e esgotam rápido. experiências opcionais: visita a Huayna Picchu, almoço no Hotel Belmond, guia privado ou trem superior Vistadome. ao final, retorno de trem e traslado para Cusco. pernoite em Cusco.",
      },
      {
        day: 8,
        title: "dia 8 — Montanha Colorida: trilha clássica dos aventureiros",
        description:
          "20/06 · a Montanha Arco-Íris é para quem busca um desafio real nos Andes. a trilha acontece em alta altitude, com subidas exigentes e vistas abertas de montanhas nevadas e vales amplos. no topo, a pausa é para respirar fundo e ver de perto as cores naturais que tornaram este um dos cartões-postais mais impressionantes do Peru. exige bom preparo físico por causa da altitude de 5.000 metros; consulte opções mais leves, como acesso com quadriciclo ou a cavalo. pernoite em Cusco.",
      },
      {
        day: 9,
        title: "dia 9 — Rota do Sol: a travessia andina de Cusco a Puno",
        description:
          "21/06 · travessia de Cusco a Puno entre paisagens andinas e vilarejos, com paradas culturais e ingressos incluídos. visite Andahuaylillas, a Capela Sistina das Américas; Raqchi e o Templo de Wiracocha; Sicuani, com almoço em buffet; La Raya, no ponto mais alto a 4.335 metros; e Pukara, com seu museu e cultura pré-inca. chegada a Puno e traslado ao hotel no centro. pernoite em Puno.",
      },
      {
        day: 10,
        title: "dia 10 — Lago Titicaca: navegação pelo lago mais alto do mundo!",
        description:
          "22/06 · após o café da manhã, seguimos ao porto do Lago Titicaca. visite as Ilhas Flutuantes dos Uros, feitas de totora, com passeio em barco de totora; e a Ilha Taquile, famosa pela cultura acolhedora e pelos tecidos artesanais reconhecidos pela UNESCO. o dia inclui almoço na Ilha Taquile e termina com o retorno a Puno. pernoite em Puno.",
      },
      {
        day: 11,
        title: "dia 11 — fim do roteiro, mas ainda pode estender sua aventura!",
        description:
          "23/06 · após o café da manhã e no horário combinado, seu motorista estará à sua espera para levá-la em carro privado ao aeroporto de Juliaca, em um trajeto de aproximadamente 1h30. aqui encerramos nossos serviços. se quiser prolongar a viagem, fale com a gente para incluir experiências opcionais e outros destinos incríveis do Peru.",
      },
    ],
    accommodation:
      "informações sobre as hospedagens serão divulgadas junto com o lançamento oficial do roteiro.",
    forWhom: [
      {
        title: "quem quer viver uma das 7 maravilhas do mundo",
        description:
          "Machu Picchu ao amanhecer, com a neblina descendo sobre as ruínas — uma das imagens mais icônicas do mundo. e nada se compara a estar lá.",
      },
      {
        title: "quem ama cultura, história e gastronomia",
        description:
          "o Peru tem uma das gastronomias mais celebradas do mundo (ceviche, lomo saltado, causa) e uma história inca que é de tirar o fôlego. Cusco é mágico.",
      },
      {
        title: "quem quer aventura com conforto",
        description:
          "caminhada no Vale Sagrado, trem para Aguas Calientes, visitação a sítios arqueológicos e acomodações boutique. o Peru na medida certa.",
      },
    ],
    faqs: [
      {
        question: "preciso de visto para o Peru?",
        answer: "não, brasileiras não precisam de visto para entrar no Peru — apenas passaporte válido.",
      },
      {
        question: "a altitude de Cusco afeta?",
        answer:
          "Cusco fica a 3.400m de altitude e a adaptação é necessária. o roteiro é pensado com uma chegada gradual para minimizar os efeitos da altitude. a Gio orienta todas as participantes com antecedência.",
      },
      {
        question: "como faço para reservar minha vaga?",
        answer:
          "fale com a Gio pelo WhatsApp para confirmar os detalhes e receber os próximos passos da reserva.",
      },
      {
        question: "a viagem é só para mulheres?",
        answer: "sim, como sempre — experiências exclusivas para mulheres.",
      },
    ],
  },
  {
    slug: "reveillon-caraiva-2026",
    title: "Réveillon em Caraíva",
    destination: "Caraíva, Bahia",
    cardImage: "/images/trips/reveillon-caraiva-2026/hero/hero-1.jpg",
    heroImage: "/images/trips/reveillon-caraiva-2026/hero/hero-1.jpg",
    heroImages: ["/images/trips/reveillon-caraiva-2026/hero/hero-1.jpg"],
    dates: "26 de dezembro de 2026 a 2 de janeiro de 2027",
    dateForSort: "2026-12-26",
    dateForSortEnd: "2027-01-02",
    duration: "8 dias",
    priceDisplay: "R$ 4.850",
    priceValue: 4850,
    national: true,
    priceInstallments: "em até 12x com juros",
    agency: "Tupinambá Pousada e Hostel Caraíva",
    tagline:
      "praia, rio e cultura Pataxó para receber 2027 em Caraíva, com a festa da virada por sua conta",
    description:
      "8 dias de Réveillon em Caraíva com a Gio e uma turma de até 12 mulheres. hospedagem exclusiva para o grupo no Tupinambá Pousada e Hostel, café da manhã, traslados de Porto Seguro, passeio de barco pelo Rio Caraíva e visita à Reserva Pataxó do Porto do Boi. a festa da virada não está inclusa, para que cada uma escolha como quer celebrar.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a viagem de Réveillon em Caraíva (26 de dezembro de 2026 a 2 de janeiro de 2027) e quero garantir minha vaga :)",
    paymentMethods: ["cartão de crédito"],
    included: [
      "hospedagem completa no Tupinambá Pousada e Hostel Caraíva",
      "2 quartos exclusivos para o grupo: um com 8 camas e outro com 4 camas",
      "café da manhã todos os dias",
      "traslado de ida e volta entre o aeroporto de Porto Seguro e Caraíva",
      "passeio de barco pelo Rio Caraíva",
      "passeio de buggy para a Reserva Pataxó do Porto do Boi",
    ],
    notIncluded: [
      "passagem aérea até Porto Seguro",
      "almoços e jantares",
      "seguro viagem",
      "festa da virada",
      "almoço típico na Reserva Pataxó",
      "gastos pessoais e tudo o que não estiver mencionado em inclusões",
    ],
    itinerary: [
      {
        day: 1,
        title: "dia 1 — chegada em Caraíva",
        description:
          "26/12 · traslado do aeroporto de Porto Seguro até Caraíva, travessia do rio e check-in na pousada. tarde livre para sentir a energia da vila e curtir o pôr do sol à beira do rio.",
      },
      {
        day: 2,
        title: "dia 2 — Praia do Satu",
        description:
          "27/12 · dia dedicado à Praia do Satu, com tempo para aproveitar o mar, caminhar pela areia e viver Caraíva sem pressa.",
      },
      {
        day: 3,
        title: "dia 3 — passeio de barco pelo Rio Caraíva",
        description:
          "28/12 · passeio de barco pelo Rio Caraíva e tarde livre para explorar a vila, descansar ou curtir a praia.",
      },
      {
        day: 4,
        title: "dia 4 — Reserva Pataxó do Porto do Boi",
        description:
          "29/12 · passeio de buggy até a Reserva Pataxó do Porto do Boi, com pintura corporal, ritual e contato com a cultura indígena. almoço típico disponível à parte.",
      },
      {
        day: 5,
        title: "dia 5 — dia livre de praia",
        description:
          "30/12 · um dia inteiro livre para escolher a praia, descansar e aproveitar o ritmo tranquilo da vila.",
      },
      {
        day: 6,
        title: "dia 6 — praia + noite da virada",
        description:
          "31/12 · dia de praia e noite de Réveillon. a festa não está inclusa no pacote; quem quiser poderá escolher entre opções como o Sal de Caraíva ou o forró, com cupom de desconto.",
      },
      {
        day: 7,
        title: "dia 7 — primeiro dia do ano em Caraíva",
        description:
          "01/01 · dia livre para descansar, conhecer o artesanato local e viver as últimas curtições na vila.",
      },
      {
        day: 8,
        title: "dia 8 — manhã livre + retorno",
        description:
          "02/01 · manhã livre em Caraíva e, no horário combinado, traslado de volta para o aeroporto de Porto Seguro.",
      },
    ],
    accommodation:
      "Tupinambá Pousada e Hostel Caraíva — uma pousada e um hostel lado a lado, do mesmo proprietário, com café da manhã compartilhado entre os dois espaços. o grupo terá dois quartos exclusivos, sem hóspedes de fora: um quarto com 8 camas e outro com 4 camas.",
    forWhom: [
      {
        title: "quem quer começar o ano com o pé na areia",
        description:
          "dias de praia, pôr do sol à beira do rio e a energia única da vila de Caraíva para receber 2027.",
      },
      {
        title: "quem quer liberdade para escolher a virada",
        description:
          "a festa não está inclusa no pacote: quem quiser pode curtir o Sal de Caraíva ou o forró com cupom de desconto, e quem preferir pode celebrar de outro jeito.",
      },
      {
        title: "quem ama cultura e natureza",
        description:
          "passeio de barco pelo Rio Caraíva e visita à Reserva Pataxó do Porto do Boi, com ritual, pintura corporal e vivência da cultura indígena.",
      },
    ],
    faqs: [
      {
        question: "a festa da virada está inclusa?",
        answer:
          "não. a festa ficou fora do pacote para manter o valor mais acessível para quem não curte balada. quem quiser participar terá opções como o Sal de Caraíva ou o forró, além de cupom de desconto.",
      },
      {
        question: "como chegamos até Caraíva?",
        answer:
          "o pacote inclui o traslado de ida e volta entre o aeroporto de Porto Seguro e Caraíva. a travessia final do rio também faz parte da chegada à vila.",
      },
      {
        question: "como será a hospedagem?",
        answer:
          "ficaremos no Tupinambá Pousada e Hostel Caraíva, com dois quartos exclusivos para o nosso grupo: um de 8 camas e outro de 4 camas. o café da manhã é compartilhado entre a pousada e o hostel.",
      },
      {
        question: "o seguro viagem está incluso?",
        answer: "não. temos uma agência parceira para ajudar quem precisar contratar o seguro.",
      },
      {
        question: "como faço para reservar minha vaga?",
        answer:
          "fale com a Gio pelo WhatsApp para confirmar os detalhes e receber as opções de pagamento em até 12x com juros.",
      },
      {
        question: "a viagem é só para mulheres?",
        answer: "sim, todas as experiências da Julia Paraizo são exclusivas para mulheres.",
      },
    ],
  },
  {
    slug: "lencois-maranhenses-3",
    title: "Lençóis Maranhenses",
    destination: "Lençóis Maranhenses, Maranhão",
    cardImage: "/images/trips/lencois-maranhenses/hero/hero-1.jpg",
    heroImage: "/images/trips/lencois-maranhenses/hero/hero-1.jpg",
    heroImages: [
      "/images/trips/lencois-maranhenses/hero/hero-1.jpg",
      "/images/trips/lencois-maranhenses/hero/hero-2.jpg",
      "/images/trips/lencois-maranhenses/hero/hero-3.jpg",
      "/images/trips/lencois-maranhenses/hero/hero-4.jpg",
      "/images/trips/lencois-maranhenses/hero/hero-5.jpg",
      "/images/trips/lencois-maranhenses/hero/hero-6.jpg",
    ],
    dates: "23 a 26 de julho de 2027",
    dateForSort: "2027-07-23",
    dateForSortEnd: "2027-07-26",
    duration: "4 dias",
    priceDisplay: "R$ 2.700",
    priceValue: 2700,
    national: true,
    priceInstallments:
      "entrada de R$ 1.250 para reservar, restante em até 4x sem juros ou até 6x com juros no pix, boleto ou cartão",
    agency: "",
    tagline:
      "travessia de 3 dias pelas dunas do parque nacional, dormindo em rede na casa de famílias nativas",
    description:
      "4 dias nos lençóis maranhenses. chegada em são luís no dia 23, véspera da travessia, para já estarmos em barreirinhas e descansados — a busca é de madrugada no dia 24. são 3 dias de trekking pelo parque nacional dos lençóis maranhenses (entre 30 e 38km no total), com pernoite em rede na casa de famílias nativas, travessia do rio negro, banho de lagoa e a imensidão das dunas ao amanhecer. um grupo misto de até 15 pessoas, numa das paisagens mais únicas e exóticas do mundo — sem hotel, sem luxo: comida caseira, banho de lagoa e o silêncio que só o deserto tem.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a viagem aos Lençóis Maranhenses (23 a 26 de julho de 2027) e quero garantir minha vaga :)",
    paymentMethods: ["pix", "boleto", "cartão de crédito"],
    included: [
      "transfer São Luís ↔ Barreirinhas",
      "todo o transporte da travessia (4x4, barco ou lancha, conforme o roteiro)",
      "café da manhã, almoço e jantar nos dias de caminhada",
      "hospedagem em rede na casa de famílias nativas (2 noites)",
      "condutor ecológico local, credenciado no ICMBio",
      "seguro viagem individual",
      "transfer de volta Santo Amaro ↔ São Luís",
    ],
    notIncluded: [
      "passagem aérea",
      "hotel em Barreirinhas",
      "traslados aeroporto ↔ hotel e vice-versa",
      "bebidas (pagas direto às famílias, em dinheiro)",
      'tudo o que não estiver listado em "o que está incluso"',
    ],
    itinerary: [
      {
        day: 1,
        title: "dia 23 — chegada em são luís",
        description:
          "procure voos que pousem até o início da tarde, para dar tempo de quem quiser pegar um hotel na cidade e descansar antes da expedição começar (recomendado, já que a van passa às 3h da manhã para buscar todas na porta do hotel ou no aeroporto, com destino final a Barreirinhas).",
      },
      {
        day: 2,
        title: "dia 24 — primeiro dia da expedição",
        description:
          "ainda não sabemos qual dos dois roteiros vamos seguir (isso depende de como as lagoas estarão em julho — o guia decide mais perto da data, mas os dois são igualmente lindos e seguem a mesma estrutura de 3 dias, 2 noites em rede). roteiro 1: saída de barco de Barreirinhas às 8h30, passando pela APA Pequenos Lençóis, Atins, e caminhada até o Oásis Baixa Grande. roteiro 2: saída de 4x4 às 3h da manhã até o Circuito da Lagoa Bonita, com café da manhã no caminho, seguido de caminhada de 12km até Mucambo, comunidade de 20 famílias.",
      },
      {
        day: 3,
        title: "dia 25 — segundo dia da expedição",
        description:
          "roteiro 1: saída às 5h30 para acompanhar o nascer do sol e cruzar o Rio Negro — 10km de caminhada até o Oásis Queimada dos Britos, passando pela Ponta do Peadouro. roteiro 2: caminhada de 15km dividida em duas partes, até o povoado de Buriti Grosso e depois até Rancharia, cruzando o Rio Negro e uma região de dunas altas. pernoite em rede na comunidade.",
      },
      {
        day: 4,
        title: "dia 26 — terceiro e último dia da expedição + volta",
        description:
          "roteiro 1: saída de madrugada, por volta das 3h, para a caminhada final de 14km até a Lagoa do Junco, com banhos ao longo do caminho. roteiro 2: saída bem cedo para a caminhada final de 11km até a Lagoa do Junco. nos dois casos, chegada prevista para as 10h, seguindo de 4x4 até Santo Amaro e de lá o transfer de volta a Barreirinhas ou São Luís — recomendamos voos a partir das 15h.",
      },
    ],
    accommodation: `hospedagem em redários construídos pelos moradores, ao longo do roteiro escolhido — dormimos todas lado a lado nas redes, com lençóis fornecidos pelas famílias. os redários costumam ter tomadas para recarregar o celular e wi-fi (com horários restritos para economizar energia dos geradores) — um carregador portátil pode ajudar. os banheiros são comunitários, então sempre tem fila para o banho, que deve ser rapidinho.

estadia e alimentação nos redários já estão inclusas no pacote — leve dinheiro trocado para as bebidas, pagas direto às famílias.`,
    forWhom: [
      {
        title: "quem quer se desconectar de verdade",
        description:
          "3 dias de trekking pelas dunas do parque nacional, dormindo em rede na casa de famílias nativas, sem pressa e sem luxo.",
      },
      {
        title: "quem gosta de caminhada de verdade",
        description:
          "trechos de 7 a 15km por dia, entre dunas, rios e lagoas — ao todo, entre 30 e 38km em 3 dias. é um itinerário físico de verdade, então vale ter certeza de que está apta pra aventura.",
      },
      {
        title: "quem quer conhecer as comunidades locais",
        description:
          "hospedagem e refeições nas casas de famílias nativas, com guia ecológico local credenciado no ICMBio e host fotógrafo pra registrar tudo.",
      },
    ],
    faqs: [
      {
        question: "o que preciso levar?",
        answer: `lanterna de cabeça, roupas com proteção UV, boné, óculos de sol, protetor solar, capa de chuva, mochila de 30, 40 ou 60L, bastão de caminhada, garrafa de água de 1,5L ou mochila de hidratação, roupa de banho, barra de cereal/castanhas/frutas para lanche na trilha, câmera fotográfica, sandálias ou chinelos, meias, toalha de praia, produtos de higiene pessoal e medicamentos pessoais.

evite itens pesados: livros, agendas, eletrônicos pesados e excesso de roupa. o ideal é carregar mochila leve — menos é mais.`,
      },
      {
        question: "como funciona o pagamento?",
        answer:
          "o investimento é de R$ 2.700. para confirmar a vaga, a entrada é de R$ 1.250, e o restante pode ser parcelado em até 4x sem juros ou até 6x com juros, via pix, boleto ou cartão.",
      },
      {
        question: "qual a política de cancelamento?",
        answer:
          "o cancelamento deve ser solicitado até 15 dias antes do início dos serviços contratados; após esse prazo, será cobrada uma taxa de 50% do valor contratado. devoluções são feitas com desconto das taxas de transferência bancária. em caso de não comparecimento (no-show), a cobrança é de 100% dos serviços contratados.",
      },
      {
        question: "quais são os dois roteiros possíveis?",
        answer:
          "os dois roteiros são muito parecidos entre si — a diferença é qual comunidade e quais lagoas vamos visitar, dependendo de onde estiver mais cheio em julho. em ambos os casos, são 3 dias, 2 noites em rede na casa de famílias nativas, travessia do Rio Negro e chegada final na Lagoa do Junco. o guia avalia isso mais perto da data e avisa qual dos dois vamos seguir.",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "nessa edição eu não estarei presencialmente, mas vocês estarão em ótimas mãos: a Marcella e o Salo acompanham o grupo do começo ao fim. eles têm 24 anos, são de Porto Alegre e vivem viajando juntos — já rodaram o Brasil de motorhome e passaram quase um mês no Panamá fazendo parcerias com hotéis. a Marcella também é fotógrafa, então vocês vão sair de lá com registros incríveis. e claro, estarei sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem 💛",
      },
      {
        question: "a viagem é só para mulheres?",
        answer:
          "não — essa é uma das experiências mistas da Julia Paraizo, e um casal estará hosting.",
      },
    ],
  },
  {
    slug: "atacama-2027",
    title: "Atacama",
    destination: "Deserto do Atacama, Chile",
    cardImage: "/images/trips/atacama-uyuni-2027/hero/hero-1.jpg",
    heroImage: "/images/trips/atacama-uyuni-2027/hero/hero-1.jpg",
    heroImages: ["/images/trips/atacama-uyuni-2027/hero/hero-1.jpg"],
    dates: "30 de abril a 6 de maio de 2027",
    dateForSort: "2027-04-30",
    dateForSortEnd: "2027-05-06",
    duration: "6 noites",
    priceDisplay: "R$ 7.500",
    priceValue: 7500,
    national: false,
    priceInstallments: "",
    agency: "",
    tagline:
      "termas, vales coloridos, salares e um tour astronômico sob o céu mais limpo do mundo, em 6 noites",
    description:
      "6 noites no deserto do Atacama, hospedadas no CKOI Atacama Lodge, em San Pedro. um roteiro pensado pra conforto e segurança, com gastronomia impecável em todos os passeios: Termas de Puritama, Cordillera de la Sal, Valle del Arcoíris, Lagunas Altiplânicas, Piedras Rojas, Geisers del Tatio, Salar de Aguas Calientes e uma noite de tour astronômico sob um dos céus mais limpos do mundo. um grupo de 12 meninas, acompanhadas em todos os passeios por guia, ajudante e host.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a viagem ao Atacama (30 de abril a 6 de maio de 2027) e quero garantir minha vaga :)",
    paymentMethods: [],
    included: [
      "6 noites de hospedagem em quarto duplo no CKOI Atacama Lodge",
      "café da manhã todos os dias no hotel",
      "transporte do Aeroporto de Calama (CJC) até San Pedro de Atacama",
      "todos os passeios (exceto ingresso de alguns parques, pago na entrada)",
      "alimentação e bebidas nos passeios",
    ],
    notIncluded: [
      "passagem aérea",
      "ingresso de parques (ideal pagar na hora — cerca de 90 mil pesos chilenos no total)",
      "seguro viagem",
      "refeições livres",
      'tudo o que não estiver listado em "o que está incluso"',
    ],
    itinerary: [
      {
        day: 1,
        title: "30/04 — chegada em Calama",
        description:
          "assim que você chegar no aeroporto de Calama, um motorista te busca e leva até o hotel, no centro de San Pedro de Atacama — não precisa esperar todo mundo chegar, cada uma vai indo ao hotel conforme pousa. dia e noite livres pra conhecer os arredores e o centrinho.",
      },
      {
        day: 2,
        title: "01/05 — Lagunas Escondidas de Baltinache + Cordillera de la Sal",
        description:
          "depois do café no hotel, seguimos para as Lagunas Escondidas, a cerca de 60km de San Pedro — tempo pra conhecer as 7 lagoas salgadas e flutuar em uma delas. almoço incluso. seguimos para a Cordillera de la Sal, setor do Valle de la Luna onde está o ônibus abandonado, com parada pra fotos e caminhada. jantar livre.",
      },
      {
        day: 3,
        title: "02/05 — Termas de Puritama + Valle del Arcoíris",
        description:
          "águas termais de Puritama, um complexo de 8 piscinas em meio à Cordilheira dos Andes, com temperaturas entre 27 e 30 graus. brunch incluso e, à tarde, visita à reserva arqueológica de Yerbas Buenas com aula sobre cultura ancestral atacamenha, seguindo para o tour no Valle del Arcoíris, com suas coloridas formações rochosas.",
      },
      {
        day: 4,
        title: "03/05 — Lagunas Altiplânicas + Piedras Rojas",
        description:
          "um dia inteiro rodeadas por vulcões, com pisos ecológicos distintos pra observar fauna, flora e geologia. caminhada por Piedras Rojas e pelas Lagunas Altiplânicas, com almoço regado a vinho no povoado de Socaire. noite livre.",
      },
      {
        day: 5,
        title: "04/05 — Geisers del Tatio + Geiser Blanco + Guatín",
        description:
          "manhã que começa bem cedo (e com muito frio) no campo geotermal El Tatio, a mais de 4 mil metros de altitude, com cerca de 80 gêiseres. café da manhã no Geiser Blanco e visita ao cânion Guatín, com seus cactos gigantes. resto do dia livre.",
      },
      {
        day: 6,
        title: "05/05 — Rota dos Salares + tour astronômico",
        description:
          "passeio até a fronteira entre Chile, Argentina e Bolívia, com paisagens vulcânicas, os Monjes de la Pacana e o bofedal de Quepiaco, finalizando com um belo almoço. à noite, às 19h45, tour astronômico guiado por um astrônomo, com observação a olho nu e por telescópio de constelações, nebulosas e planetas — foto para recordação inclusa.",
      },
    ],
    accommodation:
      "CKOI Atacama Lodge, no centro de San Pedro de Atacama, em quarto duplo. as refeições dos passeios são preparadas com cuidado, ingredientes frescos e opções para vegetarianas e veganas — vocês respondem um questionário sobre restrições alimentares antes da viagem.",
    forWhom: [
      {
        title: "quem procura conforto e segurança",
        description:
          "toda a equipe (host, guia e ajudante) tem curso de primeiros socorros em regiões remotas e montanhas, com veículos em manutenção regular.",
      },
      {
        title: "quem quer viver o Atacama sem os horários dos pacotes tradicionais",
        description:
          "os horários dos passeios só são divulgados um dia antes, pra fugir dos turistas das agências regulares — e a gastronomia em cada parada é caprichada de verdade.",
      },
      {
        title: "quem topa se aclimatar com calma",
        description:
          "o roteiro é programado pra uma aclimatação correta, prevenindo sintomas de mal de altitude — os passeios sobem gradualmente até os 4.800 msnm do tour astronômico.",
      },
    ],
    faqs: [
      {
        question: "o que preciso levar?",
        answer:
          "roupa de banho, chinelo, óculos de sol, protetor solar e corta-vento — as temperaturas variam bastante entre o dia e a noite no deserto.",
      },
      {
        question: "como funciona o pagamento?",
        answer:
          "o valor do pacote é R$ 7.500. além disso, é preciso levar em dinheiro o valor estimado das entradas dos parques que não têm ingresso incluso, cerca de 90 mil pesos chilenos ao longo da viagem.",
      },
      {
        question: "o roteiro pode mudar?",
        answer:
          "sim — o clima no deserto muda de forma repentina, e chuvas, neve ou ventos fortes podem fechar acessos e parques. nesses casos, os passeios podem ter os dias alterados ou o roteiro modificado para outro lugar habilitado. a ordem dos passeios também pode mudar conforme a disponibilidade de entradas.",
      },
      {
        question: "e o mal de altitude?",
        answer:
          "o roteiro é programado pra uma aclimatação correta, subindo aos poucos até os pontos mais altos (o tour astronômico chega a 4.800 msnm). ainda assim, é importante se hidratar bem e ir com calma nos primeiros dias.",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "nessa edição eu não estarei presencialmente, mas vocês estarão em ótimas mãos: a Marcella acompanha o grupo em todos os passeios, junto com um guia e um ajudante locais. a Marcella tem 24 anos, é de Porto Alegre, conheceu o Atacama e se apaixonou — e voltou com tudo organizado com muito carinho pra levar um grupo de mulheres. e claro, estarei sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem 💛",
      },
      {
        question: "a viagem é só para mulheres?",
        answer: "sim, todas as experiências da Julia Paraizo são exclusivas para mulheres.",
      },
    ],
  },
  {
    slug: "amazonia-casais-2026",
    title: "Amazônia — Trip de Casais",
    destination: "Amazônia, Brasil",
    cardImage: "/images/trips/amazonia/amazonia-1.jpeg",
    heroImage: "/images/trips/amazonia/amazonia-1.jpeg",
    heroImages: [
      "/images/trips/amazonia/hero/hero-1.jpg",
      "/images/trips/amazonia/hero/hero-2.jpg",
      "/images/trips/amazonia/hero/hero-3.jpg",
      "/images/trips/amazonia/hero/hero-4.jpg",
      "/images/trips/amazonia/hero/hero-5.jpg",
      "/images/trips/amazonia/hero/hero-6.jpg",
    ],
    dates: "3 a 7 de abril de 2027",
    dateForSort: "2027-04-03",
    dateForSortEnd: "2027-04-07",
    duration: "5 dias",
    priceDisplay: "R$ 5.400",
    priceValue: 5400,
    national: true,
    priceInstallments:
      "pagamento via pix ou cartão em até 3x sem juros, direto pelo link com o hotel (com comprovante e contrato)",
    agency: "Amazônia Jungle Hotel",
    tagline:
      "nado com botos cor-de-rosa, jantar na selva e uma noite inteira acampados na floresta — em casal",
    description:
      "uma edição especial pensada para casais: 5 dias no Amazônia Jungle Hotel, às margens do Rio Negro, para viver a floresta a dois. focagem de jacarés, caminhada na selva, nado com botos cor-de-rosa, visita a uma comunidade indígena e a uma casa de caboclos, pescaria de piranha e de pirarucu, plantio de árvore e uma noite de pernoite acampados na selva, com redes suspensas e jantar à luz da fogueira. até 10 casais, com toda a infraestrutura do hotel à disposição.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a trip de casais na Amazônia (3 a 7 de abril de 2027) e quero garantir minha vaga :)",
    paymentMethods: ["pix", "cartão de crédito"],
    included: [
      "traslado ida e volta (buscamos vocês no aeroporto ou em qualquer hotel do perímetro urbano de Manaus)",
      "pensão completa: café da manhã, almoço, jantar, sucos e sobremesas em todos os dias",
      "hospedagem com toda a infraestrutura do hotel: wi-fi, restaurante e bar, duas piscinas, redes, sala de tv/vídeo, salão de jogos, quadra de areia (vôlei, futebol e beach tennis), campo de futebol, trilha para caminhada, energia convencional + gerador e roupa de cama e banho já esterilizada",
      "passeios de selva: focagem de jacarés, caminhada guiada, nado com botos cor-de-rosa, pescaria de piranha e de pirarucu",
      "visita a comunidade indígena, a uma casa de caboclos ribeirinhos e à comunidade flutuante do Catalão",
      "1 noite de pernoite acampados na selva com redes suspensas e jantar na fogueira",
      "plantio de uma muda de árvore amazônica",
    ],
    notIncluded: [
      "passagem aérea até Manaus",
      "bebidas alcoólicas e itens de consumo pessoal",
      "gorjetas e atividades opcionais não listadas no roteiro",
    ],
    itinerary: [
      {
        day: 1,
        title: "chegada + reconhecimento + focagem de jacarés",
        description:
          "saída de Manaus rumo ao hotel (buscamos no aeroporto ou em qualquer hotel do perímetro urbano). check-in a partir das 10h, com welcome drink e tour de reconhecimento pelo hotel e suas árvores frutíferas — incluindo a Sumaúma e as ruínas do antigo Ariaú Towers. o primeiro passeio começa às 15h30, então vale chegar no aeroporto antes das 13h. à tarde, focagem de jacarés. jantar no hotel.",
      },
      {
        day: 2,
        title: "caminhada na selva + pescaria de piranhas",
        description:
          "café da manhã e caminhada na selva com guia nativo, por trilhas pouco exploradas. à tarde, pescaria recreativa de piranhas — se quiser, o chef prepara sua pesca pro jantar.",
      },
      {
        day: 3,
        title: "interação com botos + comunidade indígena + casa do caboclo",
        description:
          "manhã de interação com os botos cor-de-rosa, sempre acompanhados por um instrutor. visita à comunidade indígena e, à tarde, à casa de um caboclo ribeirinho. no fim do dia, encontro das águas, pescaria recreativa de pirarucu e visita à comunidade flutuante do Catalão.",
      },
      {
        day: 4,
        title: "nascer do sol com observação de pássaros + pernoite na selva",
        description:
          "o dia começa às 5h com passeio de observação do nascer do sol e dos pássaros. à noite, saída para a experiência mais imersiva do pacote: pernoite acampados na floresta, em redes suspensas, com jantar preparado na fogueira.",
      },
      {
        day: 5,
        title: "plantio de árvore + partida",
        description:
          "café da manhã e plantio de uma muda de árvore amazônica, simbolizando o compromisso com a preservação da floresta. checkout às 9h e transfer de volta para Manaus (aeroporto ou qualquer hotel do perímetro urbano) — voos a partir das 13h da tarde.",
      },
    ],
    accommodation: `toda a infraestrutura do hotel à disposição do casal: wi-fi, restaurante e bar, duas piscinas, redes, sala de tv/vídeo, salão de jogos, quadra de areia (vôlei, futebol e beach tennis), campo de futebol, trilha para caminhada na natureza, energia convencional + gerador, e toda a roupa de cama e banho já esterilizada.

na noite de pernoite na selva, a hospedagem é substituída pela experiência acampada, em redes suspensas montadas pelos guias.

importante: os passeios e o cronograma estão sujeitos a alterações de acordo com a época do rio — cheia ou seca — ou o mau tempo.`,
    accommodationImages: [
      "/images/trips/amazonia/acomodacao/1.jpeg",
      "/images/trips/amazonia/acomodacao/2.jpeg",
      "/images/trips/amazonia/acomodacao/3.jpeg",
      "/images/trips/amazonia/acomodacao/4.jpeg",
      "/images/trips/amazonia/acomodacao/5.jpeg",
      "/images/trips/amazonia/acomodacao/6.jpeg",
    ],
    forWhom: [
      {
        title: "casais que querem viver uma aventura a dois",
        description:
          "nado com botos cor-de-rosa, jantar na selva e uma noite inteira acampados na floresta amazônica — uma edição pensada especialmente para casais.",
      },
      {
        title: "quem quer sair da rotina em boa companhia",
        description:
          "cinco dias desconectados, entre trilhas, rios e comunidades ribeirinhas, com toda a infraestrutura do hotel pra relaxar depois de cada passeio.",
      },
      {
        title: "quem quer conhecer o Brasil por outro ângulo",
        description:
          "a floresta mais biodiversa do planeta fica aqui, e viver isso em casal muda completamente a relação com o próprio país.",
      },
    ],
    faqs: [
      {
        question: "como funciona o pagamento?",
        answer:
          "o investimento é de R$ 5.400 por pessoa. o pagamento pode ser feito via pix ou cartão em até 3x sem juros, direto pelo link com o hotel (com comprovante e contrato).",
      },
      {
        question: "qual a política de cancelamento?",
        answer:
          "até 4 dias antes do check-in, devolução integral do valor investido em caso de desistência.",
      },
      {
        question: "a alimentação está inclusa?",
        answer:
          "sim! o pacote inclui pensão completa — café da manhã, almoço, jantar, sucos e sobremesas em todos os dias, inclusive na noite de acampamento na selva.",
      },
      {
        question: "essa viagem é só para mulheres?",
        answer:
          "não — essa é uma edição especial pensada para casais, com roteiro adaptado para viver a Amazônia a dois. as demais viagens da Julia Paraizo seguem exclusivas para mulheres.",
      },
      {
        question: "quem são os hosts?",
        answer:
          "a Marcella e o Salo acompanham o grupo do começo ao fim. eles têm 24 anos, são de Porto Alegre e vivem viajando juntos — já rodaram o Brasil de motorhome e passaram quase um mês no Panamá fazendo parcerias com hotéis. a Marcella também é fotógrafa, então o casal vai sair de lá com registros incríveis.",
      },
    ],
  },
  {
    slug: "cote-dazur-nice",
    hidden: true,
    title: "Côte d'Azur Girls Trip",
    destination: "Nice, Côte d'Azur — França",
    cardImage: "/images/trips/cote-dazur-nice/hero/hero-2.jpg",
    heroImage: "/images/trips/cote-dazur-nice/hero/hero-2.jpg",
    heroImages: [
      "/images/trips/cote-dazur-nice/hero/hero-2.jpg",
      "/images/trips/cote-dazur-nice/hero/hero-1.jpg",
      "/images/trips/cote-dazur-nice/hero/hero-3.jpg",
      "/images/trips/cote-dazur-nice/hero/hero-4.jpg",
      "/images/trips/cote-dazur-nice/hero/hero-5.jpg",
    ],
    dates: "25 a 31 de julho de 2027",
    dateForSort: "2027-07-25",
    dateForSortEnd: "2027-07-31",
    duration: "7 dias · 6 noites",
    priceDisplay: "€ 1.600",
    priceValue: 9600,
    national: false,
    priceInstallments:
      "sinal de € 500 não reembolsável para garantir a vaga — saldo de € 1.100 até 60 dias antes da viagem",
    agency: "@juliaparaizo.travel",
    urgentBadge: "6 vagas",
    tagline:
      "riviera francesa com base fixa em Nice — Monaco, Cannes, Èze e Saint-Tropez de barco, em 7 dias",
    description:
      "sete dias na riviera francesa com base fixa em Nice, num grupo fechado de 7 — 6 vagas + eu como host. a gente desfaz a mala uma vez só: nada de trocar de hotel, arrastar mala em estação de trem ou alugar carro. todo dia é um destino diferente (Monaco, Cannes, Èze, Villefranche, Saint-Tropez de barco) e toda noite a gente volta pra mesma casa em Nice. eu cuido de tudo — hospedagem, transporte, reservas, roteiro — e registro tudo em foto e vídeo pra você levar de recordação.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre a Côte d'Azur Girls Trip (25 a 31 de julho de 2027) e quero garantir minha vaga :)",
    paymentMethods: ["cartão de crédito", "Wise/Nomad"],
    included: [
      "6 noites em apartamento inteiro no centro de Nice (quartos compartilhados)",
      "café da manhã todos os dias",
      "pass de transporte regional de 7 dias (trem e ônibus ilimitados na riviera)",
      "tram aeroporto ↔ centro, ida e volta",
      "barco ida e volta Nice ↔ Saint-Tropez",
      "ferry pras Ilhas de Lérins",
      "entrada do Jardim Exótico de Èze",
      "entrada do Cassino de Monte-Carlo",
      "3 jantares em grupo (terça, sexta e sábado)",
      "taxa de turismo da cidade",
      "todas as reservas feitas com antecedência",
      "cobertura de foto e vídeo da viagem",
    ],
    notIncluded: [
      "passagem aérea internacional",
      "seguro viagem (obrigatório — comprovante exigido antes do saldo)",
      "almoços (~€ 12 a € 30 por dia)",
      "os 3 jantares livres (domingo, segunda e quinta)",
      "bebidas, cafés e apéros",
      "despesas pessoais, compras e gorjetas",
      "estimativa de gasto pessoal na semana: ~€ 450 por pessoa",
    ],
    itinerary: [
      {
        day: 1,
        title: "domingo, 25/jul — chegada em Nice",
        description:
          "tram direto do aeroporto até o centro. check-in no apê, primeira volta pelo Vieux Nice e pôr do sol na Colline du Château. jantar de boas-vindas no L'Écurie (por conta). dia zero de locomoção.",
      },
      {
        day: 2,
        title: "segunda, 26/jul — Villefranche-sur-Mer",
        description:
          "sete minutos de trem. praia, porto colorido e almoço de frente pro mar no Alma Goût Méditerranée (por conta). tarde livre. à noite, apéro e tábua de frios no apê — a gente cozinha junto.",
      },
      {
        day: 3,
        title: "terça, 27/jul — Nice inteira a pé",
        description:
          "mercado de flores do Cours Saleya de manhã, Promenade des Anglais, praia e Port Lympia no fim da tarde. jantar em grupo no Chez Acchiardo (incluso) — restaurante de família desde 1927, o clássico niçoise.",
      },
      {
        day: 4,
        title: "quarta, 28/jul — Monaco",
        description:
          "trem de vinte minutos. Monte-Carlo, Jardim Exótico (incluso), Port Hercule e o Casino de Monte-Carlo no fim da tarde (entrada inclusa). almoço de massa fresca no mercado da Condamine.",
      },
      {
        day: 5,
        title: "quinta, 29/jul — Èze Village",
        description:
          "o único destino sem trem: ônibus de montanha até a vila medieval pendurada a 427m do mar. Jardim Exótico com a melhor vista da riviera, almoço no terraço. tarde livre em Nice pra praia, compras ou spa. jantar em grupo opcional no Lu Fran Calin.",
      },
      {
        day: 6,
        title: "sexta, 30/jul — Cannes + Ilhas de Lérins",
        description:
          "trem de trinta minutos. La Croisette, mercado Forville, o casco antigo do Le Suquet e ferry pra Île Sainte-Marguerite (incluso) — a praia de verdade do roteiro. jantar em grupo no Le Rendez-Vous des Copains (incluso).",
      },
      {
        day: 7,
        title: "sábado, 31/jul — Saint-Tropez de barco",
        description:
          "barco saindo do porto de Nice às 9h, duas horas e meia costeando a riviera (incluso). dia inteiro em Saint-Tropez: mercado da Place des Lices, porto, praia. volta às 19h. jantar de despedida na La Maison de Marie (incluso).",
      },
    ],
    accommodation:
      "apartamento inteiro de 4 quartos no centro de Nice, entre o Vieux Nice e a estação — a pé de tudo e a 5 minutos do trem que liga a riviera inteira. quartos femininos compartilhados, cozinha equipada pros cafés da manhã e sala pros apéros do grupo. você desfaz a mala uma vez e pronto.",
    forWhom: [
      {
        title: "meninas que querem riviera sem stress",
        description:
          "pra quem quer a Côte d'Azur de verdade — vila medieval, Monte-Carlo, mercado francês, praia — sem dirigir na montanha, sem procurar estacionamento e sem refazer a mala cinco vezes. tudo em trem e a pé, num ritmo que alterna dia cheio e dia de respirar.",
      },
    ],
    faqs: [
      {
        question: "preciso falar francês ou inglês?",
        answer: "não, eu cuido de toda a comunicação, reservas e compra de bilhete.",
      },
      {
        question: "quanto de dinheiro eu preciso levar por fora?",
        answer:
          "em torno de € 450 pra almoços, os 3 jantares livres e bebidas. dá pra gastar menos comendo em mercado e praia.",
      },
      {
        question: "vamos precisar de carro?",
        answer:
          "não. o roteiro inteiro é de trem, ônibus, barco e a pé — por isso a base é fixa em Nice.",
      },
      {
        question: "e se eu não quiser ir em algum passeio?",
        answer:
          "sem problema, a base é a mesma todo dia. você pode ficar na praia enquanto o grupo vai pra Monaco.",
      },
      {
        question: "como funciona o pagamento?",
        answer:
          "sinal de € 500 na inscrição (não reembolsável) e € 1.100 até 60 dias antes da viagem (26 de maio de 2027).",
      },
      {
        question: "e se eu desistir?",
        answer:
          "o sinal não é devolvido. o saldo é devolvido apenas se a vaga for revendida.",
      },
      {
        question: "e se a viagem não fechar o número mínimo?",
        answer:
          "se não fecharmos 4 meninas até 60 dias antes da viagem (26 de maio de 2027), eu cancelo e devolvo 100% do que foi pago, sinal incluso.",
      },
      {
        question: "a viagem é segura pra quem vai sozinha?",
        answer:
          "sim, grupo fechado de mulheres, casa única e eu junto os 7 dias.",
      },
    ],
  },
  {
    slug: "surfcamp-ubatuba-praiah",
    title: "Ubatuba Surfcamp × Praiah Surf",
    destination: "Ubatuba, São Paulo",
    cardImage: "/images/trips/surfcamp-ubatuba/hero/hero-1.jpg",
    heroImage: "/images/trips/surfcamp-ubatuba/hero/hero-1.jpg",
    heroImages: [
      "/images/trips/surfcamp-ubatuba/hero/hero-1.jpg",
      "/images/trips/surfcamp-ubatuba/hero/hero-2.jpg",
      "/images/trips/surfcamp-ubatuba/hero/hero-3.jpg",
      "/images/trips/surfcamp-ubatuba/hero/hero-4.jpg",
      "/images/trips/surfcamp-ubatuba/hero/hero-5.jpg",
      "/images/trips/surfcamp-ubatuba/hero/hero-6.jpg",
    ],
    dates: "22 a 24 de janeiro de 2027",
    dateForSort: "2027-01-22",
    dateForSortEnd: "2027-01-24",
    duration: "3 dias · 2 noites",
    priceDisplay: "R$ 2.500",
    priceValue: 2500,
    national: true,
    priceInstallments:
      "R$ 2.500 no pix ou R$ 2.800 no cartão — parcelado em até 4x de R$ 700",
    agency: "Praiah Surf",
    tagline:
      "3 dias de surf em Ubatuba, com yoga, recovery e análise de imagem, em parceria com a Praiah Surf",
    description:
      "3 dias em Ubatuba, em colaboração com a Praiah Surf e a Mariana Scherer. hospedagem numa pousada na região mais nobre da cidade, perto dos melhores restaurantes e da Rua Guarani. aulas de surf voltadas pra todos os níveis — de quem nunca surfou a quem já surfa e quer evoluir — com sessão de yoga, recovery e análise de imagem de todas as sessões, pra você corrigir os movimentos e ver sua evolução. jantar de confraternização na primeira noite, muito surf e as fotos e vídeos da trip pra levar de recordação.",
    whatsappMessage:
      "Oi Julia! Acabei de ler o material sobre o Surfcamp Ubatuba (22 a 24 de janeiro de 2027) e quero garantir minha vaga :)",
    paymentMethods: ["Pix", "cartão de crédito"],
    included: [
      "2 noites de hospedagem em pousada em Ubatuba, na região mais nobre da cidade",
      "café da manhã incluso",
      "jantar de confraternização na primeira noite",
      "aulas de surf com equipamentos inclusos (prancha, leash e lycra)",
      "sessão de yoga",
      "sessão de recovery",
      "análise de imagem de todas as sessões de surf",
      "fotos e vídeos da trip",
    ],
    notIncluded: [
      "transporte até Ubatuba",
      "refeições fora as citadas (almoços, outros jantares, bebidas)",
      "despesas pessoais e gorjetas",
      "seguro viagem",
    ],
    itinerary: [
      {
        day: 1,
        title: "sexta, 22/jan — chegada + confraternização",
        description:
          "check-in na pousada ao longo do dia. às 20h, jantar de apresentação e confraternização num dos melhores restaurantes de Ubatuba — um jeito gostoso de todo mundo se conhecer antes do surf começar.",
      },
      {
        day: 2,
        title: "sábado, 23/jan — yoga + surf + recovery",
        description:
          "6h: sessão de yoga de 1 hora. café da manhã na pousada às 7h30. aula de surf das 8h30 às 10h e das 10h30 às 11h30, com 30 minutos de descanso e hidratação entre elas. à tarde, análise de imagem das sessões e recovery (horário a definir).",
      },
      {
        day: 3,
        title: "domingo, 24/jan — surf + volta",
        description:
          "café da manhã na pousada às 7h30. aula de surf (praia a definir) das 8h30 às 10h e das 10h30 às 11h30, com 30 minutos de descanso e hidratação entre elas. fim das atividades do surfcamp.",
      },
    ],
    accommodation:
      "pousada na região mais nobre de Ubatuba, perto dos melhores restaurantes e da Rua Guarani, o point mais badalado da cidade. quartos com toda estrutura e conforto, com café da manhã incluso.",
    forWhom: [
      {
        title: "quem nunca surfou",
        description:
          "nossos professores são preparados pra ensinar desde os primeiros passos, sempre respeitando o tempo de cada uma.",
      },
      {
        title: "surfistas que buscam independência",
        description:
          "praias escolhidas com prioridade pra qualidade das ondas e segurança, num ritmo pensado pra você ganhar confiança sozinha na água.",
      },
      {
        title: "surfistas intermediárias que querem evoluir",
        description:
          "análise de imagem de todas as sessões, pra corrigir e ensinar os movimentos certos e você ver sua evolução de perto.",
      },
    ],
    faqs: [
      {
        question: "gostaria de aprender mas nunca tive nenhum contato com o surf. ainda posso participar?",
        answer:
          "claro! nosso surfcamp é perfeito pra iniciantes e quem quer aprender do zero. nossos professores são preparados pra ensinar a prática desde os primeiros passos, sempre respeitando o tempo de cada uma.",
      },
      {
        question: "não tenho prancha. vocês oferecem todos os equipamentos?",
        answer:
          "sim, a gente oferece todos os equipamentos necessários pra prática do surf, como pranchas, leash e lycras. temos pranchas pra todos os níveis.",
      },
      {
        question: "e se eu tiver minha própria prancha? posso levá-la?",
        answer:
          "pode sim. se você tiver seus próprios equipamentos é ainda melhor pra você evoluir na sua própria prancha. mas caso não dê certo, ainda temos nossas pranchas pra ajustar com seu nível.",
      },
      {
        question: "gostaria de ir com minhas amigas! vocês têm desconto pra grupos?",
        answer:
          "temos sim. o desconto varia de acordo com a quantidade de pessoas — é só entrar em contato com a gente pra mais informações.",
      },
      {
        question: "gostaria de levar meu parceiro(a), mas ele(a) não tem interesse nas atividades do surfcamp. posso levar um acompanhante?",
        answer:
          "pode sim. o valor pra acompanhantes fica R$ 500, com hospedagem (no mesmo quarto) e jantar de confraternização inclusos.",
      },
      {
        question: "o que acontece se a previsão do tempo (ou de onda) estiver muito ruim?",
        answer:
          "se a previsão estiver muito ruim, a gente remarca o surfcamp pra uma data em que todo mundo possa participar. caso não entremos num acordo, o valor integral é devolvido pra quem não estiver disponível na nova data.",
      },
      {
        question: "a Julia estará presente nessa viagem?",
        answer:
          "essa edição é em parceria com a Praiah Surf: a Mariana Scherer acompanha o grupo do início ao fim, junto com os professores da escola. eu cuido de toda a organização e comunicação, e estou sempre disponível pra qualquer dúvida que surgir, antes ou durante a viagem 💛",
      },
      {
        question: "a viagem é só para mulheres?",
        answer:
          "sim, todas as experiências da Julia Paraizo são exclusivas para mulheres.",
      },
    ],
  },
];

export const tripsSorted = trips
  .filter((t) => !t.hidden)
  .sort((a, b) => a.dateForSort.localeCompare(b.dateForSort));
