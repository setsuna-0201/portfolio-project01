const text=document.querySelector('#text');
const count=document.querySelector('#count');
//textが入力された時の関数
text.addEventListener('keyup',()=>
    {
        count.textContent=text.value.length;
        /*もしカウントがおかしかったら次のコードに変更
        count.textContent = Array.from(text.value).length;*/
        if(text.value.length>100)
            {
                //classに入れる
                count.classList.add('alert');
            }
            else//100以下
            {
                count.classList.remove('alert');
            }
    }
)