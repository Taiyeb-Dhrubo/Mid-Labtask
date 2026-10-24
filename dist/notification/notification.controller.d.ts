import { NotificationService } from './notification.service.js';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    sendNotification(body: any): {
        studentName: string;
        message: string;
        status: string;
    };
    check(body: any): {
        studentName: string;
        courseId: string;
        message: string;
    };
}
