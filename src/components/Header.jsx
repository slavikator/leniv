import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../css/Slideshow.css';

const slideImages = [
  '../images/header/pylystrichkovi.jpg',
  '../images/header/pylydyskovi.jpg',
  '../images/header/nogi.jpg',
  '../images/header/frezy.jpg',
  '../images/header/service.jpg',
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Header = () => {
    return (
        <header id="home">
          <Slide {...properties}>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <span className="w3-padding-large w3-text-white w3-xlarge w3-animate-top">
                  <a href="/products/pyly_strichkovi/#vuzki" className="w3-hover-text-blue w3-xxlarge"><strong>Пили Стрічкові</strong></a>
                  <br />
                  <hr />
                  <strong>ТОВ «Ленів»</strong> - Виготовлення, продаж та обслуговування деревообробного інструменту
                </span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <span className="w3-padding-large w3-text-white w3-xlarge w3-animate-top">
                  <a href="/products/pyly_dyskovi/#derevyna" className="w3-hover-text-blue w3-xxlarge"><strong>Пили дискові</strong></a>
                  <br />
                  <hr />
                  <strong>ТОВ «Ленів»</strong> - Виготовлення, продаж та обслуговування деревообробного інструменту
                </span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <span className="w3-padding-large w3-text-white w3-xlarge w3-animate-top">
                  <a href="/products/nogi/#fuguvalni" className="w3-hover-text-blue w3-xxlarge"><strong>Ножі</strong></a>
                  <br />
                  <hr />
                  <strong>ТОВ «Ленів»</strong> - Виготовлення, продаж та обслуговування деревообробного інструменту
                </span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
                <span className="w3-padding-large w3-text-white w3-xlarge w3-animate-top">
                  <a href="/products/frezy/#pogonag" className="w3-hover-text-blue w3-xxlarge"><strong>Фрези</strong></a>
                  <br />
                  <hr />
                  <strong>ТОВ «Ленів»</strong> - Виготовлення, продаж та обслуговування деревообробного інструменту
                </span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
                <span className="w3-padding-large w3-text-white w3-xlarge w3-animate-top">
                  <a href="/#service" className="w3-hover-text-blue w3-xxlarge"><strong>Сервіс</strong></a>
                  <br />
                  <hr />
                  <strong>ТОВ «Ленів»</strong> - Виготовлення, продаж та обслуговування деревообробного інструменту
                </span>
              </div>
            </div>
          </Slide>
        </header>
    )
}

export default Header;
