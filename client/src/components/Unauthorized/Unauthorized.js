import React from 'react'
import {Link} from "react-router-dom"


function Unauthorized() {
    return (
        <div className='container'>

        <div>
          <h1>403 - Bir hata oldu</h1>
          <p>Burası oldukça boş görünüyor!<br />Yanlış bir url adresi girmiş olabilirsiniz.</p>
        </div>
        <p><Link to='/'>Anasayfaya dön</Link></p>
      </div>
    )
}

export default Unauthorized
