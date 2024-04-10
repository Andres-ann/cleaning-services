import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BannerContactComponent } from '../../components/banner-contact/banner-contact.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    BannerContactComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
