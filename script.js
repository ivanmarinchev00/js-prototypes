document.addEventListener("DOMContentLoaded", () => {
  myCustomDropDownMenu = function (options) {
    this.options = options;
    this.init(options);
  };
  
  myCustomDropDownMenu.prototype = {
    init: function (options) {
      console.log(options.items + "OPTIONS ITEMS");
      this.render(options.renderTo, options.items)
      
    },
    render: function (div, items) {
      
      var currentDiv = document.getElementById(`${div}`);
      console.log(items + "ITEMS HERE")
      console.log(currentDiv + "SHOULD BE DIV")
      var _select = document.createElement("select");
      items.forEach((element) => {
        _select.innerHTML += `
              <option value="${element.value}">${element.text}</option>
              `;
      });
      // _select.append(items);
      currentDiv.appendChild(_select);
      document.body.appendChild(currentDiv);
    },
  };
  
  
    const dropDown = new myCustomDropDownMenu({
      renderTo: "myDropDownContainer",
      emptyText: "Select some option",
      items: [
        {
          text: "option1",
          value: 1,
        },
        {
          text: "option1",
          value: 1,
        },
      ],
    });
  
  
    dropDown.init(dropDown.options.renderTo, dropDown.options.items)
})




