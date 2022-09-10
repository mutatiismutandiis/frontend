import { Component, OnInit } from '@angular/core';
import { experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: experience = new experience("", "", "", "");
  
  constructor(public experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.getExperience().subscribe(data => {this.experience = data})
  }
}
