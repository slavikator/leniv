import React from 'react';

function Service() {
  return (
    <div className="w3-content w3-container" id="service">
			<div className="w3-container w3-padding-64">
				<h3 className="w3-center">СЕРВІС</h3>
				<div className="w3-padding w3-panel w3-leftbar w3-margin-top w3-light-grey w3-card-4">
					<p>
						Компанія має спеціалізований сучасний центр для виготовлення та обслуговування деревообробного інструменту. Його унікальність полягає в поєднанні в собі широкого спектру послуг: від виробництва та сервісу інструменту, що використовується при первинній обробці деревини, до інструменту для виготовлення кінцевого продукту.
					</p>
					<p>
						<span className="w3-tag w3-light-grey">З питань сервісу звертайтеся за телефоном: +38 (067) 341-16-04</span>
					</p>
				</div>
			</div>
			<div className="w3-container">
				<div className="w3-row-padding w3-margin-top">
					<div className="w3-half w3-padding-large">
						<div className="w3-display-container w3-card-4 w3-blue" >
							<img src={require("../images/service/zvarka.jpg")} className="service" alt="Виготовлення та обслуговування стрічкових пил " />
							<div className="w3-container w3-center w3-padding">
								<p><strong>Виготовлення та обслуговування стрічкових пил</strong></p>
							</div>
						</div>
					</div>
					<div className="w3-half w3-padding-large">
						<div className="w3-display-container w3-card-4 w3-blue" >
							<img src={require("../images/service/profil.jpg")} className="service" alt="Профілювання стругальних ножів (HSS та HW)" />
							<div className="w3-container w3-center w3-padding">
								<p><strong>Профілювання стругальних ножів (HSS та HW)</strong></p>
							</div>
						</div>
					</div>
				</div>
				<div className="w3-row-padding w3-padding-32">
					<div className="w3-third w3-padding-large">
						<div className="w3-display-container w3-card-4 w3-blue" >
							<img src={require("../images/service/zagostr_sv.jpg")} className="service" alt="Загострення кінцевого інструменту" />
							<div className="w3-container w3-center w3-padding">
								<p><strong>Загострення кінцевого інструменту</strong></p>
							</div>
						</div>
					</div>
					<div className="w3-third w3-padding-large">
						<div className="w3-display-container w3-card-4 w3-blue" >
							<img src={require("../images/service/zagostr_dsc.jpg")} className="service" alt="Загострення і реставрація дискових пил" />
							<div className="w3-container w3-center w3-padding">
								<p><strong>Загострення та реставрація дискових пил</strong></p>
							</div>
						</div>
					</div>
					<div className="w3-third w3-padding-large">
						<div className="w3-display-container w3-card-4 w3-blue" >
							<img src={require("../images/service/zagostr_fr.jpg")} className="service" alt="Загострення і реставрація фрез" />
							<div className="w3-container w3-center w3-padding">
								<p><strong>Загострення та реставрація фрез</strong></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Service;
