var urlBine;

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('binemonID').addEventListener('click', myAlert);
});

function myAlert(){
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
      // Raça
      bBreed = bine.response.binemon_item.breed;
      // Classe de luta
      bClass = bine.response.binemon_item.class;
      bRank = bine.response.binemon_item.rank;
      bLevel = bine.response.binemon_item.level;

      if (bBreed == 1){
        bBreed = '<img src="https://app.binemon.io/images/breed-dog.png" alt="Dog"/>';
      }if (bBreed == 2){
        bBreed = '<img src="https://app.binemon.io/images/breed-cat.png" alt="Cat"/>';
      }if (bBreed == 3){
        bBreed = '<img src="https://app.binemon.io/images/breed-titan.png" alt="Titan"/>';
      }if (bBreed == 4){
        bBreed = '<img src="https://app.binemon.io/images/breed-unicorn.png" alt="Unicorn"/>';
      }
      console.log(bBreed);

      if (bClass == 1){
        bClass = '<img src="https://app.binemon.io/images/dps-class.png" alt="Fighter" title="Fighter"/>';
      }if (bClass == 2){
        bClass = '<img src="https://app.binemon.io/images/tanker-class.png" alt="Tanker" title="Tanker"/>';
      }if (bClass == 3){
        bClass = '<img src="https://app.binemon.io/images/support-class.png" alt="Support" title="Support"/>';
      }if (bClass == 4){
        bClass = '<img src="https://app.binemon.io/images/mage-class.png" alt="Mage" title="Mage"/>';
      }if (bClass == 5){
        bClass = '<img src="https://app.binemon.io/images/archer-class.png" alt="Archer" title="Archer"/>';
      }
      console.log(bClass);

      if (bRank == 1){
        bRank = "E";
      }if (bRank == 2){
        bRank = "D";
      }if (bRank == 3){
        bRank = "C";
      }if (bRank == 4){
        bRank = "B";
      }if (bRank == 5){
        bRank = "A";
      }if (bRank == 6){
        bRank = "S";
      }if (bRank == 7){
        bRank = "SR";
      }
      console.log(bRank);
      
      //referências no HTML
      document.getElementById("bName").innerHTML = bName;
      document.getElementById("bID").innerHTML = `(${bID})`;
      document.getElementById("thumb").innerHTML = `<img class="thumb" src="${bThumb}" />`;
      document.getElementById("bPassive").innerHTML = bSkills[0];
      document.getElementById("bUltimate").innerHTML = bSkills[1];
      document.getElementById("bBreed").innerHTML = bBreed;
      document.getElementById("bClass").innerHTML = bClass;
      document.getElementById("bRank").innerHTML = bRank;
      document.getElementById("bLevel").innerHTML = bLevel;

      
    })
  }

  }