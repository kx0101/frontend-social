import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">

        <ul className="sidebarList">
          {/* Feed */}
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">
              Feed
            </span>
          </li>
          {/* Chats */}
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListItemText">
              Chats
            </span>
          </li>
          {/* Videos */}
          <li className="sidebarListItem">
            <PlayCircleIcon className="sidebarIcon" />
            <span className="sidebarListItemText">
              Videos
            </span>
          </li>
          {/* Groups */}
          <li className="sidebarListItem">
            <GroupsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">
              Groups
            </span>
          </li>
          {/* Bookmarks */}
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">
              Bookmarks
            </span>
          </li>
          {/* Questions */}
          <li className="sidebarListItem">
            <HelpIcon className="sidebarIcon" />
            <span className="sidebarListItemText">
              Questions
            </span>
          </li>
          {/* Jobs */}
          <li className="sidebarListItem">
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">
              Jobs
            </span>
          </li>
          {/* Events */}
          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon" />
            <span className="sidebarListItemText">
              Events
            </span>
          </li>
          {/* Courses */}
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListItemText">
              Courses
            </span>
          </li>
        </ul>

        {/* Button */}
        <button className="sidebarButton">
          Show More
        </button>
        <hr className="sidebarHr" />

        {/* Friend List */}
        <ul className="sidebarFriendList">

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="" />
            <span className="sidebarFriendName">Takisa Papadopoulou</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="" />
            <span className="sidebarFriendName">Takisa Papadopoulou</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="" />
            <span className="sidebarFriendName">Takisa Papadopoulou</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="" />
            <span className="sidebarFriendName">Takisa Papadopoulou</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="" />
            <span className="sidebarFriendName">Takisa Papadopoulou</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="" />
            <span className="sidebarFriendName">Takisa Papadopoulou</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="" />
            <span className="sidebarFriendName">Takisa Papadopoulou</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="" />
            <span className="sidebarFriendName">Takisa Papadopoulou</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="" />
            <span className="sidebarFriendName">Takisa Papadopoulou</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="" />
            <span className="sidebarFriendName">Takisa Papadopoulou</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/1.jpeg" alt="" />
            <span className="sidebarFriendName">Takisa Papadopoulou</span>
          </li>
        </ul>

      </div>
    </div>
  )
}
