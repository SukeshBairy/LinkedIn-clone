import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import "./Sidebar.css"

function Sidebar() {

const recentItem = (topic) => (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
);

const user = useSelector(selectUser);

    return (
        <div className="sidebar">
            <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1078&q=80" alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you?</p>
                    <p className="sidebar__statNumber">2,723</p>
                </div> 
                <div className="sidebar__stat">
                    <p>Who viewed you too?</p>
                    <p className="sidebar__statNumber">2,534</p>
                </div>   
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('Heyy')}
                
            </div>
        </div>
    )
}

export default Sidebar
