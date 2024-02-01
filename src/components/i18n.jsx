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
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      pt: {
        translation: {
          description: [
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
          Nav1: 'Início',
          Nav2: 'Projetos',
          Nav3: 'Redes',
          Nav4: 'Contato',
          Hero: 'Biotecnologista, formado pela Universidade de Brasília (UnB), atuando como Desenvolvedor. Possuo competências de Front end, trabalhando com React e Wordpress enquanto busco o Full Stack. Sempre disposto a aprender e usar novas tecnologias. Tenho forte preferência por trabalhos de Software, porém não recuso oportunidades nas áreas de Industria, Pesquisa e Ambiental.',
          Ver: 'Ver',
          Emailhint: 'seuemail@email.com',
          Phone: 'Telefone',
          Phonehint: 'Apenas Whatsapp',
          Message: 'Mensagem',
          Sendbt: 'Enviar'
        }
      },
      en: {
        translation: {
          description: [
            {
              id: 1,
              image: "/assets/images/thumbs.png",
              title: "Concept 1",
              text: "Concept website for Plugreen company",
              text2: "Built with React+Vite for all screens. Features a decarbonization calculator based on its own API",
              link: "https://pgreenv1.netlify.app/"
            },
            {
              id: 2,
              image: "/assets/images/inte2.png",
              title: "Concept 2",
              text: "Concept website for Plugreen company",
              text2: "Built with React+Vite for desktops and tablets. Features a decarbonization calculator based on its own API",
              link: "https://plugreenrascunho.netlify.app/"
            },
            {
              id: 3,
              image: "/assets/images/pgreenco.png",
              title: "Official Plugreen Website",
              text: "Official page of the Plugreen company",
              text2: "Built with Wordpress for all screens",
              link: "https://plugreen.co/"
            }
          ],
          Nav1: 'Start',
          Nav2: 'Media',
          Nav3: 'Networks',
          Nav4: 'Contact',
          Hero: 'Biotechnologist, graduated from the University of Brasília (UnB), currently working as a Developer. I possess Frontend skills, working with React and Wordpress while aiming for Full Stack expertise. Always eager to learn and utilize new technologies. Despite a strong preference for Software-related work, I am open to opportunities in the areas of Industry, Research, and Environmental fields.',
          Ver: 'View',
          Emailhint: 'youremail@email.com',
          Phone: 'Phone',
          Phonehint: 'Whatsapp only',
          Message: 'Message',
          Sendbt: 'Send'
        }
      }
    }
  });

export default i18n;

