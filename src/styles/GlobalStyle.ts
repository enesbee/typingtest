import { createGlobalStyle } from 'styled-components';
/***
 The new CSS reset - version 1.8.4 (last updated 14.2.2023)
 GitHub page: https://github.com/elad2412/the-new-css-reset
 ***/
const GlobalStyle = createGlobalStyle`
  :where(:not(html,iframe,canvas,img,svg,video,audio):not(svg *,symbol *)){all:unset;display:revert}*,::after,::before{box-sizing:border-box}a,button{cursor:revert}menu,ol,ul{list-style:none}img{max-inline-size:100%;max-block-size:100%}table{border-collapse:collapse}input,textarea{-webkit-user-select:auto}textarea{white-space:revert}meter{-webkit-appearance:revert;appearance:revert}:where(pre){all:revert}::placeholder{color:unset}::marker{content:initial}:where([hidden]){display:none}:where([contenteditable]:not([contenteditable=false])){-moz-user-modify:read-write;-webkit-user-modify:read-write;overflow-wrap:break-word;-webkit-line-break:after-white-space;-webkit-user-select:auto}:where([draggable=true]){-webkit-user-drag:element}:where(dialog:modal){all:revert}body{font-family:${(
		props,
	) => props.theme.typography.bodyFont};font-size:${(props) =>
	props.theme.typography.body.fontSize};line-height:${(props) =>
	props.theme.typography.body.lineHeight};font-weight:${(props) =>
	props.theme.typography.body.fontWeight};letter-spacing:${(props) =>
	props.theme.typography.body.letterSpacing};background-color:${(props) =>
	props.theme.colors.secondary};color:${(props) =>
	props.theme.colors.quaternary};}
  h1, h2, h3,h4, h5, h6 {font-family:${(props) =>
		props.theme.typography.headingFont};}
    h1 {font-size:${(props) =>
			props.theme.typography.h1.fontSize};line-height:${(props) =>
	props.theme.typography.h1.lineHeight};font-weight:${(props) =>
	props.theme.typography.h1.fontWeight};letter-spacing:${(props) =>
	props.theme.typography.h1.letterSpacing};}
    h2 {font-size:${(props) =>
			props.theme.typography.h2.fontSize};line-height:${(props) =>
	props.theme.typography.h2.lineHeight};font-weight:${(props) =>
	props.theme.typography.h2.fontWeight};letter-spacing:${(props) =>
	props.theme.typography.h2.letterSpacing};}
    h3 {font-size:${(props) =>
			props.theme.typography.h3.fontSize};line-height:${(props) =>
	props.theme.typography.h3.lineHeight};font-weight:${(props) =>
	props.theme.typography.h3.fontWeight};letter-spacing:${(props) =>
	props.theme.typography.h3.letterSpacing};}
    h4 {font-size:${(props) =>
			props.theme.typography.h4.fontSize};line-height:${(props) =>
	props.theme.typography.h4.lineHeight};font-weight:${(props) =>
	props.theme.typography.h4.fontWeight};letter-spacing:${(props) =>
	props.theme.typography.h4.letterSpacing};}
    h5 {font-size:${(props) =>
			props.theme.typography.h5.fontSize};line-height:${(props) =>
	props.theme.typography.h5.lineHeight};font-weight:${(props) =>
	props.theme.typography.h5.fontWeight};letter-spacing:${(props) =>
	props.theme.typography.h5.letterSpacing};}
    h6 {font-size:${(props) =>
			props.theme.typography.h6.fontSize};line-height:${(props) =>
	props.theme.typography.h6.lineHeight};font-weight:${(props) =>
	props.theme.typography.h6.fontWeight};letter-spacing:${(props) =>
	props.theme.typography.h6.letterSpacing};}
`;
export default GlobalStyle;
