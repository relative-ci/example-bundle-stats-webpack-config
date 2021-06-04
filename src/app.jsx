import React from "react";
import { addDays, differenceInDays, format, formatDistanceToNow } from "date-fns";

import logoUrl from "./img/bundle-stats.png";
import "./app.css";

const CREATED = new Date(2019, 7, 1);

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
        Today: {format(new Date(), 'MM/dd/yyyy')}<br />
        Created: {formatDistanceToNow(CREATED)}<br />
        Days since created: {differenceInDays(new Date(), CREATED)}< br/>
        In 7 days: {format(addDays(new Date(), 7), 'MM/dd/yyyy')}
      </p>
		</header>
	</div>
);
