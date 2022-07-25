import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApplyModel } from 'src/app/model/applyModel';

@Component({
  selector: 'app-dialog-content-example',
  templateUrl: './dialog-content-example.component.html',
  styleUrls: ['./dialog-content-example.component.scss']
})
export class DialogContentExampleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ApplyModel[]) {}

  ngOnInit(): void {
  }

}
