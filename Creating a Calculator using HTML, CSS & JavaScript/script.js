let string = "";
let memory = 0;
let mod = 0;
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = " ";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'M+'){
            memory = memory+parseFloat(string);
            document.querySelector('input').value = memory;
        }
        else if(e.target.innerHTML == 'M-'){
            memory = memory-parseFloat(string);
            document.querySelector('input').value = memory;
        }
        else if(e.target.innerHTML == '%'){
            string = parseFloat(string)/ 100;
            document.querySelector('input').value = string;
        }

        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
