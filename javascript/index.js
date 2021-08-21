let gen = document.getElementById('gen');
let min = document.getElementById('min');
let max = document.getElementById('max');
let result_num = document.getElementById('result_num');
Math.randint = function(minimum, maximum) {
    var min = +minimum;
    var max = +maximum;
    return Math.floor(Math.random()*(max - min + 1) + min);
}
gen.addEventListener("click", function() {
    var today = new Date();
    var hours = (today.getHours() < 10 ? "0" + today.getHours()  : today.getHours());
    var minutes = (today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes());
    var seconds = (today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds());
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+hours+':'+minutes+':'+seconds;
    min = document.getElementById('min');
    max = document.getElementById('max');
    if(min.value < max.value && min.value > -1 && max.value > -1) {
        result_num.innerHTML = `${Math.randint(min.value, max.value)} <br> <span style="font-size:12px">${date}</span>`;
    }
    else if (min.value > max.value){
        var minimal = min.value;
        var maximum = max.value;
        min.value = maximum;
        max.value = minimal;
        result_num.innerHTML = `${Math.randint(min.value, max.value)} <br> <span style="font-size:12px">${date}</span>`;
    }
    else if(min.value < 0 || max.value < 0) {
        if(min.value < 0) {
            alert("the minimum value must be greater than 0");
        }
        if(max.value < 0) {
            alert("the maximal value must be greater than 0");
        }
    }
    else if(max.value == "" || min.value == "") {
        if(min.value == "") {
            min.value = parseInt("0")
        }
        if(max.value == "") {
            max.value = parseInt("100")
        }
        result_num.innerHTML = `${Math.randint(min.value, max.value)} <br> <span style="font-size:12px">${date}</span>`;
    }
    else if(min.value == max.value) {
        if(max.value < 99999999999999)
            max.value = parseInt(max.value) + 1
        else {
            min.value = parseInt(min.value) - 1
        }
        result_num.innerHTML = `${Math.randint(min.value, max.value)} <br> <span style="font-size:12px">${date}</span>`;
    }
    else {
        alert("Invalid arguments!");
    }
});