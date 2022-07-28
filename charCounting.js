function charCount (str){

//make object to return at the end

//INPUTS :

// hello { h:1 e: 1 l: 2 o: 1} -> main output
// possible entries 

//"this is my name" {t:1 h:1 i:2 s:2 m: 2 y:1 n:1 e:1}

// create a result string
var result={};

//make sure all string is lower case

// loop into input string 
for (var i=0; i<str.length;i++)
{
     var char = str[i].toLowerCase()
    // check if the character LETTER OR NUMBER  already exist in result string
    // in case yes , add 1 

    if (result[char]>0)
        {
            result[char]++;
        }
 // in case not , insert 1
  else { result[char]=1};
}
 //what if the character is somth else?

  // return object at the end
  return result

}



console.log(charCount("ana Maria e pablo"));



