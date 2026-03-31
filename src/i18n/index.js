import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 导入翻译资源
import en from './locales/en';
import zh from './locales/zh';

// 配置i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      zh: {
        translation: zh
      }
    },
    lng: 'zh', // 默认语言
    fallbackLng: 'en', // 回退语言
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;