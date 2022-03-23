import "./profile.css"
import Topbar from "../../../components/topbar/Topbar";
import SideBar from "../../../components/sidebar/Sidebar";
import Feed from "../../../components/feed/Feed";
import Rightbar from "../../../components/rightbar/Rightbar";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
                    <Feed />
                    <Rightbar profile />
                </div>
            </div>
        </div>
    </div>
  )
}
