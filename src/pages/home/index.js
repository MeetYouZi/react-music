import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getBanner } from '@/api'
import Search from '@/pages/home/components/search'
import Banner from '@/pages/home/components/banner'

// 已用 hooks 重写
class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bannerList: []
    }
  }

  _getBannerList () {
    getBanner().then(res => {
      const banners = res.banners
      this.setState({
        bannerList: banners
      })
    })
  }

  componentDidMount () {
    this._getBannerList()
  }

  isShow () {
    if(this.state.bannerList.length) {
      return <Banner bannerList={this.state.bannerList}/>
    } else {
      return false
    }
  }

  render() {
    return (
      <Fragment>
        <Search/>
        {this.isShow()}
        <div>home1111</div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

// 高阶组件中的 withRouter, 作用是将一个组件包裹进 Route 里面, 然后 react-router 的三个对象 history, location, match 就会被放进这个组件的 props 属性中.
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
