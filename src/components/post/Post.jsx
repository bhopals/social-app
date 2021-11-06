import "./post.css";
import { MoreVert } from "@material-ui/icons";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Singh</span>
            <span className="postDate">12 Sept 2021</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Description TEst</span>
          <img className="postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`/assets/like.png`} alt="" />
            <img className="likeIcon" src={`/assets/heart.png`} alt="" />
            <span className="postLikeCounter">3 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">5 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
