//PURE.js template init
var directive = {
    'article':{
        'mulher<-mulheres':{
            'h3': 'mulher.name',

            '.tags li':{
                'tag<-mulher.tag_names':{
                    '.': 'tag'
                }
            },

            '.city': 'mulher.city',
            'img.gravatar@src': 'mulher.gravatar_url',
            '.fb a@href': 'https://facebook.com/#{mulher.fb}',

            '.twitter a@href': 'https://twitter.com/#{mulher.twitter}',

            '.github a@href': 'https://github.com/#{mulher.github}',

        }
    }
};

$(document).ready(function(){
    console.log('teste');
});

$(function(){

    //var data = [
    //    {
    //        "id": 1,
    //        "name": "Anna Cruz",
    //        "email": "anna.cruz@gmail.com",
    //        "country": null,
    //        "created_at": "2015-08-15T04:33:51.182Z",
    //        "updated_at": "2015-08-15T04:33:51.182Z",
    //        "interests": null,
    //        "fb": "annayuicruz",
    //        "github": "annacruz",
    //        "twitter": "",
    //        "city": null,
    //        "state": null,
    //        "gravatar_url": "https://secure.gravatar.com/avatar/0afb5c6c63c9e0ce7666528524ed6727.png?r=PG",
    //        "tag_names": []
    //    },
    //    {
    //        "id": 2,
    //        "name": "Bianca Rosa",
    //        "email": "me@biancarosa.com.br",
    //        "country": null,
    //        "created_at": "2015-08-15T04:33:51.220Z",
    //        "updated_at": "2015-08-15T04:33:51.220Z",
    //        "interests": null,
    //        "fb": "biancarosa92",
    //        "github": "biancarosa",
    //        "twitter": "",
    //        "city": null,
    //        "state": null,
    //        "gravatar_url": "https://secure.gravatar.com/avatar/c0761b5b81dfdc90a15c554d96d2152e.png?r=PG",
    //        "tag_names": [
    //            "Grails",
    //            "Java",
    //            "SQL",
    //            "JavaScript",
    //            "AngularJS",
    //            "TDD",
    //            "Desenvolvimento Web"
    //        ]
    //    },
    //    {
    //        "id": 3,
    //        "name": "Darlene Medeiros",
    //        "email": "darlenedms3@gmail.com",
    //        "country": null,
    //        "created_at": "2015-08-15T04:33:51.243Z",
    //        "updated_at": "2015-08-15T04:33:51.243Z",
    //        "interests": null,
    //        "fb": "darlene.medeiros.169",
    //        "github": "darlenedms",
    //        "twitter": "",
    //        "city": null,
    //        "state": null,
    //        "gravatar_url": "https://secure.gravatar.com/avatar/bd7dbe61d56c5e3bad64f6b77f462984.png?r=PG",
    //        "tag_names": []
    //    },
    //    {
    //        "id": 4,
    //        "name": "Dayany Espíndola",
    //        "email": "dayanyrec@gmail.com",
    //        "country": null,
    //        "created_at": "2015-08-15T04:33:51.249Z",
    //        "updated_at": "2015-08-15T04:33:51.249Z",
    //        "interests": null,
    //        "fb": "dayanyrec",
    //        "github": "dayanyrec",
    //        "twitter": "",
    //        "city": null,
    //        "state": null,
    //        "gravatar_url": "https://secure.gravatar.com/avatar/02582cea45d1ed66154b355aa1dc696d.png?r=PG",
    //        "tag_names": []
    //    },
    //    {
    //        "id": 5,
    //        "name": "Paula Grangeiro",
    //        "email": "paula.alves.g@gmail.com",
    //        "country": null,
    //        "created_at": "2015-08-15T04:33:51.270Z",
    //        "updated_at": "2015-08-15T04:33:51.270Z",
    //        "interests": null,
    //        "fb": "paula.grangeiro",
    //        "github": "pgrangeiro",
    //        "twitter": "",
    //        "city": null,
    //        "state": null,
    //        "gravatar_url": "https://secure.gravatar.com/avatar/54943796c6649a90adc15d63a644fd6a.png?r=PG",
    //        "tag_names": [
    //            "JavaScript",
    //            "AngularJS",
    //            "Desenvolvimento de software",
    //            "Python",
    //            "C#"
    //        ]
    //    },
    //    {
    //        "id": 6,
    //        "name": "Raissa Ferreira",
    //        "email": "rai200890@gmail.com",
    //        "country": null,
    //        "created_at": "2015-08-15T04:33:51.304Z",
    //        "updated_at": "2015-08-15T04:33:51.304Z",
    //        "interests": null,
    //        "fb": "rai200890",
    //        "github": "rai200890",
    //        "twitter": "rai200890",
    //        "city": null,
    //        "state": null,
    //        "gravatar_url": "https://secure.gravatar.com/avatar/68328f099165564e758f8bd7c0a7ae05.png?r=PG",
    //        "tag_names": [
    //            "AngularJS",
    //            "Ruby",
    //            "Rails",
    //            "Javascript"
    //        ]
    //    },
    //    {
    //        "id": 7,
    //        "name": "Samanta Cicilia",
    //        "email": "samycici@gmail.com",
    //        "country": null,
    //        "created_at": "2015-08-15T04:33:51.320Z",
    //        "updated_at": "2015-08-15T04:33:51.320Z",
    //        "interests": null,
    //        "fb": "samanta.cicilia",
    //        "github": "samycici",
    //        "twitter": "",
    //        "city": null,
    //        "state": null,
    //        "gravatar_url": "https://secure.gravatar.com/avatar/d0e2beb1970140f2b36a8aa334c068a8.png?r=PG",
    //        "tag_names": []
    //    }
    //];

    // var mulheres = {"mulheres": data};

    $.get("https://damp-beyond-4562.herokuapp.com/contacts.json?access_token=farofa3",{crossDomain: true}, function(data){

        var mulheres = {"mulheres": data};

        $p('section').render(mulheres, directive);
    });

});
