const removeBtn = document.getElementById("delete");
const table = document.getElementById("recipe");
const addBtn = document.getElementById("add");
const inputTitle = document.getElementById("recipe-title");
const inputDesc = document.getElementById("recipe-desc");
const inputValue = document.getElementById("filter");
const recipes = [
  {
    title: "Apple cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    title: "Orange cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    title: "Peach cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    title: "Chocolate cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    title: "Moskva cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
];

const render = (value = recipes) => {
  let newRecipes = [];
  value.forEach(({ title, description }, index) => {
    newRecipes.push(`<tr><td><h2>${title} </h2>
    <button class="submit" onClick="removeElement(${index})">Delete</button>
    <p>${description}</p><td/></tr>`);
  });
  table.innerHTML = newRecipes.join("");
  inputTitle.value = "";
  inputDesc.value = "";
};

const removeLastOne = () => {
  recipes.pop();
  render();
};

const removeElement = (indexCake) => {
  recipes.splice(indexCake, 1);
  // recipes.pop();
  render();
};

const addNewRecipe = () => {
  recipes.push({
    title: `${inputTitle.value}`,
    description: `${inputDesc.value}`,
  });
  render();
};

const searchRecipes = () => {
  console.log("mladen");
  let newRecipes = recipes.filter((el) => {
    console.log(el.title);
    console.log(inputTitle.value);
    return el.title.includes(inputTitle.value);
  });
  console.log(newRecipes);
  render(newRecipes);
};
render();

removeBtn.addEventListener("click", removeLastOne);
addBtn.addEventListener("click", addNewRecipe);
inputValue.addEventListener("input", searchRecipes);
