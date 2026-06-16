<script setup>
import { RouterLink } from 'vue-router'
import Logo from './Logo.vue'

const menuItems = [
  { id: 'home', label: 'Главная', to: '/' },
  { id: 'about', label: 'О нас', to: '/about' },
  { id: 'services', label: 'Услуги', to: '/services' },
  { id: 'contacts', label: 'Контакты', to: '/contacts' }
]
</script>

<template>
  <header class="header">
    <div class="container">
      <RouterLink to="/cvhold-frontend/" class="logo-link">
        <Logo class="logo" />
      </RouterLink>

      <nav class="desktop-nav" aria-label="Главное меню">
        <RouterLink
          v-for="item in menuItems"
          :key="item.id"
          :to="item.to"
          class="nav-link"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="desktop-actions">
        <button class="btn btn-secondary">Войти</button>
        <button class="btn btn-primary">Регистрация</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 1000;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
}

.container {
  position: relative;
  z-index: 10;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 40px);
  min-height: 140px;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: #fff;
}

.logo-link {
  text-decoration: none;
  display: block;
}

.logo {
  width: clamp(120px, 20vw, 200px);
  flex-shrink: 0;
}

.desktop-nav {
  display: flex;
  gap: 50px;
  flex: 1;
  justify-content: center;
}

.nav-link {
  color: #1E2326;
  font-weight: 600;
  text-decoration: none;
  padding: 6px 0;
  position: relative;
  transition: color 0.18s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #19785A, #0f6b4f);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.28s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #19785A;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  transform: scaleX(1);
}

.desktop-actions {
  display: flex;
  gap: 10px;
}

.btn {
  font-size: 14px;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 10px;
  border: 2px solid #19785A;
  background: transparent;
  color: #19785A;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: linear-gradient(180deg, #19785A, #146a4f);
  color: #fff;
  border-color: transparent;
}

.btn-primary:hover {
  background: linear-gradient(180deg, #146a4f, #0f5a42);
  transform: translateY(-2px);
}

.btn-secondary:hover {
  background: rgba(25, 120, 90, 0.08);
  transform: translateY(-2px);
}

@media (max-width: 1200px) {
  .desktop-nav {
    gap: 30px;
  }
  
  .nav-link {
    font-size: 15px;
  }
  
  .btn {
    padding: 10px 18px;
    font-size: 13px;
  }
}

@media (max-width: 1100px) {
  .desktop-nav,
  .desktop-actions {
    display: none;
  }
  
  .container {
    min-height: 80px;
    padding: 0 20px;
  }
  
  .logo {
    width: clamp(120px, 30vw, 180px);
  }
}

@media (max-width: 768px) {
  .container {
    min-height: 70px;
    padding: 0 16px;
  }
  
  .logo {
    width: clamp(100px, 28vw, 140px);
  }
}

@media (max-width: 480px) {
  .container {
    min-height: 64px;
    padding: 0 12px;
  }
  
  .logo {
    width: clamp(90px, 26vw, 120px);
  }
}
</style>