import { Component, OnInit} from '@angular/core';
// import { ThumbnailService } from '../../thumbnail.service';
import { CommonModule } from '@angular/common';
import { FilterpipePipe } from '../../filterpipe.pipe';
import { FormsModule } from '@angular/forms';


interface ListItem {
  name: string;
  url: string;
  img : string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FilterpipePipe, FormsModule,],
  templateUrl: './card.component.html',
   styleUrl: './card.component.css',
})
export class CardComponent {
  searchTerm : string = '';
  Lists : ListItem[] = [
     { name: "E-Purchasing", 
      url: "https://portalv3.rdpawnshop.com/EPurchasingV2/Login", 
      img: "e-purchase.png"},
    { name: "KYC",
       url: "https://portalv3.rdpawnshop.com/KYC/KYC/Login",
        img: "kyc.png" },
    { name: "Online Pledge",
       url: "https://portalv3.rdpawnshop.com/OnlinePledge/Account",
         img: "Online-Pledge.png"},
    { name: "OPAR",
       url: "https://portalv3.rdpawnshop.com/OPAR/Account/Login?ReturnUrl=%2fOPAR",
        img: "OPAR.png"},
    { name: "RD Operation V2",
       url: "https://portalv3.rdpawnshop.com/RDOperationV2/Account/Login.aspx",
         img: "RDOPSV2.png"},
    { name: "RD Operation V3",
       url: "https://portalv2.rdpawnshop.com/RDOperationV3",
         img: "RDOPSV3.png" },    
         
  ];


  filteredLists = this.Lists; 

  filterItems() {
    this.filteredLists = this.Lists.filter(item => 
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );  
}
}


