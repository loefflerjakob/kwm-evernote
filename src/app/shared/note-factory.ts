import { Note } from "./note";

export class NoteFactory {
    static empty(): Note {
        return new Note(
            0,
            '',
            0,
            '',
            '',
            [{
                id: 0,
                title: '',
                is_shared: false,
                note_id: 0,
                text: '',
                due_date: new Date(),
                image_url: '',
                tags: [{ id: 0, name: '' }]
            }],
            [{ id: 0, name: '' }]
        )
    }

    static fromObject(rawNote: any): Note {
        return new Note (
            rawNote.id,
            rawNote.title,
            rawNote.kwmlist_id,
            rawNote.text,
            rawNote.image_url,
            rawNote.todos,
            rawNote.tags
        )
    }
}