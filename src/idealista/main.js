(function () {
    'use strict';

    const sathExtension = `
        <div id="sathExtension">
            <ul>
            <li><button id="visitadoBtn"> 👁‍🗨 Visitado 👁‍🗨 </button></li>
            <li><button id="likeBtn"> ❤ Añadir favoritos.</button></li>
            <li><button id="favoritoBtn">⭐ Piso Favorito ⭐ </button></li>
            <li><button id="saveListBtn">📖 Guardar lista</button></li>
            <li><button id="showAllBtn">👁‍🗨 Ver todos</button></li>
            <li><button id="hideFavsBtn">🙈 Ocultar favoritos</button></li>
            </ul>    
        </div>
        `

    setInterval(() => {
        if (!isInmueble()) {
            const savedIds = getSavedIds();

            const inmuebles = Array.from(document.querySelectorAll('section.items-container.items-list article'))
                .map(e => { e.style.display = ''; return e; })

            if (!isHideFavs()) {
                inmuebles
                    .filter(e => savedIds.includes(e.dataset['adid']))
                    .forEach(e => { e.style.display = 'none'; });
            }
        }


    }, 1000);

    function init() {
        if (!isListado() && !isInmueble()) { return; }

        let extension = document.createElement('div')
        document.body.appendChild(extension)
        extension.innerHTML = sathExtension

        addBtnListeners()
        renderAll()
        setVisited()
    }

    function addBtnListeners() {
        const buttonActions = {
            "likeBtn": likeAction,
            "favoritoBtn": favoritoAction,
            "saveListBtn": saveListAction,
            "showAllBtn": showAllAction,
            "hideFavsBtn": hideFavsAction,
        }

        Object.keys(buttonActions).forEach(key => {
            document.querySelector(`#${key}`).onclick = buttonActions[key]
        })

    }

    // -------------------------------------------------------------------------------------
    // RENDERS
    // -------------------------------------------------------------------------------------

    function renderAll() {
        renderInmueble()
        renderListado()
    }

    function renderInmueble() {
        renderFavoritoBtn()
        renderLikeBtn()
        renderVisitadoBtn()
        renderSaveListBtn()
    }

    function renderListado() {
        renderShowAllBtn()
        renderHideFavsBtn()
    }

    function renderVisitadoBtn() {
        document.querySelector('#visitadoBtn')
            .style.display = isInmueble() && getVisited().includes(window.location.href) ? '' : 'none'
    }
    function renderFavoritoBtn() {
        document.querySelector('#favoritoBtn')
            .style.display = isInmueble() && isLiked() ? '' : 'none'
    }

    function renderLikeBtn() {
        document.querySelector('#likeBtn')
            .style.display = isInmueble() && !isLiked() ? '' : 'none'
    }

    function renderSaveListBtn() {
        document.querySelector('#saveListBtn')
            .style.display = isInmueble() ? '' : 'none'
    }

    function renderShowAllBtn() {
        document.querySelector('#showAllBtn')
            .style.display = isListado() && !isHideFavs() ? '' : 'none'
    }

    function renderHideFavsBtn() {
        document.querySelector('#hideFavsBtn')
            .style.display = isListado() && isHideFavs() ? '' : 'none'
    }

    // -------------------------------------------------------------------------------------
    // ACTIONS
    // -------------------------------------------------------------------------------------

    const likeAction = function () {
        localStorage.saved = [
            ...new Set([
                ...getSaved(),
                window.location.href
            ])
        ].join(',')
        renderAll()

    }

    const favoritoAction = function () {
        const current = new Set(getSaved())
        current.delete(window.location.href)
        localStorage.saved = [
            ...current
        ].join(',')
        renderAll()
    }


    const saveListAction = function () {
        localStorage.saved = [
            ...new Set([
                ...getSaved(),
                ...prompt("agregar lista de enlaces separados por comas").split(',')
            ])
        ].join(',')
        renderAll()
    }

    function hideFavsAction() {
        setHideFavs('false')
    }

    function showAllAction() {
        setHideFavs('true')
    }

    // -------------------------------------------------------------------------------------
    // CHECKERS
    // -------------------------------------------------------------------------------------

    function isLiked() {
        return isInmueble() && getSaved().includes(window.location.href);
    }

    function isListado() {
        return window.location.href.includes('https://www.idealista.com/venta-viviendas')
    }
    function isInmueble() {
        return window.location.href.includes('https://www.idealista.com/inmueble')
    }

    function setHideFavs(show) {
        localStorage.hideFavs = show
        renderAll()
    }

    function isHideFavs() {
        return (localStorage.hideFavs ??= "false") === 'true'
    }

    function getSaved() {
        return localStorage.saved?.split(',') || []
    }

    function setVisited() {
        if (!isInmueble()) return

        localStorage.visited = [
            ...new Set([
                ...getVisited(),
                window.location.href
            ])
        ].join(',')

    }

    function getVisited() {
        return localStorage.visited?.split(',') || []
    }

    function getSavedIds() {
        return getSaved().map(e => e.split('/')[4])
    }


    init()
})();