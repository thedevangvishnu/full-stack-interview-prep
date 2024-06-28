const addEmployeeBtn = document.querySelector(".add__employee");
const employeeList = document.querySelector(".employee-list");
const employeeInfo = document.getElementById("employee-info");
const modalContainer = document.querySelector(".modal__container");

const form = document.getElementById("form");
const submitBtn = document.getElementById("submitBtn");

async function main() {
  const res = await fetch("./data.json");
  const data = await res.json();

  let employees = data;
  let selectedEmpId = employees[0].id;
  let selectedEmp = employees[0];

  // render employee list
  function renderEmployeeList() {
    employeeList.innerHTML = "";
    employees.forEach((emp) => {
      const item = generateElement("li", "", "item");
      item.setAttribute("id", emp.id);

      if (parseInt(item.id) === selectedEmpId) {
        item.classList.add("selected");
      }

      const name = generateElement("h4", emp.name, "");
      const deleteBtn = generateElement("span", "x", "");

      item.appendChild(name);
      item.appendChild(deleteBtn);

      employeeList.appendChild(item);

      item.addEventListener("click", (e) => {
        handleItemClick(e);
      });

      //   delete item
      deleteBtn.addEventListener("click", (e) => handleDelete(e));
    });
  }

  function handleItemClick(e) {
    let target = e.target;

    if (target.tagName === "H4") {
      target = target.parentElement;
    }

    if (target.tagName === "LI" && parseInt(target.id) !== selectedEmpId) {
      selectedEmpId = parseInt(target.id);
      selectedEmp = employees.find((emp) => emp.id === Number(selectedEmpId));

      document.querySelectorAll(".item").forEach((item) => {
        item.classList.remove("selected");
      });

      target.classList.add("selected");
      renderEmployeeDetails(selectedEmp);
    }
  }

  function handleDelete(e) {
    e.stopPropagation();

    const target = e.target;
    const toBeDeletedItem = target.parentElement;

    employees = employees.filter(
      (emp) => emp.id !== Number(toBeDeletedItem.id)
    );
    renderEmployeeList();

    if (employees.length <= 0) {
      selectedEmpId = null;
      selectedEmp = null;
      renderEmployeeDetails(selectedEmp);
    }

    if (selectedEmpId == toBeDeletedItem.id) {
      selectedEmpId = employees[0].id || null;
      selectedEmp = employees[0] || null;
      renderEmployeeList();
      renderEmployeeDetails(selectedEmp);
    }
  }

  // render employee details
  function renderEmployeeDetails(employee) {
    if (!employee) {
      employeeInfo.innerHTML = "";
      return;
    }

    employeeInfo.innerHTML = "";

    const imageDiv = generateElement("div", "", "image");
    const img = generateElement("img", "", "");
    img.setAttribute("src", employee.imageUrl);
    imageDiv.appendChild(img);

    const details = generateElement("div", "", "details");

    const name = generateElement("h3", employee.name, "details__name");
    const addressTag = generateElement("p", "Address: ", "");
    const address = generateElement("span", employee.address, "");
    const email = generateElement("p", employee.email, "");
    const mobile = generateElement("p", employee.mobile, "");
    const dob = generateElement("p", employee.dob, "");

    addressTag.appendChild(address);

    details.appendChild(name);
    details.appendChild(addressTag);
    details.appendChild(email);
    details.appendChild(mobile);
    details.appendChild(dob);

    employeeInfo.appendChild(imageDiv);
    employeeInfo.appendChild(details);
  }

  // show module
  addEmployeeBtn.addEventListener("click", () => {
    modalContainer.classList.add("show");
  });

  // close modal
  modalContainer.addEventListener("click", (e) => {
    const classes = e.target.classList.value;
    if (classes.includes("modal__container")) {
      modalContainer.classList.remove("show");
    }
  });

  // handle form submit
  function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const entries = [...formData.entries()];
    const emp = {};

    entries.forEach((entry) => {
      emp[entry[0]] = entry[1];
    });

    emp.id = employees.length > 0 ? employees.length + 1 : 1;
    emp.imageUrl =
      emp.imageUrl ||
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=";

    employees.push(emp);

    selectedEmpId = emp.id;
    selectedEmp = emp;

    renderEmployeeList();
    renderEmployeeDetails(selectedEmp);

    form.reset();
    modalContainer.classList.remove("show");
  }

  form.addEventListener("submit", (e) => handleFormSubmit(e));

  renderEmployeeList();
  renderEmployeeDetails(selectedEmp);
}

main();

// helper functions
function generateElement(tag, content, classes) {
  const element = document.createElement(tag);

  classes.length > 0 ? element.classList.add(classes) : "";
  element.innerHTML = content;

  return element;
}
