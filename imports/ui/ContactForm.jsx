import React, { useState } from "react";
import { ContactCollection } from "../api/ContactCollection";
//api 몽고 db

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const saveContact = () => {
    console.log({ name, email, imageUrl });
    ContactCollection.insert({ name, email, imageUrl });
    setName(""); // 이건 왜넣는거지???
    setEmail(""); // 이건 왜넣는거지???
    setImageUrl(""); // 이건 왜넣는거지??? 아 빈값으로 전환
  };
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name} // 동적인 name 값입력
            type="text"
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
          ></input>
        </div>
        <div>
          <label htmlFor="imageUrl">ImageURL</label>
          <input
            id="imageUrl"
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            value={imageUrl}
            type="text"
          ></input>
        </div>
        <div>
          <button type="button" onClick={saveContact}>
            Save Contact
          </button>
        </div>
      </form>
    </div>
  );
};
//1. 라벨은 input에 입력값 연결????  답? 폼 요소를 위한 label 요소를 생성하는 경우, for 대신에 htmlFor를 사용한다.
//className과 같다
//2. 리액트에서는 보통 state 로 form 에 value 를 관리하고 submit 이벤트로 원하는 동작을 실행합니다.
//3. 서버에 보내고 데이터베이스에 저장해야함 (Document를 MongoDB에 저장)

export default ContactForm;
