var questions=[
    {
        Question: "Ez a kérdés",
        A:  "Ez az 'A' válasz",
        B:  "Ez a 'B' válasz",
        C:  "Ez a 'C' válasz",
        D:  "Ez a 'D' válasz",
        Correct: "A"
    },
    {
        Question: "Ez a másik kérdés",
        A:  "Ez az 'A2' válasz",
        B:  "Ez a 'B2' válasz",
        C:  "Ez a 'C2' válasz",
        D:  "Ez a 'D2' válasz",
        Correct: "A"
    }
];

function getQuestion(){
    const val=questions[1];
    document.getElementById('questionDiv').innerHTML = val.Question;
    var selectedNums=[];
    for(let i = 0; i < 4; i++)
    {
        var randInt=((Math.round(Math.random() * 10) % 4 )+1);
        while(selectedNums.includes(randInt)) randInt=((Math.round(Math.random() * 10) % 4 )+1);
        selectedNums.push(randInt);
        if (i == 0)
        {
            document.getElementById('ans' + randInt).innerHTML = val.A;
            document.getElementById('ans' + randInt).onclick += 'callValue("A")';
        }
        if (i == 1)
        {
            document.getElementById('ans' + randInt).innerHTML = val.B;
            document.getElementById('ans' + randInt).onclick += 'callValue("B")';
        }
        if (i == 2)
        {
            document.getElementById('ans' + randInt).innerHTML = val.C;
            document.getElementById('ans' + randInt).onclick += 'callValue("C")';
        }
        if (i == 3)
        {
            document.getElementById('ans' + randInt).innerHTML = val.D;
            document.getElementById('ans' + randInt).onclick += 'callValue("D")';
        }
    }
}

function callValue(value){
    alert(value);
}