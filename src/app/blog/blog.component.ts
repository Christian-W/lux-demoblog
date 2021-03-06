import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  masterItems: any[] = [];
  masterIsLoading: boolean = false;
  masterSelected: any;

  constructor(public router: Router) {
      this.fillList();
      this.masterSelected = this.masterItems[0];
  }

  // $event entspricht dem selektierten Objekt aus der Masterliste
  loadData($event: any) {
      if ($event) {
        // etwas mit dem Objekt machen (z.B. weitere Daten laden)
        console.log('detail selected', $event);
      }
  }

  loadFurtherEntries() {
      if (this.masterItems.length < 30 && !this.masterIsLoading) {
        this.masterIsLoading = true;
        // Für das Beispiel simulieren wir hier das Laden der Elemente
        setTimeout(() => {
          // weitere Master-Elemente laden, weil der untere Scrollbereich erreicht wurde
          this.fillList();
          this.masterIsLoading = false;
        }, 2000);
      }
  }

  randomDate(date1, date2){
    function randomValueBetween(min, max) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date1 || '01-01-1970'
    var date2 = date2 || new Date().toLocaleDateString()
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()
    if( date1>date2){
        return new Date(randomValueBetween(date2,date1)).toLocaleDateString()
    } else{
        return new Date(randomValueBetween(date1, date2)).toLocaleDateString()

    }
}

  fillList() {
      for (let i = 10; i > 1; --i) {
        this.masterItems.push({
          id: this.masterItems.length,
          title: this.randomDate('01/01/2019', '01/01/2020'),
          icon: 'fa fa-cog',
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris sit. Sapien et ligula ullamcorper malesuada. Nibh tortor id aliquet lectus proin nibh. Pellentesque sit amet porttitor eget. Et ultrices neque ornare aenean euismod elementum. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Nisi est sit amet facilisis magna etiam tempor orci. Id ornare arcu odio ut. Est placerat in egestas erat. Semper risus in hendrerit gravida rutrum quisque non tellus. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Sed faucibus turpis in eu mi. Tellus at urna condimentum mattis pellentesque id.`,
          intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        });
      }
  }

  ngOnInit() {
  }

}
