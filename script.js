const form = document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();

    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#Weight").value);
    let result = document.querySelector("#result")

    if( height ==="" || height <0 || isNaN(height)){
        result.innerHTML = `please give valid height ${height}`;
    }
    
    else if( weight ==="" || weight <0 || isNaN(weight)){
        result.innerHTML = `please give valid weight ${weight}`;
    }
    else{
       const bmi = (weight/((height*height/10000)).toFixed(2)); 
// print result
       result.innerHTML = `<span>${bmi}</span>`
    }

})