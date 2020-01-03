# Desafio-final-Rockeseat
Projeto completo do plataforma GYMPOINT com back-end, front-end e mobile 

#instruções para rodar a plataforma local

 -Backend<br/><br/>
  -> Ter Docker instalado; <br/>
  -> Ter um container do docker com imagem do postgres ativo;<br/>
  -> Ter um container do docker com imagem redis:alpine ativo;<br/>
  -> Crie um .env na raiz do projeto , copie o conteudo do .env.example e coloque no .env, depois <br/>
     preencha os campos com o dados do seus container;<br/>
  -> Execute no terminal rodando dentro da pasta do backend o comando "yarn" , para instalar todas as dependencias do projeto ;<br/>
  -> Execute no terminal yarn sequelize db:seed:all;<br/>
  -> Execute no terminal yarn db:migrate;<br/>
  -> Execute no mesmo terminal usado acima o comando "yarn dev";<br/>
  -> Agora o servidor ja esta rodando localmente na porta 3333;<br/><br/>
  
  -Frontend <br/><br/>
  -> Execute no terminal rodando dentro da pasta do frontend o comando "yarn" , para instalar todas as dependencias do projeto ;<br/>
  -> executar o comando yarn start;<br/>
  -> OBS: login: admin@gympoint.com , password: 123456;<br/><br/>
  
  -Mobile <br/><br/>
  -> Execute no terminal rodando dentro da pasta do mobile o comando "yarn" , para instalar todas as dependencias do projeto ;<br/>
  -> Iniciar o emulador para a sua aplicacao ou liagr o telefone ao cabo para fazer a opcao de depuracao;<br/>
  -> Trocar o end-point do backend na pasta "/src/services" para o ip da sua maquina ou o host atual do backend;<br/>
  -> Executar o comando yarn react-native start;<br/>
  -> Executar o comando yarn react-native run-android;<br/>
  -> OBS: o "login" no mobile so eh permitido pelo id de alunos existentes, ou seja , antes de usar o aplicativo voce deve cadastrar um aluno na aplicacao pela plataforma web;<br/><br/>
