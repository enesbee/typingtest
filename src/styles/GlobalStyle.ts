import {createGlobalStyle} from 'styled-components';
/***
 The new CSS reset - version 1.8.4 (last updated 14.2.2023)
 GitHub page: https://github.com/elad2412/the-new-css-reset
 ***/
const GlobalStyle = createGlobalStyle`
  :where(:not(html,iframe,canvas,img,svg,video,audio):not(svg *,symbol *)){all:unset;display:revert}*,::after,::before{box-sizing:border-box}a,button{cursor:revert}menu,ol,ul{list-style:none}img{max-inline-size:100%;max-block-size:100%}table{border-collapse:collapse}input,textarea{-webkit-user-select:auto}textarea{white-space:revert}meter{-webkit-appearance:revert;appearance:revert}:where(pre){all:revert}::placeholder{color:unset}::marker{content:initial}:where([hidden]){display:none}:where([contenteditable]:not([contenteditable=false])){-moz-user-modify:read-write;-webkit-user-modify:read-write;overflow-wrap:break-word;-webkit-line-break:after-white-space;-webkit-user-select:auto}:where([draggable=true]){-webkit-user-drag:element}:where(dialog:modal){all:revert}
`;
export default GlobalStyle;