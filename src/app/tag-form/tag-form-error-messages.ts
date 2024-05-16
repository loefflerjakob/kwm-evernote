export class ErrorMessage {
    constructor(
        public forControl: string,
        public forValidator: string,
        public text: string
    ) {}
}

export const TagFormErrorMessages = [
    new ErrorMessage('name', 'required', 'Please provide a Tag name'),
];