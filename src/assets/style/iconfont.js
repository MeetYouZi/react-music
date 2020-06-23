import {createGlobalStyle} from 'styled-components'

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfonts/iconfont.eot'); /* IE9 */
  src: url('./iconfonts/iconfont.eot') format('embedded-opentype'), /* IE6-IE8 */
          url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
          url('./iconfonts/iconfont.woff') format('woff'),
          url('./iconfonts/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
          url('./iconfonts/iconfont.svg') format('svg'); /* iOS 4.1- */
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon_github:before {
  content: "\e719";
}

.icon_random:before {
  content: "\e622";
}

.icon_sequence:before {
  content: "\e66d";
}

.icon_loop:before {
  content: "\e620";
}

.icondown:before {
  content: "\e68f";
}

.iconLeft:before {
  content: "\e611";
}

.iconshangyiqu101:before {
  content: "\e6e1";
}

.iconxiayiqu101:before {
  content: "\e718";
}

.icondianzan:before {
  content: "\e694";
}

.iconplay:before {
  content: "\e689";
}

.iconclose1:before {
  content: "\e60b";
}

.icondel1:before {
  content: "\e66e";
}

.iconmusic1:before {
  content: "\e6d1";
}

.iconMy:before {
  content: "\e615";
}

.iconpaihang:before {
  content: "\e638";
}

.iconmenuoff:before {
  content: "\e77c";
}

.iconclose:before {
  content: "\e600";
}

.iconmusic:before {
  content: "\e680";
}

.iconsearch:before {
  content: "\e60c";
}

.iconright:before {
  content: "\e61c";
}

.iconpause:before {
  content: "\e95f";
}

.iconpause1:before {
  content: "\e98f";
}

.iconplay_fill:before {
  content: "\e653";
}
`
