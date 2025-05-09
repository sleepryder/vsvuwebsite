console.log("Project page loaded — V.Y. Worldwide.");
// project.js

document.addEventListener("DOMContentLoaded", () => {
    // Заголовки
    const headings = [
      "Research & Projects",
      "Exploratory Artefacts",
      "Visual Theorems",
      "Phenomena Studies",
      "Anomalous Archives",
      "Investigations of Light and Form"
    ];
  
    // Заменить заголовок
    const headingElement = document.querySelector("h2");
    headingElement.textContent = headings[Math.floor(Math.random() * headings.length)];
  
    // Цитаты
    const quotes = [
      "“Light is the handwriting of time.” — Roland Barthes",
      "“Photography is the scientific art of seeing.”",
      "“All the visible world is only light on a surface.”",
      "“Reality is merely an illusion, albeit a very persistent one.” — A. Einstein",
      "“The eye is the most refined lens.” — J. Herschel",
      "“There is geometry in the humming of the strings, there is music in the spacing of the spheres.” — Pythagoras"
    ];
  
    document.querySelectorAll(".quote").forEach(quote => {
      quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    });
  
    // Перемешать проекты
    const container = document.querySelector(".projects");
    const projects = Array.from(container.children);
    const shuffled = projects.sort(() => Math.random() - 0.5);
    shuffled.forEach(p => container.appendChild(p));
  });
  
  function setLang(lang) {
    const texts = {
      en: {
        intro: `Welcome to a journey through the complexities of the universe, optics, mathematical structures, and the algorithms that govern them. Each project is an attempt to demystify the unknown and present knowledge in an accessible way.`,
        footer: `For more information, please visit this page.`,
      },
      sk: {
        intro: `Vitajte na ceste cez zložitosti vesmíru, optiky, matematických štruktúr a algoritmov, ktoré ich riadia. Každý projekt je pokusom demystifikovať neznáme.`,
        footer: `Pre viac informácií navštívte túto stránku.`,
      },
      ru: {
        intro: `Добро пожаловать в путешествие по сложностям вселенной, оптики, математических структур и управляющих ими алгоритмов. Каждый проект — это попытка демистифицировать неизвестное.`,
        footer: `Для получения дополнительной информации, пожалуйста, посетите эту страницу.`,
      }
    };
    
  
    document.querySelector(".intro p").textContent = texts[lang].intro;
    document.querySelector("footer p").textContent = texts[lang].footer;
  }
