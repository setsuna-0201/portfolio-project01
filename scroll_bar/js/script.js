const getScrollPercent =()=>
    {
        //スクロール量
        const scrolled=window.scrollY;
        console.log(`${scrolled} スクロールされました`);
        //スクロールの高さ
        const pageHeight=document.documentElement.scrollHeight;
        //表示領域の高さ
        const viewHeight=document.documentElement.clientHeight;
        const percentage=scrolled/(pageHeight-viewHeight)*100;
        console.log(percentage);
        //プログレスバーのして幅
        document.querySelector('#bar').style.width=`${percentage}%`;
    }
window.addEventListener('scroll',getScrollPercent);

const btn=document.querySelector('#btn');
btn.addEventListener('click',()=>
{
        document.body.classList.toggle('dark-theme');
        if(textContent==='ダークモード')
        {
            btn.textContent='ライトモード'
        }
        else
        {
            btn.textContent='ダークモード'
        }
});
