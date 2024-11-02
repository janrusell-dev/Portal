import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterpipePipe } from '../../filterpipe.pipe';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FaqsComponent } from "../faqs/faqs.component";




interface ListItem {
  name: string;
  url: string;
  img : string;
}


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FilterpipePipe, FormsModule, NavbarComponent, FooterComponent, FaqsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  searchTerm : string = '';
  Lists : ListItem[] = [
    { name: "E-Purchasing",
      url: "#",
      img: "e-purchase.png"},
    { name: "KYC",
        url: "#",
        img: "kyc.png" },
        { name: "Online Pledge",
          url: "#",
          img: "Online-Pledge.png"},
          { name: "OPAR",
            url: "#",
            img: "OPAR.png"},
            { name: "RD Operation V2",
              url: "#",
              img: "RDOPSV2.png"},
              { name: "RD Operation V3",
                 url: "#",
                   img: "RDOPSV3.png" },
                   
  ];


  filteredLists = this.Lists;

  filterItems() {
    this.filteredLists = this.Lists.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
}


}
