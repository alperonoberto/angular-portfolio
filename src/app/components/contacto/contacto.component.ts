/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import {
  EMAIL_SERVICE_PUBLIC_KEY,
  EMAIL_SERVICE_TEMPLATE,
  EMAIL_VALIDATION_API_KEY,
} from '../../../environment/environment';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
// eslint-disable-next-line prettier/prettier
export class ContactoComponent {
  constructor() {}

  isLoading: boolean = false;

  contactoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl(''),
    mandatario: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required),
  });

  async send(formValue: FormGroup) {
    emailjs.init('RjgwO398hmsNCPUjK');
    let response = await emailjs.send(
      EMAIL_SERVICE_PUBLIC_KEY,
      EMAIL_SERVICE_TEMPLATE,
      {
        to_name: 'Alberto',
        from_name: `${this.contactoForm.value.nombre} ${this.contactoForm.value.apellidos}`,
        from_email: this.contactoForm.value.mandatario,
        message: this.contactoForm.value.mensaje,
      }
    );

    this.isLoading = false;
    alert('🎇 ¡Mensaje enviado! 🎇  Recibirás una respuesta en breve 😄');
    this.contactoForm.reset();
  }

  validateEmail(email: string | null) {
    const options = { method: 'GET' };
    let url = `https://emailvalidation.abstractapi.com/v1?api_key=${EMAIL_VALIDATION_API_KEY}&email=${email}`;
    this.isLoading = true;

    fetch(url, options)
      .then(response => response.json())
      .then(response => {
        if (response.is_valid_format.value) {
          this.send(this.contactoForm);
        } else {
          this.isLoading = false;
          alert(
            '❌ Algo no ha ido como se esperaba... Revisa tu dirección de correo 🤞'
          );
        }
      })
      .catch(err => console.error(err));
  }
}
