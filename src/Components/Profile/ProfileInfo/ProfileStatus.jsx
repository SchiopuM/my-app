import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        toggle: false,
        status: this.props.status
    }

    toggleOn =() => {

        this.setState({
            toggle: true
        })
    }

    toggleOff = () => {

        this.setState({
            toggle: false
        })
        this.props.updateUserStatusThunk(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (<>

                {this.state.toggle ? <span>
                        <input autoFocus={true}
                               onBlur={this.toggleOff}
                               value={this.state.status}
                               onChange={this.onStatusChange}

                        /></span>


                    : <span onClick={this.toggleOn}>{this.props.status || '----' }</span>}


            </>
        )
    }
}

export default ProfileStatus