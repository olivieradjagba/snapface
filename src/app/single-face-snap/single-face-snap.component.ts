import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapService} from "../services/face-snap.service";

@Component({
  selector: "app-single-face-snap",
  templateUrl: "./single-face-snap.component.html",
  styleUrls: ["./single-face-snap.component.scss"],
})

export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

  isSnapped!: boolean;
  snapText!: string;

  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.isSnapped = false;
    this.snapText = "Oh snap";
    const faceSnapId = +this.route.snapshot.params["id"];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onAddSnap() {
    if (!this.isSnapped) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id);
      this.snapText = "Ops unsnap !";
    } else {
      //this.faceSnapService.snapFaceSnapById(this.faceSnap.id, false);
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "unsnap");
      this.snapText = "Oh snap !";
    }
    this.isSnapped = !this.isSnapped;
  }
}
