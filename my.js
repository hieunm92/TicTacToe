let arr = [];
let player = 1;
function Choi() {
    let html = '';
    for (let i = 0; i < 3; i++) {
        arr[i] = [];
        html += '<tr>';
        for (let j = 0; j < 3; j++) {
            arr[i][j] = [];
            html += '<td onclick="play()" id="'+i+'-'+j+'">'
            html += '</td>';

        }
        html += '</tr>';

    }
    document.getElementById('display').innerHTML = html
}
Choi();

function play(){
    let x = +prompt('Nhap vi tri hang: ');
    let y = +prompt('Nhap vi tri cot: ');
    // let t = e.getAttribute('innerHTMLd');
    if (player == 1){
        arr[x][y]='O';
        document.getElementById(x + '-' +y).innerHTML = 'O'
     player =2;
    }else {
        arr[x][y]= 'X';
        document.getElementById(x + '-'+ y).innerHTML = 'X'
    }
}

