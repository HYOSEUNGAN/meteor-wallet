// 🚨 요점 : api는 미니몽고를 활용해서 DB를 작업하는 곳

//프론트에 있던 DB작업들을 서버로 옮겨서해보자
//WHY? 자동 퍼플리싱을 해주는 메테오를 이해하기위함 (MiniMongo)
import { ContactCollection } from "./ContactCollection";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// const insert = (name, email, imageUrl) => {
//   return ContactCollection.insert({ name, email, imageUrl });
// };   //auto방식

//어떻게 클라이언트로 작용할까?!
//Meteor 메서드 사용 !!!

Meteor.methods({
  "contacts.insert"({ name, email, imageUrl }) {
    check(name, string); //에러 다루기 => meteor 함수 check로 문자열인지 확인
    check(email, string);
    check(imageUrl, string);

    if (!name) {
      throw new Meteor.Error("Required name!!!");
    }
    return ContactCollection.insert({
      name,
      email,
      imageUrl,
      createdAt: new Date(),
    });
  },
  "contacts.remove"({ contactId }) {
    check(contactId, string);
    return ContactCollection.remove(contactId); //몽고 DB 콜렉션 함수이용
  },
}); //이런 양식
