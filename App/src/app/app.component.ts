import { Component,OnInit } from '@angular/core';
import { MenuModel} from '../Models/menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 
  constructor() {
    
  }
  Menu:Array<{Segmento:string,Items:Array<MenuModel>}>;

  initMenu(){
    this.Menu = [
      {
        Segmento:"Info",
        Items: [new MenuModel("Inicio","/","folder")]
      }
    ]
  }

  ngOnInit(): void {
    this.initMenu();
    console.log(this.Menu);
  }

}
