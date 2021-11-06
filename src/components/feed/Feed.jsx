import Share from "./../share/Share";
import Post from "./../post/Post";

import "./feed.css";

export default function Feed() {
  return (
    <div className="feed">
      <Share />
      <Post />
    </div>
  );
}
