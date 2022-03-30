import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import {useState} from "react";
import axios from "axios"
import {useEffect} from "react"
import {format} from "timeago.js"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Post({post}) {

    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const {user:currentUser} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; //public folder

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])

    useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data)
    }

    fetchUser();
  }, [post.userId]) //Render this useEffect once only.

    // if it's already liked, we un-like it.
    const likeHandler = () => {
        try {
            axios.put("/posts/" + post._id + "/like", {userId:currentUser._id})
        } catch (error) {
            console.log(error);
        }

        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}> 
                        <img className="postProfileImg" src={user.profilePicture ? user.profilePicture : PF+"person/noAvatar.png"} alt="" />
                    </Link>
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    {post?.description}
                </span>
                <img className="postImg" src={PF+post.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src={`${PF}posts/like.png`} onClick={likeHandler} alt="" />
                    <img className="likeIcon" src={`${PF}posts/heart.png`} onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">
                        {like} people like it
                    </span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">
                        {post.comment} comments
                    </span>
                </div>
            </div>            
        </div>
    </div>
  )
}
