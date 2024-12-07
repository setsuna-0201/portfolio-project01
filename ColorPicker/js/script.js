//document.querySelector('colorText');
//<p>のテキストを指定,テキストの変更
//document.querySelector('#colorText').textContent=` カラーコード：${document.querySelector('#colorPicker').value}`;
//場所を取得
const text=document.querySelector('#colorText');
const color=document.querySelector('#colorPicker');
//カラーコードの動き
const colorBg=()=>
{
    //選んだ色を背景にする
    document.body.style.backgroundColor=color.value;
    //カラーコードを表示
    text.textContent =`カラーコード:${color.value}`
    //そのカラーコードの色を表示
    if(color.value==='#ffffff')
    {
        text.textContent=`カラーコード:${color.value} (white)`;
    }
    else if(color.value==='#000000')
        {
            text.textContent=`カラーコード:${color.value} (black)`;
        }
    else
    {
        text.textContent=`カラーコード:${color.value}`;
    }
};
////カラーピッカーで色が変更されたらcolorBgを発動させる
//document.addEventListener('DOMContentLoaded', ()=>
//{
//    console.log(document.querySelector('#colorPicker'));
//});
color.addEventListener('input',colorBg);

