window.onload=function(){
    let menu = document.getElementById('menu')
    menu.addEventListener('click',function(){
        let list2 = document.getElementById('heading-1-2')
        let menu2 = document.getElementById('menu2')
        list2.style.display='flex'
        menu.style.display='none'
        menu2.style.display='block'
        menu2.addEventListener('click',function(){
            list2.style.display='none'
            menu.style.display='block'
            menu2.style.display='none'
           window.location.reload()
        })
    })
}
