<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-logo">
          <FooterLogo class="logo"/> 
        </div>

        <nav class="footer-nav">
          <a v-for="link in navLinks" :key="link.text" :href="link.url" class="nav-link">
            {{ link.text }}
          </a>
        </nav>
      </div>

      <div class="footer-bottom">
        <span class="copyright">© 2026 CVHOLD</span>
        <a href="/privacy-policy" class="privacy-link">Privacy Policy</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FooterLogo from './FooterLogo.vue';

const navLinks = [
  { text: 'Вакансии', url: '/vacancies' },
  { text: 'Организации', url: '/organizations' },
  { text: 'О нас', url: '/about' },
  { text: 'Цены', url: '/pricing' },
]
</script>

<style scoped>
/* Основной контейнер футера */
.site-footer {
  background-color: #14533f;
  color: #ffffff;
  /* Плавное масштабирование вертикальных отступов от 32px до 60px */
  padding: clamp(32px, 5vw, 60px) 0 clamp(24px, 3vw, 40px);
  width: 100%;
}

.footer-container {
  max-width: 1600px;
  margin: 0 auto;
  /* Плавное масштабирование боковых отступов от 16px до 40px */
  padding: 0 clamp(16px, 3vw, 40px);
  display: flex;
  flex-direction: column;
  /* Плавное масштабирование отступа между верхней и нижней частью */
  gap: clamp(32px, 5vw, 60px);
}

/* --- Верхняя секция --- */
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Разрешаем перенос только в крайнем случае, но сохраняем структуру */
  flex-wrap: wrap; 
  gap: clamp(16px, 3vw, 40px);
}

.footer-logo {
  /* Логотип плавно уменьшается от 120px до 200px */
  max-width: clamp(120px, 15vw, 200px); 
  width: 100%;
}

.footer-nav {
  display: flex;
  gap: clamp(16px, 3vw, 40px);
  flex-wrap: wrap;
  justify-content: flex-end;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  /* Шрифт ссылок плавно меняется от 13px до 16px */
  font-size: clamp(13px, 1.2vw, 16px);
  font-weight: 400;
  transition: color 0.2s ease;
  white-space: nowrap; /* Запрещаем разрыв слов внутри ссылки */
}

.nav-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

/* --- Нижняя секция --- */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: clamp(12px, 2vw, 20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: clamp(20px, 3vw, 30px);
}

.copyright {
  /* Шрифт копирайта от 12px до 14px */
  font-size: clamp(12px, 1vw, 14px);
  color: rgba(255, 255, 255, 0.7);
}

.privacy-link {
  font-size: clamp(12px, 1vw, 14px);
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.2s ease;
}

.privacy-link:hover {
  color: #ffffff;
  text-decoration: underline;
}
</style>