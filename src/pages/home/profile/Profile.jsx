import "./profile.css"
import Topbar from "../../../components/topbar/Topbar";
import SideBar from "../../../components/sidebar/Sidebar";
import Feed from "../../../components/feed/Feed";
import Rightbar from "../../../components/rightbar/Rightbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
        };
        fetchUser();
    }, [username])

  return (
    <div>
        <Topbar />
        <div className="profile">
            <SideBar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className="profileCoverImg" src={`${PF}posts/3.jpeg`} alt="" />
                        <img className="profileUserImg" src={`${PF}person/2.jpeg`} alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Elijah Koulaxis</h4>
                        <span className="profileInfoDesc">Sup mfs</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username={username} />
                    <Rightbar user={user} />
                </div>
            </div>
        </div>
    </div>
  )
}
