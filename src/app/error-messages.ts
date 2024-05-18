export class ErrorMessage {
    constructor(
        public forControl: string,
        public forValidator: string,
        public text: string
    ) {}
}

export const ErrorMessages = [
    new ErrorMessage('name', 'required', 'Please provide a Name'),
];