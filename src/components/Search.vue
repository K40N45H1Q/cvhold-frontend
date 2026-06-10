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
        <div class="field field--bordered">
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
        <div class="field field--bordered">
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
        <div class="field field--bordered">
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
        <button class="search-btn">
          НАЙТИ ВАКАНСИИ
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.search {
  width: 100%;
  display: flex;
  justify-content: center;
}

.search-box {
  width: 100%;
  max-width: 1600px;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 48px 51px;
  box-sizing: border-box;
}

.search-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 273px;
  gap: 0;
  align-items: start;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-right: 42px;
}

.field--bordered {
    padding: 10px;
    border-right: 1px solid rgba(30, 35, 38, 0.2);
}

.field-label {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  color: #1E2326;
}

.field-input-row {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 30px;
}

.field-input,
.field-select {
  width: 100%;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.5;
  color: rgba(30, 35, 38, 0.5);
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  appearance: none;
  cursor: pointer;
  padding-right: 40px;
}

.field-input::placeholder {
  color: rgba(30, 35, 38, 0.5);
}

.field-select option {
  color: #1E2326;
  font-size: 20px;
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
  font-size: 22px;
  right: 2px;
}

.field-icon--location {
  font-size: 20px;
}

.field-icon--arrow {
  pointer-events: none;
  font-size: 14px;
  right: 4px;
}

.search-btn {
  height: 70px;
  background: #19785A;
  box-shadow: 0px 4px 10px #FFFFFF, 0px 0px 4px #19785A;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.2s ease;
  justify-self: end;
  align-self: end;
  padding: 0 24px;
}

.search-btn:hover {
  background: #146149;
  transform: translateY(-2px);
}
</style>