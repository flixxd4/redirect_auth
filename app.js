function create_random_generator(string_length){
    var random_string = ''
    var char = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var i
    
    for(i = 0; i < string_length; i++){
        random_string = random_string + char.charAt(Math.floor(Math.random()* char.length))
    }
    return random_string
}

var Random_key = create_random_generator(10)


const fs = require('fs')
fs.writeFile('output.txt', Random_key, (err) => {
 if (err) throw err;
});
