# Desafio-final-Rockeseat
Projeto completo do plataforma GYMPOINT com back-end, front-end e mobile 

#instruções para rodar a plataforma local

 -Backend<br/><br/>
  -> Ter Docker instalado; <br/>
  -> Ter um container do docker com imagem do postgres ativo;<br/>
  -> Ter um container do docker com imagem redis:alpine ativo;<br/>
  -> Crie um .env na raiz do projeto , copie o conteudo do .env.example e coloque no .env, depois <br/>
     preencha os campos com o dados do seus container;<br/>
  -> Execute no terminal yarn;<br/>
  -> Execute no terminal yarn sequelize db:seed:all;<br/>
  -> Execute no terminal yarn db:migrate;<br/>
  -> Execute no terminal rodando dentro da pasta do backend o comando "yarn" , para instalar todas as dependencias do projeto ;<br/>
  -> Execute no mesmo terminal usado acima o comando "yarn dev";<br/>
  -> Agora o servidor ja esta rodando localmente na porta 3333;<br/><br/>
  
  -Frontend <br/><br/>
  -> Abrir um terminal na pasta de frontend e executar o comando yarn start;<br/><br/>
