import { querySelector } from "./common/documentLib"
import { domainConfig } from "./config"
import { REMOTE_SCRIPTS, LOCAL_SCRIPTS } from './common/env';

(function () {
  'use strict'
  /*
   * -----------------------------------------------
   * extension CONFIG
   * -----------------------------------------------
   */
  const DEBUG = true
  const e = ''
  const DOMAIN_CONF: any = {
    'orteil.dashnet.org/cookieclicker/*': {
      'script': 'cookieclicker.js',
    },
    'cw/*': {
      'script': 'cw.js',
    },
    'forocoches.com/*': {
      'script': 'forocoches.js',
    },
    'idealista.com/*': {
      'script': 'idealista.js',
      'style': 'idealista.css',
    },
    'lectortmo.com/*': {
      'script': 'lectortmo.js',
    },
    'video\\d+.woopeedoopcmwhrs.xyz/*': {
      'script': 'woopeedoopcmwhrs.js',
    },
  }

  /*
  * -----------------------------------------------
  * extension LOGIC
  * -----------------------------------------------
  */

  const getResourcesConfig = function (): domainConfig | null {
    const BASE_PATH = DEBUG ? LOCAL_SCRIPTS : REMOTE_SCRIPTS
    const conf = Object.keys(DOMAIN_CONF)
      .filter(domain => new RegExp(`http(s)?://(www.)?${domain}`).test(window.location.href))
      .map(domain => DOMAIN_CONF[domain])
      .map(conf => ({
        "script": conf.script ? `${BASE_PATH}${conf.script}` : null,
        "style": conf.style ? `${BASE_PATH}${conf.style}` : null
      }))
    [0] || null
    return <domainConfig | null>conf
  }

  const loadLocal = function (conf: domainConfig | null): void {
    if (conf?.script) {
      const scriptBlock = document.createElement('script')
      scriptBlock.setAttribute("type", "text/javascript")
      scriptBlock.setAttribute("src", conf?.script)
      querySelector("head")?.appendChild(scriptBlock)
    }

    if (conf?.style) {
      const cssBlock = document.createElement('link')
      cssBlock.setAttribute("type", "text/css")
      cssBlock.setAttribute("rel", "stylesheet")
      cssBlock.setAttribute("href", conf?.style)
      querySelector("head")?.appendChild(cssBlock)
    }
  }

  const loadRemote = function (conf: domainConfig | null): void {
    if (conf?.script) {
      fetch(conf?.script)
        .then(e => e.text())
        .then(e => {
          const scriptBlock = document.createElement('script')
          scriptBlock.setAttribute("type", "text/javascript")
          scriptBlock.innerHTML = e
          querySelector("head")?.appendChild(scriptBlock)
        })
    }

    if (conf?.style) {
      fetch(conf?.style)
        .then(e => e.text())
        .then(e => {
          const style = document.createElement('style')
          style.innerHTML = e
          querySelector("head")?.appendChild(style)
        })
    }
  }

  const action = DEBUG ? loadLocal : loadRemote
  action(getResourcesConfig())
  console.log(action)
  console.log(getResourcesConfig())

})()