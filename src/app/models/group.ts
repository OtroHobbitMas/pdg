import { Book } from "./book";
import { Tag } from "./tag";

export class Group {

    $key: string;
    owner: string;
    name: string;
    description: string;
    integrants: Object; 
    privacity: string;
    tags: Array<Tag>;
    id: number;
    Images: Object;
    books: Object;
}

