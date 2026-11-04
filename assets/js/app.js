/* ============ INTRO · letters flick through typefaces, settle into Bricolage, then the screen lifts ============ */
(function(){
  var el=document.getElementById('iv'); if(!el) return;
  var html=document.documentElement;
  if(html.classList.contains('iv-skip')){ el.remove(); return; }
  var ls=[].slice.call(el.querySelectorAll('.iv-mk span'));
  var seq=['iv-f1','iv-f2','iv-f3','iv-f1','iv-f2','iv-f4'];
  var timers=[], finished=false;
  ls.forEach(function(l,k){ seq.forEach(function(c,j){ timers.push(setTimeout(function(){ l.className=c; }, 40 + k*40 + j*32)); }); });
  function finish(){
    if(finished) return; finished=true;
    timers.forEach(clearTimeout);
    ls.forEach(function(l){ l.className='iv-f4'; });
    try{ sessionStorage.setItem('luka-intro','1'); }catch(e){}
    setTimeout(function(){ el.classList.add('out'); html.classList.remove('iv-lock'); }, 120);
    setTimeout(function(){ if(el.parentNode) el.remove(); }, 700);
  }
  requestAnimationFrame(function(){ requestAnimationFrame(function(){ el.classList.add('go'); timers.push(setTimeout(finish, 420)); }); });
  el.addEventListener('click', finish);
})();

/* ============ DATA ============ */
const PROJECTS = [
  { id:"pulse", cover:"assets/img/pulse.webp", year:"2026", cats:["ux","dev"],
    theme:{bg:"#2E4A47",fg:"#F3EDE4"},
    title:{fr:"Don du sang HUG, mobiliser les entreprises",en:"HUG blood donation, rallying companies"},name:"Don du sang HUG",
    seo:{"fr":{"t":"Don du sang HUG : UX/UI d'une plateforme | Luka Stojanovic","d":"Une plateforme pour les Hôpitaux Universitaires de Genève : quiz d'éligibilité, prise de rendez-vous et espace pour mobiliser les entreprises."},"en":{"t":"HUG blood donation: platform UX/UI | Luka Stojanovic","d":"A platform for Geneva University Hospitals: eligibility quiz, appointment booking and a space that rallies companies around blood donation."}},
    hook:{fr:"Faire du don du sang un projet d'entreprise.",en:"Making blood donation a company project."},
    client:{fr:"HUG × HEIG-VD",en:"HUG × HEIG-VD"},
    logo:"assets/img/logos/hug.svg",logoName:"Hôpitaux Universitaires Genève",hoverLogo:"assets/img/logos/hug.svg",
    role:{fr:"UX/UI & concept",en:"UX/UI & concept"},
    catLabel:{fr:"UX/UI · Développement",en:"UX/UI · Development"},
    tags:{fr:["UX/UI","Recherche","Santé"],en:["UX/UI","Research","Healthcare"]},
    teaser:{fr:"Une plateforme qui engage les entreprises dans le don du sang et valorise leur démarche grâce au label CTS.",en:"A platform that gets companies involved in blood donation and recognises their commitment with the CTS label."},
    lead:{fr:"Un parcours simple et rassurant pour donner envie aux entreprises de s'engager pour le don du sang.",en:"A simple, reassuring journey that makes companies want to get involved in blood donation."},
    context:{fr:"Cette plateforme, réalisée pour les Hôpitaux Universitaires de Genève, aide à mobiliser les entreprises autour du don du sang. Le donneur est guidé de la découverte à la prise de rendez-vous : un quiz d'éligibilité en neuf questions, accompagné d'une mascotte castor conçue pour rassurer, puis la réservation d'un créneau. Les entreprises disposent d'un espace dédié, et leur engagement est reconnu par le label CTS et le Trophée de la générosité. J'ai travaillé le système de design, la mascotte et les maquettes du site public et de l'espace entreprise.",en:"Built for Geneva University Hospitals, this platform helps rally companies around blood donation. Donors are guided from discovery to booking: a nine-question eligibility quiz, led by a beaver mascot designed to reassure, then slot reservation. Companies get a dedicated space, and their commitment is recognised by the CTS label and the Trophée de la générosité. I worked on the design system, the mascot and the mockups for the public site and the company space."},
    did:{fr:["Recherche et cadrage sur le don du sang en entreprise","Système de design et mascotte","Quiz d'éligibilité et prise de rendez-vous","Maquettes du site public et de l'espace entreprise","Label CTS et Trophée de la générosité"],en:["Research and framing on workplace blood donation","Design system and mascot","Eligibility quiz and appointment booking","Mockups for the public site and company space","CTS label and Trophée de la générosité"]},
    poster:"assets/img/hug/card.webp",
    galleryGroups:[
      {kind:"mascot",title:{fr:"La mascotte",en:"The mascot"},
       cap:{fr:"Un castor-guide créé pour rassurer les donneurs tout au long du parcours.",en:"A beaver guide created to reassure donors throughout the journey."},
       items:[{src:"assets/img/hug/courage-tux.webp"},{src:"assets/img/hug/courage-guide.webp"}]},
      {kind:"device",title:{fr:"Le site don du sang",en:"The blood-donation site"},
       items:[{src:"assets/img/hug/site-accueil.webp",mock:"assets/img/hug/site-accueil-mock.webp",cap:{fr:"Page d'accueil",en:"Home page"}},
              {src:"assets/img/hug/site-trophee.webp",mock:"assets/img/hug/site-trophee-mock.webp",cap:{fr:"Trophée de la générosité",en:"Trophée de la générosité"}}]},
      {kind:"device",title:{fr:"L'espace entreprise",en:"The company space"},
       items:[{src:"assets/img/hug/espace-entreprise.webp",mock:"assets/img/hug/espace-entreprise-mock.webp",cap:{fr:"Page de collecte en entreprise",en:"Company blood-drive page"}}]},
      {kind:"device",title:{fr:"Le parcours donneur",en:"The donor journey"},
       items:[{src:"assets/img/hug/quiz-guide.webp",mock:"assets/img/hug/quiz-guide-mock.webp",cap:{fr:"Introduction du quiz, guidée par la mascotte",en:"Quiz intro, guided by the mascot"}},
              {src:"assets/img/hug/quiz-reponses.webp",mock:"assets/img/hug/quiz-reponses-mock.webp",cap:{fr:"Résumé du quiz d'éligibilité",en:"Eligibility quiz summary"}},
              {src:"assets/img/hug/rdv.webp",mock:"assets/img/hug/rdv-mock.webp",cap:{fr:"Prise de rendez-vous",en:"Appointment booking"}}]},
      {kind:"device",title:{fr:"La version mobile",en:"The mobile version"},
       items:[{src:"assets/img/hug/m-accueil.webp",mock:"assets/img/hug/m-accueil-mock.webp",cap:{fr:"Page d'accueil sur mobile",en:"Home page on mobile"}},
              {src:"assets/img/hug/m-collecte.webp",mock:"assets/img/hug/m-collecte-mock.webp",cap:{fr:"Collecte en entreprise sur mobile",en:"Company blood drive on mobile"}},
              {src:"assets/img/hug/m-quiz.webp",mock:"assets/img/hug/m-quiz-mock.webp",cap:{fr:"Début du quiz d'éligibilité",en:"Start of the eligibility quiz"}},
              {src:"assets/img/hug/m-conseil.webp",mock:"assets/img/hug/m-conseil-mock.webp",cap:{fr:"Un conseil de la mascotte",en:"A tip from the mascot"}},
              {src:"assets/img/hug/m-reponses.webp",mock:"assets/img/hug/m-reponses-mock.webp",cap:{fr:"Résumé des réponses",en:"Summary of the answers"}}]}
    ],
    link:{label:{fr:"Voir le site",en:"Visit the site"},url:"https://dondusang.loannjuillerat.ch"},
    link2:{label:{fr:"Voir le site partenaire",en:"Visit the partner site"},url:"https://dondusang.loannjuillerat.ch/entreprise/ubs"} },

  { id:"odd", cover:"assets/img/odd/cover.webp", poster:"assets/img/odd/card.webp", year:"2025", cats:["ux"],
    theme:{bg:"#17244F",fg:"#F3EDE4"},
    title:{"fr":"EduChildren, parrainer la scolarité d'un enfant","en":"EduChildren, sponsoring a child's schooling"},name:"EduChildren",
    seo:{"fr":{"t":"EduChildren : parrainage scolaire | Luka Stojanovic","d":"Projet UX/UI de groupe à la HEIG-VD : une plateforme de parrainage scolaire transparente, de la recherche utilisateur au prototype Figma testé."},"en":{"t":"EduChildren: school sponsorship | Luka Stojanovic","d":"A group UX/UI project at HEIG-VD: a transparent school sponsorship platform, from user research to a tested Figma prototype."}},
    hook:{"fr":"Parrainer un élève, en toute transparence.","en":"Sponsor a pupil, with full transparency."},
    client:{"fr":"Projet de groupe, HEIG-VD","en":"Group project, HEIG-VD"},
    logo:"assets/img/logos/heig.svg",logoName:"HEIG-VD",hoverLogo:"assets/img/logos/heig.svg",
    role:{"fr":"Recherche, UX/UI, travail en équipe","en":"Research, UX/UI, teamwork"},
    catLabel:{"fr":"UX/UI","en":"UX/UI"},
    tags:{"fr":["UX/UI","Recherche utilisateur","Figma"],"en":["UX/UI","User research","Figma"]},
    teaser:{"fr":"Une plateforme de parrainage scolaire qui montre aux parrains où va leur argent.","en":"A school sponsorship platform that shows sponsors where their money goes."},
    lead:{"fr":"Montrer au parrain où va son argent et comment progresse l'élève qu'il soutient.","en":"Show sponsors where their money goes and how the pupil they support is doing."},
    context:{"fr":"Il s'agit d'un projet fictif, réalisé en groupe à la HEIG-VD. Le projet part du quatrième Objectif de développement durable de l'ONU : une éducation de qualité pour tous. Beaucoup de personnes aimeraient financer la scolarité d'un enfant dans un pays défavorisé, mais elles hésitent, car elles ne savent pas si l'argent arrive vraiment à l'école. EduChildren répond à cette méfiance. Le parrain choisit un élève, paie chaque mois à partir de 30 CHF, puis suit son parcours : résultats scolaires, nouvelles de l'école et, s'il le souhaite, une visite organisée sur place. L'argent est versé directement aux écoles et l'identité des enfants reste protégée du début à la fin.","en":"This is a fictional project, made as a group at HEIG-VD. The project starts from the UN's fourth Sustainable Development Goal: quality education for all. Many people would like to fund a child's schooling in a disadvantaged country, but they hesitate because they don't know whether the money really reaches the school. EduChildren answers that mistrust. Sponsors choose a pupil, pay every month from CHF 30, then follow their progress: school results, news from the school and, if they wish, an organised visit on site. The money goes straight to the schools and the children's identity stays protected from start to finish."},
    did:{"fr":["Recherche sur l'éducation dans les pays défavorisés et trois profils de donateurs","Un objectif clair : garantir la transparence et un suivi qui donne envie de rester engagé","Un parcours de parrainage en trois étapes : choisir un élève, payer, confirmer","Un tableau de bord pour suivre ses filleuls, leurs résultats et les visites","Des règles pour protéger les enfants : visages floutés, aucun contact direct, appels uniquement avec l'enseignant","Un prototype Figma testé auprès d'utilisateurs, puis des améliorations ciblées"],"en":["Research on education in disadvantaged countries and three donor profiles","A clear goal: guarantee transparency and a follow-up that keeps sponsors engaged","A three-step sponsorship flow: choose a pupil, pay, confirm","A dashboard to follow sponsored pupils, their results and visits","Rules to protect children: blurred faces, no direct contact, calls only with the teacher","A Figma prototype tested with users, followed by targeted improvements"]},
    galleryGroups:[
      {kind:"device",title:{"fr":"Découvrir et s'inscrire","en":"Discover and sign up"},
       items:[{src:"assets/img/odd/accueil.webp",mock:"assets/img/odd/accueil-mock.webp",cap:{fr:"La page d'accueil",en:"The home page"}},
              {src:"assets/img/odd/inscription.webp",mock:"assets/img/odd/inscription-mock.webp",cap:{fr:"Créer un compte",en:"Create an account"}},
              {src:"assets/img/odd/connexion.webp",mock:"assets/img/odd/connexion-mock.webp",cap:{fr:"Se connecter",en:"Log in"}}]},
      {kind:"device",title:{"fr":"Parrainer un élève","en":"Sponsor a pupil"},
       items:[{src:"assets/img/odd/choisir.webp",mock:"assets/img/odd/choisir-mock.webp",cap:{fr:"Choisir un élève, visages protégés",en:"Choose a pupil, faces protected"}},
              {src:"assets/img/odd/paiement.webp",mock:"assets/img/odd/paiement-mock.webp",cap:{fr:"Paiement mensuel et récapitulatif",en:"Monthly payment and summary"}},
              {src:"assets/img/odd/tableau.webp",mock:"assets/img/odd/tableau-mock.webp",cap:{fr:"Le tableau de bord du parrain",en:"The sponsor's dashboard"}}]},
      {kind:"device",title:{"fr":"Suivre son filleul","en":"Follow your pupil"},
       items:[{src:"assets/img/odd/profil.webp",mock:"assets/img/odd/profil-mock.webp",cap:{fr:"Profil et résultats scolaires",en:"Profile and school results"}},
              {src:"assets/img/odd/visite.webp",mock:"assets/img/odd/visite-mock.webp",cap:{fr:"S'inscrire à une visite d'école",en:"Sign up for a school visit"}},
              {src:"assets/img/odd/confirmation.webp",mock:"assets/img/odd/confirmation-mock.webp",cap:{fr:"Visites prévues et passées",en:"Upcoming and past visits"}}]}
    ],
    link:{label:{fr:"Voir sur Figma",en:"Open in Figma"},url:"https://www.figma.com/design/9mwjQqhMEiVJbH1GfRrv8H/BasesUI-LukaStojanovic-WilliamVladStancu-SteveBenjamin-NabilMohamedHagos?node-id=288-1024"} },

  { id:"etoile", cover:"assets/img/etoile.webp", year:"2026", cats:["design","strategy"],
    theme:{bg:"#4A3350",fg:"#F6F1E9"},
    title:{fr:"L'Étoile Blanche, identité d'un restaurant à Lausanne",en:"L'Étoile Blanche, identity of a Lausanne restaurant"},name:"L'Étoile Blanche",
    seo:{"fr":{"t":"L'Étoile Blanche : identité de restaurant | Luka Stojanovic","d":"Identité visuelle du restaurant L'Étoile Blanche à Lausanne : direction artistique, guide de marque, menus et contenus Instagram et TikTok."},"en":{"t":"L'Étoile Blanche: restaurant identity | Luka Stojanovic","d":"Visual identity for the L'Étoile Blanche restaurant in Lausanne: art direction, brand guide, menus and Instagram and TikTok content."}},
    hook:{fr:"L'essentiel suffit.",en:"The essentials are enough."},
    client:{fr:"Projet d'identité de marque, HEIG-VD",en:"Brand identity project, HEIG-VD"},
    logo:"assets/img/logos/etoile.svg",logoName:"Étoile Blanche",pillDark:true,hoverLogo:"assets/img/logos/etoile.svg",
    role:{fr:"Direction artistique & marque",en:"Art direction & branding"},
    catLabel:{fr:"Design graphique",en:"Graphic design"},
    tags:{fr:["Branding","Direction artistique","Social media"],en:["Branding","Art direction","Social media"]},
    teaser:{fr:"Une nouvelle identité de style suisse pour un restaurant : direction artistique, guide de marque et réseaux sociaux.",en:"A new Swiss-style identity for a restaurant: art direction, brand guide and social media."},
    lead:{fr:"Une identité sobre, construite sur une idée simple : l'essentiel suffit.",en:"A sober identity, built on one simple idea: the essentials are enough."},
    context:{fr:"Une identité pensée autour de systèmes visuels clairs, où l'essentiel suffit. La direction artistique, le guide de marque et la stratégie de contenus Instagram et TikTok positionnent le lieu comme une adresse d'afterwork, avec un ton sobre et direct.",en:"An identity built around clear visual systems, where the essentials are enough. The art direction, brand guide and Instagram and TikTok content strategy position the venue as an after-work destination, with a sober, direct tone."},
    did:{fr:["Direction artistique et système visuel","Guide de marque","Stratégie de contenus Instagram et TikTok","Déclinaisons : posts, stories et menus"],en:["Art direction and visual system","Brand guide","Instagram and TikTok content strategy","Applications: posts, stories and menus"]},
    galleryGroups:[
      {kind:"device",title:{fr:"Posts Instagram",en:"Instagram posts"},
       items:[{src:"assets/img/etoile/full-leclair.webp",mock:"assets/img/etoile/post-leclair.webp",cap:{fr:"Le Clair · cocktail signature",en:"Le Clair · signature cocktail"}},
              {src:"assets/img/etoile/full-fumant.webp",mock:"assets/img/etoile/post-fumant.webp",cap:{fr:"Fumant · la cuisine en gros plan",en:"Fumant · food close-up"}},
              {src:"assets/img/etoile/full-gestejuste.webp",mock:"assets/img/etoile/post-gestejuste.webp",cap:{fr:"Le geste juste · les coulisses",en:"The right touch · behind the scenes"}}]},
      {kind:"device",title:{fr:"Stories & annonces",en:"Stories & announcements"},
       items:[{src:"assets/img/etoile/page-savethedate.webp",mock:"assets/img/etoile/story-savethedate.webp",cap:{fr:"Save the date · afterwork",en:"Save the date · afterwork"}},
              {src:"assets/img/etoile/page-philosophie.webp",mock:"assets/img/etoile/story-philosophie.webp",cap:{fr:"L'essentiel suffit · la philosophie",en:"The essentials are enough · philosophy"}},
              {src:"assets/img/etoile/page-review.webp",mock:"assets/img/etoile/story-review.webp",cap:{fr:"Avis client · Google review",en:"Customer review · Google"}}]},
      {kind:"device",title:{fr:"Cartes & menus",en:"Menus & print"},
       items:[{src:"assets/img/etoile/page-mets.webp",mock:"assets/img/etoile/menu-mets.webp",cap:{fr:"La carte des mets",en:"The food menu"}},
              {src:"assets/img/etoile/page-bricoles.webp",mock:"assets/img/etoile/menu-bricoles.webp",cap:{fr:"Bricoles & bar",en:"Small plates & bar"}},
              {src:"assets/img/etoile/page-boissons.webp",mock:"assets/img/etoile/menu-boissons.webp",cap:{fr:"La carte des boissons",en:"The drinks menu"}},
              {src:"assets/img/etoile/page-leclair-poster.webp",mock:"assets/img/etoile/menu-leclair-poster.webp",cap:{fr:"Le Clair · affiche signature",en:"Le Clair · signature poster"}}]}
    ],
    link:null },

  { id:"yearbook", cover:"assets/img/yearbook/hero.webp", poster:"assets/img/yearbook/card.webp", year:"2025", cats:["design"],
    theme:{bg:"#35463A",fg:"#F3EDE4"},
    title:{fr:"Yearbook de la filière Ingénierie des médias",en:"Media Engineering yearbook"},name:"Yearbook",
    seo:{"fr":{"t":"Yearbook HEIG-VD : édition de 28 pages | Luka Stojanovic","d":"Un yearbook de 28 pages pour la filière Ingénierie des médias : grille, système de symboles, mise en page InDesign et risographie."},"en":{"t":"HEIG-VD yearbook: 28-page edition | Luka Stojanovic","d":"A 28-page yearbook for the Media Engineering programme: grid, symbol system, InDesign layout and risograph printing."}},
    hook:{fr:"28 pages, un seul système.",en:"28 pages, one system."},
    client:{fr:"Ingénierie des médias, HEIG-VD",en:"Media Engineering, HEIG-VD"},
    logo:"assets/img/logos/heig.svg",logoName:"HEIG-VD",hoverLogo:"assets/img/logos/heig.svg",
    role:{fr:"Design éditorial & mise en page",en:"Editorial design & layout"},
    catLabel:{fr:"Design graphique",en:"Graphic design"},
    tags:{fr:["Édition","InDesign","Risographie"],en:["Editorial","InDesign","Risograph"]},
    teaser:{fr:"Un yearbook de 28 pages et son système de mise en page sur mesure, réalisé sur InDesign.",en:"A 28-page yearbook and its custom layout system, made in InDesign."},
    lead:{fr:"Un système de symboles guide la lecture, du début à la fin du livre.",en:"A system of symbols guides the reader from the first page to the last."},
    context:{fr:"Conception d'un yearbook de 28 pages pour la filière Ingénierie des médias. Un système de symboles (éditorial, enseignement, recherche, conclusion) structure la lecture du début à la fin. Le projet est complété par un travail en risographie.",en:"Design of a 28-page yearbook for the Media Engineering programme. A system of symbols (editorial, teaching, research, conclusion) structures the reading from start to finish. The project is completed by risograph work."},
    did:{fr:["Direction éditoriale et grille de mise en page","Système de symboles et hiérarchie","Mise en page de 28 pages sur InDesign","Impression et risographie"],en:["Editorial direction and layout grid","Symbol system and hierarchy","28-page layout in InDesign","Printing and risograph"]},
    galleryGroups:[
      {kind:"device",title:{fr:"L'objet imprimé",en:"The printed object"},
       items:[{src:"assets/img/yearbook/cover.webp",mock:"assets/img/yearbook/cover-mock.webp",cap:{fr:"La couverture",en:"The cover"}},
              {src:"assets/img/yearbook/binary.webp",mock:"assets/img/yearbook/binary-mock.webp",cap:{fr:"Double page · pleine image",en:"Spread · full bleed"}}]},
      {kind:"device",title:{fr:"Les doubles pages",en:"The spreads"},
       items:[{src:"assets/img/yearbook/robustesse.webp",mock:"assets/img/yearbook/robustesse-mock.webp",cap:{fr:"« Robustesse » · ouverture d'article",en:"\"Robustesse\" · article opener"}},
              {src:"assets/img/yearbook/bachelor.webp",mock:"assets/img/yearbook/bachelor-mock.webp",cap:{fr:"Un bachelor intégrant la pratique",en:"A practice-integrated bachelor"}},
              {src:"assets/img/yearbook/salle.webp",mock:"assets/img/yearbook/salle-mock.webp",cap:{fr:"Pleine page · clôture du volume",en:"Full spread · closing the volume"}}]}
    ],
    link:null },

  { id:"visualdon", cover:"assets/img/vdon/landing.webp", poster:"assets/img/vdon/card.webp", year:"2026", cats:["dataviz","dev"],
    theme:{bg:"#2A1416",fg:"#F3EDE4"},
    title:{fr:"VisualDon, la face cachée de l'UFC",en:"VisualDon, the hidden side of the UFC"},name:"VisualDon",
    seo:{"fr":{"t":"VisualDon : visualisation de données sur l'UFC | Luka Stojanovic","d":"Un site interactif qui raconte le coût humain et financier de l'UFC à partir de données publiques. Développé avec D3.js, Three.js et GSAP."},"en":{"t":"VisualDon: a UFC data visualization | Luka Stojanovic","d":"An interactive site on the human and financial cost of the UFC, built from public data with D3.js, Three.js and GSAP."}},
    hook:{fr:"Ce que le spectacle ne montre pas.",en:"What the spectacle doesn't show."},
    client:{fr:"Projet de groupe, HEIG-VD",en:"Group project, HEIG-VD"},
    logo:"assets/img/logos/heig.svg",logoName:"HEIG-VD",hoverLogo:"assets/img/logos/heig.svg",
    role:{fr:"Visualisation de données & développement",en:"Data visualization & development"},
    catLabel:{fr:"Visualisation de données · Développement",en:"Data visualization · Development"},
    tags:{fr:["Visualisation de données","D3.js","Three.js"],en:["Data visualization","D3.js","Three.js"]},
    teaser:{fr:"Un site interactif sur le coût humain et financier de l'UFC.",en:"An interactive site on the human and financial cost of the UFC."},
    lead:{fr:"Blessures, carrières et argent : un récit interactif derrière le spectacle du MMA.",en:"Injuries, careers and money: an interactive story behind the MMA spectacle."},
    context:{fr:"Projet de visualisation de données réalisé à la HEIG-VD autour d'une question : que coûte vraiment l'UFC à ses combattants ? À partir de données publiques (statistiques de combats, suspensions médicales, bourses), le site raconte au fil du défilement le parcours d'un combattant, montre l'origine des athlètes, propose une carte anatomique des blessures et met en regard la santé et l'argent. Développé avec D3.js, Three.js, GSAP et Scrollama.",en:"A data visualization project built at HEIG-VD around one question: what does the UFC really cost its fighters? Using public data (fight statistics, medical suspensions, purses), the site follows a fighter's career as you scroll, shows where athletes come from, explores an anatomical injury map and sets health against money. Built with D3.js, Three.js, GSAP and Scrollama."},
    did:{fr:["Récit interactif : la chronologie d'une carrière","Carte mondiale des origines des combattants","Carte anatomique interactive des blessures","Comparaison de carrières et analyse des bourses","Développement : D3.js, Three.js, GSAP et Scrollama"],en:["Interactive story: the timeline of a career","World map of fighters' origins","Interactive anatomical injury map","Career comparison and purse analysis","Development: D3.js, Three.js, GSAP and Scrollama"]},
    galleryGroups:[
      {kind:"device",title:{fr:"Le récit interactif",en:"The interactive story"},
       items:[{src:"assets/img/vdon/parcours.webp",mock:"assets/img/vdon/parcours-mock.webp",cap:{fr:"Chronologie d'une carrière",en:"Career timeline"}},
              {src:"assets/img/vdon/origines.webp",mock:"assets/img/vdon/origines-mock.webp",cap:{fr:"Carte globale des origines",en:"Global origins map"}},
              {src:"assets/img/vdon/anatomie.webp",mock:"assets/img/vdon/anatomie-mock.webp",cap:{fr:"Carte anatomique des blessures",en:"Anatomical injury map"}}]},
      {kind:"device",title:{fr:"Les chiffres",en:"The figures"},
       items:[{src:"assets/img/vdon/faceaface.webp",mock:"assets/img/vdon/faceaface-mock.webp",cap:{fr:"Comparer deux combattants",en:"Compare two fighters"}},
              {src:"assets/img/vdon/argent.webp",mock:"assets/img/vdon/argent-mock.webp",cap:{fr:"L'argent derrière le spectacle",en:"The money behind the show"}},
              {src:"assets/img/vdon/cout.webp",mock:"assets/img/vdon/cout-mock.webp",cap:{fr:"Le coût humain du ring",en:"The human cost of the ring"}}]}
    ],
    link:{label:{fr:"Voir le projet sur GitHub",en:"View on GitHub"},url:"https://github.com/LukaStojanovic11/Projet-VisualDon"} },

  { id:"streamsense", cover:"assets/img/stream/cover.webp", poster:"assets/img/stream/card.webp", year:"2025", cats:["ux","dataviz"],
    theme:{bg:"#1B1030",fg:"#F3EDE4"},
    title:{fr:"StreamSense, l'assistant du spectateur Twitch",en:"StreamSense, the Twitch viewer's assistant"},name:"StreamSense",
    seo:{"fr":{"t":"StreamSense : analyse des données Twitch | Luka Stojanovic","d":"Concept de plateforme pour les spectateurs Twitch : habitudes de visionnage, moments clés détectés dans le chat et recommandations selon l'ambiance."},"en":{"t":"StreamSense: Twitch data analytics | Luka Stojanovic","d":"A platform concept for Twitch viewers: viewing habits, key moments detected in the chat and recommendations based on mood."}},
    hook:{fr:"Choisir un stream selon son humeur.",en:"Pick a stream to match your mood."},
    client:{fr:"Labo MatchUp, HEIG-VD",en:"MatchUp lab, HEIG-VD"},
    logo:"assets/img/logos/heig.svg",logoName:"HEIG-VD",hoverLogo:"assets/img/logos/heig.svg",
    role:{fr:"Concept, UX/UI & visualisation de données",en:"Concept, UX/UI & data visualization"},
    catLabel:{fr:"UX/UI · Visualisation de données",en:"UX/UI · Data visualization"},
    tags:{fr:["UX/UI","Visualisation de données","Concept produit"],en:["UX/UI","Data visualization","Product concept"]},
    teaser:{"fr":"Une plateforme qui analyse le visionnage et le chat de Twitch pour rendre l'expérience du spectateur plus personnelle.","en":"A platform that analyses Twitch viewing and chat to make the viewer's experience more personal."},
    lead:{"fr":"Voir ses habitudes, retrouver les moments clés et choisir un stream selon son humeur.","en":"See your habits, find the key moments and pick a stream to match your mood."},
    context:{"fr":"Il s'agit d'un projet fictif, réalisé à la HEIG-VD. Sur Twitch, on peut passer des heures à regarder des streams sans savoir combien de temps on y consacre ni ce qu'on préfère vraiment. Les moments forts se perdent dans de longs directs, et les recommandations mettent surtout en avant les chaînes les plus populaires. StreamSense est un concept d'assistant personnel pour les spectateurs. Il montre à chacun ses habitudes de visionnage, signale les moments à ne pas manquer quand le chat s'emballe et propose des streams selon l'humeur du moment. À partir des données de Twitch et des messages du chat, le spectateur sait ce qu'il regarde, retrouve ce qu'il a manqué et choisit plus facilement quoi voir.","en":"This is a fictional project, made at HEIG-VD. On Twitch, you can spend hours watching streams without knowing how much time you give them or what you really prefer. Key moments get lost in long live sessions, and recommendations mostly push the most popular channels. StreamSense is a concept for a personal assistant for viewers. It shows each viewer their watching habits, flags the moments not to miss when the chat takes off, and suggests streams to match their mood. Using Twitch data and chat messages, viewers know what they watch, catch up on what they missed and find it easier to choose what to see next."},
    did:{"fr":["Un dashboard qui montre le temps de visionnage, les catégories préférées et les pics d'activité de la semaine","Un Indice de Pic d'Engagement (IPE) : quand le chat s'emballe, le moment reçoit une note de 1 à 5 et apparaît sur la VOD","Un score d'ambiance : les messages du chat classent chaque stream en calme, joie, excitation, focus ou social","Une page découverte pour trouver un stream selon son humeur","Des profils streamers avec leur ambiance, leurs meilleurs moments et leurs horaires","Une offre gratuite jusqu'à 4 streamers suivis et un premium à 2 CHF par mois"],"en":["A dashboard showing watch time, favourite categories and the week's activity peaks","An Engagement Peak Index (IPE): when the chat takes off, the moment gets a score from 1 to 5 and appears on the VOD","A mood score: chat messages sort each stream into calm, joy, excitement, focus or social","A discovery page to find a stream that matches your mood","Streamer profiles with their mood, top moments and schedule","A free plan for up to 4 followed streamers and a premium plan at CHF 2 a month"]},
    galleryGroups:[
      {kind:"device",title:{fr:"Le dashboard",en:"The dashboard"},
       items:[{src:"assets/img/stream/dashboard.webp",mock:"assets/img/stream/dashboard-mock.webp",cap:{fr:"Analyse personnalisée du visionnage",en:"Personal viewing analysis"}},
              {src:"assets/img/stream/dashboard-bas.webp",mock:"assets/img/stream/dashboard-bas-mock.webp",cap:{fr:"Fréquence, catégories et top streamers",en:"Frequency, categories and top streamers"}}]},
      {kind:"device",title:{fr:"Découvrir et revivre",en:"Discover and replay"},
       items:[{src:"assets/img/stream/decouverte.webp",mock:"assets/img/stream/decouverte-mock.webp",cap:{fr:"Découverte des streams par ambiance",en:"Discover streams by mood"}},
              {src:"assets/img/stream/vod.webp",mock:"assets/img/stream/vod-mock.webp",cap:{fr:"VOD et moments clés détectés par l'IPE",en:"VOD and key moments detected by the IPE"}}]},
      {kind:"device",title:{fr:"Les profils streamers",en:"Streamer profiles"},
       items:[{src:"assets/img/stream/profils.webp",mock:"assets/img/stream/profils-mock.webp",cap:{fr:"Liste des streamers suivis",en:"Followed streamers"}},
              {src:"assets/img/stream/profil.webp",mock:"assets/img/stream/profil-mock.webp",cap:{fr:"Profil et historique d'ambiance",en:"Profile and mood history"}},
              {src:"assets/img/stream/profil-bas.webp",mock:"assets/img/stream/profil-bas-mock.webp",cap:{fr:"Meilleurs moments et habitudes",en:"Top moments and habits"}}]}
    ],
    link:null }
];

/* ============ I18N ============ */
const I18N = {
  fr:{
    "hero.sr":"Luka Stojanovic, designer graphique et UX/UI à Lausanne. ","seo.title":"Luka Stojanovic | Designer graphique et UX/UI à Lausanne","seo.desc":"Portfolio de Luka Stojanovic, étudiant en Ingénierie des médias à la HEIG-VD : design graphique, UX/UI et sites web. Disponible pour un Travail de Bachelor.","nav.work":"Projets","nav.about":"À propos","nav.tb":"Travail de Bachelor","nav.contact":"Contact",
    "tb.title":"Travail de Bachelor","tb.sub":"Brochure et échéances · Ingénierie des médias, HEIG-VD (2026–27).","tb.lead":"Je cherche une <span class='em'>entreprise partenaire</span> et un sujet pour mon Travail de Bachelor, en Suisse romande. Vous avez un projet en design, en UX/UI ou en stratégie digitale ? Écrivez-moi.","tb.eyebrow":"Travail de Bachelor, HEIG-VD 2026–27","tb.download":"Télécharger la brochure (PDF)","tb.meta":"PDF · 100 Ko · Guide officiel HEIG-VD","tb.p1":"Kick-off","tb.p2":"Validation du sujet","tb.p3":"Pré-étude & Travail de Bachelor","tb.p4":"Soutenances",
    "hero.status":"Disponible pour un Travail de Bachelor · Suisse romande",
    "hero.h1a":"Je conçois des",
    "hero.lead":"Je m'appelle Luka Stojanovic et j'étudie l'Ingénierie des médias à la HEIG-VD. Je crée des sites web et des interfaces, de la première idée au résultat final.",
    "hero.f1":"projets","hero.f2":"disciplines","hero.f3":"Ingénierie des médias",
    "hero.btn1":"Voir les projets","hero.btn2":"Me contacter",
    "work.title":"Projets","work.projects":"projets","work.cta":"Voir le projet",
    "filter.all":"Tous","filter.design":"Design graphique","filter.ux":"UX/UI","filter.dev":"Développement","filter.dataviz":"Visualisation de données","filter.strategy":"Stratégie digitale",
    "about.title":"À propos","about.sub":"En bref","about.lead":"Étudiant en médias et design, basé en Suisse romande.",
    "about.bio":"J'étudie l'Ingénierie des médias à la <span class='em'>HEIG-VD</span>, une formation qui réunit design, communication et technique. C'est là que j'aime travailler : entre le visuel et l'interactif.",
    "about.p2":"Mes projets vont de l'identité de marque à la visualisation de données, en passant par l'UX/UI. Ma méthode reste la même : comprendre le besoin, fixer une direction claire, puis soigner chaque détail, de la maquette au site en ligne.",
    "about.k1":"Basé à","about.k2":"Formation","about.v2":"Ingénierie des médias, HEIG-VD","about.k3":"Domaines","about.v3":"Design · UX/UI · Développement","about.k4":"Disponible pour","about.v4":"Travail de Bachelor 2026–27",
    "disc.design.t":"Design graphique","disc.design.p":"Identité, direction artistique, édition, réseaux.",
    "disc.ux.t":"UX / UI","disc.ux.p":"Recherche, wireframing, prototypage Figma, design systems.",
    "disc.strategy.t":"Stratégie digitale","disc.strategy.p":"Business model, e-commerce, SEO, publicité.",
    "savoir.k":"Savoir-faire","outils.k":"Outils","outils.sub":"Les logiciels que j'utilise au quotidien.",
    "wdo.title":"Ce que je fais","wdo.sub":"Quatre domaines, de la première idée au projet fini.","wdo.aria":"Ce que je fais","wdo.count":"compétences",
    "contact.title":"Contact","contact.tag":"Et si on <span class='em'>travaillait</span> ensemble ?","contact.sub":"Je cherche une entreprise en Suisse romande pour mon Travail de Bachelor : 14 semaines, d'avril à août 2027.",
    "contact.write":"Me contacter","contact.cv":"Télécharger mon CV",
    "foot.rights":"Conçu et réalisé à Lausanne","foot.top":"Haut ↑",
    "d.back":"Tous les projets","d.role":"Rôle","d.year":"Année","d.client":"Cadre","d.cat":"Catégorie",
    "d.context":"Contexte","d.did":"Ce que j'ai fait","d.gallery":"Aperçu","d.zoom":"Agrandir","d.next":"Projet suivant","d.view":"Voir le projet"
  },
  en:{
    "hero.sr":"Luka Stojanovic, graphic and UX/UI designer in Lausanne. ","seo.title":"Luka Stojanovic | Graphic and UX/UI designer in Lausanne","seo.desc":"Portfolio of Luka Stojanovic, Media Engineering student at HEIG-VD: graphic design, UX/UI and websites. Available for a Bachelor's thesis.","nav.work":"Work","nav.about":"About","nav.tb":"Bachelor's thesis","nav.contact":"Contact",
    "tb.title":"Bachelor's thesis","tb.sub":"Brochure and deadlines · Media Engineering, HEIG-VD (2026–27).","tb.lead":"I'm looking for a <span class='em'>partner company</span> and a topic for my Bachelor's thesis, in French-speaking Switzerland. Do you have a project in design, UX/UI or digital strategy? Get in touch.","tb.eyebrow":"Bachelor's thesis, HEIG-VD 2026–27","tb.download":"Download the brochure (PDF)","tb.meta":"PDF · 100 KB · Official HEIG-VD guide","tb.p1":"Kick-off","tb.p2":"Topic validation","tb.p3":"Pre-study & Bachelor's thesis","tb.p4":"Oral defenses",
    "hero.status":"Available for a Bachelor's thesis · French-speaking Switzerland",
    "hero.h1a":"I design",
    "hero.lead":"I'm Luka Stojanovic, a Media Engineering student at HEIG-VD. I create websites and interfaces, from the first idea to the finished result.",
    "hero.f1":"projects","hero.f2":"disciplines","hero.f3":"Media Engineering",
    "hero.btn1":"See the work","hero.btn2":"Contact me",
    "work.title":"Projects","work.projects":"projects","work.cta":"View project",
    "filter.all":"All","filter.design":"Graphic design","filter.ux":"UX/UI","filter.dev":"Development","filter.dataviz":"Data visualization","filter.strategy":"Digital strategy",
    "about.title":"About","about.sub":"In short","about.lead":"Media and design student, based in French-speaking Switzerland.",
    "about.bio":"I study Media Engineering at <span class='em'>HEIG-VD</span>, a programme that brings together design, communication and technology. That's where I like to work: between the visual and the interactive.",
    "about.p2":"My projects range from brand identity to data visualization, through UX/UI. My method stays the same: understand the need, set a clear direction, then take care of every detail, from the mockup to the live site.",
    "about.k1":"Based in","about.k2":"Education","about.v2":"Media Engineering, HEIG-VD","about.k3":"Fields","about.v3":"Design · UX/UI · Development","about.k4":"Available for","about.v4":"Bachelor's thesis 2026–27",
    "disc.design.t":"Graphic design","disc.design.p":"Identity, art direction, editorial, social.",
    "disc.ux.t":"UX / UI","disc.ux.p":"Research, wireframing, Figma prototyping, design systems.",
    "disc.strategy.t":"Digital strategy","disc.strategy.p":"Business model, e-commerce, SEO, advertising.",
    "savoir.k":"Skills","outils.k":"Tools","outils.sub":"The software I use every day.",
    "wdo.title":"What I do","wdo.sub":"Four fields, from the first idea to the finished project.","wdo.aria":"What I do","wdo.count":"skills",
    "contact.title":"Contact","contact.tag":"Shall we <span class='em'>work</span> together?","contact.sub":"I'm looking for a company in French-speaking Switzerland for my Bachelor's thesis: 14 weeks, from April to August 2027.",
    "contact.write":"Contact me","contact.cv":"Download my CV (FR)",
    "foot.rights":"Designed and built in Lausanne","foot.top":"Top ↑",
    "d.back":"All projects","d.role":"Role","d.year":"Year","d.client":"Setting","d.cat":"Category",
    "d.context":"Context","d.did":"What I did","d.gallery":"Preview","d.zoom":"Enlarge","d.next":"Next project","d.view":"View project"
  }
};
const ROT = { fr:["sites web","interfaces","identités"], en:["websites","interfaces","identities"] };
const SKILLS = [
  {c:"design",t:{fr:"Identité de marque",en:"Brand identity"}},
  {c:"design",t:{fr:"Direction artistique",en:"Art direction"}},
  {c:"design",t:{fr:"Design visuel",en:"Visual design"}},
  {c:"design",t:{fr:"Édition & print",en:"Editorial & print"}},
  {c:"design",t:{fr:"Illustration",en:"Illustration"}},
  {c:"design",t:{fr:"Réseaux sociaux",en:"Social media"}},
  {c:"ux",t:{fr:"Recherche utilisateurs",en:"User research"}},
  {c:"ux",t:{fr:"Tests utilisateurs",en:"User testing"}},
  {c:"ux",t:{fr:"Architecture de l'information",en:"Information architecture"}},
  {c:"ux",t:{fr:"Wireframing",en:"Wireframing"}},
  {c:"ux",t:{fr:"Prototypage",en:"Prototyping"}},
  {c:"ux",t:{fr:"Design systems",en:"Design systems"}},
  {c:"strategy",t:{fr:"Business model",en:"Business model"}},
  {c:"strategy",t:{fr:"Stratégie de marque",en:"Brand strategy"}},
  {c:"strategy",t:{fr:"SEO & contenu",en:"SEO & content"}},
  {c:"strategy",t:{fr:"E-commerce",en:"E-commerce"}},
  {c:"strategy",t:{fr:"Publicité",en:"Advertising"}}
];
const DISC = [
  {c:"design",t:{fr:"Design graphique",en:"Graphic design"}},
  {c:"ux",t:{fr:"UX / UI",en:"UX / UI"}},
  {c:"strategy",t:{fr:"Stratégie digitale",en:"Digital strategy"}}
];
const WDO = [
  {t:{fr:"Design graphique",en:"Graphic design"},
   d:{fr:"Identité, direction artistique, édition et contenus pour les réseaux.",en:"Identity, art direction, editorial and social content."},
   s:{fr:["Identité de marque","Direction artistique","Édition & print","Réseaux sociaux"],en:["Brand identity","Art direction","Editorial & print","Social media"]}},
  {t:{fr:"UX / UI",en:"UX / UI"},
   d:{fr:"De la recherche au prototype : des interfaces claires et cohérentes.",en:"From research to prototype: clear, consistent interfaces."},
   s:{fr:["Recherche utilisateurs","Wireframing","Prototypage Figma","Design systems"],en:["User research","Wireframing","Figma prototyping","Design systems"]}},
  {t:{fr:"Développement & intégration",en:"Development & integration"},
   d:{fr:"Transformer les maquettes en vrais sites, jusqu'à la visualisation de données.",en:"Turning mockups into real websites, all the way to data visualization."},
   s:{fr:["HTML · CSS · JS","WordPress / WooCommerce","D3.js & Three.js","Responsive"],en:["HTML · CSS · JS","WordPress / WooCommerce","D3.js & Three.js","Responsive"]}},
  {t:{fr:"Stratégie digitale",en:"Digital strategy"},
   d:{fr:"Faire connaître un projet, le vendre et le faire grandir en ligne.",en:"Getting a project known, selling it and growing it online."},
   s:{fr:["Positionnement","E-commerce","SEO & contenu","Publicité"],en:["Positioning","E-commerce","SEO & content","Advertising"]}}
];
const TOOLS = [
  {n:"Figma",l:"assets/img/tools/figma.svg"},
  {n:"Claude",l:"assets/img/tools/claude.svg"},
  {n:"Illustrator",l:"assets/img/tools/illustrator.svg"},
  {n:"Photoshop",l:"assets/img/tools/photoshop.svg"},
  {n:"InDesign",l:"assets/img/tools/indesign.svg"},
  {n:"Premiere Pro",l:"assets/img/tools/premiere.svg"},
  {n:"Canva",l:"assets/img/tools/canva.svg"},
  {n:"WordPress",l:"assets/img/tools/wordpress.svg"},
  {n:"Notion",l:"assets/img/tools/notion.svg"},
  {n:"VS Code",l:"assets/img/tools/vscode.svg"},
  {n:"Miro",l:"assets/img/tools/miro.svg"}
];

/* ============ STATE ============ */
let LANG="fr";
try{const s=localStorage.getItem("ls_lang");if(s==="fr"||s==="en")LANG=s;}catch(e){}
let FILTER="all";
const t=k=>(I18N[LANG]&&I18N[LANG][k]!=null)?I18N[LANG][k]:k;
const tv=o=>o?(o[LANG]!=null?o[LANG]:o.fr):"";

/* ============ RENDER PROJECTS ============ */
const projectsEl=document.getElementById("projects");
let projList=[];
function renderProjects(){
  const list=PROJECTS.filter(p=>FILTER==="all"||p.cats.includes(FILTER));
  document.getElementById("workCount").textContent=list.length;
  projList=list;
  const n=list.length;
  projectsEl.innerHTML=list.map((p,i)=>{
    const feat = (i===0) || (i===n-1 && (n-1)%2===1);
    const cls = feat ? "feat" : "";
    const gi=PROJECTS.indexOf(p);
    return `
    <a class="project rv pstack ${cls}${p.hoverLogo?" hl":""}" href="/projets/${p.id}/" data-id="${p.id}" data-d="${i*110}" aria-label="${tv(p.title)}" style="--si:${i};--pcard:${p.theme.bg}">
      <div class="pmedia">
        <img src="${p.poster||p.cover}" alt="${tv(p.title)}" loading="lazy" decoding="async">
        <span class="pnum" aria-hidden="true">${String(gi+1).padStart(2,"0")}</span>
        <span class="pgo" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        ${p.hoverLogo?`<span class="phlogo" aria-hidden="true"><img src="${p.hoverLogo}" alt="" loading="lazy"></span>`:""}
      </div>
      <div class="pbody">
      <h3 class="phook">${tv(p.hook)}</h3>
      <div class="pfoot">
        <div class="pfoot-txt">
          <span class="pfoot-sub">${p.logo?"":`<span class="pclient">${tv(p.client)}</span>`}<span class="pyr">${p.year}</span><span class="pcatl">${tv(p.catLabel)}</span></span>
          ${(p.logo&&!p.hoverLogo)?`<span class="pdiv" aria-hidden="true"></span><img class="plogo" src="${p.logo}" alt="${p.logoName||tv(p.client)}" loading="lazy">`:""}
        </div>
        <span class="plink"><span class="plink-t">${t("work.cta")}</span><svg class="plink-ar" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </div>
      </div>
    </a>`;}).join("");
  observeReveal();
  layoutProjects();
}

/* ===== projects motion: WebGL gallery, vertical deck when WebGL or motion is unavailable ===== */
let projRAF=null,projApply=null,projBound=false;
function bindProjScroll(){
  if(projBound) return;
  const on=()=>{if(projRAF==null&&projApply)projRAF=requestAnimationFrame(()=>{projRAF=null;if(projApply)projApply();});};
  window.addEventListener("scroll",on,{passive:true});
  window.addEventListener("resize",on,{passive:true});
  projBound=true;
}
function clearCardStyles(){projectsEl.querySelectorAll(".project").forEach(c=>{c.style.transform="";c.style.filter="";c.style.zIndex="";c.style.opacity="";c.style.pointerEvents="";});}
/* project logos: one tone, compact marks, the school always comes last */
const LOGO={heig:["heig.svg#svgView(viewBox(0 0 690 493))","HEIG-VD"],hug:["hug.svg#svgView(viewBox(0 0 730 323))","Hôpitaux Universitaires de Genève"],etoile:["etoile.svg","L'Étoile Blanche"]};
const LOGO_PARTNER={pulse:"hug",etoile:"etoile"};
function capLogos(p){
  const logo=k=>`<img class="lg-${k}" src="assets/img/logos/${LOGO[k][0]}" alt="${LOGO[k][1]}" loading="lazy" decoding="async">`,x=LOGO_PARTNER[p.id];
  return `<span class="gal-cap-logos">${x?logo(x)+'<i aria-hidden="true">×</i>':""}${logo("heig")}</span>`;
}
/* ===== projects gallery: WebGL stage — three words play on their own, then the projects move with scroll, drag, side-wheel or arrows ===== */
const GAL=(()=>{
  const root=document.getElementById("gal"),stage=root.querySelector(".gal-stage"),cv=root.querySelector(".gal-cv"),capsEl=document.getElementById("galCaps");
  const words=[...root.querySelectorAll(".gal-words span")],prev=root.querySelector(".gal-prev"),next=root.querySelector(".gal-next");
  const SEG={step:.46},WORD=420,LAND=620,D=7,FOV=35*Math.PI/180,NX=16,NY=1,SP=2.85,PX=Math.tan(FOV/2)*D;
  const TEX=new Map();
  let posX=0,curV=0,dirty=true,uploads=[],saved=null,gl=null,U={},idx=0,cards=[],n=0,M={},caps=[],raf=null,cur=0,last=0,introT=null,drawn=[],P=null,asp=1,fit=1,failed=false,bound=false,drag=null,snapT=null;

  const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),smooth=v=>{v=clamp(v);return v*v*(3-2*v);},lerp=(a,b,t)=>a+(b-a)*t;
  const qMul=(a,b)=>[a[3]*b[0]+a[0]*b[3]+a[1]*b[2]-a[2]*b[1],a[3]*b[1]-a[0]*b[2]+a[1]*b[3]+a[2]*b[0],a[3]*b[2]+a[0]*b[1]-a[1]*b[0]+a[2]*b[3],a[3]*b[3]-a[0]*b[0]-a[1]*b[1]-a[2]*b[2]];
  const qRot=(x,y,z,a)=>{const s=Math.sin(a/2);return[x*s,y*s,z*s,Math.cos(a/2)];};
  const mat=(q,p)=>{const[x,y,z,w]=q;return new Float32Array([1-2*(y*y+z*z),2*(x*y+z*w),2*(x*z-y*w),0,2*(x*y-z*w),1-2*(x*x+z*z),2*(y*z+x*w),0,2*(x*z+y*w),2*(y*z-x*w),1-2*(x*x+y*y),0,p[0],p[1],p[2],1]);};

  const VS=`#version 300 es
in vec2 a;uniform mat4 uP,uM;uniform vec2 uS;uniform float uK;out vec2 vUv;
void main(){vUv=a;vec2 p=(a-.5)*uS;float z=0.;
if(abs(uK)>.0001){float t=p.x*uK;z=(cos(t)-1.)/uK;p.x=sin(t)/uK;}
gl_Position=uP*uM*vec4(p,z,1.);}`;
  const FS=`#version 300 es
precision highp float;in vec2 vUv;uniform sampler2D uT;uniform vec4 uC;uniform vec2 uB;uniform float uO;out vec4 o;
void main(){vec2 uv=uC.xy+vUv*uC.zw;vec4 c=texture(uT,uv,-.6);if(uB.x!=0.||uB.y!=0.){c+=texture(uT,uv+uB)+texture(uT,uv-uB)+texture(uT,uv+uB*.5)+texture(uT,uv-uB*.5);c/=5.;}
vec3 r=c.rgb+(1.-c.a)*vec3(.97,.96,.94);if(!gl_FrontFacing)r*=.58;o=vec4(r*uO,uO);}`;

  function init(){
    gl=cv.getContext("webgl2",{alpha:true,antialias:(devicePixelRatio||1)<1.5,premultipliedAlpha:true,powerPreference:"high-performance"});
    if(!gl) return false;
    const sh=(type,src)=>{const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);return s;};
    const pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,VS));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,FS));gl.linkProgram(pr);
    if(!gl.getProgramParameter(pr,gl.LINK_STATUS)){gl=null;return false;}
    gl.useProgram(pr);
    ["uP","uM","uS","uK","uT","uC","uB","uO"].forEach(k=>U[k]=gl.getUniformLocation(pr,k));
    const v=[],ix=[];
    for(let y=0;y<=NY;y++)for(let x=0;x<=NX;x++)v.push(x/NX,y/NY);
    for(let y=0;y<NY;y++)for(let x=0;x<NX;x++){const a=y*(NX+1)+x,b=a+1,c=a+NX+1,d=c+1;ix.push(a,b,c,b,d,c);}
    gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer());gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(v),gl.STATIC_DRAW);
    const loc=gl.getAttribLocation(pr,"a");gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,gl.createBuffer());gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(ix),gl.STATIC_DRAW);idx=ix.length;
    gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LEQUAL);gl.enable(gl.BLEND);gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);gl.clearColor(0,0,0,0);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true);
    cv.addEventListener("webglcontextlost",e=>{e.preventDefault();failed=true;layoutProjects();});
    return true;
  }
  function loadTex(src){
    if(TEX.has(src)) return TEX.get(src);
    const t={tex:null,ar:1};TEX.set(src,t);
    const im=new Image();
    const upload=()=>{
      // large sources are scaled down first, and uploaded one per frame so scrolling never stalls
      const big=Math.max(im.naturalWidth,im.naturalHeight);let px=im;
      if(big>2048){const c=document.createElement("canvas"),z=2048/big;c.width=Math.round(im.naturalWidth*z);c.height=Math.round(im.naturalHeight*z);c.getContext("2d").drawImage(im,0,0,c.width,c.height);px=c;}
      t.tex=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,t.tex);
      gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,px);gl.generateMipmap(gl.TEXTURE_2D);
      gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
      const an=gl.getExtension("EXT_texture_filter_anisotropic");
      if(an)gl.texParameterf(gl.TEXTURE_2D,an.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(8,gl.getParameter(an.MAX_TEXTURE_MAX_ANISOTROPY_EXT)));
      t.ar=im.naturalWidth/im.naturalHeight;
    };
    im.decoding="async";im.src=src;
    im.decode().then(()=>uploads.push(upload)).catch(()=>{});
    return t;
  }
  function resize(){
    const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h||!gl) return;
    const dpr=Math.max(1,Math.min(devicePixelRatio||1,2,Math.sqrt(5e6/(w*h))));
    cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);gl.viewport(0,0,cv.width,cv.height);
    asp=w/h;fit=clamp(asp/1.15,.5,1);
    const f=1/Math.tan(FOV/2),nr=.1,fr=140;
    P=new Float32Array([f/asp,0,0,0,0,f,0,0,0,0,(fr+nr)/(nr-fr),-1,0,0,2*fr*nr/(nr-fr),0]);
    gl.uniformMatrix4fv(U.uP,false,P);
    dirty=true;
  }
  const narrow=()=>asp<.9,phoneW=()=>2*PX*asp*.78;
  const sizeOf=t=>{
    if(narrow()){const a=clamp(t.ar,.85,1.36),w=Math.min(phoneW(),2.55*a);return{w,h:w/a,a};}
    const a=clamp(t.ar,.68,1.6),h=Math.sqrt(6.4/a)*fit;return{w:h*a,h,a};
  };
  const spacing=()=>narrow()?phoneW()+.12:SP*fit,lift=()=>narrow()?.72:.26;
  const cropOf=(t,a)=>t.ar>a?[.5-a/t.ar/2,0,a/t.ar,1]:[0,1-t.ar/a,1,t.ar/a];
  const index=x=>clamp(x/SEG.step,0,n-1);

  function poses(x,vel,el){
    const out=[],a=index(x),sp=spacing(),CY=lift(),w2=2*Math.PI/3.6,blurX=clamp(vel*.012,-.035,.035),half=PX*asp*1.6;
    cards.forEach((c,i)=>{
      const m=smooth((el-WORD*2.6-c.rnd*220)/LAND);if(m<=0) return;
      const t=loadTex(c.src);if(!t.tex) return;
      const{w,h,a:ca}=sizeOf(t),d=c.d-a;
      if(Math.abs(d)*sp-w/2>half) return;
      const rp=[d*sp,CY,-D+1.6*(Math.cos(w2*d)-1)],p0=[rp[0],CY,-34],p=p0.map((v,j)=>lerp(v,rp[j],m));
      const q=qMul(qRot(0,1,0,Math.atan(1.6*w2*Math.sin(w2*d)/sp)),qRot(0,1,0,(1-m)*4.2));
      const al=smooth(m*6);
      if(al>.01) out.push({t,w,h,c:cropOf(t,ca),m:mat(q,p),z:p[2],k:.03*m,al,bx:Math.abs(blurX)<.002?0:blurX*m,by:0,id:c.id});
    });
    return out.sort((p,q)=>p.z-q.z);
  }
  const fade=(el,v)=>{if(el._o!==v){el._o=v;el.style.opacity=v;}};
  function overlays(a,el){
    const ui=smooth((el-WORD*3.5)/280),act=Math.round(a),u=ui.toFixed(2);
    if(stage._u!==u){stage._u=u;stage.style.setProperty("--ui",u);stage.classList.toggle("ui",ui>.5);}
    caps.forEach((c,i)=>{
      const o=i===act?ui*clamp(1.5-Math.abs(a-i)*5):0;
      fade(c,o.toFixed(2));c.classList.toggle("on",o>.5);
    });
    words.forEach((w,j)=>{
      const l=el/WORD-j;
      fade(w,(l<=0||l>=1?0:smooth(l/.22)*(1-smooth((l-.72)/.28))).toFixed(2));
    });
    prev.disabled=act<=0;next.disabled=act>=n-1;
  }
  function frame(now){
    raf=requestAnimationFrame(frame);
    if(!P) return;
    const dt=Math.min(.05,(now-last)/1000||.016);last=now;
    if(uploads.length){uploads.shift()();dirty=true;}
    const top=root.getBoundingClientRect().top,H=stage.offsetHeight||1;
    if(introT==null&&top<=H*.5){introT=top<-H*.05?-1e9:now;dirty=true;try{sessionStorage.setItem("luka-words","1");}catch(e){}}
    const el=introT==null?0:now-introT,intro=introT!=null&&el<WORD*3.5+LAND+400;
    // critically damped follow: one smooth curve, tighter under a finger or the mouse
    const om=2/(drag&&drag.moved&&!drag.done?.06:.17),z=om*dt,ex=1/(1+z+.48*z*z+.235*z*z*z),ch=cur-posX,tmp=(curV+om*ch)*dt;
    curV=(curV-om*tmp)*ex;cur=posX+(ch+tmp)*ex;
    const moving=Math.abs(cur-posX)>.0003||Math.abs(curV)>.002;
    if(!moving){cur=posX;curV=0;}
    if(!moving&&!intro&&!dirty) return;
    dirty=moving||intro;
    overlays(index(cur),el);
    drawn=poses(cur,curV/SEG.step,el);
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    for(const d of drawn){
      gl.bindTexture(gl.TEXTURE_2D,d.t.tex);
      gl.uniformMatrix4fv(U.uM,false,d.m);gl.uniform2f(U.uS,d.w,d.h);gl.uniform1f(U.uK,d.k);
      gl.uniform4fv(U.uC,d.c);gl.uniform2f(U.uB,d.bx,d.by);gl.uniform1f(U.uO,d.al);
      gl.drawElements(gl.TRIANGLES,idx,gl.UNSIGNED_SHORT,0);
    }
  }
  function hit(e){
    const r=cv.getBoundingClientRect(),mx=(e.clientX-r.left)/r.width*2-1,my=1-(e.clientY-r.top)/r.height*2;
    for(let i=drawn.length-1;i>=0;i--){
      const d=drawn[i];if(d.al<.5) continue;
      const pts=[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]].map(([u,v])=>{
        const x=u*d.w,y=v*d.h,m=d.m,cx=m[0]*x+m[4]*y+m[12],cy=m[1]*x+m[5]*y+m[13],cz=m[2]*x+m[6]*y+m[14];
        return[cx*P[0]/-cz,cy*P[5]/-cz,cz];
      });
      if(pts.some(p=>p[2]>-.2)) continue;
      const sgn=pts.map((p,j)=>{const q=pts[(j+1)%4];return(q[0]-p[0])*(my-p[1])-(q[1]-p[1])*(mx-p[0]);});
      if(sgn.every(s=>s>=0)||sgn.every(s=>s<=0)) return d.id;
    }
    return null;
  }
  // projects only ever move sideways: vertical scroll always belongs to the page
  const setX=x=>{posX=clamp(x,0,M.C);};
  const go=i=>setX(i*SEG.step);
  const nearest=()=>Math.round(posX/SEG.step);
  const onStage=()=>{const r=stage.getBoundingClientRect();return stage.classList.contains("ui")&&r.top<innerHeight*.5&&r.bottom>innerHeight*.5;};
  function bind(){
    if(bound) return;bound=true;
    try{if(sessionStorage.getItem("luka-words"))introT=-1e9;}catch(e){}
    new ResizeObserver(resize).observe(stage);
    new IntersectionObserver(es=>es.forEach(en=>{
      if(en.isIntersecting){
        // WebGL and the images only start when the gallery gets close
        if(!gl){if(!init()){failed=true;layoutProjects();return;}resize();}
        cards.forEach(c=>loadTex(c.src));
        if(raf==null){last=performance.now();raf=requestAnimationFrame(frame);}
      }
      else if(raf!=null){cancelAnimationFrame(raf);raf=null;}
    }),{rootMargin:"60% 0px 60% 0px"}).observe(root);
    cv.addEventListener("pointerdown",e=>{if(stage.classList.contains("ui")){drag={x:e.clientX,from:posX,moved:false};cv.setPointerCapture(e.pointerId);}});
    cv.addEventListener("pointermove",e=>{
      if(!drag||drag.done){cv.style.cursor=hit(e)?"pointer":stage.classList.contains("ui")?"grab":"";return;}
      const dx=e.clientX-drag.x;if(Math.abs(dx)>6)drag.moved=true;
      if(drag.moved){cv.style.cursor="grabbing";setX(drag.from-dx/(stage.offsetHeight*spacing()/(2*PX))*SEG.step);}
    });
    const release=()=>{if(!drag) return;const moved=drag.moved;drag=moved?{moved:true,done:true}:null;if(moved){go(nearest());cv.style.cursor="grab";}};
    cv.addEventListener("pointerup",release);cv.addEventListener("pointercancel",release);
    cv.addEventListener("click",e=>{
      if(drag&&drag.moved){drag=null;return;}
      const id=hit(e),a=id&&capsEl.querySelector(`[data-id="${id}"]`);if(a)a.click();
    });
    stage.addEventListener("wheel",e=>{
      if(!stage.classList.contains("ui")||Math.abs(e.deltaX)<=Math.abs(e.deltaY)) return;
      e.preventDefault();setX(posX+e.deltaX*1.5/stage.offsetHeight);clearTimeout(snapT);snapT=setTimeout(()=>go(nearest()),170);
    },{passive:false});
    prev.addEventListener("click",()=>go(nearest()-1));
    next.addEventListener("click",()=>go(nearest()+1));
    document.addEventListener("keydown",e=>{
      if((e.key!=="ArrowLeft"&&e.key!=="ArrowRight")||!onStage()||document.body.classList.contains("route-detail")) return;
      e.preventDefault();go(nearest()+(e.key==="ArrowRight"?1:-1));
    });
    capsEl.addEventListener("click",()=>{saved=scrollY;});
    capsEl.addEventListener("focusin",e=>{
      const a=e.target.closest(".gal-cap");if(a) go(+a.dataset.i);
    });
  }
  return {
    restore(){if(saved!=null){window.scrollTo({top:saved,behavior:"instant"});saved=null;}},
    first(){go(0);},
    supported(){
      if(failed||location.protocol==="file:"||matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
      return !!window.WebGL2RenderingContext;
    },
    set(list){
      n=Math.max(1,list.length);
      cards=list.map((p,i)=>({src:p.poster||p.cover,id:p.id,d:i,rnd:(i*.37)%1}));
      M.B=0;M.C=(n-1)*SEG.step;
      posX=clamp(posX,0,M.C);
      capsEl.innerHTML=list.map((p,i)=>`<a class="gal-cap" href="/projets/${p.id}/" data-id="${p.id}" data-i="${i}"><span class="gal-cap-txt"><h3 class="gal-cap-hook">${tv(p.hook)}</h3><span class="gal-cap-sub">${p.name} · ${tv(p.catLabel)} · ${p.year}</span></span>${capLogos(p)}<span class="gal-cap-go"><span class="gal-cap-cta">${t("work.cta")}</span><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>`).join("");
      caps=[...capsEl.children];dirty=true;
      if(gl)cards.forEach(c=>loadTex(c.src));
      bind();resize();
    }
  };
})();
function layoutProjects(){
  const gal=GAL.supported();
  document.getElementById("gal").hidden=!gal;
  projectsEl.style.display=gal?"none":"";
  projectsEl.classList.toggle("vmode",!gal);
  clearCardStyles();
  if(gal){projApply=null;GAL.set(projList);}else setupVstack();
}
/* sections after the gallery: jump there instead of flying through it */
document.addEventListener("click",e=>{
  const a=e.target.closest('a[href="#apropos"],a[href="#tb"],a[href="#contact"]');
  if(!a||document.body.classList.contains("route-detail")) return;
  const el=document.querySelector(a.getAttribute("href"));if(!el) return;
  e.preventDefault();el.scrollIntoView({behavior:"instant"});history.pushState(null,"",a.getAttribute("href"));
});
function setupVstack(){
  const cards=[...projectsEl.querySelectorAll(".project")];
  if(matchMedia("(prefers-reduced-motion: reduce)").matches){projApply=null;return;}
  cards.forEach((c,i)=>c.style.zIndex=String(i+1));
  projApply=()=>{
    const first=cards[0]; if(!first) return;
    const T=parseFloat(getComputedStyle(first).top)||100;
    cards.forEach((card,i)=>{
      const next=cards[i+1];
      if(!next){card.style.transform="translateY(0) scale(1)";card.style.filter="";return;}
      const gap=next.getBoundingClientRect().top - T;
      const range=Math.min(window.innerHeight*0.55, card.offsetHeight*0.75);
      const p=Math.max(0,Math.min(1, 1 - gap/range));
      card.style.transform=`translateY(${(-18*p).toFixed(1)}px) scale(${(1-0.085*p).toFixed(4)})`;
      card.style.filter=`brightness(${(1-0.26*p).toFixed(3)})`;
    });
  };
  bindProjScroll(); projApply();
}

/* ============ RENDER SKILLS ============ */
function renderSkills(){
  const d3=document.getElementById("disc3"), to=document.getElementById("toolsList");
  if(d3){
    d3.innerHTML=DISC.map(disc=>{
      const items=SKILLS.filter(s=>s.c===disc.c);
      return `<div class="dcol" data-c="${disc.c}">
        <h4>${tv(disc.t)}</h4>
        <ul class="sklist">${items.map(s=>`<li>${tv(s.t)}</li>`).join("")}</ul>
      </div>`;
    }).join("");
  }
  const tl=document.getElementById("toolsLogos");
  if(tl){
    // tools sit in a diamond at the centre of a dim tile wall; side columns drop out on phones
    const order=[1,2,3,4,5,0,6,7,8,9,10];let k=0,cells="";
    for(let r=0;r<5;r++)for(let c=0;c<9;c++){
      const on=(r===2&&c>=2&&c<=6)||((r===1||r===3)&&c>=3&&c<=5),x=on?TOOLS[order[k]]:null;
      cells+=`<span class="tg-t${on?" on":""}${c<2||c>6?" tg-e":""}"${on?' tabindex="0"':""} style="--dl:${Math.round(Math.hypot(c-4,(r-2)*1.3)*75)}ms;--gd:${(k*1.3).toFixed(1)}s">${on?`<img src="${x.l}" alt="" loading="lazy"><b>${x.n}</b>`:""}</span>`;
      if(on)k++;
    }
    const a11y=`<ul class="sr-only">${TOOLS.map(x=>`<li>${x.n}</li>`).join("")}</ul>`;
    tl.classList.add("tools-grid","rv");tl.innerHTML=cells+a11y;
    if(!tl.dataset.bound){
      tl.dataset.bound="1";
      tl.addEventListener("pointermove",e=>{const r=tl.getBoundingClientRect();tl.style.setProperty("--mx",(e.clientX-r.left)+"px");tl.style.setProperty("--my",(e.clientY-r.top)+"px");},{passive:true});
    }
    observeReveal();
  }
}

/* ============ WHAT I DO · wheel (built from SKILLS + DISC) ============ */
const WHEEL_G={
  design:'<circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3.6" fill="currentColor"/>',
  ux:'<rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><rect x="7" y="7" width="10" height="5" rx="1.2" fill="currentColor"/>',
  strategy:'<path d="M3 21 21 3M10 3h11v11" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>'
};
const WDO_VIZ=["<svg viewBox=\"0 0 480 200\" fill=\"none\"><text class=\"v1-aa\" x=\"26\" y=\"152\">Aa</text><line class=\"v-h\" x1=\"204\" y1=\"158\" x2=\"244\" y2=\"30\"/><line class=\"v-h\" x1=\"436\" y1=\"50\" x2=\"352\" y2=\"182\"/><path class=\"v1-p\" pathLength=\"100\" d=\"M204 158C244 30 352 182 436 50\"/><rect class=\"v1-a\" x=\"199\" y=\"153\" width=\"10\" height=\"10\"/><rect class=\"v1-a\" x=\"431\" y=\"45\" width=\"10\" height=\"10\"/><circle class=\"v1-d\" cx=\"244\" cy=\"30\" r=\"4\"/><circle class=\"v1-d\" cx=\"352\" cy=\"182\" r=\"4\"/><g class=\"v1-sw\"><circle cx=\"396\" cy=\"164\" r=\"15\"/><circle cx=\"420\" cy=\"164\" r=\"15\"/><circle cx=\"444\" cy=\"164\" r=\"15\"/></g><circle class=\"v1-pen\" r=\"6\"/></svg>","<svg viewBox=\"0 0 480 200\" fill=\"none\"><rect class=\"v2-f\" x=\"64\" y=\"14\" width=\"352\" height=\"210\" rx=\"14\"/><circle class=\"v-s\" cx=\"84\" cy=\"33\" r=\"4\"/><circle class=\"v-s\" cx=\"98\" cy=\"33\" r=\"4\"/><circle class=\"v-s\" cx=\"112\" cy=\"33\" r=\"4\"/><rect class=\"v-s\" x=\"84\" y=\"58\" width=\"62\" height=\"8\" rx=\"4\"/><rect class=\"v-s\" x=\"84\" y=\"76\" width=\"48\" height=\"8\" rx=\"4\"/><rect class=\"v-s\" x=\"84\" y=\"94\" width=\"56\" height=\"8\" rx=\"4\"/><rect class=\"v-s\" x=\"164\" y=\"58\" width=\"150\" height=\"12\" rx=\"6\"/><rect class=\"v2-w\" x=\"164\" y=\"82\" width=\"110\" height=\"62\" rx=\"9\"/><rect class=\"v2-w\" x=\"286\" y=\"82\" width=\"110\" height=\"62\" rx=\"9\"/><rect class=\"v2-c v2-c1\" x=\"164\" y=\"82\" width=\"110\" height=\"62\" rx=\"9\"/><rect class=\"v2-c v2-c2\" x=\"286\" y=\"82\" width=\"110\" height=\"62\" rx=\"9\"/><rect class=\"v2-b\" x=\"164\" y=\"156\" width=\"92\" height=\"28\" rx=\"14\"/><path class=\"v2-cur\" d=\"M0 0v21l5.5-5h8.5z\"/></svg>","<svg viewBox=\"0 0 480 200\" fill=\"none\"><rect class=\"v2-f\" x=\"64\" y=\"14\" width=\"352\" height=\"210\" rx=\"14\"/><text class=\"v3-t\" x=\"372\" y=\"52\">&lt;/&gt;</text><rect class=\"v-s\" x=\"84\" y=\"44\" width=\"12\" height=\"7\" rx=\"3.5\"/><rect class=\"v3-l\" style=\"--i:0\" x=\"108\" y=\"43\" width=\"150\" height=\"9\" rx=\"4.5\"/><rect class=\"v-s\" x=\"84\" y=\"67\" width=\"12\" height=\"7\" rx=\"3.5\"/><rect class=\"v3-l\" style=\"--i:1\" x=\"126\" y=\"66\" width=\"214\" height=\"9\" rx=\"4.5\"/><rect class=\"v-s\" x=\"84\" y=\"90\" width=\"12\" height=\"7\" rx=\"3.5\"/><rect class=\"v3-l v3-a\" style=\"--i:2\" x=\"108\" y=\"89\" width=\"120\" height=\"9\" rx=\"4.5\"/><rect class=\"v-s\" x=\"84\" y=\"113\" width=\"12\" height=\"7\" rx=\"3.5\"/><rect class=\"v3-l\" style=\"--i:3\" x=\"108\" y=\"112\" width=\"176\" height=\"9\" rx=\"4.5\"/><rect class=\"v-s\" x=\"84\" y=\"136\" width=\"12\" height=\"7\" rx=\"3.5\"/><rect class=\"v3-l v3-a\" style=\"--i:4\" x=\"126\" y=\"135\" width=\"96\" height=\"9\" rx=\"4.5\"/><rect class=\"v-s\" x=\"84\" y=\"159\" width=\"12\" height=\"7\" rx=\"3.5\"/><rect class=\"v3-l\" style=\"--i:5\" x=\"108\" y=\"158\" width=\"138\" height=\"9\" rx=\"4.5\"/><g class=\"v3-ok\"><circle cx=\"372\" cy=\"150\" r=\"22\"/><path d=\"M362 150l7 7 13-14\"/></g></svg>","<svg viewBox=\"0 0 480 200\" fill=\"none\"><line class=\"v-h\" x1=\"52\" y1=\"184\" x2=\"428\" y2=\"184\"/><rect class=\"v4-b\" style=\"--i:0\" x=\"68\" y=\"150\" width=\"34\" height=\"34\" rx=\"6\"/><rect class=\"v4-b\" style=\"--i:1\" x=\"128\" y=\"130\" width=\"34\" height=\"54\" rx=\"6\"/><rect class=\"v4-b\" style=\"--i:2\" x=\"188\" y=\"136\" width=\"34\" height=\"48\" rx=\"6\"/><rect class=\"v4-b\" style=\"--i:3\" x=\"248\" y=\"106\" width=\"34\" height=\"78\" rx=\"6\"/><rect class=\"v4-b\" style=\"--i:4\" x=\"308\" y=\"82\" width=\"34\" height=\"102\" rx=\"6\"/><rect class=\"v4-b\" style=\"--i:5\" x=\"368\" y=\"56\" width=\"34\" height=\"128\" rx=\"6\"/><path class=\"v4-l\" pathLength=\"100\" d=\"M85 136L145 116L205 122L265 92L325 68L385 38\"/><circle class=\"v4-d\" cx=\"385\" cy=\"38\" r=\"7\"/></svg>"];
function renderWheel(){
  const host=document.getElementById("wdoRows"); if(!host) return;
  host.innerHTML=WDO.map((d,i)=>`
    <article class="bn">
      <div class="bn-viz" aria-hidden="true">${WDO_VIZ[i]}</div>
      <div class="bn-txt">
        <span class="bn-n">${String(i+1).padStart(2,"0")}</span>
        <h3 class="bn-t">${tv(d.t)}</h3>
        <p class="bn-d">${tv(d.d)}</p>
        <ul class="bn-s">${tv(d.s).map(x=>`<li>${x}</li>`).join("")}</ul>
      </div>
    </article>`).join("");
  if(!host.dataset.bound&&"IntersectionObserver" in window){
    host.dataset.bound="1";
    new IntersectionObserver(es=>es.forEach(e=>host.classList.toggle("play",e.isIntersecting)),{rootMargin:"10% 0px"}).observe(host);
  }
  observeReveal();
}
/* ============ RENDER DETAIL ============ */
const detailEl=document.getElementById("detail");
function renderDetail(id){
  const i=PROJECTS.findIndex(p=>p.id===id);
  if(i<0){goHome();return;}
  const p=PROJECTS[i], next=PROJECTS[(i+1)%PROJECTS.length];
  detailEl.style.setProperty("--pc",p.theme.bg);
  detailEl.style.setProperty("--pc-fg",p.theme.fg);
  const mkBtn=(l,extra)=>`<a class="btn proj${extra}" href="${l.url}" target="_blank" rel="noopener">${tv(l.label)}</a>`;
  const linkBtn=[p.link&&mkBtn(p.link,""),p.link2&&mkBtn(p.link2," ghost")].filter(Boolean).join("");
  detailEl.innerHTML=`
    <a class="back" href="/#travaux" data-go="work"><span class="ar">←</span> ${t("d.back")}</a>
    <h1 data-scramble>${tv(p.title)}</h1>
    <p class="d-lead">${tv(p.lead)}</p>
    <div class="d-meta">
      <div class="cell"><div class="k">${t("d.role")}</div><div class="v">${tv(p.role)}</div></div>
      <div class="cell"><div class="k">${t("d.year")}</div><div class="v">${p.year}</div></div>
      <div class="cell"><div class="k">${t("d.client")}</div><div class="v">${tv(p.client)}</div></div>
      <div class="cell"><div class="k">${t("d.cat")}</div><div class="v">${tv(p.catLabel)}</div></div>
    </div>
    <div class="d-cover"><img src="${p.cover}" alt="${tv(p.title)}" fetchpriority="high"></div>
    <div class="d-body">
      <div class="ctx"><h2>${t("d.context")}</h2><p>${tv(p.context)}</p>${linkBtn?`<div class="d-cta">${linkBtn}</div>`:""}</div>
      <div><h2>${t("d.did")}</h2><ul class="d-list">${tv(p.did).map((x,n)=>`<li><span class="n">${String(n+1).padStart(2,"0")}</span><span class="tx">${x}</span></li>`).join("")}</ul></div>
    </div>
    ${p.galleryGroups&&p.galleryGroups.length?`<section class="d-gallery"><h2>${t("d.gallery")}</h2>${p.galleryGroups.map((g,gi)=>{
      const n=String(gi+1).padStart(2,"0");
      if(g.kind==="mascot"){
        return `<div class="dg-group"><h3 data-n="${n}">${tv(g.title)}</h3><figure class="dg-mascots"><div class="mas">${g.items.map(it=>`<img src="${it.src}" alt="${tv(g.title)}" loading="lazy" decoding="async">`).join("")}</div>${g.cap?`<figcaption>${tv(g.cap)}</figcaption>`:""}</figure></div>`;
      }
      return `<div class="dg-group"><h3 data-n="${n}">${tv(g.title)}</h3><div class="dg-devs">${g.items.map(it=>`<div class="dg-dev" data-full="${it.src}" role="button" tabindex="0" aria-label="${tv(it.cap)}"><div class="dg-devimg"><img src="${it.mock}" alt="" loading="lazy" decoding="async"><span class="dg-zoom">⤢ ${t("d.zoom")}</span></div><p class="dg-cap">${tv(it.cap)}</p></div>`).join("")}</div></div>`;
    }).join("")}</section>`:""}
    <div class="d-next">
      <div class="k">${t("d.next")}</div>
      <a class="dn-card" href="/projets/${next.id}/" data-id="${next.id}" style="--pc:${next.theme.bg}">
        <img src="${next.cover}" alt="" loading="lazy" decoding="async">
        <div class="dn-inner">
          <span class="dn-cat">${tv(next.catLabel)} · ${next.year}</span>
          <p>${tv(next.title)} <span class="ar" aria-hidden="true">→</span></p>
        </div>
      </a>
    </div>`;
}

/* ============ ROUTER ============ */
const parseHash=()=>{const m=location.pathname.match(/\/projets\/([a-z0-9-]+)\/?$/i)||location.hash.match(/^#travaux\/([a-z0-9-]+)$/i);return m?m[1]:null;};
function setMeta(id){
  const p=PROJECTS.find(x=>x.id===id),seo=p&&tv(p.seo);
  document.title=seo?seo.t:t("seo.title");
  document.querySelector('meta[name="description"]').content=seo?seo.d:t("seo.desc");
  document.querySelector('link[rel="canonical"]').href=location.origin+(p?`/projets/${p.id}/`:"/");
}
function route(){
  const id=parseHash();
  if(id){document.body.classList.add("route-detail");renderDetail(id);window.scrollTo(0,0);if(window._scrambleIn)_scrambleIn(detailEl);}
  else{document.body.classList.remove("route-detail");}
  setMeta(id);
}
function goHome(){history.replaceState(null,"","/");document.body.classList.remove("route-detail");setMeta(null);}
window.addEventListener("hashchange",route);
window.addEventListener("popstate",route);

/* ============ LIGHTBOX ============ */
const lb=document.getElementById("lb"),lbImg=document.getElementById("lbImg");
function openLB(src){if(!src)return;lbImg.src=src;lb.hidden=false;document.documentElement.classList.add("nav-open");}
function closeLB(){lb.hidden=true;lbImg.src="";document.documentElement.classList.remove("nav-open");}
document.getElementById("lbX").addEventListener("click",closeLB);
lb.addEventListener("click",e=>{if(e.target===lb)closeLB();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!lb.hidden)closeLB();});
document.addEventListener("click",e=>{const w=e.target.closest(".dg-dev");if(w)openLB(w.dataset.full);});
document.addEventListener("keydown",e=>{const a=document.activeElement;if((e.key==="Enter"||e.key===" ")&&a&&a.classList&&a.classList.contains("dg-dev")){e.preventDefault();openLB(a.dataset.full);}});

/* ============ I18N APPLY ============ */
function applyI18n(){
  document.documentElement.lang=LANG;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const v=t(el.getAttribute("data-i18n"));
    if(/[<&]/.test(v))el.innerHTML=v;else el.textContent=v;
  });
  document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.lang===LANG)));
  renderProjects();
  renderSkills();
  renderWheel();
  startRotator();
  if(document.body.classList.contains("route-detail")){const id=parseHash();if(id)renderDetail(id);}
  setMeta(parseHash());
}
function setLang(l){LANG=l;try{localStorage.setItem("ls_lang",l)}catch(e){}applyI18n();startRotator();}
document.querySelectorAll(".lang button").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));

/* ============ FILTERS ============ */
document.getElementById("filters").addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  FILTER=b.dataset.filter;
  document.querySelectorAll("#filters button").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));
  renderProjects();
  GAL.first();
});


/* ============ MOBILE NAV ============ */
const mnav=document.getElementById("mobileNav"),mbtn=document.getElementById("menuBtn");
mbtn.addEventListener("click",()=>{const o=mnav.classList.toggle("open");mbtn.classList.toggle("open",o);document.documentElement.classList.toggle("nav-open",o);});
mnav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mnav.classList.remove("open");mbtn.classList.remove("open");document.documentElement.classList.remove("nav-open");}));

let animating=false;
function pageTransition(apply){
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduce||animating){apply();return;}
  animating=true;
  const el=document.createElement("div"); el.className="iv ptv"; el.setAttribute("aria-hidden","true");
  el.innerHTML='<p class="iv-mk">'+[..."Luka"].map(c=>'<span class="iv-f0">'+c+'</span>').join("")+'</p>';
  document.body.appendChild(el);
  const ls=[...el.querySelectorAll(".iv-mk span")], seq=["iv-f1","iv-f2","iv-f3","iv-f1","iv-f2","iv-f4"];
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    el.classList.add("show","go");
    ls.forEach((l,k)=>seq.forEach((c,j)=>setTimeout(()=>{l.className=c;},20+k*20+j*18)));
  }));
  setTimeout(()=>{
    apply();
    setTimeout(()=>{ el.classList.add("out"); setTimeout(()=>{ el.remove(); animating=false; },520); },40);
  },240);
}
document.addEventListener("click",(e)=>{
  const a=e.target.closest("a"); if(!a) return;
  const href=a.getAttribute("href")||"";
  const go=a.dataset.go;
  const inDetail=document.body.classList.contains("route-detail");
  if(/^\/projets\/[a-z0-9-]+\/$/i.test(href)&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey){
    e.preventDefault();
    pageTransition(()=>{ history.pushState(null,"",href); route(); });
    return;
  }
  if(go==="home"){
    e.preventDefault();
    pageTransition(()=>{ goHome(); window.scrollTo(0,0); });
    return;
  }
  if(inDetail && (go==="work" || /^\/?#(travaux|apropos|services|tb|contact|top)$/.test(href))){
    e.preventDefault();
    const target=go==="work"?"#travaux":href.replace(/^\//,"");
    pageTransition(()=>{
      document.body.classList.remove("route-detail");
      history.replaceState(null,"","/"+target);
      setMeta(null);
      const id=target.slice(1);
      const el=document.getElementById(id);
      if(el && id!=="top") el.scrollIntoView(); else window.scrollTo(0,0);
      if(go==="work") GAL.restore();
    });
    return;
  }
});

/* ============ HEADER SCROLL ============ */
const head=document.getElementById("head");
addEventListener("scroll",()=>head.classList.toggle("scrolled",scrollY>10),{passive:true});

/* ============ YEAR ============ */
document.getElementById("year").textContent=new Date().getFullYear();

/* ============ REVEAL ON SCROLL ============ */
let io;
function observeReveal(){
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const els=document.querySelectorAll(".rv:not(.in)");
  if(reduce){els.forEach(e=>e.classList.add("in"));return;}
  if(!io){
    io=new IntersectionObserver((ents)=>{
      ents.forEach((en)=>{if(en.isIntersecting){en.target.style.transitionDelay=(en.target.dataset.d||0)+"ms";en.target.classList.add("in");io.unobserve(en.target);}});
    },{threshold:.12,rootMargin:"0px 0px -8% 0px"});
  }
  let i=0;
  els.forEach(e=>{if(!e.dataset.d){e.dataset.d=(i%3)*90;i++;}io.observe(e);});
}

/* ============ ROTATING WORD ============ */
let rotTimer=null;
function startRotator(){
  const host=document.getElementById("rot");if(!host)return;
  const words=ROT[LANG];let idx=0;
  host.textContent=words[0];
  clearInterval(rotTimer);
  if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  rotTimer=setInterval(()=>{
    if(document.hidden||document.body.classList.contains("route-detail"))return;
    host.classList.add("out");
    setTimeout(()=>{
      idx=(idx+1)%words.length;host.textContent=words[idx];
      host.classList.add("in");host.classList.remove("out");
      void host.offsetWidth;
      host.classList.remove("in");
    },300);
  },1500);
}

/* ============ HERO LOAD SEQUENCE ============ */
/* ============ MAGNETIC BUTTONS (tactile, inspired by bencho) ============ */
(function magnetic(){
  if(matchMedia("(pointer:coarse)").matches||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  function bind(el,strength){
    el.addEventListener("mousemove",e=>{
      const r=el.getBoundingClientRect();
      const mx=e.clientX-(r.left+r.width/2), my=e.clientY-(r.top+r.height/2);
      el.style.transform="translate("+(mx*strength).toFixed(1)+"px,"+(my*strength*1.3).toFixed(1)+"px)";
    });
    el.addEventListener("mouseleave",()=>{el.style.transform="";});
  }
  document.querySelectorAll(".hero-actions .btn,.contact-actions .btn,.tb-btn,.to-top").forEach(el=>bind(el,.3));
})();

/* ============ MAGNETIC LETTERS (bencho component) ============ */
(function magneticLetters(){
  if(matchMedia("(pointer:coarse)").matches||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  function letterize(node){
    [...node.childNodes].forEach(n=>{
      if(n.nodeType===3){
        const frag=document.createDocumentFragment();
        [...n.textContent].forEach(ch=>{
          const s=document.createElement("span");s.className="ml";
          s.textContent=ch===" "?" ":ch;
          s.style.cssText="display:inline-block;will-change:transform;transition:transform .4s cubic-bezier(.2,.9,.3,1)";
          frag.appendChild(s);
        });
        node.replaceChild(frag,n);
      } else if(n.nodeType===1) letterize(n);
    });
  }
  document.querySelectorAll("[data-magnetic]").forEach(el=>{
    letterize(el);
    const spans=[...el.querySelectorAll(".ml")];
    let raf=null,ev=null;
    el.addEventListener("mousemove",e=>{ev=e;if(!raf)raf=requestAnimationFrame(run);});
    el.addEventListener("mouseleave",()=>{spans.forEach(s=>s.style.transform="");});
    function run(){raf=null;const max=150;spans.forEach(s=>{const r=s.getBoundingClientRect();const dx=ev.clientX-(r.left+r.width/2),dy=ev.clientY-(r.top+r.height/2);const d=Math.hypot(dx,dy);if(d<max){const f=1-d/max;s.style.transform="translate("+(dx*f*0.32).toFixed(1)+"px,"+(dy*f*0.5).toFixed(1)+"px)";}else s.style.transform="";});}
  });
})();

/* ============ TEXT SCRAMBLE REVEAL (bencho component) ============ */
(function scrambleReveal(){
  if(matchMedia("(prefers-reduced-motion:reduce)").matches||!("IntersectionObserver" in window))return;
  const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#%&*";
  let seen={};try{seen=JSON.parse(sessionStorage.getItem("luka-scr"))||{};}catch(e){}
  function scramble(el){
    const final=el.dataset.final||el.textContent;el.dataset.final=final;
    if(seen[final])return;
    seen[final]=1;try{sessionStorage.setItem("luka-scr",JSON.stringify(seen));}catch(e){}
    const n=final.length;let frame=0;const FRAMES=13;
    // random capitals are wider: hold the height so the page below never jumps
    const box=getComputedStyle(el).display==="inline"?el.parentElement:el;
    box.style.height=box.offsetHeight+"px";
    clearInterval(el._sc);
    el._sc=setInterval(()=>{
      let out="";const rev=frame*n/FRAMES;
      for(let i=0;i<n;i++){
        if(final[i]===" "){out+=" ";continue;}
        if(i<rev)out+=final[i];
        else out+=chars[(Math.random()*chars.length)|0];
      }
      el.textContent=out;frame++;
      if(rev>=n){clearInterval(el._sc);el.textContent=final;box.style.height="";}
    },24);
  }
  const html=document.documentElement;
  const play=el=>{if(html.classList.contains("iv-lock"))setTimeout(()=>{if(html.classList.contains("iv-lock"))play(el);else scramble(el);},60);else scramble(el);};
  const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){play(e.target);io.unobserve(e.target);}});},{threshold:.6});
  document.querySelectorAll("[data-scramble]").forEach(el=>io.observe(el));
  window._scrambleIn=root=>root.querySelectorAll("[data-scramble]").forEach(el=>io.observe(el));
})();

/* ============ INIT ============ */
applyI18n();
route();
observeReveal();
