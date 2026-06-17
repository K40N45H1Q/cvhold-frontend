<template>
  <div class="page">
    <form class="card" @submit.prevent="submit" novalidate>
      <h1 class="title">Создание аккаунта</h1>

      <div class="field">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="input"
          :class="{ 'error': isEmailTouched && !isEmailValid }"
          @blur="isEmailTouched = true"
          autocomplete="email"
        />
        <span v-if="isEmailTouched && !isEmailValid" class="error-msg">
          Введите корректный email
        </span>
      </div>

      <div class="field">
        <div class="password-wrapper">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Пароль"
            class="input"
            :class="{ 'error': isPasswordTouched && !isPasswordValid }"
            @blur="isPasswordTouched = true"
            autocomplete="new-password"
          />
          <button
            type="button"
            class="toggle"
            @click="showPassword = !showPassword"
            aria-label="Показать пароль"
          >
            <i :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
          </button>
        </div>

        <Transition name="expand">
          <div v-show="showRequirements" class="requirements-wrapper">
            <div class="requirements">
              <div class="req-item" :class="{ valid: checks.length }">
                <i class="fa-solid" :class="checks.length ? 'fa-check' : 'fa-xmark'"></i>
                <span>Минимум 8 символов</span>
              </div>
              <div class="req-item" :class="{ valid: checks.uppercase }">
                <i class="fa-solid" :class="checks.uppercase ? 'fa-check' : 'fa-xmark'"></i>
                <span>Одна заглавная буква</span>
              </div>
              <div class="req-item" :class="{ valid: checks.lowercase }">
                <i class="fa-solid" :class="checks.lowercase ? 'fa-check' : 'fa-xmark'"></i>
                <span>Одна строчная буква</span>
              </div>
              <div class="req-item" :class="{ valid: checks.number }">
                <i class="fa-solid" :class="checks.number ? 'fa-check' : 'fa-xmark'"></i>
                <span>Одна цифра</span>
              </div>
              <div class="req-item" :class="{ valid: checks.special }">
                <i class="fa-solid" :class="checks.special ? 'fa-check' : 'fa-xmark'"></i>
                <span>Один спецсимвол (!@#$%^&*)</span>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <div class="field">
        <div class="password-wrapper">
          <input
            v-model="confirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            placeholder="Подтвердите пароль"
            class="input"
            :class="{ 'error': isConfirmTouched && !doPasswordsMatch }"
            @blur="isConfirmTouched = true"
            autocomplete="new-password"
          />
          <button
            type="button"
            class="toggle"
            @click="showConfirmPassword = !showConfirmPassword"
            aria-label="Показать пароль"
          >
            <i :class="showConfirmPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
          </button>
        </div>
        <span v-if="isConfirmTouched && !doPasswordsMatch" class="error-msg">
          Пароли не совпадают
        </span>
      </div>

      <button 
        type="submit"
        class="btn btn-primary"
        :disabled="!isFormValid || isSubmitting"
      >
        <span v-if="isSubmitting" class="spinner"></span>
        <span v-else>Зарегистрироваться</span>
      </button>

      <RouterLink to="/cvhold-frontend/signin" class="link">
        Уже есть аккаунт? <span class="link-accent">Войти</span>
      </RouterLink>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const showPassword = ref(false)
const showConfirmPassword = ref(false)
const isSubmitting = ref(false)

const isEmailTouched = ref(false)
const isPasswordTouched = ref(false)
const isConfirmTouched = ref(false)

const showRequirements = computed(() => {
  return isPasswordTouched.value || password.value.length > 0
})

const isEmailValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value)
})

const checks = computed(() => ({
  length: password.value.length >= 8,
  uppercase: /[A-Z]/.test(password.value),
  lowercase: /[a-z]/.test(password.value),
  number: /\d/.test(password.value),
  special: /[^A-Za-z0-9]/.test(password.value)
}))

const isPasswordValid = computed(() => {
  const c = checks.value
  return c.length && c.uppercase && c.lowercase && c.number && c.special
})

const doPasswordsMatch = computed(() => {
  return password.value === confirmPassword.value && confirmPassword.value !== ''
})

const isFormValid = computed(() => {
  return isEmailValid.value && isPasswordValid.value && doPasswordsMatch.value
})

const submit = async () => {
  if (!isFormValid.value) return
  
  isSubmitting.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Registration successful:', { email: email.value, password: password.value })
  } catch (error) {
    console.error('Registration failed', error)
  } finally {
    isSubmitting.value = false
  }
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

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.input {
  width: 100%;
  padding: 12px 44px 12px 14px;
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

.input.error {
  border-color: #ff4d4f;
  background: rgba(255, 77, 79, 0.02);
  box-shadow: 0 0 0 3px rgba(255, 77, 79, 0.08);
}

.input.error:focus {
  border-color: #ff4d4f;
  box-shadow: 0 0 0 3px rgba(255, 77, 79, 0.12);
}

.password-wrapper {
  position: relative;
  display: grid;
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

.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 300px;
  margin-top: 4px;
  margin-bottom: 0;
}

.requirements {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  margin-top: 4px;
}

.req-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: rgba(30, 35, 38, 0.5);
  transition: color 0.2s ease;
}

.req-item.valid {
  color: #19785A;
}

.req-item i {
  font-size: 10px;
  width: 14px;
  text-align: center;
  transition: transform 0.2s ease;
}

.req-item.valid i {
  transform: scale(1.1);
}

.error-msg {
  font-size: 12px;
  color: #ff4d4f;
  padding-left: 4px;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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
  gap: 8px;
  margin-top: 8px;
  font-family: inherit;
}

.btn:hover:not(:disabled) {
  background: #146a4f;
  box-shadow: 0 4px 12px rgba(25, 120, 90, 0.2);
  transform: translateY(-1px);
}

.btn:active:not(:disabled) {
  transform: translateY(0);
}

.btn:disabled {
  background: #e2e8f0;
  color: rgba(30, 35, 38, 0.4);
  cursor: not-allowed;
  box-shadow: none;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.link {
  text-align: center;
  font-size: 13px;
  color: rgba(30, 35, 38, 0.6);
  text-decoration: none;
  margin-top: 8px;
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