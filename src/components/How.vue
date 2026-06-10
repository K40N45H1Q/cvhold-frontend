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
                <div class="step-title">Найдите/разместите вакансию</div>
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
.how-it-works {
    width: 1600px;
    margin: 80px auto 60px;
    font-family: 'Articulat CF', sans-serif;
}

.section-title {
    font-family: 'Articulat CF', sans-serif;
    font-weight: 400;
    font-size: 35px;
    line-height: 123%;
    text-transform: uppercase;
    color: #1E2326;
    margin: 0 0 60px 0;
    text-align: center;
    white-space: nowrap;
}

.steps-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 1600px;
}

.step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 280px;
}

.step-icon {
    width: 75px;
    height: 75px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px #FFFFFF, 0px 0px 10px #19785A;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.step-title {
    font-family: 'Articulat CF', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: #1E2326;
    margin-bottom: 6px;
    height: 27px;
}

.step-desc {
    font-family: 'Articulat CF', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #1E2326;
    height: 48px;
    width: 250px;
}
</style>