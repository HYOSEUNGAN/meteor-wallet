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
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Contact List
        </h3>
        <ul
          role="list"
          className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
        >
          {contacts.map((person, personIdx) => (
            <li
              key={personIdx}
              className="py-4 flex items-center justify-between space-x-3"
            >
              <div className="min-w-0 flex-1 flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {person.name}
                  </p>
                  <p className="text-sm font-medium text-gray-500 truncate">
                    {person.email}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;
