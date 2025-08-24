document.addEventListener('DOMContentLoaded', function() {
    // Tombol animasi klik
    const btn = document.getElementById('btnPengertian');
    if (btn) {
        btn.addEventListener('click', function() {
            btn.classList.add('clicked');
            setTimeout(() => btn.classList.remove('clicked'), 300);
        });
    }

    // Portfolio slider logic
    const imgs = document.querySelectorAll('.slider-img');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let current = 0;

    function updateSlider() {
        imgs.forEach((img, i) => {
            img.classList.remove('active', 'prev', 'next', 'hide');
            if (i === current) {
                img.classList.add('active');
            } else if (i === (current - 1 + imgs.length) % imgs.length) {
                img.classList.add('prev');
            } else if (i === (current + 1) % imgs.length) {
                img.classList.add('next');
            } else {
                img.classList.add('hide');
            }
        });
    }

    if (imgs.length) {
        updateSlider();
        prevBtn.addEventListener('click', () => {
            current = (current - 1 + imgs.length) % imgs.length;
            updateSlider();
        });
        nextBtn.addEventListener('click', () => {
            current = (current + 1) % imgs.length;
            updateSlider();
        });
    }
});