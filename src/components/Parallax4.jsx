import React from 'react';
import { Parallax } from 'react-parallax';

const Parallax4 = () => (
    <div>
        <Parallax
            blur={0}
            bgImage={require('../images/home/par4.jpg')}
            bgImageAlt=""
            strength={400}
        >
            <div style={{ height: '500px' }} />
        </Parallax>
    </div>
);
export default Parallax4;
