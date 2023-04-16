import React, { Component } from 'react';

const Body = () => {
    return (
      <body>
        <div>
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="5000">
                <img src="/assets/carou/3441_Puerto_mediterraneo.jpg" class="img-fluid d-block w-100 caimg" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                  <p>Seja bem vindo, sou Programador Web e será um prazer atendê-lo.</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <img src="/assets/carou/DortorDordrecht.jpg" class="img-fluid d-block w-100 caimg" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                  <p>Seja bem vindo, sou Programador Web e será um prazer atendê-lo.</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <img src="https://i.ytimg.com/vi/b2gaTEMyaa4/sddefault.jpg" class="img-fluid d-block w-100 caimg" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                  <p>Seja bem vindo, sou Programador Web e será um prazer atendê-lo.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <br/>
        <div>
        <h5 className="text-center" id="sobre"> Sobre </h5>
          <div className="container skills">
          <div className="row row-cols-auto g-5">
            <div className="col-ms-auto">
             <img src="/assets/tech/html.png" alt="" className="img-fluid timg"/>
            </div>
            <div className="col">
              <img src="/assets/tech/css.png" alt="" className="img-fluid timg"/>
            </div>
            <div className="col">
              <img src="/assets/tech/js.png" alt="" className="img-fluid timg"/>
            </div>
            <div className="col">
              <img src="/assets/tech/react.png" alt="" className="img-fluid timg"/>
            </div>
          </div>
        </div>
        </div>
        <br/>
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
        <br/>
        <div className="p-3 was-validated">
          <form action="https://formsubmit.co/caiourtiga@hotmail.com" method="POST">
            <div className="mb-3">
              <label for="InputEmail1" className="form-label"><h3>Email address</h3></label>
              <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" required></input>
              <div id="emailHelp" className="form-text">fulano@hotmail.com</div>
            </div>
            <div className="mb-3">
              <label for="InputPhone" className="form-label"><h3>Telefone</h3></label>
              <input type="number" min="8" className="form-control" id="InputWhats" aria-describedby="WhatsHelp" required></input>
              <div id="WhatsHelp" className="form-text">Somente Whatsapp</div>
            </div>
            <div className="mb-3">
              <label for="Textarea1" className="form-label"><h3>Mensagem</h3></label>
              <textarea className="form-control" id="Textarea1" rows="3" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </body>     
    )
  }
  
  export default Body

