
const wrapper = document.querySelector('#wrapper');

wrapper.addEventListener('wheel', (e)=> {
    e.preventDefault();
    wrapper.scrollLeft += e.deltaY;
})