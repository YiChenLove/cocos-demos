// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import _C from "../../Common/_C";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PrefabModelNode extends cc.Component {

    @property({ type: cc.Label, displayName: '' })
    indexLb: cc.Label = null;



    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        console.log('onLoad', this.node.name);
    }

    start() {
        console.log('start', this.node.name);
    }
    initInfo(index: number) {
        console.log('initInfo', this.node.name);
        _C.setString(this.indexLb, index.toString());
    }

    // update (dt) {}
}
