import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Parallax1 = () => (
    <div>
        <Parallax
            blur={0}
            bgImage={require('../images/home/par1.jpg')}
            bgImageAlt=""
            strength={400}
        >
            <div style={{ height: '500px' }} />
        </Parallax>
    </div>
);
export default Parallax1;
