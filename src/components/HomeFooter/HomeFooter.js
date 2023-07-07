import React from "react";
import "./HomeFooter.css";
import { VscGithubInverted } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
import {SiCodeforces} from 'react-icons/si'
import {SiCodechef} from 'react-icons/si'

const HomeFooter = () => {
	return (
		<div className='home-footer'>
			<div className='container'>
				<div className='left-footer'>
					<h1 className='my-name'>SANDEEP RAJ</h1>
					<p className='my-details'>
						A dedicated Problem solver and Front End Developer looking for challenging
						opportunities which could help in enhancing my skills.
					</p>
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
				</div>
			</div>

			<div className='large-4 columns'>
				<p className='madewithlove'>
					Made with <i className='fa fa-heart'></i> in India
				</p>
			</div>
			<p className='copyright'>
				<span className='copyright-section'>
					© {new Date().getFullYear()} - SANDEEP RAJ
				</span>
			</p>
		</div>
	);
};
export default HomeFooter;
