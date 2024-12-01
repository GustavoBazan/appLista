import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ITecnologias } from '../model/ITecnologias';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) {}

  listaTecnologias:  ITecnologias[] = [
    {
      nome: 'Inteligência Artificial',
      descricao: 'Sistema de Inteligência criado a partir de Machine Learning.',
      generos: ['Ciência da Computação'],
      interesse : 8,
      acessibilidade: 0,
      thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvH7VEir3DioX0ZMb7rnkzmdXZg4eN6mQcZQ&usqp=CAU',
      favorito: false
    },
    {
      nome: 'Realidade Virtual',
      descricao: 'Interface capaz de enganar os sentidos de um usuário por meio de um ambiente virtual.',
      generos: ['VR/AR'],
      interesse : 7,
      acessibilidade: 0,
      thumb: 'https://dm0fehhuxv6f6.cloudfront.net/wp-content/uploads/2022/09/29115426/oculos-vr.webp',
      favorito: false
    },
    {
      nome: 'Computação Quântica',
      descricao: 'Desenvolvimento de algoritmos processados por sistemas quânticos.',
      generos: ['Ciência da Computação'],
      interesse : 7,
      acessibilidade: 0,
      thumb: 'https://noomis-files-hmg.s3.amazonaws.com/content/a3554a10-f613-11ec-97ae-af12fa30a5ad.jpeg',
      favorito: false
    },
    {
      nome: 'Robótica',
      descricao: 'Mecanismos automáticos que utilizam de circuitos integrados para realizarem atividades e movimentos humanos',
      generos: ['Eletrônica'],
      interesse : 8,
      acessibilidade: 0,
      thumb: 'https://static.wixstatic.com/media/5c2c12_3048f39f70cc442f8b69b0b25e1cb0f9~mv2.jpeg/v1/fill/w_640,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5c2c12_3048f39f70cc442f8b69b0b25e1cb0f9~mv2.jpeg',
      favorito: false
    },
    {
      nome: 'Aviação',
      descricao: 'Sistema de navegação aérea que utiliza aparelhos mais pesados que o ar.',
      generos: ['Transporte'],
      interesse : 6,
      acessibilidade: 0,
      thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQ47kBM2aIvSXiscqZd6cOfcbbELig7njjBNYH3dsnlJoMrex5f5BLFwm7IQLYeubkpY&usqp=CAU',
      favorito: false
    },
    {
      nome: 'Telefonia Móvel (5G)',
      descricao: 'Rede de telecomunicações projetada para o provisionamento de serviços.',
      generos: ['Comunicação'],
      interesse : 7,
      acessibilidade: 0,
      thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDzWpr7wq1PtPD3wmYAe-yxSccAkILkK17RTDpJRFtHQ5woQqUkUkaxEP2lcD8eqC4Hhg&usqp=CAU',
      favorito: false
    },
    {
      nome: 'Computação Gráfica',
      descricao: 'Desenvolvimento de técnicas e algoritmos para a geração de imagens através do computador.',
      generos: ['Ciência da Computação'],
      interesse : 8,
      acessibilidade: 0,
      thumb: 'https://www.crtrj.gov.br/wp-content/uploads/2021/04/computa%C3%A7%C3%A3o-gr%C3%A1fica-1.jpg',
      favorito: false
    },
  ];

  exibirTecnologia(item: ITecnologias){
    const NavigationExtras: NavigationExtras = {state:{paramItem:item}};
    this.router.navigate(['tecnologia-detalhe'], NavigationExtras);
  }

  async exibirAlertaFavorito(item: ITecnologias) {
    if (item.favorito == false) {
      const alert = await this.alertController.create({
        header: 'Meus Favoritos',
        message: 'Deseja realmente favoritar a tecnologia?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              item.favorito=false;
            }
          },
          {
            text: 'Favoritar',
            handler: () => {
              item.favorito=true;
              this.apresentarToast();
            }
          }
        ]
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Meus Favoritos',
        message: 'Deseja realmente retirar dos favoritos?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              item.favorito=true;
            }
          },
          {
            text: 'Retirar',
            handler: () => {
              item.favorito=false;
              this.apresentarToast();
            }
          }
        ]
      });
      await alert.present();
    }

  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: "Configuração adicionada com sucesso!",
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
