<template>
  <div class="stats-banner">
    <div 
      v-for="(stat, index) in stats" 
      :key="index" 
      class="stat-item"
    >
      <span class="stat-number">{{ stat.number }}</span>
      <span class="stat-label">{{ stat.label }}</span>
      
      <!-- Вертикальный разделитель (не показываем для последнего элемента) -->
      <div v-if="index !== stats.length - 1" class="divider"></div>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #19785A; /* Темно-зеленый цвет как на фото */
  border-radius: 24px;
  padding: 48px 60px;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

/* Элемент статистики */
.stat-item {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px;
  flex: 1;
}

/* Число */
.stat-number {
  font-size: 42px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1;
  letter-spacing: -0.5px;
}

/* Подпись */
.stat-label {
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
}

/* Разделительная линия */
.divider {
  position: absolute;
  right: 0;
  top: 10%;
  height: 80%;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.2);
}

</style>