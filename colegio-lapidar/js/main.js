/* Colégio Lapidar — main.js */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- i18n ----------
  const translations = {
    pt: {
      nav_home: 'Início',
      nav_about: 'Sobre',
      nav_levels: 'Níveis',
      nav_prices: 'Preços',
      nav_rules: 'Regulamento',
      nav_products: 'Uniformes',
      nav_enroll: 'Matrículas',
      nav_contact: 'Contacto',
      announce: 'Matrículas 2026/2027 abertas — <em>Vagas limitadas</em>',
      announce_cta: 'Saber mais →',
      hero_label: 'Ano Lectivo 2026/2027',
      hero_title: 'Educar para Transformar',
      hero_lead: 'Colégio Lapidar — formação de qualidade, disciplina e valores. Da Iniciação à 9.ª Classe, com excelência e cuidado.',
      hero_cta1: 'Matricular Agora',
      hero_cta2: 'Ver Preços',
      about_label: 'Sobre Nós',
      about_title: 'Formar hoje, transformar o amanhã',
      about_p1: 'O Colégio Lapidar é uma instituição de ensino particular em Angola dedicada a oferecer uma educação de excelência, com foco na formação integral do aluno — académica, humana e cívica.',
      about_p2: 'Acreditamos que cada criança é um diamante a lapidar. Por isso, aliamos rigor pedagógico, valores sólidos e um ambiente acolhedor para preparar jovens capazes de transformar a sua comunidade e o país.',
      about_stat1: 'Níveis',
      about_stat2: 'Ano Lectivo',
      about_stat3: 'Valores',
      about_stat4: 'Excelência',
      levels_label: 'Ensino',
      levels_title: 'Níveis de Ensino',
      levels_lead: 'Acompanhamos o aluno desde os primeiros passos até ao final do 1.º ciclo do ensino secundário.',
      level1_title: 'Iniciação',
      level1_desc: 'Primeiros contactos com o saber, socialização e desenvolvimento da curiosidade.',
      level2_title: '1.ª à 3.ª Classe',
      level2_desc: 'Bases sólidas de leitura, escrita, cálculo e hábitos de estudo.',
      level3_title: '4.ª à 6.ª Classe',
      level3_desc: 'Consolidação de competências e preparação para o ensino secundário.',
      level4_title: '7.ª à 9.ª Classe',
      level4_desc: '1.º ciclo do secundário com rigor académico e orientação vocacional.',
      prices_label: 'Investimento',
      prices_title: 'Tabela de Preços 2026/2027',
      prices_lead: 'Matrículas e confirmações abertas. Valores em Kwanzas (Kz).',
      tax_mat: 'Matrícula',
      tax_conf: 'Confirmação',
      tax_apoio: 'Taxa de Apoio Pedagógico',
      prop_title: 'Propinas Mensais',
      prop_col1: 'Nível',
      prop_col2: 'Valor (Kz)',
      prop1: 'Iniciação à 3.ª Classe',
      prop2: '4.ª à 6.ª Classe',
      prop3: '7.ª à 9.ª Classe',
      extra_title: 'Actividades Extracurriculares',
      extra_note: 'Facultativas • 14h00–16h00 • Pagamento mensal',
      extra1: 'Ballet',
      extra2: 'Xadrez',
      extra3: 'Karaté',
      extra_month: '/ mês',
      extra_insc: 'Inscrição em actividades extracurriculares: 3.000,00 Kz (única).',
      fine_title: 'Multas por Atraso',
      fine_note: 'Calculadas sobre a propina. Após o dia 30, acresce 5% por semana (cumulativo) e pode implicar suspensão automática a partir do dia 1 do mês seguinte.',
      fine_col1: 'Nível',
      fine_col2: 'Propina',
      fine_col3: 'Total 10%',
      fine_col4: 'Total 20%',
      fine_col5: 'Total 40%',
      fine_scale: 'Escala: 10% (dias 11–16) · 20% (dias 17–22) · 40% (dias 23–30). Valores em Kz.',
      emo_title: 'Emolumentos e Taxas Administrativas',
      emo_col1: 'Serviço',
      emo_col2: 'Valor (Kz)',
      emo1: 'Declaração com/sem nota',
      emo2: 'Declaração urgente',
      emo3: 'Certificados',
      emo4: 'Justificativo de faltas',
      emo5: 'Recurso',
      emo6: 'Transferência',
      emo7: 'Provas em atraso',
      reg_label: 'Regulamento',
      reg_title: 'Condições de Pagamento',
      reg_lead: 'Regras essenciais do regulamento interno para o ano lectivo 2026/2027.',
      reg1_title: 'Pagamento obrigatório',
      reg1_desc: 'Matrícula, confirmação e taxa de apoio pedagógico são obrigatórios no acto. Anulações não conferem direito a reembolso. Nenhum aluno renova sem liquidar dívidas anteriores.',
      reg2_title: 'Prestações',
      reg2_desc: 'A anuidade divide-se em 10 prestações (Setembro–Junho). Classes de exame (6.ª e 9.ª) pagam 11 prestações (Setembro–Julho).',
      reg3_title: 'Desconto anuidade',
      reg3_desc: 'Pagamento da anuidade completa numa só prestação: desconto de 8%.',
      reg4_title: 'Descontos de irmãos',
      reg4_desc: 'No filho mais novo: 2 filhos → 5%; 3 filhos → 10%; 4 ou mais → 20%. O desconto perde-se se o pagamento não for feito na data prevista. Famílias com mais de um filho matriculado: +5% na mensalidade do 2.º filho e seguintes.',
      reg5_title: 'Prazo de pagamento',
      reg5_desc: 'Pagamentos obrigatoriamente entre o dia 1 e o dia 10 de cada mês. Fora deste prazo aplicam-se as multas por atraso.',
      reg6_title: 'Comprovativos',
      reg6_desc: 'Os comprovativos devem ser enviados no prazo máximo de 7 dias úteis após o pagamento. Atraso implica multa administrativa de 3% sobre o valor pago.',
      reg7_title: 'Formas de pagamento',
      reg7_desc: 'Transferência bancária, TPA e pagamento por referência. É proibido o pagamento em numerário.',
      reg8_title: 'Atrasos e suspensão',
      reg8_desc: 'Dois ou mais meses em atraso podem implicar suspensão do aluno e recusa de renovação no ano seguinte (com possível notificação à ANEP). A Direcção pode suspender serviços, incluindo extracurriculares.',
      reg9_title: 'Desistência',
      reg9_desc: 'A desistência durante o ano não dá direito a reembolso das prestações já liquidadas. A mensalidade do mês em que ocorrer a saída continua obrigatória.',
      reg10_title: 'Casos especiais',
      reg10_desc: 'Em caso de encerramento por determinação legal, calamidade ou força maior, as propinas mantêm-se devidas se o ensino à distância estiver garantido. A Direcção reserva-se o direito de alterar normas em benefício da comunidade escolar.',
      products_label: 'Loja Escolar',
      products_title: 'Uniformes Escolares',
      products_lead: 'Uniformes oficiais do Colégio Lapidar. Escolha o tamanho e adicione ao carrinho.',
      prod1_title: 'Polo Oficial',
      prod1_desc: 'Camisa polo branca com gola e punhos castanhos. Logótipo bordado no peito. Algodão de qualidade.',
      prod2_title: 'Saia Oficial',
      prod2_desc: 'Saia castanha institucional, corte A-line até ao joelho. Confortável e elegante.',
      prod3_title: 'Calça Oficial',
      prod3_desc: 'Calça castanha institucional, corte clássico recto. Tecido resistente e confortável.',
      prod_sizes: 'Tamanhos: S · M · L',
      prod_cta: 'Encomendar via WhatsApp',
      prod_add: 'Adicionar ao carrinho',
      qty_label: 'Qtd',
      nav_checkout: 'Carrinho',
      checkout_label: 'Carrinho',
      checkout_title: 'Finalizar Encomenda',
      checkout_lead: 'Revise os artigos e envie a encomenda por WhatsApp. Confirmaremos disponibilidade e pagamento.',
      checkout_items: 'Artigos',
      checkout_details: 'Dados da encomenda',
      cart_empty: 'O seu carrinho está vazio. Adicione uniformes na loja.',
      cart_total: 'Total',
      cart_clear: 'Limpar carrinho',
      cart_remove: 'Remover',
      cart_size: 'Tamanho',
      co_student: 'Nome do aluno (opcional)',
      co_notes: 'Observações',
      co_notes_ph: 'Ex.: tamanho especial, levantamento na secretaria...',
      checkout_submit: 'Enviar encomenda via WhatsApp',
      checkout_note: 'A encomenda será enviada por WhatsApp. Não há pagamento online — confirme com a secretaria.',
      checkout_back: '← Continuar a comprar',
      checkout_shop: 'Ver uniformes',
      cart_drawer_title: 'O seu carrinho',
      cart_checkout: 'Finalizar encomenda',
      toast_added: 'Adicionado ao carrinho',
      enroll_label: 'Admissão',
      enroll_title: 'Matrículas e Confirmações',
      enroll_lead: 'Ano Lectivo 2026/2027 — Vagas limitadas. Período: 10/07/2026 a 30/07/2026.',
      ben1: 'Da Iniciação à 9.ª Classe',
      ben2: 'Ensino com qualidade e dedicação',
      ben3: 'Professores experientes e comprometidos',
      ben4: 'Espaço seguro, limpo e acolhedor',
      ben5: 'Aulas de reforço e eventos escolares',
      ben6: 'Propinas acessíveis',
      ben7: 'Descontos especiais para irmãos',
      contact_address_label: 'Morada',
      contact_address: 'Benfica, Rua 32 — Junto à Ponte do Mercado do Kifica',
      docs_conf_title: 'Documentos para Confirmação',
      docs_new_title: 'Documentos para Matrículas Novas',
      doc_conf1: 'Fotocópia actualizada do Bilhete de Identidade',
      doc_conf2: 'Duas fotografias tipo passe actualizadas',
      doc_conf3: 'Cópia do cartão de vacinas (Iniciação e 1.ª classe)',
      doc_conf4: 'Cópia do cartão de seguro de saúde (se tiver)',
      doc_conf5: 'Recibo da última prestação paga',
      doc_conf6: 'Recibo de actividades extracurriculares (se frequentar)',
      doc_new1: 'Fotocópia da cédula ou Bilhete de Identidade',
      doc_new2: 'Fotocópia do BI do Encarregado de Educação',
      doc_new3: 'Atestado médico',
      doc_new4: 'Duas fotografias tipo passe actualizadas',
      doc_new5: 'Cópia do cartão de vacinas (Iniciação e 1.ª)',
      doc_new6: 'Cópia do cartão de seguro de saúde (se tiver)',
      doc_new7: 'Boletim original ou declaração de transferência',
      doc_new8: 'Comprovativo de morada',
      contact_label: 'Fale Connosco',
      contact_title: 'Contacto',
      contact_lead: 'Estamos à disposição para esclarecer dúvidas e acompanhar o processo de matrícula.',
      form_name: 'Nome completo',
      form_phone: 'Telefone / WhatsApp',
      form_email: 'E-mail',
      form_level: 'Nível de interesse',
      form_level_opt: 'Seleccione…',
      form_msg: 'Mensagem',
      form_submit: 'Enviar via WhatsApp',
      footer_about: 'Colégio Lapidar — Educar para Transformar. Formação de qualidade, disciplina e valores em Angola.',
      footer_links: 'Navegação',
      footer_contact: 'Contactos',
      footer_follow: 'Siga-nos',
      footer_copy: '© 2026 Colégio Lapidar. Todos os direitos reservados.',
      select_init: 'Iniciação',
      select_1_3: '1.ª à 3.ª Classe',
      select_4_6: '4.ª à 6.ª Classe',
      select_7_9: '7.ª à 9.ª Classe',
      select_other: 'Outro / Informação geral'
    },
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_levels: 'Levels',
      nav_prices: 'Fees',
      nav_rules: 'Rules',
      nav_products: 'Uniforms',
      nav_enroll: 'Enrollment',
      nav_contact: 'Contact',
      announce: 'Enrollment 2026/2027 open — <em>Limited places</em>',
      announce_cta: 'Learn more →',
      hero_label: 'Academic Year 2026/2027',
      hero_title: 'Educate to Transform',
      hero_lead: 'Colégio Lapidar — quality education, discipline and values. From preschool to 9th grade, with excellence and care.',
      hero_cta1: 'Enroll Now',
      hero_cta2: 'View Fees',
      about_label: 'About Us',
      about_title: 'Shape today, transform tomorrow',
      about_p1: 'Colégio Lapidar is a private school in Angola dedicated to excellence in education, focusing on the integral development of every student — academic, human and civic.',
      about_p2: 'We believe every child is a diamond to be polished. We combine pedagogical rigour, solid values and a welcoming environment to prepare young people who will transform their communities and the country.',
      about_stat1: 'Levels',
      about_stat2: 'School Year',
      about_stat3: 'Values',
      about_stat4: 'Excellence',
      levels_label: 'Education',
      levels_title: 'Education Levels',
      levels_lead: 'We accompany students from their first steps through the end of lower secondary education.',
      level1_title: 'Preschool',
      level1_desc: 'First contact with learning, socialisation and curiosity development.',
      level2_title: 'Grades 1–3',
      level2_desc: 'Solid foundations in reading, writing, numeracy and study habits.',
      level3_title: 'Grades 4–6',
      level3_desc: 'Skills consolidation and preparation for secondary education.',
      level4_title: 'Grades 7–9',
      level4_desc: 'Lower secondary with academic rigour and career guidance.',
      prices_label: 'Investment',
      prices_title: 'Fee Schedule 2026/2027',
      prices_lead: 'Enrollment and confirmation open. Amounts in Angolan Kwanzas (Kz).',
      tax_mat: 'Enrollment Fee',
      tax_conf: 'Confirmation Fee',
      tax_apoio: 'Pedagogical Support Fee',
      prop_title: 'Monthly Tuition',
      prop_col1: 'Level',
      prop_col2: 'Amount (Kz)',
      prop1: 'Preschool to Grade 3',
      prop2: 'Grades 4–6',
      prop3: 'Grades 7–9',
      extra_title: 'Extracurricular Activities',
      extra_note: 'Optional • 14:00–16:00 • Monthly payment',
      extra1: 'Ballet',
      extra2: 'Chess',
      extra3: 'Karate',
      extra_month: '/ month',
      extra_insc: 'Extracurricular activities registration: 3,000.00 Kz (one-time).',
      fine_title: 'Late Payment Penalties',
      fine_note: 'Calculated on tuition. After day 30, an additional 5% per week (cumulative) applies and may lead to automatic suspension from the 1st of the following month.',
      fine_col1: 'Level',
      fine_col2: 'Tuition',
      fine_col3: 'Total 10%',
      fine_col4: 'Total 20%',
      fine_col5: 'Total 40%',
      fine_scale: 'Scale: 10% (days 11–16) · 20% (days 17–22) · 40% (days 23–30). Amounts in Kz.',
      emo_title: 'Administrative Fees',
      emo_col1: 'Service',
      emo_col2: 'Amount (Kz)',
      emo1: 'Declaration with/without grades',
      emo2: 'Urgent declaration',
      emo3: 'Certificates',
      emo4: 'Absence justification',
      emo5: 'Appeal',
      emo6: 'Transfer',
      emo7: 'Late exams',
      reg_label: 'Regulations',
      reg_title: 'Payment Conditions',
      reg_lead: 'Essential rules from the internal regulations for the 2026/2027 school year.',
      reg1_title: 'Mandatory payment',
      reg1_desc: 'Enrollment, confirmation and pedagogical support fees are mandatory at the time of registration. Cancellations do not entitle to any refund. No student may renew without clearing previous debts.',
      reg2_title: 'Instalments',
      reg2_desc: 'The annual fee is divided into 10 instalments (September–June). Exam classes (6th and 9th) pay 11 instalments (September–July).',
      reg3_title: 'Full-year discount',
      reg3_desc: 'Payment of the full annual fee in a single instalment: 8% discount.',
      reg4_title: 'Sibling discounts',
      reg4_desc: 'On the youngest child: 2 children → 5%; 3 children → 10%; 4 or more → 20%. Discount is lost if payment is not made on the due date. Families with more than one child enrolled: +5% on the monthly fee of the 2nd child and subsequent.',
      reg5_title: 'Payment window',
      reg5_desc: 'Payments must be made between the 1st and the 10th of each month. Outside this window, late-payment penalties apply.',
      reg6_title: 'Proof of payment',
      reg6_desc: 'Payment receipts must be submitted within a maximum of 7 working days after payment. Late submission incurs a 3% administrative fine on the amount paid.',
      reg7_title: 'Payment methods',
      reg7_desc: 'Bank transfer, POS (TPA) and payment by reference. Cash payments are prohibited.',
      reg8_title: 'Arrears and suspension',
      reg8_desc: 'Two or more months of arrears may lead to student suspension and refusal of renewal for the following year (with possible notification to ANEP). Management may suspend services, including extracurriculars.',
      reg9_title: 'Withdrawal',
      reg9_desc: 'Withdrawal during the year does not entitle to a refund of already-paid instalments. The fee for the month of departure remains due.',
      reg10_title: 'Special cases',
      reg10_desc: 'In case of closure due to legal determination, public calamity or force majeure, tuition remains due if distance learning is provided. Management reserves the right to amend rules for the benefit of the school community.',
      products_label: 'School Shop',
      products_title: 'School Uniforms',
      products_lead: 'Official Colégio Lapidar uniforms. Choose size and add to cart.',
      prod1_title: 'Official Polo',
      prod1_desc: 'White polo shirt with brown collar and cuffs. Embroidered crest on the chest. Quality cotton.',
      prod2_title: 'Official Skirt',
      prod2_desc: 'Institutional brown A-line knee-length skirt. Comfortable and elegant.',
      prod3_title: 'Official Trousers',
      prod3_desc: 'Institutional brown classic straight-cut trousers. Durable and comfortable fabric.',
      prod_sizes: 'Sizes: S · M · L',
      prod_cta: 'Order via WhatsApp',
      prod_add: 'Add to cart',
      qty_label: 'Qty',
      nav_checkout: 'Cart',
      checkout_label: 'Cart',
      checkout_title: 'Checkout',
      checkout_lead: 'Review your items and send the order via WhatsApp. We will confirm availability and payment.',
      checkout_items: 'Items',
      checkout_details: 'Order details',
      cart_empty: 'Your cart is empty. Add uniforms from the shop.',
      cart_total: 'Total',
      cart_clear: 'Clear cart',
      cart_remove: 'Remove',
      cart_size: 'Size',
      co_student: 'Student name (optional)',
      co_notes: 'Notes',
      co_notes_ph: 'E.g. special size, pick up at the office...',
      checkout_submit: 'Send order via WhatsApp',
      checkout_note: 'The order will be sent via WhatsApp. No online payment — confirm with the school office.',
      checkout_back: '← Continue shopping',
      checkout_shop: 'View uniforms',
      cart_drawer_title: 'Your cart',
      cart_checkout: 'Checkout',
      toast_added: 'Added to cart',
      enroll_label: 'Admission',
      enroll_title: 'Enrollment & Confirmation',
      enroll_lead: 'Academic Year 2026/2027 — Limited places. Period: 10/07/2026 to 30/07/2026.',
      ben1: 'From preschool to 9th grade',
      ben2: 'Quality education with dedication',
      ben3: 'Experienced and committed teachers',
      ben4: 'Safe, clean and welcoming space',
      ben5: 'Remedial classes and school events',
      ben6: 'Accessible tuition fees',
      ben7: 'Special sibling discounts',
      contact_address_label: 'Address',
      contact_address: 'Benfica, Rua 32 — Near Mercado do Kifica Bridge',
      docs_conf_title: 'Documents for Confirmation',
      docs_new_title: 'Documents for New Enrollment',
      doc_conf1: 'Updated copy of Identity Card',
      doc_conf2: 'Two updated passport-size photos',
      doc_conf3: 'Copy of vaccination card (Preschool & Grade 1)',
      doc_conf4: 'Copy of health insurance card (if any)',
      doc_conf5: 'Receipt of last instalment paid',
      doc_conf6: 'Extracurricular activities receipt (if enrolled)',
      doc_new1: 'Copy of birth certificate or Identity Card',
      doc_new2: 'Copy of Parent/Guardian Identity Card',
      doc_new3: 'Medical certificate',
      doc_new4: 'Two updated passport-size photos',
      doc_new5: 'Copy of vaccination card (Preschool & Grade 1)',
      doc_new6: 'Copy of health insurance card (if any)',
      doc_new7: 'Original report card or transfer declaration',
      doc_new8: 'Proof of address',
      contact_label: 'Get in Touch',
      contact_title: 'Contact',
      contact_lead: 'We are available to answer questions and support the enrollment process.',
      form_name: 'Full name',
      form_phone: 'Phone / WhatsApp',
      form_email: 'Email',
      form_level: 'Level of interest',
      form_level_opt: 'Select…',
      form_msg: 'Message',
      form_submit: 'Send via WhatsApp',
      footer_about: 'Colégio Lapidar — Educate to Transform. Quality education, discipline and values in Angola.',
      footer_links: 'Navigation',
      footer_contact: 'Contacts',
      footer_follow: 'Follow us',
      footer_copy: '© 2026 Colégio Lapidar. All rights reserved.',
      select_init: 'Preschool',
      select_1_3: 'Grades 1–3',
      select_4_6: 'Grades 4–6',
      select_7_9: 'Grades 7–9',
      select_other: 'Other / General inquiry'
    }
  };

  let currentLang = 'pt';

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    // Update select options
    const levelSelect = document.getElementById('level');
    if (levelSelect) {
      const opts = levelSelect.querySelectorAll('option');
      if (opts[0]) opts[0].textContent = translations[lang].form_level_opt;
      if (opts[1]) opts[1].textContent = translations[lang].select_init;
      if (opts[2]) opts[2].textContent = translations[lang].select_1_3;
      if (opts[3]) opts[3].textContent = translations[lang].select_4_6;
      if (opts[4]) opts[4].textContent = translations[lang].select_7_9;
      if (opts[5]) opts[5].textContent = translations[lang].select_other;
    }
    // Toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem('lapidar-lang', lang);
  }

  // Init language
  const saved = localStorage.getItem('lapidar-lang') || 'pt';
  setLanguage(saved);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // ---------- Header + announce scroll behavior ----------
  const header = document.querySelector('.header');
  const announceBar = document.querySelector('.announce-bar');
  let lastScrollY = 0;
  let ticking = false;

  function updateHeaderOnScroll() {
    const y = window.scrollY;

    // Solid header after any meaningful scroll
    header.classList.toggle('scrolled', y > 40);

    // Announce bar: hide on scroll down, show near top
    if (y > 80 && y > lastScrollY) {
      announceBar.classList.add('hidden');
      header.classList.add('announce-hidden');
    } else if (y < 40 || y < lastScrollY) {
      announceBar.classList.remove('hidden');
      header.classList.remove('announce-hidden');
    }

    lastScrollY = y;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeaderOnScroll);
      ticking = true;
    }
  }, { passive: true });

  // ---------- Mobile menu (left drawer) ----------
  const hamburger = document.querySelector('.hamburger');
  const navMobile = document.querySelector('.nav-mobile');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.nav-mobile-close');
  const cartDrawer = document.getElementById('cart-drawer');

  function syncBodyLock() {
    const menuOpen = navMobile?.classList.contains('open');
    const cartOpen = cartDrawer?.classList.contains('open');
    document.body.style.overflow = (menuOpen || cartOpen) ? 'hidden' : '';
    if (cartOpen) document.body.classList.add('cart-open');
    else document.body.classList.remove('cart-open');
    if (menuOpen || cartOpen) overlay?.classList.add('show');
    else overlay?.classList.remove('show');
  }

  function closeMenu() {
    hamburger?.classList.remove('active');
    hamburger?.setAttribute('aria-expanded', 'false');
    navMobile?.classList.remove('open');
    syncBodyLock();
  }

  function openMenu() {
    closeCartDrawer();
    hamburger?.classList.add('active');
    hamburger?.setAttribute('aria-expanded', 'true');
    navMobile?.classList.add('open');
    syncBodyLock();
  }

  function openCartDrawer() {
    closeMenu();
    if (!cartDrawer) return;
    renderDrawerCart();
    cartDrawer.classList.add('open');
    cartDrawer.setAttribute('aria-hidden', 'false');
    syncBodyLock();
  }

  function closeCartDrawer() {
    if (!cartDrawer) return;
    cartDrawer.classList.remove('open');
    cartDrawer.setAttribute('aria-hidden', 'true');
    syncBodyLock();
  }

  hamburger?.addEventListener('click', () => {
    if (navMobile?.classList.contains('open')) closeMenu();
    else openMenu();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  navMobile?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  overlay?.addEventListener('click', () => {
    closeMenu();
    closeCartDrawer();
  });

  document.getElementById('cart-drawer-close')?.addEventListener('click', closeCartDrawer);

  // Bag icon opens drawer (not navigate away)
  document.querySelectorAll('.cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cartDrawer?.classList.contains('open')) closeCartDrawer();
      else openCartDrawer();
    });
  });

  // ---------- Active nav link ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-desktop a, .nav-mobile a');

  function updateActiveNav() {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }
  window.addEventListener('scroll', updateActiveNav);

  // ---------- Contact form → WhatsApp ----------
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const level = document.getElementById('level').value;
      const message = document.getElementById('message').value.trim();

      if (!name || !phone) {
        alert(currentLang === 'pt' ? 'Por favor preencha o nome e o telefone.' : 'Please fill in name and phone.');
        return;
      }

      const levelText = document.getElementById('level').selectedOptions[0]?.text || level;
      const text = currentLang === 'pt'
        ? `Olá! Sou ${name}.\nTelefone: ${phone}\nE-mail: ${email || '—'}\nNível de interesse: ${levelText}\n\nMensagem:\n${message || 'Gostaria de obter mais informações sobre matrículas.'}`
        : `Hello! My name is ${name}.\nPhone: ${phone}\nEmail: ${email || '—'}\nLevel of interest: ${levelText}\n\nMessage:\n${message || 'I would like more information about enrollment.'}`;

      const url = `https://wa.me/244950456485?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  }

  // ---------- Cart & Checkout ----------
  const CART_KEY = 'lapidar-cart';
  const WA_NUMBER = '244950456485';

  const productImages = {
    polo: 'assets/images/uniforme-polo.jpg',
    saia: 'assets/images/uniforme-saia.jpg',
    calca: 'assets/images/uniforme-calca.jpg'
  };

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    renderCart();
    renderDrawerCart();
    updateBadge();
  }

  function formatKz(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' Kz';
  }

  function cartCount() {
    return getCart().reduce((s, i) => s + i.qty, 0);
  }

  function cartTotal() {
    return getCart().reduce((s, i) => s + i.price * i.qty, 0);
  }

  function updateBadge() {
    const badge = document.getElementById('cart-badge');
    if (!badge) return;
    const n = cartCount();
    if (n > 0) {
      badge.textContent = n > 99 ? '99+' : n;
      badge.hidden = false;
    } else {
      badge.hidden = true;
    }
  }

  function productName(item) {
    return currentLang === 'en' && item.nameEn ? item.nameEn : item.name;
  }

  function buildCartItemHTML(item, idx) {
    const removeLabel = translations[currentLang]?.cart_remove || 'Remover';
    const sizeLabel = translations[currentLang]?.cart_size || 'Tamanho';
    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${productImages[item.id] || ''}" alt="" loading="lazy" />
        <div class="cart-item-info">
          <h4>${productName(item)}</h4>
          <div class="cart-item-meta">${sizeLabel}: ${item.size}</div>
          <div class="cart-item-price">${formatKz(item.price * item.qty)}</div>
        </div>
        <div class="cart-item-actions">
          <div class="cart-item-qty">
            <button type="button" data-action="minus" data-idx="${idx}" aria-label="−">−</button>
            <span>${item.qty}</span>
            <button type="button" data-action="plus" data-idx="${idx}" aria-label="+">+</button>
          </div>
          <button type="button" class="cart-item-remove" data-action="remove" data-idx="${idx}">${removeLabel}</button>
        </div>
      </div>
    `;
  }

  function renderList(listEl, emptyEl, footerEl, totalEl, submitBtn) {
    const cart = getCart();
    if (!listEl) return;

    listEl.innerHTML = '';

    if (cart.length === 0) {
      if (emptyEl) emptyEl.style.display = '';
      if (footerEl) footerEl.hidden = true;
      if (submitBtn) submitBtn.disabled = true;
      return;
    }

    if (emptyEl) emptyEl.style.display = 'none';
    if (footerEl) footerEl.hidden = false;
    if (submitBtn) submitBtn.disabled = false;
    if (totalEl) totalEl.textContent = formatKz(cartTotal());

    cart.forEach((item, idx) => {
      listEl.insertAdjacentHTML('beforeend', buildCartItemHTML(item, idx));
    });
  }

  function renderCart() {
    renderList(
      document.getElementById('cart-items'),
      document.getElementById('cart-empty'),
      document.getElementById('cart-footer'),
      document.getElementById('cart-total'),
      document.getElementById('checkout-submit')
    );
  }

  function renderDrawerCart() {
    renderList(
      document.getElementById('drawer-cart-items'),
      document.getElementById('drawer-cart-empty'),
      document.getElementById('drawer-cart-footer'),
      document.getElementById('drawer-cart-total'),
      null
    );
  }

  // Cart item actions (qty / remove) — works in drawer and checkout page
  function handleCartAction(e) {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const idx = parseInt(btn.dataset.idx, 10);
    const action = btn.dataset.action;
    const cart = getCart();
    if (isNaN(idx) || !cart[idx]) return;

    if (action === 'plus') {
      cart[idx].qty = Math.min(20, cart[idx].qty + 1);
    } else if (action === 'minus') {
      cart[idx].qty = Math.max(1, cart[idx].qty - 1);
    } else if (action === 'remove') {
      cart.splice(idx, 1);
    }
    saveCart(cart);
  }

  document.getElementById('cart-items')?.addEventListener('click', handleCartAction);
  document.getElementById('drawer-cart-items')?.addEventListener('click', handleCartAction);

  document.getElementById('cart-clear')?.addEventListener('click', () => saveCart([]));
  document.getElementById('drawer-cart-clear')?.addEventListener('click', () => saveCart([]));

  // Product card interactions
  document.querySelectorAll('.product-card').forEach(card => {
    card.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        card.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    const qtyInput = card.querySelector('.qty-input');
    card.querySelector('.qty-minus')?.addEventListener('click', () => {
      qtyInput.value = Math.max(1, parseInt(qtyInput.value, 10) - 1);
    });
    card.querySelector('.qty-plus')?.addEventListener('click', () => {
      qtyInput.value = Math.min(20, parseInt(qtyInput.value, 10) + 1);
    });

    // Add to cart → open right drawer
    card.querySelector('.btn-add-cart')?.addEventListener('click', () => {
      const id = card.dataset.id;
      const name = card.dataset.name;
      const nameEn = card.dataset.nameEn;
      const price = parseInt(card.dataset.price, 10);
      const size = card.querySelector('.size-btn.active')?.dataset.size || 'M';
      const qty = Math.max(1, Math.min(20, parseInt(qtyInput.value, 10) || 1));

      const cart = getCart();
      const existing = cart.find(i => i.id === id && i.size === size);
      if (existing) {
        existing.qty = Math.min(20, existing.qty + qty);
      } else {
        cart.push({ id, name, nameEn, price, size, qty });
      }
      saveCart(cart);
      qtyInput.value = 1;
      openCartDrawer();
    });
  });

  // Checkout form → WhatsApp
  document.getElementById('checkout-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const cart = getCart();
    if (cart.length === 0) return;

    const name = document.getElementById('co-name').value.trim();
    const phone = document.getElementById('co-phone').value.trim();
    const student = document.getElementById('co-student').value.trim();
    const notes = document.getElementById('co-notes').value.trim();

    if (!name || !phone) {
      alert(currentLang === 'pt'
        ? 'Por favor preencha o nome e o telefone.'
        : 'Please fill in name and phone.');
      return;
    }

    const lines = cart.map(i => {
      const n = productName(i);
      return `• ${n} — ${translations[currentLang]?.cart_size || 'Tamanho'} ${i.size} × ${i.qty} = ${formatKz(i.price * i.qty)}`;
    });

    const total = formatKz(cartTotal());
    let text;
    if (currentLang === 'pt') {
      text = `Olá! Gostaria de encomendar uniformes do Colégio Lapidar.\n\n*Encomenda:*\n${lines.join('\n')}\n\n*Total: ${total}*\n\n*Nome:* ${name}\n*Telefone:* ${phone}`;
      if (student) text += `\n*Aluno:* ${student}`;
      if (notes) text += `\n*Observações:* ${notes}`;
      text += `\n\nPor favor confirmem disponibilidade e forma de pagamento.`;
    } else {
      text = `Hello! I would like to order Colégio Lapidar uniforms.\n\n*Order:*\n${lines.join('\n')}\n\n*Total: ${total}*\n\n*Name:* ${name}\n*Phone:* ${phone}`;
      if (student) text += `\n*Student:* ${student}`;
      if (notes) text += `\n*Notes:* ${notes}`;
      text += `\n\nPlease confirm availability and payment method.`;
    }

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  });

  // Re-apply placeholders + cart labels when language changes
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => {
        const ta = document.getElementById('co-notes');
        if (ta && translations[currentLang]?.co_notes_ph) {
          ta.placeholder = translations[currentLang].co_notes_ph;
        }
        renderCart();
        renderDrawerCart();
      }, 0);
    });
  });

  // Init cart UI
  updateBadge();
  renderCart();
  renderDrawerCart();
  const taInit = document.getElementById('co-notes');
  if (taInit && translations[currentLang]?.co_notes_ph) {
    taInit.placeholder = translations[currentLang].co_notes_ph;
  }
});
