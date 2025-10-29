# Projeto To-Do List (Painel de Tarefas Interativo)

Um painel de tarefas (To-Do list) interativo e moderno, construído com **HTML5, CSS3 e JavaScript puro (Vanilla JS)**. Este projeto foi desenvolvido como material didático principal para um workshop de introdução ao desenvolvimento web.

O foco é demonstrar os conceitos fundamentais de manipulação do DOM, gerenciamento de estado (com `localStorage`) e design moderno (com Variáveis CSS para temas claro/escuro).

![[ADICIONE AQUI UM GIF OU SCREENSHOT DO PROJETO]](link-para-sua-imagem.gif)

---

## 🚀 Para Meu Repositório Pessoal

Este projeto serve como um *case* prático de aplicação de fundamentos de front-end sem o uso de frameworks. Ele demonstra competência nas tecnologias base da web para criar uma aplicação de página única (SPA) funcional e esteticamente agradável.

### Funcionalidades Implementadas

* **Design Responsivo:** Interface limpa que se adapta a diferentes tamanhos de tela.
* **Adição de Tarefas via Modal:** Um botão flutuante (FAB) abre um modal para entrada de novas tarefas (categoria, título, descrição, status).
* **Manipulação Dinâmica do DOM:** As tarefas são criadas e inseridas na coluna correta em tempo real usando JavaScript puro (`document.createElement`, `appendChild`).
* **Temas Claro e Escuro (Dark/Light Mode):** Sistema de temas implementado de forma eficiente usando Variáveis CSS (`:root`) e um *toggle switch*.
* **Persistência de Dados:** O tema escolhido (claro ou escuro) é salvo no `localStorage` do navegador, "lembrando" a preferência do usuário entre as sessões.

### Tecnologias e Conceitos Aplicados

* **HTML5:** Estruturação semântica (`<aside>`, `<main>`, `<nav>`, `<form>`).
* **CSS3:**
    * **CSS Grid** e **Flexbox** para layout.
    * **Variáveis CSS (Custom Properties)** para um sistema de temas robusto.
    * **Transições e Animações** para interações suaves (hover, abertura de modal).
    * **Seletores Avançados** (`:root`, `body[data-theme="dark"]`).
* **JavaScript (ES6+):**
    * **Manipulação do DOM:** `getElementById`, `createElement`, `appendChild`, `classList`.
    * **Tratamento de Eventos:** `addEventListener` (para `click`, `submit`, `change`).
    * **Funções e Lógica:** Organização do código em funções reutilizáveis.
    * **Web APIs:** `localStorage` para persistência de dados.

---

## 🧑‍💻 Para Alunos e Colaboradores

Este repositório contém o código-fonte final do projeto desenvolvido no "Workshop de Introdução ao Desenvolvimento Web".

### Como Executar

Não há necessidade de instalação ou build. Como este projeto usa apenas HTML, CSS e JS puros, você pode simplesmente:

1.  Clonar este repositório:
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  Navegar até a pasta do projeto:
    ```bash
    cd seu-repositorio
    ```
3.  Abrir o arquivo `index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

(Recomendação: Para uma experiência de desenvolvimento melhor, use a extensão **"Live Server"** no VS Code, que atualiza a página automaticamente a cada alteração.)

### Estrutura do Projeto

O projeto é organizado de forma clara, separando responsabilidades:

to-do-list/ 
index.html → A "estrutura" (esqueleto) da página.
style.css → O "estilo" (design, cores, layout).
script.js → O "cérebro" (interatividade, lógica, eventos).


### Conceitos-Chave para Estudo

1.  **`style.css` (Linha 5-70): Variáveis CSS**
    Observe como todas as cores e fundos são definidos em `:root` e depois reaproveitados com `var(--nome-da-variavel)`. Veja como `body[data-theme="dark"]` apenas *redefine* essas variáveis, mudando o tema do site inteiro instantaneamente.

2.  **`script.js` (Linha 100-117): `handleAddTask(event)`**
    Esta é a função principal. Note como ela:
    * Pega os valores (`.value`) dos inputs.
    * Cria um novo `<div>` (`document.createElement`).
    * Monta o HTML interno do card usando *Template Literals* (crases ``).
    * "Pendura" o novo card na coluna correta (`correctColumn.appendChild(taskCard)`).

3.  **`script.js` (Linha 120-150): `loadTheme()` e `toggleTheme()`**
    Aqui está a lógica do modo escuro. `localStorage.setItem` salva a escolha, e `localStorage.getItem` a recupera. O `document.body.setAttribute('data-theme', ...)` é o que faz o CSS aplicar as variáveis do tema escuro.