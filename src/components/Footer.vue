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
  padding: 60px 0 40px;
  width: 100%;
}

.footer-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 60px; /* Отступ между верхней и нижней частью */
}

/* --- Верхняя секция --- */
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo {
  /* Ограничиваем ширину лого, чтобы оно не было гигантским */
  max-width: 200px; 
}

.footer-nav {
  display: flex;
  gap: 40px;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  transition: color 0.2s ease;
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
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* Тонкая линия разделителя (опционально) */
  padding-top: 30px;
}

.copyright {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

.privacy-link {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.2s ease;
}

.privacy-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

</style>