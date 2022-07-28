// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

let b = document.querySelector('#print');
    b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() { 
       
    let i = document.querySelector('input[name="seisuu"]');
    let v = i.value - 0;
    let yoso = v;
    kaisu = kaisu + 1;     

    let k = document.querySelector('span#kaisu');
    k.textContent = kaisu + '回目の予想: ';

    let y = document.querySelector('span#yosou');
    y.textContent = yoso;
      
    let s = document.querySelector('p#result');

    if (kaisu >= 4) {
        s.textContent = "答えは" + kotae + "でした。すでにゲームは終わっています。";
    } else if (kotae === yoso) {
        s.textContent = '正解です。おめでとう!';
    } else if (kotae !== yoso) {  
        if (kaisu === 3) {
            s.textContent = 'まちがい。残念でした答えは' + kotae +  'です．';
        } else if (kotae > yoso) {
            s.textContent = 'まちがい。答えはもっと大きいですよ';
        } else if (kotae < yoso) {
            s.textContent = 'まちがい。答えはもっと小さいですよ';
        }
    }
}