import React from "react";
import { format } from "date-fns";

import logoUrl from "./img/bundle-stats.png";
import "./app.css";

export const App = () => (
	<div className="container">
		<header className="header">
			<h1 className="header__title">
				<img className="header__logo" src={logoUrl} alt="BundleStats" />
			</h1>
			<p className="header__description">
				BundleStats example for custom webpack config
			</p>
      <p className="header_date">
        {format(new Date(), 'MM/dd/yyyy')}
      </p>
		</header>
	</div>
);
