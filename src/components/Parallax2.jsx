import React from 'react';
import { Parallax } from 'react-parallax';

const Parallax2 = () => (
    <div>
        <Parallax
            blur={0}
            bgImage={require('../images/home/par2.jpg')}
            bgImageAlt=""
            strength={400}
        >
            <div style={{ height: '500px' }} />
        </Parallax>
    </div>
);
export default Parallax2;
