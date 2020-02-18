import React from 'react'
import { connect } from 'react-redux'
import { fetchPostsAndUsers } from '../actions'
import UserHeader from './UserHeader'


class App extends React.Component {
     componentDidMount() {
         this.props.fetchPostsAndUsers()
    }

    renderList() {

        return this.props.posts.map(element => {
            return (
                <div key={element.id} className="ui segment item">
                    <i className="facebook square icon" />
                    <div className="content">
                        <div className="description">
                            {element.title}
                            {element.body}
                        </div>
                        <UserHeader userId={element.userId} />
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
    return { 
        posts: state.posts,
     }
}

export default connect(
    mapStateToProps,
    { fetchPostsAndUsers }
)(App)