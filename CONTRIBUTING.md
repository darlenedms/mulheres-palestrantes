#Como se adicionar no .json
##Gravatar: https://en.gravatar.com/
Para adicionar uma photo ao seu card, crie uma conta e faça upload do seu avatar no gravatar ou use a sua conta já existente.

##Campos do .json dissecados
Em **linkedin**, **github**, **twitter** e **fb**: usar apenas o username da url da rede social.

**Exemplo:**

https://www.facebook.com/foo.bar >> "foo.bar"

https://br.linkedin.com/in/foob >> "foob"

etc

**Evite muitas tags em "interests"** 

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
