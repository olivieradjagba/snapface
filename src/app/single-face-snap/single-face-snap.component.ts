import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapService} from "../services/face-snap.service";

@Component({
  selector: "app-single-face-snap",
  templateUrl: "./single-face-snape.component.html",
  styleUrls: ["./single-face-snape.component.scss"],
})
export class SingleFaceSnapeComponent implements OnInit {
  faceSnap!: FaceSnap;

  isSnaped!: boolean;
  snapText!: string;

  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.isSnaped = false;
    this.snapText = "Oh snap";
    const faceSnapId = +this.route.snapshot.params["id"];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onAddSnap() {
    if (!this.isSnaped) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id);
      this.snapText = "Oups unsnap !";
    } else {
      //this.faceSnapService.snapFaceSnapById(this.faceSnap.id, false);
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "unsnap");
      this.snapText = "Oh snap !";
    }
    this.isSnaped = !this.isSnaped;
  }
}
