import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			tertiary: string;
			quaternary: string;
			quinary: string;
			accent: string;
			dark: string;
			light: string;
			white: string;
		};
		typography: {
			bodyFont: string;
			headingFont: string;
			h1: {
				fontSize: string;
				lineHeight: string;
				fontWeight: string;
				letterSpacing: string;
			};
			h2: {
				fontSize: string;
				lineHeight: string;
				fontWeight: string;
				letterSpacing: string;
			};
			h3: {
				fontSize: string;
				lineHeight: string;
				fontWeight: string;
				letterSpacing: string;
			};
			h4: {
				fontSize: string;
				lineHeight: string;
				fontWeight: string;
				letterSpacing: string;
			};
			h5: {
				fontSize: string;
				lineHeight: string;
				fontWeight: string;
				letterSpacing: string;
			};
			h6: {
				fontSize: string;
				lineHeight: string;
				fontWeight: string;
				letterSpacing: string;
			};
			body: {
				fontSize: string;
				lineHeight: string;
				fontWeight: string;
				letterSpacing: string;
			};
		};
		button: {
			default: {
				color: string;
				backgroundColor: string;
				borderColor: string;
				padding: string;
				borderRadius: string;
				fontSize: string;
				lineHeight: string;
			};
			active: {
				color: string;
				backgroundColor: string;
				borderColor: string;
				padding: string;
				borderRadius: string;
				fontSize: string;
				lineHeight: string;
			};
			border: {
				color: string;
				backgroundColor: string;
				borderColor: string;
				padding: string;
				borderRadius: string;
				fontSize: string;
				lineHeight: string;
			};
		};
		grid: {
			breakpoints: {
				xs: string;
				sm: string;
				md: string;
				lg: string;
				xl: string;
			};
			containerWidth: string;
			maxWidth: string;
			gutterWidth: string;
			outerMargin: string;
			colCount: number;
		};
	}
}
