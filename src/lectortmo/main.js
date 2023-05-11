(function() {

    let ctrlhold = false

    document.addEventListener('keyup',e => {
        if (e.key == 'Control') ctrlhold = false
    });

    document.addEventListener('keydown',e => {
        const islast = document.querySelector('#viewer-pages-select option:last-child').value == document.querySelector('#viewer-pages-select').value
        const isfirst = document.querySelector('#viewer-pages-select option:first-child').value == document.querySelector('#viewer-pages-select').value
        if (e.key == 'Control') ctrlhold = true
        if (e.key == 'ArrowRight' && (islast || ctrlhold)) document.querySelector('.chapter-arrow.chapter-next a').click()
        if (e.key == 'ArrowLeft' && (isfirst || ctrlhold)) document.querySelector('.chapter-arrow.chapter-prev a').click()
    })
})()