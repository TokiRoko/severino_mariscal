function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");  
    icon.classList.toggle("open");  
}

const faders = document.querySelectorAll('.section__pic-container-1');
const faders1 = document.querySelectorAll('.section__text');
const appearOptions = {
    threshold: 1
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, appearOptions);  

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})
faders1.forEach(fader1 => {
    appearOnScroll.observe(fader1);
})
