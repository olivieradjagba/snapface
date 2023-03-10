import { FaceSnapService } from './../services/face-snap.service';
import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  isSnaped!: boolean;
  snapText!: string;

  constructor(
    private faceSnapService: FaceSnapService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isSnaped = false;
    this.snapText = 'Oh snap';
  }

  onAddSnap() {
    if (!this.isSnaped) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id);
      this.snapText = 'Oups unsnap !';
    } else {
      //this.faceSnapService.snapFaceSnapById(this.faceSnap.id, false);
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapText = 'Oh snap !';
    }
    this.isSnaped = !this.isSnaped;
  }

  onFaceSnapView() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
