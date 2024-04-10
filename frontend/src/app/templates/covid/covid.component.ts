import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BtnContactComponent } from '../../components/btn-contact/btn-contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BannerContactComponent } from '../../components/banner-contact/banner-contact.component';

@Component({
  selector: 'app-covid',
  standalone: true,
  imports: [
    NavbarComponent,
    BtnContactComponent,
    FooterComponent,
    BannerContactComponent
  ],
  templateUrl: './covid.component.html',
  styleUrl: './covid.component.css'
})
export class CovidComponent {

}
