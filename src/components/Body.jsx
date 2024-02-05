import React, { Component } from 'react';
import { useTranslation, Trans } from 'react-i18next';

const Body = () => {

  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="my-4">
      <br />
      <div>
        <div className="container text-center">
          <button className="usbutton container text-center m-1" onClick={() => changeLanguage("en")}> <span className="bttext"> EN </span> </button>
          <button className="brasilbutton container text-center m-1" onClick={() => changeLanguage("pt")}> <span className="bttext"> PT </span> </button>
        </div>
        <img src="/assets/images/1662402601960.jpg" alt="" className="img-fluid timg mx-auto d-block my-5 rounded-4" />
        <div className="container skills">
          <div className="row">
            <div className="mx-auto col-lg-8">
              <p>&ensp;{t('Hero')}</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="projetos">
        <div className="row text-center g-3">
          {t('description', { returnObjects: true }).map((item) => (
            <div className="col-md-6 col-lg-3 card bg-transparent" key={item.id}>
              <img src={item.image} alt="" className="img-fluid galeimg card-img border border-4 border-success rounded-4" />
              <div className="card-img-overlay cardcontent">
                <h5 className="card-title h4">{item.title}</h5>
                <p className="card-text h5">{item.text}</p>
                <p className="card-text">{item.text2}</p>
                <a href={item.link} target="_blank" className="btn btn-success">{t('Ver')}</a>
              </div>
            </div>
          ))}
          <div className="d-none d-lg-block col-md-6 col-lg-3 card bg-transparent">
            <img src="/assets/images/macaco.jpg" alt="" className="img-fluid galeimg card-img border border-4 border-success rounded-4" />
          </div>          
          <div className="d-none d-lg-block col-md-6 col-lg-3 card bg-transparent">
            <img src="/assets/images/cer.jpg" alt="" className="img-fluid galeimg card-img border border-4 border-success rounded-4" />
          </div>
          <div className="d-none d-lg-block col-md-6 col-lg-3 card bg-transparent">
            <img src="/assets/images/marsh.jpg" alt="" className="img-fluid galeimg card-img border border-4 border-success rounded-4" />
          </div>
          <div className="d-none d-lg-block col-md-6 col-lg-3 card bg-transparent">
            <img src="/assets/images/inte.jpg" alt="" className="img-fluid galeimg card-img border border-4 border-success rounded-4" />
          </div>
        </div>
      </div>
      <br />
      <div className="container socials " id="redes">
        <div className="row p-2 ">
          <div className="container-fuid col-auto">
            <div className="col-md-auto p-2">
              <i className="bi bi-github p-2"></i>
              <a className="link-light" href="https://github.com/caiourtiga/" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </div>
            <div className="col-md-auto p-2">
              <i className="bi bi-linkedin p-2"></i>
              <a className="link-light" href="https://www.linkedin.com/in/caiourtiga/" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </div>
            <div className="col-md-auto p-2">
              <i className="bi bi-discord p-2"></i>
              <a className="link-light" href="https://discord.com/users/531591118498854503" target="_blank" rel="noopener noreferrer">
                Discord
              </a>
            </div>
          </div>
          <div className="container-fuid col-auto">
            <div className="col-md-auto p-2">
              <i className="bi bi-whatsapp p-2"></i>
              <a className="link-light" href="https://web.whatsapp.com/send?phone=61999272298" target="_blank" rel="noopener noreferrer">
                Whatsapp
              </a>
            </div>
            <div className="col-md-auto p-2">
              <i className="bi bi-envelope-fill p-2"></i>
              <a className="link-light" href="mailto:caiourtiga@hotmail.com" target="_blank" rel="noopener noreferrer">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="p-3 was-validated container" id="contato">
        <form action="https://formsubmit.co/caiourtiga@hotmail.com" method="POST">
          <div className="row mx-lg-auto">
            <div className="mb-3 col-lg-4 offset-lg-2">
              <label htmlFor="InputEmail1" className="form-label"><h3>Email</h3></label>
              <input type="email" name="email" id="InputEmail1" className="form-control" aria-describedby="emailHelp" required></input>
              <div id="emailHelp" className="form-text">{t('Emailhint')}</div>
            </div>
            <div className="mb-3 col-lg-4">
              <label htmlFor="InputPhone" className="form-label"><h3>{t('Phone')}</h3></label>
              <input type="number" name="phone" id="InputPhone" min="8" className="form-control" aria-describedby="WhatsHelp" required></input>
              <div id="WhatsHelp" className="form-text">{t('Phonehint')}</div>
            </div>
            <div className="mb-3 form-group offset-lg-2 col-lg-8">
              <label htmlFor="Textarea1" name="message" className="form-label"><h3>{t('Message')}</h3></label>
              <textarea className="form-control" name="message" id="Textarea1" rows="3" required></textarea>
            </div>
            <div className="w-100"></div>
            <button type="submit" className="btn btn-lg btn-primary mx-auto col-auto col-lg-2 mb-4 fw-semibold formbutton">{t('Sendbt')}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Body

