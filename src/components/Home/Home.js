import React from "react";
import { } from "react-router-dom";
import "./Home.css";
// import homeAnime from "../../assets/home_anime.gif";
import Resume from "../../assets/pdf/Sandeep-Raj-Resume.pdf";
import { CgSoftwareDownload } from "react-icons/cg";
import { BsEye } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
import {SiCodeforces} from 'react-icons/si'
import {SiCodechef} from 'react-icons/si'

const Home = () => {
	return (
		<div>
			<div className='home-container'>
				<div className='header-text'>
					<h1>Welcome to my portfolio!</h1>
					<p>
						This is{" "}
						<span className='frontName'>
							<b>
								<i>Sandeep , </i>
							</b>
						</span>
						Coder , frontend developer!
					</p>
				</div>
				<div>
				<h5>  &#9889;&#128150;</h5>
				</div>
				<div className='right-footer'>
					<div className='social-media'>
						{/* <h2>SOCIAL MEDIA</h2> */}
						<ul>
							<li>
								<a
									href='https://github.com/Sandeep-Raj-CSE'
									target='_blank'
									rel='noreferrer'>
									<span className='github social_btns'>
										<VscGithubInverted />
									</span>
								</a>
							</li>
							<li>
								<a
									href='https://leetcode.com/sandy_7970/'
									target='_blank'
									rel='noreferrer'>
									<span className='github social_btns'>
										<SiLeetcode/>
									</span>
								</a>
							</li>
							<li>
								<a
									href='https://auth.geeksforgeeks.org/user/sandeep_raj_vit/practice'
									target='_blank'
									rel='noreferrer'>
									<span className='github social_btns'>
										<SiGeeksforgeeks />
									</span>
								</a>
							</li>
							<li>
								<a
									href='https://codeforces.com/profile/sandeeprajvit'
									target='_blank'
									rel='noreferrer'>
									<span className='github social_btns'>
										<SiCodeforces />
									</span>
								</a>
							</li>
							<li>
								<a
									href='https://www.codechef.com/users/sandy_7970'
									target='_blank'
									rel='noreferrer'>
									<span className='github social_btns'>
										<SiCodechef />
									</span>
								</a>
							</li>
							<li>
								<a
									href='https://www.linkedin.com/in/sandeep-raj-265b65243/'
									target='_blank'
									rel='noreferrer'>
									<span className='linkedin social_btns'>
										<SlSocialLinkedin />
									</span>
								</a>
							</li>
							
							
						</ul>
					</div>

					<div className='head-btns'>
					<div className='resume btn  '>
						<p className='right btn-text '>RESUME</p>
						<>
							<a
								href={Resume}
								download='Sandeep-Resume.pdf'
								className='resume-links download-btn'>
								<CgSoftwareDownload />
							</a>
							<a
								target='_blank'
								rel='noreferrer'
								href='https://drive.google.com/file/d/1rDI_oDKnI6mvaNtJejIN0TW1uj5ieocj/view?usp=sharing'
								className='resume-links download-btn'>
								<BsEye />
							</a>
							{/* <a
								target='_blank'
								href='../../assets/pdf/Aditya-Kumar-Resume.pdf'
								rel='noreferrer'
								className='resume-links download-btn'>
								<BsEye />
							</a> */}














						</>
					</div>
					
				</div>
				</div>
				{/* <div className='splash-img'>
					<img
						src={homeAnime}
						alt='Animation'
						className='home-anime'
					/>
				</div> */}
			</div>
		</div>
	);
};
export default Home;
