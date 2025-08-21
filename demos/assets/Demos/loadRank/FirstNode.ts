// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import _C from "../../Common/_C";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FirstNode extends cc.Component {



    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        console.log('onLoad', this.node.name);
    }

    onEnable() {
        console.log('onEnable', this.node.name);
    }
    start() {
        console.log('start', this.node.name);
    }
    // update(dt) {
    //     console.log('update',this.node.name);           
    // }


    // lateUpdate(dt) {
    //     console.log('lateUpdate',this.node.name);
    // }
    onDisable() {
        console.log('onDisable', this.node.name);
    }
    onDestroy() {
        console.log('onDestroy', this.node.name);

    }

    // update (dt) {}

}
