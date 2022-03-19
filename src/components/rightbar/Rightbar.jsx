import "./rightbar.css"
import {Users} from "../../data"
import Online from "../online/Online"

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
        {/* Birthday */}
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/posts/gift.png" alt="" />
          <span className="birthdayText">
            <strong>Hix</strong> and <strong>3 other friends</strong> have birthday today.
          </span>
        </div>
        {/* Ad & friends online */}
        <img className="rightbarAd" src="assets/posts/ad.png" alt="" />
        <h4 className="rightbarTitle">Friends Online</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">Giannitsara</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Giannitsara</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">Married</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/2.jpeg" alt="" />
            <span className="rightbarFollowingName">Saske</span>
          </div>
           <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/3.jpeg" alt="" />
            <span className="rightbarFollowingName">Hix Marinopoulos</span>
          </div>
           <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/4.jpeg" alt="" />
            <span className="rightbarFollowingName">eimai cool?</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
<<<<<<< HEAD
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
=======
        <ProfileRightbar />
>>>>>>> 01d3bde2188f417cf5081ee2d20a6acfe60b3d5f
      </div>
    </div>
  )
}