
// 51

const ARR_THEMES_SELECTED = [
    'assessment',
    'theory'
];

const ARR_THEMES = [
    { page: 'assessment',             arr: arrAssessment,      class: 'menu-other', title: 'Ассессмент' },
    { page: 'js-tasks',               arr: arrJsTasks,         class: 'menu-other', title: '🍕 Задачи' },
    { page: 'theory',                 arr: arrTheory,          class: 'menu-other', title: '📑 Теория' },
    null,
    { page: 'theory-patterns',        arr: arrDesignPatterns,  class: 'menu-other', title: '⚡️ Паттерны' },
    { page: 'theory-paradigms',       arr: arrParadigms,       class: 'menu-other', title: '⚡️ Парадигмы' },
    { page: 'theory-algoritms',       arr: arrAlgoritms,       class: 'menu-other', title: '⚡️ Алгоритмы' },
    { page: 'theory-data-structures', arr: arrDataStructures,  class: 'menu-other', title: '⚡️ Структуры данных' },
    null,
    { page: 'js',                     arr: arrJavaScript,      class: 'menu-js',    title: '🥑 JavaScript' },
    { page: 'js-class',               arr: arrJsClass,         class: 'menu-js',    title: '🥑 Классы' },
    { page: 'js-objects',             arr: arrJsObjects,       class: 'menu-js',    title: '🥑 Объекты' },
    { page: 'js-async',               arr: arrJsAsync,         class: 'menu-js',    title: '🍋 Асинхронность' },
    { page: 'js-network',             arr: arrJsNetwork,       class: 'menu-js',    title: '🍋 Сеть' },
    null,
    { page: 'js-web-api',             arr: arrJsWebApi,        class: 'menu-js',    title: '🥑 Web API' },
    { page: 'js-web-components',      arr: arrJsWebComponents, class: 'menu-js',    title: 'WebComponents' },
    { page: 'canvas',                 arr: arrCanvas,          class: 'menu-js',    title: 'Canvas' },
    null,
    { page: 'react-js',               arr: arrReactjs,         class: 'menu-fw',    title: '💥 React.js' },
    { page: 'react-api',              arr: arrReactApi,        class: 'menu-fw',    title: '💥 React API' },
    { page: 'react-hooks',            arr: arrReactHooks,      class: 'menu-fw',    title: '💥 React Hooks' },
    { page: 'redux',                  arr: arrRedux,           class: 'menu-fw',    title: '🍋 Redux' },
    { page: 'react-router',           arr: arrReactRouter,     class: 'menu-fw',    title: 'React Router' },
    null,
    { page: 'prop-types',             arr: arrPropTypes,       class: 'menu-fw',    title: 'PropTypes' },
    { page: 'formik',                 arr: arrFormik,          class: 'menu-fw',    title: 'Formik' },
    { page: 'reselect',               arr: arrReselect,        class: 'menu-fw',    title: 'Reselect' },
    { page: 'material-ui',            arr: arrMaterialUI,      class: 'menu-fw',    title: 'Material-UI & JSS' },
    { page: 'vue-js',                 arr: arrVuejs,           class: 'menu-fw',    title: 'Vue.js' },
    null,
    { page: 'testing',                arr: arrTesting,         class: 'menu-other', title: '📑 Тестирование' },
    { page: 'jest',                   arr: arrJest,            class: 'menu-other', title: '🔰 Jest' },
    { page: 'enzyme',                 arr: arrEnzyme,          class: 'menu-other', title: '🔰 Enzyme + Jest' },
    { page: 'react-testing',          arr: arrReactTesting,    class: 'menu-other', title: '🍋 React Testing' },
    { page: 'cypress',                arr: arrCypress,         class: 'menu-other', title: '🔰 Cypress' },
    null,
    { page: 'html',                   arr: arrHTML,            class: 'menu-html',  title: 'HTML' },
    { page: 'css',                    arr: arrCSS,             class: 'menu-html',  title: 'CSS' },
    { page: 'css-flexbox',            arr: arrCssFlexbox,      class: 'menu-html',  title: 'Flexbox' },
    { page: 'css-grid',               arr: arrCssGrid,         class: 'menu-html',  title: 'CSS Grid' },
    { page: 'svg',                    arr: arrSvg,             class: 'menu-html',  title: 'SVG' },
    { page: 'sass',                   arr: arrSass,            class: 'menu-html',  title: 'Sass' },
    { page: 'bootstrap',              arr: arrBootstrap,       class: 'menu-html',  title: 'Bootstrap' },
    null,
    { page: 'git',                    arr: arrGit,             class: 'menu-php',   title: '🥥 Git' },
    { page: 'typescript',             arr: arrTypescript,      class: 'menu-php',   title: '🍋 TypeScript' },
    { page: 'flow',                   arr: arrFlow,            class: 'menu-php',   title: '🍋 Flow' },
    { page: 'webpack',                arr: arrWebpack,         class: 'menu-php',   title: '🥥 Webpack' },
    { page: 'gulp',                   arr: arrGulp,            class: 'menu-php',   title: 'Gulp & Parcel' },
    { page: 'npm',                    arr: arrNpm,             class: 'menu-php',   title: 'NPM & Yarn' },
    { page: 'ramda',                  arr: arrRamda,           class: 'menu-php',   title: 'Ramda' },
    null,
    { page: 'other',                  arr: arrOther,           class: 'menu-other', title: 'Other' },
    { page: 'node-js',                arr: arrNodejs,          class: 'menu-other', title: 'Node.js' },
    { page: 'php',                    arr: arrPhp,             class: 'menu-other', title: 'PHP' },
    { page: 'python',                 arr: arrPython,          class: 'menu-other', title: 'Python' },
    { page: 'mysql',                  arr: arrMySql,           class: 'menu-other', title: 'mySql' },
    { page: 'linux',                  arr: arrLinux,           class: 'menu-other', title: 'Linux' },
    { page: 'jquery',                 arr: arrJquery,          class: 'menu-other', title: 'jQuery' },
];
