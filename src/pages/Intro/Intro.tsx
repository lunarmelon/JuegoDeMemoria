import { Link } from "react-router-dom";
import background from "../../images/bg.png";
import { ROUTES } from "../../routes/constants";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-repeat">
      <img src={background} alt="background" className="w-full h-screen" />
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h2 className="font-medium mt-5 text-5xl">
          ¿Qué es la crianza positiva?
        </h2>
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl overflow-auto flex flex-col mt-10 mb-5">
          <p className="text-lg">
            La crianza o disciplina positiva es un método que hace énfasis en
            que la clave para educar a tus hijos no debe recaer en el castigo,
            sino en la enseñanza del respeto y la amabilidad entre las personas,
            guiándolos en su camino siempre de forma positiva y afectiva. <br />{" "}
            <br />
            Este método está basado en la comunicación, el amor y la empatía,
            enseñando a los padres las herramientas para entender el
            comportamiento de sus hijos, de esta manera crear actitudes
            positivas en ellos. <br /> <br />
            <b>
              Como padres y/o madres, se debe propiciar buenas conductas y
              responsabilidades, recordando que los niños imitan y repiten las
              palabras y comportamientos que observan en casa.{" "}
            </b>
            <br /> <br />
            Guíate en los siguientes puntos:
          </p>
          <div className="flex text-center justify-between items-center mt-2 mb-5">
            <div className="table-style">
              <h1 className="top-part">Tolerar y confiar</h1>
              <p className="bottom-part">
                Es el adulto quien debe tolerar escuchar determinadas cosas que
                a priori no sean las esperables, estar firme para sostener,
                orientar y acompañar.
              </p>
            </div>
            <div className="table-style">
              <h1 className="top-part">Coherencia entre decir y hacer</h1>
              <p className="bottom-part">
                Los adolescentes necesitan reglas claras y firmes. Recordemos
                que el adolescente nos estará observando y con nuestro ejemplo
                también le estamos demostrando cómo gestionamos nuestros
                vínculos, como y con quien nos divertimos.
              </p>
            </div>
            <div className="table-style">
              <h1 className="top-part">Redes de apoyo y orientación</h1>
              <p className="bottom-part">
                Generar redes de alianza para cruzar información y redes de
                información con expertos en materia de prevención.
              </p>
            </div>
          </div>
          <nav className="flex items-center justify-center mt-5">
            <ul>
              <li className="header-button">
                <Link to={ROUTES.GAME}>Realizar actividad</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Intro;
