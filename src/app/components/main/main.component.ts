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

  //List items of RD desktop apps
  RDLinkList : Links[] = [
    {
      RDserviceName : "CRDR",
      RDserviceUrl: "https://portalv3.rdpawnshop.com/app/winapplication/onlinecrdr/publish.htm "
    },
    {
      RDserviceName : "REMACT",
      RDserviceUrl: "https://portalv3.rdpawnshop.com/app/winapplication/remact/publish.htm"
    },
    {
      RDserviceName : "ERP Viewer",
      RDserviceUrl: "https://portalv3.rdpawnshop.com/app/winapplication/ERP_CRDRViewer/publish.htm"
    },
    {
      RDserviceName : "DTR",
      RDserviceUrl: "https://portalv3.rdpawnshop.com/app/WinApplication/edtr/publish.htm"
    },
    {
      RDserviceName : "POS",
      RDserviceUrl: "https://portalv3.rdpawnshop.com/app/winapplication/ecr/publish.htm"
    },
    {
      RDserviceName : "RDPadala",
      RDserviceUrl: "https://portalv3.rdpawnshop.com/app/winapplication/RDCashOpsV3/publish.htm"
    },
    {
      RDserviceName : "OSS",
      RDserviceUrl: "https://portalv3.rdpawnshop.com/app/winapplication/onlinesales/publish.htm"
    },
    {
      RDserviceName : "KRA",
      RDserviceUrl: "https://portalv3.rdpawnshop.com/app/winapplication/kra/publish.htm"
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
