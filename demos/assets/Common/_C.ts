// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class _C {
  static setString(lb: cc.Label, str: string) {
    if (!lb) {
      cc.warn("error lb is null");
      return;
    }
    lb.string = str;
  }

  static onShowNode(node: cc.Node, state: boolean) {
    node.active = state;
  }

  static getUrlParams(name: string) {
    const url = window.location.search;//url?后面的内容
    const params = new URLSearchParams(url);
    return params.get(name);
  }

  // update (dt) {}
}
