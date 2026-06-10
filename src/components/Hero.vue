<template>
  <section class="hero-section">
    <div class="container">
      
      <div class="content-wrapper">
        
        <h1 class="main-title">
          <span class="text-green">РАБОТА И СОТРУДНИКИ</span><br />
          <span class="text-dark">В ОДНОМ МЕСТЕ</span>
        </h1>

        <p class="subtitle">
          Находите работу и специалистов по всей Европе.<br />
          Быстро. Просто. Без посредников.
        </p>

        <div class="buttons-group">
          <button class="btn btn-primary" @click="$emit('find-job')">
            <span class="btn-text">Найти работу</span>
            <svg class="icon-arrow" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 0L27 9L13.5 18V0Z" fill="#FFFFFF"/>
            </svg>
          </button>

          <button class="btn btn-secondary" @click="$emit('post-vacancy')">
            <span class="btn-text">Разместить вакансию</span>
            <svg class="icon-plus" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="7" width="3" height="19" fill="#19785A"/>
              <rect x="7" y="15" width="19" height="3" fill="#19785A"/>
            </svg>
          </button>
        </div>

        <div class="features-list">
          <div class="feature-item">
            <div class="feat-icon feat-check">
              <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#fff"/></svg>
            </div>
            <span>Быстро</span>
          </div>
          
          <div class="feature-item">
            <div class="feat-icon feat-bag">
              <svg viewBox="0 0 24 24"><path d="M10 2H14C15.1 2 16 2.9 16 4V6H20C21.1 6 22 6.9 22 8V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V8C2 6.9 2.9 6 4 6H8V4C8 2.9 8.9 2 10 2ZM14 4H10V6H14V4Z" fill="#fff"/></svg>
            </div>
            <span>Просто</span>
          </div>

          <div class="feature-item">
            <div class="feat-icon feat-money">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" stroke-width="2" fill="none"/><path d="M12 6v12M8 10h8M8 14h8" stroke="#fff" stroke-width="2"/></svg>
            </div>
            <span>Без посредников</span>
          </div>
        </div>
      </div>

      <div class="visual-wrapper">
        <div class="globe-bg">
          <img src="/earth.png" alt="Earth Network" class="globe-img" />
        </div>

        <div class="stat-card card-top">
          <div class="stat-icon-box">
            <svg viewBox="0 0 24 24" fill="#19785A" width="24" height="24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 1.34 5 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
          </div>
          <div class="stat-info">
            <div class="stat-number">50 000+</div>
            <div class="stat-text">Зарегистрированных участников на платформе</div>
          </div>
        </div>

        <div class="stat-card card-bottom">
          <div class="stat-icon-box">
            <svg viewBox="0 0 24 24" fill="#19785A" width="24" height="24">
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
            </svg>
          </div>
          <div class="stat-info">
            <div class="stat-number">15 000+</div>
            <div class="stat-text">Активных вакансий по всей Европе</div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
defineEmits(['find-job', 'post-vacancy']);
</script>

<style scoped>
.hero-section {
  width: 100%;
  background-color: transparent;
  padding: 0px 0;
  overflow: hidden;
  position: relative;
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 560px;
  gap: 40px;
}

/* === ЛЕВАЯ ЧАСТЬ (КОНТЕНТ) === */
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  max-width: 680px;
  z-index: 2;
}

/* ЗАГОЛОВОК */
.main-title {
  font-weight: 700;
  font-size: 56px;
  line-height: 1.15;
  text-transform: uppercase;
  margin: 0;
  width: 1600px;
  letter-spacing: -0.01em;
}

.text-green {
  color: #19785A;
}

.text-dark {
  color: #1E2326;
}

/* ПОДЗАГОЛОВОК */
.subtitle {
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  color: #4A5054;
  margin: 0;
  max-width: 1600px;
}

/* КНОПКИ */
.buttons-group {
  display: flex;
  gap: 16px;
  margin-top: 8px;
  flex-wrap: wrap;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  cursor: pointer;
  padding: 0 24px;
  box-sizing: border-box;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  height: 64px;
}

.btn:hover {
  transform: translateY(-2px);
}

/* Кнопка "Найти работу" */
.btn-primary {
  width: 250px;
  background: #19785A;
  box-shadow: 0px 4px 14px rgba(25, 120, 90, 0.25);
  border: none;
}

.btn-primary:hover {
  background: #146149;
}

.btn-primary .btn-text {
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  color: #FFFFFF;
  letter-spacing: 0.03em;
}

.icon-arrow {
  width: 18px;
  height: 14px;
}

/* Кнопка "Разместить вакансию" */
.btn-secondary {
  width: max-content;
  background: transparent;
  border: 1px solid rgba(30, 35, 38, 0.2);
}

.btn-secondary:hover {
  background: rgba(30, 35, 38, 0.02);
  border-color: rgba(30, 35, 38, 0.4);
}

.btn-secondary .btn-text {
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  color: #1E2326;
  letter-spacing: 0.03em;
}

.icon-plus {
  width: 24px;
  height: 24px;
}

/* НИЖНИЕ ФИЧИ (ИКОНКИ) */
.features-list {
  display: flex;
  gap: 32px;
  margin-top: 16px;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.feat-icon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #19785A;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feat-icon svg {
  width: 12px;
  height: 12px;
}

.feature-item span {
  font-weight: 500;
  font-size: 15px;
  color: #1E2326;
}

/* === ПРАВАЯ ЧАСТЬ (ГЛОБУС И ВИЗУАЛ) === */
.visual-wrapper {
  position: relative;
  width: 520px;
  height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.globe-bg {
  position: absolute;
  width: 1024px;
  height: 1024px;
  background: radial-gradient(circle at center, rgba(25, 120, 90, 0.15) 0%, transparent 70%);
  display: flex;
  align-items: center;
  top: -70px;
  right: -100px;
  justify-content: center;
  z-index: 1;
}

.globe-img {
  width: 1024px;
  height: 1024px;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
}

/* Карточки со статистикой */
.stat-card {
  position: absolute;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(25, 120, 90, 0.15);
  padding: 16px 20px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.04), 0px 4px 10px rgba(25, 120, 90, 0.03);
  max-width: 280px;
  z-index: 3;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.card-top {
  top: 40px;
  right: -10px;
}

.card-bottom {
  bottom: 80px;
  left: -20px;
}

.stat-icon-box {
  width: 44px;
  height: 44px;
  background: rgba(25, 120, 90, 0.08);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-number {
  font-size: 22px;
  font-weight: 700;
  color: #19785A;
  line-height: 1.2;
}

.stat-text {
  font-size: 12px;
  font-weight: 500;
  color: #4A5054;
  line-height: 1.4;
}

</style>