window.addEventListener('scroll', function(){
    const header = document.querySelector('.BlurWhenScroll');
    const nave=document.querySelector('.naveScroll');
    if(window.scrollY >0) {
        header.classList.add('backdrop-blur-sm', 'bg-opacity-70');
        nave.classList.add('backdrop-blur-sm', 'bg-opacity-70');
    }
    else{
        header.classList.remove('backdrop-blur-sm', 'bg-opacity-85');
        nave.classList.remove('backdrop-blur-sm', 'bg-opacity-85');
    }
});


