import React, { Component } from 'react';

const Body = () => {
    return (
      <body>
       <div className="container d-flex justify-content-center intro">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
           <h1>Seja bem vindo, sou Programador Web e será um prazer atendê-lo.</h1>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
             <img src="/assets/banana.png" class="rounded float-end cta-img" alt="Banana"></img>
            </div>
          </div>
        </div>
        <br/>
        <div>
        <h2 className="text-center" id="sobre"> Sobre </h2>
          <div className="container skills">
          <div className="row row-cols-auto g-2">
            <div className="col-ms-auto">
             <img src="/assets/html.png" alt="" className="img-fluid" style={{ width: '200px', height: '200px' }} />
            </div>
            <div className="col">
              <img src="/assets/css.png" alt="" className="img-fluid" style={{ width: '200px', height: '200px' }} />
            </div>
            <div className="col">
              <img src="/assets/js.png" alt="" className="img-fluid" style={{ width: '200px', height: '200px' }} />
            </div>
            <div className="col">
              <img src="/assets/react.png" alt="" className="img-fluid" style={{ width: '200px', height: '200px' }} />
            </div>
          </div>
        </div>
        </div>
        <br/>
        <h2 className="text-center" id="redes"> Redes </h2>
        <div className="container socials text-center">
          <div className="row g-2">
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
              <a href="https://discord.com/users/231591118498824203" target="_blank" rel="noopener noreferrer">
                <img src="/assets/discord.png" alt="Discord" className="img-fluid img-thumbnail simg" />
              </a>
            </div>
          </div>
        </div>
        <br/>
        <div className="p-3 was-validated">
          <form action="https://formsubmit.co/caiourtiga@hotmail.com" method="POST">
          <div class="mb-3">
            <label for="InputEmail1" class="form-label"><h3>Email address</h3></label>
            <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" required></input>
            <div id="emailHelp" class="form-text">fulano@hotmail.com</div>
          </div>
          <div class="mb-3">
            <label for="InputPhone" class="form-label"><h3>Telefone</h3></label>
            <input type="number" min="8" class="form-control" id="InputWhats" aria-describedby="WhatsHelp" required></input>
            <div id="WhatsHelp" class="form-text">Somente Whatsapp</div>
          </div>
          <div class="mb-3">
            <label for="Textarea1" class="form-label"><h3>Mensagem</h3></label>
            <textarea class="form-control" id="Textarea1" rows="3" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
        </div>
      </body>
           
    )
  }
  
  export default Body

