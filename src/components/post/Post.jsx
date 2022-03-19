import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/2.jpeg" alt="" />
                    <span className="postUsername">Elijah Koulaxis</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    First post mf
                </span>
                <img className="postImg" src="/assets/posts/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/posts/like.png" alt="" />
                    <img className="likeIcon" src="/assets/posts/heart.png" alt="" />
                    <span className="postLikeCounter">
                        20 people like it
                    </span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">
                        7 comments
                    </span>
                </div>
            </div>            
        </div>
    </div>
  )
}
