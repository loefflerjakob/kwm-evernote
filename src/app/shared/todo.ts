import { Tag } from "./tag";
export { Tag } from "./tag";

export class Todo {
    constructor(
        public id: number,
        public title: string,
        public is_shared: boolean,
        public note_id: number,
        public text?: string,
        public due_date?: Date,
        public image_url?: string,
        public tags?: Tag[]
    ) {}
}
