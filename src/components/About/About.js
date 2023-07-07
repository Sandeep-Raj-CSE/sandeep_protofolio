import React from "react";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import "./About.css";
// import aboutAnime from "../../assets/about_anime.gif";

const About = () => {
	return (
		<div className='section-container'>
			<Header
				heading=' About Me! '
				details=' Student | I am passionate about problem solving and enjoy creating 
				frontend websites. I take great pleasure in tackling coding challenges and 
				finding innovative solutions.'
			/>

			<div className='about-main'>
				<div className='about-main-left'>
					{/* sub-section 1 */}
					<p className='about-sub-head'>
						My name is Sandeep Raj, and I am a passionate towards Coding and
						developer. I have always been fascinated by the
						intersection of technology and design, and my interest
						in Problem solving  and user-friendly
						websites creation.
					</p>
					<p className='about-sub-head'>
						Currently, I am pursuing a B.Tech in Computer
						Science (CS) to gain a deeper understanding of
						computer science concepts, programming languages, and
						software development.
					</p>
					<p className='about-sub-head'>
					I have successfully solved over 1000 coding questions 
					on various platforms, predominantly using C++. 
					Additionally, I have completed 5-6 frontend projects 
					and 2-3 full stack projects.
	
					</p>
				</div>

				{/* <div className='about-main-right'>
					<img
						src={aboutAnime}
						alt='aboutAnimeGif'
						className='about-anime'
					/>
				</div> */}
			</div>

			<FooterLink
				phrase=' check out my '
				link='projects!'
				toAdress='/projects'
			/>
		</div>
	);
};
export default About;
