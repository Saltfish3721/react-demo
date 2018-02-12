import React from 'react'
import { Link } from 'react-router'
import { IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return (
    <div>
        <ul role="nav">
          <li><Link to="/hearthstone">炉石传说</Link></li>
          <li><Link to="/mtg">万智牌</Link></li>
        </ul>
        {this.props.children || "head........."}
     </div>
     )
  }
})
