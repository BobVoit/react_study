import React from "react";
import { connect } from "react-redux";
import Profile from './Profile';
import { withRouter } from "react-router-dom";
import { getUserProfile } from '../../redux/profileReducer';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;    
        userId = (!userId ? 2 : userId);
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
          );
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

