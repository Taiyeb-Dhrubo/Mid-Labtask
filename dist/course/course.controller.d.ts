import { CourseService } from './course.service.js';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getAllCourses(): {
        message: string;
        data: never[];
    };
    getCourse(id: string): {
        message: string;
        id: string;
    };
    createCourse(body: any): {
        message: string;
        data: {
            name: string;
            code: string;
        };
    };
}
