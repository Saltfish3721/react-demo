import React from 'react';

class Content extends React.Component {
    render () {
        return (
            <div>
                <h2>React.js 小书内容</h2>
            </div>
        )
    }
}

class Main extends React.Component {
    render () {
        return (
            <div>
                <h2>This is main</h2>
                <Content />
            </div>
        )
    }
}

export default Main