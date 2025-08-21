// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import _C from "../../Common/_C";
import PrefabModelNode from "./PrefabModelNode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class loadRankScene extends cc.Component {

	prefabIndex:number = 0;

	@property({ type: cc.Node, displayName: '' })
	prefabContainerNode: cc.Node = null;

	@property({ type: cc.Button, displayName: '' })
	copyPrefabBtn: cc.Button = null;

	@property({ type: cc.Node, displayName: '' })
	thirdNode: cc.Node = null;

	@property({ type: cc.Node, displayName: '' })
	secondNode: cc.Node = null;

	@property({ type: cc.Node, displayName: '' })
	firstNode: cc.Node = null;

	@property({ type: cc.Button, displayName: '' })
	destroyFirstBtn: cc.Button = null;

	@property({ type: cc.Button, displayName: '' })
	hideFirstBtn: cc.Button = null;

	@property({ type: cc.Button, displayName: '' })
	showFirstBtn: cc.Button = null;



	// LIFE-CYCLE CALLBACKS:

	onLoad() {
		console.log('onLoad-loadRankScene', this.node.name);
	}

	start() {
		console.log('start-loadRankScene', this.node.name);
	}
	onEnable() {
		console.log('onEnable-loadRankScene', this.node.name);

	}

	// update (dt) {}

	showFirstBtnClick() {
		_C.onShowNode(this.firstNode, true);
	}

	hideFirstBtnClick() {
		_C.onShowNode(this.firstNode, false);
	}

	destroyFirstBtnClick() {
		this.firstNode.destroy();
	}

	copyPrefabBtnClick() {
		
		cc.resources.load("prefabs/PrefabModelNode", cc.Prefab,  (err, prefab: cc.Prefab) =>{
			if (err) {
				cc.warn("error load prefab", err);
				return;
			}
			++this.prefabIndex;
			let prefabNode: cc.Node = cc.instantiate(prefab);
			prefabNode.parent = this.prefabContainerNode;
			prefabNode.getComponent(PrefabModelNode).initInfo(this.prefabIndex);
		});


	}
}
