var checks, range, rangeValue;
range = document.querySelector('.ranges');
rangeValue = document.querySelector('.rangeValue');
checks = document.querySelectorAll(".box");
rangeValue.textContent = range.value;
checks.forEach((check) => {
  check.addEventListener("click", () => {
    var ar = check.getAttribute("id");
    document.querySelector(`[for=${ar}]`).style.setProperty("--width", `5%`);
    if (check.checked) {
      document.querySelector(`[for=${ar}]`).style.setProperty("--width", `50%`);
    }else{
      document.querySelector(`[for=${ar}]`).style.setProperty("--width", `5%`);
    }
  });
});

range.addEventListener('input',()=>{
  rangeValue.textContent = range.value;
})

const capital = "ABCDEFGHIJKLMNOPQURESTUVWXYZ";
const small = capital.toLowerCase();
const character = "\"!#@£$%&/{([)]=}+?\\~',.";
const number = "1234567890";

function password(){
  var pass = '';
  var newPa = '';
  var checked = 0
  checks.forEach(check=>{
    var trues = check.checked;
    var ar = check.getAttribute('id');
    if(trues && ar === "number"){
      pass+=number
      checked++
    }
    if(trues && ar === 'special'){
      checked++
      pass+=character
    }
    if(trues && ar === 'letters'){
      checked++
      pass+= small
    }
    if(trues && ar === 'capitals'){
      pass+=capital
      checked++
    }
  })
  for(let i = 0;i < range.value; i++ ){
    var rand = Math.floor(Math.random()*pass.length)
    newPa += pass.charAt(rand)
  }
  if(checked === 0 || range.value === 0)return
  var message;
  if(checked === 1 && range.value >=5){
    message = "Fair"
  }else if(checked === 2 && range.value >=5){
    message = 'Good'
  }else if(checked === 3 && range.value >=5 && range.value >=5){
    message = 'Better'
  }else if (checked === 4 && range.value >= 5 && range.value >= 5) {
    message = "Strong";
  }else{
    message = "Poor"
  }
  document.querySelector('[for="password"]').textContent = message;
  document.querySelector('#password').value = newPa
}
document.querySelector('.fa-refresh').addEventListener('click', ()=>{
  document.querySelector("#password").value = '';
  checks.forEach((check) => {
    if(check.checked){
      var ar = check.getAttribute("id");
      check.checked = false;
      document.querySelector(`[for=${ar}]`).style.setProperty("--width", `5%`);
    }
  })
})
document.querySelector('.copy').addEventListener('click', ()=>{
  document.querySelector("#password").select();
  navigator.clipboard.writeText(document.querySelector("#password").value); 
  document.querySelector(".copy").textContent = "Copied!!!";

  setTimeout(()=>{
    document.querySelector('.copy').textContent = "Copy"
  }, 3000)
})
document.querySelector('.generate').addEventListener('click',password)