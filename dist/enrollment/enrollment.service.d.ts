import { CourseService } from '../course/course.service.js';
import { NotificationService } from '../notification/notification.service.js';
export declare class EnrollmentService {
    private courseService;
    private notificationService;
    constructor(courseService: CourseService, notificationService: NotificationService);
    getEnrollments(): {
        message: string;
        data: never[];
    };
    enrollStudent(studentName: string, courseId: string): {
        message: string;
        student: string;
        course: {
            message: string;
            id: string;
        };
        notification: {
            studentName: string;
            message: string;
            status: string;
        };
    };
}
