import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent implements OnInit {
  snackBarMessage = 'Added Successfully!!! 🍕';
  textColor = 'green';

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.snackBarMessage = data;
    if (data.includes('Success')) {
      this.textColor = 'rgb(45, 243, 39)';
    } else this.textColor = 'rgb(255, 8, 0)';
  }

  ngOnInit(): void {}
}
