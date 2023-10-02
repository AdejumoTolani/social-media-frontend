import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnChanges {
  @Input() message: string | null = null;
  isToastVisible = false;

 

  ngOnChanges(){
  if (this.message) {
    this.showToast();
  }
  }

  showToast() {
    this.isToastVisible = true;
    setTimeout(() => {
      console.log(this.message)
      this.isToastVisible = false;
    }, 2000); // Toast disappears after 2 seconds
  }
}
