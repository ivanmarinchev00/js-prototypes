document.addEventListener("DOMContentLoaded", () => {
  myCustomDropDownMenu = function (options) {
    this.options = options;
    this.init(options);
  };

  var selectedV = ""

  myCustomDropDownMenu.prototype = {
    init: function (options) {
      this.render(
        options.renderTo,
        options.items,
        options.listeners,
        options.click
      );
    },
    clearSelection: function () {
      var changed = document.querySelector(".custom-select__trigger span");
      changed.innerHTML = "Choose";
      this.selectedV = ""
    },
    chooseOption: function (value) {
      var div = document.getElementById(this.options.renderTo)
      for (let i = 0; i < this.options.items.length; i++) {
        if (this.options.items[i].value === value) {
         div
            .querySelector(".custom-select")
            .querySelector(".custom-select__trigger span").innerHTML =
            value;
            this.selectedV = value
        }
      }
    },
    getSelectedValue: function (){
      return this.selectedV
    },
    render: function (div, items, listener) {
      var currentDiv = document.getElementById(`${div}`);
      var buttonsDiv = document.getElementById("buttons");
      var optionsHtml = ``;

      items.forEach((element) => {
        optionsHtml += `<div class="option-row">
          <div class="left">
          <a class="${element.icon_font}"></a>
          </div>
          <div class="right">
          <span/><span class="custom-option" id="option" value="${element.value}"">${element.text}</span>
          </div>
          </div>
          `;
      });

      buttonsDiv.innerHTML = `<button id="clear">Clear Selection</button>
      <button id="select">Select Option 1</button>`;

      document.body.appendChild(buttonsDiv);

      currentDiv.innerHTML += `<div class="custom-select">
      <div class="custom-select__trigger"><span>Option0</span>
          <div class="arrow"></div>
      </div>
      <div class="custom-options"> ${optionsHtml} </div>
      </div>
      </div>
      `;

      document.body.appendChild(currentDiv);

      var clickOptions = currentDiv.querySelectorAll(".option-row");
      for (var i = 0; i < clickOptions.length - 1; i++) {
        clickOptions[i].addEventListener("click", items[i].click);
      }

      document.getElementById(div).addEventListener("click", function () {
        this.querySelector(".custom-select").classList.toggle("open");
      });

      for (const option of currentDiv.querySelectorAll(".custom-option")) {
        option.addEventListener("click", function (e) {
          listener.selectionChange(e.target);
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


});
