export class ErrorMessage {
    constructor(
        public forControl: string,
        public forValidator: string,
        public text: string
    ) {}
}

export const ErrorMessages = [
    new ErrorMessage('name', 'required', 'Please provide a Name'),
    new ErrorMessage('title', 'required', 'Please provide a Title'),
    new ErrorMessage('image_url', 'required', 'Please check a box'),
];