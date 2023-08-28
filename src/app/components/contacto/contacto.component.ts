import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  
  contactoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl(''),
    mandatario: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required)
  })

  async send(formValue: FormGroup) {
    // emailjs.init('RjgwO398hmsNCPUjK')
    // let response = await emailjs.send("service_64cdrzm", "template_0pb3hmj", {
    //   to_name: 'Alberto',
    //   from_name: `${this.contactoForm.value.nombre} ${this.contactoForm.value.apellidos}`,
    //   from_email: this.contactoForm.value.mandatario,
    //   message: this.contactoForm.value.mensaje
    // })

    console.table(formValue.value)
    // alert('🎇¡Mensaje enviado!🎇  Recibirá respuesta una respuesta en breve 😄')
    this.contactoForm.reset()
  }
}
