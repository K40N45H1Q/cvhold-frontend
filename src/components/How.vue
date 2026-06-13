<template>
    <div class="how-it-works">
        <h2 class="section-title">КАК ЭТО РАБОТАЕТ?</h2>

        <div class="steps-wrapper">
            <div class="step">
                <div class="step-icon">
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <defs>
                            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="6.5%" stop-color="#19785A"/>
                                <stop offset="131.59%" stop-color="#19785A" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                        <circle cx="21" cy="14" r="7" fill="url(#g1)"/>
                        <path d="M7 34c0-7.732 6.268-14 14-14s14 6.268 14 14" fill="url(#g1)"/>
                    </svg>
                </div>
                <div class="step-title">Создайте профиль</div>
                <div class="step-desc">Зарегистрируйтесь как работодатель или специалист.</div>
            </div>

            <div class="step">
                <div class="step-icon">
                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none">
                        <defs>
                            <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0.82%" stop-color="#19785A"/>
                                <stop offset="124.9%" stop-color="#19785A" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                        <circle cx="17" cy="17" r="9" stroke="url(#g2)" stroke-width="3" fill="none"/>
                        <line x1="24" y1="24" x2="34" y2="34" stroke="url(#g2)" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                </div>
                <div class="step-title">Найдите или разместите вакансию</div>
                <div class="step-desc">Используйте удобный поиск или публикуйте предложения.</div>
            </div>

            <div class="step">
                <div class="step-icon">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <defs>
                            <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0.17%" stop-color="#19785A"/>
                                <stop offset="99.83%" stop-color="#19785A" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                        <path d="M3 7c0-2.2 1.8-4 4-4h20c2.2 0 4 1.8 4 4v14c0 2.2-1.8 4-4 4H15l-5 5v-5h-3c-2.2 0-4-1.8-4-4V7z" fill="url(#g3)"/>
                        <circle cx="11" cy="15" r="2" fill="white"/>
                        <circle cx="17" cy="15" r="2" fill="white"/>
                        <circle cx="23" cy="15" r="2" fill="white"/>
                    </svg>
                </div>
                <div class="step-title">Свяжитесь напрямую</div>
                <div class="step-desc">Общайтесь без посредников и лишних комиссий.</div>
            </div>

            <div class="step">
                <div class="step-icon">
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
                        <defs>
                            <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="3.6%" stop-color="#19785A"/>
                                <stop offset="131.9%" stop-color="#19785A" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                        <path d="M10 21l8 8 14-16" stroke="url(#g4)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="8" y1="33" x2="33" y2="33" stroke="url(#g4)" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                </div>
                <div class="step-title">Достигайте результата</div>
                <div class="step-desc">Находите работу или сотрудников быстрее.</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* ============================
   БАЗОВЫЕ НАСТРОЙКИ
   ============================ */
.how-it-works {
    width: 100%;
    max-width: 1600px;
    margin: clamp(32px, 4vw, 40px) auto clamp(40px, 6vw, 60px);
    padding: 0 16px;
    box-sizing: border-box;
    font-family: 'Articulat CF', sans-serif;
}

.section-title {
    font-weight: 400;
    /* Плавное масштабирование заголовка от 22px на маленьких экранах до 35px */
    font-size: clamp(22px, 2.5vw + 12px, 35px);
    line-height: 1.2;
    text-transform: uppercase;
    color: #1E2326;
    margin-bottom: clamp(24px, 4vw, 60px);
    text-align: center;
}

/* ============================
   СЕТКА ШАГОВ (Строго 2 или 4 в ряд)
   ============================ */
.steps-wrapper {
    display: grid;
    /* Базовое состояние для мобильных: строго 2 в ряд */
    grid-template-columns: repeat(2, 1fr);
    /* Адаптивные отступы между карточками */
    gap: clamp(24px, 3vw, 40px) clamp(12px, 2vw, 24px);
    width: 100%;
}

/* Переключение на 4 в ряд для десктопов и больших планшетов */
@media (min-width: 992px) {
    .steps-wrapper {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* ============================
   КАРТОЧКА ШАГА
   ============================ */
.step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
}

.step-icon {
    /* Резиновый размер кругов с иконками */
    width: clamp(56px, 6vw + 20px, 75px);
    height: clamp(56px, 6vw + 20px, 75px);
    background: #FFFFFF;
    box-shadow: 0px 0px 10px #FFFFFF, 0px 0px 10px #19785A;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: clamp(12px, 2vw, 20px);
    flex-shrink: 0;
}

.step-icon svg {
    width: 55%;
    height: 55%;
}

.step-title {
    font-weight: 700;
    /* Шрифт заголовка плавно растет от 14px до 18px */
    font-size: clamp(15px, 1vw, 20px);
    line-height: 1.3;
    color: #1E2326;
    margin-bottom: clamp(6px, 1vw, 10px);
}

.step-desc {
    font-weight: 400;
    /* Шрифт описания плавно растет от 12px до 16px */
    font-size: clamp(12px, 0.4vw + 11px, 16px);
    line-height: 1.45;
    color: #1E2326;
    max-width: 280px;
    margin: 0 auto;
    display: none;
}
</style>