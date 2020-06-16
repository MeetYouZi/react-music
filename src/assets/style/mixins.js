// 不换行
export const noWrap = () => {
  return `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `
}

export const extendClick = () => {
  return `
    position: relative;
    &:before{
      content: '';
      position: absolute;
      top: -10px; bottom: -10px; left: -10px; right: -10px;
    };
  `;
}
// 超过多行用点
export const noWrapNumber = ($nummber) => {
  return `
    overflow hidden
    -webkit-line-clamp ${$nummber}
    text-overflow ellipsis
    display -webkit-box
    -webkit-box-orient vertical
  `;
}
