const removeBtn = document.getElementById("delete");
const table = document.getElementById("recipe");
const addBtn = document.getElementById("add");
const inputTitle = document.getElementById("recipe-title");
const inputDesc = document.getElementById("recipe-desc");
const inputValue = document.getElementById("filter");
const pages = document.getElementById("pages");
const cancelBtn = document.getElementById("cancel");
const saveBtn = document.getElementById("save");
const validationMessage = document.getElementById("validation-message");
const recipes = [
  {
    id: 1,
    title: "Apple cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    id: 2,
    title: "Orange cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    id: 3,
    title: "Peach cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    id: 4,
    title: "Chocolate cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    id: 5,
    title: "Moskva cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },

  {
    id: 6,
    title: "Plum cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },

  {
    id: 7,
    title: "Koh cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },

  {
    id: 8,
    title: "Cheesecake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },

  {
    id: 9,
    title: "Banana cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },

  {
    id: 10,
    title: "Milky cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },

  {
    id: 11,
    title: "Icecream cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },

  {
    id: 12,
    title: "Cherry cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },

  {
    id: 13,
    title: "Rainbow cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },

  {
    id: 14,
    title: "Serbian cake",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
];
let paginatedRecipes = [];
let filteredRecipes = [];
let filterInpValue = "";
let number;
let elId;
let pageNumber = 1;
let isPressed = false;
let message = "";
const render = () => {
  let newRecipes = [];
  filteredRecipes = recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(filterInpValue.toLowerCase());
  });

  number =
    filteredRecipes.length < 5 ? 1 : Math.ceil(filteredRecipes.length / 5);
  pages.innerHTML = null;
  for (i = 1; i <= number; i++) {
    pages.innerHTML += `<div id="page" class="page" onClick="selectedPage(${i})">${i}</div>`;
  }

  paginatedRecipes = filteredRecipes.slice(
    (pageNumber - 1) * 5,
    pageNumber * 5
  );

  // paginate();

  paginatedRecipes.forEach(({ id, title, description }) => {
    newRecipes.push(`<tr><td><h2>${title} </h2>
    <button class="submit" onClick="removeElement(${id})">Delete</button>
    <button class="submit" id="edit" onClick="getElement(${id})">Edit</button>
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

const removeElement = (id) => {
  let indexCake = recipes.findIndex((element) => element.id === id);
  recipes.splice(indexCake, 1);
  render();
};

const validate = () => {
  if (inputTitle.value === "" || inputDesc.value === "") {
    message = "Everything must be filled out";
    return false;
  } else if (
    recipes.some((element) => {
      return element.title === inputTitle.value;
    }) &&
    !isPressed
  ) {
    message = "The recipe already exists";
    return false;
  }
  return true;
};

const addNewRecipe = () => {
  if (validate()) {
    recipes.push({
      title: `${inputTitle.value}`,
      description: `${inputDesc.value}`,
    });
    render();
  } else {
    validationMessage.className = "validation-message";
    validationMessage.textContent += message;
  }
};

const searchRecipes = (event) => {
  filterInpValue = event.target.value;
  render();
};

const selectedPage = (pageNum) => {
  pageNumber = pageNum;
  render();
};

const getElement = (elementId) => {
  isPressed = true;
  addBtn.className = "display-none";
  saveBtn.className = "save";
  cancelBtn.className = "cancel";
  recipes.forEach((element) => {
    if (element.id === elementId) {
      elId = elementId;
      inputTitle.value = element.title;
      inputDesc.value = element.description;
    }
  });
};

const editElement = () => {
  if (validate()) {
    let index = recipes.findIndex((element) => element.id === elId);
    recipes[index].title = inputTitle.value;
    recipes[index].description = inputDesc.value;
    cancelInput();
    render();
  }
};

const cancelInput = () => {
  isPressed = false;
  inputTitle.value = "";
  inputDesc.value = "";
  saveBtn.className = "display-none";
  cancelBtn.className = "display-none";
  addBtn.className = "add";
};

// const numberOfPages = () => {
//   number =
//     filteredRecipes.length < 5 ? 1 : Math.ceil(filteredRecipes.length / 5);
//   pages.innerHTML = null;
//   for (i = 1; i <= number; i++) {
//     pages.innerHTML += `<div id="page" class="page" onClick="selectedPage(${i})">${i}</div>`;
//   }
// };

// const paginate = () => {
//   paginatedRecipes = filteredRecipes.slice(
//     (pageNumber - 1) * 5,
//     pageNumber * 5
//   );
// };
render();

removeBtn.addEventListener("click", removeLastOne);
inputValue.addEventListener("input", searchRecipes);
cancelBtn.addEventListener("click", cancelInput);
addBtn.addEventListener("click", addNewRecipe);
saveBtn.addEventListener("click", editElement);
