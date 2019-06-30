import React from 'react';

function Products() {
  return (
    <div className="App">
    <div className="w3-content w3-container w3-padding-64" id="products">
    <h3 className="w3-center">ПРОДУКЦІЯ</h3>
      <div className="w3-container">
        <h5><button className="w3-btn w3-block w3-wide w3-card-4">Пили Стрічкові</button></h5>
        <h5><button className="w3-btn w3-block w3-wide w3-card-4">Пили дискові</button></h5>
        <h5><button className="w3-btn w3-block w3-wide w3-card-4">Ножі</button></h5>
        <h5><button className="w3-btn w3-block w3-wide w3-card-4">Фрези</button></h5>
      </div>
      <div className="w3-container">
        <h6><button className="w3-btn w3-block w3-wide w3-card-4 w3-half">Супутні Товари</button></h6>
        <h6><button className="w3-btn w3-block w3-wide w3-card-4 w3-half">Каталоги Партнерів</button></h6>
      </div>
    </div>
    </div>
  );
}

export default Products;
