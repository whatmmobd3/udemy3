import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }
    render() {
        // const user = this.props.users.find(e => e.id === this.props.userId)
        const { user } = this.props

        if (!user) {
            return <div>Load</div>
        }
        else
            return (
                <div className="header">{user.name}</div>
            )
    }
}

const mapStateToProps = (state, own) => {
    return { user: state.users.find(user => user.id === own.userId) }
}

export default connect(
    mapStateToProps,
    { fetchUser }
)(UserHeader)