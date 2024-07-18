// 08:40

// get all necessary elements

const employeeList = document.querySelector(".employees__names--list");

const employeeDetails = document.querySelector(".employees__single--details");
const employeeImgContainer = document.querySelector(".employee__image");
const employeeInfo = document.querySelector(".employee__info");

const addNewBtn = document.querySelector(".header__button");
const modalContainer = document.querySelector(".modal__container");
const modalTitle = document.querySelector(".modal__title");
const form = document.querySelector(".modal__form");
const formSubmitBtn = document.querySelector(".modal__form--btn");

const FALLBACK_IMAGE_URL =
  "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=";

async function main() {
  const res = await fetch("./data.json");
  const data = await res.json();
  let employees = data;

  let selectedId = employees[0].id;
  let selectedEmp = employees[0];

  renderEmpList();
  renderEmpDetails(selectedEmp);

  // handle item click for each employee
  employeeList.addEventListener("click", (e) => {
    let target = e.target;
    let currentTarget = e.currentTarget;

    // set the selected employee to the clicked item, if the click is on the item and not its icons for edit or delete
    if (target.tagName === "LI" && target.tagName !== "SPAN") {
      selectedId = +target.id;
      selectedEmp = employees.find((emp) => emp.id === selectedId);
    }

    // handle deleting item
    if (target.tagName === "I" && target.classList.contains("deleteBtn")) {
      let toBeDeletedItemId = +target.parentElement.parentElement.id;

      employees = employees.filter((emp) => emp.id !== toBeDeletedItemId);

      // if user deleted the selected item, then the first item in the array becomes the next selected item
      if (selectedId === toBeDeletedItemId) {
        selectedId = employees[0]?.id || null;
        selectedEmp = employees[0] || null;
      }
    }

    // handle edit for each item
    if (target.tagName === "I" && target.classList.contains("editBtn")) {
      selectedId = +target.parentElement.parentElement.id;

      selectedEmp = employees.find((emp) => emp.id == selectedId);

      // populate the inputs inside the form with the values of the item to be edited
      for (const key in selectedEmp) {
        const input = form.querySelector(`[name=${key}]`);
        if (input) {
          input.value = selectedEmp[key];
        }
      }

      form.dataset.type = "edit";
      formSubmitBtn.textContent = "Edit";
      modalTitle.textContent = "Edit Employee Details";
      modalContainer.classList.add("modal--show");
    }

    renderEmpList();
    renderEmpDetails(selectedEmp);
  });

  // show/hide modal functionality. Once form is open on this button click, we can add new employees. Hence, the type of the operation is "add"
  addNewBtn.addEventListener("click", () => {
    form.dataset.type = "add";
    formSubmitBtn.textContent = "Add";
    modalTitle.textContent = "Add New Employee";
    modalContainer.classList.add("modal--show");
  });
  modalContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal__container")) {
      form.reset();
      modalContainer.classList.remove("modal--show");
    }
  });

  form.addEventListener("submit", (e) => {
    const type = form.dataset.type;
    handleFormSubmit(e, type);
  });

  function renderEmpList() {
    employeeList.innerHTML = "";

    employees.forEach((emp) => {
      // create new li item for each employee and apend it to the employeeList element
      let employee = generateNewElement("li", emp.name, [
        "employees__names--item",
      ]);
      employee.setAttribute("id", emp.id);

      if (+emp.id === selectedId) {
        employee.classList.add("item--selected");
      }

      // create icon and append to the employee li element
      const icons = generateNewElement("span", "", ["icons"]);

      const editBtn = generateNewElement("i", "", [
        "ri-edit-2-fill",
        "icon",
        "editBtn",
      ]);
      const deleteBtn = generateNewElement("i", "", [
        "ri-close-line",
        "icon",
        "deleteBtn",
      ]);

      icons.appendChild(editBtn);
      icons.appendChild(deleteBtn);
      employee.appendChild(icons);

      employeeList.appendChild(employee);
    });
  }

  function renderEmpDetails(emp) {
    if (!emp) {
      employeeImgContainer.innerHTML = "";
      employeeInfo.innerHTML = "";
      return;
    }

    employeeImgContainer.innerHTML = "";
    employeeInfo.innerHTML = "";

    // render image
    const img = generateNewElement("img", "", "");
    img.src = emp.imageUrl || FALLBACK_IMAGE_URL;
    employeeImgContainer.appendChild(img);

    // render info
    const name = generateNewElement("h3", emp.name, ["employee__info--name"]);
    const email = generateNewElement("p", emp.email, ["employee__info--email"]);

    const mobile = generateNewElement("p", emp.mobile);
    const dob = generateNewElement("p", emp.dob);

    const addressContainer = generateNewElement("p", "Address: ");
    const address = generateNewElement("span", emp.address);
    addressContainer.appendChild(address);

    employeeInfo.appendChild(name);
    employeeInfo.appendChild(email);
    employeeInfo.appendChild(mobile);
    employeeInfo.appendChild(dob);
    employeeInfo.appendChild(addressContainer);
  }

  function handleFormSubmit(e, type) {
    e.preventDefault();

    const formData = new FormData(form);
    const entries = [...formData.entries()];
    let emp = {};

    entries.forEach((entry) => {
      emp[entry[0]] = entry[1];
    });

    emp.imageUrl = emp.imageUrl || FALLBACK_IMAGE_URL;

    if (type === "edit") {
      emp = { ...selectedEmp, ...emp };
      employees = employees.map((employee) =>
        employee.id === emp.id ? emp : employee
      );
    } else if (type === "add") {
      emp.id =
        employees.length > 1 ? employees[employees.length - 1].id + 1 : 1;
      employees.push(emp);
    }

    selectedId = emp.id;
    selectedEmp = employees.find((employee) => employee.id === selectedId);

    renderEmpList();
    renderEmpDetails(selectedEmp);

    form.reset();
    modalContainer.classList.remove("modal--show");
  }
}

main();

function generateNewElement(tagName, content, classes) {
  const element = document.createElement(tagName);
  element.textContent = content;
  classes?.length >= 1 ? element.classList.add(...classes) : "";

  return element;
}
