import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges, DoCheck, OnDestroy,AfterViewInit,AfterContentInit,AfterContentChecked,AfterViewChecked{
  title = 'Robson';

  imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png";

  /**
   * Tipos de Data Biding
   */

  // 4 Tipos
  // interpolação {{title}} // Voce altera a variavel atraves da interpolação "{{variavel}}"

  // Property Bind - serve para usar uma propriedade do HTML
  // Exemplo <img src=""> para uma variavel (no caso imgUrl) <img [src]="imgUrl"> e coloca o link na varieval

  // Event binding <button(click)="funcao()"> Clicar</button> serve para chamar uma função

  mensagem(){
    alert("Você foi hackeado! Hahaha")
  }

  // Two-way Data Binding - Função que faça uma mudança em dois componentes do HTML ao mesmo tempo
  // ngModel - altera o input junto com o valor da variavel
  // Exemplo: [(ngModal)]="title" ficaria <input [(ngModel)]="title" />
  //Obs: Necessita colocar nos "app.module.ts" a importação do FormsModule

  // é o primeiro componente que é iniciado na hierarquia dos componentes Angular
  constructor(){
    console.log("Componente Construtor")
  }

  ngOnInit(): void{
    console.log("Componente OnInit")
    this.title = "Robson";
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("Componente OnChanges")
  }

  ngDoCheck(): void {
      console.log("Componente DoCheck")
  }

  mudarTexto(){
    this.title += 2
  }

  ngAfterViewInit(): void {
    console.log("Componente ViewInit")
  }

  ngOnDestroy(): void {
    console.log("OnDestroy")
  }

  ngAfterContentInit(): void {
    console.log("Componente ContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("Componente ContentChecked")
  }

  ngAfterViewChecked(): void {
    console.log("Componente ViewChecked")
  }
}

/**
 * Claro, vou explicar cada um dos principais lifecycle hooks do Angular e fornecer um exemplo simples para cada um:

1. **ngOnChanges**:
   - Chamado sempre que um valor de entrada (input) do componente muda.
   - Útil para responder a alterações nas propriedades de entrada.

   ```typescript
   import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

   @Component({
     selector: 'app-my-component',
     template: '<p>{{ message }}</p>',
   })
   export class MyComponent implements OnChanges {
     @Input() message: string;

     ngOnChanges(changes: SimpleChanges) {
       if (changes.message) {
         console.log(`Valor de 'message' alterado para ${changes.message.currentValue}`);
       }
     }
   }
   ```

2. **ngOnInit**:
   - Chamado uma vez após a criação do componente.
   - Útil para inicializações iniciais, como buscar dados de um serviço.

   ```typescript
   import { Component, OnInit } from '@angular/core';

   @Component({
     selector: 'app-my-component',
     template: '<p>{{ message }}</p>',
   })
   export class MyComponent implements OnInit {
     message: string;

     ngOnInit() {
       this.message = 'Olá, Angular!';
     }
   }
   ```

3. **ngDoCheck**:
   - Chamado sempre que o Angular executa uma verificação de detecção de mudanças.
   - Útil para executar ações personalizadas quando as propriedades do componente são verificadas quanto a mudanças.

   ```typescript
   import { Component, DoCheck } from '@angular/core';

   @Component({
     selector: 'app-my-component',
     template: '<p>{{ message }}</p>',
   })
   export class MyComponent implements DoCheck {
     message: string;

     ngDoCheck() {
       console.log('Verificando mudanças no componente');
     }
   }
   ```

4. **ngAfterViewInit**:
   - Chamado após a visualização do componente ter sido totalmente inicializada.
   - Útil quando você precisa interagir com o DOM ou com elementos filhos após a inicialização.

   ```typescript
   import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

   @Component({
     selector: 'app-my-component',
     template: '<p #myParagraph>{{ message }}</p>',
   })
   export class MyComponent implements AfterViewInit {
     @ViewChild('myParagraph') myParagraph: ElementRef;

     ngAfterViewInit() {
       this.myParagraph.nativeElement.textContent = 'Texto atualizado após a visualização ser inicializada.';
     }
   }
   ```

5. **ngOnDestroy**:
   - Chamado antes de um componente ser destruído, seja ao navegar para outra página ou quando o componente é removido da árvore de componentes.
   - Útil para realizar ações de limpeza ou destruição antes que o componente seja removido.

   ```typescript
   import { Component, OnDestroy } from '@angular/core';

   @Component({
     selector: 'app-my-component',
     template: '<p>{{ message }}</p>',
   })
   export class MyComponent implements OnDestroy {
     ngOnDestroy() {
       console.log('O componente está sendo destruído. Faça ações de limpeza aqui.');
     }
   }
   ```

Esses são os principais lifecycle hooks do Angular, e cada um deles desempenha um papel importante na interação e no controle do ciclo de vida dos seus componentes Angular. Eles permitem que você realize ações específicas em momentos chave durante o ciclo de vida do componente.
 */

