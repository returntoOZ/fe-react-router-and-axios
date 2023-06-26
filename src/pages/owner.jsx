import { useState, useEffect } from "react";
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Owner = () => {
const { ownerId } = useParams();
const [info, setInfo] = useState([]);
const navigate = useNavigate();

function moveToEdit(){
    navigate(`/${ownerId}/create`)
}

useEffect(() => { axios
    .get(`https://guestbook.jmoomin.com/${ownerId}/articles`) 
    .then((result) => { // 호출 성공 시, result에 호출한 값을 넣어라
            setInfo(result.data)
          })
    .catch((e) => { 
            console.log(e); // 호출 실패하면, e에 실패한 이유가 담김
        }); 
    }, [ownerId]);

return ( info.length === 0 ? 
<>
    <h1>{ownerId}님의 방명록</h1>
    <p>방명록이 없습니다.</p>
    <button onClick={moveToEdit}>방명록 남기기</button>
</>
:
<>
    <h1>{ownerId}님의 방명록</h1>
    {info.map((data) => <li><Link to={`/articles/${data.id}`}>{data.title}</Link></li>)}
    <button onClick={moveToEdit}>방명록 남기기</button>
</>
);
};
export default Owner;