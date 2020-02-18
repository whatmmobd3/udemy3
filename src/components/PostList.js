import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts,fetchUser } from '../actions'

class App extends React.Component {
    componentDidMount() {
        console.log(this.props);
        
        this.props.fetchPosts()
        this.props.fetchUser(1)
    }

    renderList() {
        return this.props.posts.map(element => {
            return (
                <div key={element.id} className="ui segment item">
                    <i className="facebook square icon" />
                    <div className="content">
                        {element.title}
                    </div>
                    <div className="description">
                        {element.body}
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="ui  relaxed list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { posts: state.posts }
}

export default connect(
    mapStateToProps,
    { fetchPosts,fetchUser }
)(App)