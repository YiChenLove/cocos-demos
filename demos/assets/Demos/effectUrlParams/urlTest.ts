// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import _C from "../../Common/_C";

const { ccclass, property } = cc._decorator;

@ccclass
export default class urlTest extends cc.Component {

    @property({ type: cc.EditBox, displayName: '' })
    paramEditBox: cc.EditBox = null;

    @property({ type: cc.Label, displayName: '' })
    newLabel: cc.Label = null;

    @property({ type: cc.Button, displayName: '' })
    testBtn: cc.Button = null;

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {


    start() {

    }

    // update (dt) {}

    testBtnClick() {
        let searchStr = this.paramEditBox.string;
        const value = _C.getUrlParams(searchStr);
        console.log('value:', value);
        if (value) {
            this.label.string = value;
        } else {
            this.label.string = 'no value';
        }
    }
    onEditBoxChange(text: string, event: cc.Event.EventTouch, customEventData: string) {
        console.log('text:', text);
        let searchStr = this.paramEditBox.string;
        // console.log('searchStr:',searchStr);
        const value = _C.getUrlParams(searchStr);
        // console.log('value:', value);
        if (value) {
            this.label.string = value;
        } else {
            this.label.string = 'no value';
        }
    }

}
