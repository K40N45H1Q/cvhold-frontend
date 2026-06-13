<template>
    <div class="resume-wrapper">
        <div class="resume">
            <!-- ЛЕВАЯ СЕКЦИЯ -->
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
    </div>
</template>

<style scoped>
/* ============================
   ОБЁРТКА: убираем жесткий aspect-ratio, пусть высота зависит от контента
   ============================ */
.resume-wrapper {
    width: 100%;
    max-width: 1600px;
    padding-top: 30px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: clamp(1.25rem, 3vw, 2.5rem);
}

/* ============================
   СЕТКА: 2 колонки на десктопе, 1 на мобильном (< 900px)
   ============================ */
.resume {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;
}

@media (max-width: 1300px) {
    .resume {
        grid-template-columns: 1fr; /* Перестроение в 1 колонку */
    }
}

/* ============================
   КАРТОЧКИ: гарантия сохранения пропорций блока
   Оригинальная пропорция одной карточки: ~793px / 492px ≈ 1.61
   ============================ */
.left, .right {
    position: relative;
    background: #F2F6F7;
    border-radius: 20px;
    width: 100%;
    aspect-ratio: 1.61 / 1; /* Высота всегда строго пропорциональна ширине */
    overflow: hidden;
    
    /* МАГИЯ: Делаем карточку "контейнером" для скейла внутренних элементов */
    container-type: inline-size;
    box-sizing: border-box;
}

/* ============================
   КОНТЕНТ: строгий пропорциональный скейл через cqw
   (Расчет: оригинальный размер в px / 793px * 100)
   ============================ */
.content {
    position: relative;
    z-index: 2;
    /* 60px -> 7.56cqw, 29px -> 3.65cqw */
    padding: 7.56cqw 0 0 3.65cqw; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* 420px -> 53cqw */
    width: 53cqw;
    height: 85%;
}

/* ============================
   ТИПОГРАФИКА: скейлится пропорционально, но не меньше читаемого минимума
   ============================ */
.label {
    font-weight: 400;
    /* 20px -> 2.52cqw */
    font-size: clamp(13px, 2.52cqw, 20px);
    color: rgba(30, 35, 38, 0.5);
    /* 8px -> 1cqw */
    margin-bottom: 1cqw;
}

.title {
    font-weight: 600;
    /* 35px -> 4.41cqw */
    font-size: clamp(5px, 4.41cqw, 15px);
    line-height: 1.2;
    text-transform: uppercase;
    /* 14px -> 1.76cqw */
    margin: 0 0 1.76cqw 0;
    /* 500px -> 63cqw */
    max-width: 63cqw;
}

.title .green { color: #19785A; }
.title .dark  { color: #1E2326; }

.features {
    font-weight: 400;
    /* 20px -> 2.52cqw */
    font-size: clamp(5px, 2.52cqw, 20px);
    line-height: 1.4;
    color: #1E2326;
    list-style: none;
    /* 450px -> 56.7cqw */
    max-width: 56.7cqw;
    /* 20px -> 2.52cqw */
    margin: 0 0 2.52cqw 0;
    padding: 0;
}

.features li {
    /* 4px -> 0.5cqw */
    margin-bottom: 0.5cqw;
}

/* ============================
   КНОПКА: скейлится пропорционально, но минимум 44px для удобного нажатия пальцем
   ============================ */
.btn {
    /* 333px -> 42cqw */
    min-width: 50px;
    /* 70px -> 8.82cqw */
    height: max-content;
    padding: 15px;
    background: #19785A;
    box-shadow: 0px 4px 10px #FFFFFF, 0px 0px 4px #19785A;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    /* 18px -> 2.27cqw */
    font-size: clamp(10px, 2.27cqw, 15px);
    text-transform: uppercase;
    color: #FFFFFF;
    transition: background-color 0.2s ease, transform 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn:hover {
    background: #146149;
    transform: translateY(-2px);
}

/* ============================
   ИЗОБРАЖЕНИЯ: скейлятся пропорционально ширине карточки
   ============================ */
.phone {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    /* 320px -> 40.35cqw */
    width: clamp(140px, 40.35cqw, 320px);
    height: auto; /* Сохраняет собственные пропорции картинки */
    filter: drop-shadow(0px 0px 11.6px rgba(0, 0, 0, 0.25));
    z-index: 1;
}

.man-photo {
    position: absolute;
    right: 0;
    top: 0;
    /* 590px -> 74.4cqw */
    width: clamp(200px, 74.4cqw, 590px);
    height: 100%;
    object-fit: cover;
    border-radius: 0 20px 20px 0;
    z-index: 0;
}

/* Микро-коррекция для очень узких экранов (iPhone SE и аналоги) */
@media (max-width: 380px) {
    .content {
        width: 60cqw; /* Даем тексту чуть больше места */
        padding-left: 4cqw;
    }
    .features {
        max-width: 62cqw;
    }
}
</style>