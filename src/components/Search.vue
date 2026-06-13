<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faLocationDot, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const searchQuery = ref('')
const location = ref('')
const category = ref('')
</script>

<template>
  <section class="search">
    <div class="search-box">
      <div class="search-grid">
        <!-- Я ищу -->
        <div class="field">
          <label class="field-label">Я ищу</label>
          <div class="field-input-row">
            <input 
              v-model="searchQuery"
              type="text" 
              class="field-input"
              placeholder="Должность, компания"
            />
            <font-awesome-icon 
              :icon="faMagnifyingGlass" 
              class="field-icon field-icon--search" 
            />
          </div>
        </div>

        <!-- Где -->
        <div class="field">
          <label class="field-label">Где</label>
          <div class="field-input-row">
            <input 
              v-model="location"
              type="text" 
              class="field-input"
              placeholder="Страна, город или регион"
            />
            <font-awesome-icon 
              :icon="faLocationDot" 
              class="field-icon field-icon--location" 
            />
          </div>
        </div>

        <!-- Категория -->
        <div class="field">
          <label class="field-label">Категория</label>
          <div class="field-input-row">
            <select v-model="category" class="field-select">
              <option value="" disabled selected>Выберите категорию</option>
              <option value="1">Строительство</option>
              <option value="2">Производство</option>
              <option value="3">Логистика</option>
              <option value="4">IT и технологии</option>
              <option value="5">Медицина</option>
              <option value="6">Гостиничный бизнес</option>
            </select>
            <font-awesome-icon 
              :icon="faChevronDown" 
              class="field-icon field-icon--arrow" 
            />
          </div>
        </div>

        <!-- Кнопка -->
        <button class="btn btn-primary">
          НАЙТИ ВАКАНСИИ
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ============================
   БАЗА (МОБИЛЬНЫЕ ПО УМОЛЧАНИЮ)
   ============================ */
.search {
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  z-index: 500;
}

.search-box {
  width: 100%;
  max-width: 1600px;
  background: #FFFFFF;
  box-shadow: var(--b_shadow);
  padding: 15px;
  border-radius: 0.75rem;
  box-sizing: border-box;
}

/* Всегда 1 колонка по умолчанию */
.search-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem 0.5rem;
  /* Разделитель между полями по вертикали */
  border-bottom: 1px solid rgba(30, 35, 38, 0.12);
}

.field:last-of-type {
  border-bottom: none;
}

.field-label {
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1.4;
  color: #1E2326;
}

.field-input-row {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 1.5rem;
}

.field-input,
.field-select {
  width: 100%;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(30, 35, 38, 0.6);
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  padding-right: 2rem; /* Место под иконку */
  appearance: none;
  cursor: pointer;
  font-family: inherit;
}

.field-input::placeholder {
  color: rgba(30, 35, 38, 0.4);
}

.field-select option {
  color: #1E2326;
  font-size: 0.95rem;
}

.field-icon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  flex-shrink: 0;
  color: #19785A;
}

.field-icon--search {
  font-size: 1rem;
}

.field-icon--location {
  font-size: 0.95rem;
}

.field-icon--arrow {
  pointer-events: none;
  font-size: 0.7rem;
  right: 0.25rem;
}

/* Кнопка на мобильных */
.search-btn {
  width: 100%;
  height: 3rem;
  margin-top: 1rem;
  background: #19785A;
  box-shadow: 0px 4px 10px rgba(25, 120, 90, 0.2);
  border-radius: 0.5rem;
  border: none;
  font-weight: 600;
  font-size: 0.85rem;
  line-height: 1.4;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  letter-spacing: 0.02em;
}

.search-btn:hover {
  background: #146149;
  transform: translateY(-1px);
}

.search-btn:active {
  transform: translateY(0);
}

/* ============================
   ПОЛНЫЙ ЭКРАН (ДЕСКТОП)
   ============================ */
@media (min-width: 1024px) {
  .search {
    padding: var(--indent);
  }

  .search-box {
    padding: 2rem 3rem;
    border-radius: 0.625rem;
  }

  /* 3 колонки полей + 1 колонка кнопки */
  .search-grid {
    grid-template-columns: 1fr 1fr 1fr 273px;
    gap: 0;
    align-items: center;
  }

  .field {
    padding: 0.625rem;
    border-bottom: none;
    border-right: 1px solid rgba(30, 35, 38, 0.2);
    gap: 0.75rem;
  }

  .field:last-of-type {
    border-right: none;
  }

  .field-label {
    font-size: 1.25rem;
  }

  .field-input,
  .field-select {
    font-size: 1.0625rem;
    color: rgba(30, 35, 38, 0.5);
    padding-right: 2.5rem;
  }

  .field-select option {
    font-size: 1.15rem;
  }

  .field-icon--search {
    font-size: 1.375rem;
    right: 0.125rem;
  }

  .field-icon--location {
    font-size: 1.25rem;
  }

  .field-icon--arrow {
    font-size: 0.875rem;
    right: 0.25rem;
  }

  .search-btn {
    width: auto;
    height: 4.375rem;
    margin-top: 0;
    font-size: 1.125rem;
    border-radius: 0.625rem;
    padding: 0 1.5rem;
    box-shadow: 0px 4px 10px #FFFFFF, 0px 0px 4px #19785A;
  }

  .search-btn:hover {
    transform: translateY(-2px);
  }
}

/* ============================
   iPhone SE / очень маленькие экраны
   ============================ */
@media (max-width: 360px) {
  .search {
    padding: 0.75rem 0.5rem;
  }

  .search-box {
    padding: 1.25rem 1rem;
  }

  .field-label {
    font-size: 0.9rem;
  }

  .field-input,
  .field-select {
    font-size: 0.85rem;
  }

  .search-btn {
    height: 2.875rem;
    font-size: 0.8rem;
  }
}
</style>