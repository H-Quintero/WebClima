import React, { useEffect, useState } from 'react'

export default function Parking() {

  

  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    fetch('https://datos.madrid.es/egob/catalogo/202625-0-aparcamientos-publicos.json')
      .then(data => data.json())
      .then(data => setParkings(data))
      // .then((data) => console.log(data));
  });

  return (
    <div>
      <h1>
        Listado Parkings Madrid
      </h1>

      <div>
        {parkings.map((parking) => {
          console.log(parking)
          return (
            <p>HOla</p>
          )
        })}
      </div>
    </div>
  )
}
