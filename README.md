# Projeto de Cadastro de Itens para Conserto

## Link do vídeo mostrando o projeto

[Assista ao vídeo aqui](https://youtu.be/nPaErDVJcr8)

## Link do projeto rodando

[Acesse o projeto](https://betha-cadastros.netlify.app/)

**Nota:** Devido ao projeto estar hospedado em um servidor americano, a primeira requisição no processo de login pode demorar um pouco. Essa demora é normal.

## Introdução

Este é um projeto desenvolvido utilizando Angular para o frontend e Spring Boot para o backend. Ele permite cadastrar itens para conserto de forma simples e eficiente.

## Funcionalidades Implementadas

- **Segurança Backend:** Utilização do Spring Security para restringir o acesso conforme roles configuradas.
- **Autenticação:** Uso de JWT (JSON Web Tokens) para identificação e autenticação de usuários.
- **Autenticação no Frontend:** Implementação do AuthGuard no Angular para proteger rotas.
- **Gerenciamento de Clientes:** Possibilidade de criar e salvar novos clientes no banco de dados.
- **Gerenciamento de Funcionários:** Possibilidade de criar e salvar novos funcionários.
- **Gerenciamento de Pedidos:** Possibilidade de criar e salvar novos pedidos. Cada pedido passa pelas seguintes etapas:
  - **Recepção:** Registro inicial do pedido.
  - **Triagem:** Adição de fotos, valores e comunicação com o cliente para aprovação.
  - **Manutenção:** O gerente técnico designa um funcionário para realizar a manutenção.
  - **Finalização:** O pedido pode ser finalizado após a manutenção.

## Como Utilizar

### Clonando o Repositório

Clone o repositório do projeto utilizando o seguinte comando:

```sh
git clone <URL_DO_REPOSITORIO>

docker-compose up
```

É preciso ter o Docker instalado.

## Acessando a Aplicação

Após iniciar a aplicação, você poderá acessá-la através do navegador web utilizando o seguinte endereço:
http://localhost:4200

## Tecnologias Utilizadas

**Frontend**: Angular
**Backend**: Spring Boot
**Autenticação e Segurança**: Spring Security, JWT
**Deploy**: Docker, Docker Compose
