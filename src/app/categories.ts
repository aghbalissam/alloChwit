// Data from Database

const listRest = [
    {
      id : 243252,
      name : 'Restaurant 1',
      slogan : 'restaurant-1',
      city : 'camopi',
      image : 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Pizza','Tacos'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus : [
        {
          title : 'Petit Déjeuner',
          list : [
            {
              name : "Brunch",
              description : '',
              price : 20,
              id : 22352234
            },
            {
              name : "Petit Déjeuner Gourmand",
              description : '',
              price : 22,
              id : 74745723
            },
            {
              name : "Petit Déjeuner Américain",
              description : '',
              price : 14,
              id : 23232423 
            },
            {
              name : "Petit Déjeuner Beldi",
              description : '',
              price : 10,
              id : 36473623
            },
            {
              name: "Petit Déjeuner Marocain",
              description : '',
              price : 7,
              id: 3232523
            }
          ]
        },
        {
          title : 'Entrées Froides',
          list : [
            {
              name : "Formule Mezzes Froides",
              description : '',
              price : 14,
              id : 3141112
            },
            {
              name : "Feuilles De Vigne",
              description : '',
              price : 18,
              id : 346347
            },
            {
              name : "Taboulé",
              description : '',
              price : 21,
              id : 7845754
            },
            {
              name : "Moutabal",
              description : '',
              price : 19,
              id : 5976967
            },
            {
              name : "Baba Ghanouj",
              description : '',
              price : 7,
              id : 235235
            }
          ]
        },
        {
          title : 'Entrées Chaudes',
          list : [
            {
              name : "Formule Mezzes Chaudes",
              description : '',
              price : 12, 
              id : 345346
            },
            {
              name : "Kebbé Makliye",
              description : '',
              price : 4,
              id : 687667
            },
            {
              name : "Arayes Kefta",
              description : '',
              price : 19,
              id : 523525
            },
            {
              name : "Samboussek Viande",
              description : '',
              price : 25,
              id : 12124
            },
            {
              name : "Samboussek Fromage",
              description : '',
              price : 30,
              id : 436343
            }
          ]
        }
      ]
    },
    {
      id : 56855,
      name : 'Restaurant 2',
      slogan : 'restaurant-2',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Pizza','Chicken'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'cafe',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: 
      [
        {
          title : 'Pizzas',
          list : [
            {
              name: "Pizza Chicken",
              description : '',
              price : 20,
              id: 56856856
            },
            {
              name: "Pizza Quatre Fromages",
              description : '',
              price : 22,
              id: 334688909
            },
            {
              name: "Pizza Fruits De Mer",
              description : '',
              price : 14,
              id: 780789797
            },
            {
              name: "Pizza Arizon",
              description : '',
              price : 10,
              id: 4557568
            },
            {
              name: "Pizza Thon",
              description : '',
              price : 7,
              id: 6786796
            }
          ]
        },
        {
          title : 'Pâtes',
          list : [
            {
              name: "Pâtes Fruits De Mer",
              description : '',
              price : 20,
              id: 2352352
            },
            {
              name: "Pâtes Poulet Champignons",
              description : '',
              price : 22,
              id: 34346534
            },
            {
              name: "Pâtes Bolognaise",
              description : '',
              price : 14,
              id: 23423586
            },
            {
              name: "Pâtes Quatre Fromages",
              description : '',
              price : 10,
              id: 23411586
            },
            {
              name: "Pâtes Carbonara",
              description : '',
              price : 7,
              id: 878221197
            }
          ]
        },
        {
          title : 'Tacos Gratinés',
          list : [
            {
              name: "Tacos Gratiné Buffalo",
              description : '',
              price : 20,
              id: 45745745
            },
            {
              name: "Tacos Gratiné Parisien",
              description : '',
              price : 22,
              id: 7996786
            },
            {
              name: "Tacos Gratiné Forestière",
              description : '',
              price : 14,
              id: 7897845
            },
            {
              name: "Tacos Gratiné Calamar",
              description : '',
              price : 10,
              id: 9445684
            },
            {
              name: "Tacos Gratiné Cordon Bleu",
              description : '',
              price : 7,
              id: 4856893
            }
          ]
        }
      ]
    },
    {
      id : 345347,
      name : 'Restaurant 3',
      slogan : 'restaurant-3',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/992822/pexels-photo-992822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Pizza','Tacos'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: [
        {
          title : 'Burgers',
          list : [
            {
              name: "TRIPLE CHEESE BURGER",
              description : '',
              price : 20,
              id : 94672823
            },
            {
              name: "DOUBLE CHEESE BURGER",
              description : '',
              price : 22,
              id : 94573783
            },
            {
              name: "CHICKEN BURGER",
              description : '',
              price : 14,
              id : 78569568
            },
            {
              name: "SPICY CHICKEN BURGER",
              description : '',
              price : 10,
              id : 4646445
            },
            {
              name: "Tacos Gratiné Cordon Bleu",
              description : '',
              price : 7,
              id : 46464115
            },
            {
              image : 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/fhxgyuc0i8rlbrh7mwst',
              name : 'Chicken Nuggets 4 pcs',
              price : 25,
              id : 41234349, 
              elementSup : [
                {
                  title :'item 1',
                  items :[
                    {
                      productName : 'Product xxxx',
                      productPrice : 10
                    },
                    {
                      productName : 'Product yyyy',
                      productPrice : 12
                    }
                  ]
                },
                {
                  title :'item 2',
                  items :[
                    {
                      productName : 'Product bbbbb',
                      productPrice : 10
                    },
                    {
                      productName : 'Product ddddd',
                      productPrice : 12
                    },
                    {
                      productName : 'Product jjjj',
                      productPrice : 7
                    }
                  ]
                },
                {
                  title :'item 3',
                  items :[
                    {
                      productName : 'Product aaaaa',
                      productPrice : 10
                    },
                    {
                      productName : 'Product zzzzz',
                      productPrice : 12
                    }
                  ]
                },
                {
                  title :'item 4',
                  items :[
                    {
                      productName : 'Product mmmm',
                      productPrice : 10
                    },
                    {
                      productName : 'Product ssss',
                      productPrice : 12
                    },
                    {
                      productName : 'Product rrrr',
                      productPrice : 9
                    }
                  ]
                },
                {
                  title :'item 5',
                  items :[
                    {
                      productName : 'Product ffff',
                      productPrice : 10
                    },
                    {
                      productName : 'Product xxxx',
                      productPrice : 12
                    }
                  ]
                },
                {
                  title :'item 6',
                  items :[
                    {
                      productName : 'Product oooo',
                      productPrice : 10
                    },
                    {
                      productName : 'Product pppp',
                      productPrice : 12
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title : 'Promos Shake Bun',
          list : [
            {
              name: "1 double cheese burger + 1 coca",
              description : '',
              price : 20,
              id : 98563834
            },
            {
              name: "1 cheese burger + 1 coca",
              description : '',
              price : 22,
              id : 23559239
            },
            {
              name: "1 chicken burger + 1 coca",
              description : '',
              price : 14,
              id : 14459450
            } 
          ]
        },
      ]

    },
    {
      id : 124151,
      name : 'Restaurant 4',
      slogan : 'restaurant-4',
      city : 'camopi',
      image : 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Chicken','Italian'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: [
        {
          title : 'Pizzas',
          list : [
            {
              name: "Pizza Mixte",
              description : '',
              price : 20,
              id : 6079605
            },
            {
              name: "Pizza Thon",
              description : '',
              price : 22,
              id : 4594450459
            },
            {
              name: "Pizza Hot Dog",
              description : '',
              price : 14,
              id : 586495945
            },
            {
              name: "Pizza Charcuterie",
              description : '',
              price : 22,
              id : 45542239923
            },
            {
              name: "Pizza Végétarienne",
              description : '',
              price : 14,
              id : 2437238823
            }  
          ]
        },
        {
          title : 'Sandwichs',
          list : [
            {
              name: "Sandwich Viande Hachée",
              description : '',
              price : 20,
              id: 44545032
            },
            {
              name: "Sandwich Dinde",
              description : '',
              price : 22,
              id: 945402323
            },
            {
              name: "Sandwich Mixte",
              description : '',
              price : 14,
              id: 7894545923
            },
            {
              name: "Sandwich Thon",
              description : '',
              price : 22,
              id: 3464569
            },
            {
              name: "Sandwich Omelette",
              description : '',
              price : 14,
              id: 232359459
            },
            {
              name: "Sandwich Hot Dog",
              description : '',
              price : 14,
              id: 2143952358
            }  
          ]
        },
      ]

    },
    {
      id : 121241,
      name : 'Restaurant 5',
      slogan : 'restaurant-5',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/299410/pexels-photo-299410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Pizza','Tacos'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: 
      [
        {
          title : "Toscan'a gratiné",
          list : [
            {
              image : 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/zyvfqsm52jshlyfysf82',
              name : "Toscan'a Crispy Mix",
              description : '',
              price : 25,
              id: 23322340
            }
          ]
        },
      ]
    },
    {
      id : 766867,
      name : 'Restaurant 6',
      slogan : 'restaurant-6',
      city : 'cacao',
      image : 'https://images.pexels.com/photos/879201/pexels-photo-879201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Moroccan','Tacos'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: []
    },
    {
      id : 3434634,
      name : 'Restaurant 7',
      slogan : 'restaurant-7',
      city : 'camopi',
      image : 'https://images.pexels.com/photos/2741448/pexels-photo-2741448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Italian','Tacos'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'cafe',
      days : 'lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: []
    },
    {
      id : 124124,
      name : 'Restaurant 8',
      slogan : 'restaurant-8',
      city : 'cacao',
      image : 'https://images.pexels.com/photos/2741458/pexels-photo-2741458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Traditional','Tacos'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: []
    },
    {
      id : 987887,
      name : 'Restaurant 9',
      slogan : 'restaurant-9',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/2291603/pexels-photo-2291603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Crêpes','Petit-déjeuner'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'cafe',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: 
      [
        {
          title : 'Petits Déjeuners',
          list : [
            {
              name: "Petit Déjeuner Express",
              description : '',
              price : 20,
              id: 34796055
            },
            {
              name: "Petit Déjeuner Beldi",
              description : '',
              price : 22,
              id: 5439340
            },
            {
              name: "Omelette Nature + Petite Salade",
              description : '',
              price : 14,
              id: 9456858
            },
            {
              name: "Croissant",
              description : '',
              price : 10,
              id: 8569458
            },
            {
              name: "Pain au Chocolat",
              description : '',
              price : 7,
              id: 999458234
            }
          ]
        },
        {
          title : 'Brunchs',
          list : [
            {
              name: "Brunch Fin De Faim",
              description : '',
              price : 20,
              id: 7897096147
            },
            {
              name: "Brunch Norvégien",
              description : '',
              price : 22,
              id: 23435347
            },
            {
              name: "Brunch Healthy",
              description : '',
              price : 14,
              id: 53352324
            }
          ]
        },
      ]
    },
    {
      id : 2352323,
      name : 'Restaurant 10',
      slogan : 'restaurant-10',
      city : 'cacao',
      image : 'https://images.pexels.com/photos/5807021/pexels-photo-5807021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Pizza','Lebanese'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: []
    },
    {
      id : 232352,
      name : 'Restaurant 11',
      slogan : 'restaurant-11',
      city : 'roura',
      image : 'https://images.pexels.com/photos/1707917/pexels-photo-1707917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Pizza','Tacos'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus : []
    },
    {
      id : 7686787,
      name : 'Restaurant 12',
      slogan : 'restaurant-12',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Pizza','Sandwich'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Samedi',
      hours : '09:00 - 18:00',
      menus : []
    },
    {
      id : 34439634,
      name : 'Restaurant 13',
      slogan : 'restaurant-13',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Tacos','Sandwich'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Samedi',
      hours : '09:00 - 18:00',
      menus : []
    },
    {
      id : 235353456,
      name : 'Restaurant 14',
      slogan : 'restaurant-14',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Lebanese','Sandwich'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus : []
    },
    {
      id : 4344311299,
      name : 'Restaurant 15',
      slogan : 'restaurant-15',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/1815898/pexels-photo-1815898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Lebanese','Sandwich'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus : []
    },
    {
      id : 9945549,
      name : 'Restaurant 16',
      slogan : 'restaurant-16',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/154145/pexels-photo-154145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Lebanese','Sandwich'],
      time : '10-25 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus : []
    },
    {
      id : 4564554,
      name : 'Restaurant 17',
      slogan : 'restaurant-17',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/1703272/pexels-photo-1703272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Lebanese','Sandwich'],
      time : '10-15 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus : []
    },
    {
      id : 7686556,
      name : 'Restaurant 18',
      slogan : 'restaurant-18',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/8954508/pexels-photo-8954508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Lebanese','Sandwich'],
      time : '10-15 min',
      shipping : '6,00$',
      rating : '91%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus : []
    },
    {
      id : 9235823572,
      name : 'Restaurant 19',
      slogan : 'restaurant-19',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/806361/pexels-photo-806361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Lebanese','Sandwich'],
      time : '10-15 min',
      shipping : '6,00$',
      rating : '91%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus : []
    },
    {
      id : 3434634,
      name : 'Restaurant 20',
      slogan : 'restaurant-20',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/2741458/pexels-photo-2741458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Lebanese','Sandwich'],
      time : '10-15 min',
      shipping : '6,00$',
      rating : '91%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '10:00 - 00:00',
      menus : []
    },
    {
      id : 294645,
      name : 'Restaurant 21',
      slogan : 'restaurant-21',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Lebanese','Sandwich'],
      time : '10-15 min',
      shipping : '2,00$',
      rating : '81%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '10:00 - 1:00',
      menus : []
    },
    {
      id : 7548455,
      name : 'Restaurant 22',
      slogan : 'restaurant-22',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Lebanese','Sandwich'],
      time : '10-20 min',
      shipping : '3,00$',
      rating : '96%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '10:00 - 1:00',
      menus : []
    },
    {
      id : 9865569,
      name : 'Restaurant 23',
      slogan : 'restaurant-23',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/1854037/pexels-photo-1854037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Lebanese','Sandwich'],
      time : '10-20 min',
      shipping : '3,00$',
      rating : '86%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '10:00 - 1:00',
      menus : []
    },
    {
      id : 23747238,
      name : 'Restaurant 24',
      slogan : 'restaurant-24',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/1603899/pexels-photo-1603899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Lebanese','Sandwich'],
      time : '10-20 min',
      shipping : '3,00$',
      rating : '86%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '10:00 - 1:00',
      menus : []
    },
    {
      id : 343456676,
      name : 'Restaurant 25',
      slogan : 'restaurant-25',
      city : 'cayenne',
      image : 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Lebanese','Sandwich'],
      time : '10-20 min',
      shipping : '3,00$',
      rating : '86%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '10:00 - 1:00',
      menus : []
    }
  ]

export default listRest;