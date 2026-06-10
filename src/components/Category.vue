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
  { name: 'Все категории', icon: faThLarge, vacancies: 'Смотреть все' }
]
</script>

<template>
  <section class="popular">
    <div class="popular__header">
      <h2 class="popular__title">Популярные категории</h2>
      <a href="#" class="popular__all">
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
.popular {
  width: 1600px;
  margin: 0 auto;
  background: #FFFFFF;
  margin-top: 40px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  padding: 35px 48px;
  box-sizing: border-box;
  margin-bottom: 40px;
}

.popular__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
}

.popular__title {
  font-family: 'Articulat CF', sans-serif;
  font-weight: 700;
  font-size: 35px;
  line-height: 59px;
  color: #1E2326;
  margin: 0;
}

.popular__all {
  font-family: 'Articulat CF', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: rgba(30, 35, 38, 0.5);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.popular__all:hover {
  color: #1E2326;
}

.popular__arrow {
  color: #A5A7A8;
  font-size: 14px;
}

.popular__grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 15px;
}

.category-card {
  width: 181px;
  height: 219px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.category-card:hover {
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.category-card__icon-wrapper {
  width: 74px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.category-card__icon {
  font-size: 48px;
  width: 48px;
  height: 48px;
  color: #19785A;
  background: linear-gradient(136.66deg, #19785A 6.63%, rgba(25, 120, 90, 0.3) 134.09%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.category-card__name {
  font-family: 'Articulat CF', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #1E2326;
  margin: 0 0 8px 0;
  min-height: 40px;
  display: flex;
  align-items: center;
}

.category-card__vacancies {
  font-family: 'Articulat CF', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(30, 35, 38, 0.5);
  margin: 0;
}
</style>