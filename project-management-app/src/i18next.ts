import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        aboutTitle1: 'simplify work and get more done',
        aboutTitle2: `plan, track, and manage any type of work with project management that flexes to your
        team's needs`,
        benefitsTitle: 'benefits of using',
        benefitLeftItem1: 'Real-time project budget management',
        benefitLeftItem2: 'Balanced resource management',
        benefitLeftItem3: 'Effective communication',
        benefitLeftItem4: 'Effortless project planning',
        benefitRightItem1: 'Solid up-to-the-minute reporting',
        benefitRightItem2: 'Pipeline forecasting',
        benefitRightItem3: 'Improved team collaboration',
        benefitRightItem4: 'Enhanced customer satisfaction',
        teamTitle: 'our team',
        vitaliy: 'vitaliy',
        katherina: 'katherina',
        evgeniy: 'evgeniy',
        signIn: 'sign in',
        signUp: 'sign up',
        signOut: 'sign out',
        goToMainPage: 'go to main page',
        createNewBoard: 'create new board',
        editProfile: 'edit profile',
        error409: 'User login already exists!',
        errorCommon: 'Bad Request!',
        error401: 'Wrong login or password!',
        errorUnAuth: 'Unauthorized!',
        error404: 'User was not founded!',
        error400: 'Validation failed (uuid is expected)!',
        error403: 'Invalid token!',
        error502: 'Bad Gateway!',
        error500: 'Internal server error!',
      },
    },
    ru: {
      translation: {
        aboutTitle1: 'упростите работу и делайте больше',
        aboutTitle2:
          'планируйте, отслеживайте и управляйте любыми типами работы с помощью управления проектами, которое подходит к потребностям вашей команды',
        benefitsTitle: 'преимущества использования',
        benefitLeftItem1: 'Управление бюджетом проекта в режиме реального времени',
        benefitLeftItem2: 'Сбалансированное управление ресурсами',
        benefitLeftItem3: 'Эффективное общение',
        benefitLeftItem4: 'Легкое планирование проекта',
        benefitRightItem1: 'Надежная актуальная отчетность',
        benefitRightItem2: 'Прогнозирование конвейера',
        benefitRightItem3: 'Улучшенное сотрудничество в команде',
        benefitRightItem4: 'Повышение удовлетворенности клиентов',
        teamTitle: 'наша команда',
        vitaliy: 'виталий',
        katherina: 'катерина',
        evgeniy: 'евгений',
        signIn: 'войти',
        signUp: 'зарегестрироваться',
        signOut: 'выйти',
        goToMainPage: 'главная страница',
        createNewBoard: 'создать новую доску',
        editProfile: 'редактировать профиль',
        error409: 'Такой логин уже существует!',
        errorCommon: 'Неверный запрос!',
        error401: 'Неправильный логин или пароль!',
        errorUnAuth: 'Неавторизованный пользователь!',
        error404: 'Пользователь не найден!',
        error400: 'Ошибка проверки (ожидается UUID)!',
        error403: 'Недействительный токен!',
        error502: 'Плохое соединение!',
        error500: 'Внутренняя ошибка сервера!',
      },
    },
  },
  lng: localStorage.getItem('lng') || 'en',
});
export default i18n;
