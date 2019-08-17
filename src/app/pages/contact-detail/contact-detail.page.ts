import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.page.html',
  styleUrls: ['./contact-detail.page.scss'],
})
export class ContactDetailPage implements OnInit {
  contactId: number
  contact: any
  albums: any

  constructor(private route: ActivatedRoute, private cs: ContactService) { }

  ngOnInit() {
    this.contactId = this.route.snapshot.params.id
    this.loadContact(this.contactId)
    this.loadAlbums(this.contactId)
    console.log(this.contactId)
  }

  async loadContact(id: number)
  {
    try{
    const response = await this.cs.getContact(id)
    this.contact = response
    }catch(error){
      console.error(error)
    }
  }

  async loadAlbums(id: number)
  {
    try{
    const response = await this.cs.getAlbums(id)
    this.albums = response
    }catch(error){
      console.error(error)
    }
  }

}
