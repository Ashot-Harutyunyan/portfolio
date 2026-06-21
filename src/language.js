export const english = {
    url: 'en-US',
    projectTitle: 'Portfolio',
    links: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' }
    ],
    home: {
        title: 'Hello, I\'m Ashot Harutyunyan',
        continuationTitle: 'Front-End Developer',
        subTitle: 'I am a Front-End Developer with a year of hands-on experience in building responsive websites and web applications. I have designed and implemented numerous educational and personal projects, which you can explore in this portfolio. I enjoy creating modern, user-friendly interfaces while constantly improving my front-end programming skills. I focus on clean code, intuitive user experience, and productivity optimization.',
        buttonText: 'Download'
    },
    about: {
        title: 'ABOUT ME',
        subTitle: 'Engineering intuitive and engaging ',
        subtitleSecondPart: 'web experiences',
        text: 'I\'m a Front-End Developer focused on building modern, responsive, and user-friendly web applications. Over the past year, I\'ve worked on educational and personal projects using React.js, JavaScript, and modern web technologies, constantly improving my skills and exploring new approaches to development.',
        secondText: 'I enjoy turning ideas into interactive digital experiences, paying attention to clean code, performance, and intuitive user interfaces. Every project is an opportunity to learn something new and create something meaningful.',
        list: [
            {iconName: 'SlLocationPin', text: 'Location: Armenia'},
            {iconName: 'MdOutlineWorkHistory', text: '1+ Year Experience'},
            {iconName: 'FaLaptopCode', text: 'More than 9+ projects'},
            {iconName: 'PiStack', text: 'React.js & JavaScript'}
        ],
        timelineTitle: 'Career Timeline',
        milestones: [
            {
                year: '2023',
                title: 'Completed Front-End Web Development Program',
                description: 'Successfully completed a 9-month Front-End Web Development course at SmartCode, gaining strong skills in HTML, CSS, JavaScript, React, and modern web development practices.',
            },
            {
                year: '2024',
                title: 'Internship & UI Development Training',
                description: 'Completed a 3-month internship at Full Learning and participated in a 120-hour UI Development training program under the Armenia Workforce Development initiative funded by USAID.',
            },
            {
                year: '2025',
                title: 'Joined Arnology LLC & Advanced Studies',
                description: 'Started working as a Front-End Developer at Arnology LLC while completing a 6-month advanced web development program at CUBE School.',
            },
        ]
    },
    projectSmallTitle: 'My Work',
    projectsTitle: 'PROJECTS',
    projectsSubTitle: '9 production-ready projects, all live on Vercel and open-sourced on GitHub',
    projects: [
        { img: 'image-project-movies',       alt: 'photo project movies',       title: 'Movies App',          color: "#61DAFB", link: 'https://react-js-project-movies.vercel.app/',          linkText: 'Live Demo', github: 'https://github.com/Ashot-Harutyunyan/React-JS-project-movies', githubText: 'Code', ArrayTechnologies: ['FaReact', 'SiReactrouter', 'SiReactquery', 'FaSass', 'SiFirebase', 'SiThemoviedatabase', 'SiSwiper', 'DiReact', 'BsGithub', 'IoLogoVercel'], description: 'Movies App is a modern movie search and viewing app built with React. Users can search for movies, view detailed information, watch trailers, and add their favorites to their favorites. The project supports two languages, a dark theme, and a responsive design.'},
        { img: 'image-project-quiz-game',    alt: 'photo project quiz game',    title: 'Quiz App',            color: "#FF4154", link: 'https://quiz-game-snowy-three.vercel.app/',            linkText: 'Live Demo', github: 'https://github.com/Ashot-Harutyunyan/Quiz-Game',               githubText: 'Code', ArrayTechnologies: ['FaReact', 'FaSass', 'SiFirebase', 'DiReact', 'BsGithub', 'IoLogoVercel'],                                                                    description: 'Quiz App is an interactive quiz app with random question generation, a timer, and score statistics. The app features a minimalist interface, smooth animations, and a responsive design.' },
        { img: 'image-project-photos',       alt: 'photo project photos',       title: 'Search Photos',       color: "#E91E8C", link: 'https://search-photos-tau.vercel.app/',                linkText: 'Live Demo', github: 'https://github.com/Ashot-Harutyunyan/Search-Photos',           githubText: 'Code', ArrayTechnologies: ['FaReact', 'SiReactrouter', 'SiReactquery', 'FaSass', 'FaUnsplash', 'BsGithub', 'IoLogoVercel'],                                              description: 'Search Photos is a photo search and viewing app powered by the Unsplash API. Users can quickly find images by keywords, view them in a responsive gallery, and open full-size versions in a modal window.' },
        { img: 'image-project-countries',    alt: 'photo project countries',    title: 'Countries App',       color: "#A78BFA", link: 'https://project-countries-six.vercel.app/',            linkText: 'Live Demo', github: 'https://github.com/Ashot-Harutyunyan/Project-Countries',       githubText: 'Code', ArrayTechnologies: ['FaReact', 'SiReactrouter', 'FaSass', 'TbApi', 'DiReact', 'BsGithub', 'IoLogoVercel'],                                                        description: 'Countries App is an interactive app for exploring countries around the world. Users can search for countries, view detailed information, explore their locations on a map, and switch between light and dark themes.' },
        { img: 'image-project-climate',      alt: 'photo project climate',      title: 'Climate App',         color: "#FBBF24", link: 'https://climate-in-the-world.vercel.app/',             linkText: 'Live Demo', github: 'https://github.com/Ashot-Harutyunyan/Climate-in-the-world',    githubText: 'Code', ArrayTechnologies: ['FaReact', 'SiReactrouter', 'SiRedux', 'TbApi', 'FaSass', 'GrSun', 'DiReact', 'BsGithub', 'IoLogoVercel'],                                    description: 'Climate is a modern app for viewing weather around the world. Users can search for cities and countries, get up-to-date weather data, and view the 24-hour forecast on an interactive chart.' },
        { img: 'image-project-ludo-game',    alt: 'photo project ludo game',    title: 'Ludo King',           color: "#34D399", link: 'https://ashot-harutyunyan.github.io/Ludo-Game/',       linkText: 'Live Demo', github: 'https://github.com/Ashot-Harutyunyan/Ludo-Game',               githubText: 'Code', ArrayTechnologies: ['FaHtml5', 'FaCss3Alt', 'FaJsSquare', 'BsGithub'],                                                                                            description: 'Ludo King is a browser-based version of the popular board game, developed in JavaScript. Players can choose the number of players, the bot\'s difficulty level, and the color of the tiles, then compete against computer opponents using the classic Ludo rules.' },
        { img: 'image-project-temporal-API', alt: 'photo project temporal API', title: 'Clock and Calendar ', color: "#7DD3FC", link: 'https://ashot-harutyunyan.github.io/JS-Temporal-API/', linkText: 'Live Demo', github: 'https://github.com/Ashot-Harutyunyan/JS-Temporal-API',         githubText: 'Code', ArrayTechnologies: ['FaHtml5', 'FaCss3Alt', 'FaJsSquare', 'FaRegClock', 'BsGithub'],                                                                              description: 'Clock and Calendar is an app with digital and analog clocks, an interactive calendar, and a modern neon interface, built in JavaScript using the Temporal API.' },
        { img: 'image-project-weather',      alt: 'photo project weather',      title: 'Weather Search App ', color: "#FB923C", link: 'https://weather-sepia-delta.vercel.app/',              linkText: 'Live Demo', github: 'https://github.com/Ashot-Harutyunyan/weather',                 githubText: 'Code', ArrayTechnologies: ['FaHtml5', 'FaCss3Alt', 'FaJsSquare', 'GrSun', 'TbApi', 'BsGithub'],                                                                          description: 'Weather Search App is an app for finding current weather conditions in cities around the world. Users can get information about temperature, humidity, wind speed, and the current time for a selected location. The app includes error handling, a loading indicator, and a modern, responsive interface.' },
        { img: 'image-project-book-finder',  alt: 'photo project book finder',  title: 'Book Finder',         color: "#F472B6", link: 'https://ashot-harutyunyan.github.io/Book-Finder/',     linkText: 'Live Demo', github: 'https://github.com/Ashot-Harutyunyan/Book-Finder',             githubText: 'Code', ArrayTechnologies: ['FaHtml5', 'FaCss3Alt', 'FaJsSquare', 'BiBook', 'TbApi', 'BsGithub'],                                                                         description: 'Book Finder is an app for searching books by title, author, or keywords. Users can browse search results, access detailed book information, read descriptions, and preview available titles.' }
    ],
    skillsTitle: 'SKILLS',
    skillsSubTitle: 'Tools and Technologies I Work With',
    contactTitle: 'Contact me',
    contactSubTitle: 'I am always open to new projects and cooperation. Fill out the form below or contact me',
    contactForm: {
        name: 'Name',
        phone: 'Phone',
        email: 'Email',
        message: 'Message',
        sendMessage: 'Send Message'
    },
    contactSendTitle: 'Message Sent Successfully',
    contactSendText: 'Thank you for reaching out to us!',
    contactSendErrorTitle: 'Oops...',
    contactSendErrorText: 'Something went wrong! Please try again later.',
    formErrorMessage: 'the input field must be filled in'
}

export const russia = {
    url: 'ru-RU',
    projectTitle: 'Портфолио',
    links: [
        { href: '#home', label: 'Главная' },
        { href: '#about', label: 'О нас' },
        { href: '#projects', label: 'Проекты' },
        { href: '#skills', label: 'Навыки' },
        { href: '#contact', label: 'Контакты' }
    ],
    home: {
        title: 'Здравствуйте, я Ашот Арутюнян',
        continuationTitle: 'Front-End разработчик',
        subTitle: 'Я Front-End разработчик с годом практического опыта в создании адаптивных веб-сайтов и веб-приложений. За это время я разработал и реализовал множество учебных и личных проектов, с которыми вы можете ознакомиться в этом портфолио. Мне нравится создавать современные и удобные пользовательские интерфейсы, постоянно совершенствуя свои навыки фронтенд-разработки. В своей работе я уделяю особое внимание чистому коду, удобству пользователей и оптимизации производительности.',
        buttonText: 'Скачать'
    },
    about: {
        title: 'ОБО МНЕ',
        subTitle: 'Разработка интуитивно понятных и привлекательных ',
        subtitleSecondPart: 'веб-интерфейсов',
        text: 'Я Front-End разработчик, который занимается созданием современных, адаптивных и удобных веб-приложений. За последний год я работал над учебными и личными проектами, используя React.js, JavaScript и современные веб-технологии, постоянно развивая свои навыки и изучая новые подходы к разработке.',
        secondText: 'Мне нравится превращать идеи в интерактивные цифровые продукты, уделяя внимание чистому коду, производительности и удобству пользователей. Каждый проект для меня — это возможность научиться чему-то новому и создать что-то полезное.',
        list: [
            { iconName: 'SlLocationPin', text: 'Местоположение Армения' },
            { iconName: 'MdOutlineWorkHistory', text: 'Опыт работы: 1+ год' },
            { iconName: 'FaLaptopCode', text: 'Более 9+ проектов' },
            { iconName: 'PiStack', text: 'React.js и JavaScript' }
        ],
        timelineTitle: 'Хронология Карьеры',
        milestones: [
            {
                year: '2023',
                title: 'Окончил курс Front-End Web Development',
                description: 'Успешно завершил 9-месячную программу Front-End Web Development в SmartCode, изучив HTML, CSS, JavaScript, React и современные технологии веб-разработки.',
            },
            {
                year: '2024',
                title: 'Практика и обучение UI-разработке',
                description: 'Прошел 3-месячную практику в Full Learning и принял участие в 120-часовом учебном курсе по разработке интерфейсов в рамках программы развития трудовых ресурсов Армении при поддержке USAID.',
            },
            {
                year: '2025',
                title: 'Arnology LLC и повышение квалификации',
                description: 'Начал работу Front-End разработчиком в компании Arnology LLC и одновременно завершил 6-месячный курс веб-разработки в CUBE School.',
            },
        ]
    },
    projectSmallTitle: 'Мои работы',
    projectsTitle: 'ПРОЕКТЫ',
    projectsSubTitle: '9 готовых к внедрению проектов, все размещены на Vercel и имеют открытый исходный код на GitHub',
    projects: [
        { img: 'image-project-movies',       alt: 'photo project movies',       title: 'Приложение Для Фильмов',       color: "#61DAFB", link: 'https://react-js-project-movies.vercel.app/',          linkText: 'Живая Демонстрация', github: 'https://github.com/Ashot-Harutyunyan/React-JS-project-movies', githubText: 'Код', ArrayTechnologies: ['FaReact', 'SiReactrouter', 'SiReactquery', 'FaSass', 'SiFirebase', 'SiThemoviedatabase', 'SiSwiper', 'DiReact', 'BsGithub', 'IoLogoVercel'], description: 'Movies App — современное приложение для поиска и просмотра фильмов, созданное на React. Пользователи могут искать фильмы, просматривать подробную информацию, смотреть трейлеры и добавлять понравившиеся фильмы в избранное. Проект поддерживает два языка, темную тему и адаптивный дизайн.'},
        { img: 'image-project-quiz-game',    alt: 'photo project quiz game',    title: 'Приложение Викторина',         color: "#FF4154", link: 'https://quiz-game-snowy-three.vercel.app/',            linkText: 'Живая Демонстрация', github: 'https://github.com/Ashot-Harutyunyan/Quiz-Game',               githubText: 'Код', ArrayTechnologies: ['FaReact', 'FaSass', 'SiFirebase', 'DiReact', 'BsGithub', 'IoLogoVercel'],                                                                    description: 'Quiz App интерактивное приложение для прохождения викторин с случайной генерацией вопросов, таймером и статистикой результатов. Проект отличается минималистичным интерфейсом, плавными анимациями и адаптивным дизайном.' },
        { img: 'image-project-photos',       alt: 'photo project photos',       title: 'Поиск Фотографий',             color: "#E91E8C", link: 'https://search-photos-tau.vercel.app/',                linkText: 'Живая Демонстрация', github: 'https://github.com/Ashot-Harutyunyan/Search-Photos',           githubText: 'Код', ArrayTechnologies: ['FaReact', 'SiReactrouter', 'SiReactquery', 'FaSass', 'FaUnsplash', 'BsGithub', 'IoLogoVercel'],                                              description: 'Search Photos приложение для поиска и просмотра фотографий через API Unsplash. Пользователи могут быстро находить изображения по ключевым словам, просматривать их в адаптивной галерее и открывать полноразмерные версии в модальном окне.' },
        { img: 'image-project-countries',    alt: 'photo project countries',    title: 'Приложение О Странах',         color: "#A78BFA", link: 'https://project-countries-six.vercel.app/',            linkText: 'Живая Демонстрация', github: 'https://github.com/Ashot-Harutyunyan/Project-Countries',       githubText: 'Код', ArrayTechnologies: ['FaReact', 'SiReactrouter', 'FaSass', 'TbApi', 'DiReact', 'BsGithub', 'IoLogoVercel'],                                                        description: 'Countries App интерактивное приложение для изучения стран мира. Пользователи могут искать страны, просматривать подробную информацию, изучать расположение на карте и переключаться между светлой и темной темами оформления.' },
        { img: 'image-project-climate',      alt: 'photo project climate',      title: 'Приложение О Климате',         color: "#FBBF24", link: 'https://climate-in-the-world.vercel.app/',             linkText: 'Живая Демонстрация', github: 'https://github.com/Ashot-Harutyunyan/Climate-in-the-world',    githubText: 'Код', ArrayTechnologies: ['FaReact', 'SiReactrouter', 'SiRedux', 'TbApi', 'FaSass', 'GrSun', 'DiReact', 'BsGithub', 'IoLogoVercel'],                                    description: 'Climate — современное приложение для просмотра погоды по всему миру. Пользователи могут искать города и страны, получать актуальные погодные данные и просматривать 24-часовой прогноз на интерактивном графике.' },
        { img: 'image-project-ludo-game',    alt: 'photo project ludo game',    title: 'Лудо Кинг',                    color: "#34D399", link: 'https://ashot-harutyunyan.github.io/Ludo-Game/',       linkText: 'Живая Демонстрация', github: 'https://github.com/Ashot-Harutyunyan/Ludo-Game',               githubText: 'Код', ArrayTechnologies: ['FaHtml5', 'FaCss3Alt', 'FaJsSquare', 'BsGithub'],                                                                                            description: 'Ludo King браузерная версия популярной настольной игры, разработанная на JavaScript. Игрок может выбрать количество участников, уровень сложности бота и цвет фишек, после чего соревноваться с компьютерными соперниками по классическим правилам Ludo.' },
        { img: 'image-project-temporal-API', alt: 'photo project temporal API', title: 'Часы И Календарь',             color: "#7DD3FC", link: 'https://ashot-harutyunyan.github.io/JS-Temporal-API/', linkText: 'Живая Демонстрация', github: 'https://github.com/Ashot-Harutyunyan/JS-Temporal-API',         githubText: 'Код', ArrayTechnologies: ['FaHtml5', 'FaCss3Alt', 'FaJsSquare', 'FaRegClock', 'BsGithub'],                                                                              description: 'Часы и Календарь приложение с цифровыми и аналоговыми часами, интерактивным календарем и современным неоновым интерфейсом, созданное на JavaScript с использованием Temporal API.' },
        { img: 'image-project-weather',      alt: 'photo project weather',      title: 'Приложение Для Поиска Погоды', color: "#FB923C", link: 'https://weather-sepia-delta.vercel.app/',              linkText: 'Живая Демонстрация', github: 'https://github.com/Ashot-Harutyunyan/weather',                 githubText: 'Код', ArrayTechnologies: ['FaHtml5', 'FaCss3Alt', 'FaJsSquare', 'GrSun', 'TbApi', 'BsGithub'],                                                                          description: 'Weather Search App приложение для поиска актуальной погоды по городам мира. Пользователи могут получать информацию о температуре, влажности, скорости ветра и текущем времени выбранной локации. Проект включает обработку ошибок, индикатор загрузки и современный адаптивный интерфейс.' },
        { img: 'image-project-book-finder',  alt: 'photo project book finder',  title: 'Поиск Книг',                   color: "#F472B6", link: 'https://ashot-harutyunyan.github.io/Book-Finder/',     linkText: 'Живая Демонстрация', github: 'https://github.com/Ashot-Harutyunyan/Book-Finder',             githubText: 'Код', ArrayTechnologies: ['FaHtml5', 'FaCss3Alt', 'FaJsSquare', 'BiBook', 'TbApi', 'BsGithub'],                                                                         description: 'Book Finder приложение для поиска книг по названию, автору или ключевым словам. Пользователи могут просматривать результаты поиска, открывать подробную информацию о книгах, читать описания и переходить к предпросмотру доступных изданий.' }
    ],
    skillsTitle: 'НАВЫКИ',
    skillsSubTitle: 'Инструменты и технологии, с которыми я работаю',
    contactTitle: 'Свяжитесь со мной',
    contactSubTitle: 'Я всегда открыт для новых проектов и сотрудничества. Заполните форму ниже или свяжитесь со мной',
    contactForm: {
        name: 'Имя',
        phone: 'Телефон',
        email: 'Электронная Почта',
        message: 'Сообщение',
        sendMessage: 'Отправить'
    },
    contactSendTitle: 'Сообщение успешно отправлено',
    contactSendText: 'Спасибо, что обратились к нам!',
    contactSendErrorTitle: 'Упс...',
    contactSendErrorText: 'Что-то пошло не так! Повторите попытку позже.',
    formErrorMessage: 'поле ввода должно быть заполнено'
}

export const armenian = {
    url: 'hy-AM',
    projectTitle: 'Պորտֆոլիո',
    links: [
        { href: '#home', label: 'Գլխավոր էջ' },
        { href: '#about', label: 'Մի մասին' },
        { href: '#projects', label: 'Նախագծեր' },
        { href: '#skills', label: 'Հմտություններ' },
        { href: '#contact', label: 'Կապ' }
    ],
    home: {
        title: 'Ողջույն, ես Աշոտ Հարությունյանն եմ',
        continuationTitle: 'Front-End ծրագրավորող',
        subTitle: 'Ես Front-End ծրագրավորող եմ՝ վեբ կայքերի և վեբ հավելվածների ստեղծման մեկ տարվա գործնական փորձով։ Այս ընթացքում ես նախագծել և իրականացրել եմ բազմաթիվ ուսումնական և անձնական նախագծեր, որոնց կարող եք ծանոթանալ այս պորտֆոլիոյում։ Ինձ դուր է գալիս ստեղծել ժամանակակից և օգտագործողի համար հարմար ինտերֆեյսներ՝ միաժամանակ շարունակաբար զարգացնելով իմ Front-End ծրագրավորման հմտությունները։ Իմ աշխատանքում կարևորում եմ մաքուր կոդը, օգտագործողի հարմարավետություն և արտադրողականության օպտիմալացումը։',
        buttonText: 'Ներբեռնել'
    },
    about: {
        title: 'ՄԻ ՄԱՍԻՆ',
        subTitle: 'Մշակել ինտուիտիվ և գրավիչ ',
        subtitleSecondPart: 'վեբ ինտերֆեյսներ',
        text: 'Ես Front-End ծրագրավորող եմ, ով զբաղվում է ժամանակակից, ադապտիվ և օգտագործողի համար հարմար վեբ հավելվածների ստեղծմամբ։ Վերջին տարվա ընթացքում աշխատել եմ ուսումնական և անձնական նախագծերի վրա՝ օգտագործելով React.js, JavaScript և ժամանակակից վեբ տեխնոլոգիաներ՝ շարունակաբար զարգացնելով իմ հմտությունները։',
        secondText: 'Ինձ դուր է գալիս գաղափարները վերածել ինտերակտիվ թվային լուծումների՝ ուշադրություն դարձնելով մաքուր կոդին, արագ աշխատանքին և հարմար ինտերֆեյսներին։ Յուրաքանչյուր նախագիծ ինձ համար նոր բան սովորելու և արժեքավոր արդյունք ստեղծելու հնարավորություն է։',
        list: [
            { iconName: 'SlLocationPin', text: 'Գտնվելու վայրը՝ Հայաստան' },
            { iconName: 'MdOutlineWorkHistory', text: '1+ տարվա փորձ' },
            { iconName: 'FaLaptopCode', text: 'Ավելի քան 9+ նախագիծ' },
            { iconName: 'PiStack', text: 'React.js և JavaScript' }
        ],
        timelineTitle: 'Կարիերայի ժամանակագրություն',
        milestones: [
            {
                year: '2023',
                title: 'Ավարտել եմ Front-End Web Development դասընթացը',
                description: 'Հաջողությամբ ավարտել եմ SmartCode-ի 9-ամսյա Front-End Web Development ծրագիրը՝ ձեռք բերելով HTML, CSS, JavaScript, React և ժամանակակից վեբ տեխնոլոգիաների հիմնավոր գիտելիքներ։',
            },
            {
                year: '2024',
                title: 'Պրակտիկա և UI Development ուսուցում',
                description: 'Անցել եմ 3-ամսյա պրակտիկա Full Learning-ում և մասնակցել եմ UI Development-ի 120-ժամյա ուսումնական ծրագրին, որն իրականացվել է ՀՀ աշխատուժի զարգացման ծրագրի շրջանակներում՝ USAID-ի ֆինանսավորմամբ։',
            },
            {
                year: '2025',
                title: 'Arnology LLC և մասնագիտական աճ',
                description: 'Սկսել եմ աշխատել որպես Front-End Developer Arnology LLC ընկերությունում և միաժամանակ ավարտել եմ CUBE School-ի 6-ամսյա մասնագիտական վերապատրաստման ծրագիրը։',
            },
        ]
    },
    projectSmallTitle: 'Իմ աշխատանքը',
    projectsTitle: 'ՆԱԽԱԳԾԵՐ',
    projectsSubTitle: '9 իրականացման պատրաստ նախագծեր, բոլորը տեղակայված են Vercel-ում և բաց կոդով՝ GitHub-ում',
    projects: [
        { img: 'image-project-movies',       alt: 'photo project movies',           title: 'Ֆիլմերի Հավելված', color: "#61DAFB", link: 'https://react-js-project-movies.vercel.app/',          linkText: 'Կենդանի Ցուցադրություն', github: 'https://github.com/Ashot-Harutyunyan/React-JS-project-movies', githubText: 'Կոդ', ArrayTechnologies: ['FaReact', 'SiReactrouter', 'SiReactquery', 'FaSass', 'SiFirebase', 'SiThemoviedatabase', 'SiSwiper', 'DiReact', 'BsGithub', 'IoLogoVercel'], description: 'Movies App React-ով կառուցված ժամանակակից ֆիլմերի որոնման և դիտման հավելված է: Օգտատերերը կարող են որոնել ֆիլմեր, դիտել մանրամասն տեղեկատվություն, դիտել թրեյլերներ և ավելացնել իրենց նախընտրած ֆիլմերը իրենց նախընտրածների ցանկում: Նախագիծը աջակցում է երկու լեզու, մութ թեմա և ադապտիվ դիզայն:'},
        { img: 'image-project-quiz-game',    alt: 'photo project quiz game',        title: 'Վիկտորինայի Հավելված', color: "#FF4154",  link: 'https://quiz-game-snowy-three.vercel.app/',            linkText: 'Կենդանի Ցուցադրություն', github: 'https://github.com/Ashot-Harutyunyan/Quiz-Game',               githubText: 'Կոդ', ArrayTechnologies: ['FaReact', 'FaSass', 'SiFirebase', 'DiReact', 'BsGithub', 'IoLogoVercel'],                                                                    description: 'Quiz App ինտերակտիվ վիկտորինայի հավելված է՝ պատահական հարցերի գեներացմամբ, ժամանակաչափով և միավորների վիճակագրությամբ: Հավելվածն առանձնանում է մինիմալիստական ինտերֆեյսով, հարթ անիմացիաներով և արագ արձագանքող դիզայնով:' },
        { img: 'image-project-photos',       alt: 'photo project photos',           title: 'Լուսանկարների Որոնում', color: "#E91E8C",  link: 'https://search-photos-tau.vercel.app/',                linkText: 'Կենդանի Ցուցադրություն', github: 'https://github.com/Ashot-Harutyunyan/Search-Photos',           githubText: 'Կոդ', ArrayTechnologies: ['FaReact', 'SiReactrouter', 'SiReactquery', 'FaSass', 'FaUnsplash', 'BsGithub', 'IoLogoVercel'],                                              description: 'Search Photos-ը Unsplash API-ի միջոցով աշխատող լուսանկարների որոնման և դիտման հավելված է: Օգտատերերը կարող են արագ գտնել պատկերներ բանալի բառերով, դիտել դրանք ադապտիվ պատկերասրահում և բացել լրիվ չափի տարբերակները մոդալ պատուհանում:' },
        { img: 'image-project-countries',    alt: 'photo project countries',        title: 'Երկրների Հավելված', color: "#A78BFA",  link: 'https://project-countries-six.vercel.app/',            linkText: 'Կենդանի Ցուցադրություն', github: 'https://github.com/Ashot-Harutyunyan/Project-Countries',       githubText: 'Կոդ', ArrayTechnologies: ['FaReact', 'SiReactrouter', 'FaSass', 'TbApi', 'DiReact', 'BsGithub', 'IoLogoVercel'],                                                        description: 'Countries App ինտերակտիվ հավելված է աշխարհի տարբեր երկրներ ուսումնասիրելու համար: Օգտատերերը կարող են որոնել երկրներ, դիտել մանրամասն տեղեկատվություն, ուսումնասիրել դրանց գտնվելու վայրերը քարտեզի վրա և անցնել բաց և մուգ թեմաների միջև:' },
        { img: 'image-project-climate',      alt: 'photo project climate',          title: 'Կլիմայի Հավելված', color: "#FBBF24",  link: 'https://climate-in-the-world.vercel.app/',             linkText: 'Կենդանի Ցուցադրություն', github: 'https://github.com/Ashot-Harutyunyan/Climate-in-the-world',    githubText: 'Կոդ', ArrayTechnologies: ['FaReact', 'SiReactrouter', 'SiRedux', 'TbApi', 'FaSass', 'GrSun', 'DiReact', 'BsGithub', 'IoLogoVercel'],                                    description: 'Climate-ը ժամանակակից հավելված է ամբողջ աշխարհի եղանակը դիտելու համար: Օգտատերերը կարող են որոնել քաղաքներ և երկրներ, ստանալ թարմացված եղանակի տվյալներ և դիտել 24-ժամյա կանխատեսումը ինտերակտիվ գրաֆիկի վրա:' },
        { img: 'image-project-ludo-game',    alt: 'Ludo Game նախագծի լուսանկար',    title: 'Լուդո Քինգ', color: "#34D399",  link: 'https://ashot-harutyunyan.github.io/Ludo-Game/',       linkText: 'Ուղիղ ցուցադրություն',   github: 'https://github.com/Ashot-Harutyunyan/Ludo-Game',               githubText: 'Կոդ', ArrayTechnologies: ['FaHtml5', 'FaCss3Alt', 'FaJsSquare', 'BsGithub'],                                                                                            description: 'Ludo King-ը հանրահայտ սեղանի խաղի բրաուզերային տարբերակն է, մշակված JavaScript-ով։ Խաղացողը կարող է ընտրել մասնակիցների քանակը, բոտի բարդության մակարդակը և խաղաքարերի գույնը, այնուհետև մրցել համակարգչային մրցակիցների դեմ՝ Ludo-ի դասական կանոններով։' },
        { img: 'image-project-temporal-API', alt: 'Temporal API նախագծի լուսանկար', title: 'Ժամացույց և Օրացույց', color: "#7DD3FC",  link: 'https://ashot-harutyunyan.github.io/JS-Temporal-API/', linkText: 'Ուղիղ ցուցադրություն',   github: 'https://github.com/Ashot-Harutyunyan/JS-Temporal-API',         githubText: 'Կոդ', ArrayTechnologies: ['FaHtml5', 'FaCss3Alt', 'FaJsSquare', 'FaRegClock', 'BsGithub'],                                                                              description: 'Ժամացույց և Օրացույց հավելված՝ թվային և անալոգային ժամացույցներով, ինտերակտիվ օրացույցով և ժամանակակից նեոնային ինտերֆեյսով, ստեղծված JavaScript-ով՝ օգտագործելով Temporal API-ն։' },
        { img: 'image-project-weather',      alt: 'photo project weather',          title: 'Եղանակի Որոնման Հավելված', color: "#FB923C",  link: 'https://weather-sepia-delta.vercel.app/',              linkText: 'Կենդանի Ցուցադրություն', github: 'https://github.com/Ashot-Harutyunyan/weather',                 githubText: 'Կոդ', ArrayTechnologies: ['FaHtml5', 'FaCss3Alt', 'FaJsSquare', 'GrSun', 'TbApi', 'BsGithub'],                                                                          description: 'Եղանակի որոնման հավելվածը աշխարհի տարբեր քաղաքներում եղանակային պայմանները գտնելու հավելված է: Օգտատերերը կարող են տեղեկություններ ստանալ ընտրված վայրի ջերմաստիճանի, խոնավության, քամու արագության և ընթացիկ ժամանակի մասին: Հավելվածը ներառում է սխալների կառավարման գործառույթ, բեռնման ցուցիչ և ժամանակակից, արագ արձագանքող ինտերֆեյս:' },
        { img: 'image-project-book-finder',  alt: 'photo project book finder',      title: 'Գրքերի Որոնում', color: "#F472B6",  link: 'https://ashot-harutyunyan.github.io/Book-Finder/',     linkText: 'Կենդանի Ցուցադրություն', github: 'https://github.com/Ashot-Harutyunyan/Book-Finder',             githubText: 'Կոդ', ArrayTechnologies: ['FaHtml5', 'FaCss3Alt', 'FaJsSquare', 'BiBook', 'TbApi', 'BsGithub'],                                                                         description: 'Գրքերի որոնիչը գրքերը վերնագրով, հեղինակով կամ բանալի բառերով որոնելու հավելված է: Օգտատերերը կարող են դիտել որոնման արդյունքները, մուտք գործել գրքերի մանրամասն տեղեկատվության, կարդալ նկարագրությունները և նախադիտել առկա վերնագրերը:' }
    ],
    skillsTitle: 'ՀՄՏՈՒԹՅՈՒՆՆԵՐ',
    skillsSubTitle: 'Գործիքներ և տեխնոլոգիաներ, որոնցով ես աշխատում եմ',
    contactTitle: 'Կապվել ինձ հետ',
    contactSubTitle: 'Ես միշտ բաց եմ նոր նախագծերի և համագործակցության համար։ Լրացրեք ստորև բերված ձևը կամ կապվեք ինձ հետ',
    contactForm: {
        name: 'Անուն',
        phone: 'Հեռախոսահամար',
        email: 'Էլ. փոստ',
        message: 'Հաղորդագրություն',
        sendMessage: 'Ուղարկել'
    },
    contactSendTitle: 'Հաղորդագրությունը հաջողությամբ ուղարկվեց',
    contactSendText: 'Շնորհակալություն մեզ դիմելու համար:',
    contactSendErrorTitle: 'Վայ...',
    contactSendErrorText: 'Սխալ առաջացավ։ Խնդրում ենք փորձել ավելի ուշ:',
    formErrorMessage: 'մուտքագրման դաշտը պետք է լրացվի'
}