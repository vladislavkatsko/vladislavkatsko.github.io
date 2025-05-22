
// config.js — здесь можно легко менять контент сайта

window.siteConfig = {
  name: "Владимир Шмонденко",
  subtitle: "Тренировочные программы и питание",
  email: "shmondenkopr@gmail.com",
  programs: [
    {
      title: "MEN WORKOUT",
      duration: "1–8 недель",
      price: "$49 / $79",
      description: "Программа тренировок для мужчин, включая руководство по питанию и доступ к видеоурокам.",
      image: "images/men_workout.jpg"
    },
    {
      title: "MEN PRO WORKOUT",
      duration: "8–16 недель",
      price: "$59 / $89",
      description: "Продвинутая программа для мужчин с акцентом на силовые тренировки и питание.",
      image: "images/men_pro_workout.jpg"
    },
    {
      title: "WOMEN WORKOUT",
      duration: "1–8 недель",
      price: "$49 / $79",
      description: "Программа тренировок для женщин, включая руководство по питанию и доступ к видеоурокам.",
      image: "images/women_workout.jpg"
    }
  ],
  footer: "© 2022–2024 Владимир Шмонденко. Все права защищены."
};
🖼 Изображения
Для изображений вы можете использовать собственные фотографии или бесплатные ресурсы, такие как Unsplash или Pexels, чтобы найти подходящие изображения для вашего сайта.

🛠 Интеграция config.js в сайт
В вашем index.html файле вы можете использовать следующий скрипт для динамической загрузки контента из config.js:

html
Копировать
Редактировать
<script>
  document.addEventListener("DOMContentLoaded", function() {
    const config = window.siteConfig;
    document.getElementById("site-name").textContent = config.name;
    document.getElementById("site-subtitle").textContent = config.subtitle;
    document.getElementById("contact-email").textContent = config.email;

    const programsContainer = document.getElementById("programs");
    config.programs.forEach(program => {
      const programElement = document.createElement("div");
      programElement.className = "program";
      programElement.innerHTML = `
        <img src="${program.image}" alt="${program.title}">
        <h3>${program.title}</h3>
        <p>${program.duration}</p>
        <p>${program.price}</p>
        <p>${program.description}</p>
      `;
      programsContainer.appendChild(programElement);
    });

    document.getElementById("footer").textContent = config.footer;
  });
</script>