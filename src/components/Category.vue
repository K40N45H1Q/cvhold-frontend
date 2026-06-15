<template>
  <section class="popular">

    <div class="popular__grid" :class="{ 'compact': isCompact }">
      <div
        v-for="(category, index) in displayedCategories"
        :key="category._uid"
        class="category-card"
      >
        <div class="category-card__icon-wrapper">
          <font-awesome-icon :icon="category.icon" class="category-card__icon" />
        </div>
        <h3 class="category-card__name">{{ category.name }}</h3>
        <p class="category-card__vacancies">{{ category.vacancies }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
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

// Исходный список категорий
const categories = [
  { name: 'Строительство', icon: faBuilding, vacancies: '200 вакансий' },
  { name: 'Производство', icon: faIndustry, vacancies: '200 вакансий' },
  { name: 'Логистика', icon: faShip, vacancies: '200 вакансий' },
  { name: 'IT и технологии', icon: faDesktop, vacancies: '200 вакансий' },
  { name: 'Медицина', icon: faBriefcaseMedical, vacancies: '200 вакансий' },
  { name: 'Гостиничный бизнес', icon: faHotel, vacancies: '200 вакансий' },
]

// стрелка для шапки
const faArrow = faArrowRight

// Флаг компактного режима (по умолчанию false — показываем все 6 в ряд)
// После монтирования можно переключать на true (например, через таймер или событие),
// но по требованию пользователя: "сначала показывать все 6 в ряд, потом по 3" —
// здесь реализовано поведение по умолчанию: сначала широкая раскладка,
// затем при уменьшении экрана CSS сам переключит отображение.
// Если нужно программно переключать (например, через кнопку или таймер),
// можно управлять isCompact.
const isCompact = ref(false)

// Нормализация: минимум 2 элемента, всегда чётное количество.
// Если массив пуст — создаём 2 заглушки.
// Если длина === 1 — дублируем элемент.
// Если длина нечётная — дублируем последний элемент.
const displayedCategories = computed(() => {
  const src = Array.isArray(categories) ? categories.slice() : []

  const placeholder = {
    name: 'Категория',
    icon: faThLarge,
    vacancies: '0 вакансий'
  }

  if (src.length === 0) {
    return [
      { ...placeholder, _uid: 'placeholder-1' },
      { ...placeholder, _uid: 'placeholder-2' }
    ]
  }

  if (src.length === 1) {
    const first = { ...src[0] }
    return [
      { ...first, _uid: `cat-0` },
      { ...first, _uid: `cat-0-dup` }
    ]
  }

  const normalized = src.map((c, i) => ({ ...c, _uid: `cat-${i}` }))

  if (normalized.length % 2 !== 0) {
    const last = { ...normalized[normalized.length - 1] }
    last._uid = `${last._uid}-dup`
    normalized.push(last)
  }

  return normalized
})

// Пример: если нужно через 3 секунды переключиться на компактный режим (по желанию)
// onMounted(() => {
//   setTimeout(() => { isCompact.value = true }, 3000)
// })
</script>

<style scoped>
/* ============================
   БАЗА
   ============================ */
.popular {
  width: 100%;
  max-width: 1600px;
  background: #FFFFFF;
  box-shadow: var(--b_shadow, 0 4px 20px rgba(0,0,0,0.06));
  border-radius: 0.75rem;
  box-sizing: border-box;
  margin: 0 auto;
  padding: var(--indent, 1.25rem);
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
   СЕТКА
   - По умолчанию (широкие экраны) показываем все 6 в ряд
   - При уменьшении экрана переходим на 3 колонки
   - На мобильных — 2 колонки
   ============================ */
.popular__grid {
  display: grid;
  gap: clamp(0.75rem, 2vw, 1rem);
  /* По умолчанию: 6 колонок (все 6 в ряд) */
  grid-template-columns: repeat(6, 1fr);
}

/* Если нужно принудительно компактное отображение (класс .compact),
   можно переключать isCompact, но обычно достаточно медиа-запросов. */
.popular__grid.compact {
  grid-template-columns: repeat(3, 1fr);
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
   ИКОНКИ
   ============================ */
.category-card__icon-wrapper {
  width: clamp(3rem, 5vw, 4.625rem);
  height: clamp(3rem, 5vw, 4.625rem);
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-card__icon {
  font-size: clamp(1.5rem, 4vw, 3rem);
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
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  line-height: 1.3;
  text-align: center;
  color: #1E2326;
  min-height: 2.6em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-card__vacancies {
  font-weight: 400;
  font-size: clamp(0.8rem, 1vw, 1rem);
  line-height: 1.5;
  color: rgba(30, 35, 38, 0.5);
  text-align: center;
}

/* ============================
   АДАПТИВ
   - <= 1400px: 3 колонки (3 + 3 для 6 элементов)
   - <= 768px: 2 колонки (мобильные)
   ============================ */
@media (max-width: 1400px) {
  .popular__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .popular__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .popular__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .popular__header {
    flex-direction: column;
    gap: 0.75rem;
  }

  .popular__all {
    justify-content: center;
  }
}

/* Малые экраны */
@media (max-width: 375px) {
  .popular__title {
    text-align: center;
    font-size: 1.3rem;
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
