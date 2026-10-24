import { EnrollmentService } from './enrollment.service.js';
export declare class EnrollmentController {
    private readonly enrollmentService;
    constructor(enrollmentService: EnrollmentService);
    getEnrollments(): {
        message: string;
        data: never[];
    };
    enrollStudent(body: any): {
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
