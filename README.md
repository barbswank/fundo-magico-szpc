# 🌌 Fundo Mágico

**Fundo Mágico** é uma aplicação web interativa que transforma descrições em **backgrounds incríveis** utilizando **inteligência artificial**.  
Com uma interface moderna e intuitiva, o usuário descreve o tipo de fundo desejado e recebe automaticamente o **código HTML e CSS** correspondente.  

---

## 🚀 Funcionalidades

- ✨ Geração automática de backgrounds a partir de descrições em linguagem natural.  
- 🎨 Suporte a gradientes e efeitos personalizados.  
- 💻 Exibição instantânea do código **HTML** e **CSS** gerado.  
- ⚙️ Integração com **n8n** para automação e interpretação inteligente das descrições.  
- 🌙 Interface responsiva com design moderno em **HTML**, **CSS** e **JavaScript** puro.  

---

## 🧠 Como Funciona

1. O usuário descreve o background desejado no campo de texto.  
2. A aplicação envia essa descrição para um fluxo do **n8n**, que interpreta o texto e gera as propriedades correspondentes (cores, gradientes, direções, etc.).  
3. O resultado é retornado e exibido na tela, mostrando tanto o **preview visual** quanto o **código pronto para uso**.  

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
|-------------|--------|
| **HTML5** | Estrutura da interface e exibição do conteúdo. |
| **CSS3** | Estilização e efeitos visuais, incluindo gradientes e temas. |
| **JavaScript (ES6+)** | Lógica de interação e integração com o fluxo de IA. |
| **n8n** | Backend automatizado para interpretação de texto e geração de código dinâmico. |

---

## 🎯 Objetivo do Projeto

Facilitar a criação de fundos personalizados de forma rápida e acessível, eliminando a necessidade de escrever código manualmente.  
Ideal para **designers**, **desenvolvedores iniciantes** e **criadores de conteúdo** que desejam gerar estilos visuais profissionais com apenas uma descrição.  

---

## 💡 Exemplo de Uso

**Entrada:**  
> "Um gradiente azul suave que vai do azul escuro para o azul claro"

**Saída:**  
Um fundo com gradiente linear, acompanhado do código HTML e CSS correspondente — pronto para copiar e colar em qualquer projeto.

---

## 📱 Responsividade

O layout é totalmente **responsivo** e adaptável a dispositivos móveis, tablets e desktops, garantindo uma experiência fluida em qualquer resolução.  

---

## 🧩 Estrutura do Projeto

/ ├── index.html        # Estrutura principal da interface ├── style.css         # Estilos visuais e efeitos ├── script.js         # Lógica da aplicação e integração com n8n └── assets/           # Imagens, ícones e recursos estáticos

---

---

## ⚡ Integração com n8n

O **n8n** é responsável por processar a descrição enviada pelo usuário.  
Ele converte o texto em propriedades CSS válidas e retorna o resultado para a aplicação front-end.  
A integração ocorre via requisição HTTP, tornando o sistema modular e fácil de expandir.

---

## 🧭 Futuras Melhorias (Opcional)

- Suporte a outros tipos de fundos (imagens, padrões, animações).  
- Biblioteca de presets com exemplos prontos.  
- Exportação direta para repositórios ou plataformas de design.  

---

## 📄 Licença

Este projeto é de **uso livre** para fins educacionais e pessoais.  
Sinta-se à vontade para explorar, adaptar e expandir a ideia.  

---

**Desenvolvido com 💙 usando HTML, CSS, JavaScript e n8n.**
