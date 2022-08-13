import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <h1>Restaur</h1>
      <h4>Un poco sobre nosotros,en el año 1995 se creo este bonito restaurante llamado Taste Italy desde su inicio
        se ah llevado miles de paladares satisfechos aun sin incluir el tuyo,despues de el exito que tuvo en Sicilia nos 
        lanzamos a explorar el mundo del internet y te traemos aqui los mejores platillos que tiene nuestro restaurante 
        No esperes mas para probarlos</h4>

        <h2 center>MENU</h2>
      <div className="card">
      <center><img src="https://www.momondo.es/discover/wp-content/uploads/sites/242/2017/05/theme_food_italian-shutterstock-premier_281387153_universal_within-usage-period_48283.jpg" height="300" width="400" alt="" /></center>
      <h3>Espaguet</h3>

      <center><img src="http://1.bp.blogspot.com/-FLefjggONDA/UwKvZ1tImBI/AAAAAAAAAOI/hbnQLyHNiM0/s1600/pasta3.jpg" height="300" width="400" alt="" /></center>
      <h3>Porto bello</h3>

      <center><img src="https://static.comunicae.com.mx/photos/notas/126446/1571437950_TourOfItalyheadtoheadred_FY19_copia.jpg" height="300" width="400" alt="" /></center>
      <h3>Olive garden</h3>
      
      <center><img src="https://images.ctfassets.net/sd2voc54sjgs/5uhgmiChWggs4MUQkekUkE/94d3c3d1ddf4a1161b1c4685700ed04d/MX_Comida_t__pica_italiana_que_te_har___exclamar_-__la_vita____bella_-.jpg" height="300" width="400" alt="" /></center>
      <h3>Sorelli</h3>

      <center><img src="https://babycocina.com/wp-content/uploads/2020/07/Raviolis-de-espinaca-y-ricotta-receta-italiana.jpg" height="300" width="400" alt="" /></center>
      <h3>Raviolis</h3>
      
      <center><img src="https://cdn.elviajerofisgon.com/wp-content/uploads/2016/07/Portada-6.jpg" height="300" width="400" alt="" /></center>
      <h3>Viajero fisgon</h3>
      
      <center><img src="https://ogimg.infoglobo.com.br/in/23594927-c2a-c29/FT1086A/652/82154276_BAToque-de-Chef-Porchetta-Focaccia-e-Maionese-de-Alecrim-do-restaurante-Olivo.jpg" height="300" width="400" alt="" /></center>
      <h3>Gosta</h3>

      <a href="https://cdn-icons-png.flaticon.com/512/901/901141.png" target="_blank">
        </a>
      </div>
      <p className="read-the-docs">
        Conoce mas....
      </p>
      <title>icono</title>
      <link rel="icon" type="image/jpg" href="https://cdn-icons-png.flaticon.com/512/455/455604.png"></link>
      <h4> Telefono:55-24-53-77-32-67</h4> 
      <link rel="icon" type="image/svg+xml" href="https://cdn-icons-png.flaticon.com/512/197/197626.png" />
      <h4> Direccion:Calle Palacio Ritual mtz.12 lt.6</h4>
      <link rel="icon" type="image/svg+xml" href="https://cdn-icons-png.flaticon.com/512/197/197626.png" />
      <h4>Facebook:Taste Itali</h4>
      <h4>PROYECTO 4</h4>
    </div>    
  )
}

export default App
