<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faBuilding, 
  faIndustry, 
  faShip, 
  faDesktop, 
  faBriefcaseMedical, 
  faHotel, 
  faThLarge,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'

const categories = [
  { name: 'Строительство', icon: faBuilding, vacancies: '200 вакансий' },
  { name: 'Производство', icon: faIndustry, vacancies: '200 вакансий' },
  { name: 'Логистика', icon: faShip, vacancies: '200 вакансий' },
  { name: 'IT и технологии', icon: faDesktop, vacancies: '200 вакансий' },
  { name: 'Медицина', icon: faBriefcaseMedical, vacancies: '200 вакансий' },
  { name: 'Гостиничный бизнес', icon: faHotel, vacancies: '200 вакансий' },
]
</script>

<template>
  <section class="popular">
    <div class="popular__header">
      <h2 class="popular__title">Популярные категории</h2>
      <a class="popular__all">
        Все категории
        <FontAwesomeIcon :icon="faArrowRight" class="popular__arrow" />
      </a>
    </div>
    
    <div class="popular__grid">
      <div 
        v-for="(category, index) in categories" 
        :key="index" 
        class="category-card"
      >
        <div class="category-card__icon-wrapper">
          <FontAwesomeIcon :icon="category.icon" class="category-card__icon" />
        </div>
        <h3 class="category-card__name">{{ category.name }}</h3>
        <p class="category-card__vacancies">{{ category.vacancies }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ============================
   БАЗА (МОБИЛЬНЫЕ ПО УМОЛЧАНИЮ)
   ============================ */
.popular {
  width: 100%;
  max-width: 1600px;
  background: #FFFFFF;
  box-shadow: var(--b_shadow);
  border-radius: 0.75rem;
  box-sizing: border-box;
  margin: 0 auto;
  padding: var(--indent);
}

.popular__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  gap: 1rem;
}

.popular__title {
  font-weight: 700;
  font-size: clamp(1.4rem, 4vw, 2.1875rem); /* 22px - 35px */
  line-height: 1.2;
  width: max-content;
  white-space: nowrap;
  color: #1E2326;
  margin: 0;
  text-align: left;
  width: 100%;
}

.popular__all {
  font-weight: 400;
  font-size: clamp(0.9rem, 2vw, 1.25rem); /* 14.4px - 20px */
  line-height: 1.5;
  color: rgba(30, 35, 38, 0.5);
  text-decoration: none;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  transition: color 0.2s ease;
}

.popular__all:hover {
  color: #1E2326;
}

.popular__arrow {
  color: #A5A7A8;
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  transition: transform 0.2s ease;
}

.popular__all:hover .popular__arrow {
  transform: translateX(4px);
}

/* ============================
   СЕТКА (ВСЕГДА ЧЁТНОЕ КОЛИЧЕСТВО)
   ============================ */
.popular__grid {
  display: grid;
  /* МОБИЛЬНЫЕ: 2 колонки (чётное) */
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(0.75rem, 2vw, 1rem);
}

.category-card {
  width: 100%;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.75rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 2vw, 1.875rem) 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.category-card:hover {
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

/* ============================
   ИКОНКИ (СОХРАНЕНЫ БЕЗ ИЗМЕНЕНИЙ)
   ============================ */
.category-card__icon-wrapper {
  width: clamp(3rem, 5vw, 4.625rem); /* 48px - 74px */
  height: clamp(3rem, 5vw, 4.625rem);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: clamp(1rem, 2vw, 1.25rem); /* 16px - 20px */
}

.category-card__icon {
  font-size: clamp(1.5rem, 4vw, 3rem); /* 24px - 48px */
  color: #19785A;
  background: linear-gradient(136.66deg, #19785A 6.63%, rgba(25, 120, 90, 0.3) 134.09%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ============================
   ТЕКСТ
   ============================ */
.category-card__name {
  font-weight: 700;
  font-size: clamp(0.9rem, 1.2vw, 1rem); /* 14.4px - 16px */
  line-height: 1.3;
  text-align: center;
  color: #1E2326;
  margin: 0 0 8px 0;
  min-height: 2.6em; /* Гарантирует одинаковую высоту карточек при 2 строках текста */
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-card__vacancies {
  font-weight: 400;
  font-size: clamp(0.8rem, 1vw, 1rem); /* 12.8px - 16px */
  line-height: 1.5;
  color: rgba(30, 35, 38, 0.5);
  margin: 0;
  text-align: center;
}

/* ============================
   ПЛАНШЕТЫ (от 768px)
   ============================ */
@media (min-width: 768px) {
  .popular__grid {
    /* ПЛАНШЕТЫ: 4 колонки (чётное) */
    grid-template-columns: repeat(4, 1fr);
  }
}

/* ============================
ДЕСКТОП (от 1024px)
============================ */
@media (min-width: 1024px) {
  .popular__grid {
    /* НОУТБУКИ: 4 колонки (чётное, оптимально для чтения) */
    grid-template-columns: repeat(4, 1fr);
  }
}

/* ============================
БОЛЬШИЕ ЭКРАНЫ (от 1400px)
============================ */
@media (min-width: 1400px) {
  
  .popular__grid {
    /* ШИРОКИЕ ЭКРАНЫ: 6 колонок (чётное, вместо исходных 7) */
    grid-template-columns: repeat(6, 1fr);
  }
}

/* ============================
   iPhone SE / ОЧЕНЬ МАЛЕНЬКИЕ ЭКРАНЫ (до 360px)
   ============================ */
@media (max-width: 375px) {

  .popular__title {
    text-align: center;
    font-size: 1.3rem;
  }

  .popular__all {
    font-size: 0.85rem;
  }

  .category-card {
    min-height: 150px;
  }

  .category-card__name {
    font-size: 0.85rem;
    min-height: 2.4em;
  }

  .category-card__vacancies {
    font-size: 0.75rem;
  }
}
</style>