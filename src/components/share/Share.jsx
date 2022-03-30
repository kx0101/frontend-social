import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useContext } from "react";
import AuthContext from "../../context/AuthContext"
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";

export default function Share() {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const description = useRef();
    const [file, setFile] = useState(null);


    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            description: description.current.value
        };

        if(file){
            const data = new FormData();
            const d = new Date();
            let minutes = d.getMinutes();
            const fileName = minutes + file.name;
            newPost.img = fileName;
            data.append("file", file);
            data.append("name", fileName);
            try {
                await axios.post("/upload", data);
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }

        try {
            await axios.post("/posts", newPost)
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="share">
        <div className="shareWrapper">

            <div className="shareTop">
                <img className="shareProfileImg" src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" />
                <input placeholder={"What's in your mind " + user.username + "?"} type="text" className="shareInput" ref={description} />
            </div>
            <hr className="shareHr" />
            <form className="shareBottom" onSubmit={submitHandler} encType='multipart/form-data' >
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        <PermMediaIcon htmlColor="blue" className="shareIcon" />
                        <span className="shareOptionText">Photo/Video</span>
                        <input style={{display: "none"}} name="file" type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e) =>  setFile(e.target.files[0])} />
                    </label>
                    <div className="shareOption">
                        <LabelIcon htmlColor="green" className="shareIcon" />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <RoomIcon htmlColor="red" className="shareIcon" />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
                        <span className="shareOptionText">Feeling</span>
                    </div>
                </div>
                <button className="shareButton" type="submit">
                    Share
                </button>
            </form>    
        </div>    
    </div>
  )
}
