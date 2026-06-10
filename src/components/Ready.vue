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
/* Основной контейнер */
.cta-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0;
  gap: 40px;
  max-width: 1600px;
  margin: 0 auto;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

/* Текстовый блок */
.cta-content {
  flex: 1;
  max-width: 600px;
}

.cta-title {
  font-size: 48px;
  font-weight: 800; /* Жирный шрифт как на макете */
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

/* Блок с кнопками */
.cta-actions {
  display: flex;
  gap: 20px;
  flex-shrink: 0;
}

/* Общие стили кнопок */
.btn {
  padding: 20px 40px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px; /* Скругленные углы */
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  white-space: nowrap;
  min-width: 240px;
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
</style>