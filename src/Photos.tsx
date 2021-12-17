import backgroundImage from './images/lights.jpg';
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

const headerStyle = {
	margin: 0,
	marginLeft: 100,
	color: 'white',
	position: 'relative' as 'relative',
	paddingTop: 50
}

const imgContainer = {
  position: 'absolute' as 'absolute',
  paddingLeft: '50px',
  paddingRight: '50px',
  width: '100%',
  height: '100%'
}

const imgStyle ={
  width: '700px',
  position: 'relative' as 'relative',
  margin: '50px'
}

function Photos() {

	return (
		<ThemeProvider theme={theme}>
			<div className="Photos">
				<h1 style={headerStyle}>Photos</h1>
        <div style={imgContainer}>
          <img style={imgStyle} src='/jellyfish.jpg' alt='Jellyfish'/>
          <img style={imgStyle} src='/whaleshark.jpg' alt='Whaleshark'/>
          <img style={imgStyle} src='/tiger.jpg' alt='Tiger'/>
          <img style={imgStyle} src='/turtle.jpg' alt='Turtle'/>
          <img style={imgStyle} src='/elephant.jpg' alt='Elephant'/>
          <img style={imgStyle} src='/zooDecor.jpg' alt='Zoo Decorations'/>
        </div>
			</div>
		</ThemeProvider>
	);
}

export default Photos;
