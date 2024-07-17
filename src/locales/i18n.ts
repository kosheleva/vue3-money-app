import { createI18n } from 'vue-i18n'
import en from './en';
import ua from './ua';
import ru from './ru';

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: en,
      ua: ua,
      ru: ru
    }
})

export default i18n;