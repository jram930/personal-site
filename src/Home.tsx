import backgroundImage from './images/atlanta.jpg';
import profileImage from './images/profile.jpg';

const appStyle = {
	height: '100%',
	backgroundColor: '#333333',
}

const backgroundStyle = {
	backgroundImage: `url(${backgroundImage})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	height: '100%',
	width: '100%',
	position: 'absolute' as 'absolute',
	top: 0,
	left: 0,
}

const profilePicStyle = {
	opacity: '100%',
	position: 'absolute' as 'absolute',
	top: 100,
	left: 100,
	width: 250,
	height: 250,
}

const headerStyle = {
	margin: 0,
	marginLeft: 100,
	marginTop: 50,
	color: 'white',
	position: 'relative' as 'relative'
}

const aboutMeStyle = {
	width: '60%',
	minHeight: '20%',
	position: 'relative' as 'relative',
	backgroundColor: '#222222',
	marginLeft: 500,
	marginTop: 100,
	paddingBottom: 30
}

const aboutMeTextStyle = {
	color: 'white',
	padding: 30,
	paddingBottom: 0
}

function Home() {
	return (
		<div className="Home" style={appStyle}>
			<div style={backgroundStyle}>
			</div>

			<h1 style={headerStyle}>Jared Ramsey</h1>
			<img style={profilePicStyle} src={profileImage} alt="Profile"/>

			<div style={aboutMeStyle}>
				<h3 style={aboutMeTextStyle}>About Me</h3>
				<p style={aboutMeTextStyle}>I'm Jared Ramsey. I live in Atlanta, GA.</p>
				<p style={aboutMeTextStyle}>I am a Software Engineer, Board Game Enthusiast, Dungeon Master, Musician, Auburn Grad, Braves Fan, Husband, and Father.</p>
				<p style={aboutMeTextStyle}>I have been a software engineer for around 12 years. I have experience with C, C++, Java, C#, Javascript, Typescript, and Python.
				My most recent experience involves web applications built on node.js and react.</p>
				<p style={aboutMeTextStyle}>I hold a Masters of Science in Computer Science and a Bachelors of Science in Computer Science from Auburn University.</p>
				<p style={aboutMeTextStyle}>Most of my spare time is spent raising my two boys and spending quality time with my wife, but I also have been known to play a board game or two and watch the occasional game of baseball.</p>
			</div>

		</div>
	);
}

export default Home;
