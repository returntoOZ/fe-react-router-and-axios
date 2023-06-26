import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
    const { ownerId } = useParams();
    const[body, setBody] = useState("");
    const[title, setTitle] = useState("");
    const navigate = useNavigate();

    function getBody(e) {
        setBody(e.target.value)
    };

    function getTitle(e) {
        setTitle(e.target.value)
    };

    function postInfo(){ axios
        .post(`https://guestbook.jmoomin.com/${ownerId}/articles`, {
            body,
            title
        }) 
        .then((result) => {
            console.log(result)
            navigate(-1)
        })
        .catch((e) => {
            console.log(e)
        });
    };
        
return (
<>
    <h1>{ownerId}님의 방명록</h1>
    <input type="text" placeholder="제목" onChange={getTitle}></input>
    <br></br>
    <textarea placeholder="본문" onChange={getBody}></textarea>
    <br></br>
    <button onClick={postInfo}>방명록 남기기!</button>
</>
);
};
export default Create;