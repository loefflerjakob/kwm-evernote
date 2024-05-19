import { Todo } from "./todo";

export class TodoFactory {
    static empty() :Todo {
        return new Todo(0, '', false, 0, '', new Date(), '', [{id: 0, name: ''}]);
    }

    static fromObject(rawTodo: any): Todo {
        return new Todo (
            rawTodo.id,
            rawTodo.title,
            rawTodo.is_shared,
            rawTodo.note_id,
            rawTodo.text,
            typeof(rawTodo.due_date) === 'string' ? new Date(rawTodo.due_date) : rawTodo.due_date,
            rawTodo.image_url,
            rawTodo.tags
        );
    }
}
