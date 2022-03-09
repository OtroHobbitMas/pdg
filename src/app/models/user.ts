import { Book } from "./book";
import { Phone } from "./phone";
import { Tag } from "./tag";

export class User {

    $key: string;
    email: string;
    lname: string;
    name: string;
    description: string;
    urlImage: string; 
    password: string;
    telefono: Phone;
    friends: Array<User>;
    books: Array<Book>;
    tags: Array<Tag>;
    Groups: Object;
}

