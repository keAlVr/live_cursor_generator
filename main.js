const cursor = document.querySelector('.myCursor')

const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
const item4 = document.querySelector('.item4')

const allInputs = document.querySelectorAll('.options input')

function moving() {
    document.addEventListener('mousemove', (e) => {

        let customSize = document.querySelector('.globalCustomSize')
        let h = customSize.clientHeight;
        let w = customSize.clientWidth;

        cursor.style.top = e.pageY - h/2 + 'px';
        cursor.style.left = e.pageX - w/2 + 'px';
    })
}

allInputs.forEach(input => input.addEventListener('change', handleUpdate));

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

item1.addEventListener('click', () => {
    if (cursor.className != ('cursorStyle1')) {
        cursor.className = ('myCursor cursorStyle1 globalCustomSize')
    }
    moving()
})
item2.addEventListener('click', () => {
    if (cursor.className != ('cursorStyle2')) {
        cursor.className = ('myCursor cursorStyle2 globalCustomSize')
    }
    moving()
})
item3.addEventListener('click', () => {
    if (cursor.className != ('cursorStyle3')) {
        cursor.className = ('myCursor cursorStyle3 globalCustomSize')
    }
    moving()
})
item4.addEventListener('click', () => {
    if (cursor.className != ('cursorStyle4')) {
        cursor.className = ('myCursor cursorStyle4 globalCustomSize')
    }
    moving()
})






