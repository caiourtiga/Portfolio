import React, { Component } from 'react';

const Body = () => {
  return (
    <div>
      <br />
      <div>
        <img src="/assets/tech/html.png" alt="" className="img-fluid timg mx-auto d-block" />
        <div className="container skills">
          <div className="row">
            <div className="mx-auto col-lg-8">
              <p>&ensp;Biotecnologista, formado pela Universidade de Brasília (UnB), atuando como Desenvolvedor.
                Possuo competências de Front-end, trabalhando com React enquanto busco o Full Stack.
                Sempre aberto a aprender e usar novas tecnologias.
                Tenho forte preferência por trabalhos de Software, porém não recuso oportunidades nas 
                áreas de Industrias, Pesquisa e Ambientais.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid skills">
        <div className="row text-center g-2">
          <div className="col-6 col-sm-3">
            <img src="/assets/images/cer.jpg" alt="" className="img-fluid galeimg" />
          </div>
          <div className="col-6 col-sm-3">
            <img src="/assets/images/inte.jpg" alt="" className="img-fluid galeimg" />
          </div>
          <div className="col-6 col-sm-3">
            <img src="/assets/images/marsh.jpg" alt="" className="img-fluid galeimg" />
          </div>
          <div className="col-6 col-sm-3">
            <img src="/assets/images/macaco.jpg" alt="" className="img-fluid galeimg" />
          </div>
          <div className="col-6 col-sm-3">
            <img src="/assets/images/inte.jpg" alt="" className="img-fluid galeimg" />
          </div>
          <div className="col-6 col-sm-3">
            <img src="/assets/images/cer.jpg" alt="" className="img-fluid galeimg" />
          </div>
          <div className="col-6 col-sm-3">
            <img src="/assets/images/marsh.jpg" alt="" className="img-fluid galeimg" />
          </div>
          <div className="col-6 col-sm-3">
            <img src="/assets/images/inte.jpg" alt="" className="img-fluid galeimg" />
          </div>
        </div>
      </div>
      <br />
      <h5 className="text-center" id="redes"> Redes </h5>
      <div className="container socials text-center">
        <div className="row g-5">
          <div className="col-md-auto">
            <a href="https://github.com/caiourtiga/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/github.png" alt="Github" className="img-fluid img-thumbnail simg" />
            </a>
          </div>
          <div className="col-md-auto">
            <a href="https://www.linkedin.com/in/caiourtiga/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/linkedin.png" alt="Linkedin" className="img-fluid img-thumbnail simg" />
            </a>
          </div>
          <div className="col-md-auto">
            <a href="https://discord.com/users/531591118498854503" target="_blank" rel="noopener noreferrer">
              <img src="/assets/discord.png" alt="Discord" className="img-fluid img-thumbnail simg" />
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="p-3 was-validated container" id="contato">
          <form action="https://formsubmit.co/caiourtiga@hotmail.com" method="POST">
            <div className="row">
              <div className="mb-3 col-lg-6">
                <label htmlFor="InputEmail1" className="form-label"><h3>Email</h3></label>
                <input type="email" name="email" className="form-control" aria-describedby="emailHelp" required></input>
                <div id="emailHelp" className="form-text">fulano@hotmail.com</div>
              </div>
              <div className="mb-3 col-lg-6">
                <label htmlFor="InputPhone" className="form-label"><h3>Telefone</h3></label>
                <input type="number" name="phone" min="8" className="form-control" aria-describedby="WhatsHelp" required></input>
                <div id="WhatsHelp" className="form-text">Somente Whatsapp</div>
              </div>
              <div className="mb-3 form-group">
                <label htmlFor="Textarea1" name="message" className="form-label"><h3>Mensagem</h3></label>
                <textarea className="form-control" name="message" rows="3" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Body

