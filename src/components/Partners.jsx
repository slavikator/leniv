import React from 'react';

function Partners() {
  return (
    <div className="w3-row w3-content" id="partners">
			<h5 className="w3-center">НАШІ ПАРТНЕРИ</h5>
			<div className="w3-row w3-center">
				<div className="w3-quarter w3-section">
					<a href="/products/partners/#ake"><img className="partners" alt="" src={require("../images/partners/ake.jpg")}></img></a>
				</div>
				<div className="w3-quarter w3-section">
					<a href="/products/partners/#kvarnstrands"><img className="partners" alt="" src={require("../images/partners/kvarnstrands.jpg")}></img></a>
				</div>
				<div className="w3-quarter w3-section">
					<a href="/products/partners/#tigra"><img className="partners" alt="" src={require("../images/partners/tigra.jpg")}></img></a>
				</div>
				<div className="w3-quarter w3-section">
					<a href="/products/partners/#uddeholm"><img className="partners" alt="" src={require("../images/partners/uddeholm.jpg")}></img></a>
				</div>
			</div>
		</div>
  );
}

export default Partners;
