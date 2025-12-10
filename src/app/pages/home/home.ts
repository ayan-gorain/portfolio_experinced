import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  startDate = new Date(2025, 6); // July 2025 (month is 0-based)

  get experienceMonths(): number {
    const now = new Date();
    const months =
      (now.getFullYear() - this.startDate.getFullYear()) * 12 +
      (now.getMonth() - this.startDate.getMonth());
    return months < 0 ? 0 : months;
  }

}
