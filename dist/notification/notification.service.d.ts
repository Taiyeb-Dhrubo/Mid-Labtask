export declare class NotificationService {
    sendNotification(studentName: string, message: string): {
        studentName: string;
        message: string;
        status: string;
    };
    checkEnrollmentAndNotify(studentName: string, courseId: string): {
        studentName: string;
        courseId: string;
        message: string;
    };
}
