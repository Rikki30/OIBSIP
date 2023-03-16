let string = "";
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{

        if(e.target.value=='=')
        {
          string = eval(string);
          document.querySelector('input').value=string;
        }
        else if(e.target.value=='AC')
        {
            string = ""
            document.querySelector('input').value=string;
        }
        else{
            string = string + e.target.value;
            document.querySelector('input').value=string;
        }
        
    })
})