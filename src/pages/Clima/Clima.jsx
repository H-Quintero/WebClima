import React, { useEffect, useState } from "react";
import ListadoProvincias from "../../components/ListadoProvincias/ListadoProvincias";

export default function Clima() {
    const [weather, setWeather] = useState([]);
    const [tableWeather, setTableWeather] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://www.el-tiempo.net/api/json/v2/provincias")
            .then((res) => res.json())
            // .then((res) => console.log(res.provincias))
            .then((res) => setWeather(res.provincias));
    }, []);
    useEffect(() => {
        fetch("https://www.el-tiempo.net/api/json/v2/provincias")
            .then((res) => res.json())
            // .then((res) => console.log(res.provincias))
            .then((res) => setTableWeather(res.provincias));
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
        filter(e.target.value);
    };

    const filter = (data) => {
        let searchResult = tableWeather.filter((element) => {
            if (
                element.NOMBRE_PROVINCIA.toString()
                    .toLowerCase()
                    .includes(data.toLowerCase())
            ) {
                return element;
            } 
        });
        setWeather(searchResult);
    };

    return (
        <div>
            <div className="containerInput">
                <input
                    className="input"
                    value={search}
                    placeholder="Búsqueda por provincia"
                    onChange={handleChange}
                />
                <button className="button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-search"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="#000000"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </button>
            </div>
            <h1 className="title">El tiempo por provincias</h1>
            <div className="grid">
                {weather.map((clima) => {
                    return (
                        <ListadoProvincias key={clima.CODPROV} clima={clima} />
                    );
                })}
            </div>
        </div>
    );
}
