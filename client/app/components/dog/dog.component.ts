import { Component, OnInit } from '@angular/core';
import { DogService } from '../../dog.service';
import { Dog } from '../../../shared/models/dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {

  dogList: Dog[];
  constructor(private dogServer: DogService) { }

  ngOnInit(): void {
    this.dogServer.getDogs().subscribe(dogs => {
      this.dogList = dogs;
    });
  }

}
