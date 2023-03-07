import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
	colors: {
		primary: 'rgb(119, 165, 255)', // 강조 텍스트 및 링크 색상, 특정 텍스트를 강조하거나 링크를 표시하고자 할 때
		secondary: 'rgb(0, 14, 42)', // 배경 색상
		accent: 'rgb(199, 153, 221)', // 섹션을 나누는 라인이나 강조 효과
		dark: 'rgb(70, 49, 112)', // 메인 콘텐츠의 배경 색상이나 버튼의 배경 색상
		light: 'rgb(232, 203, 246)', // 이미지를 감싸는 박스나 정보를 나타내는 블록, 페이지 내에서 보조적인 배경 색상
		white: 'rgb(255, 255, 255)',
		tertiary: 'rgb(152, 107, 178)', // 아이콘의 색상
		quaternary: 'rgb(146, 130, 191)', // 보조 텍스트나 메뉴 아이템의 배경 색상, 페이지 내에서 작은 텍스트나 부가적인 정보
		quinary: 'rgb(0,0,0)',
	},
	typography: {
		bodyFont: "'Pretendard', sans-serif",
		headingFont: "'Open Sans', sans-serif",
		h1: {
			fontSize: '4rem',
			lineHeight: '4.8rem',
			fontWeight: 'bold',
			letterSpacing: '-0.1rem',
		},
		h2: {
			fontSize: '3.2rem',
			lineHeight: '3.8rem',
			fontWeight: 'bold',
			letterSpacing: '-0.08rem',
		},
		h3: {
			fontSize: '2.4rem',
			lineHeight: '3rem',
			fontWeight: 'bold',
			letterSpacing: '-0.06rem',
		},
		h4: {
			fontSize: '1.8rem',
			lineHeight: '2.6rem',
			fontWeight: 'bold',
			letterSpacing: '-0.04rem',
		},
		h5: {
			fontSize: '1.6rem',
			lineHeight: '2.4rem',
			fontWeight: 'bold',
			letterSpacing: '-0.02rem',
		},
		h6: {
			fontSize: '1.4rem',
			lineHeight: '2.2rem',
			fontWeight: 'bold',
			letterSpacing: '0',
		},
		body: {
			fontSize: '1.6rem',
			lineHeight: '2.4rem',
			fontWeight: 'normal',
			letterSpacing: '0',
		},
	},
	button: {
		default: {
			color: '#f7f7f7',
			backgroundColor: 'rgb(70, 49, 112)',
			borderColor: 'transparent',
			padding: '0.6rem 1.2rem',
			borderRadius: '1.2rem',
			fontSize: '1.6rem',
			lineHeight: '2.4rem',
		},
		active: {
			color: '#f7f7f7',
			backgroundColor: 'rgb(119, 165, 255)',
			borderColor: 'transparent',
			padding: '0.6rem 1.2rem',
			borderRadius: '1.2rem',
			fontSize: '1.6rem',
			lineHeight: '2.4rem',
		},
		border: {
			color: 'rgb(119, 165, 255)',
			backgroundColor: 'transparent',
			borderColor: 'rgb(0, 0, 0)',
			padding: '0.6rem 1.2rem',
			borderRadius: '1.2rem',
			fontSize: '1.6rem',
			lineHeight: '2.4rem',
		},
	},
	grid: {
		containerWidth: '114rem',
		maxWidth: '1920px',
		gutterWidth: '3rem',
		outerMargin: '2rem',
		colCount: 12,
		breakpoints: {
			xs: '0',
			sm: '48rem',
			md: '64rem',
			lg: '75rem',
			xl: '90rem',
		},
	},
};
