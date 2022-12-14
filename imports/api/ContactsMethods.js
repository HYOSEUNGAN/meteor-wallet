// ๐จ ์์  : api๋ ๋ฏธ๋๋ชฝ๊ณ ๋ฅผ ํ์ฉํด์ DB๋ฅผ ์์ํ๋ ๊ณณ

//ํ๋ก ํธ์ ์๋ DB์์๋ค์ ์๋ฒ๋ก ์ฎ๊ฒจ์ํด๋ณด์
//WHY? ์๋ ํผํ๋ฆฌ์ฑ์ ํด์ฃผ๋ ๋ฉํ์ค๋ฅผ ์ดํดํ๊ธฐ์ํจ (MiniMongo)
import { ContactCollection } from "./ContactCollection";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// const insert = (name, email, imageUrl) => {
//   return ContactCollection.insert({ name, email, imageUrl });
// };   //auto๋ฐฉ์

//์ด๋ป๊ฒ ํด๋ผ์ด์ธํธ๋ก ์์ฉํ ๊น?!
//Meteor ๋ฉ์๋ ์ฌ์ฉ !!!

Meteor.methods({
  "contacts.insert"({ name, email, imageUrl }) {
    check(name, string); //์๋ฌ ๋ค๋ฃจ๊ธฐ => meteor ํจ์ check๋ก ๋ฌธ์์ด์ธ์ง ํ์ธ
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
    return ContactCollection.remove(contactId); //๋ชฝ๊ณ  DB ์ฝ๋ ์ ํจ์์ด์ฉ
  },
}); //์ด๋ฐ ์์
