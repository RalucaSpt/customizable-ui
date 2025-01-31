import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    { title: 'Web Development', description: 'We build responsive and modern websites.' },
    { title: 'SEO Optimization', description: 'Boost your website ranking with our SEO strategies.' },
    { title: 'Graphic Design', description: 'Creative and professional design solutions.' },
    { title: 'Digital Marketing', description: 'Increase your brand awareness with our marketing campaigns.' },
  ];

}
