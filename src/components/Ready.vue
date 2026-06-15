<template>
  <div class="cta-section">
    <!-- Левая часть: Текст -->
    <div class="cta-content">
      <h2 class="cta-title">ГОТОВЫ НАЧАТЬ?</h2>
      <p class="cta-description">
        Присоединяйтесь к тысячам специалистов<br />
        и компаний, которые уже используют CVHOLD.
      </p>
    </div>

    <!-- Правая часть: Кнопки -->
    <div class="cta-actions">
      <button class="btn btn-primary">НАЙТИ РАБОТУ</button>
      <button class="btn btn-secondary">РАЗМЕСТИТЬ ВАКАНСИЮ</button>
    </div>
  </div>
</template>

<script setup>
// Логика переходов может быть добавлена здесь
const handleFindJob = () => {
  console.log('Navigate to Find Job')
}

const handlePostJob = () => {
  console.log('Navigate to Post Job')
}
</script>

<style scoped>
/* Основной контейнер на GRID */
.cta-section {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 40px;
  max-width: 1600px;
  margin: 0 auto;
  padding: 60px 0;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

/* Текстовый блок */
.cta-content {
  max-width: 600px;
}

.cta-title {
  font-size: 48px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 20px 0;
  line-height: 1.1;
  text-transform: uppercase;
}

.cta-description {
  font-size: 18px;
  color: #4a4a4a;
  line-height: 1.6;
  margin: 0;
}

/* Блок с кнопками на GRID */
.cta-actions {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
  flex-shrink: 0;
}

/* Общие стили кнопок */
.btn {
  padding: 20px 40px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  white-space: nowrap;
}

/* Primary кнопка (Зеленая) */
.btn-primary {
  background-color: #1e7a5d;
  color: #ffffff;
  border: 2px solid #1e7a5d;
}

.btn-primary:hover {
  background-color: #165e47;
  border-color: #165e47;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(30, 122, 93, 0.3);
}

/* Secondary кнопка (Контурная) */
.btn-secondary {
  background-color: transparent;
  color: #1e7a5d;
  border: 2px solid #1e7a5d;
}

.btn-secondary:hover {
  background-color: #f0f7f4;
  transform: translateY(-2px);
}

/* ПЛАНШЕТЫ (до 1024px) — одна колонка для контента, 2 для кнопок */
@media (max-width: 1024px) {
  .cta-section {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 48px 0;
  }

  .cta-content {
    max-width: 100%;
  }

  .cta-title {
    font-size: 40px;
  }

  .cta-description {
    font-size: 16px;
  }

  .cta-actions {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  .btn {
    padding: 18px 24px;
    font-size: 14px;
  }
}

/* МОБИЛЬНЫЕ (до 640px) — 2 колонки для кнопок */
@media (max-width: 640px) {
  .cta-section {
    padding: 15px;
    gap: 24px;
  }

  .cta-title {
    font-size: 28px;
    margin-bottom: 12px;
  }

  .cta-description {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .cta-actions {
    width: 100%;
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .btn {
    width: 100%;
    padding: 16px 20px;
    font-size: 13px;
    text-align: center;
  }
}

/* Маленькие мобилки (до 400px) */
@media (max-width: 400px) {
  .cta-section {
    padding: 15px;
  }

  .cta-title {
    font-size: 24px;
  }

  .cta-description {
    font-size: 13px;
  }

  .btn {
    padding: 14px 16px;
    font-size: 12px;
  }
}
</style>