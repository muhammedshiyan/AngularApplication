import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
constructor(private configService: ConfigService) {}
  title = 'Loading...';
  ngOnInit() {
    // Config is guaranteed to be loaded here
    const theme = this.configService.get('theme') || 'default';
    this.title = `Current theme: ${theme}`;
  }
}
