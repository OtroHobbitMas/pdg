import { Opinion } from "./opinion";
import { Tag } from "./tag";
 
export class Book {
    $key: string;
    Autor: string;
    Descripcion: string;
    Title: string;
    Portada: string;
    RelatedBooks: string;
    Stars: string;
    Comentarios: Object;
    Tags: Array<Tag>;
}
