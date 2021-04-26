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
      var _select = document.createElement("select");
      items.forEach((element) => {
        _select.innerHTML += `
              <option value="${element.value}">${element.text}</option>
              `;
      });
      _select.addEventListener('change', (e) => {
        listener.selectionChange(e.target.value);
      })
      // _select.append(items);
      currentDiv.appendChild(_select);
      document.body.appendChild(currentDiv);
    }
  };
  
  
    const dropDown = new myCustomDropDownMenu({
      renderTo: "myDropDownContainer",
      emptyText: "Select some option",
      items: [
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
          console.log(selectedValue);
      		alert(`selected value is ${selectedValue}`);
      	}
      }
    });
})




