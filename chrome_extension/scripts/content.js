(function () {
  'use strict';

  /*
   * -----------------------------------------------
   * extension CONFIG
   * -----------------------------------------------
   */
  const DEBUG = false;
  const LOCAL = 'http://localhost/base.js'
  const RELEASE = 'https://github.com/oskar-g/sath_extension/src/base.js'

  /*
   * -----------------------------------------------
   * extension LOGIC
   * -----------------------------------------------
   */
  const script = DEBUG ? LOCAL : RELEASE
  
  let scriptBlock=document.createElement('script')
  scriptBlock.setAttribute("type","text/javascript")
  scriptBlock.setAttribute("src", script)
  document.querySelector("head").appendChild(scriptBlock)

})();