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
			<div className="container-fluid d-flex justify-content-center ps-4 pe-4">
				<Card image="https://picsum.photos/500/325?random=1" title="Great view" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." buttonLabel="Find out more" />
				<Card image="https://picsum.photos/500/325?random=2" title="Grand vista" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." buttonLabel="Find out more" />
				<Card image="https://picsum.photos/500/325?random=3" title="Images & more" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." buttonLabel="Find out more" />
				<Card image="https://picsum.photos/500/325?random=4" title="Pics" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." buttonLabel="Find out more" />
			</div>
			<Footer />
		</div>
	)
};

export default Home;
