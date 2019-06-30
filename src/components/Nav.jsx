import React from 'react';
import myNavbar from '../js/myNavbar.js';

function Nav() {
  return (
    <div className="App">
    <div className="w3-top w3-text-sand">
    	<div className="w3-bar" id="myNavbar">
    		<a className="w3-bar-item w3-button w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu"><i className="fa fa-bars w3-text-blue"></i></a>
    		<a href="/#home" className="w3-bar-item w3-button w3-hide-small w3-hide-medium"><i className="fa fa-home"></i><strong> ГОЛОВНА</strong></a>
    		<a href="/#about" className="w3-bar-item w3-button w3-hide-small w3-hide-medium"><i className="fa fa-user"></i><strong> ПРО КОМПАНІЮ</strong></a>
    		<div className="w3-dropdown-hover w3-hide-small w3-hide-medium">
    			<button className="w3-button w3-hide-small w3-hide-medium"><i className="fa fa-cogs"></i><strong> ПРОДУКЦІЯ</strong> <i className="fa fa-caret-down"></i></button>
    			<div className="w3-dropdown-content w3-bar-block w3-card-4">
    				<a href="/products/band_saw_blades/" className="w3-bar-item w3-button w3-hide-small w3-hide-medium">Пили Стрічкові</a>
    				<a href="/products/circular_saw_blades/" className="w3-bar-item w3-button w3-hide-small w3-hide-medium">Пили Дискові</a>
    				<a href="/products/knives/" className="w3-bar-item w3-button w3-hide-small w3-hide-medium">Ножі</a>
    				<a href="/products/cutter_heads/" className="w3-bar-item w3-button w3-hide-small w3-hide-medium">Фрези</a>
    				<a href="/products/accessories/" className="w3-bar-item w3-button w3-hide-small w3-hide-medium">Супутні Товари</a>
    				<a href="/products/partners/" className="w3-bar-item w3-button w3-hide-small w3-hide-medium">Партнери</a>
    			</div>
    		</div>
    		<a href="/#service" className="w3-bar-item w3-button w3-hide-small w3-hide-medium"><i className="fa fa-users-cog"></i><strong> СЕРВІС</strong></a>
    		<a href="/#contacts" className="w3-bar-item w3-button w3-hide-small w3-hide-medium"><i className="fa fa-envelope"></i><strong> КОНТАКТИ</strong></a>
    		<a href="/ru" className="w3-bar-item w3-button w3-right w3-hover-blue w3-hide-small w3-hide-medium">RU</a>
    		<a href="/en" className="w3-bar-item w3-button w3-right w3-hover-blue w3-hide-small w3-hide-medium">EN</a>
    		<a href="/" className="w3-bar-item w3-button w3-right w3-text-blue w3-hover-blue w3-hide-small w3-hide-medium">UA</a>
    	</div>

    	<div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large">
    		<a href="/#about" className="w3-bar-item w3-button" onclick="toggleFunction()">ПРО КОМПАНІЮ</a>
    		<div className="w3-dropdown-hover">
    			<button className="w3-bar-item w3-button">ПРОДУКЦІЯ <i className="fa fa-caret-down"></i></button>
    			<div className="w3-dropdown-content w3-bar-block">
    				<a href="/products/band_saw_blades/" className="w3-bar-item w3-button">Пили Стрічкові</a>
    				<a href="/products/circular_saw_blades/" className="w3-bar-item w3-button">Пили Дискові</a>
    				<a href="/products/knives/" className="w3-bar-item w3-button">Ножі</a>
    				<a href="/products/cutter_heads/" className="w3-bar-item w3-button">Фрези</a>
    				<a href="/products/accessories/" className="w3-bar-item w3-button">Супутні Товари</a>
    				<a href="/products/partners/" className="w3-bar-item w3-button">Партнери</a>
    			</div>
    		</div>
    		<a href="/#service" className="w3-bar-item w3-button" onclick="toggleFunction()">СЕРВІС</a>
    		<a href="/#contacts" className="w3-bar-item w3-button" onclick="toggleFunction()">КОНТАКТИ</a>
    	</div>
    </div>
    <div className="w3-display-bottomright w3-margin">
    	<a href="tel:+380963539657" className="w3-bar-item w3-text-blue w3-hover-blue w3-hide-large w3-xxlarge"><i className="fas fa-phone"></i></a>
    </div>
    </div>
  );
}

export default Nav;
