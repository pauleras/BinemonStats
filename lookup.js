var urlBine;

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('binemonID').addEventListener('click', myAlert);
});

function myAlert(){
  // alert('hello world');
  var valor = document.getElementById("tokenid_input").value;
  urlBine = valor;
  if(urlBine == null){
    alert("Insert tokenID");
  }else{

    //let url = 'https://api.binemon.io/api/binemons/token/483763';
    let url = 'https://api.binemon.io/api/binemons/token/'+urlBine;

    fetch(url)
    .then(res => res.json())
    .then((bine) => {
      //itens do JSON
      bName = bine.response.binemon_item.name;
      bID = bine.response.binemon_item.tokenID;
      bThumb = bine.response.binemon_item.thumbnail;
      bSkills = bine.response.binemon_item.skills;
      //referências no HTML
      document.getElementById("bName").innerHTML = bName;
      document.getElementById("bID").innerHTML = `(${bID})`;
      document.getElementById("thumb").innerHTML = `<img class="thumb" src="${bThumb}" />`;
      document.getElementById("bPassive").innerHTML = bSkills[0];
      document.getElementById("bUltimate").innerHTML = bSkills[1];
      
    })
  }

  }