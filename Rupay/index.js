// Scrolling Animation

$('#navbar a , .btn').on('click' , function(event){
    if(this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop:$(hash).offset().top - 100
            },
            800
        );
    }
});

//Adding Opacity while scrolling downwards

window.addEventListener('scroll', () => {
    if(window.scrollY > 150){
        document.querySelector('#navbar').style.opacity = 0.7;
    }
    else
    {
        document.querySelector('#navbar').style.opacity = 1;
    }
})