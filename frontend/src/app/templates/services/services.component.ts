import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BannerContactComponent } from '../../components/banner-contact/banner-contact.component';
import { BtnContactComponent } from '../../components/btn-contact/btn-contact.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    NavbarComponent,
    BtnContactComponent,
    FooterComponent,
    BannerContactComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
