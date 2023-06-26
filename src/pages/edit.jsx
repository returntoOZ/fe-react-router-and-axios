import { useState, useEffect } from "react";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = () => {
const navigate = useNavigate();
const {articleId} = useParams();
const [title, setTitle] = useState();
const [body, setBody] = useState();
const [info, setInfo] = useState([]);

function modifyTitle(e){
    setTitle(e.target.value)
}

function modifyBody(e){
    setBody(e.target.value)
}

function modifyArticle(){ axios
    .put(`https://guestbook.jmoomin.com/articles/${articleId}` ,{
        title,
        body
    })
    .then((res) =>{
        console.log(res)
    })
    .catch((e) => {
        console.log(e)
    })
    navigate(-1)
}

useEffect(() => { axios
    .get(`https://guestbook.jmoomin.com/articles/${articleId}`) 
    .then((result) => { // 호출 성공 시, result에 호출한 값을 넣어라
            setInfo(result.data)
          })
    .catch((e) => { 
            console.log(e); // 호출 실패하면, e에 실패한 이유가 담김
        }); 
    }, [articleId]);

return (
<>
    <input type="text" placeholder={info.title} onChange={modifyTitle}></input>
    <br></br>
    <textarea placeholder={info.body} onChange={modifyBody}></textarea>
    <br></br>
    <button onClick={modifyArticle}>방명록 남기기!</button>
</>
);
};
export default Edit;