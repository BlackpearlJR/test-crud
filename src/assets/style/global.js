import { injectGlobal } from 'styled-components';
import { font, colors, bg } from './variables';

import KanitLightTtf from '../fonts/Kanit/kanit-light/kanit-light.ttf';
import KanitLightEot from '../fonts/Kanit/kanit-light/kanit-light.eot';
import KanitLightSvg from '../fonts/Kanit/kanit-light/kanit-light.svg';

import KanitRegularTtf from '../fonts/Kanit/kanit-regular/kanit-regular.ttf';
import KanitRegularEot from '../fonts/Kanit/kanit-regular/kanit-regular.eot';
import KanitRegularSvg from '../fonts/Kanit/kanit-regular/kanit-regular.svg';

import KanitMediumTtf from '../fonts/Kanit/kanit-medium/kanit-medium.ttf';
import KanitMediumEot from '../fonts/Kanit/kanit-medium/kanit-medium.eot';
import KanitMediumSvg from '../fonts/Kanit/kanit-medium/kanit-medium.svg';

import robotoRegularTtf from '../fonts/roboto/roboto-regular/roboto-regular.ttf';
import robotoRegularEot from '../fonts/roboto/roboto-regular/roboto-regular.eot';
import robotoRegularSvg from '../fonts/roboto/roboto-regular/roboto-regular.svg';

import iconTtf from '../fonts/icons/font_icons8.ttf';
import iconEot from '../fonts/icons/font_icons8.eot';
import iconSvg from '../fonts/icons/font_icons8.svg';
import iconWoff from '../fonts/icons/font_icons8.woff';
import iconWoff2 from '../fonts/icons/font_icons8.woff2';

const roboto = {
  regular: {
    weight: 'normal',
    file_name: 'roboto-regular',
  },
};

// const defaultFontFam = '"Helvetica Neue", Helvetica, Arial, sans-serif';

injectGlobal`

  @font-face {
    font-family: 'Roboto';
    src: url('${robotoRegularEot}');
    src: url('${robotoRegularEot}?#iefix') format('embedded-opentype'),
    url('${robotoRegularTtf}') format('truetype'),
    url('${robotoRegularSvg}#${roboto.regular.file_name}') format('svg');
    font-weight: ${roboto.regular.weight};
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Kanit';
    src: url('${KanitLightEot}');
    src: url('${KanitLightEot}?#iefix') format('embedded-opentype'),
    url('${KanitLightTtf}') format('truetype'),
    url('${KanitLightSvg}#kanit-light') format('svg');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Kanit';
    src: url('${KanitRegularEot}');
    src: url('${KanitRegularEot}?#iefix') format('embedded-opentype'),
    url('${KanitRegularTtf}') format('truetype'),
    url('${KanitRegularSvg}#kanit-regular') format('svg');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Kanit';
    src: url('${KanitMediumEot}');
    src: url('${KanitMediumEot}?#iefix') format('embedded-opentype'),
    url('${KanitMediumTtf}') format('truetype'),
    url('${KanitMediumSvg}#kanit-medium') format('svg');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'font_icons8';
    src: url('${iconEot}');
    src: url('${iconEot}?#iefix') format('embedded-opentype'),
        url('${iconWoff2}') format('woff2'),
        url('${iconWoff}') format('woff'),
        url('${iconTtf}') format('truetype'),
        url('${iconSvg}#font_icons8') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @media screen and (-webkit-min-device-pixel-ratio:0) {
    @font-face {
      font-family: 'font_icons8';
      src: url('../fonts/font_icons8.svg#font_icons8') format('svg');
    }
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body{
    font-family: ${font.family};
    font-size: ${font.size.default};
    font-weight: ${font.weight.normal};
    line-height: 1.43;
    margin: 0px;
    background-color: ${bg};
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden],
  template {
    display: none;
  }

  a{
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
    &:active,
    &:hover {
      outline: 0;
    }
  }

  abbr[title] {
    border-bottom: 1px dotted;
  }

  b,
  strong {
    font-weight: ${font.weight.bold};
  }

  dfn {
    font-style: italic;
  }

  small {
    font-size: 80%;
  }

  img {
    border: 0;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    height: 0;
  }

  pre {
    overflow: auto;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  button {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  input {
    line-height: normal;
    outline: none;
  }

  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  input[type="search"] {
    -webkit-appearance: textfield;
    box-sizing: content-box;
  }

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    border: 0;
    padding: 0;
  }

  textarea {
    overflow: auto;
  }

  optgroup {
    font-weight: ${font.weight.bold};
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  td,
  th {
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: ${font.weight.bold};
  }

  .toast-top-left {
    top: 80px !important;
    left: 12px;
  }
  .toast-top-right {
    top: 80px !important;
    right: 12px;
  }

  .toast {
    background-color: #030303;
  }
  .toast-success {
    background-color: ${colors.success.default} !important;
  }
  .toast-error {
    background-color: ${colors.danger.default} !important;
  }
  .toast-info {
    background-color: ${colors.info.default} !important;
  }
  .toast-warning {
    background-color: ${colors.warning.default} !important;
  }

  #toast-container > div{
    box-shadow: none !important;
  }
`;

