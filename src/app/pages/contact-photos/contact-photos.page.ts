import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-photos',
  templateUrl: './contact-photos.page.html',
  styleUrls: ['./contact-photos.page.scss'],
})
export class ContactPhotosPage implements OnInit {
  albumId: number
  album: any
  photos: any

  constructor(private route: ActivatedRoute, private cs: ContactService) { }

  ngOnInit() {
    this.albumId = this.route.snapshot.params.id
    this.loadAlbum(this.albumId)
    this.loadPhotos(this.albumId)
  }

  async loadPhotos(id: number)
  {
    try {
      const response = await this.cs.getPhotos(id)
      this.photos = response
    } catch (error) {
      console.error(error)
    }
  }

  async loadAlbum(id: number)
  {
    try {
      const response = await this.cs.getAlbum(id)
      this.album = response
    } catch (error) {
      console.error(error)
    }
  }
}
