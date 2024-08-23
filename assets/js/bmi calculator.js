const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value)
    // console.log(height);
    
    let weight = parseInt(document.querySelector('#weight').value)
    // console.log(weight);
    
    let result = document.querySelector('.display');

    if(height === "" && height < 1 && height != NaN){
        result.innerHTML = "Please provide a valid height."
    } 
    else if(weight === "" && weight < 1 && weight != NaN){
        result.innerHTML = "Please provide a valid weight."
    }
    else{
        const bmi = (weight/ (height * height)*10000);

        result.innerHTML = `${bmi}`;
    }
})