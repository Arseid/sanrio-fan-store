import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() websiteName!: string;
  email: string = '';
  currentYear: number = new Date().getFullYear();

  subscribe() {
    if (this.email) {
      alert('Subscribed with email: ' + this.email);
    } else {
      alert('Please enter a valid email address');
    }
  }
}
