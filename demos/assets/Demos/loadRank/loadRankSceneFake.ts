// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class loadRankSceneFake extends cc.Component {
 


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        console.log('onLoad-loadRankSceneFake', this.node.name);
    }

    start() {
        console.log('start-loadRankSceneFake', this.node.name);
    }

    protected onEnable(): void {
        console.log('onEnable-loadRankSceneFake', this.node.name);
    }

    // update (dt) {}

}
