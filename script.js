document.addEventListener("DOMContentLoaded", () => {
  myCustomDropDownMenu = function (options) {
    this.options = options;
    this.init(options);
  };

  
  
  myCustomDropDownMenu.prototype = {
    init: function (options) {
      console.log(options.items + "OPTIONS ITEMS");
      this.render(options.renderTo, options.items, options.listeners)
      
    },
    render: function (div, items, listener) {
      
      var currentDiv = document.getElementById(`${div}`);
      console.log(items + "ITEMS HERE")
      console.log(currentDiv + "SHOULD BE DIV")
      var _customSelectDiv = document.createElement("div");
      _customSelectDiv.setAttribute('class', 'custom-select');
      var _triggerDiv = document.createElement('div');
      _triggerDiv.setAttribute('class', 'custom-select__trigger');
      _triggerDiv.innerHTML = '<span>option 0</span>';
      _customSelectDiv.appendChild(_triggerDiv);
      var _arrowDiv = document.createElement('div');
      _arrowDiv.setAttribute('class', 'arrow');
      _triggerDiv.appendChild(_arrowDiv);
      var _customOptions = document.createElement('div');
      _customOptions.setAttribute('class', 'custom-options');
      _customSelectDiv.appendChild(_customOptions);
      items.forEach((element) => {
        _customOptions.innerHTML += `
              <span class="custom-option" value="${element.value}">${element.text}</span>
              `;
      });
      // _customOptions.addEventListener('click', (e) => {
      //   listener.selectionChange(e.target.value);
      // })
      // _customSelectDiv.append(items);
      currentDiv.appendChild(_customSelectDiv);
      document.body.appendChild(currentDiv);

      document.getElementById(`${div}`).addEventListener('click', function() {
        console.log("This was clicked");
        this.querySelector('.custom-select').classList.toggle('open');
    })

    for (const option of document.querySelectorAll(".custom-option")) {
      option.addEventListener('click', function() {
          if (!this.classList.contains('selected')) {
              this.classList.add('selected');
              this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
          }
      })
  }
    }
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
      // listeners: {
      // 	selectionChange: (selectedValue) => {
      //     console.log(selectedValue);
      // 		alert(`selected value is ${selectedValue}`);
      // 	}
      // }
    });


  
})




