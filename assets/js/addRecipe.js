function addItem() {
    const itemsContainerEl = document.querySelector('.item-container')
    const itemContainerEl = document.createElement('div')

    itemContainerEl.innerHTML = `
        <input class="item-name" type="text" placeholder="Ingrédient">
        <input class="item-quantity" type="text" placeholder="Quantité">
        <select class="item-unit" name="" id="">
            <option value="unit">Unité</option>
            <option value="weight">g</option>
            <option value="liter">L</option>
        </select>
        <button class="btn-remove-item">X</button>
    `

    itemsContainerEl.appendChild(itemContainerEl)

    const btnRemoveItem = itemContainerEl.querySelector("button")
    btnRemoveItem.addEventListener('click', removeItem)
}

function removeItem(e) {
    e.target.parentElement.remove()
}

function loadRecipe() {
    const recipeNameInput = document.querySelector('.recipe-name')

    const recipeTitleEl = document.createElement('h2')
    recipeTitleEl.textContent = recipeNameInput.value

    const recipeContainerEl = document.createElement('div')
    recipeContainerEl.appendChild(recipeTitleEl)

    const recipesContainerEl = document.getElementById('recipes-container')
    recipesContainerEl.appendChild(recipeContainerEl)
}

function clearAll() {
    const recipeNameInput = document.querySelector('.recipe-name')
    recipeNameInput.value = ''
}

const btnAddItem = document.querySelector(".btn-add-item")
const btnValidForm = document.querySelector('.btn-valid-form')

btnAddItem.addEventListener('click', addItem)
btnValidForm.addEventListener('click', () => {
    loadRecipe()
    clearAll()
})

