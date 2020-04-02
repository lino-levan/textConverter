function isEqualTo(input,check){
  for(let j = 0;j<check.length;j++){
    if(input===check[j]){
      return true;
    }
  }
  return false;
}

function calc(){
  let conversion = document.getElementById("converter").value;
  let text = document.getElementById("result").value;
  if(conversion==="owo_text"){
    text=text.split("l").join("w");
    text=text.split("L").join("W");
    text=text.split("r").join("w");
    text=text.split("R").join("W");
  }else if(conversion==="replace_vowels"){
    let result = "";
    for(let i = 0;i<text.length;i++){
      if(isEqualTo(text[i].toLowerCase(),["a","e","i","o","u"])){
        if(text[i].toLowerCase()==="a"){
          result+="@";
        }
        if(text[i].toLowerCase()==="e"){
          result+="£";
        }
        if(text[i].toLowerCase()==="i"){
          result+="1";
        }
        if(text[i].toLowerCase()==="o"){
          result+="0";
        }
        if(text[i].toLowerCase()==="u"){
          result+="µ";
        }
      }else{
        result+=text[i];
      }
    }
    text=result;
  }else if(conversion==="remove_vowels"){
    let result = "";
    for(let i = 0;i<text.length;i++){
      if(!isEqualTo(text[i].toLowerCase(),["a","e","i","o","u"])){
        result+=text[i];
      }
    }
    text=result;
  }else if(conversion==="mocking"){
    let result = "";
    for(let i = 0;i<text.length;i++){
      if(i%2===0){
        result+=text[i].toLowerCase();
      }else{
        result+=text[i].toUpperCase();
      }
    }
    text=result;
  }else if(conversion==="waluigi"){
    let result = "";
    for(let i = 0;i<text.length;i++){
      if(isEqualTo(text[i].toLowerCase(),["a","e"])){
        result+="wah";
      }else if(isEqualTo(text[i].toLowerCase(),["A","E"])){
        result+="WAH";
      }else{
        result+=text[i];
      }
    }
    text=result;
  }else if(conversion==="waluigi"){
    let result = "";
    for(let i = 0;i<text.length;i++){
      if(isEqualTo(text[i].toLowerCase(),["a","e"])){
        result+="wah";
      }else if(isEqualTo(text[i].toLowerCase(),["A","E"])){
        result+="WAH";
      }else{
        result+=text[i];
      }
    }
    text=result;
  }else if(conversion==="reverse_cap"){
    let result = "";
    for(let i = 0;i<text.length;i++){
      if(text[i]===text[i].toUpperCase()){
        result+=text[i].toLowerCase();
      }else{
        result+=text[i].toUpperCase();
      }
    }
    text=result;
  }else if(conversion==="fix_cap"){
    let result = text.split(" ");
    for(let i = 0;i<result.length;i++){
      result[i]=result[i][0].toUpperCase()+result[i].toLowerCase().slice(1);
    }
    text=result.join(" ");
  }else if(conversion==="britishify"){
    text=text.toLowerCase();
    let c = [["flat","apartment"],["appetizer","starter"],["fringe","bangs"],["hairslide","barrette"],["grill","broil"],["grill","boiler"],["sweet","candy"],["mobile phone","cell phone"],["crisp","chip"],["wardrobe","closet"],["biscuit","cookie"],["biscuit","cracker"],["candyfloss","cotton candy"],["anticlockwise","counter clockwise"],["cot","crib"],["nappy","diaper"],["chemist","drugstore"],["aubergine","eggplant"],["junior school","elementary school"],["lift","elevator"],["motorway","expressway"],["motorway","highway"],["chips","french fries"],["dustbin","garbage can"],["petrol","gasoline"],["petrol","gas"],["bonnet","hood"]];
    for(let i = 0;i<c.length;i++){
      text = text.split(c[i][1]).join(c[i][0]);
    }
  }
  document.getElementById("result").value = text;
}

function copy(){
  document.getElementById("result").select();
  document.execCommand('copy');
}
