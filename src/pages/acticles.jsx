import { useState, useEffect } from "react";
import React from "react";
import { useParams, Navigate, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Articles = () => {
const navigate = useNavigate();
const {articleId} = useParams();
const [info, setInfo] = useState([]);

function moveToEdit(){
    navigate(`/articles/${articleId}/edit`)
}

function deleteArticle(){ axios
    .delete(`https://guestbook.jmoomin.com/articles/${articleId}`)
    .then((result) => {
        console.log(result)
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
    <h1>{info.title}</h1>
    <p>{info.body}</p>
    <p>작성일: {info.createdAt}</p>
    <button onClick={moveToEdit}>수정하기</button>
    <button onClick={deleteArticle}>제거하기</button>
</>
);
};
export default Articles;