import { querySelector } from "../common/documentLib";

(function() {
    'use strict';

    (<any>window).letCliking =false;
    (<any>window).letBuildings = false;
    (<any>window).clickWrinklers = false;

    (<any>window).cliking = setInterval(()=> {
        if ((<any>window).letCliking) {
            (<any>window).Game.ClickCookie();
            (<any>window).Game.shimmers
//                .filter(shimmer => shimmer.wrath == 0)
                .forEach((shimmer:any) => shimmer.pop());
        }

        if ((<any>window).clickWrinklers){
            querySelector('#PopAllNormalWrinklerButton')?.click()
        }

        let upgradeExist = querySelector('#upgrades .CMBackBlue');
        let techupgradeExist = querySelector('#techUpgrades .CMBackBlue');
        let nextBuilding = querySelector('#products .product [style^="color: rgb(0, 255, 0);"]');
        if ((<any>window).letBuildings){
            let stores = querySelector('#storeBulk1[style^="color: rgb(0, 255, 0);"]:not(.selected)') || querySelector('#storeBulk10[style^="color: rgb(0, 255, 0);"]:not(.selected)') || querySelector('#storeBulk100[style^="color: rgb(0, 255, 0);"]:not(.selected)')
            if (!!stores) {
                stores.click()
            }

            if (!! techupgradeExist){
                techupgradeExist.parentElement?.click();
            } else if (!! upgradeExist){
                upgradeExist.parentElement?.click();
            } else if (!! nextBuilding) {
                nextBuilding.click();
            }
        }
    },1);

    document.addEventListener('keydown', e => {
        if (['KeyX','KeyZ'].includes(e.code) ) {
            (<any>window).letCliking = true;
        }
        if (['KeyC'].includes(e.code) ) {
			let amount= (<any>window).Game.cookies*0.1;
            (<any>window).Game.Earn(amount);
            (<any>window).Game.handmadeCookies+=amount;
            (<any>window).Game.ClickCookie();
            (<any>window).Game.Achievements['Cheated cookies taste awful'].won=0
        }
        if (['KeyB'].includes(e.code) ) {
            (<any>window).letBuildings = !(<any>window).letBuildings
        }
        if (['KeyV'].includes(e.code) ) {
            (<any>window).Game.cookies=0;
            (<any>window).Game.Achievements['Cheated cookies taste awful'].won=0
        }
        if (['KeyW'].includes(e.code) ) {
            (<any>window).clickWrinklers = !(<any>window).clickWrinklers;
        }
    })
    document.addEventListener('keyup', e => {
        if (e.code == 'KeyX') {
            (<any>window).letCliking = false;
        }
    })
})();