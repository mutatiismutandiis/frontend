import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  person: person = new person("", "", "", "");
  
  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPerson().subscribe(data => {this.person = data})
  }

}
