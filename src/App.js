import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  let ensalada = [
    {id: 1, name: 'Gambas y calamares', price: '7.50'},
    {id: 2, name: 'Tofu (Vegano)', price: '6.90'}
];

  let rollitos = [
  {id: 3, name: 'Cerdo', price: '6.50'},
  {id: 4, name: 'Gambas', price: '6.75'},
  {id: 5, name: 'Tofu, patata (Vegano)', price: '6.50'},
];

  let rollo = [
    {id: 6, name: 'Cerdo y gambas', name2: 'GỎI CUỐN TÔM THỊT', price: '6.50'},
    {id: 7, name: 'Salmon y aguacate', name2: 'CÁ HỒI CUỘN BƠ', price: '7.50'},
    {id: 8, name: 'Cangrejo y algas', name2: 'NEM THANH CUA RONG BIỂN', price: '6.95'},
    {id: 9, name: 'Tofu (Vegano)', name2: 'GỎI CUỐN CHAY', price: '6.50'},
  ];

  let pho = [
    {id: 10, name: 'Ternera', price: '11.85'},
    {id: 11, name: 'Pollo', price: '11.85'},
    {id: 12, name: 'Vegano', price: '11.50'},
  ];

  let bun = [
    {id: 13, name: 'BÚN HẢI SẢN', name2: 'Sopa de fideos de arroz con mariscos', price: '12.25'},
  ];

  let my = [
    {id: 14, name: 'MỲ QUẢNG', name2: 'Sopa de fideos de arroz al estilo de Quang', price: '12.00'},
  ];

  let platos = [
    {id: 15, name: 'Fideos de arroz al estilo del Sur de Vietnam', name2: 'BÚN BÒ NAM BỘ', price: '12.25'},
    {id: 16, name: 'Fideos de arroz con cerdo a la barbacoa con salsa especial de Vietnam', name2: 'BÚN CHẢ', price: '12.95'},
    {id: 17, name: 'PHO con pollo mixto', name2: 'PHỞ GÀ TRỘN', price: '11.50'},
    {id: 18, name: 'PHO con ternera mixto', name2: 'PHỞ BÒ TRỘN', price: '11.65'},
    {id: 19, name: 'Fideos de arroz vegano mixto', name2: 'BÚN CHAY TRỘN', price: '11.40'},
  ];

  let salteada = [
    {id: 20, name: 'PHO salteado de ternera y verdura', name2: 'PHỞ BÒ XÀO', price: '11.75'},
    {id: 21, name: 'PHO salteado de pollo', name2: 'PHỞ GÀ XÀO', price: '11.60'},
    {id: 22, name: 'Fideos salteados con cerdo y salsa de mantequilla de mani', name2: 'MỲ XÀO SỐT BƠ ĐẬU PHỘNG', price: '11.95'},
    {id: 23, name: 'Fideos de arroz salteados con mariscos ', name2: 'MỲ XÀO HẢI SẢN', price: '12.25'},
    {id: 24, name: 'Fideos salteados veganos ', name2: 'MỲ XÀO CHAY', price: '11.55'},
  ];

  let arroz = [
    {id: 25, name: 'Arroz de pollo y setas en cazuela de barro', name2: 'CƠM GÀ XÀO NẤM NỒI ĐẤT', price: '12.35'},
    {id: 26, name: 'Arroz de costillas horneado con salsa de tamarinde', name2: 'CƠM SƯỜN NƯỚNG SỐT ME', price: '11.80'},
    {id: 27, name: 'Arroz de muslos de pollo horneado con salsa de tamarinde', name2: 'CƠM GÀ ÁP CHẢO SỐT ME', price: '11.80'},
    {id: 28, name: 'Arroz de tofu con salsa de champiñones (vegano)', name2: 'CƠM ĐẬU PHỤ SỐT NẤM CHAY', price: '10.85'},
  ];


  let curry = [
    {id: 29, name: 'Curry de ternera con arroz', name2: 'CƠM CÀ RI BÒ', price: '11.80'},
    {id: 30, name: 'Curry de pollo con arroz', name2: 'CƠM CÀ RI GÀ', price: '11.75'},
    {id: 31, name: 'Curry de salmon con arroz', name2: 'CƠM CÀ RI CÁ HỒI XOÀI', price: '12.00'},
    {id: 32, name: 'Curry de gambas con arroz', name2: 'CƠM CÀ RI TÔM XOÀI', price: '11.90'},
    {id: 33, name: 'Curry vegano', name2: 'CƠM CÀ RI CHAY', price:'11.50'},
  ];

  let bocadillo = [
    {id: 34, name: 'Bocadillo con pate y char siu', name2: 'BÁNH MỲ PATE XÁ XÍU', price: '7.95'},
    {id: 35, name: 'Bocadillo con pate y cerdo horneado', name2: 'BÁNH MỲ PATE THỊT NƯỚNG', price: '7.95'},
  ];

  let postres = [
    {id: 36, name: 'Arroz meloso de mango con leche de coco', name2: 'XÔI XOÀI CỐT DỪA', price: '4.95'},
    {id: 37, name: 'Pastel de platano con helado y fresa', name2: 'BÁNH CHUỐI KEM DÂU TÂY', price: '4.95'},
    {id: 38, name: 'Platanos con mani y crema', name2: 'CHUỐI ĐẬU PHÔNG XAY PHỦ KEM TƯƠI', price: '4.95'},
  ];

  let refresco = [
    {id: 39, name: 'Agua Cabreiroa 1L', price: '2.00'},
    {id: 40, name: 'Agua Cabreiroa 0.5L', price: '1.20'},
    {id: 41, name: 'Agua con Gas Magma', price: '1.80'},
    {id: 42, name: 'Coca cola/ Coca Zero/Nestea/ Fanta (limon/ naranja)', price: '1.80'},
    {id: 43, name: 'Aquarius limon', price: '1.80'},
    {id: 44, name: 'Aquarius naranja', price: '1.80'},
    {id: 45, name: 'Tonica Schweppes 250ml', price: '1.90'},
    {id: 46, name: 'Trina naranja', price: '1.50'},
    {id: 47, name: 'Zumo de melocoton', price: '2.00'},
    {id: 48, name: 'Zumo de piña', price: '2.00'},
    {id: 49, name: 'Red bull', price: '3.00'},
    {id: 50, name: 'Bitter kas', price: '2.00'},
  ];

  let cerveza = [
    {id: 51, name: 'Cerveza Vietnamita Saigon', price: '3.60'},
    {id: 52, name: 'Cerveza Amstel Radler Retornable', price: '2.50'},
    {id: 53, name: 'Cerveza 1906 Especial 6.5', price: '2.90'},
    {id: 54, name: 'Cerveza Galicia Tostada 0.0', price: '2.00'},
    {id: 55, name: 'Cerveza Galicia Retornable 33cl', price: '2.50'},
    {id: 56, name: 'Doble Galicia', price: '2.50'},
    {id: 57, name: 'Jarra de Cerveza 1.25L', price: '7.00'},
    {id: 58, name: 'Tinto Verano Original', price: '2.00'},
    {id: 59, name: 'Tinto Verano Al Limon', price: '2.00'},
  ];

  let vino = [
    {id: 60, name: 'Vino PC Pago de los capellanes', price: '45.00'},
    {id: 61, name: 'Vino Valquemao', price: '35.00'},
    {id: 62, name: 'Vino Marques de Caceres', price: '25.00'},
    {id: 63, name: 'Vino Protos', price: '12.00'},
    {id: 64, name: 'Vino Copa', price: '3.40'},
  ];

  let cafe = [
    {id: 65, name: 'Cafe Vietnamita con Leche Condensada', price: '3.90'},
    {id: 66, name: 'Te Verde', price: '2.00'},
    {id: 67, name: 'Te Rojo', price: '2.00'},
    {id: 68, name: 'Cafe Espresso', price: '1.30'},
    {id: 69, name: 'Cafe Cortado', price: '1.50'},
    {id: 70, name: 'Cafe Americano', price: '1.50'},
    {id: 71, name: 'Cafe con Leche ', price: '1.70'},
  ];

  let cas = [
    {id: 72, name: 'Te de Limon', price: '3.40'},
    {id: 73, name: 'Te de Duanos con Naranja y Citronela', price: '3.40'},
    {id: 74, name: 'Te de Lichi', price: '3.40'},
    {id: 75, name: 'Te Rojo con Citronela ', price: '3.40'},
  ];

  const [comidaPressed, setComidaPressed] = useState(true)

  function handleComidaClick (e) {
      setComidaPressed(true)
};

  function handleBedidasClick (e) {
    setComidaPressed(false)
  };


  return (
    <div className="App">
  
      <h1>VỊ VIỆT CARTA</h1>
      <button 
      className="button"
      onClick={handleComidaClick}>COMIDA</button>
       | <button 
      className="button"
      onClick={handleBedidasClick}>BEBIDAS</button>
      
        {comidaPressed ? <>
        <div className="body">
          <div className="left-side">
            <div className="food-section">
              <div className="section-name">
                <b>I. ENSALADA VIETNAMITA DE MANGO</b>
                <span> - GỎI XOÀI</span>
              </div>
            <i className="section-description">Deliciosa y saludable ensalada de mango con</i>
            {ensalada.map((dish, i) => {
                              return <div className="box1" key={i}>
                                      <div><span>{dish.id}.</span> <span>{dish.name} </span></div>
                                      <div className="price"><b><span>{dish.price}€</span></b></div>
                                  </div>
                          })}
            </div>

            <div className="food-section">
              <div className="section-name">
                <b>II.	ROLLITOS PRIMAVERA </b>
                <span> - NEM HÀ NỘI</span>
              </div>
            <i className="section-description">Rollitos fritos crujientes rellenos de</i>
            {rollitos.map((dish, i) => {
                              return <div className="box1" key={i}>
                                      <div><span>{dish.id}.</span> <span>{dish.name} </span></div>
                                      <div className="price"><b><span>{dish.price}€</span></b></div>
                                  </div>
                          })}
            </div>

            <div className="food-section">
              <div className="section-name">
                <b>III.	ROLLO FRESCO </b>
                <span> - GỎI CUỐN</span>
              </div>
            <i className="section-description">Rollitos frescos envuelto a mano de papel de arroz con</i>
            {rollo.map((dish, i) => {
                              return <div className="box1" key={i}>
                                      <div><span>{dish.id}.</span> <span>{dish.name} </span> <span> - {dish.name2}</span></div>
                                      <div className="price"><b><span>{dish.price}€</span></b></div>
                                  </div>
                          })}
            </div>

            <div className="food-section">
              <div className="section-name">
                <div><b>PLATOS PRINCIPALES</b></div>
                <b>IV.	PHO</b>
              </div>
              <i className="section-description">PHO es plato más popular en Vietnam. Una sopa de fideos de arroz en caldo cocido a fuego lento durante 10-12 horas, con</i>
              {pho.map((dish, i) => {
                                return <div className="box1" key={i}>
                                        <div><span>{dish.id}.</span> <span>{dish.name} </span></div>
                                        <div className="price"><b><span>{dish.price}€</span></b></div>
                                    </div>
                            })}
            </div>

            <div className="food-section">
              <div className="section-name">
              <div className="box1">
              </div>
              </div>
              {bun.map((dish, i) => {
                  return <div className="box1" key={i}>
                          <div><b><span>{dish.id}.</span> <span>{dish.name} </span></b><br />
                          <i>{dish.name2}</i></div>
                          <div className="price"><b><span>{dish.price}€</span></b></div>
                      </div>
              })}

              {my.map((dish, i) => {
                  return <div className="box1" key={i}>
                          <div><b><span>{dish.id}.</span> <span>{dish.name} </span></b><br />
                          <i>{dish.name2}</i></div>
                          <div className="price"><b><span>{dish.price}€</span></b></div>
                      </div>
              })}
            </div>

            <div className="food-section">
              <div className="section-name">
                <b>V. PLATOS MIXTOS</b>
              </div>
              {platos.map((dish, i) => {
                              return <div className="box1" key={i}>
                                      <div><span>{dish.id}.</span> <span>{dish.name} </span> <span> - {dish.name2}</span></div>
                                      <div className="price"><b><span>{dish.price}€</span></b></div>
                                  </div>
                          })}
            </div>

          </div>

          <div className="right-side">
            <div className="food-section">
                <div className="section-name">
                  <b>VI. COMIDA SALTEADA</b>
                </div>
                {salteada.map((dish, i) => {
                                return <div className="box1" key={i}>
                                        <div><span>{dish.id}.</span> <span>{dish.name} </span> <span> - {dish.name2}</span></div>
                                        <div className="price"><b><span>{dish.price}€</span></b></div>
                                    </div>
                            })}
              </div>
                  
              <div className="food-section">
                <div className="section-name">
                  <b>VII. ARROZ</b>
                </div>
                {arroz.map((dish, i) => {
                                return <div className="box1" key={i}>
                                        <div><span>{dish.id}.</span> <span>{dish.name} </span> <span> - {dish.name2}</span></div>
                                        <div className="price"><b><span>{dish.price}€</span></b></div>
                                    </div>
                            })}
              </div>

              <div className="food-section">
                <div className="section-name">
                  <b>VIII. CURRY</b>
                </div>
                {curry.map((dish, i) => {
                                return <div className="box1" key={i}>
                                        <div><span>{dish.id}.</span> <span>{dish.name} </span> <span> - {dish.name2}</span></div>
                                        <div className="price"><b><span>{dish.price}€</span></b></div>
                                    </div>
                            })}
              </div>

              <div className="food-section">
                <div className="section-name">
                  <b>IX. BOCADILLO VIETNAMITA</b>
                  <span> - BÁNH MÌ VIỆT NAM</span>
                </div>
                {bocadillo.map((dish, i) => {
                                return <div className="box1" key={i}>
                                        <div><span>{dish.id}.</span> <span>{dish.name} </span> <span> - {dish.name2}</span></div>
                                        <div className="price"><b><span>{dish.price}€</span></b></div>
                                    </div>
                            })}
              </div>

              <div className="food-section">
                <div className="section-name">
                  <b>X. POSTRES</b>
                </div>
                {postres.map((dish, i) => {
                                return <div className="box1" key={i}>
                                        <div><span>{dish.id}.</span> <span>{dish.name} </span> <span> - {dish.name2}</span></div>
                                        <div className="price"><b><span>{dish.price}€</span></b></div>
                                    </div>
                            })}
          </div></div></div></> : <>
          <div className="centered-text">
            <div className="food-section">
              <div className="section-name">
                <b>REFRESCO</b>
              </div>
              {refresco.map((dish, i) => {
                  return <div className="box2" key={i}>
                          <div><span>{dish.id}.</span> <span>{dish.name} </span></div>
                          <div className="price"><b><span>{dish.price}€</span></b></div>
                      </div>
              })}
            </div>

            <div className="food-section">
              <div className="section-name">
                <b>CERVEZA</b>
              </div>
              {cerveza.map((dish, i) => {
                  return <div className="box2" key={i}>
                          <div><span>{dish.id}.</span> <span>{dish.name} </span></div>
                          <div className="price"><b><span>{dish.price}€</span></b></div>
                      </div>
              })}
            </div>

            <div className="food-section">
              <div className="section-name">
                <b>VINO</b>
              </div>
              {vino.map((dish, i) => {
                  return <div className="box2" key={i}>
                          <div><span>{dish.id}.</span> <span>{dish.name} </span></div>
                          <div className="price"><b><span>{dish.price}€</span></b></div>
                      </div>
              })}
            </div>

            <div className="food-section">
              <div className="section-name">
                <b>CAFÉ, TÉ</b>
              </div>
              {cafe.map((dish, i) => {
                  return <div className="box2" key={i}>
                          <div><span>{dish.id}.</span> <span>{dish.name} </span></div>
                          <div className="price"><b><span>{dish.price}€</span></b></div>
                      </div>
              })}
            </div>
            
            <div className="food-section">
              <div className="section-name">
                <b>BEBIDAS CASERAS VIETNAMITAS</b>
              </div>
              {cas.map((dish, i) => {
                  return <div className="box2" key={i}>
                          <div><span>{dish.id}.</span> <span>{dish.name} </span></div>
                          <div className="price"><b><span>{dish.price}€</span></b></div>
                      </div>
              })}
            </div>

          </div>

          </>}       

        
   
      
    </div>
  );
}

export default App;
