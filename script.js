document.addEventListener("DOMContentLoaded", () => {
  myCustomDropDownMenu = function (options) {
    this.options = options;
    this.init(options);
  };

  myCustomDropDownMenu.prototype = {
    init: function (options) {
      this.render(options.renderTo, options.items, options.listeners);
    },
    render: function (div, items, listener) {
      var currentDiv = document.getElementById(`${div}`);
      var optionsHtml = ``;
      items.forEach((element) => {
        if (element.text === `option0`)
          optionsHtml += `<span class="custom-option selected" value="${element.value}">${element.text}</span>`;
        else {
          optionsHtml += `
          <span class="custom-option" value="${element.value}">${element.text}</span>
          `;
        }
      });
      currentDiv.innerHTML += `<div class="custom-select">
      <div class="custom-select__trigger"><span>Option0</span>
          <div class="arrow"></div>
      </div>
      <div class="custom-options"> ${optionsHtml} </div>`;
      var options = currentDiv.querySelectorAll(".custom-option");
      options.forEach((option) => {
        option.addEventListener("click", (e) => {
          listener.selectionChange(e.target);
        });
      });
      document.body.appendChild(currentDiv);

      document.getElementById(`${div}`).addEventListener("click", function () {
        this.querySelector(".custom-select").classList.toggle("open");
      });

      for (const option of document.querySelectorAll(".custom-option")) {
        option.addEventListener("click", function () {
          if (!this.classList.contains("selected")) {
            this.classList.add("selected");
            this.parentNode
              .querySelector(".custom-option.selected")
              .classList.remove("selected");
            this.closest(".custom-select").querySelector(
              ".custom-select__trigger span"
            ).textContent = this.textContent;
          }
        });
      }
    },
  };

  const dropDown = new myCustomDropDownMenu({
    renderTo: "myDropDownContainer",
    emptyText: "Select some option",
    items: [
      {
        text: "option0",
        value: "option0",
      },
      {
        text: "option1",
        value: "option1",
      },
      {
        text: "option2",
        value: "option2",
      },
    ],
    listeners: {
      selectionChange: (selectedValue) => {
        alert(`selected value is ${selectedValue.innerHTML}`);
      },
    },
  });
});
