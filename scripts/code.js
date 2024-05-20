let dataEntry = document.querySelector('[data-entry]')

function display(value){
   dataEntry.value += value
}


 document.querySelector('[equal]').addEventListener('click' , () =>{
    let entry = dataEntry.value;
    dataEntry.value = eval(entry)
 })
   document.querySelector('.clear').addEventListener('click', () => {
      dataEntry.value = ''
 })