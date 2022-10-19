import React from "react";
import { ContactCollection } from "../api/ContactCollection";
import { useTracker } from "meteor/react-meteor-data";

const ContactList = () => {
  //배열로 넘겨주는 작업
  const contacts = useTracker(() => {
    return ContactCollection.find({}).fetch(); // api로 db데이터 가져온 후 보여주는작업
  });

  //find매서드로 읽은후, fetch()로 배열 가져옴
  //Tracker이용할 예정, 메테오 라이브러리로 DB가 바뀔때마다 확인 후 렌더링한다.
  //DB값이 계속 추가될때마다 동적인 값을 전달해줘야함 (반응성)

  return (
    <div>
      <h3>Contact List</h3>

      {contacts.map((contact) => (
        <li key={contact.email}>
          {contact.name} - {contact.email}
        </li>
      ))}
    </div>
  );
};

export default ContactList;
