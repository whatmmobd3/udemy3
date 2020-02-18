import React from 'react'
import { connect } from 'react-redux'

class UserHeader extends React.Component {
    render() {
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

export default connect(mapStateToProps)(UserHeader)