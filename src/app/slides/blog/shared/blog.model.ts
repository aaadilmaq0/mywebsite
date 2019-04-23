import { DatePipe } from '@angular/common';

export interface Blog{
    _id?: string;
    name: string;
    email?: string;
    title: string;
    about?: string;
    content: string;
    dpPath?: string;
    dateTime: Date;
}
