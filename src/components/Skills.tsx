import java from "../assets/img/java.png"
import node from "../assets/img/nodejs.png"
import typescript from "../assets/img/typescript.png"
import spring from "../assets/img/spring.png"
import clean from "../assets/img/image.png"
import typeorm from "../assets/img/typeorm.png"
import vuejs from "../assets/img/vuejs.png"
import sqlsever from "../assets/img/sqlseerver.png"
import postgress from "../assets/img/postgress.png"
import mongo from "../assets/img/mongodb.png"
import bug from "../assets/img/bug.png"
import c from "../assets/img/c++.png"
import react from "../assets/img/react.png"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Ao longo da minha trajetória como desenvolvedora, tive a oportunidade de me aprofundar em diversas tecnologias e aprimorar minhas habilidades em várias áreas. <br>
                        </br> Desde o desenvolvimento de aplicações front-end até a criação de soluções robustas no back-end, estou sempre buscando novas formas de inovar e entregar qualidade em cada projeto que assumo.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>NodeJs</h5>
                            </div>
                            <div className="item">
                                <img src={typescript} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={spring} alt="Image" />
                                <h5>SpringBoot</h5>
                            </div>
                            <div className="item">
                                <img src={clean} alt="Image" />
                                <h5>Clean Arch</h5>
                            </div>
                            <div className="item">
                                <img src={typeorm} alt="Image" />
                                <h5 style={{ padding: '1rem' }}>TypeORM</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={vuejs} alt="Image" />
                                <h5>VueJs</h5>
                            </div>
                            <div className="item">
                                <img src={sqlsever} alt="Image" />
                                <h5>SQL Server</h5>
                            </div>
                            <div className="item">
                                <img src={postgress} alt="Image" />
                                <h5>Postgress</h5>
                            </div>
                            <div className="item">
                                <img src={bug} alt="Image" />
                                <h5>Teste de Software</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="Image" />
                                <h5>C / C++</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
