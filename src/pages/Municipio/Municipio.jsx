import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Municipio(id) {


  // const [ data, setData ] = useState({});

  // console.log(data)

  // const { CodMun } =useParams();
  // console.log(CodMun)

  // useEffect(() => {
  //   fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${id}/municipios/${CodMun}`)
  //     .then((res) => res.json())
  //     .then((res) => setData(res))
  // }, [CodMun, id])

  return (
    <div>Municipios</div>
  )
}
