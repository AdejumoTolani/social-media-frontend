import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationsSubject = new Subject<any>();

  constructor() {}

  getNotificationObservable() {
    return this.notificationsSubject.asObservable();
  }

  sendNotification(notification: any) {
    this.notificationsSubject.next(notification);
  }
}
