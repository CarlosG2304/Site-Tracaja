import { MailService } from './../mail.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  nome: string = '';
  email: string = '';
  mensagem: string = '';
  assunto: string = '';
  processo = false

  constructor(private mailService: MailService,
    private messageService: MessageService) { }

  enviarEmail(): void {
    this.assunto = `Email enviado pelo site tracaja.com.br. Autor ${this.nome}`;

    this.processo = true

    this.mailService.enviar(this.assunto, this.email, this.mensagem).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', detail: 'Email enviado com sucesso!' })

        this.processo = false
        this.nome = '';
        this.email = '';
        this.mensagem = '';
      },
      error: (err: Error) => {
        this.messageService.add({
          severity: 'error', detail: 'Não foi possivel enviar o email! Tente mais tarde!'
        })
        this.processo = false
      }

    });


  }
}
