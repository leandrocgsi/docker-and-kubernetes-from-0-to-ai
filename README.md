# 🐳 Docker e Kubernetes 2026: do Zero à Inteligência Artificial com MCP Catalog e Docker Model Runner

[![GitHub](https://img.shields.io/badge/GitHub-leandrocgsi-181717?style=flat&logo=github)](https://github.com/leandrocgsi)
[![Erudio](https://img.shields.io/badge/Erudio-Training-blue?style=flat)](https://pub.erudio.com.br/formacao-docker-kubernetes-do-zero-a-inteligencia-artificial-com-mcp)
[![Docker Hub](https://img.shields.io/badge/Docker%20Hub-leandrocgsi-2496ED?style=flat&logo=docker)](https://hub.docker.com/u/leandrocgsi)

Repositório oficial do curso **Formação Docker e Kubernetes 2026**, disponível em:
👉 [pub.erudio.com.br](https://pub.erudio.com.br/formacao-docker-kubernetes-do-zero-a-inteligencia-artificial-com-mcp)

---

## 📋 Sobre o Curso

Do zero absoluto até as funcionalidades mais recentes do ecossistema Docker, incluindo **Inteligência Artificial com Docker Model Runner e MCP Catalog**. Você vai dockerizar aplicações reais em Java, Kotlin, ASP.NET e Node.js com React, implantar clusters no **Google Kubernetes Engine (GKE)**, configurar pipelines completos de **CI/CD com GitHub Actions** e aprender a rodar e integrar **LLMs localmente** — tudo na prática, com código funcionando.

---

## 🗂️ Estrutura do Repositório

O código está organizado por módulo, acompanhando a grade do curso:

| Módulo | Conteúdo |
|--------|----------|
| `02` | Tudo o que você precisa saber antes de começar |
| `03` | Introdução aos Contêineres |
| `04` | Os principais componentes do Docker |
| `05` | Conhecendo Imagens e Contêineres |
| `06` | Gerenciamento de Contêineres |
| `07` | Conhecendo o Dockerfile |
| `08` | Trabalhando com Docker Registries |
| `09` | Dockerfile em Detalhes |
| `10` | Redes no Docker |
| `11` | Problemas Comuns e Como Resolvê-los |
| `12` | Docker Compose |
| `13` | Dockerizando Apps Java e Kotlin com Spring Boot 3 |
| `14` | Dockerizando uma API RESTful em ASP.NET 10 / .NET 10 |
| `15` | Dockerizando uma Aplicação com Node e React JS |
| `16` | Implantando na Amazon AWS |
| `17` | Testcontainers |
| `18` | Minicurso de Kubernetes |
| `19` | Kubernetes na GCP com Google Kubernetes Engine (GKE) |
| `20` | Compose Bridge |
| `21` | Ollama — IA privada no Docker |
| `22` | Docker Model Runner |
| `23` | Docker MCP Catalog e MCP Toolkit |
| `24` | SGBDs em Contêineres (Postgres, SQL Server, MySQL, Oracle) |
| `25` | Podman, Skopeo e Buildah |
| `28` | [Apêndice] Instalando Docker no Windows |
| `29` | [Apêndice] Instalando Docker no Linux |

---

## 🚀 O que você vai aprender

- Fundamentos de contêineres, imagens, redes, volumes e Dockerfile
- Docker Compose para orquestrar múltiplos serviços
- Dockerização de aplicações reais: **Java/Kotlin com Spring Boot 3**, **ASP.NET 10**, **Node.js + React JS**
- CI/CD completo com **GitHub Actions** e **Docker Hub**
- Testes de integração com **Testcontainers** e **REST Assured**
- **Kubernetes** — Pods, ReplicaSets, Deployments e Services
- Deploy na **Google Cloud Platform com GKE**
- Conversão de stacks com **Compose Bridge**
- IA no Docker: rodar **LLMs localmente** com **Ollama** e **Docker Model Runner**
- Criação, dockerização e publicação de **MCP Servers** com **Docker MCP Toolkit**
- Integração de LLMs às stacks Java, ASP.NET e Node.js
- Deploy na **Amazon AWS (EC2)**
- Ferramentas alternativas: **Podman**, **Skopeo** e **Buildah**

---

## 🛠️ Pré-requisitos

- Noções básicas de terminal / linha de comando
- Conhecimento básico de GNU/Linux
- Noções de Redes de Computadores
- Conta no **GitHub** e no **Docker Hub**
- Acesso de administrador para instalar o Docker
- Conexão com a internet de no mínimo 2 MB/s

---

## 🧰 Tecnologias Utilizadas

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=white)
![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=flat&logo=kotlin&logoColor=white)
![.NET](https://img.shields.io/badge/.NET_10-512BD4?style=flat&logo=dotnet&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Spring Boot](https://img.shields.io/badge/Spring_Boot_3-6DB33F?style=flat&logo=springboot&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=githubactions&logoColor=white)
![GCP](https://img.shields.io/badge/Google_Cloud-4285F4?style=flat&logo=googlecloud&logoColor=white)
![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=flat&logo=amazonaws&logoColor=white)

---

## ⚡ Como usar este repositório

Cada módulo do curso tem sua própria pasta com o código desenvolvido nas aulas. Para rodar qualquer projeto, entre na pasta do módulo correspondente e siga as instruções do `README.md` local (quando disponível) ou acompanhe as aulas.

**Exemplo — subindo a stack Java com Docker Compose:**

```bash
cd 13-java-spring-boot
docker compose up -d
```

**Exemplo — rodando um LLM local com Docker Model Runner:**

```bash
cd 22-docker-model-runner
docker compose up -d
```

---

## 👨‍💻 Sobre o Instrutor

**Leandro Costa** — Engenheiro de Software com mais de 15 anos de experiência em projetos para empresas como **Thomson Reuters**, **Unilever** e **UOL**, e órgãos governamentais como **CNPq**, **Ministério da Saúde** e **Ministério da Justiça**. Mais de **65 mil alunos em 136 países**.

- 🌐 [erudio.com.br](https://pub.erudio.com.br)
- 📸 [@erudiotraining](https://instagram.com/erudiotraining)

---

## 📄 Licença

Este repositório é disponibilizado para fins educacionais, exclusivamente para alunos matriculados no curso. Todos os direitos reservados © Erudio Training.
