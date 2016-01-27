#Mulheres Palestrantes

http://insideoutproject.xyz/mulheres-palestrantes/

###TL;DR
Listagem de mulheres disponíveis para palestrar em eventos de tecnologia, design, empreendedorismo, entre outros.
Se você deseja contribuir melhorando o layout ou incluindo você ou outra mulher na lista, basta enviar um pull request :D

###Versão longa
Dado o ainda pequeno número de mulheres palestrando em eventos (especialmente de tecnologia) aqui no Brasil, uma planilha foi criada a fim de dar mais visibilidade a essas mulheres e incentivar outras a começar.

Este projeto nasceu da tentativa de organizar os dados dessa planilha de forma mais visual, tornando-os de mais fácil acesso, reduzindo duplicidade e facilitando buscas.

Ele foi utilizado no primeiro JS4Girls Rio 2015 para ensino de Git, HTML, CSS e Javascript.

Originalmente em http://github.com/darlenedms/mulheres-palestrantes

##Como contribuir com o projeto?
Se você deseja contribuir melhorando o layout ou incluindo você ou outra mulher na lista, basta enviar um pull request. :)

Para incluir mulheres na lista, basta adicionar uma entrada no arquivo mulheres.json. Os únicos campos obrigatórios são nome e email.
Caso você encontre alguma dificuldade ou não tenha muito conhecimento em git, fique livre para abrir um issue pedindo a inclusão ou tirar dúvidas conosco sobre como fazer.

##Como se adicionar no .json
###Gravatar: https://en.gravatar.com/
Para adicionar uma photo ao seu card, crie uma conta e faça upload do seu avatar no gravatar ou use a sua conta já existente

###Campos do .json disecados
Em **linkedin**, **github**, **twitter** e **fb**: usar apenas o username da url da rede social.

**Exemplo:**

https://www.facebook.com/foo.bar >> "foo.bar"

https://br.linkedin.com/in/foob >> "foob"

etc

**Evite muitas tags em "interests".** 

Dependendo do tamanho, cabem até 7 no card da página, mas o ideal seria usar **4** tags no **máximo**.
```
{"name":"Foo Bar",
 "interests":["UX Design",
              "Web Design",
              "Front-end",
              "Rails"],
  "location":"São Paulo/SP",
  "photo":null,
  "email":"foobar@domain.com",
  "linkedin":"foobarname",
  "github":"foobarname",
  "twitter":"foobarname",
  "fb":"foo.bar"
}
```

##Ferramentas e materiais utilizados

###Gravatar
https://en.gravatar.com/site/implement/images/

###Templates
pure.js para template
http://beebole.com/pure/

###jQuery para consumir o json
http://api.jquery.com/jQuery.getJSON/

###Dados convertidos da planilha para json utilizando Mr Data Converter
https://shancarter.github.io/mr-data-converter/

###URLs do Gravatar geradas seguindo os padrões definidos na documentação
https://br.gravatar.com/site/implement/images/

###Bootstrap como framework de css
http://getbootstrap.com/
