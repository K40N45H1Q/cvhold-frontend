<template>
  <section class="hero-section">
    <div class="container">
      
      <div class="content-wrapper">
        <h1 class="main-title">
          <span class="text-green">РАБОТА И СОТРУДНИКИ</span><br />
          <span class="text-dark">В ОДНОМ МЕСТЕ</span>
        </h1>

        <p class="subtitle">
          Находите работу и специалистов по всей Европе.
        </p>

        <div class="buttons-group">
          <button class="btn btn-primary" @click="$emit('find-job')">
            <span class="btn-text">Найти работу</span>
            <i class="fa-solid fa-arrow-right icon-arrow"></i>
          </button>

          <button class="btn btn-secondary" @click="$emit('post-vacancy')">
            <span class="btn-text">Разместить вакансию</span>
          </button>
        </div>

        <div class="features-list">
          <div class="feature-item">
            <div class="feat-icon">
              <i class="fa-solid fa-bolt"></i>
            </div>
            <span>Быстро</span>
          </div>
          
          <div class="feature-item">
            <div class="feat-icon">
              <i class="fa-solid fa-check"></i>
            </div>
            <span>Просто</span>
          </div>

          <div class="feature-item">
            <div class="feat-icon">
              <i class="fa-solid fa-user-check"></i>
            </div>
            <span>Без посредников</span>
          </div>
        </div>
      </div>

      <div class="visual-wrapper">
        <div class="globe-bg">
          <img src="/earth.png" alt="Earth Network" class="globe-img" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
defineEmits(['find-job', 'post-vacancy']);
</script>

<!-- Подключение Font Awesome -->
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css");
</style>

<style scoped>
/* ============================
   БАЗА
   ============================ */
.hero-section {
  width: 100%;
  overflow: hidden;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: clamp(2rem, 4vw, 3rem);
  max-width: 1600px;
  margin: 0 auto;
  padding: clamp(1.25rem, 4vw, 2.5rem) clamp(1.25rem, 4vw, 2.5rem);
  max-height: max-content;
}

/* ============================
   ЛЕВАЯ ЧАСТЬ
   ============================ */
.content-wrapper {
  display: grid;
  gap: clamp(1.25rem, 2vw, 1.5rem);
  max-width: 640px;

}

.main-title {
  font-weight: 700;
  line-height: 1.15;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: -0.01em;
  font-size: clamp(1.3rem, 3vw, 2.5rem);
}

.text-green { color: #19785A; }
.text-dark  { color: #1E2326; }

.subtitle {
  font-weight: 400;
  line-height: 1.5;
  color: #4A5054;
  margin: 0;
  font-size: clamp(0.95rem, 1.5vw, 1.25rem);
}

/* ============================
   КНОПКИ
   ============================ */
.buttons-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: clamp(0.75rem, 1.5vw, 1rem);
  width: 100%;
  white-space: nowrap;
}

.btn-primary .btn-text {
  font-weight: 600;
  text-transform: uppercase;
  color: #FFFFFF;
  letter-spacing: 0.03em;
  font-size: clamp(0.85rem, 1.2vw, 1rem);
}

.icon-arrow {
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);
  color: #FFFFFF;
}

.btn-text {
  font-weight: 600;
  font-size: clamp(0.85rem, 1.2vw, 1rem);
  text-transform: uppercase;
  color: #1E2326;
}

.icon-plus {
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  color: #19785A;
}

/* ============================
   ФИЧИ (ИСПРАВЛЕНО)
   ============================ */
.features-list {
  display: flex;
  flex-wrap: nowrap; /* всегда одна строка */
  gap: clamp(0.5rem, 1.5vw, 2rem);
  width: 100%;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.feat-icon {
  width: clamp(1.7rem, 2vw, 1.5rem);
  height: clamp(1.7rem, 2vw, 1.5rem);
  border-radius: 50%;
  background: #19785A;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feat-icon i {
  font-size: clamp(0.55rem, 1vw, 0.7rem);
  color: #FFFFFF;
}

.feature-item span {
  font-weight: 500;
  font-size: clamp(0.7rem, 1vw, 0.95rem);
  color: #1E2326;
  white-space: nowrap;
}

/* ============================
   ПРАВАЯ ЧАСТЬ
   ============================ */
.visual-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  max-width: clamp(320px, 50vw, 650px);
  margin: 0 auto;
}

.globe-bg {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}

.globe-bg::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(25, 120, 90, 0.12) 0%, transparent 70%);
}

.globe-img {
  height: clamp(250px, 45vw, 800px);
  position: absolute;
  right: 0;
  top: 0;
  z-index: 555;
}

/* ============================
   остальной код без изменений
   ============================ */

/* планшеты */
@media (max-width: 1024px) {
  .container {
    grid-template-columns: 1fr;
    min-height: auto;
    text-align: left;
  }

  .buttons-group {
    white-space: warp;
  }

  .visual-wrapper {
    order: -1;
    margin-bottom: 1rem;
    display: none;
  }
}

/* мобильные */
@media (max-width: 768px) {
  .buttons-group {
    grid-template-columns: 1fr;
  }
}

</style>