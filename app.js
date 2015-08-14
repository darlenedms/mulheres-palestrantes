var data = {
    "mulheres": [
        {
            "nome": "Ana Paula Gomes",
            "tags": ["Mineração/Análise de dados", "Android", "Python", "Grafos", "Comunidades"],
            "cidade": "Belo Horizonte/MG"
        },
        {
            "nome": "Ariadne Pinheiro",
            "tags": ["Evangelizadora Joomla", "web engineer", "Consultora em FOSS"],
            "cidade": "Rio de Janeiro/RJ"
        },
        {
            "nome": "Bianca Rosa",
            "tags": ["Desenvolvimento web", "Grails", "Java", "SQL", "JavaScript", "AngularJS", "TDD"],
            "cidade": "Rio de Janeiro/RJ"
        },
        {
            "nome": "Camila Achutti",
            "tags": ["Empreendedorismo"],
            "cidade": "São Paulo/SP"
        },
        {
            "nome": "Julyane Miranda",
            "tags": ["Design", "web design", "desenvolvimento web"],
            "cidade": "Rio de Janeiro/RJ"
        },
        {
            "nome": "Paula Grangeiro",
            "tags": ["Desenvolvimento de software", "Python", "AngularJS", "JavaScript", "C#"],
            "cidade": "Rio de Janeiro/RJ"
        },
        {
            "nome": "Raissa dos Santos Ferreira",
            "tags": ["Desenvolvimento de Software", "Ruby", "Rails", "Javascript", "AngularJS"],
            "cidade": "Rio de Janeiro/RJ"
        },
        {
            "nome": "Samantha Rosa",
            "tags": ["UX (user experience)", "Design e Educação"],
            "cidade": "Porto Alegre/RS"
        },
        {
            "nome": "Talita Pagani",
            "tags": ["UX design", "front-end", "acessibilidade", "usabilidade", "engenharia de software"],
            "cidade": "Bauru/SP"
        }
    ]
}

var directive = {
    'article':{
        'mulher<-mulheres':{
            'h3': 'mulher.nome',

            '.tags li':{
                'tag<-mulher.tags':{
                    '.': 'tag'
                }
            },

            '.cidade': 'mulher.cidade'
        }
    }
};

$p('section').render(data, directive);
