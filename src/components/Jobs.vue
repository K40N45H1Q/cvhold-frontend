<template>
  <div class="job-list">
    <div v-for="job in paginatedJobs" :key="job.id" class="job-card">
      <div class="logo" :style="{background: job.color}">{{ job.initials }}</div>
      
      <div class="info">
        <h3>{{ job.title }}</h3>
        <p class="company">{{ job.company }}</p>
        <div class="meta">
          <span class="location">📍 {{ job.location }}</span>
          <span class="badge">{{ job.type }}</span>
          <span class="badge">{{ job.mode }}</span>
        </div>
      </div>

      <div class="actions">
        <div class="salary">€{{ job.salary.toLocaleString() }} <span class="period">/мес</span></div>
        <button class="btn btn-primary">Подробнее</button>
      </div>
    </div>
    
    <div v-if="paginatedJobs.length === 0" class="no-results">
      Вакансии не найдены.
    </div>

    <div class="pagination">
      <button @click="page--" :disabled="page===1">‹</button>
      <button v-for="p in pages" :key="p" :class="{active: page===p}" @click="page=p">{{ p }}</button>
      <span v-if="totalPages > 5 && page < totalPages - 2" class="dots">...</span>
      <button v-if="totalPages > 5 && page < totalPages - 1" @click="page = totalPages">{{ totalPages }}</button>
      <button @click="page++" :disabled="page===totalPages">›</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const jobs = ref([
  {id:1,title:'Сварщик (MIG/MAG)',company:'Liebherr Group',initials:'LG',color:'#1a1a2e',location:'Мюнхен, Германия',type:'Полная занятость',mode:'На месте',salary:3200,country:'Germany',category:'Manufacturing'},
  {id:2,title:'Электрик строительный',company:'Siemens',initials:'SI',color:'#00a8e8',location:'Роттердам, Нидерланды',type:'Полная занятость',mode:'На месте',salary:2800,country:'Netherlands',category:'Construction'},
  {id:3,title:'Промышленный маляр',company:'ABB',initials:'AB',color:'#e30613',location:'Вроцлав, Польша',type:'Полная занятость',mode:'На месте',salary:2500,country:'Poland',category:'Manufacturing'},
  {id:4,title:'Техник HVAC',company:'Strabag',initials:'ST',color:'#c41e3a',location:'Вена, Австрия',type:'Полная занятость',mode:'На месте',salary:2800,country:'Austria',category:'Construction'},
  {id:5,title:'Инженер-механик',company:'Bosch',initials:'BO',color:'#ea0016',location:'Штутгарт, Германия',type:'Полная занятость',mode:'На месте',salary:4200,country:'Germany',category:'Engineering'},
  {id:6,title:'Оператор ЧПУ',company:'Schneider',initials:'SE',color:'#3dc759',location:'Гренобль, Франция',type:'Полная занятость',mode:'На месте',salary:2600,country:'France',category:'Manufacturing'},
  {id:7,title:'Инспектор по качеству',company:'Philips',initials:'PH',color:'#0e5fd8',location:'Амстердам, Нидерланды',type:'Полная занятость',mode:'На месте',salary:3100,country:'Netherlands',category:'Quality'},
  {id:8,title:'Техник по обслуживанию',company:'BASF',initials:'BA',color:'#000',location:'Людвигсхафен, Германия',type:'Полная занятость',mode:'На месте',salary:2900,country:'Germany',category:'Maintenance'},
  {id:9,title:'Специалист по охране труда',company:'Shell',initials:'SH',color:'#ffd500',location:'Гаага, Нидерланды',type:'Полная занятость',mode:'На месте',salary:3800,country:'Netherlands',category:'Safety'},
  {id:10,title:'Сборщик',company:'Volkswagen',initials:'VW',color:'#001e50',location:'Вольфсбург, Германия',type:'Полная занятость',mode:'На месте',salary:2700,country:'Germany',category:'Manufacturing'},
  {id:11,title:'Начальник производства',company:'Nestlé',initials:'NE',color:'#004b87',location:'Веве, Швейцария',type:'Полная занятость',mode:'На месте',salary:4500,country:'Switzerland',category:'Management'},
  {id:12,title:'Оператор погрузчика',company:'DHL',initials:'DH',color:'#ffcc00',location:'Бонн, Германия',type:'Полная занятость',mode:'На месте',salary:2400,country:'Germany',category:'Logistics'},
])

const page = ref(1)
const perPage = 4

const filteredJobs = computed(() => {
  const query = route.query.q?.toLowerCase() || ''
  const loc = route.query.loc?.toLowerCase() || ''
  const cat = route.query.cat || ''
  
  return jobs.value.filter(job => {
    const matchesQuery = !query || 
      job.title.toLowerCase().includes(query) || 
      job.company.toLowerCase().includes(query)
    
    const matchesLocation = !loc || 
      job.location.toLowerCase().includes(loc) || 
      job.country.toLowerCase().includes(loc)
    
    const matchesCategory = !cat || job.category === cat
    
    return matchesQuery && matchesLocation && matchesCategory
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredJobs.value.length / perPage)))

const paginatedJobs = computed(() => 
  filteredJobs.value.slice((page.value - 1) * perPage, page.value * perPage)
)

const pages = computed(() => {
  const total = totalPages.value
  if (total <= 5) return Array.from({length: total}, (_, i) => i + 1)
  
  let start = Math.max(1, page.value - 2)
  let end = Math.min(total, page.value + 2)
  
  if (start === 1) end = 5
  if (end === total) start = total - 4
  
  return Array.from({length: end - start + 1}, (_, i) => start + i)
})

watch(() => route.query, () => {
  page.value = 1
}, { deep: true })
</script>

<style scoped>
.job-list {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 1.25rem;
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  min-height: calc(100vh - 320px);
}

.job-card {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 
    "logo"
    "info"
    "actions";
  gap: 1rem;
  align-items: center;
  padding: 1.5rem;
  background: #fff;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  flex-shrink: 0;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .job-card {
    grid-template-columns: clamp(3rem, 5vw, 4.5rem) 1fr auto;
    grid-template-areas: "logo info actions";
    max-height: 160px;
  }
}

.job-card:hover {
  border-color: #19785A;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(25, 120, 90, 0.1);
}

.logo {
  grid-area: logo;
  width: clamp(3rem, 8vw, 4.5rem);
  height: clamp(3rem, 8vw, 4.5rem);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #fff;
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  flex-shrink: 0;
}

.info {
  grid-area: info;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 0;
}

.info h3 { 
  font-size: clamp(1rem, 2.5vw, 1.25rem); 
  margin: 0; 
  font-weight: 700;
  color: #1e2326;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info .company { 
  color: rgba(30, 35, 38, 0.5); 
  margin: 0; 
  font-size: clamp(0.8rem, 2vw, 0.875rem);
}

.meta {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  color: rgba(30, 35, 38, 0.5);
  font-size: clamp(0.75rem, 2vw, 0.8rem);
  flex-wrap: wrap;
}

.badge {
  background: #f1f5f9;
  padding: 0.25rem 0.6rem;
  border-radius: 0.25rem;
  font-size: clamp(0.7rem, 1.5vw, 0.75rem);
  white-space: nowrap;
  color: #1e2326;
}

.actions {
  grid-area: actions;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
}

@media (min-width: 768px) {
  .actions {
    justify-content: flex-end;
    width: auto;
  }
}

.salary {
  font-weight: 700;
  color: #19785A;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  white-space: nowrap;
}

.salary .period {
  font-size: clamp(0.75rem, 2vw, 0.8rem);
  color: rgba(30, 35, 38, 0.5);
  font-weight: 400;
}

.btn-primary {
  background: #19785A;
  color: #fff;
  border: none;
  padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1rem);
  font-size: clamp(0.8rem, 2vw, 0.875rem);
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: #145a45;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(25, 120, 90, 0.2);
}

.no-results {
  flex: 1;
  min-height: 200px;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 3rem;
  color: rgba(30, 35, 38, 0.5);
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  text-align: center;
}

.pagination {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 0 0;
  border-top: 1px solid #e2e8f0;
  flex-shrink: 0;
  margin-top: auto;
}

.pagination button {
  padding: 0.5rem;
  min-width: 38px;
  height: 38px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  color: #1e2326;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
}

.pagination button:hover:not(:disabled) {
  border-color: #19785A;
  color: #19785A;
  background: #f1f5f9;
}

.pagination button.active {
  background: #19785A;
  border-color: #19785A;
  color: #fff;
  transform: scale(1.05);
  box-shadow: 0 4px 15px -3px rgba(25, 120, 90, 0.3);
}

.pagination button:not(.active):hover {
  transform: scale(1.05);
}

.pagination button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.dots {
  color: rgba(30, 35, 38, 0.5);
  padding: 0 0.25rem;
  font-size: clamp(0.8rem, 2vw, 0.875rem);
}
</style>