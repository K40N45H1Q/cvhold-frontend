<template>
  <div class="page">
    <form class="card" @submit.prevent="submit">
      <h1 class="title">Вход в аккаунт</h1>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="input"
      />

      <div class="password">
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Пароль"
          class="input"
        />

        <button
          type="button"
          class="toggle"
          @click="showPassword = !showPassword"
        >
          <i :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
        </button>
      </div>

      <button type="submit" class="btn btn-primary">
        Войти
      </button>

      <RouterLink to="/cvhold-frontend/signup" class="link">
        Нет аккаунта? <span class="link-accent">Зарегистрироваться</span>
      </RouterLink>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')
const password = ref('')
const showPassword = ref(false)

const submit = () => {
  console.log(email.value, password.value)
}
</script>

<style scoped>
.page {
  min-height: calc(100vh - 220px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
}

.card {
  width: 100%;
  max-width: 400px;
  padding: 32px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.title {
  margin: 0 0 8px;
  font-size: clamp(18px, 3vw, 24px);
  font-weight: 700;
  color: #1e2326;
  letter-spacing: -0.02em;
  text-align: center;
}

.input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background: #fff;
  color: #1e2326;
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;
  font-family: inherit;
}

.input::placeholder {
  color: rgba(30, 35, 38, 0.4);
}

.input:focus {
  border-color: #19785A;
  box-shadow: 0 0 0 3px rgba(25, 120, 90, 0.1);
}

.password {
  position: relative;
  display: grid;
}

.password .input {
  padding-right: 44px;
}

.toggle {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 6px;
  color: rgba(30, 35, 38, 0.5);
  display: grid;
  place-items: center;
  transition: color 0.2s ease;
}

.toggle:hover {
  color: #19785A;
}

.toggle i {
  font-size: 14px;
}

.btn {
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: #19785A;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
}

.btn:hover {
  background: #146a4f;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(25, 120, 90, 0.2);
}

.btn:active {
  transform: translateY(0);
}

.link {
  text-align: center;
  font-size: 13px;
  color: rgba(30, 35, 38, 0.6);
  text-decoration: none;
  margin-top: 4px;
  transition: color 0.2s ease;
}

.link:hover {
  color: #1e2326;
}

.link-accent {
  color: #19785A;
  font-weight: 600;
}

.link:hover .link-accent {
  text-decoration: underline;
}
</style>