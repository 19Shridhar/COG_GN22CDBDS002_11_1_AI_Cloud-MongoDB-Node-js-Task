var readline = require('readline-sync');
const {findCollections}=require('./func.js')


console.log('Here we will find your data using mongoDB find function based on the input you give')

var choice=readline.question("Enter 1 if you want to find based on any parameter and 2 if you want to search on specific parameter\n");

if (choice==='1'){
   
    const searchAny = readline.question("Enter search value\n");
    const anyArray = searchAny.split(' ')

    for(var i=0;i<anyArray.length;i++){
        console.log('collections containing value '+anyArray[i])
        var anyQuery = {$or: [{name :{$regex :anyArray[i]}},{age :{$regex :anyArray[i]}},{favourite_hero :{$regex :anyArray[i]}}]}
        findCollections(anyQuery);
    }
}
else if(choice==='2'){
    
    console.log('\nThis are the search parameters  1)name 2)age 3)favourite_hero')
    const searchChoice = readline.question("Enter 1 for name 2 for age 3 for favourite_hero\n");

    
    switch (searchChoice) 
    {
    case '1':
        
    const name=readline.question("Enter one or two names to search\n");
        const nameArray=name.split(' ');
        
        for(var i=0;i<nameArray.length;i++){

            console.log('collections with name '+nameArray[i])
            const nameQuery = {name :{$regex :nameArray[i]}}
            findCollections(nameQuery);
        
        }
        
        break;


    case '2':

        const age=readline.question("Enter one or two ages to search\n");
        const ageArray=age.split(' ');
        
        for(var i=0;i<ageArray.length;i++){
            
            console.log('collections with age '+ageArray[i])
            const ageQuery = {age :{$regex :ageArray[i]}}
            findCollections(ageQuery);
        }
        
        break;


    case '3':
        
        const fav_hero=readline.question("Enter one or two favourite heroes to search\n");
        const fav_heroArray=fav_hero.split(' ');

        for(var i=0;i<fav_heroArray.length;i++){
            console.log('collections with favourite hero '+fav_heroArray[i]);
            const fav_heroQuery = {favourite_hero :{$regex :fav_heroArray[i]}};
            findCollections(fav_heroQuery);
        }
        break;
    }
}
else{
console.log('Enter a Valid Choice')
}



