import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { merge } from 'rxjs';
import { DataDateAccording } from 'src/app/model/data-date-according';
import { GlobalDataSummary } from 'src/app/model/global-data';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.css']
})
export class CountriesComponent implements OnInit {

  data : GlobalDataSummary[];
  countries : string[] = [];
  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  selectedCountryData : DataDateAccording[]; 
  dateWiseData ;
  loading = true;
  options: {
    height : 500, 
    animation:{
      duration: 1000,
      easing: 'out',
    },
  }
 
  constructor(private service : DataService) { }

  ngOnInit(): void {

    merge(
      this.service.getDateWiseData().pipe(
        map(result=>{
          this.dateWiseData = result;
        })
      ), 
      this.service.getGlobalData().pipe(map(result=>{
        this.data = result;
        this.data.forEach(cs=>{
          this.countries.push(cs.country)
        })
      }))
    ).subscribe(
      {
        complete : ()=>{
         this.updateValues('India')
         this.loading = false;
        }
      }
    )
    
    

  }

  updateChart(){
    let dataTable = [];
    dataTable.push(["Date" , 'Cases'])
    this.selectedCountryData.forEach(cs=>{
      dataTable.push([cs.date , cs.cases])
    })

   
  }

  updateValues(country : string){
    console.log(country);
    this.data.forEach(cs=>{
      if(cs.country == country){
        this.totalActive = cs.active
        this.totalDeaths = cs.deaths
        this.totalRecovered = cs.recovered
        this.totalConfirmed = cs.confirmed
      }
    })

    this.selectedCountryData  = this.dateWiseData[country]
    // console.log(this.selectedCountryData);
    this.updateChart();
    
  }

}
