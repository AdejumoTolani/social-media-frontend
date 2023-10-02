import { Component } from '@angular/core';
import { NotificationService } from 'src/app/Services/notification.service';
import { SocketService } from 'src/app/Services/socket.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  notifications: any[] = [];

  constructor(private notificationService: NotificationService, private socket:SocketService) {}

  ngOnInit() {
    // this.socket.init('sho');

    this.notificationService
      .getNotificationObservable()
      .subscribe((notification) => {
        this.notifications.push(notification);
      });
      console.log(this.notifications)
  }

  // this.socket.

}
