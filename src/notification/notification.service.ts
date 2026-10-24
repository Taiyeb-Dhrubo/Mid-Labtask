import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  sendNotification(
    studentName: string,
    message: string,
  ) {
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
    return {
      studentName,
      courseId,
      message: 'Checked successfully',
    };
  }
}