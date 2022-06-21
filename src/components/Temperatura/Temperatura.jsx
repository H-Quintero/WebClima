import React from "react";

export default function Temperatura({ ciudad: { name, temperatures } }) {
    return (
        <div className="tempContainer">
            <h3 className="tempContainer__title">{name}</h3>
            <div className="temp">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-arrow-bar-to-up"
                    width="44"
                    height="33"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ff2825"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="12" y1="10" x2="12" y2="20" />
                    <line x1="12" y1="10" x2="16" y2="14" />
                    <line x1="12" y1="10" x2="8" y2="14" />
                    <line x1="4" y1="4" x2="20" y2="4" />
                </svg>
                <p className="temp__text">Max {temperatures.max} °C</p>
            </div>
            <div className="temp">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-arrow-bar-to-down"
                    width="44"
                    height="33"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#00abfb"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="20" x2="20" y2="20" />
                    <line x1="12" y1="14" x2="12" y2="4" />
                    <line x1="12" y1="14" x2="16" y2="10" />
                    <line x1="12" y1="14" x2="8" y2="10" />
                </svg>
                <p className="temp__text">Min {temperatures.min} °C</p>
            </div>
        </div>
    );
}
