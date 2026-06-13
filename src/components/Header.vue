<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo.vue'

const menuItems = [
  { id: 'home', label: 'Главная' },
  { id: 'about', label: 'О нас' },
  { id: 'services', label: 'Услуги' },
  { id: 'contacts', label: 'Контакты' }
]

const active = ref('home')
const menuOpen = ref(false)

function setActive(name) {
  active.value = name
  menuOpen.value = false
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header class="header">
    <div class="container">
      <Logo class="logo" />

      <nav class="desktop-nav">
        <a 
          v-for="item in menuItems" 
          :key="item.id"
          href="#"
          :class="{ active: active === item.id }" 
          @click.prevent="setActive(item.id)"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="desktop-actions">
        <button class="btn btn-secondary">Войти</button>
        <button class="btn btn-primary">Регистрация</button>
      </div>

      <button class="burger" :class="{ active: menuOpen }" @click="toggleMenu">
        <font-awesome-icon :icon="menuOpen ? faXmark : faBars" />
      </button>
    </div>

    <Transition name="fade">
      <div v-if="menuOpen" class="mobile-overlay"></div>
    </Transition>

    <Transition name="slide">
      <nav v-if="menuOpen" class="mobile-menu">
        <div class="mobile-content">
          <div class="mobile-links">
            <a 
              v-for="item in menuItems" 
              :key="item.id"
              href="#"
              :class="{ active: active === item.id }" 
              @click.prevent="setActive(item.id)"
            >
              {{ item.label }}
            </a>
          </div>
          
          <div class="mobile-buttons">
            <button class="btn btn-signin">Войти</button>
            <button class="btn btn-signup">Регистрация</button>
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
/* ============================
   БАЗА
   ============================ */
.header {
  width: 100%;
  background: #ffffff;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 48px);
  height: 88px; /* Чуть выше для крупного лого */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* ============================
   ЛОГОТИП (МАКСИМАЛЬНО КРУПНЫЙ)
   ============================ */
.logo {
  width: clamp(160px, 18vw, 240px); /* Огромный на десктопе, крупный на мобильном */
  height: auto;
  flex-shrink: 0;
  display: block;
}

/* ============================
   ДЕСКТОП МЕНЮ
   ============================ */
.desktop-nav {
  display: flex;
  gap: 2.5rem;
  flex: 1;
  justify-content: center;
}

.desktop-nav a {
  color: #1E2326;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  padding: 8px 0;
  position: relative;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.desktop-nav a:hover {
  color: #19785A;
}

.desktop-nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2.5px;
  background: #19785A;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.desktop-nav a.active {
  color: #19785A;
}

.desktop-nav a.active::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* ============================
   КНОПКИ ДЕЙСТВИЙ
   ============================ */
.desktop-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.btn {
  font-family: inherit;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  padding: 10px 24px;
  transition: all 0.2s ease;
  border: 2px solid #19785A;
  white-space: nowrap;
}

.btn-signup {
  background: #19785A;
  color: #ffffff;
}

.btn-signup:hover {
  background: #145e47;
  border-color: #145e47;
}

.btn-signin {
  background: #ffffff;
  color: #19785A;
}

.btn-signin:hover {
  background: #f5f5f5;
}

/* ============================
   ИДЕАЛЬНЫЙ БУРГЕР
   ============================ */
.burger {
  display: none;
  width: 48px;       /* Большая удобная область клика */
  height: 48px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1100;
  flex-shrink: 0;
  
  /* Идеальное центрирование иконки */
  display: none; /* Переопределяется в медиа-запросе */
  align-items: center;
  justify-content: center;
  
  font-size: 26px; /* Идеальный размер иконки FA */
  color: #1E2326;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.burger:hover {
  color: #19785A;
  transform: scale(1.05);
}

.burger:active {
  transform: scale(0.95);
}

/* ============================
   МОБИЛЬНОЕ МЕНЮ
   ============================ */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 340px;
  height: 100dvh;
  background: #ffffff;
  z-index: 1050;
  padding: 5px !important;
  box-shadow: -8px 0 30px rgba(0, 0, 0, 0.1);
}

.mobile-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  gap: 32px;
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mobile-menu a {
  padding: 14px 16px;
  color: #1E2326;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mobile-menu a:hover {
  background: #f8f9fa;
  color: #19785A;
}

.mobile-menu a.active {
  background: rgba(25, 120, 90, 0.08);
  color: #19785A;
}

.mobile-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid #eaeaea;
  padding-top: 24px;
}

.mobile-buttons .btn {
  width: 100%;
  text-align: center;
  padding: 14px 24px;
}

/* ============================
   АНИМАЦИИ
   ============================ */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* ============================
   АДАПТИВ (ОДИН ЗАПРОС)
   ============================ */
@media (max-width: 1100px) {
  .desktop-nav,
  .desktop-actions {
    display: none;
  }
  
  .burger {
    display: flex; /* Включаем flex для идеального центрирования */
  }
  
  .container {
    height: 72px; /* Чуть компактнее на мобильных, но лого остаётся крупным */
    padding: 0 20px;
  }
  
  .logo {
    width: clamp(140px, 35vw, 180px); /* Максимально крупный для мобильного экрана */
  }
  
  .mobile-menu {
    max-width: 300px;
    padding: 90px 24px 32px;
  }
}
</style>