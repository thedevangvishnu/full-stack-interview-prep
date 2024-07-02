// get all necessary elements
const employeesList = document.querySelector(".employees__names--list");

const employeeSingle = document.querySelector(".employees__single");
const employeeDetails = document.querySelector(".employees__single--details");

const employeeImgContainer = document.querySelector(".employee__image");
const employeeInfo = document.querySelector(".employee__info");

const addEmployeeBtn = document.querySelector(".header__button");

const modalContainer = document.querySelector(".modal__container");
const form = document.querySelector(".modal__form");

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
      const deleteBtn = generateDOMElement("span", "x");

      employee.appendChild(employeeName);
      employee.appendChild(deleteBtn);

      employeesList.appendChild(employee);

      // select employee
      // consider performance optimization here.
      employee.addEventListener("click", (e) => handleClick(e));

      // delete employee
      deleteBtn.addEventListener("click", (e) => {
        if (e.target.tagName === "SPAN") {
          e.stopPropagation();
          const itemId = parseInt(e.target.parentElement.id);
          handleDelete(e, itemId);
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
  addEmployeeBtn.addEventListener("click", () => {
    modalContainer.classList.add("modal--show");
  });

  modalContainer.addEventListener("click", (e) => {
    if (e.target.id === "modal-container") {
      modalContainer.classList.remove("modal--show");
    }
  });

  // add employee using form
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newEmp = {};
    const formData = new FormData(form);
    const entries = [...formData.entries()];

    console.log(entries);

    entries.forEach((entry) => {
      console.log("Each entry value", entry[1]);
      newEmp[entry[0]] = entry[1];
    });

    newEmp.id = employees.length > 0 ? employees.length + 1 : 1;

    newEmp.imageUrl =
      newEmp.imageUrl ||
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=";

    // handle dob

    employees.push(newEmp);
    selectedEmpId = newEmp.id;
    selectedEmp = newEmp;

    modalContainer.classList.remove("modal--show");

    renderEmpList();
    renderEmpDetails(selectedEmp);

    form.reset();
  });
}

main();

// helper function
function generateDOMElement(tag, content, classes) {
  const element = document.createElement(tag);
  element.innerHTML = content || "";

  classes ? element.classList.add(...classes) : "";

  return element;
}

/**
 * TO DOs:
 *    - add "Edit" functionality
 *    - localStorage
 *    - restrictions inside form
 *    - add toasts
 */
