import React, { useState } from 'react';
import getFormData from "../../utils/getFormData";
import { useSelector, useDispatch } from "react-redux";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { RiFileGifLine, GrEmoji, FiImage } from "react-icons/all";
import Avatar from "../avatar/Avatar";
// import TextareaAutosize from "react-textarea-autosize";
import { newTweet, newRetweet } from "../../redux/actions/tweetActions";
// import { useEffect } from "react";

const NewTweetForm = () => {
  const [body, setBody] = useState('');
  const { username, avatar } = useSelector(
    (state) => state.currentProfile.data
  );
  const dispatch = useDispatch();

  const placeholders = [
    "What's happening?",
    "How's it going?",
    "Share something with us!",
    "Tell a story!",
    "What happened today?",
    "Anything on your mind?",
    "Don't hold back...",
    "Anything you want to tell?"
  ];

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["image", "clean"]
  ];

  const handleBodyChange = (html) => {
  	setBody(html);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = getFormData(e.target);
    formData.body = body;
    console.log(formData);
    return;
    // dispatch(newTweet(formData));
    // e.target.reset();
  };

  return (
    <div className="grid grid-cols-12 align-items-fs mt-2 mx-4 pb-2 border-b-1 border-solid border-slate-600">
      <div className="col-span-1 justify-content-c align-items-c">
        <Avatar username={username} avatar={avatar} size="small" />
      </div>
      <form className="col-span-11" onSubmit={handleSubmit}>
        {/* <TextareaAutosize name="body" placeholder={placeholders[parseInt(Math.random()*placeholders.length)]} /> */}
        <ReactQuill 
          className="bg-slate-300 border-black border-solid border-1 text-black rounded-sm"
          theme="snow" 
          name="body"
          value={body}
          onChange={handleBodyChange}
          modules={{ toolbar: toolbarOptions }}
          placeholder={placeholders[parseInt(Math.random()*placeholders.length)]} />
        <div className="display-flex justify-content-sb align-items-c">
          <ul className="grid grid-flow-col auto-cols-max gap-2 text-xl">
            <li className='opacity-50 hover:opacity-100'>
              <FiImage />
            </li>
            <li className='opacity-50 hover:opacity-100'>
              <RiFileGifLine />
            </li>
            <li className='opacity-50 hover:opacity-100'>
              <GrEmoji />
            </li>
          </ul>
          <button className="bg-primary rounded-md py-1 px-4 my-1">Post</button>
        </div>
      </form>
    </div>
  );
};

export default NewTweetForm;
