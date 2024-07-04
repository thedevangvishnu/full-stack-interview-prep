// get all necessary elements
const employeesList = document.querySelector(".employees__names--list");

const employeeSingle = document.querySelector(".employees__single");
const employeeDetails = document.querySelector(".employees__single--details");

const employeeImgContainer = document.querySelector(".employee__image");
const employeeInfo = document.querySelector(".employee__info");

const addEmployeeBtn = document.querySelector(".header__button");

const modalContainer = document.querySelector(".modal__container");
const modalTitle = document.querySelector(".modal__title");

const form = document.querySelector(".modal__form");
const formBtn = document.querySelector(".modal__form--btn");

const FALLBACK_IMAGE_URL =
  "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=";

async function main() {
  // fetch data
  const res = await fetch("./data.json");
  const data = await res.json();

  let employees = data;
  let selectedEmpId = employees[0].id;
  let selectedEmp = employees[0];

  renderEmpList();
  renderEmpDetails(selectedEmp);

  //   render employees list
  function renderEmpList() {
    employeesList.innerHTML = "";
    employees.forEach((emp) => {
      const employee = generateDOMElement("li", "", ["employees__names--item"]);
      employee.setAttribute("id", emp.id);

      if (parseInt(employee.id) === selectedEmpId) {
        employee.classList.add("item--selected");
      }

      const employeeName = generateDOMElement("h4", emp.name);
      // const deleteBtn = generateDOMElement("span", "x");

      const editBtn = generateDOMElement("i", "", ["ri-edit-2-fill", "icon"]);
      const deleteBtn = generateDOMElement("i", "", ["ri-close-line", "icon"]);

      const icons = generateDOMElement("span", "", ["icons"]);
      icons.appendChild(editBtn);
      icons.appendChild(deleteBtn);

      employee.appendChild(employeeName);
      employee.appendChild(icons);

      employeesList.appendChild(employee);

      // select employee
      // consider performance optimization here.
      employee.addEventListener("click", (e) => handleClick(e));

      // delete employee
      deleteBtn.addEventListener("click", (e) => {
        if (e.target.tagName === "I") {
          e.stopPropagation();
          // Each icon has a span as it's parent and each span has li as its parent. The id of each employee is  the id of the li element
          const itemId = parseInt(e.target.parentElement.parentElement.id);
          handleDelete(e, itemId);
        }
      });

      // edit employee functionality
      editBtn.addEventListener("click", (e) => {
        if (e.target.tagName === "I") {
          e.stopPropagation();

          const itemId = parseInt(e.target.parentElement.parentElement.id);
          handleEdit(e, itemId);
        }
      });

      function handleClick(e) {
        let target = e.target;
        if (target.tagName === "H4") {
          target = target.parentElement;
        }

        if (target.tagName === "LI" && parseInt(target.id) !== selectedEmpId) {
          // remove the "item-selected" from previous selected
          document
            .querySelectorAll(".employees__names--item")
            .forEach((item) => {
              item.classList.remove("item--selected");
            });

          selectedEmpId = parseInt(target.id);
          selectedEmp = employees.find((emp) => emp.id === selectedEmpId);
          renderEmpList();
          renderEmpDetails(selectedEmp);
        }
      }

      function handleDelete(e, itemId) {
        employees = employees.filter((emp) => emp.id !== itemId);

        renderEmpList();
        // when there are no employees left
        if (employees.length === 0) {
          selectedEmpId = null;
          selectedEmp = null;

          renderEmpDetails(selectedEmp);
        }

        // when the selected employee is deleted, make the first item in the list as the default selected employee.
        if (itemId === selectedEmpId) {
          selectedEmpId = employees[0].id || null;
          selectedEmp = employees[0] || null;
          renderEmpList();
          renderEmpDetails(selectedEmp);
        }
      }

      function handleEdit(e, itemId) {
        if (e.target.tagName === "I") {
          e.stopPropagation();
          selectedEmp = employees.find((emp) => emp.id === itemId);

          // populate form fields with the info about the selected item before opening
          for (const key in selectedEmp) {
            const input = form.querySelector(`[name=${key}]`);
            if (input) {
              input.value = selectedEmp[key];
            }
          }

          form.dataset.type = "edit";
          formBtn.textContent = "Save Changes";
          modalContainer.classList.add("modal--show");

          // modalContainer.classList.add("modal--show");
          // form.dataset.type = "edit";
        }
      }
    });
  }

  // render employee details
  function renderEmpDetails(emp) {
    if (!emp) {
      employeeImgContainer.innerHTML = "";
      employeeImgContainer.classList.remove("employee__image");
      employeeInfo.innerHTML = "";
      return;
    }

    employeeImgContainer.innerHTML = "";
    employeeImgContainer.classList.add("employee__image");
    employeeInfo.innerHTML = "";

    const employeeImg = generateDOMElement("img");
    employeeImg.setAttribute("src", emp.imageUrl);
    employeeImgContainer.appendChild(employeeImg);

    const employeeName = generateDOMElement("h3", emp.name, [
      "employee__info--name",
    ]);
    const employeeEmail = generateDOMElement("p", emp.email, [
      "employee__info--email",
    ]);

    const employeeAddressContainer = generateDOMElement("p", "Address: ");
    const employeeAddress = generateDOMElement("span", emp.address);
    employeeAddressContainer.appendChild(employeeAddress);

    const employeeMobileNumber = generateDOMElement("p", emp.mobile);
    const employeeDob = generateDOMElement("p", emp.dob);

    employeeInfo.appendChild(employeeName);
    employeeInfo.appendChild(employeeEmail);
    employeeInfo.appendChild(employeeAddressContainer);
    employeeInfo.appendChild(employeeMobileNumber);
    employeeInfo.appendChild(employeeDob);
  }

  // show/hide modal
  addEmployeeBtn.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.stopPropagation();

      form.dataset.type = "add";
      formBtn.textContent = "Add";
      modalContainer.classList.add("modal--show");
    }
  });

  modalContainer.addEventListener("click", (e) => {
    if (e.target.id === "modal-container") {
      form.reset();
      modalContainer.classList.remove("modal--show");
    }
  });

  form.addEventListener("submit", (e) => {
    // const type = form.dataset.type;
    // handleSubmit(e, type);

    const type = form.dataset.type;
    handleSubmit(e, type);
  });

  function handleSubmit(e, type) {
    e.preventDefault();
    const formData = new FormData(form);
    const employee = {};
    const entries = [...formData.entries()];
    for (const [key, value] of entries) {
      employee[key] = value;
    }
    if (type === "edit") {
      selectedEmp = { ...selectedEmp, ...employee };
      employees = employees.map((emp) =>
        emp.id === selectedEmp.id ? selectedEmp : emp
      );
    } else {
      employee.id = employees.length > 0 ? employees.length + 1 : 1;
      employee.imageUrl = employee.imageUrl || FALLBACK_IMAGE_URL;
      employees.push(employee);
      selectedEmp = employee;
    }

    selectedEmpId = selectedEmp.id;
    renderEmpList();
    renderEmpDetails(selectedEmp);
    form.reset();
    modalContainer.classList.remove("modal--show");
  }
}

main();

// helper function
function generateDOMElement(tag, content, classes) {
  const element = document.createElement(tag);
  element.innerHTML = content || "";

  classes ? element.classList.add(...classes) : "";

  return element;
}
