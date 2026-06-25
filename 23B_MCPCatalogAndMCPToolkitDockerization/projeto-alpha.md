# Projeto Alpha — Anotações

## Objetivo
Migrar o serviço de autenticação para microsserviços.

## Tarefas pendentes
- [ ] Mapear dependências do monolito
- [ ] Definir contratos de API entre serviços
- [ ] Criar repositório no GitHub
- [ ] Configurar pipeline CI/CD

## Decisões técnicas
- Linguagem: Java 21 com Spring Boot 3
- Banco: PostgreSQL por serviço (database per service)
- Comunicação: REST síncrono + eventos assíncronos via Kafka

## Próxima reunião
Sexta-feira, 10h — alinhamento com o time de infraestrutura.
