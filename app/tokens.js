var selectedTokenSymbol;
var tokensSavedData = "";

startTokensLoading();

function showTokens() {
    document.getElementById("token-choose").style.visibility = "visible";
  }
  function hideTokens() {
    document.getElementById("token-choose").style.visibility = "hidden";
  }

  function addToken(tokenAddress, symbol, name) {

    console.log("huh");
    
    let div = document.createElement('div');
    let hr = document.createElement('hr');
    let img = document.createElement('img');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');

    div.id = 'token-token';
    hr.id = 'token-token-empty';
    img.id = 'token-token-icon';
    div1.id = 'token-token-symbol';
    div2.id = 'token-token-name';

    img.src = "assets\\img\\" + symbol + ".png"
    div1.innerHTML = symbol;
    div2.innerHTML = name;

    div.onclick = function(event) {setToken(tokenAddress, symbol);}

    //div.onclick = setToken(tokenAddress, symbol);

    div.appendChild(hr);
    div.appendChild(img);
    div.appendChild(div1);
    div.innerHTML += "<br/>";
    div.appendChild(div2);

    console.log("wtf");
    document.getElementById('token-select').appendChild(div);
    console.log("wtf1");

  }

  function setToken(tokenAddress, symbol) {
    selectedToken = tokenAddress;
    selectedTokenSymbol = symbol;
    document.getElementById('token-icon').src = "assets/img/" + symbol + ".png";
    document.getElementById('token-name').innerHTML = symbol;
    document.getElementById('token-choose').style.visibility = "hidden";
  }

function startTokensLoading() {
    readTextFile();
  }
  
function readTextFile() {

  fetch('assets/Tokens.txt')
  .then(response => response.text())
  .then(text => loadTokens(text));
}

function loadTokens(data) {
  var newData = data + "";
  tokensSavedData = newData;
  var tokensData = newData.split(':');

  for(t = 0; t < tokensData.length; t += 3){
    addToken(tokensData[t], tokensData[t+1], tokensData[t+2]);
  }
}

function search(){
  document.getElementById("token-select").innerHTML = "";
  console.log(tokensSavedData);
  var tokensData = tokensSavedData.split(':');
  var input = document.getElementById("token-input").value + "";
  console.log(input);
  for(t = 0; t < tokensData.length; t += 3){
    if(tokensData[t+1].includes(input.toUpperCase())){
      addToken(tokensData[t], tokensData[t+1], tokensData[t+2]);
    }
  }
}
