import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   startDate = new Date(2025, 6); // July 2025

  get experienceMonths(): number {
    const now = new Date();
    return (
      (now.getFullYear() - this.startDate.getFullYear()) * 12 +
      (now.getMonth() - this.startDate.getMonth())
    );
  }

  isResumeOpen = signal(false);

  openResume() {
    this.isResumeOpen.set(true);
  }

  closeResume() {
    this.isResumeOpen.set(false);
  }

}
