import React from 'react';

class Title extends React.Component {

    static contextTypes = {
        themeColor: PropTypes.string
    }

    render () {
        return (
            <h1 style={{ color: this.context.themeColor }}>React.js 小书标题</h1>
        )
    }
}

class Header extends React.Component {
    render () {
        return (
            <div>
                <h2>This is header</h2>
                <Title />
            </div>
        )
    }
}
export default Header