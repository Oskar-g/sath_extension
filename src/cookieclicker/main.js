(function() {
    'use strict';
    window.letCliking =false;
    window.letBuildings = false;
    window.clickWrinklers = false;

    window.cliking = setInterval(()=> {
        if (window.letCliking) {
            window.Game.ClickCookie();
            window.Game.shimmers
//                .filter(shimmer => shimmer.wrath == 0)
                .forEach(shimmer => shimmer.pop());
        }

        if (window.clickWrinklers){
            document.querySelector('#PopAllNormalWrinklerButton')?.click()
        }

        let upgradeExist = document.querySelector('#upgrades .CMBackBlue');
        let techupgradeExist = document.querySelector('#techUpgrades .CMBackBlue');
        let nextBuilding = document.querySelector('#products .product [style^="color: rgb(0, 255, 0);"]');
        if (window.letBuildings){
            let stores = document.querySelector('#storeBulk1[style^="color: rgb(0, 255, 0);"]:not(.selected)') || document.querySelector('#storeBulk10[style^="color: rgb(0, 255, 0);"]:not(.selected)') || document.querySelector('#storeBulk100[style^="color: rgb(0, 255, 0);"]:not(.selected)')
            if (!!stores) {
                stores.click()
            }

            if (!! techupgradeExist){
                techupgradeExist.parentElement.click();
            } else if (!! upgradeExist){
                upgradeExist.parentElement.click();
            } else if (!! nextBuilding) {
                nextBuilding.click();
            }
        }
    },1);

    document.addEventListener('keydown', e => {
        if (['KeyX','KeyZ'].includes(e.code) ) {
            window.letCliking = true;
        }
        if (['KeyC'].includes(e.code) ) {
			let amount= window.Game.cookies*0.1;
            window.Game.Earn(amount);
            window.Game.handmadeCookies+=amount;
            window.Game.ClickCookie();
            window.Game.Achievements['Cheated cookies taste awful'].won=0
        }
        if (['KeyB'].includes(e.code) ) {
            window.letBuildings = !window.letBuildings
        }
        if (['KeyV'].includes(e.code) ) {
            window.Game.cookies=0
            window.Game.Achievements['Cheated cookies taste awful'].won=0
        }
        if (['KeyW'].includes(e.code) ) {
            window.clickWrinklers = !window.clickWrinklers;
        }
    })
    document.addEventListener('keyup', e => {
        if (e.code == 'KeyX') {
            window.letCliking = false;
        }
    })
})();