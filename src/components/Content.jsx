import React from 'react';
import About from './About';
import Partners from './Partners';
import Service from './Service';
import Contacts from './Contacts';
import GoogleMaps from './GoogleMaps';
import Parallax1 from './Parallax1';
import Parallax2 from './Parallax2';
import Parallax3 from './Parallax3';
import Parallax4 from './Parallax4';

function Content() {
  return (
      <content>
        <About />
        <Partners />
        <Parallax1 />
        <Service />
        <Parallax2 />
        <Contacts />
        <Parallax3 />
        <GoogleMaps />
        <Parallax4 />
      </content>
  );
}

export default Content;
