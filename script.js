// document.addEventListener('DOMContentLoaded', () => {
//     var myCustomDropDown = {
//         emptyText: 'Select some option',
//         items: [{
//            text: 'option1',
//            value: 1
//         }, {
//            text: 'option1',
//            value: 1
//         }]
//     };

//     var _select = document.createElement("select");
//     myCustomDropDown.items.map(item => {
//         _select.options[_select.options.length] = new Option(item.text, item.id);
//     })

//     document.body.appendChild(_select);
// })

myCustomDropDownMenu = function (options) {
  this.options = options;
};

myCustomDropDownMenu.prototype = {
  init: function () {
    this.render();
  },
  render: function (div, items) {
    const currentDiv = document.getElementById(div);
    var _select = document.createElement("select");
    items.array.forEach((element) => {
        options += document.createTextNode(`
            <option value="${element.value}">${element.text}</option>
            `);
    });
    _select.appendChild(options);
    currentDiv.appendChild(_select);
    document.append(currentDiv);
  },
};

  const dropDown = new myCustomDropDownMenu({
    render: "#myDropDownContainer",
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

  console.log(dropDown.options);

