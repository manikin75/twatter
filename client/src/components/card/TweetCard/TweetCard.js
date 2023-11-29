import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../avatar/Avatar";
import TweetIcons from "./TweetIcons";
import TweetBody from "./TweetBody";
import TweetHeader from "./TweetHeader";

const TweetCard = ({ tweet, isRetweeted }) => {
  return (
    <Link
      className={`post flex gap-4 border-b-1 border-solid border-slate-700 p-1 mx-4 py-4 flex ${isRetweeted && "tweet__retweet"}`}
      to={`/tweet/${tweet._id}`}
    >
      <div className="flex-none">
        <Avatar
          username={tweet.author.username}
          avatar={tweet.author.avatar}
          size="small"
        />
      </div>
      <div className="flex-1">
        <TweetHeader
          tweet={tweet}
          author={tweet.author}
          createdAt={tweet.createdAt}
        />
        <TweetBody body={tweet.body} originalTweet={tweet.originalTweet} />
        <TweetIcons tweet={tweet} className={isRetweeted && "display-none"} />
      </div>
    </Link>
  );
};

export default TweetCard;
