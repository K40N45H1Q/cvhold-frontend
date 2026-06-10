<script setup>
import { ref } from 'vue'
import Logo from './Logo.vue'

const active = ref('home')

function setActive(name) {
  active.value = name
}
</script>

<template>
  <header>
    <Logo class="header-logo"/>

    <nav>
      <a 
        href="#" 
        :class="{ active: active === 'home' }"
        @click.prevent="setActive('home')"
      >
        Главная
      </a>

      <a 
        href="#" 
        :class="{ active: active === 'about' }"
        @click.prevent="setActive('about')"
      >
        О нас
      </a>

      <a 
        href="#" 
        :class="{ active: active === 'services' }"
        @click.prevent="setActive('services')"
      >
        Услуги
      </a>

      <a 
        href="#" 
        :class="{ active: active === 'contacts' }"
        @click.prevent="setActive('contacts')"
      >
        Контакты
      </a>
    </nav>

    <div class="actions">
      <button class="signin-btn">Войти</button>
      <button class="signup-btn">Регистрация</button>
    </div>
  </header>
</template>

<style scoped>

header {
    width: 100%;
    height: 140px;
    display: flex;
    margin: 0 auto;
    max-width: 1600px;
    position: relative;
    flex-direction: row;
    align-items: center;
    background-color: #ffffff;
    justify-content: space-between;
    padding-left: 20px;
}

.actions button {
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
}

.actions {
    display: flex;
    gap: 15px;
}

.signup-btn {
    width: 152px;
    height: 50px;
    color: #ffffff;
    border-radius: 10px;
    background-color: #19785A;
    border: 1px solid #19785A;
    box-shadow: 0px 4px 10px #FFFFFF, 0px 0px 4px #19785A;
}

.signin-btn {
    width: 149px;
    height: 50px;
    color: #19785A;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #000000;
    box-shadow: 0px 4px 10px #FFFFFF, 0px 0px 4px #000000;
}

nav {
    display: flex;
    gap: 40px;
}

nav a {
    position: relative;
    color: #000000;
    font-size: 20px;
    text-decoration: none;
    padding-bottom: 5px;
}

nav a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: #19785A;

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}

nav a.active::after {
    transform: scaleX(1);
}

nav a:hover::after {
    transform: scaleX(1);
}

</style>