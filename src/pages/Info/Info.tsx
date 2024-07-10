import background from "../../images/bg.png";
import infoElSalto from "../../images/infoElSalto.jpeg";
import oip from "../../images/OIP.jpg";
import cruzVerde from "../../images/cruzverde.jpg";

const Info = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-repeat">
      <img src={background} alt="background" className="w-full h-screen" />
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h2 className="font-medium mt-5 text-5xl">Recursos</h2>
        <ul className="overflow-auto mt-5 mb-5">
          <li>
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl overflow-auto flex mt-10">
              <div className="flex justify-center items-center">
                <div className="mr-6">
                  <h1 className="font-bold text-center text-xl">
                    Comisaría de la Policía Preventiva Municipal El Salto
                    Jalisco
                  </h1>
                  <p className="mt-10">
                    Dirección: Helidoro Hernández Loza, Álvarez del Castillo,
                    45680 El Salto, Jal. <br /> <br />{" "}
                    <b>
                      UNIDAD ESPECIALIZADA POLICIAL PARA LA ATENCIÓN INTEGRAL A
                      MUJERES VÍCTIMAS DE VIOLENCIA (UEPAIMVV) <br />
                    </b>{" "}
                    <br /> El número de atención bajo el <b>Código Violeta</b>{" "}
                    es <b>33 3732 4757</b> y para todas las mujeres que
                    necesiten esta nueva unidad se encuentra Ubicada en el
                    fraccionamiento Albereda Residencial, ubicado en Carretera
                    El Salto Km 2 La Alameda. El de WhatsApp de emergencias es
                    el <b>33-26-13-08-64</b>
                  </p>
                </div>
                <img
                  src={infoElSalto}
                  alt="Información"
                  className="w-96 h-96"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl overflow-auto flex mt-10">
              <div className="flex justify-center items-center">
                <div className="mr-6">
                  <h1 className="font-bold text-center text-xl">
                    DIF (Desarrollo Integral de la Familia) El Salto
                  </h1>
                  <p className="mt-10">
                    Página de internet:{" "}
                    <a
                      className="text-blue-500 hover:underline"
                      href="http://difelsalto.com"
                    >
                      http://difelsalto.com
                    </a>{" "}
                    <br />
                    <br />
                    Número telefónico: 33 3732 0749
                    <br />
                    <br />
                    Dirección: Josefa Ortiz de Domínguez 769, Centro, 45680 El
                    Salto, Jal.
                  </p>
                </div>
                <img src={oip} alt="Información" className="w-96 h-60" />
              </div>
            </div>
          </li>
          <li>
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl overflow-auto flex mt-10">
              <div className="flex justify-center items-center">
                <div className="mr-6">
                  <h1 className="font-bold text-center text-xl">
                    Cruz Verde El Salto
                  </h1>
                  <p className="mt-10">
                    <ul>
                      <li>Horario: 24hrs </li>
                      <br />
                      <li>Teléfono: 33-3284-1240 Ext.140</li>
                      <br />
                      <li>
                        <b>Servicios:</b> <br />
                        - Urgencias <br />
                        - Recepción, Estabilización y Derivación de Servicio
                        Correspondientes
                        <br /> - Consulta General Ambulancia <br /> -Trámites
                        (Certificados Médicos)
                      </li>
                    </ul>
                  </p>
                </div>
                <img src={cruzVerde} alt="Información" className="w-96 h-96" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
