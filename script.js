document.addEventListener("DOMContentLoaded", () => {
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
          console.log("option 0 click handler");
        },
      },
      {
        text: "Option1",
        value: "option1",
        icon: "images/network.png",
        icon_font: "icon-network",
        click: () => {
          console.log("option 1 click handler");
        },
      },
      {
        text: "Option2",
        value: "option2",
        icon: "images/translate.png",
        icon_font: "icon-translate-1",
        click: () => {
          console.log("option 2 click handler");
        },
      },
    ],
    listeners: {
      selectionChange: (selectedValue) => {
        this.selectedV = selectedValue.innerHTML
        alert(`selected value is ${selectedValue.innerHTML}`);
        console.log(this.selectedV)
      },
    },
  });

  var clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", function () {
    dropDown.clearSelection();
  });

  var selectButton = document.getElementById("select");
  selectButton.addEventListener("click", function () {
    dropDown.chooseOption("option0");
    var selectedValue = dropDown.getSelectedValue();
    alert(selectedValue);
  });
});
