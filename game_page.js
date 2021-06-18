player_1_name=localStorage.getItem("player1_name");
player_2_name=localStorage.getItem("player2_name");

pl1_score=0;
pl2_score=0;

document.getElementById('p1_name').innerHTML=player_1_name +' : ';
document.getElementById('p2_name').innerHTML=player_2_name +' : ';

document.getElementById('p1_score').innerHTML=pl1_score;
document.getElementById('p2_score').innerHTML=pl2_score;

document.getElementById('que').innerHTML='Question turn - '+player_1_name;
document.getElementById('ans').innerHTML='Answer turn - '+player_2_name;
function send()
{
    get_word=document.getElementById('show_hide_password').value;
    word=get_word.toLowerCase();
    console.log(word);

    c1=word.charAt(1);
    console.log(c1);

    l=Math.floor(word.length/2);
    c2=word.charAt(l);
    console.log(c2);

    l1=word.length-1;
    c3=word.charAt(l1);
    console.log(c3);

    r1=word.replace(c1,"_");
    r2=r1.replace(c2,"_");
    r3=r2.replace(c3,"_");

    console.log(r3);

    ques="<p id='question'>Q. "+r3+"</p>";
    answer1="<p>Answer : <input id='ans1' type='text'> </p>";
    button1="<button id='b1' onclick='check()'>Check</button>";
    row=ques+answer1+button1;
    document.getElementById('output').innerHTML=row; 
    document.getElementById('word').value=" ";
}

var ques_turn='player1';
var ans_turn='player2'
function check()
{
    get_answer=document.getElementById("ans1").value;
    answer=get_answer.toLowerCase();
    console.log(answer);

    if(answer==word)
    {
        if(ans_turn=='player1')
        {
            pl1_score=pl1_score+1;
            document.getElementById("p1_score").innerHTML=pl1_score;
        }
        else
        {
            pl2_score=pl2_score+1;
            document.getElementById("p2_score").innerHTML=pl2_score;
        }
    }
        
        if(ques_turn=='player1')
        {
            ques_turn='player2';
            document.getElementById('que').innerHTML='Question turn - '+player_2_name;
        }

        else if(ques_turn=='player2')
        {
            ques_turn='player1';
            document.getElementById('que').innerHTML='Question turn - '+player_1_name;
        }

        if(ans_turn=='player1')
        {
            ans_turn='player2';
            document.getElementById('ans').innerHTML='Answer turn - '+player_2_name;
        }

        else if(ans_turn=='player2')
        {
            ans_turn='player1';
            document.getElementById('ans').innerHTML='Answer turn - '+player_1_name;
        }
        document.getElementById('output').innerHTML=' ';
    
}

$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});