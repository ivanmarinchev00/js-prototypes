document.addEventListener("DOMContentLoaded", () => {
  myCustomDropDownMenu = function (options) {
    this.options = options;
    this.init(options);
  };

  myCustomDropDownMenu.prototype = {
    init: function (options) {
      this.render(options.renderTo, options.items, options.listeners, options.click);
    },
    render: function (div, items, listener, click) {
      var currentDiv = document.getElementById(`${div}`);
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

      currentDiv.innerHTML += `<div class="custom-select">
      <div class="custom-select__trigger"><span>Option0</span>
          <div class="arrow"></div>
      </div>
      <div class="custom-options"> ${optionsHtml} </div>`;

      document.body.appendChild(currentDiv);

      var clickOptions = document.querySelectorAll(".option-row")
      for(var i = 0; i < clickOptions.length; i++){
        clickOptions[i].addEventListener("click", items[i].click);
      }

      document.getElementById(div).addEventListener("click", function () {
        this.querySelector(".custom-select").classList.toggle("open");
      });

      for (const option of document.querySelectorAll(".custom-option")) {
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

  const dropDown = new myCustomDropDownMenu({
    renderTo: "myDropDownContainer",
    emptyText: "Select some option",
    items: [
      {
        text: "Option0",
        value: "option0",
        icon: "images/disagree.png",
        icon_font: "icon-translate-1",
        click: () => {
          console.log('option 0 click handler');
        }
      },
      {
        text: "Option1",
        value: "option1",
        icon: "images/network.png",
        icon_font: "icon-network",
        click: () => {
          console.log('option 1 click handler');
        }
      },
      {
        text: "Option2",
        value: "option2",
        icon: "images/translate.png",
        icon_font: "icon-translate-1",
        click: () => {
          console.log('option 2 click handler');
        }
      },
    ],
    listeners: {
      selectionChange: (selectedValue) => {
        alert(`selected value is ${selectedValue.innerHTML}`);
      },
    },
  });
});
