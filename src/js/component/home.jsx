import React from "react";

import { NavBar } from "./navBar";
import { Wellcome } from "./wellcome";
import { Card } from "./card";
import { Footer } from "./footer";

//create your first component
const Home = () => {
	return (
		<div>			
			<NavBar />		
			<Wellcome />		
			<Card />
			<Footer />
		</div>
	)
};

export default Home;
