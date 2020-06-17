import styled from 'styled-components'
import * as variable from 'style/variable'
import  * as mixins from 'style/mixins'

export const TopWrap = styled.div`
	position: relative;
  height: 236px;
  overflow: hidden;
  .top_wrap_bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
`;

export const OptBox = styled.div`
  position: relative;
  z-index: 10;
  margin: -4px 16px 12px;
  border-radius: 2px;
  background: var(--searchBg);
  box-shadow: 0 0 12px 0 rgba(0,0,0,.06);
`


