import backgroundImage from './images/atlanta.jpg';
import profileImage from './images/profile.jpg';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faBriefcase, faFile, faCamera, faCode } from '@fortawesome/free-solid-svg-icons';
import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Theme {
		status: {
			danger: React.CSSProperties['color'];
		};
	}

	interface Palette {
		neutral: Palette['primary'];
	}
	interface PaletteOptions {
		neutral: PaletteOptions['primary'];
	}

	interface PaletteColor {
		darker?: string;
	}
	interface SimplePaletteColorOptions {
		darker?: string;
	}
	interface ThemeOptions {
		status: {
			danger: React.CSSProperties['color'];
		};
	}
}

const theme = createTheme({
	status: {
		danger: '#e53e3e',
	},
	palette: {
		primary: {
			main: '#AC3B61',
			darker: '#EDF5E1',
		},
		neutral: {
			main: '#64748B',
			contrastText: '#fff',
		},
	},
});

const appStyle = {
	height: '100%',
  width: '100%',
  paddingRight: '50px',
	backgroundColor: '#333333',
  overflowY: 'hidden' as 'hidden'
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
  marginRight: 500,
	marginTop: 100,
	paddingBottom: 30
}

const aboutMeTextStyle = {
	color: 'white',
	padding: 30,
	paddingBottom: 0
}

const buttonContainerStyle = {
	position: 'absolute' as 'absolute',
	top: 370,
	left: 100
}

const buttonStyle = {
	marginBottom: 10,
	width: 250
}

const iconStyle = {
	marginRight: 10
}

function Home() {

	return (
		<ThemeProvider theme={theme}>
			<div className="Home" style={appStyle}>
				<div style={backgroundStyle}>
				</div>

				<h1 style={headerStyle}>Jared Ramsey</h1>
				<img style={profilePicStyle} src={profileImage} alt="Profile" />
				<div style={buttonContainerStyle}>
					<div><Button style={buttonStyle} variant="contained" target="_blank" href="https://github.com/jram930"><FontAwesomeIcon style={iconStyle} icon={faCodeBranch} />Github</Button></div>
					<div><Button style={buttonStyle} variant="contained" target="_blank" href="https://www.linkedin.com/in/jaredramsey/"><FontAwesomeIcon style={iconStyle} icon={faBriefcase} />LinkedIn</Button></div>
					<div><Button style={buttonStyle} variant="contained" target="_blank" href="Resume.pdf"><FontAwesomeIcon style={iconStyle} icon={faFile} />Resume</Button></div>
					<div><Button style={buttonStyle} variant="contained" target="_self" href="/photos"><FontAwesomeIcon style={iconStyle} icon={faCamera} />Photos</Button></div>
					{/* <div><Button style={buttonStyle} variant="contained" target="_blank" href=""><FontAwesomeIcon style={iconStyle} icon={faCode} />Playground</Button></div> */}
				</div>

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
		</ThemeProvider>
	);
}

export default Home;
