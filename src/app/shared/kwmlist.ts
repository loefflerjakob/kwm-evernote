import { Note } from "./note";
export { Note } from "./note";


export class Kwmlist {
    constructor(
        public id: number,
        public name: string,
        public is_shared: boolean,
        public notes: Note[]
    ){}
}
