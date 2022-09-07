import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Francis',
      description: 'A best father',
      imageUrl:
        'https://media.istockphoto.com/vectors/cheerful-smiling-laughing-father-and-son-walking-together-talking-vector-id935366492',
      createdDate: new Date(),
      snaps: 200,
      location: 'Cotonou',
    },
    {
      id: 2,
      title: 'Minou',
      description: 'A beaautiful cat',
      imageUrl:
        'https://th.bing.com/th/id/R.536e1b80b84b5263b12fd6fc1ba980d1?rik=bmDAMJwpYG2nbA&riu=http%3a%2f%2f4everstatic.com%2fpictures%2f850xX%2fanimals%2fcats%2fcat-163558.jpg&ehk=U9MtMaWgARHdykJkuJdzMeTcY8hHzsacDRL2rtOtVA0%3d&risl=&pid=ImgRaw&r=0',
      createdDate: new Date(),
      snaps: 0,
    },
    {
      id: 3,
      title: 'Nature',
      description: 'A beautiful nature',
      imageUrl:
        'https://th.bing.com/th/id/R.65a49fec6cd86f7966433cc6c17346e2?rik=zIHyessVj%2f%2fBJg&pid=ImgRaw&r=0',
      createdDate: new Date(),
      snaps: 0,
      location: 'Calavi',
    },
  ];

  getAllFaceSnaps() {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (faceSnap) {
      return faceSnap;
    }
    throw new Error('FaceSnap not found');
  }

  /*snapFaceSnapById(faceSnapId: number, isSnap: boolean = true): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    isSnap ? faceSnap.snaps++ : faceSnap.snaps--;
  }*/
  // OR
  snapFaceSnapById(
    faceSnapId: number,
    snapType: 'snap' | 'unsnap' = 'snap'
  ): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
