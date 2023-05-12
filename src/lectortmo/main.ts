import { querySelector } from "../common/documentLib";

(function() {

    let ctrlhold = false

    document.addEventListener('keyup',e => {
        if (e.key == 'Control') ctrlhold = false
    });

    document.addEventListener('keydown',e => {
        const islast = querySelector('#viewer-pages-select option:last-child')?.value == querySelector('#viewer-pages-select')?.value
        const isfirst = querySelector('#viewer-pages-select option:first-child')?.value == querySelector('#viewer-pages-select')?.value
        if (e.key == 'Control') ctrlhold = true
        if (e.key == 'ArrowRight' && (islast || ctrlhold)) querySelector('.chapter-arrow.chapter-next a')?.click()
        if (e.key == 'ArrowLeft' && (isfirst || ctrlhold)) querySelector('.chapter-arrow.chapter-prev a')?.click()
    })
})()