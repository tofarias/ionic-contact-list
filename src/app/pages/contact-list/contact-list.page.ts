import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {
  contacts: any
  searchText: string

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    setTimeout( ()=> {
      this.loadContacts()
    }, 2000)
    
  }

 async loadContacts(){
    try {
      console.log('Carregando contatos...')
      this.contacts = await this.contactService.getContacts()
      console.log()
    } catch (error) {
      console.log(error)
    }
  }

}
