<template>
    <div class="resume-wrapper">
        <div class="resume">
            <div class="left">
                <div class="content">
                    <div class="label">ДЛЯ СОИСКАТЕЛЕЙ</div>
                    <h2 class="title">
                        <span class="green">НАЙДИТЕ РАБОТУ</span><br>
                        <span class="dark">СВОЕЙ МЕЧТЫ</span>
                    </h2>
                    <ul class="features">
                        <li>• Тысячи актуальных вакансий по всей Европе</li>
                        <li>• Прямой контакт с работодателями</li>
                        <li>• Быстрый отклик без лишних шагов</li>
                    </ul>
                    <button class="btn btn-primary">СОЗДАТЬ РЕЗЮМЕ</button>
                </div>
                <img src="/phone.png" alt="phone" class="phone">
            </div>

            <div class="right">
                <img src="/man.png" alt="man" class="man-photo">
                <div class="content">
                    <div class="label">ДЛЯ РАБОТОДАТЕЛЕЙ</div>
                    <h2 class="title">
                        <span class="green">НАХОДИТЕ </span><span class="dark">ЛУЧШИХ</span><br>
                        <span class="green">СОТРУДНИКОВ</span>
                    </h2>
                    <ul class="features">
                        <li>• Доступ к активной базе кандидатов</li>
                        <li>• Удобное управление вакансиями</li>
                        <li>• Быстрая публикация вакансий</li>
                    </ul>
                    <button class="btn btn-primary">РАЗМЕСТИТЬ ВАКАНСИЮ</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.resume-wrapper {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: var(--indent);
}

.resume {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--indent);
    width: 100%;
}

.left, .right {
    position: relative;
    display: flex;
    background: #F2F6F7;
    border-radius: 20px;
    width: 100%;
    aspect-ratio: 1.61 / 1;
    overflow: hidden;
    container-type: inline-size;
}

.content {
    position: absolute;
    top: 10px;
    left: 10px;
    height: 90%;
    display: flex;
    padding: 3%;
    flex-direction: column;
    gap: 3%;
}

.content button {
    position: absolute;
    bottom: 0;
}

.label {
    font-weight: 400;
    font-size: clamp(12px, 3cqw, 15px);
    color: rgba(30, 35, 38, 0.55);
    letter-spacing: 0.04em;
    margin-bottom: 1cqw;
}

.title {
    font-weight: 700;
    font-size: clamp(15px, 3cqw, 20px);
    line-height: 1.15;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    max-width: 60cqw;
}

.title .green {
    color: #19785A;
}

.title .dark {
    color: #1E2326;
}

.features {
    font-size: clamp(9px, 2.5cqw, 18px);
    flex-wrap: wrap;
    color: #1E2326;
    list-style: none;
    padding: 0;
    max-width: 56cqw;
    display: flex;
    flex-direction: column;
    height: max-content;
}

.features li {
    margin-bottom: 0.6cqw;
}

.btn {
    padding: 14px 18px;
    background: #19785A;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    white-space: nowarp;
    font-size: clamp(8px, 2.4cqw, 15px);
    text-transform: uppercase;
    color: #fff;
    transition: 0.2s ease;
    display: flex;
    align-items: center;
    width: 80%;
    justify-content: center;
    position: absolute;
}

.btn:hover {
    background: #146149;
    transform: translateY(-2px);
}

.phone {
    position: absolute;
    right: -2%;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    height: 100%;
    filter: drop-shadow(0px 0px 12px rgba(0,0,0,0.25));
    z-index: 1;
}

.man-photo {
    position: absolute;
    right: 0;
    top: 0;
    width: clamp(220px, 72cqw, 590px);
    height: 100%;
    object-fit: cover;
    border-radius: 0 20px 20px 0;
}

@media (max-width: 1300px) {
    .resume {
        grid-template-columns: 1fr;
    }
}
</style>