# Fundamentos do Angular 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Principais tipos de Lifecyle do Angular

Vou explicar cada um dos principais lifecycle hooks do Angular e fornecer um exemplo simples para cada um:

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

# Os 4 Tipos de Binding 

No Angular, o binding é um mecanismo que permite a comunicação entre o componente (classe TypeScript) e o template (HTML) de uma aplicação. Existem quatro tipos principais de binding que podem ser usados no Angular: Interpolation, Property Binding, Event Binding e Two-Way Data Binding. Vou explicar cada um deles com exemplos:

1. **Interpolation ({{ }})**:
   - O Interpolation é usado para renderizar valores de propriedades do componente diretamente no template, entre as chaves duplas `{{ }}`.
   - É mais comumente usado para exibir texto dinâmico em seu template.

   Exemplo:

   ```html
   <!-- No componente TypeScript -->
   export class AppComponent {
     message = 'Olá, Angular!';
   }
   
   <!-- No template HTML -->
   <p>{{ message }}</p>
   ```

2. **Property Binding ([property])**:
   - O Property Binding permite que você atribua valores a propriedades de elementos HTML no template com a sintaxe `[property]="expression"`.
   - É útil quando você deseja definir dinamicamente atributos HTML, como `src`, `href`, `disabled`, etc.

   Exemplo:

   ```html
   <!-- No componente TypeScript -->
   export class AppComponent {
     imageUrl = 'https://example.com/image.jpg';
   }
   
   <!-- No template HTML -->
   <img [src]="imageUrl" alt="Imagem">
   ```

3. **Event Binding ([event])**:
   - O Event Binding permite que você responda a eventos do DOM, como cliques de botão, passagens do mouse, etc., e execute funções no componente quando esses eventos ocorrem.
   - A sintaxe é `(event)="expression"`.

   Exemplo:

   ```html
   <!-- No componente TypeScript -->
   export class AppComponent {
     handleClick() {
       console.log('Botão clicado!');
     }
   }
   
   <!-- No template HTML -->
   <button (click)="handleClick()">Clique em mim</button>
   ```

4. **Two-Way Data Binding ([(ngModel)])**:
   - O Two-Way Data Binding permite que você sincronize automaticamente os valores entre um campo de entrada HTML e uma propriedade do componente. Isso significa que as alterações no campo de entrada são refletidas automaticamente na propriedade do componente e vice-versa.
   - É comumente usado em campos de formulário.

   Exemplo:

   ```html
   <!-- No componente TypeScript -->
   export class AppComponent {
     username = 'usuário';

     updateUsername(newUsername: string) {
       this.username = newUsername;
     }
   }
   
   <!-- No template HTML -->
   <input [(ngModel)]="username" (ngModelChange)="updateUsername($event)">
   <p>Nome de usuário: {{ username }}</p>
   ```

Lembre-se de que, para usar o Two-Way Data Binding com `ngModel`, você deve importar o módulo `FormsModule` no seu módulo Angular e adicioná-lo à lista de imports. Além disso, você precisa importar o `FormsModule` no seu arquivo de módulo e adicioná-lo à lista de `imports`.

Esses são os quatro principais tipos de binding no Angular, e cada um deles desempenha um papel importante na interação entre componentes e templates em aplicativos Angular. Escolha o tipo de binding apropriado para a tarefa que você deseja realizar em seu aplicativo.

# Importando frameworks de estilo no Angular 

Para importar o Bootstrap em um projeto Angular, você pode seguir os seguintes passos:

1. **Instale o Bootstrap via npm**:
   Certifique-se de que você tenha o Bootstrap instalado em seu projeto Angular. Você pode fazê-lo usando o npm (Node Package Manager) com o seguinte comando:

   ```shell
   npm install bootstrap
   ```
   Usando Yarn:
   ```shell
   yarn add bootstrap
   ```

   Isso instalará o Bootstrap como uma dependência do seu projeto.

2. **Importe os estilos do Bootstrap**:
   Para importar os estilos do Bootstrap em seu projeto Angular, vá para o arquivo de estilos global do seu projeto, que geralmente é `styles.scss` ou `styles.css` localizado na pasta `src`. Em seguida, adicione a seguinte linha de importação:

   ```css
   @import '~bootstrap/dist/css/bootstrap.min.css';
   ```

   Certifique-se de que esta importação seja feita no início do arquivo de estilos para garantir que os estilos do Bootstrap sejam aplicados corretamente.

3. **Opcionalmente, importe os scripts do Bootstrap**:
   Se você planeja usar componentes interativos do Bootstrap que requerem JavaScript, como modais, carrosséis, etc., você também pode importar os scripts do Bootstrap. Para fazer isso, vá para o arquivo `angular.json` do seu projeto e adicione os caminhos para os scripts do Bootstrap nas seções `styles` e `scripts`:

   ```json
   "styles": [
     "src/styles.scss",
     "node_modules/bootstrap/dist/css/bootstrap.min.css"
   ],
   "scripts": [
     "node_modules/jquery/dist/jquery.min.js",
     "node_modules/bootstrap/dist/js/bootstrap.min.js"
   ]
   ```

   Lembre-se de que você também precisará ter o jQuery instalado como uma dependência para os scripts do Bootstrap funcionarem corretamente.

Depois de seguir esses passos, o Bootstrap estará disponível em seu projeto Angular, e você poderá usar seus estilos e componentes interativos conforme necessário. Certifique-se de importar apenas os componentes do Bootstrap que você realmente precisa para manter seu aplicativo o mais leve possível.

Para instalar as dependências do jQuery para usar os scripts do Bootstrap no Angular, você pode seguir os seguintes passos:

1. **Instale o jQuery**:
   Use o npm ou o Yarn para instalar o jQuery como uma dependência do seu projeto. Você pode escolher um dos seguintes comandos, dependendo de qual gerenciador de pacotes você está usando:

   Usando npm:
   ```shell
   npm install jquery
   ```

   Usando Yarn:
   ```shell
   yarn add jquery
   ```

2. **Configure o Angular para usar o jQuery**:
   Abra o arquivo `angular.json` no seu projeto Angular. Nele, você deve adicionar o caminho para o jQuery na seção "scripts" para que o Angular saiba onde encontrar o jQuery. Certifique-se de que o caminho corresponda ao local onde o jQuery está instalado no seu projeto.

   ```json
   "scripts": [
     // ... outros scripts ...
     "node_modules/jquery/dist/jquery.min.js"
   ]
   ```

3. **Certifique-se de que o Bootstrap está configurado**:
   Como você já instalou o Bootstrap e configurou seus estilos e scripts, certifique-se de que o Bootstrap seja capaz de usar o jQuery que você instalou. Os scripts do Bootstrap dependem do jQuery para funcionar corretamente.

4. **Importe o jQuery quando necessário**:
   Em componentes ou módulos onde você planeja usar recursos interativos do Bootstrap que dependem do jQuery, você pode importar o jQuery conforme necessário. Por exemplo:

   ```typescript
   import * as $ from 'jquery';

   // Use $ para acessar as funcionalidades do jQuery
   $(document).ready(function () {
     // Seu código jQuery/Bootstrap aqui
   });
   ```

Após seguir esses passos, você terá o jQuery configurado corretamente em seu projeto Angular para ser usado pelos scripts do Bootstrap que dependem dele. Certifique-se de importar o jQuery somente onde for necessário e de acordo com as melhores práticas de organização do seu código.
