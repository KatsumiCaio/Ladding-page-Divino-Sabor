import { Review, SectionCopy, FramerColorSpec } from '../types';

export const CLIENT_DATA = {
  name: "Divino Sabor - Doceria & Cafeteria",
  slogan: "Coisas doces acontecem por aqui",
  location: "R. Nove de Julho, 400 - Centro, Capão Bonito - SP",
  rating: "5.0",
  reviewsCount: "Mais de 60 avaliações de clientes apaixonados",
  hours: "Segunda a Sábado, das 08:30 às 19:00",
  whatsapp: "(15) 99787-7048",
  whatsappRaw: "5515997877048",
  cardapioUrl: "https://divinosabor.compraqui.app",
  instagramHandle: "@divino.sabor_cb",
  instagramUrl: "https://www.instagram.com/divino.sabor_cb",
  mapsUrl: "https://maps.google.com/?q=R.+Nove+de+Julho,+400+-+Centro,+Cap%C3%A3o+Bonito+-+SP",
};

export const FRAMER_COLOR_PALETTE: FramerColorSpec[] = [
  { name: "Creme Natural (Background Principal)", hex: "#FAF7F2", usage: "Fundo principal da página", tailwindClass: "bg-[#FAF7F2]" },
  { name: "Terracota Quente (Accent Primário)", hex: "#8C5E44", usage: "Botões de destaque, ícones, distintivos e CTAs", tailwindClass: "bg-[#8C5E44]" },
  { name: "Areia Aconchegante (Containers & Cards)", hex: "#F0E6D8", usage: "Cards secundários, tags e fundos de ícones", tailwindClass: "bg-[#F0E6D8]" },
  { name: "Café Cacau (Títulos & Destaques)", hex: "#4A3728", usage: "Títulos principais, cabeçalhos e footer", tailwindClass: "text-[#4A3728]" },
  { name: "Castanho Suave (Texto Muted)", hex: "#6B5E55", usage: "Parágrafos, descrições, subtítulos e legendas", tailwindClass: "text-[#6B5E55]" },
  { name: "Areia Clara (Bordas & Linhas)", hex: "#D9C5B2", usage: "Bordas de cards, divisores e linhas decorativas", tailwindClass: "border-[#D9C5B2]" },
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "1",
    name: "Fabiana P.",
    role: "Cliente Local",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "Há 1 mês",
    highlight: "Ambiente impecável e preço camarada",
    comment: "O ambiente é simplesmente lindo, quentinho e aconchegante! Atendimento nota 10, preço super justo e camarada. Os salgados assados e as sobremesas são divinos!",
  },
  {
    id: "2",
    name: "Priscila C.",
    role: "Turista em Capão Bonito",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "Há 2 semanas",
    highlight: "Atendimento ultra rápido e carinhoso",
    comment: "Fui a passeio por Capão Bonito e me surpreendi demais. Atendimento super rápido, muito carinho da equipe e um sabor surpreendente no café cremoso e nos doces artesanais.",
  },
  {
    id: "3",
    name: "Eduardo C.",
    role: "Cliente Frequente",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "Há 3 semanas",
    highlight: "O melhor ponto de encontro da cidade",
    comment: "O lugar perfeito no Centro de Capão Bonito para reunir amigos e a família. Os salgados assados são incomparáveis e os milk-shakes bem recheados são fantásticos!",
  },
];

export const LANDING_PAGE_COPY_SECTIONS: SectionCopy[] = [
  {
    id: "hero",
    sectionNumber: 1,
    title: "1. HERO SECTION (Cabeçalho de Impacto)",
    framerFormattedText: `[BADGE]
⭐⭐⭐⭐⭐ 5.0 no Google • Capão Bonito - SP

[HEADLINE]
O seu dia merece um toque divino de sabor e aconchego.

[SUBHEADLINE]
Sinta o aroma do café quentinho, os bolos artesanais mais fofinhos e salgados assados que derretem na boca. Localizada no Centro de Capão Bonito, a Divino Sabor é o seu refúgio para momentos inesquecíveis.

[BOTÃO CTA PRINCIPAL]
Ver Cardápio Digital

[BOTÃO CTA SECUNDÁRIO]
Falar no WhatsApp / Fazer Pedido

[SUGESTÃO VISUAL FRAMER]
Foto de um café cremoso servido ao lado de uma fatia de bolo de chocolate artesanal com flores delicadas no fundo.`,
    fields: [
      { label: "Badge Superior", text: "⭐⭐⭐⭐⭐ 5.0 no Google • Capão Bonito - SP" },
      { label: "Headline Principal", text: "O seu dia merece um toque divino de sabor e aconchego." },
      { label: "Subheadline", text: "Sinta o aroma do café quentinho, os bolos artesanais mais fofinhos e salgados assados que derretem na boca. Localizada no Centro de Capão Bonito, a Divino Sabor é o seu refúgio para momentos inesquecíveis." },
      { label: "Texto Botão CTA 1", text: "Ver Cardápio Digital" },
      { label: "Texto Botão CTA 2", text: "Falar no WhatsApp / Fazer Pedido" },
      { label: "Sugestão Visual", text: "Imagem em alta resolução combinando café cremoso com arte na espuma, fatia de bolo artesanal com cobertura aveludada e toque delicado rosa e dourado." }
    ]
  },
  {
    id: "social_proof",
    sectionNumber: 2,
    title: "2. PROVA SOCIAL (Destaque Google ⭐⭐⭐⭐⭐)",
    framerFormattedText: `[BADGE DE AVALIAÇÃO GOOGLE]
⭐⭐⭐⭐⭐ 5.0 estrelas no Google (Mais de 60 avaliações de clientes apaixonados)

[TÍTULO DA SEÇÃO]
Quem experimenta, se apaixona. Veja o que nossos clientes dizem!

[CARD 1 - FABIANA P.]
"O ambiente é simplesmente lindo e aconchegante! Atendimento nota 10, preço super justo e camarada. Os doces e salgados são impecáveis!"
— Fabiana P. (Cliente Local) ⭐⭐⭐⭐⭐

[CARD 2 - PRISCILA C.]
"Fui como turista a Capão Bonito e me surpreendi demais. Atendimento ultra rápido, muito carinho da equipe e um sabor surpreendente no café e nos doces."
— Priscila C. (Turista) ⭐⭐⭐⭐⭐

[CARD 3 - EDUARDO C.]
"O lugar perfeito no centro de Capão Bonito para reunir amigos e família. Salgados assados divinos e sobremesas fantásticas!"
— Eduardo C. (Cliente Frequente) ⭐⭐⭐⭐⭐`,
    fields: [
      { label: "Badge Google", text: "⭐⭐⭐⭐⭐ 5.0 estrelas no Google (Mais de 60 avaliações de clientes apaixonados)" },
      { label: "Título da Seção", text: "Quem experimenta, se apaixona. Veja o que nossos clientes dizem!" },
      { label: "Depoimento 1 (Fabiana P.)", text: "\"O ambiente é simplesmente lindo e aconchegante! Atendimento nota 10, preço super justo e camarada. Os doces e salgados são impecáveis!\"" },
      { label: "Depoimento 2 (Priscila C.)", text: "\"Fui como turista a Capão Bonito e me surpreendi demais. Atendimento ultra rápido, muito carinho da equipe e um sabor surpreendente no café e nos doces.\"" },
      { label: "Depoimento 3 (Eduardo C.)", text: "\"O lugar perfeito no centro de Capão Bonito para reunir amigos e família. Salgados assados divinos e sobremesas fantásticas!\"" }
    ]
  },
  {
    id: "menu_highlights",
    sectionNumber: 3,
    title: "3. O QUE VOCÊ VAI ENCONTRAR (Destaques do Cardápio)",
    framerFormattedText: `[TÍTULO DA SEÇÃO]
Feito com amor, ingrediente por ingrediente.

[SUBTÍTULO DA SEÇÃO]
Descubra o cardápio que conquistou Capão Bonito. Das receitas caseiras às criações mais refinadas.

[CATEGORIA 1 - DOCES & SOBREMESAS]
🍰 Doces & Sobremesas
De bolos fofinhos para o café da tarde até sobremesas elaboradas que encantam os olhos e o paladar.
Destaques: Bolo Vulcão Ninho com Nutella, Torta Holandesa Artesanal e Taça Divina.

[CATEGORIA 2 - SALGADOS ASSADOS]
🥐 Salgados Assados
Opções quentinhas, leves e extremamente saborosas. Assadas na hora com recheios generosos e massa leve.
Destaques: Empadões Caseiros, Esfihas Especiais e Folhados Ouro.

[CATEGORIA 3 - CAFÉS & BEBIDAS]
☕ Cafés & Bebidas
Cafés especiais moídos na hora, milk-shakes super recheados, cappuccinos cremosos e refrescos gelados.
Destaques: Cappuccino Divino Sabor, Milk-Shake de Doce de Leite com Churros e Chás Gelados.

[CHAMADA PARA AÇÃO ABAIXO DO GRID]
Deseja explorar todos os preços e sabores?
[BOTÃO]: Acessar Cardápio Digital Completo`,
    fields: [
      { label: "Título Seção Cardápio", text: "Feito com amor, ingrediente por ingrediente." },
      { label: "Subtítulo Seção", text: "Descubra o cardápio que conquistou Capão Bonito. Das receitas caseiras às criações mais refinadas." },
      { label: "Categoria Doces", text: "🍰 Doces & Sobremesas: De bolos fofinhos para o café da tarde até sobremesas elaboradas que encantam os olhos e o paladar." },
      { label: "Categoria Salgados", text: "🥐 Salgados Assados: Opções quentinhas, leves e extremamente saborosas. Assadas na hora com recheios generosos." },
      { label: "Categoria Cafés", text: "☕ Cafés & Bebidas: Cafés especiais, milk-shakes super recheados, cappuccinos cremosos e refrescos gelados." },
      { label: "CTA Final Cardápio", text: "Acessar Cardápio Digital Completo (divinosabor.compraqui.app)" }
    ]
  },
  {
    id: "differentiators",
    sectionNumber: 4,
    title: "4. DIFERENCIAIS (Por que nos visitar?)",
    framerFormattedText: `[TÍTULO DA SEÇÃO]
Por que a Divino Sabor é a sua melhor escolha?

[SUBTÍTULO]
Cada detalhe foi pensado para proporcionar a melhor experiência gastronômica e momentos inesquecíveis.

[DIFERENCIAL 1]
🏡 Ambiente Aconchegante
Espaço decorado com carinho, iluminação acolhedora e clima perfeito para pausar o dia, reunir a família ou fazer uma reunião de trabalho relaxante.

[DIFERENCIAL 2]
🚴 Atendimento no Local e Delivery sem Contato
Sinta a acolhida presencial de nossa equipe nota 10 ou peça no conforto da sua casa ou trabalho com entrega rápida e segura.

[DIFERENCIAL 3]
💵 Qualidade Premium com Preço Justo
Ingredientes selecionados de altíssima qualidade combinados com preços acessíveis para você saborear sem culpa todos os dias.`,
    fields: [
      { label: "Título Diferenciais", text: "Por que a Divino Sabor é a sua melhor escolha?" },
      { label: "Subtítulo", text: "Cada detalhe foi pensado para proporcionar a melhor experiência gastronômica e momentos inesquecíveis." },
      { label: "Diferencial 1", text: "🏡 Ambiente Aconchegante — Espaço decorado com carinho, iluminação acolhedora e clima perfeito para desacelerar o dia." },
      { label: "Diferencial 2", text: "🚴 Atendimento no Local e Delivery sem Contato — Desfrute no local com atendimento nota 10 ou peça direto no WhatsApp com entrega rápida." },
      { label: "Diferencial 3", text: "💵 Qualidade Premium com Preço Justo — Sobremesas refinadas e ingredientes selecionados que cabem no seu bolso." }
    ]
  },
  {
    id: "location_hours",
    sectionNumber: 5,
    title: "5. LOCALIZAÇÃO E HORÁRIOS (Informações Práticas)",
    framerFormattedText: `[TÍTULO DA SEÇÃO]
Venha tomar um café especial com a gente!

[SUBTÍTULO]
Estamos no coração de Capão Bonito, prontos para receber você de braços abertos.

[ENDEREÇO COMPLETO]
📍 R. Nove de Julho, 400 - Centro, Capão Bonito - SP

[HORÁRIO DE FUNCIONAMENTO]
⏰ Segunda a Sábado: das 08:30 às 19:00
(Domingos e Feriados: Consulte no WhatsApp)

[BOTÃO DE NAVEGAÇÃO]
Botão: Como Chegar (Google Maps)
Link direct: https://maps.google.com/?q=R.+Nove+de+Julho,+400+-+Centro,+Cap%C3%A3o+Bonito+-+SP

[CONTATO DIRETO]
📱 WhatsApp: (15) 99787-7048`,
    fields: [
      { label: "Título Localização", text: "Venha tomar um café especial com a gente!" },
      { label: "Endereço", text: "R. Nove de Julho, 400 - Centro, Capão Bonito - SP" },
      { label: "Horário", text: "Segunda a Sábado, das 08:30 às 19:00" },
      { label: "Botão Google Maps", text: "Como Chegar (Google Maps)" },
      { label: "Contato WhatsApp", text: "(15) 99787-7048" }
    ]
  },
  {
    id: "footer",
    sectionNumber: 6,
    title: "6. RODAPÉ (Footer Completo)",
    framerFormattedText: `[LOGO & SLOGAN]
Divino Sabor - Doceria & Cafeteria
"Coisas doces acontecem por aqui"

[LINKS RÁPIDOS]
• Cardápio Digital (divinosabor.compraqui.app)
• Fazer Pedido no WhatsApp (15 99787-7048)
• Siga no Instagram (@divino.sabor_cb)

[INFORMAÇÕES DE CONTATO & ENDEREÇO]
R. Nove de Julho, 400 - Centro, Capão Bonito - SP
Atendimento: Segunda a Sábado, das 08:30 às 19:00

[DIREITOS AUTORAIS]
© 2026 Divino Sabor Doceria & Cafeteria. Todos os direitos reservados.
Classificação ⭐⭐⭐⭐⭐ 5.0 no Google.`,
    fields: [
      { label: "Logo & Slogan", text: "Divino Sabor — Doceria & Cafeteria | \"Coisas doces acontecem por aqui\"" },
      { label: "Link Cardápio", text: "divinosabor.compraqui.app" },
      { label: "Link Instagram", text: "@divino.sabor_cb" },
      { label: "Link WhatsApp", text: "(15) 99787-7048" },
      { label: "Copyright", text: "© 2026 Divino Sabor Doceria & Cafeteria. Todos os direitos reservados." }
    ]
  }
];
