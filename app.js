let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    '✊' : {
        '✊' : 'seri',
        '✌️' : 'menang',
        '🖐️' : 'kalah'
    },
    '✌️' : {
        '✌️' : 'seri',
        '🖐️' : 'menang',
        '✊' : 'kalah'
    },
    '🖐️' : {
        '✊' : 'menang',
        '✌️' : 'kalah',
        '🖐️' : 'seri'
    }
}

function checker(input){
    document.getElementById("comp_choice").innerHTML = "..."
    document.getElementById("versus").innerHTML = `ADU MEKANIK!!`
    document.getElementById("user_choice").innerHTML = "..."
    result_ref.innerHTML = "..."
    setTimeout(() => {
        var choices = ["✊","🖐️","✌️"];
        var num = Math.floor(Math.random()*3);
    
        document.getElementById("comp_choice").
        innerHTML =
        `adrianBot memilih <span>${choices[num].
        toUpperCase()}</span>`;

        document.getElementById("versus").
        innerHTML = `VERSUS`
    
        document.getElementById("user_choice").
        innerHTML = `Kamu memilih <span>${input.toUpperCase()}</span>`;
    
        let comp_choice = choices[num];
        switch(choices_object[input][comp_choice]){
            case 'menang':
                result_ref.style.cssText = "background-color: #689f38; color:#cefdce; border-radius: 1rem;"
                result_ref.innerHTML = "KAMU MENANG!";
                user_score++;
                break;
            case 'kalah':
                result_ref.style.cssText = "background-color: #d32f2f; color:#ffdde0; border-radius: 1rem;"
                result_ref.innerHTML = "KAMU KALAH!";
                computer_score++;
                break;
            default:
                result_ref.style.cssText = "background-color: #808080; color:#222; border-radius: 1rem;"
                result_ref.innerHTML = "YAHH SERI";
                break;
        }
        document.getElementById("computer_score").innerHTML = computer_score;
        document.getElementById("user_score").innerHTML = user_score;
    },1500);
    
}