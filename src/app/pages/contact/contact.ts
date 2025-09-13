import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // Aquí se implementaría el envío del formulario
    console.log('Formulario enviado:', this.formData);
    alert('¡Mensaje enviado! Te contactaré pronto.');
    this.formData = { name: '', email: '', subject: '', message: '' };
  }
}
