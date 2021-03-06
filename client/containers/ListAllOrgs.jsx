import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getAllOrgs} from '../actions/listOrgs'
import {getOrgsByItem} from '../actions/joinItemToOrgs'
import OrgSingle from '../components/OrgSingle'

class ListAllOrgs extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0)
    this.props.dispatch(getAllOrgs())
    this.props.dispatch(getOrgsByItem())
  }

  render () {
    const {listOrgs} = this.props
    return (
      <div className='wallpaper-no-border'>
        <div className='container'>
          <div className='org-header'>
            <h4>Consider recycling or donating your used items at any of these Wellington organisations:</h4>
            <p>Click on a button to find out which items these organisations take.</p>
          </div>
          <div className='org-link-list'>
            {listOrgs.map((org, key) => <OrgSingle org={org} key={key}/>)}
          </div>
          <p className='closing-tag'>Want your organisation listed on our site? Get in touch with us <Link to='/contact'>here</Link>.</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    listOrgs: state.listOrgs,
    joinItemToOrgs: state.joinItemToOrgs
  }
}

export default connect(mapStateToProps)(ListAllOrgs)
