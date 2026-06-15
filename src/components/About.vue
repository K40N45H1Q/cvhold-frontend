<template>
  <div class="stats-banner">
    <div 
      v-for="(stat, index) in stats" 
      :key="index" 
      class="stat-item"
    >
      <span class="stat-number">{{ stat.number }}</span>
      <span class="stat-label">{{ stat.label }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
  { number: '50 000+', label: 'Пользователей платформы' },
  { number: '15 000+', label: 'Активных вакансий' },
  { number: '3 500+',   label: 'Работодателей' },
  { number: '25+',       label: 'Стран Европы' },
])
</script>

<style scoped>
/* Основной контейнер */
.stats-banner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #19785A;
  border-radius: 24px;
  padding: 48px 60px;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 30px;
}

.stat-number {
  font-size: 42px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: -0.5px;
}

.stat-label {
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
}

/* ДЕСКТОП: правая граница у всех кроме 4, 8, 12... */
.stat-item:not(:nth-child(4n)) {
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

/* ПЛАНШЕТЫ И МОБИЛЬНЫЕ (до 1024px) — всегда 2 колонки */
@media (max-width: 1024px) {
  .stats-banner {
    grid-template-columns: repeat(2, 1fr);
    padding: 40px 32px;
  }

  .stat-number {
    font-size: 36px;
  }

  .stat-label {
    font-size: 15px;
  }

  /* СБРАСЫВАЕМ все границы */
  .stat-item {
    border-right: none !important;
    border-bottom: none !important;
  }

  /* Правая граница только у нечетных (1, 3) */
  .stat-item:nth-child(odd) {
    border-right: 1px solid rgba(255, 255, 255, 0.2) !important;
  }

  /* Нижняя граница у первых двух (1, 2) */
  .stat-item:nth-child(-n+2) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
  }
}

/* Маленькие мобилки (до 480px) */
@media (max-width: 480px) {
  .stats-banner {
    padding: 20px 12px;
  }

  .stat-item {
    padding: 10px 12px;
  }

  .stat-number {
    font-size: 24px;
  }

  .stat-label {
    font-size: 12px;
  }
}

/* Очень маленькие мобилки (до 360px) */
@media (max-width: 360px) {
  .stats-banner {
    padding: 16px 8px;
    border-radius: 16px;
  }

  .stat-item {
    padding: 8px 10px;
    gap: 8px;
  }

  .stat-number {
    font-size: 20px;
  }

  .stat-label {
    font-size: 11px;
  }
}
</style>