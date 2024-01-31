import React, { Component } from 'react';
import { projetos } from './Projetos';
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' }
};

const Body = () => {

  const { t, i18n } = useTranslation();

  return (
    <div className="my-4">
      <br />
      <div>
        <img src="/assets/tech/1662402601960.jpg" alt="" className="img-fluid timg mx-auto d-block my-5 rounded-4" />
        <div className="container skills">
          <div className="row">
            <div className="mx-auto col-lg-8">
              <p>&ensp;Biotecnologista, formado pela Universidade de Brasília (UnB), atuando como Desenvolvedor.
                Possuo competências de Front end, trabalhando com React e Wordpress enquanto busco o Full Stack.
                Sempre disposto a aprender e usar novas tecnologias.
                Tenho forte preferência por trabalhos de Software, porém não recuso oportunidades nas
                áreas de Industria, Pesquisa e Ambiental.</p>
                <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="projetos">
        <div className="row text-center g-3">
          {projetos.map((projeto) => (
            <div className="col-md-6 col-lg-3 card bg-transparent" key={projeto.id}>
              <img src={projeto.image} alt="" className="img-fluid galeimg card-img border border-4 border-success rounded-4" />
              <div className="card-img-overlay cardcontent">
                <h5 className="card-title h4">{projeto.title}</h5>
                <p className="card-text h5">{projeto.text}</p>
                <p className="card-text">{projeto.text2}</p>
                <a href={projeto.link} target="_blank" className="btn btn-success">Ver</a>
              </div>
            </div>
          ))}
          {/* <div className="col-md-6 col-lg-3 card bg-transparent">
            <img src="/assets/images/thumbs.png" alt="" className="img-fluid galeimg card-img border border-4 border-success rounded-4" />
            <div className="card-img-overlay cardcontent">
              <h5 className="card-title h4">Conceito 1</h5>
              <p className="card-text h5">Site conceito para a empresa Plugreen</p>
              <p className="card-text">Feito com React+Vite para todas as telas</p>
              <a href="https://pgreenv1.netlify.app/" target="_blank" className="btn btn-success">Ver</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 card bg-transparent">
            <img src="/assets/images/inte2.png" alt="" className="img-fluid galeimg card-img border border-4 border-success rounded-4" />
            <div className="card-img-overlay cardcontent">
              <h5 className="card-title h4">Conceito 2</h5>
              <p className="card-text h5">Site conceito para a empresa Plugreen</p>
              <p className="card-text">Feito com React+Vite para desktops e tablets</p>
              <a href="https://plugreenrascunho.netlify.app/" target="_blank" className="btn btn-success">Ver</a>
            </div>
          </div> */}
          <div className="col-md-6 col-lg-3 card bg-transparent">
            <img src="/assets/images/marsh.jpg" alt="" className="img-fluid galeimg card-img border border-4 border-success rounded-4" />
          </div>
          <div className="col-md-6 col-lg-3 card bg-transparent">
            <img src="/assets/images/macaco.jpg" alt="" className="img-fluid galeimg card-img border border-4 border-success rounded-4" />
          </div>
          <div className="col-md-6 col-lg-3 card bg-transparent">
            <img src="/assets/images/inte.jpg" alt="" className="img-fluid galeimg card-img border border-4 border-success rounded-4" />
          </div>
          <div className="col-md-6 col-lg-3 card bg-transparent">
            <img src="/assets/images/cer.jpg" alt="" className="img-fluid galeimg card-img border border-4 border-success rounded-4" />
          </div>
          <div className="col-md-6 col-lg-3 card bg-transparent">
            <img src="/assets/images/marsh.jpg" alt="" className="img-fluid galeimg card-img border border-4 border-success rounded-4" />
          </div>
        </div>
      </div>


      <div>
      <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <p className="App-link">

          
          

          {t(('description.part2'), { returnObjects: true })}

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('description.part2')}
        </a>
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
              <div id="emailHelp" className="form-text">seuemail@email.com</div>
            </div>
            <div className="mb-3 col-lg-4">
              <label htmlFor="InputPhone" className="form-label"><h3>Telefone</h3></label>
              <input type="number" name="phone" id="InputPhone" min="8" className="form-control" aria-describedby="WhatsHelp" required></input>
              <div id="WhatsHelp" className="form-text">Somente Whatsapp</div>
            </div>
            <div className="mb-3 form-group offset-lg-2 col-lg-8">
              <label htmlFor="Textarea1" name="message" className="form-label"><h3>Mensagem</h3></label>
              <textarea className="form-control" name="message" id="Textarea1" rows="3" required></textarea>
            </div>
            <div className="w-100"></div>
            <button type="submit" className="btn btn-lg btn-primary mx-auto col-auto col-lg-2 mb-4 fw-semibold formbutton">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Body

