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

const appStyle = {
	height: '100%',
	backgroundColor: '#333333',
	margin: 0
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

const headerStyle = {
	margin: 0,
	marginLeft: 100,
	color: 'white',
	position: 'relative' as 'relative',
	paddingTop: 50
}

function Photos() {

	return (
		<ThemeProvider theme={theme}>
			<div className="Photos" style={appStyle}>
				<div style={backgroundStyle}>
				</div>
				<h1 style={headerStyle}>Photos</h1>
			</div>
		</ThemeProvider>
	);
}

export default Photos;
