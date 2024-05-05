import { Tag } from "./tag";
export { Tag } from "./tag";

import { Todo } from "./todo";
export { Todo } from "./todo";


export class Note {
    constructor(
        public id: number,
        public title: string,
        public kwmlist_id: number,
        public text?: string,
        public image_url?: string,
        public todos?: Todo[],
        public tags?: Tag[]
    ) {}
}
