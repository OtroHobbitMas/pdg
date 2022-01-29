import { Opinion } from "./opinion";
import { Tag } from "./tag";
 
export class Book {

    autor: string;
    description: string;
    name: string;
    portrait: string;
    title: string;
    score: string;

    opinions: Array<Opinion>;
    tags: Array<Tag>;
    relatedBooks: Array<Book>;
}
