import React, { useEffect, useState } from "react";
import ListadoProvincias from "../../components/ListadoProvincias/ListadoProvincias";


export default function Clima() {
    const [tiempo, setTiempo] = useState([]);

    useEffect(() => {
        fetch("https://www.el-tiempo.net/api/json/v2/provincias")
            .then((res) => res.json())
            // .then((res) => console.log(res.provincias))
            .then((res) => setTiempo(res.provincias));
    }, []);

    return (
        <div>
            <h1 className="title">El tiempo por provincias</h1>
            <div className="grid">
                {tiempo.map((clima) => {
                    return (
                    <ListadoProvincias
                        key={clima.CODPROV} 
                        clima={clima} />
                    );
                })}
            </div>
        </div>
    );
}
