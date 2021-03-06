function populateUfs(){
  const ufSelect = document.querySelector("select[name=uf]")

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(res => 
     res.json()
  ).then(states => {
    for(const state of states){
      ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
    }
  })
}

populateUfs()

function getCities(event){
  const citySelect = document.querySelector("select[name=city]")
  const stateInput = document.querySelector("[name=state]")

  const ufValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  citySelect.innerHTML = "<option value>Selecione a cidade</option>"
  citySelect.disabled = true
    fetch(url).then(res => 
    res.json())
      .then(cities=> {
      for(const city of cities){
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
      }
      citySelect.disabled = false
  })
}

document
  .querySelector("select[name=uf]")
    .addEventListener("change", getCities)



//Itens de coleta
//Pegr todos os 'li's'
const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
  item .addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []


function handleSelectedItem(e){
  //add or remove classes with JS
  const itemLi = e.target
  itemLi.classList.toggle("selected")

  const itemId = itemLi.dataset.id
  
  const alreadySelected = selectedItems.findIndex(item => {
    const itemFound = item == itemId
    return itemFound
  })
  if(alreadySelected >= 0){
    //Remove of selection
    const filteredItems = selectedItems.filter(item => {
      const itemIsDifferent = item != itemId
      return itemIsDifferent
    })
       selectedItems = filteredItems
  }else{
    //Add to selection
    selectedItems.push(itemId)
  }
  
  collectedItems.value = selectedItems
}

function errorDetected(err){
  if(err){
    console.log(err)
    alert("Erro no cadastro")
  }
}