window.onload = ()=>{
    const button = document.querySelector('#btn')
    button.addEventListener('click',calculate)
}
function calculate(){
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#ruhi');

    if(!height || isNaN(height) || height <0){
        result.innerText = "Please provide a valid height";

    }
    else if(!weight || isNaN(weight) || weight <0){
        result.innerText = "Please provide a valid weight";

    }
    const bmi = (weight/((height*height)/10000)).toFixed(2);

    if(bmi<18.5){
        result.innerText = `Underweight : ${bmi}`;
    }
    else if(bmi>=18.5 && bmi< 24.9){
        result.innerText = `Normal : ${bmi}`;
    }
    else if(bmi>=18.5 && bmi< 24.9){
        result.innerText = `Overweight : ${bmi}`;
    }
    else if(bmi>=25 && bmi< 29.9){
        result.innerText = `Obesity(Class I) : ${bmi}`;
    }
    else if(bmi>=30 && bmi< 34.9){
        result.innerText = ` Obesity(Class II) : ${bmi}`;
    }
    else if(bmi>=35.5 && bmi< 39.9){
        result.innerText = `Extreme Obesity: ${bmi}`;
    }
  
}