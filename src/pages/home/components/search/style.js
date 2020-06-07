import styled from 'styled-components'
import * as variable from 'style/variable'
// import  * as mixins from 'style/mixins'

export const SearchBar = styled.div`
	height: 30px;
  display: flex;
  position: relative;
  margin: 8px 16px 8px 16px;
  overflow: hidden;
  border-radius: 15px;
  background: ${variable.$searchBg};
  transition: width ease .3s;
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 6px;
  padding-bottom: 4px;
  padding-left: 24px;
  font-size: ${variable.$fontSizeMedium};
  text-align: center;
  border: none;
  border-radius: 0;
  background: 0 0;
  -webkit-appearance: none;
`
