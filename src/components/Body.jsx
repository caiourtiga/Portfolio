import React, { Component } from 'react';

const Body = () => {
    return (
      <body>
        <div className="container justify-content-center about">
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
        <div className="container socials text-center">
          <div className="row">
            <div className="col-md-auto">
              <a href="https://github.com/caiourtiga/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/github.png" alt="Github" className="img-fluid img-thumbnail" style={{ width: '200px', height: '200px' }} />
              </a>
            </div>
            <div className="col-md-auto">
              <a href="https://www.linkedin.com/in/caiourtiga/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin.png" alt="Linkedin" className="img-fluid img-thumbnail" style={{ width: '200px', height: '200px' }} />
              </a>
            </div>
            <div className="col-md-auto">
              <a href="https://discord.com/users/231591118498824203" target="_blank" rel="noopener noreferrer">
                <img src="/assets/discord.png" alt="Discord" className="img-fluid img-thumbnail" style={{ width: '200px', height: '200px' }} />
              </a>
            </div>
          </div>
        </div>
      </body>
           
    )
  }
  
  export default Body

