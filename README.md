# PsyCheck - Plataforma de Auxilio para Saúde Mental

## Apresentação da Equipe

A equipe do PsyCheck é composta por experientes no desenvolvimento de soluções B2C. Nossos membros incluem:

- Matheus Ramos de Pierro - Arquiteto de Soluções, DBA e Dev Backend - https://github.com/matheusPierro/
- Felipe de Lima Santiago - Scrum Master - https://github.com/fehstack
- Gabriel Tricerri André Niacaris - Cientista de Dados e Dev Backend- https://github.com/gabriel-tricerri
- Victor Shimada - Cientista de Dados e Dev Frontend - https://github.com/shimarrudz
- Thiago Gyorgy Teixeira de Castro - DBA e Dev Frontend - https://github.com/ThiCastroo/

# Link do Figma:

https://www.figma.com/file/7wBGjBuPH8XAeKc1vPHIZb/PsyCheck?type=design&mode=design&t=AxsBV2wv80AUWYdg-1

# Sumário

[Estudo de caso ](#_Estudo_de_caso)

[Fluxograma da arquitetura do Sistema](#_fluxograma_)

[Diagrama de Entidades e Relacionamentos ](#_der_)

[Modelo de Entidades e Relacionamentos ](#_mer_)

[Diagrama de Classes ](#_Diagrama_de_Classes)

[Como rodar a aplicação](#_Rodar_Aplicacao)

[Pitch](#_pitch)

<a id="_Estudo_de_caso"></a>

# Estudo de caso

### Projeto PsyCheck: Transformando a Saúde Mental

## Introdução

O aumento das taxas de estresse, ansiedade e depressão representa um desafio significativo na área de saúde mental. O acesso limitado a recursos adequados agrava esse problema, resultando em uma necessidade premente de soluções inovadoras. O projeto PsyCheck surge como uma resposta a esses desafios, propondo uma abordagem revolucionária para melhorar a qualidade dos cuidados de saúde mental.

## O Desafio na Saúde Mental

Antes da implementação do PsyCheck, as dificuldades na saúde mental incluíam a falta de detecção precoce, a escassez de recursos acessíveis e a limitada colaboração entre usuários e profissionais de saúde. Isso levava a diagnósticos tardios, tratamentos inadequados e uma lacuna na prestação de cuidados eficazes.

## A Solução PsyCheck

O PsyCheck introduziu o aplicativo que utiliza tecnologias modernas para enfrentar esses desafios de frente:

### Detecção Precoce:

O aplicativo incorpora inteligência artificial para identificar padrões de comportamento que podem indicar problemas de saúde mental, permitindo uma intervenção precoce e eficaz.

### Automação de Suporte:

Chatbots integrados oferecem suporte contínuo, fornecendo informações úteis, estratégias de enfrentamento e incentivando a busca por ajuda profissional quando necessário.

### Análise de Dados para Personalização:

A análise de dados personaliza a experiência do usuário, adaptando o suporte de acordo com as necessidades individuais, aumentando a eficácia das intervenções.

### Acessibilidade Aprimorada:

Uma interface intuitiva e amigável torna o PsyCheck acessível a todos, eliminando barreiras para aqueles que podem hesitar em procurar ajuda.

### Colaboração com Profissionais de Saúde:

O aplicativo facilita a comunicação entre usuários e profissionais de saúde, promovendo uma abordagem colaborativa para o tratamento e monitoramento da saúde mental.

## Resultados Esperados

A implementação do PsyCheck promete resultados positivos para a saúde mental individual e a sociedade como um todo:

### Melhoria da Saúde Mental:

Ao abordar precocemente os problemas de saúde mental e oferecer suporte contínuo, o PsyCheck visa melhorar o bem-estar emocional dos usuários.

### Prevenção Eficiente:

A detecção precoce e as intervenções personalizadas contribuem para a prevenção eficaz de condições de saúde mental mais graves.

### Acessibilidade aos Cuidados de Saúde Mental:

A interface amigável e a automação de suporte tornam os cuidados de saúde mental mais acessíveis a uma variedade de usuários.

### Colaboração Significativa:

Facilitando a colaboração entre usuários e profissionais de saúde, o PsyCheck promove um tratamento mais eficaz e personalizado.

## Conclusão

O Projeto PsyCheck ilustra como a inovação tecnológica pode transformar a abordagem aos desafios de saúde mental. Ao integrar inteligência artificial, chatbots e análise de dados, o aplicativo oferece uma solução abrangente que não apenas aborda os sintomas, mas também trabalha na prevenção e colaboração. O potencial impacto positivo na sociedade destaca a importância de soluções criativas e tecnologicamente avançadas na melhoria da saúde mental.
Fechar
tem menu de contexto
<a id="_fluxograma_"></a>

# Fluxograma da Arquitetura do Sistema

<img src="./ReadmeImages/fluxograma_arquitetura_sistema.png" title="Fluxograma da Arquitetura do Sistema">

<a id="_der_"></a>

# Diagrama de Entidades e Relacionamentos

<img src="./ReadmeImages/ML.png" title="Fluxograma da Arquitetura do Sistema">

<a id="_mer_"></a>

# Modelo de Entidades e Relacionamentos

<img src="./ReadmeImages/MR.png" title="Fluxograma da Arquitetura do Sistema">

<a id="_Diagrama_de_Classes"></a>

# Diagrama de Classes

<img src="./ReadmeImages/diagrama_classes.png" title="Diagrama de Classes">

<a id="_Rodar_Aplicacao"></a>

# Como rodar a aplicação

## Rodar Aplicação Backend em Spring

### Fazer o clone do projeto em https://github.com/gs-notridame/backend.git

Será necessário seguir os passos abaixo:

1. **Build do projeto**: Através do maven abra o projeto e execute o seguinte comando:

mvn clean install -DskipTests -U

Assim ele irá buildar o projeto pulando as etapas de testes e forçando atualizações necessárias. (Caso não tenha o maven indico utilizar o Intellij IDEA para executar o comando pois o mesmo ja vem com o maven dentro)

2. **Encontrar arquivo .jar (lib) do projeto**:
   Após o build do projeto se tudo ocorrer bem esperamos encontrar um arquivo .jar do projeto dentro da pasta target do projeto (A mesma foi criada logo após o build).

/target/syncfy-0.0.1-SNAPSHOT.jar

3. **Rodar aplicação através da lib**: Agora que temos nossa lib(arquivo .jar do nosso projeto) podemos rodar a aplicação com o seguinte comando:

java -jar target/syncfy-0.0.1-SNAPSHOT.jar

p.s. é necessário ter a jdk versão 17 instalada em sua máquina ou podem acontecer erros de versão.

<a id="_endpoints"></a>

### Endpoints para testar a aplicação rodando:

<a id="_pitch"></a>

## Rodar Aplicação Frontend Mobile em React Native

Clonar o projeto na máquina:

git clone <link do repo>

Entra na pasta do projeto:

cd frontend/PsyCheck/

Instalar dependências do projeto:

yarn

Caso não tenha yarn instalado, deverá instar!

Rodar aplicação:

yarn start

Abrir emulador Android:

Seguir comandos citados no console

## Para mais detalhes assista ao nosso Picth:

[![Alt text](https://img.youtube.com/vi/5Qvdya6ijFY/0.jpg)](https://www.youtube.com/watch?v=5Qvdya6ijFY)
