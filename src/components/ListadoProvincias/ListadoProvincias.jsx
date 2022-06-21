import React from "react";
import { Link } from "react-router-dom";

export default function ListadoProvincias({ clima: { CODPROV, NOMBRE_PROVINCIA } }) {
    return (
        <Link to={`provincia/${CODPROV}`}>
            <h2 className="name">{NOMBRE_PROVINCIA}</h2>
        </Link>
    );
}
