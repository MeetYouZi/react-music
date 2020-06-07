import styled from 'styled-components';
import * as $color from 'style/variable';
import  * as mixins from 'style/mixins';

export const HeaderWrapper = styled(mixins.noWrap)`
	z-index: 1;
	position: relative;
	height: 56px;
	border-bottom: 1px solid ${$color.$colorBackground};
`;

export const Logo = styled.div`
  width: 80px;
  height: 100px;
  border: 1px solid #444;
  background: ${$color.$colorBackground};
`


