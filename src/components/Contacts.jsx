import React from 'react';

function Contacts() {
  return (
    <div className="App">
      <div className="w3-content w3-container w3-padding-64" id="contacts">
        <h3 className="w3-center">КОНТАКТНА ІНФОРМАЦІЯ</h3>
        <div className="w3-row w3-section w3-hide-large">
          <div className="w3-col m8 w3-panel">
            <div className="w3-center">
              <a href="tel:+380342723993"><i className="fa fa-phone fa-fw w3-text-blue w3-xxlarge"></i></a>
              <a href="tel:+380342723994"><i className="fa fa-fax fa-fw w3-text-blue w3-xxlarge"></i></a>
              <a href="tel:+380963539657"><i className="fa fa-mobile-alt fa-fw w3-text-blue w3-xxlarge"></i></a>
              <a href="mailto:leniv_ltd@ukr.net"><i className="fa fa-envelope fa-fw w3-text-blue w3-xxlarge"></i></a>
            </div>
          </div>
          <div className="w3-col m4 w3-container w3-content w3-center">
            <p>
              Україна, Івано-Франківськ, вул. Автоливмашівська, 4
            </p>
          </div>
        </div>
        <div className="w3-row w3-content w3-padding-32 w3-section w3-hide-small w3-hide-medium">
          <div className="w3-col m4 w3-margin-top">
            <img src={require("../images/office.png")} className="w3-image w3-round" />
          </div>
          <div className="w3-col m8 w3-panel">
            <div className="w3-large w3-margin-bottom">
              <p><i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Україна, Івано-Франківськ, вул. Автоливмашівська, 4</p>
              <p><i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Телефон: +38 (0342) 72-39-93</p>
              <p><i className="fa fa-fax fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Факс: +38 (0342) 72-39-94</p>
              <p><i className="fa fa-mobile-alt fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Моб. телефон: +38 (096) 353-96-57</p>
              <p><i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Електронна пошта: <a href="mailto:leniv_ltd@ukr.net">leniv_ltd@ukr.net</a></p>
            </div>
            <div>
              <a className="w3-button w3-blue" href="mailto:leniv_ltd@ukr.net"><i className="fa fa-paper-plane"></i> НАПИСАТИ</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contacts;
