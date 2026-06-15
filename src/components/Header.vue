<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo.vue'

const menuItems = [
  { id: 'home', label: 'Главная', href: '#home' },
  { id: 'about', label: 'О нас', href: '#about' },
  { id: 'services', label: 'Услуги', href: '#services' },
  { id: 'contacts', label: 'Контакты', href: '#contacts' }
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

function closeMenu() {
  menuOpen.value = false
}

function handleResize() {
  if (window.innerWidth > 1100 && menuOpen.value) {
    menuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

watch(menuOpen, value => {
  document.body.style.overflow = value ? 'hidden' : ''
})
</script>

<template>
  <header class="header">
    <div class="container">
      <Logo class="logo" />

      <nav class="desktop-nav" aria-label="Главное меню">
        <a
          v-for="item in menuItems"
          :key="item.id"
          :href="item.href"
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

      <button class="burger" :aria-expanded="menuOpen" @click="toggleMenu">
        <font-awesome-icon :icon="menuOpen ? faXmark : faBars" />
      </button>
    </div>

    <transition name="slide-down">
      <aside v-if="menuOpen" class="mobile-menu">
        <div class="mobile-content">
          <nav class="mobile-links" aria-label="Навигация">
            <a
              v-for="item in menuItems"
              :key="item.id"
              :href="item.href"
              :class="{ active: active === item.id }"
              @click.prevent="setActive(item.id)"
            >
              {{ item.label }}
            </a>
            <a href="#signin">Войти</a>
            <a href="#signup">Регистрация</a>
          </nav>
        </div>
      </aside>
    </transition>
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

.desktop-nav a {
  color: #1E2326;
  font-weight: 600;
  text-decoration: none;
  padding: 6px 0;
  position: relative;
  transition: color 0.18s ease;
}

.desktop-nav a::after {
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

.desktop-nav a:hover,
.desktop-nav a.active {
  color: #19785A;
}

.desktop-nav a:hover::after,
.desktop-nav a.active::after {
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

.burger {
  display: none;
  width: 48px !important;
  height: 48px !important;
  border: none;
  background: transparent;
  font-size: 24px;
  color: #1E2326;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  z-index: 20;
  padding: 0;
}

.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  text-align: center;
  background: #fff;
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: calc(100vh - 140px);
}

.mobile-content {
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mobile-links a {
  position: relative;
  display: block;
  padding: 14px 16px;
  font-weight: 700;
  color: #1E2326;
  text-decoration: none;
  border-radius: 10px;
  transition: background 0.16s ease, transform 0.12s ease, color 0.16s ease;
}

.mobile-links a::before {
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 6px;
  border-radius: 6px;
  background: linear-gradient(180deg, #19785A, #0f6b4f);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.26s cubic-bezier(0.2, 0.9, 0.2, 1);
  opacity: 0;
}

.mobile-links a:hover,
.mobile-links a:focus,
.mobile-links a:focus-visible {
  background: rgba(25, 120, 90, 0.04);
  color: #0f6b4f;
  transform: translateX(-2px);
}

.mobile-links a:hover::before,
.mobile-links a:focus::before,
.mobile-links a:focus-visible::before {
  transform: scaleY(1);
  opacity: 1;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.35s cubic-bezier(0.2, 0.9, 0.2, 1), opacity 0.25s ease;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

a:focus-visible,
button:focus-visible {
  outline: 3px solid rgba(25, 120, 90, 0.12);
  outline-offset: 4px;
  border-radius: 8px;
}

/* ПЛАНШЕТЫ (до 1200px) — уменьшаем отступы */
@media (max-width: 1200px) {
  .desktop-nav {
    gap: 30px;
  }
  
  .desktop-nav a {
    font-size: 15px;
  }
  
  .btn {
    padding: 10px 18px;
    font-size: 13px;
  }
}

/* ПЛАНШЕТЫ (до 1100px) — показываем бургер */
@media (max-width: 1100px) {
  .desktop-nav,
  .desktop-actions {
    display: none;
  }
  
  .burger {
    display: flex;
  }
  
  .container {
    min-height: 80px;
    padding: 0 20px;
  }
  
  .logo {
    width: clamp(120px, 30vw, 180px);
  }
  
  .mobile-menu {
    max-height: calc(100vh - 80px);
  }
}

/* МОБИЛЬНЫЕ (до 768px) */
@media (max-width: 768px) {
  .container {
    min-height: 70px;
    padding: 0 16px;
  }
  
  .logo {
    width: clamp(100px, 28vw, 140px);
  }
  
  .burger {
    width: 44px !important;
    height: 44px !important;
    font-size: 22px;
  }
  
  .mobile-menu {
    max-height: calc(100vh - 70px);
  }
  
  .mobile-links a {
    padding: 12px 14px;
    font-size: 15px;
  }
}

/* МАЛЕНЬКИЕ МОБИЛЬНЫЕ (до 480px) */
@media (max-width: 480px) {
  .container {
    min-height: 64px;
    padding: 0 12px;
  }
  
  .logo {
    width: clamp(90px, 26vw, 120px);
  }
  
  .burger {
    width: 40px !important;
    height: 40px !important;
    font-size: 20px;
  }
  
  .mobile-menu {
    max-height: calc(100vh - 64px);
  }
  
  .mobile-links a {
    padding: 10px 12px;
    font-size: 14px;
  }
}
</style>