<template>
    <div class="resume">
        <!-- ЛЕВАЯ СЕКЦИЯ -->
        <div class="left">
            <div class="content">
                <div class="label">ДЛЯ СОИСКАТЕЛЕЙ</div>
                <h2 class="title">
                    <span class="green">НАЙДИТЕ РАБОТУ</span><br>
                    <span class="dark">СВОЕЙ МАЧТЫ</span>
                </h2>
                <ul class="features">
                    <li>• Тысячи актуальных вакансий по всей Европе</li>
                    <li>• Прямой контакт с работодателями</li>
                    <li>• Быстрый отклик без лишних шагов</li>
                </ul>
                <button class="btn">СОЗДАТЬ РЕЗЮМЕ</button>
            </div>
            <img src="/phone.png" alt="phone" class="phone">
        </div>

        <!-- ПРАВАЯ СЕКЦИЯ -->
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
                <button class="btn">РАЗМЕСТИТЬ ВАКАНСИЮ</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.resume {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1600px;
    height: 492px;
    margin: 0 auto;
    gap: 13px;
}

.left, .right {
    position: relative;
    background: #F2F6F7;
    border-radius: 20px;
    height: 492px;
    overflow: hidden;
}

.content {
    position: relative;
    z-index: 2;
    padding: 60px 0 0 29px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 420px;
    height: 90%;
}

.label {
    font-weight: 400;
    font-size: 20px;
    color: rgba(30, 35, 38, 0.5);
    margin-bottom: 8px;
}

.title {
    width: 500px;
    font-weight: 600;
    font-size: 35px;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 0 0 14px 0;
}

.title .green { color: #19785A; }
.title .dark  { color: #1E2326; }

.features {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    color: #1E2326;
    list-style: none;
    width: 450px;
    margin: 0 0 20px 0;
    padding: 0;
}

.features li {
    margin-bottom: 4px;
}

.btn {
    width: 333px;
    height: 70px;
    background: #19785A;
    box-shadow: 0px 4px 10px #FFFFFF, 0px 0px 4px #19785A;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-family: 'Articulat CF', sans-serif;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    color: #FFFFFF;
}

.phone {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 320px;
    height: 467px;
    filter: drop-shadow(0px 0px 11.6px rgba(0, 0, 0, 0.25));
    z-index: 1;
}

.man-photo {
    position: absolute;
    right: 0;
    top: 0;
    width: 590px;
    height: 492px;
    object-fit: cover;
    border-radius: 0 20px 20px 0;
    z-index: 0;
}
</style>