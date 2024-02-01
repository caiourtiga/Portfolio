import { useTranslation, Trans } from 'react-i18next';
import i18n from './i18n';

const Navbar = () => {

  const { t, i18n } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="">Caio Urtiga</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">{t('Nav1')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#projetos">{t('Nav2')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#redes">{t('Nav3')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contato">{t('Nav4')}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar