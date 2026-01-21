# layout_calendar

Projeto de calendário desenvolvido como parte da tarefa da [Mate Academy](https://mate.academy/).

LINK DE DWMONSTRAÇÃO: 🔗 layout-calendar-ivanivaldo.surge.sh
---

##  Objetivo

Criar um layout de calendário usando apenas **HTML** e **SCSS**, atendendo aos seguintes requisitos:

- Estrutura semântica utilizando **Flexbox**;
- Estilização com metodologia **BEM** e SCSS modularizado;
- Uso do pseudo-elemento `::before` para inserir os números dos dias;
- Geração dinâmica dos 31 dias com `@for` no SCSS;
- Suporte a modificadores para:
  - Início do mês (`calendar--start-day-*`);
  - Tamanho do mês (`calendar--month-length-*`);
- Animação de hover nas células do calendário;
- Estilização consistente via variáveis SCSS globais.

---

##  Estrutura de arquivos

```text
layout_calendar/
├── src/
│   ├── index.html
│   └── styles/
│       ├── _calendar.scss
│       ├── _variables.scss
│       └── main.scss
├── package.json
├── .gitignore
├── README.md



Tecnologias Utilizadas
HTML5

SCSS (Sass) com modularização e metodologia BEM

Flexbox para construção do layout

Parcel como bundler

Surge para deploy estático
