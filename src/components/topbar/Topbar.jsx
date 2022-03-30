import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"

{/* Top bar of the page */}
export default function Topbar() {

    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className="topbarContainer">
            {/* Top left */}
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">
                        Hermes
                    </span>
                </Link>
                
            </div>
            {/* Top center */}
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon className="searchIcon" />
                    <input placeholder="Search for a friend, post or video" type="text" className="searchInput" />
                </div>
            </div>
            {/* Top right */}
            <div className="topbarRight">
                {/* Links */}
                <div className="topbarLinks">
                    <span className="topbarLink">
                        Homepage
                    </span>
                    <span className="topbarLink">
                        Timeline
                    </span>
                </div>
                {/* Icons */}
                <div className="topbarIcons">
                    {/* Person */}
                    <div className="topbarIconItem">
                        <PersonIcon />
                        <span className="topbarIconBadge">
                            1
                        </span>
                    </div>
                    {/* Chat */}
                    <div className="topbarIconItem">
                        <ChatIcon />
                        <span className="topbarIconBadge">
                            1
                        </span>
                    </div>
                    {/* Notifications */}
                    <div className="topbarIconItem">
                        <NotificationsIcon />
                        <span className="topbarIconBadge">
                            1
                        </span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img src={PF+user.profilePicutre ? PF+user.profilePicutre : PF+"person/noAvatar.png"} alt="" className="topbarImg" />
                </Link>
            </div>

        </div>
    )
}