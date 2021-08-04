import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './redux';

function UserContainer({userData, fetchUser}){
    useEffect(() => {
        fetchUser()
    }, [])
    
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            {userData.user && 
                userData.user.map(usr => 
                    <p>{usr.name}</p>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        userData: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () =>dispatch(fetchUser())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)