import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Temperatura from "../../components/Temperatura/Temperatura";

export default function Provincia() {
    const [infoProv, setInfoProv] = useState({
        title: "",
        today: "",
        tomorrow: "",
        ciudades: [],
    });
    

    const { CodProv } = useParams();
    // console.log(CodProv);

    useEffect(() => {
        fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${CodProv}`)
            .then((res) => res.json())
            // .then((res) => console.log(res))
            .then((res) => setInfoProv(res));
    }, [CodProv]);

    const { title, today, tomorrow, ciudades } = infoProv;

    return (
        <div>
            <h3 className="title">{title}</h3>
            <div className="container">
                <div>
                    <h4 className="container__title">Previsión de hoy :</h4>
                    <p className="container__text">{today.p}</p>
                </div>
                <div>
                    <h4 className="container__title">Previsión de mañana :</h4>
                    <p className="container__text">{tomorrow.p}</p>
                </div>
            </div>
            <h4 className="container__title container__title--mg-top">Temperatutas de hoy</h4>
            <div className="cityContainer">
                {ciudades.map((ciudad) => {
                    return <Temperatura key={ciudad.id} ciudad={ciudad}/>;
                })}
            </div>
        </div>
    );
}
