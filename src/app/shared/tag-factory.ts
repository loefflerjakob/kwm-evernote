import { Tag } from "./tag";

export class TagFactory {
    static empty(): Tag {
        return new Tag(0, '');
    }

    static fromObject(rawTag: any): Tag {
        return new Tag(
            rawTag.id,
            rawTag.name,
        )
    }
}

