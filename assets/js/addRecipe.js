const response = await fetch('ingredients.json')
const item = await response.json()

function addItemInput() {
    const itemsContainerEl = document.querySelector('.item-container')
    const itemContainerEl = document.createElement('div')

    itemContainerEl.innerHTML = `
        <input class="item-name" type="text" placeholder="Tapez votre ingrédient...">
        <input class="item-quantity" type="text" placeholder="Quantité">
        <p class="item-unit">g</p>
        <button class="btn-remove-item">X</button>
    `
    
    itemsContainerEl.appendChild(itemContainerEl)

    const btnRemoveItem = itemContainerEl.querySelector("button")
    btnRemoveItem.addEventListener('click', removeItemInput)

    const itemNameInput = document.querySelector('.item-name')
    itemNameInput.addEventListener('input', () => matchInputName(itemNameInput))
}

function removeItemInput(e) {
    e.target.parentElement.remove()
}

function clearAllInput() {
    const recipeNameInput = document.querySelector('.recipe-name')
    recipeNameInput.value = ''
}

function matchInputName(inputEl) {
    let found = false

    for(let i = 0; i < item.length; i++) {
        const itemUnitInput = document.querySelector('.item-unit')
        if(inputEl.value === item[i].name) {
            found = true
            itemUnitInput.textContent = item[i].unit
            break
        }
    }

    if (found === true) {
        console.log('Trouvé')
    } else {
        console.log('Oups')
    }
}

const btnAddItem = document.querySelector(".btn-add-item")
const btnValidForm = document.querySelector('.btn-valid-form')

btnAddItem.addEventListener('click', addItemInput)
btnValidForm.addEventListener('click', clearAllInput)