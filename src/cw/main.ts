import { querySelector } from "../common/documentLib"

// Carga videos a partir de url's .webm
(function () {
    function init() {
        setInterval(() => {
            Array.from(document.querySelectorAll('.item.private'))
                .forEach(e => (<any>e).style.display = 'none')
        }, 500)

        document.addEventListener('keydown', (e:KeyboardEvent) => {
            if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return

            const pages = Array.from(document.querySelectorAll('.pagination-holder .page,.page-current') || [])
            const currentPage = pages.findIndex(e => e.className == 'page-current')
            const keys:any = {
                'ArrowLeft': () => Math.max(currentPage - 1, 0),
                'ArrowRight': () => Math.min(currentPage + 1, pages.length),
            }
            const cosa:any = keys[e.key];
            const index:number = cosa()
            pages[index]?.querySelector('a')?.click()
        })

        const video = document.querySelector('video')?.src
        if (video){
            fetch(video)
            .then(e => {
                const btn = document.createElement('button')
                btn.innerHTML = `<a style="color:black" href="${e.url}" download='eeee.mp4'>DOWNLOAD</a>`
                querySelector('.block-video')?.prepend(btn)
            })
        }
        
        

    }

    init()

})()