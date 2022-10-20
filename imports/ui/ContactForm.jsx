import React, { useState } from "react";
import { ContactCollection } from "../api/ContactCollection";
//api 몽고 db
import { Meteor } from "meteor/meteor"; //메테오 매서드 import
import { ErrorAlert } from "./components/ErrorAlert";
import { SuccessAlert } from "./components/SuccessAlert";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const showError = ({ message }) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 3000);
  }; // 리팩토링 showError함수에 넣음 + success메세지는 예시로 남겨둠

  const saveContact = () => {
    // ContactCollection.insert({ name, email, imageUrl }); //api에서 받고, 데이터베이스에 insert
    Meteor.call("contacts.insert", { name, email, imageUrl }, (error) => {
      if (error) {
        showError(); // 리팩토링 showError함수에 넣음
      } else {
        setName(""); // 이건 왜넣는거지???
        setEmail(""); // 이건 왜넣는거지???
        setImageUrl(""); // 이건 왜넣는거지??? 아 빈값으로 전환
        setSuccess("Contact saved!!!");
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      }
    }); //자동말고 Meteor 매서드를 사용 (주의: 서버설정)
  };
  return (
    <form className="mt-6">
      {error && <ErrorAlert message={error} />}
      {success && <SuccessAlert message={success} />}

      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="px-2 py-3 text-right">
        <button
          type="button"
          onClick={saveContact}
          className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          Save Contact
        </button>
      </div>
    </form>
  );
};
//1. 라벨은 input에 입력값 연결????  답? 폼 요소를 위한 label 요소를 생성하는 경우, for 대신에 htmlFor를 사용한다.
//className과 같다
//2. 리액트에서는 보통 state 로 form 에 value 를 관리하고 submit 이벤트로 원하는 동작을 실행합니다.
//3. 서버에 보내고 데이터베이스에 저장해야함 (Document를 MongoDB에 저장)

export default ContactForm;
