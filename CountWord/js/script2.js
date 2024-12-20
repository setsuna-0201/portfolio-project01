const btn=document.querySelector('#btn');
btn.addEventListener('click',()=>
    {
        document.body.classList.toggle('dark-theme');
        if(btn.textContent==='ダークモードにする')
            {
                btn.textContent='ライトモードににする'
            }
            else
            {
                btn.textContent='ダークモードにする'
            }
    })
