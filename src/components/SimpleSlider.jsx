import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 600,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true,
      autoplay: true,
      pauseOnHover: false,
    };
    return (
      <header id="home">
      <Slider {...settings}>
        <div className="w3-row">
          <img src={require('../images/header/pylystrichkovi.jpg')} alt="" />
          <span className="w3-padding-large w3-text-white w3-xlarge w3-animate-top">
            <a href="/products/pyly_strichkovi/#vuzki" className="w3-hover-text-blue w3-xxlarge"><strong>Пили Стрічкові</strong></a>
            <br />
            <hr />
            <strong>ТОВ «Ленів»</strong> - Виготовлення, продаж та обслуговування деревообробного інструменту
          </span>
        </div>
        <div>
          <img src={require('../images/header/pylydyskovi.jpg')} alt="" />
          <span className="w3-padding-large w3-text-white w3-xlarge w3-animate-top">
            <a href="/products/pyly_dyskovi/#derevyna" className="w3-hover-text-blue w3-xxlarge"><strong>Пили дискові</strong></a>
            <br />
            <hr />
            <strong>ТОВ «Ленів»</strong> - Виготовлення, продаж та обслуговування деревообробного інструменту
          </span>
        </div>
        <div>
          <img src={require('../images/header/nogi.jpg')} alt="" />
          <span className="w3-padding-large w3-text-white w3-xlarge w3-animate-top">
            <a href="/products/nogi/#fuguvalni" className="w3-hover-text-blue w3-xxlarge"><strong>Ножі</strong></a>
            <br />
            <hr />
            <strong>ТОВ «Ленів»</strong> - Виготовлення, продаж та обслуговування деревообробного інструменту
          </span>
        </div>
        <div>
          <img src={require('../images/header/frezy.jpg')} alt="" />
          <span className="w3-padding-large w3-text-white w3-xlarge w3-animate-top">
            <a href="/products/frezy/#pogonag" className="w3-hover-text-blue w3-xxlarge"><strong>Фрези</strong></a>
            <br />
            <hr />
            <strong>ТОВ «Ленів»</strong> - Виготовлення, продаж та обслуговування деревообробного інструменту
          </span>
        </div>
        <div>
          <img src={require('../images/header/service.jpg')} alt="" />
          <span className="w3-padding-large w3-text-white w3-xlarge w3-animate-top">
            <a href="/#service" className="w3-hover-text-blue w3-xxlarge"><strong>Сервіс</strong></a>
            <br />
            <hr />
            <strong>ТОВ «Ленів»</strong> - Виготовлення, продаж та обслуговування деревообробного інструменту
          </span>
        </div>
      </Slider>
      </header>
    );
  }
}

export default SimpleSlider;
