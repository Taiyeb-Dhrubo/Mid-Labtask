import {
  Injectable,
  Inject,
  forwardRef,
} from '@nestjs/common';

import { CourseService } from '../course/course.service';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class EnrollmentService {
  constructor(
    private courseService: CourseService,

    @Inject(forwardRef(() => NotificationService))
    private notificationService: NotificationService,
  ) {}

  getEnrollments() {
    return {
      message: 'All enrollments fetched',
      data: [],
    };
  }

  enrollStudent(studentName: string, courseId: string) {
    return {
      message: 'Student enrolled successfully',
      student: studentName,
      courseId,
    };
  }
}