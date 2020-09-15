import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {TabItem, TabWrapper} from '@/components/tabNav/style'

const TabNav = props => {

  const iconList = [
    {
      id: '001',
      url: '/',
      icon: `&#xe6d1;`,
      name: '音乐馆'
    }, {
      id: '002',
      url: '/recommend',
      icon: `&#xe638;`,
      name: '排行'
    }, {
      id: '003',
      url: '/personal',
      icon: `&#xe615;`,
      name: '我的'
    }
  ]

  return (
    <TabWrapper>
      {
        iconList.map((item, index) => {
        return (
          <NavLink to={item.url} exact activeClassName="LinkActive" key={index}>
            <TabItem>
              <i className="iconfont">&#xe638;</i>
              <span className="TabLink">{item.name}</span>
            </TabItem>
          </NavLink>
          )
        })
      }
    </TabWrapper>
  )
}

export default React.memo(withRouter(TabNav))
