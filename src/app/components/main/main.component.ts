import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterpipePipe } from '../../pipes/filterpipe.pipe';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { LoadingService } from '../../services/loading/loading.service';



interface ListItem {
  name: string;
  url: string;
  img : string;
}

interface Links {
  RDserviceName: string;
  RDserviceUrl: string;
}


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FilterpipePipe, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  isLoading = false;
  searchTerm : string = '';
  
  //List items of RD Webapps links for the card loop
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

  //List items of RD desktop apps
  RDLinkList : Links[] = [
    {
      RDserviceName : "CRDR",
      RDserviceUrl: "#"
    },
    {
      RDserviceName : "REMACT",
      RDserviceUrl: "#"
    },
    {
      RDserviceName : "ERP Viewer",
      RDserviceUrl: "#"
    },
    {
      RDserviceName : "DTR",
      RDserviceUrl: "#"
    },
    {
      RDserviceName : "POS",
      RDserviceUrl: "#"
    },
    {
      RDserviceName : "RDPadala",
      RDserviceUrl: "#"
    },
    {
      RDserviceName : "OSS",
      RDserviceUrl: "#"
    },
    {
      RDserviceName : "KRA",
      RDserviceUrl: "#"
    }
  ];

  RDServiceLinks = this.RDLinkList;

  filteredLists = this.Lists;

  filterItems() {
    this.filteredLists = this.Lists.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
}
}
