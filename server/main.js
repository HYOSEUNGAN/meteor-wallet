import { Meteor } from "meteor/meteor"; //Meteor 전역 메서드 import
import "../imports/api/ContactCollection";
//api 넣어줌 => 서버에 적용해야함, 안그러면 실행안됌
//DB에 저장완료
import "../imports/api/ContactsMethods"; // 만든 insert을 Methods 서버사이드에서 로딩

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
});

// 디지털 지갑에서 db를 어떻게 쓸지 생각해보기
