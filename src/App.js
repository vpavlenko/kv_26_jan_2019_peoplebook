import React, { Component } from 'react';
import Linkify from 'react-linkify';
import logo from './logo.svg';
import './App.css';

const people = [
  {
    "timestamp": "2019/01/15 1:44:00 AM GMT+3",
    "name": "Виталик Павленко",
    "occupation": "Делаю учебник программирования (Snakify/Питонтьютор). Ещё делаю сеть чатов айтишников по интересами и городам (SNS). Раньше руководил разработкой в стартапах (ASAP, Jetway, 2long2read) и стажировался в разных компаниях, в основном за рубежом (Google, Palantir, Intel)",
    "knowledge": "Нью-Йорк, Лос-Анджелес, Токио, Лиссабон. Городские оргии и дейтинг, вещества, симфонии и теория музыки. Как искать новых людей в незнакомых городах. Бридж, парапланы. Стартапы и бизнес",
    "photo": "https://pp.userapi.com/c841320/v841320573/3f0d1/rDFRt4woplA.jpg",
    "profiles": "https://www.instagram.com/vitaly__pavlenko/"
  },
  {
    "timestamp": "2019/01/15 2:04:31 AM GMT+3",
    "name": "Лидия (Lie Wavelet at Telegram)",
    "occupation": "Ищу возможность перейти в тестировщики, ибо нравится данная область, хотелось бы иметь дело с функциональным тестированием. Ныне занимаюсь при Научном Парке МГУ соединением приборов в систему для дальнейшего автономного процесса химического синтеза (типа систем Flow Chemistry). Это составляет мой научный интерес работы - автоматизация процессов химического синтеза и контроля качества, чем готова заниматься в качестве собственного проекта. Интерес к подобным смежным областям и объединению не случаен - по первому образованию я как раз химик.",
    "knowledge": "Карелия, леса и реки Московской, Калужской и Тверской областей, автономные многодневные летние походы (вело- и сплавы), спелеология, заброшенные усадьбы и объекты (преимущественно МО), химия и софт для моделирования в области квантовой химии. ",
    "photo": process.env.PUBLIC_URL + "/photos/lidia.png",
    "profiles": "VK: raukreutz, Telegram: eco_blanco"
  },
  {
    "timestamp": "2019/01/15 5:13:35 AM GMT+3",
    "name": "Daria Anzon",
    "occupation": "Free agent во всех смыслах. Больше балерина, чем программист. (я не балерина) ",
    "knowledge": "Путешествия без денег, классическая мафия",
    "photo": process.env.PUBLIC_URL + "/photos/anzon.jpg",
    "profiles": "@darand_ya тг"
  },
  {
    "timestamp": "2019/01/15 6:54:30 AM GMT+3",
    "name": "Юлия Беймлина",
    "occupation": "Работаю в edtech, учиру, разработка контента, контроль его качества и исполнителей, работающих с ним, продажи услуги. Раньше работала учителем инглиша, тичила во всяких разных странах, экзотических и не. Фулбрайт алюмна ;)",
    "knowledge": "Мотивационное письмо на стажировки, учебу, работу эброд; как поехать работать в страну, на языке которой ты не говоришь и чтоб всё было относительно чики-пуки",
    "photo": process.env.PUBLIC_URL + "/photos/beimlina.jpg",
    "profiles": "https://www.facebook.com/yulia.beymlina"
  },
  {
    "timestamp": "2019/01/15 9:44:05 AM GMT+3",
    "name": "Максим Аверин",
    "occupation": "BestDoctor, backend, python, product, custdev",
    "knowledge": "Общение с людьми, знакомства с девушками, где вкусно поесть в Москве и Питере",
    "photo": "https://pp.userapi.com/c844521/v844521671/ba920/z9cs3IVuUW4.jpg",
    "profiles": "mistervaverin везде"
  },
  {
    "timestamp": "2019/01/15 10:12:14 AM GMT+3",
    "name": "Слава Сабиров",
    "occupation": "Работаю в Ростелеке синьор продактом на новом продукте про онлайн образование. До этого работал продактом в учи.ру, аналитиком в венчурном фонде I2BF на $400М, продакт(не айти)/биздев в нанотрубочной OCSiAl и до этого всего у меня был свой стартап Dream Beamer (продукт делает так, что проектор не слепит человека в луче) с инвестициями из Гонконга и продажами там же. Закончил Сколтех/Физтех (помехоустойчивое кодирование, вероятностные модели) (+год в Гонконгском HKUST, и семестр в MIT) ",
    "knowledge": "Гонконг, Бостон, нанотрубки, экранопланы, аналитика компаний ранней стадии",
    "photo": process.env.PUBLIC_URL + "/photos/sabirov.png",
    "profiles": "Слава Сабиров (vk) Slava Sabirov (fb) Viacheslav Sabirov (linkedin) vdsabirov@gmail.com"
  },
  {
    "timestamp": "2019/01/15 10:51:20 AM GMT+3",
    "name": "Витя Хотин",
    "occupation": "Учусь в МГТУ им. Баумана на 2 курсе магистратуры по специальности программная инженерия. Работаю программистом в стартапе по финансовой аналитике Exerica. Подрабатываю ассистентом на кафедре, преподаю информатику и базы данных. Участвую в жизни студенческой организации ESTIEM, периодически веду разговорный английский и экскурсии для иностранцев.",
    "knowledge": "Музыка (Enter Shikari), кинематограф, депрессия, Бауманка.",
    "photo": "https://goo.gl/3uSSZH",
    "profiles": "https://www.linkedin.com/in/vikhotin/\nhttps://www.facebook.com/vikhotin\nhttps://vk.com/vikhotin\nhttps://twitter.com/EnterVictor"
  },
  {
    "timestamp": "2019/01/15 12:13:38 PM GMT+3",
    "name": "Дмитрий Дяговченко",
    "occupation": "Учеба - Интеллектуал, Физтех(ФРТК), Сколтех. Предпренимательствовал, продавал покрытия для стекол. Стажировался в Яндексе. Делал диплом по телемедицине с помощью CV, пытался загнать как продукт на рынок. Делал на заказ систему видеораспознавания событий для казино. Консультировал криптотрейдеров. Последний год работаю в стартапе, двигаем машинку, статанализ и оптимизацию для производителей горной отрасли. ",
    "knowledge": "Инвестиции, здоровье, анализ рынка, немного путешествий.",
    "photo": process.env.PUBLIC_URL + "/photos/diagovchenko.png",
    "profiles": "vk.com/dyago"
  },
  {
    "timestamp": "2019/01/15 12:14:53 PM GMT+3",
    "name": "Лиза Свитанько",
    "occupation": "Учусь на ФКН (машин лернинг), работаю в Яндехе (фронтенд). Была на стажировочках в Гугле и Циско. Тусила по всей Америке год ❤️",
    "knowledge": "Америка, фкн, яндех, путешествия, стажировки, тайм-менеджмент, еда, танцы, все что угодно, о чем вы знаете меньше меня :)",
    "photo": process.env.PUBLIC_URL + "/photos/liza.jpg",
    "profiles": "LinkedIn: https://www.linkedin.com/in/elizaveta-svitanko\nGithub: https://github.com/ElizabethSvit\nFacebook: https://www.facebook.com/lizik.svitik\nПочта: lizasvit@gmail.com"
  },
  {
    "timestamp": "2019/01/15 12:15:40 PM GMT+3",
    "name": "Дарина Дементьева",
    "occupation": "Сейчас учусь в магистратуре МФТИ, научрук - Вороноцов, очень люблю DS и анализ текстов. Раньше жизнь носила меня по Киеву и Иннополису. Работаю в стартапе дата саентистом. Мечтаю поехать в Сингапур :)",
    "knowledge": "Data Science, технологии, образование у нас и зарубежом, кейс-чемпионаты, музыка и игра на гитаре/укулеле, как быть девушкой в ит, философия",
    "photo": process.env.PUBLIC_URL + "/photos/daryna.png",
    "profiles": "почти везде по @dementyeva_ds"
  },
  {
    "timestamp": "2019/01/15 12:22:31 PM GMT+3",
    "name": "Федя Киташов",
    "occupation": "#whois из сентября 2017го:\nЯ Федя, закончил три курса физтеха, успел подоставлять пиццу дронами в Copter Express и поработать в Лаборатории Касперского в Москве, взял академ, уехал на год в Cisco в Сан Хосе. Буду в Долине до августа 2018, люблю участвовать в хакатонах в Bay Area и вообще в США.\nСейчас: \nПоработал в Долине, попутешествовал по Штатам. Сделал рисерч про то, как можно автоматически корректировать фонетические транскрипции в английском, чтобы звучать как нэйтив. Статью не взяли ни на одну хорошую конференцию :(\nОтходил ногами на CS224n (NLP with Deep Learning) в Стэнфорд и сделал проект по исправлению артиклей в английском: https://owoshch.github.io/grammar_checker/\nЧетвертый курс прикладной математики и физики на Физтехе. Фултайм в команде компьютерного зрения в почте Mail.Ru. Учу нейросети находить и закрашивать дырки в старых пленочных фильмах. ",
    "knowledge": "Путешествия по США, живая музыка в Москве",
    "photo": "https://lh3.googleusercontent.com/lKHRKiUhGBNoAnvLd8cY8B4CoxR4Jf9xD2C9XGEE84fd03o2qC-FwK3aj6E4LWX3mcaXSPx-UKVQHhM43YC_OObo9AyHN7AUAvdbNt6PUwywDYdwlnZJOqSaQRteP3kLq9nlxt3xrlF_boBW5sYfERcvX5z5-lGTQAHjNuCQArtj6oC1u3hLiA7RQYu0KBMRH9rArjYsA19zb8JeLsobnIgNgJD_F6gdcaqv-TocqW4pgeklqtInQ6QqG8hv1voqg50i6zIX-dI4kzu76c3kbhq55Kj2rVk1gLY5cIKsnETadmQV4u6lJdgBeWqDEg3F5H11kegR-RFpTW2WwIeesAVwgR3WOQ640sBbRWYbgjcfva2pyhonkG9CmT4rJXU5G2ULl3hVYA9N8sxE_cGt4ZbERHLRAIBn7BzKnZrNq2CLFb64Npumm-tLYxws8s3RGpmwThMOBdvy3CgQH1VK7S5dQABVvvEFP6kP6KMA0CGje_5SLyc5_n9RBgdXSaa77rm81zOMQPs-93GUW-jDu70_TwKUdfUaP1YoU3yrHF28kJ900EsOddWCfw45FFMprf1jXpPN2jhksiw2VmZwfHA_fY7iEjmd5L_p9fI9qlPc6RnWtBb1FtTDZyBhnvpDMuSsYFoU4RbfaL7lQWuXr410aYcVbI_qFrRnpsziZUmYfxd7DkTC9ocS6MA7GSbNqqabacl5rRLF0mI9P4Y=w1152-h1534-no",
    "profiles": "instagram.com/owoshch/\nvk.com/kitash\nfacebook.com/fedor.kitashov\nhttp://linkedin.com/in/fedor.kitashov"
  },
  {
    "timestamp": "2019/01/15 12:25:56 PM GMT+3",
    "name": "Максим Артемьев",
    "occupation": "Был стажером в яндекс дзене полгода, сейчас делаю мл рисерч в лаборатории, анализирую и генерирую каоны всякие. Преподаю основы мл/дата саенса для школьников и 1с разработчиков",
    "knowledge": "Могу рассказать про Казань, про вышку+фкн, про то как преподаю ",
    "photo": "https://pp.userapi.com/c841127/v841127836/5ae70/KzNy3lgZybY.jpg",
    "profiles": "@meretemev"
  },
  {
    "timestamp": "2019/01/15 12:45:38 PM GMT+3",
    "name": "Ваня Клименко",
    "occupation": "Первый курс технического вуза. Делал сайты разным магазинам и посольству Греции в Кодельной. Попиливал Питонтьютор Виталика. Оператор Скетча второго разряда — умею играть в нём мурку на скорость. Учу школьников и младшекурсников основам инфобеза, провожу региональные CTF-соревнования. В свободное время делаю телеграм-ботов и пишу музыку. ",
    "knowledge": "Меня можно спросить про:\n— состояние CTF в этой стране\n— типографику и дизайн интерфейса \n— житие в сибирской дыре\n— самокрутки\n— то, почему я такой школьник",
    "photo": "https://vanyaklimenko.ru/me.jpg",
    "photo": "http://vanyaklimenko.ru/me.jpg",
    "profiles": "t.me/mayst\nvanyaklimenko.ru"
  },
  {
    "timestamp": "2019/01/15 12:56:33 PM GMT+3",
    "name": "Надя Катричева",
    "occupation": "Сейчас учусь в маге ВШЭ \"Компьютерная лингвистика\", начала заниматься визуализациями в https://rusvectores.org/ , подрабатываю репетитором. В прошлом учила английскому в РАНХиГС и 57 школе, переводила на английский фултайм в Лаборатории Касперского, ещё немного была младшим креатором в digital-агентстве и переводила для \"НЛО\", когда заканчивала специалитет по филологии в МГУ.",
    "knowledge": "Языки (но не исключено, что Виталик знает больше), как выучить английский, комплинг, йога, джаз-модерн, каучсёрфинг, пневмония, пиявки, Артек, Грузия, США, Бразилия",
    "photo": process.env.PUBLIC_URL + "/photos/katricheva.jpg",
    "profiles": "@aikakysymys https://www.facebook.com/n.katricheva"
  },
  {
    "timestamp": "2019/01/15 1:12:29 PM GMT+3",
    "name": "Александра Иглина",
    "occupation": "Учусь в МФТИ на кафедре компьютерной лингвистики.\nТри раза была на стажировках в больших компаниях - Гугл (дважды) и Фейсбук.\nСуммарно почти год прожила в Америке.\nПриняла оффер в Гугл Лондон.",
    "knowledge": "Как поехать на стажировку, как проходить алгоритмическое интервью.\nЧто происходит в NLP.\nКак жить в Америке и не облажаться.\nМного знаю про иудаизм.\nКак бороться с депрессией (спойлер - идти к врачу).\nЕщё могу рассказать про бардовскую песню.",
    "photo": "https://lh3.googleusercontent.com/FTDduh3brqrDw72zTRbbqVZdtKpZzqMMGeLwTrxvs9VLD2ToKdPyFL6QD3J2iwLzj3j4LMJNW6us03_JXPK0pJkfKp54sIshLNRXeVhL8Ai3PsE3GZqynmLkaa9KlSHb9toL2Q7By_OYhfIGzx8Pxenh1kYYr_CzK1KB3pWIccQpNM-Y71DAVAeJ0td-pAE1IL8bqNQ9xS8WQ2qMhr5xshk160-2gvZNHl2A2r2JHLioBuf5KbKVJvfh9poSJZo0zBHcUUQ6RUJ50TSWFkFSH1aarG6fE5UaXrzL1UQJO9Mdjn29hpktT1RuajWDq47XJsMfL9zB8f7-kzRuiXzvp-AYxJ4O-s2yZSN3yA8iP_WgAllAX78syK4L3UezqBi0C1SXZFxNrSWDi4XFydIPdKigPP4QxIFURuMCtPkntXI3e7m9IgpWgzb0iMl4Brm7aDb5bpyTBxB0iEKOBWsW8QePaFqChjOujRp3ZOtVtD23dmLh8yhx928w3F_R4OO3M2zJTol-8HaYEcXF-Pt9Dqiif0u_9Q602DkGLRFvbFFbtUYmc6_w98Ov5kVHSzjX6TjO9J_NbH-R0Y7naSRgiFdqq3ifrZMDoHdhYOOWzsAZe98sDJuWEpSZJZWAHs6pmDJXVr4_H8ADQcRY4WKjkt0Kha_SxyrM6t8iUty3cZJZ8BaamW6cCch7xl9r0tRPlvR_Rpt8kGjYJUjkmA=w1152-h1534-no",
    "profiles": "Telegram: @Loulett\nInstagram: butjustyouwait\nLinkedIn: www.linkedin.com/in/alexandra-iglina/\nTwitter: @Loullett\nE-mail: aiglina@gmail.com"
  },
  {
    "timestamp": "2019/01/15 1:27:20 PM GMT+3",
    "name": "Павел Гаврилов",
    "occupation": "Яндекс (4 года 6 мес) - большую часть времени занимаюсь биллингом, построил с нуля с небольшой командой сервис онлайн-касс. Построил систему для оценки удобочитаемости написанного текста.\nTamarind (4 мес) - строил платформу для высокочастотной торговли. Оптимизировал кучу медленных мест. Сделал эмулятор биржи (на Haskell'е :D).\nBinary Helix Systems (11 мес) - сделал медицинскую систему для повышения качества лечения больных диабетом первого типа. Много формул. Отчёты с графиками. Мониторинг течения заболевания.\n\nАспирантура МГТУ им. Баумана. Занимаюсь решением задач машинного обучения, в которых у объектов неполное признаковое описание. Другими словами, часть значений признаков отсутствует.",
    "knowledge": "Не могу сказать, что о темах, которые я перечислю, я знаю больше других, но это то, что мне интересно.\n\nМашинное обучение, включая историю развития области в целом. Математика. Программирование. Философия. Медицина. Психология. Музыка. Литература. Личная эффективность.\n\nБолее полугода прожил в NYC. Был в Новом Афоне в Абхазии, в Портленде на pycon.",
    "photo": process.env.PUBLIC_URL + "/photos/gavrilov.jpg",
    "profiles": "https://t.me/gavrilovp\n\nhttps://www.linkedin.com/in/gavrilovp/\npavelgavrilov19@gmail.com"
  },
  {
    "timestamp": "2019/01/15 1:45:14 PM GMT+3",
    "name": "Кирилл Бобырёв",
    "occupation": "Учусь на ФУПМ МФТИ. Два раза стажировался в Google и занимался компиляторными проектами, связанными с LLVM и Clang, перед этим был на Google Summer of Code. Из науки нравится Convex Optimization и Reinforcement Learning, в свободное время читаю статьи с arXiv или смотрю курсы вроде cs231n.",
    "knowledge": "Компиляторы, жизнь в Мюнхене, работа в Google",
    "photo": "https://pp.userapi.com/c844618/v844618939/bfef3/Z-gZtliBSJE.jpg",
    "profiles": "twitter.com/kirillbobyrev\nvk.com/kbobyrev\nlinkedin.com/in/kbobyrev"
  },
  {
    "timestamp": "2019/01/15 1:59:37 PM GMT+3",
    "name": "Вася Сиников",
    "occupation": "Соосновал, накодил и надизайнил MVP,  а теперь управляю развитием продуктов в www.compensair.com Обращайтесь, если у вас задержат рейс, мы выплатили уже больше 2 млн евро компенсаций. До этого учился и работал околоэкономистом. Слушаю музыку, рисую граффити, играю в шахматы",
    "knowledge": "Продакт-менеджмент, все аспекты стартапинга, Тверь, Екатеринбург, Москва, Лондон, Барселона, граффити и стритарт, шахматы, техно-хаус-джаз-хипхоп музыка, стратегический консалтинг, аудит, кейс-чемпионаты, финансовая аналитика, ВШЭ, английский и испанский язык, executive search, организация форумов, развитие сообществ, психология, долгие романтические отношения и их конец, путь к счастью и чилл по жизни :)",
    "photo": process.env.PUBLIC_URL + "/photos/sinikov.png",
    "profiles": "Добавляйтесь в друзьяшки https://vk.com/va.sinikov t.me/sinikov www.linkedin.com/in/vasinikov"
  },
  {
    "timestamp": "2019/01/15 3:25:43 PM GMT+3",
    "name": "Саша Илларионов",
    "occupation": "Занимаюсь дата-инжинирией, анализом данных и веб-разработкой. Сейчас занят Мэпош, интерактивной картой третьих мест (сейчас проект на ранней стадии, будет доступен на maposh.com). Исследовал обучение с подкреплением, предсказание биоинформатических метаданных, квантовый хаос, квазикристаллы. Пишу каждый день в https://sdll.space.",
    "knowledge": "Обучение зарубежом: Лондон (учился два года в Westminster School), Торонто (учился год в UToronto). ",
    "photo": "https://raw.githubusercontent.com/sdll/sdll.github.io/source/static/social.png",
    "profiles": "https://www.linkedin.com/in/sdll\nhttps://vk.com/sdllar\nhttps://www.facebook.com/sasha.sdll\nsasha@sdll.space"
  },
  {
    "timestamp": "2019/01/15 4:23:27 PM GMT+3",
    "name": "Иван Терентьев",
    "occupation": "Учился в СУНЦ МГУ, ВМК МГУ, но был отчислен. Отслужил год в Карелии под Петрозаводском. Сейчас студент перового курса  магистратуры ФКН ВШЭ и ШАД. Работал год программистом на C, писал обработку сигналов и изображений под специализированные российские процессоры. Начинаю свой путь в ML.",
    "knowledge": "Ракеты и космос, основы того как делают микроэлектронику, лыжи, водные походы(в том числе на морском каяке). Почему-то многим интересен армейский опыт.",
    "photo": "https://instagram.fhel3-1.fna.fbcdn.net/vp/453c9a339bf50ddf24a9b7a2af765a7a/5CBFD09C/t51.2885-15/e35/30603909_1285804868219352_1306193043266732032_n.jpg?_nc_ht=instagram.fhel3-1.fna.fbcdn.net",
    "profiles": "vk.com/progiv\nt.me/progiv"
  },
  {
    "timestamp": "2019/01/15 4:33:33 PM GMT+3",
    "name": "Данила Рязановский",
    "occupation": "Работал в Дзене (ранжирование) и в яндексовом распознавании речи. В разное время учился на фивте и матфаке вышки и в шаде, преподавал в лкш",
    "knowledge": "",
    "photo": "https://archive.lksh.ru/2018/august/assets/images/teachers/%D0%94%D0%B0%D0%BD%D0%B8%D0%B8%D0%BB%20%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9.jpg",
    "profiles": "t.me/riazanovskiy"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="title">Пиплбук</div>
        <div className="toc">
            {people.map(row => <a href={"#" + row.name} class="toc__person">
                <img src={row.photo} className="photo photo--small" />
                <div class="name name--brief">{row.name.split(' ')[0]}</div>
            </a>)}
        </div>
        <div class="people">
        {people.map(row => <div class="person" id={row.name}>
          <div class="name name--full">{row.name}</div>
          <img class="photo photo--large" src={row.photo} />
          <div class="label">Чем занимаюсь</div>
          <div class="answer">{row.occupation}</div>
          <div class="label">О чем могу рассказать</div>
          <div class="answer">{row.knowledge}</div>
          <div class="label">Контакты</div>
          <div class="answer"><Linkify>{row.profiles}</Linkify></div>
          </div>)}
        </div>
      </div>
    );
  }
}

export default App;
