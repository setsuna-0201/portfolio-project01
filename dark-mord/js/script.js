//btnを取得
const btn=document.querySelector('#btn');
//btnがクリックされる
btn.addEventListener('click',()=>
{
    //クリックされた時の処理
    document.body.classList.toggle('dark-theme');
    if(btn.textContent==='ダークモードにする')
    {
        btn.textContent='ライトモードにする';
    }
    else
    {
        btn.textContent='ダークモードにする';
    }

}
)
let ipt=document.querySelector('input');
let btn2=document.querySelector('#btn2');
//elemはp1の内容を表示する変数とする
let elem=document.querySelector('p1');
btn2.addEventListener('click',()=>
{
    elem.innerText=ipt.value;
});
