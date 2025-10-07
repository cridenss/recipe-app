const response = await fetch("ingredients.json");
const ingredients = await response.json();

function addItemInput() {
  const itemsContainerEl = document.querySelector(".item-container");
  const itemContainerEl = document.createElement("div");
  itemContainerEl.classList.add("item-wrapper");

  itemContainerEl.innerHTML = `
        <div class="item-input-wrapper">
            <input class="item-name" type="text" placeholder="Tapez votre ingrédient...">
            <ul class="dropdown"></ul>
        </div>
        <input class="item-quantity" type="text" placeholder="Quantité">
        <p class="item-unit">g</p>
        <button class="btn-remove-item">X</button>
    `;

  itemsContainerEl.appendChild(itemContainerEl);

  const btnRemoveItem = itemContainerEl.querySelector("button");
  btnRemoveItem.addEventListener("click", removeItemInput);

  const itemNameInput = itemContainerEl.querySelector(".item-name");
  itemNameInput.addEventListener("input", () => matchInputName(itemNameInput));
}

function removeItemInput(e) {
  e.target.parentElement.remove();
}

function clearAllInput() {
  const recipeNameInput = document.querySelector(".recipe-name");
  recipeNameInput.value = "";
}

function matchInputName(inputEl) {
  let found = false;

  const itemWrapper = inputEl.closest(".item-wrapper");
  const itemUnitInput = itemWrapper.querySelector(".item-unit");

  for (let i = 0; i < ingredients.length; i++) {
    if (inputEl.value.toLowerCase() === ingredients[i].name.toLowerCase()) {
      found = true;
      itemUnitInput.textContent = ingredients[i].unit;
      break;
    }
  }

  generateDropdown(inputEl.nextElementSibling, inputEl.value);
}

function generateDropdown(ulEl, inputValue) {
  ulEl.innerHTML = ""

  for (let i = 0; i < ingredients.length; i++) {
    const itemName = ingredients[i].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    
    if (itemName.startsWith(inputValue)) {
          const li = document.createElement("li");
          li.textContent = ingredients[i].name
          li.addEventListener('click', handleDropdownClick(li, ulEl))

          ulEl.appendChild(li)
    }
  }
}

function handleDropdownClick(listEl, listContainer) {
  listEl.addEventListener("click", () => {
    const inputEl = listContainer.previousElementSibling;
    inputEl.value = listEl.textContent;
    listContainer.innerHTML = "";
    matchInputName(inputEl);
  });
}

const btnAddItem = document.querySelector(".btn-add-item");
const btnValidForm = document.querySelector(".btn-valid-form");

btnAddItem.addEventListener("click", addItemInput);
btnValidForm.addEventListener("click", clearAllInput);