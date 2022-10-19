import { Mongo } from "meteor/mongo";

//유사한 객체 만들기, api 몽고 연결
export const ContactCollection = new Mongo.Collection("contacts"); //몽고DB컬렉션 생성, 후에 서버에도 import해야 프론트사용가능
//데이터베이스의 스키마
//ContactCollection 프론트에서 insert 사용
//contacts라는 컬랙션생성
