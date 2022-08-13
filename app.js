const removeBtn = document.getElementById("delete");
const table = document.getElementById("recipe");
const addBtn = document.getElementById("add");
const inputTitle = document.getElementById("recipe-title");
const inputDesc = document.getElementById("recipe-desc");
const inputValue = document.getElementById("filter");
const pages = document.getElementById("pages");
// const editDiv = document.getElementById("edit");
const editTitleInp = document.getElementById("edit-title");
const editDescInp = document.getElementById("edit-desc");
const cancelBtn = document.getElementById("cancel");
const saveBtn = document.getElementById("save");
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

  paginatedRecipes.forEach(({ id, title, description }, index) => {
    newRecipes.push(`<tr><td><h2>${title} </h2>
    <button class="submit" onClick="removeElement(${index})">Delete</button>
    <button class="submit" id="edit" onClick="getElement(${id})">Edit</button>
    <p>${description}</p><td/>
    <div id="edit" class="${isPressed ? "edit" : "editNone"}">
          <input
            type="text"
            class="edit-title"
            id="edit-title"
            placeholder="Name"
          />
          <input
            type="text"
            class="edit-desc"
            id="edit-desc"
            placeholder="Description"
          />
          <button class="save" id="save">Save</button>
          <button class="cancel" id="cancel">Cancel</button>
        </div></tr>`);
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
  render();
};

const addNewRecipe = () => {
  recipes.push({
    title: `${inputTitle.value}`,
    description: `${inputDesc.value}`,
  });
  render();
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
  // isPressed ? (editDiv.className = "edit") : (editDiv.className = "editNone");
  recipes.forEach((element) => {
    if (element.id === elementId) {
      elId = elementId;
      editTitleInp.value = element.title;
      editDescInp.value = element.description;
    }
  });
};

const editElement = () => {
  let index = recipes.findIndex((element) => element.id === elId);
  recipes[index].title = editTitleInp.value;
  recipes[index].description = editDescInp.value;
  render();
};

const cancelInput = () => {
  editTitleInp.value = "";
  editDescInp.value = "";
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
addBtn.addEventListener("click", addNewRecipe);
inputValue.addEventListener("input", searchRecipes);
cancelBtn.addEventListener("click", cancelInput);
saveBtn.addEventListener("click", editElement);
