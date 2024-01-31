import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: [
              {
                  id: 1,
                  image: "/assets/images/thumbs.png",
                  title: "Conceito 1",
                  text: "Site conceito para a empresa Plugreen",
                  text2: "Feito com React+Vite para todas as telas. Possui calculadora de descarbonização baseada em API própria",
                  link: "https://pgreenv1.netlify.app/"
              },
              {
                  id: 2,
                  image: "/assets/images/inte2.png",
                  title: "Conceito 2",
                  text: "Site conceito para a empresa Plugreen",
                  text2: "Feito com React+Vite para desktops e tablets. Possui calculadora de descarbonização baseada em API própria",
                  link: "https://plugreenrascunho.netlify.app/"
              },
              {
                  id: 3,
                  image: "/assets/images/pgreenco.png",
                  title: "Site oficial Plugreen",
                  text: "Pagina oficial da empresa Plugreen",
                  text2: "Feito com Wordpress para todas as telas",
                  link: "https://plugreen.co/"
              }
          ],
            part2: 'Learn React'
          }
        }
      },
      de: {
        translation: {
          description: {
            part1: 'Ändere <1>src/App.js</1> und speichere um neu zu laden.',
            part2: 'Lerne React'
          }
        }
      }
    }
  });

export default i18n;