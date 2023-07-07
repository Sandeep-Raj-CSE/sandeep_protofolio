import React from "react";
import "./Contact.css";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import { VscGithubInverted } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { BiSend } from "react-icons/bi";

import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
import {SiCodeforces} from 'react-icons/si'
import {SiCodechef} from 'react-icons/si'


const Contact = () => {
	return (
		<div className='section-container'>
			<Header
				heading='Get in touch!'
				details='Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.'
			/>

			{/* contact form container */}
			<div className='contact-form-container'>
				<form
					className='contact-form'
					action='https://formspree.io/f/mbjvrznz'
					method='POST'>
					<input
						type='email'
						placeholder='Your Email Id'
						name='email'
						className='input-box email-input'
						required
					/>
					{/* Email body */}
					<textarea
						type='text'
						placeholder='Your Message'
						name='message'
						className='input-box body-input'></textarea>
					{/* submit button */}
					<button type='submit' className='contact-btn input-box'>
						Send Email
						<span className='send-btn'>
							<BiSend />
						</span>
					</button>
				</form>
			</div>
			{/* social icon container */}
			<div className='social-icon-container'>
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

			<FooterLink
				phrase=' Read more '
				link='about me!'
				toAdress='/about'
			/>
		</div>
	);
};
export default Contact;
