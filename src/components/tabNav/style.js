import styled from 'styled-components'
import * as variable from 'style/variable'
// import  * as mixins from 'style/mixins'

export const TabWrapper = styled.div`
  background: rgba(255, 255, 255, 0.99);
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  height: 50px;
  box-shadow: 0px 2px 6px 0px rgba(255,54,42,0.1);
  font-size: ${variable.$fontSizeSmall};
  z-index: 9;
  a{
    flex: 1;
    display: flex;
    justify-items: center;
    text-align: center;
    .tabLink {
      font-size: ${variable.$fontSizeSmall};
      color: #000;
    }
  }
  .LinkActive{
    color: ${variable.$colorTheme}
  }
`

export const TabItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
