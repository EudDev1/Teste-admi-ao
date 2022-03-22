const amountReactInput = document.getElementById("amount-react")
const amountVueInput = document.getElementById("amount-vue")
const amountAngularInput = document.getElementById("amount-angular")

function calcTotal() {
  const amountReact = parseInt(amountReactInput.value);
  const amountVue = parseInt(amountVueInput.value);
  const amountAngular = parseInt(amountAngularInput.value );
 
  
  const result = amountReact * 2 + amountVue * 2 + amountAngular * 2;
  document.getElementById("total").value = result;
}



const amountInputList = document.querySelectorAll('.quantity-choices')
amountInputList.forEach( function (input) {
    input.addEventListener("change" , function() {
        calcTotal()
     })
})

/* Mostrar login && Fechar login*/

const nav = document.querySelector("#container");
const button = document.querySelectorAll(".button-purchase-class");
const toBack = document.querySelector("#to-back");

for (const element of button) {
  element.addEventListener("click", function () {
    nav.classList.add("show");
  });

  toBack.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* Mostrar pagina de agradecimento && Fechar pagina de agradecimento*/

const buttonConfirm = document.querySelector("#button-confirm")
const concludedWrapper = document.querySelector("#concluded-wrapper")
const confirmForm = document.querySelector("#id-form")

buttonConfirm.addEventListener("click" , function() {
  concludedWrapper.classList.remove("hidden")
  confirmForm.classList.add("hidden")
})