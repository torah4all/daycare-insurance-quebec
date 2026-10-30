const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const modal = document.querySelector("[data-modal]");
const modalOpen = document.querySelector("[data-modal-open]");
const modalClose = document.querySelector("[data-modal-close]");

const translations = {
  en: {
    brandName: "Daycare Insurance", brandRegion: "Quebec", navWhy: "Why this matters", navHow: "How it works", navContact: "Start a conversation <span>↗</span>", heroPhotoCaption: "A thoughtful start for what matters most",
    heroTitle: "Do you have a daycare<br /><em>in Quebec?</em>",
    heroText: "Do you have a daycare and want competitive pricing for your daycare insurance in Quebec? If yes, please contact us. We are aiming to start a brand-new competitive insurance program for property and liability insurance, specialized for Quebec daycares.",
    heroButton: "Tell us about your daycare <span>→</span>", heroLink: "See how it works <span>↓</span>",
    heroNote: "<strong>A thoughtful starting point.</strong><br />No one-size-fits-all promises. Just a conversation about your needs.",
    whyEyebrow: "Built around your work", whyTitle: "Because childcare<br /><em>is personal.</em>",
    whyText: "Your daycare is more than a business. It is a place families trust and a place you have worked hard to build. The right insurance conversation should respect both.",
    whyMuted: "Coverage options depend on your operation, location, and goals. We’ll start there.",
    audienceEyebrow: "A useful place to begin", audienceTitle: "Let’s talk about <em>your day-to-day.</em>", audienceText: "Every childcare setup has its own rhythm. A good first conversation makes room for that.",
    cardHomeTitle: "Home-based care", cardHomeText: "For providers welcoming children into the place they live and work.",
    cardCenterTitle: "Childcare centers", cardCenterText: "For growing teams, busy rooms, and the many details behind the scenes.",
    cardSpecialTitle: "Specialized care", cardSpecialText: "For programs with unique activities, schedules, or operating needs.",
    processEyebrow: "A simple first step", processTitle: "Clear answers,<br /><em>one conversation at a time.</em>", processButton: "Start your conversation <span>→</span>",
    stepOneTitle: "Share the basics", stepOneText: "Tell us a little about your daycare, what you do, and what you want to understand.",
    stepTwoTitle: "Talk through your needs", stepTwoText: "We’ll identify the questions that matter for your operation and your next step.",
    stepThreeTitle: "Choose with confidence", stepThreeText: "Move forward with information you can feel good about—not a rushed decision.",
    storyEyebrow: "Made for real daycare life", storyTitle: "A clear conversation<br /><em>for a busy place.</em>", storyText: "From the room where children learn to the details that keep your operation moving, your daycare deserves an insurance conversation that starts with how you actually work.", storyLink: "Tell us about your daycare <span>→</span>",
    faqEyebrow: "Questions are welcome", faqTitle: "Good to know <em>before we talk.</em>", faqOneTitle: "What is this program?", faqOneText: "A new competitive insurance program being developed for Quebec daycares, focused on property and liability insurance.",
    faqTwoTitle: "Who is it for?", faqTwoText: "It is intended for daycare owners throughout Quebec. Use the inquiry form to share your daycare details and questions.",
    faqThreeTitle: "How do I get started?", faqThreeText: "Send your daycare name, contact details, and any optional notes through the private inquiry form.",
    contactEyebrow: "Let’s start with the basics", contactTitle: "A few details.<br /><em>A better conversation.</em>", contactText: "Use the form to share a little about your daycare and what you’re looking for. This form sends your inquiry securely without displaying the destination email address on the page.",
    contactServingTitle: "Serving", contactServingText: "All of Quebec", formKicker: "Private inquiry form", formName: "Contact person’s name <span>*</span>", formBusiness: "Daycare name <span>*</span>", formEmail: "Email address <span>*</span>", formPhone: "Phone number <span>*</span>", formLanguage: "Preferred language", formTime: "Preferred contact time <span class=\"optional\">(optional)</span>", formMessage: "Message or notes <span class=\"optional\">(optional)</span>", optional: "(optional)", formConsent: "I’m okay with being contacted about this inquiry. <b>*</b>", formButton: "Send inquiry <span>→</span>", formStatus: "Online delivery is temporarily unavailable. The inquiry service must be connected before messages can be sent.",
    reassuranceEyebrow: "No pressure, no guesswork", reassuranceTitle: "Bring your questions.<br /><em>We’ll take it from there.</em>", reassuranceText: "Submitting this form is a request to connect, not an application or a promise of coverage. The owner should add the final privacy notice, response timing, and any required licensing language before publishing."
  },
  fr: {
    brandName: "Assurance garderies", brandRegion: "Québec", navWhy: "Pourquoi c’est important", navHow: "Comment ça marche", navContact: "Commencer la discussion <span>↗</span>", heroPhotoCaption: "Un départ réfléchi pour ce qui compte le plus",
    heroTitle: "Vous avez une garderie<br /><em>au Québec?</em>",
    heroText: "Vous avez une garderie et vous cherchez un prix concurrentiel pour votre assurance au Québec? Si oui, écrivez-nous. Nous souhaitons lancer un tout nouveau programme d’assurance concurrentiel pour les biens et la responsabilité civile, conçu spécialement pour les garderies québécoises.",
    heroButton: "Parlez-nous de votre garderie <span>→</span>", heroLink: "Voir comment ça marche <span>↓</span>",
    heroNote: "<strong>Un premier pas réfléchi.</strong><br />Pas de promesses universelles : simplement une discussion adaptée à vos besoins.",
    whyEyebrow: "Pensé pour votre réalité", whyTitle: "Parce que la garde d’enfants<br /><em>est une affaire personnelle.</em>",
    whyText: "Votre garderie est bien plus qu’une entreprise. C’est un endroit auquel les familles font confiance et que vous avez bâti avec beaucoup de travail. Votre discussion d’assurance devrait en tenir compte.",
    whyMuted: "Les options de couverture dépendent de votre activité, de votre emplacement et de vos objectifs. Commençons par là.",
    audienceEyebrow: "Un bon point de départ", audienceTitle: "Parlons de <em>votre quotidien.</em>", audienceText: "Chaque milieu de garde a son propre rythme. Une première discussion utile laisse de la place à cette réalité.",
    cardHomeTitle: "Garde en milieu familial", cardHomeText: "Pour les personnes qui accueillent les enfants dans leur lieu de vie et de travail.",
    cardCenterTitle: "Centres de la petite enfance", cardCenterText: "Pour les équipes qui grandissent, les groupes actifs et tous les détails en coulisses.",
    cardSpecialTitle: "Services de garde spécialisés", cardSpecialText: "Pour les programmes qui ont des activités, des horaires ou des besoins particuliers.",
    processEyebrow: "Un premier pas simple", processTitle: "Des réponses claires,<br /><em>une discussion à la fois.</em>", processButton: "Commencer la discussion <span>→</span>",
    stepOneTitle: "Partagez l’essentiel", stepOneText: "Parlez-nous un peu de votre garderie, de vos activités et de ce que vous souhaitez mieux comprendre.",
    stepTwoTitle: "Discutons de vos besoins", stepTwoText: "Nous cernerons les questions importantes pour votre activité et pour la suite.",
    stepThreeTitle: "Décidez en confiance", stepThreeText: "Avancez avec une information claire, sans décision précipitée.",
    storyEyebrow: "Pensé pour la réalité des garderies", storyTitle: "Une discussion claire<br /><em>pour un milieu bien vivant.</em>", storyText: "De la salle où les enfants apprennent aux détails qui font avancer votre activité, votre garderie mérite une discussion d’assurance qui commence par votre réalité.", storyLink: "Parlez-nous de votre garderie <span>→</span>",
    faqEyebrow: "Vos questions sont les bienvenues", faqTitle: "À savoir <em>avant notre discussion.</em>", faqOneTitle: "Quel est ce programme?", faqOneText: "Un nouveau programme d’assurance concurrentiel en préparation pour les garderies du Québec, axé sur les biens et la responsabilité civile.",
    faqTwoTitle: "À qui s’adresse-t-il?", faqTwoText: "Il s’adresse aux propriétaires de garderies partout au Québec. Utilisez le formulaire pour partager vos renseignements et vos questions.",
    faqThreeTitle: "Comment commencer?", faqThreeText: "Envoyez le nom de votre garderie, vos coordonnées et, si vous le souhaitez, quelques notes au moyen du formulaire privé.",
    contactEyebrow: "Commençons par l’essentiel", contactTitle: "Quelques détails.<br /><em>Une meilleure discussion.</em>", contactText: "Utilisez le formulaire pour nous parler un peu de votre garderie et de vos besoins. Votre demande sera envoyée de façon privée, sans afficher l’adresse courriel de destination sur la page.",
    contactServingTitle: "Région desservie", contactServingText: "Partout au Québec", formKicker: "Formulaire de demande privé", formName: "Nom de la personne-ressource <span>*</span>", formBusiness: "Nom de la garderie <span>*</span>", formEmail: "Adresse courriel <span>*</span>", formPhone: "Numéro de téléphone <span>*</span>", formLanguage: "Langue préférée", formTime: "Moment préféré pour être contacté <span class=\"optional\">(facultatif)</span>", formMessage: "Message ou notes <span class=\"optional\">(facultatif)</span>", optional: "(facultatif)", formConsent: "J’accepte d’être contacté au sujet de cette demande. <b>*</b>", formButton: "Envoyer la demande <span>→</span>", formStatus: "L’envoi en ligne est temporairement indisponible. Le service de réception doit être configuré avant l’envoi des messages.",
    reassuranceEyebrow: "Sans pression ni suppositions", reassuranceTitle: "Apportez vos questions.<br /><em>Nous vous guiderons ensuite.</em>", reassuranceText: "L’envoi de ce formulaire est une demande de prise de contact, et non une demande officielle ni une promesse de couverture. Le propriétaire devra ajouter l’avis de confidentialité, le délai de réponse et les mentions de permis requises avant la mise en ligne."
  }
};

function setLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-lang-toggle]").forEach((toggle) => {
    toggle.textContent = language === "en" ? "FR" : "EN";
    toggle.setAttribute("aria-label", language === "en" ? "Passer au français" : "Switch to English");
  });
  localStorage.setItem("daycare-language", language);
}

const savedLanguage = localStorage.getItem("daycare-language") || "en";
setLanguage(savedLanguage);
document.querySelectorAll("[data-lang-toggle]").forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    setLanguage(document.documentElement.lang === "en" ? "fr" : "en");
  });
});

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });
}

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});

document.querySelectorAll("#year").forEach((year) => {
  year.textContent = new Date().getFullYear();
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

function closeModal() {
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = "";
}
modalOpen?.addEventListener("click", () => {
  if (!modal) return;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose?.focus();
});
modalClose?.addEventListener("click", closeModal);
modal?.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!formStatus) return;
  const language = document.documentElement.lang;
  formStatus.textContent = language === "fr"
    ? "L’envoi en ligne est temporairement indisponible. Le service de réception doit être configuré avant l’envoi des messages."
    : "Online delivery is temporarily unavailable. The inquiry service must be connected before messages can be sent.";
});
