<template>
  <div class="stats-banner">
    <div class="stat-item">
      <span class="stat-number">50 000+</span>
      <span class="stat-label">Пользователей платформы</span>
    </div>
    
    <div class="stat-item">
      <span class="stat-number">15 000+</span>
      <span class="stat-label">Активных вакансий</span>
    </div>
    
    <div class="stat-item">
      <span class="stat-number">3 500+</span>
      <span class="stat-label">Работодателей</span>
    </div>
    
    <div class="stat-item">
      <span class="stat-number">25+</span>
      <span class="stat-label">Стран Европы</span>
    </div>
  </div>
</template>

<style scoped>
.stats-banner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #19785A;
  border-radius: clamp(16px, 2vw, 24px);
  padding: clamp(24px, 4vw, 48px) clamp(16px, 4vw, 60px);
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  box-sizing: border-box;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: clamp(8px, 1.5vw, 12px);
  padding: clamp(16px, 2vw, 20px) clamp(12px, 2vw, 30px);
}

.stat-number {
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 600;
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: clamp(13px, 1.2vw + 0.5rem, 16px);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.3;
}

.stat-item:nth-child(1),
.stat-item:nth-child(2),
.stat-item:nth-child(3) {
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

@media (max-width: 1024px) {
  .stats-banner {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-item {
    border-right: none !important;
    border-bottom: none !important;
  }

  .stat-item:nth-child(1),
  .stat-item:nth-child(3) {
    border-right: 1px solid rgba(255, 255, 255, 0.2) !important;
  }

  .stat-item:nth-child(1),
  .stat-item:nth-child(2) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
  }
}

@media (max-width: 480px) {
  .stats-banner {
    padding: 24px 16px;
    border-radius: 16px;
  }

  .stat-item {
    padding: 16px 8px;
  }
}
</style>