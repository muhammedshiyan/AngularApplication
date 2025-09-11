import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Gallery } from '../gallery/gallery';
import { Testimonials } from '../testimonials/testimonials';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-landing',
    standalone: true,   
  imports: [
Header,
About,
Gallery,
Contact,
Footer,
Testimonials,
Hero
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {

}
