import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private enrollmentService: EnrollmentService,
  ) {}

  sendNotification(studentName: string, message: string) {
    return {
      studentName,
      message,
      status: 'Notification Sent',
    };
  }

  checkEnrollmentAndNotify(
    studentName: string,
    courseId: string,
  ) {
    const enrollments =
      this.enrollmentService.getEnrollments();

    return {
      studentName,
      courseId,
      enrollments,
    };
  }
}