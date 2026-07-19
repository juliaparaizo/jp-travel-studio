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
};

export const whatsappNumber = "16022065421";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const trips: Trip[] = [
  {
    slug: "lencois-maranhenses",
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
    urgentBadge: "5 vagas restantes",
    whatsappMessage:
      "Oi Julia! Quero saber mais sobre a viagem aos Lençóis Maranhenses (4 a 7 de setembro de 2026) :)",
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
    whatsappMessage:
      "Oi Julia! Quero saber mais sobre a expedição ao Jalapão (9 a 12 de outubro de 2026) :)",
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
          "sim, todas as experiências da Giovana Gentil são exclusivas para mulheres.",
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
    whatsappMessage:
      "Oi Julia! Quero saber mais sobre a Lapland Girls Trip (13 a 19 de dezembro de 2026) :)",
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
    duration: "4 dias · 3 noites",
    priceDisplay: "R$ 2.990",
    priceValue: 2990,
    national: true,
    priceInstallments:
      "sinal de R$ 200 via Pix para reservar — entrada de R$ 1.450 até 10/09 e restante de R$ 1.340 até 07/12",
    agency: "Green House Saqua",
    urgentBadge: "15 vagas",
    tagline:
      "4 dias de surf, canoa havaiana, yoga e sol em saquarema, só entre meninas",
    description:
      "quatro dias na capital brasileira do surf, num grupo fechado de no máximo 15 meninas. você chega, a gente cuida de tudo: aulas de surf, canoa havaiana, yoga na praia, passeios de buggy, noites temáticas e muito tempo pra relaxar e fazer amizades novas. é só chegar no rio no ponto de encontro — do resto cuidamos nós. ideal pra quem tá pegando a primeira onda ou já surfa em qualquer nível: teremos guias pra te acompanhar e vídeo análises pra você ver sua evolução.",
    whatsappMessage:
      "Oi Julia! Quero saber mais sobre o Surfcamp Saquarema (7 a 10 de janeiro de 2027) :)",
    paymentMethods: ["Pix"],
    included: [
      "3 noites de hospedagem (quarto compartilhado)",
      "transfer Rio ↔ Saquarema (ida e volta)",
      "aulas de surf",
      "canoa havaiana",
      "sessão de yoga",
      "stand-up paddle (pôr do sol/nascer do sol)",
      "passeios de buggy",
      "vídeos de drone",
      "almoço premium",
      "Noite do Hambúrguer (jantar de quinta)",
      "Noite do Sushi (jantar de sábado)",
      "recepção de boas-vindas",
    ],
    notIncluded: [
      "transporte até o ponto de encontro no Rio",
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
          "saída do Rio por volta das 12h, em transfer exclusivo do grupo. chegada no fim da tarde e recepção de boas-vindas da galera. check-in na hospedagem e Noite do Hambúrguer — nosso jantar de abertura.",
      },
      {
        day: 2,
        title: "sexta, 8/jan — água & aventura: canoa havaiana + surf + buggy",
        description:
          "manhã de canoa havaiana no mar, seguida de aula de surf com instrutores. passeio de buggy pela orla e lagoa à tarde, com vídeos de drone pra guardar de recordação. jantar livre (por conta) — aproveita pra conhecer os restaurantes de Saquarema.",
      },
      {
        day: 3,
        title: "sábado, 9/jan — equilíbrio: surf + yoga + sushi",
        description:
          "mais uma sessão de surf pela manhã, seguida de sessão de yoga pra alongar e relaxar. passeio de buggy à tarde e Noite do Sushi — jantar especial do grupo.",
      },
      {
        day: 4,
        title: "domingo, 10/jan — livre & volta: stand-up no pôr do sol",
        description:
          "manhã ou dia livre pra conhecer a cidade no seu ritmo. stand-up paddle no pôr do sol (ou nascer do sol), com aulas extras opcionais pra quem quiser mais mar. transfer de volta ao Rio depois do pôr do sol (~16h).",
      },
    ],
    accommodation:
      "3 noites em quarto compartilhado, em parceria com a Green House Saqua — pousada e escola de surf local que cuida de toda a estrutura da viagem em Saquarema.",
    forWhom: [
      {
        title: "meninas de todos os níveis",
        description:
          "de quem nunca pegou uma onda até quem já surfa e quer evoluir — temos guias acompanhando de perto e vídeo análises pra você corrigir os detalhes e ver sua evolução.",
      },
    ],
    faqs: [
      {
        question: "preciso saber surfar pra participar?",
        answer:
          "não! o camp é pra meninas de todos os níveis, iniciante ou não — temos guias pra te acompanhar de perto e vídeo análises pra você corrigir os detalhes e ver sua evolução.",
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
          "forma de pagamento: Pix, não aceito cartão de crédito.\n\nvalor por pessoa: R$ 2.990, dividido em 3 etapas:\n\n1) sinal — R$ 200 → pra garantir sua vaga (vagas limitadas, confirmo por ordem de pagamento)\n2) entrada — R$ 1.450 → até 10/09\n\nessas duas são fixas.\n\n3) restante — R$ 1.340 → é só quitar até 07/12\n\nessa última parte fica do seu jeito: se quiser pagar tudo de uma vez, pode. se preferir ir quebrando em pedacinhos ao longo de out/nov, também pode. o que importa é estar quitado até 07/12.\n\nchave Pix: (79) 98858-8863. manda o comprovante aqui que eu vou marcando.\n\no sinal e a entrada não são reembolsáveis.",
      },
    ],
    pending: false,
    isPlaceholderImage: false,
  },
  {
    slug: "surfcamp-ubatuba",
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
    duration: "5 dias · 4 noites",
    priceDisplay: "R$ 3.500",
    priceValue: 3500,
    national: true,
    priceInstallments: "",
    agency: "",
    tagline: "4 dias de surf, natureza e boas energias entre mulheres",
    description:
      "um refúgio pra você desacelerar, se conectar com o mar e viver dias de surf de verdade — do nascer do sol ao pôr do sol — em uma das praias mais lindas do litoral norte de São Paulo. se você sempre quis aprender a surfar (ou aprofundar o que já sabe) em um ambiente acolhedor, só entre meninas, com estrutura completa e sem se preocupar com nada, esse camp é pra você.",
    urgentBadge: "15 vagas",
    whatsappMessage:
      "Oi Julia! Quero saber mais sobre o Surfcamp Ubatuba (14 a 18 de janeiro de 2027) :)",
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
    duration: "5 dias · 4 noites",
    priceDisplay: "R$ 4.500",
    priceValue: 4500,
    national: true,
    priceInstallments: "",
    agency: "Amazônia Jungle Hotel",
    urgentBadge: "esgotado",
    tagline:
      "encontro das águas, botos cor-de-rosa e uma noite inteira dormindo na selva",
    description:
      "5 dias e 4 noites no Amazônia Jungle Hotel, às margens do Rio Negro. pacote uirapuru: focagem de jacarés, caminhada na selva, nado com botos cor-de-rosa, visita a comunidades indígenas e ribeirinhas, e uma noite de pernoite acampada na floresta com redes suspensas e fogueira. o pulmão do mundo, ao vivo.",
    whatsappMessage:
      "Oi Julia! Quero saber mais sobre a viagem à Amazônia (19 a 23 de março de 2027) :)",
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
          'roupas leves e de manga comprida, calça (para a caminhada na selva), sapato fechado, protetor solar, repelente (também vendido no hotel) e uma câmera — porque "da floresta, não levamos nada além de fotografias e lembranças; na floresta, não deixamos nada além de pegadas."',
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
    duration: "5 dias · 4 noites",
    priceDisplay: "R$ 4.500",
    priceValue: 4500,
    national: true,
    priceInstallments: "",
    agency: "Amazônia Jungle Hotel",
    urgentBadge: "3 vagas restantes",
    tagline:
      "encontro das águas, botos cor-de-rosa e uma noite inteira dormindo na selva",
    description:
      "5 dias e 4 noites no Amazônia Jungle Hotel, às margens do Rio Negro. pacote uirapuru: focagem de jacarés, caminhada na selva, nado com botos cor-de-rosa, visita a comunidades indígenas e ribeirinhas, e uma noite de pernoite acampada na floresta com redes suspensas e fogueira. o pulmão do mundo, ao vivo.",
    whatsappMessage:
      "Oi Julia! Quero saber mais sobre a viagem à Amazônia (24 a 28 de março de 2027) :)",
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
          'roupas leves e de manga comprida, calça (para a caminhada na selva), sapato fechado, protetor solar, repelente (também vendido no hotel) e uma câmera — porque "da floresta, não levamos nada além de fotografias e lembranças; na floresta, não deixamos nada além de pegadas."',
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
    slug: "nicaragua",
    title: "Retiro na Nicarágua — Villa Laguna",
    destination: "Laguna de Apoyo, Nicarágua",
    cardImage: "/images/trips/nicaragua/nicaragua-card.jpg",
    heroImage: "/images/trips/nicaragua/nicaragua-hero.jpg",
    dates: "8 a 13 de março de 2027",
    dateForSort: "2027-03-08",
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
      "Oi Julia! Quero saber mais sobre a viagem à Nicarágua (8 a 13 de março de 2027) :)",
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
];

export const tripsSorted = [...trips].sort((a, b) =>
  a.dateForSort.localeCompare(b.dateForSort),
);
