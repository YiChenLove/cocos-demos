# Cocos Creator 演示项目

这是一个基于 **Cocos Creator 2.4.6** 引擎的演示项目，使用 **TypeScript** 开发，展示了多个实用的游戏开发功能和最佳实践。

## 🚀 项目信息

- **引擎版本**: Cocos Creator 2.4.6
- **开发语言**: TypeScript (ES5 + ES2015/2017)
- **项目ID**: bb9aaa15-2499-4be8-abb6-9bc27fb64bcd
- **兼容性**: 支持 v2.1.0 ~ v2.2.1 版本兼容

## 📁 项目结构

```
demos/
├── assets/                    # 项目资源目录
│   ├── Common/               # 公共工具类
│   │   └── _C.ts            # 通用静态方法类
│   ├── Demos/                # 演示功能模块
│   │   ├── effectUrlParams/  # URL参数处理演示
│   │   └── loadRank/         # 节点加载顺序演示
│   ├── resources/            # 资源文件
│   │   └── prefabs/          # 预制体文件
│   ├── Scene/                # 场景文件
│   ├── Script/               # 脚本文件
│   └── Texture/              # 纹理资源
├── settings/                  # 项目配置
├── creator.d.ts              # Cocos Creator 类型定义
├── tsconfig.json             # TypeScript 配置
└── project.json              # 项目配置文件
```

## 🎯 功能模块

### 1. 公共工具类 (`Common/_C.ts`)

提供了一系列静态工具方法：

- `setString(lb: cc.Label, str: string)`: 安全设置Label文本
- `onShowNode(node: cc.Node, state: boolean)`: 控制节点显示/隐藏
- `getUrlParams(name: string)`: 解析URL查询参数

### 2. URL参数处理演示 (`Demos/effectUrlParams/`)

演示如何解析和处理URL查询参数：

- **功能**: 实时解析URL参数并显示结果
- **组件**: `urlTest.ts` - 包含输入框、测试按钮和结果显示
- **特性**: 支持实时输入验证和参数提取

### 3. 节点加载顺序演示 (`Demos/loadRank/`)

研究Cocos Creator中多个脚本组件的生命周期执行顺序：

- **主要组件**:
  - `loadRankScene.ts`: 主场景控制器
  - `FirstNode.ts`, `SecondNode.ts`, `ThirdNode.ts`: 测试节点
  - `PrefabModelNode.ts`: 动态创建的预制体节点

- **功能特性**:
  - 动态加载和实例化预制体
  - 节点显示/隐藏控制
  - 节点销毁管理
  - 生命周期回调顺序观察

- **预制体管理**:
  - 支持动态创建多个预制体实例
  - 每个实例都有唯一的索引标识
  - 预制体容器管理

## 🛠️ 技术特性

### TypeScript 支持
- 完整的类型定义支持
- 装饰器语法支持 (`@ccclass`, `@property`)
- ES2015/2017 特性支持

### 生命周期管理
- 完整的组件生命周期回调
- 节点状态管理 (显示/隐藏/销毁)
- 内存管理最佳实践

### 资源管理
- 动态加载预制体资源
- 资源错误处理
- 实例化和管理

## 🚀 快速开始

### 环境要求
- Cocos Creator 2.4.6 或兼容版本
- 支持 TypeScript 的编辑器 (推荐 VS Code)

### 运行步骤
1. 使用 Cocos Creator 打开项目
2. 在编辑器中预览场景
3. 运行 `loadRankScene` 场景观察生命周期
4. 测试 URL 参数处理功能

### 开发建议
- 使用 TypeScript 进行开发以获得更好的类型安全
- 遵循组件的生命周期管理规范
- 合理使用公共工具类提高代码复用性

## 📚 学习资源

- [Cocos Creator 官方文档](https://docs.cocos.com/creator/manual/zh/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [Cocos Creator 生命周期文档](https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html)

## 🔧 配置说明

### TypeScript 配置
- 目标版本: ES5
- 模块系统: CommonJS
- 支持装饰器语法
- 输出目录: `temp/vscode-dist`

### 项目配置
- 引擎: cocos2d-html5
- 包管理: packages
- 版本兼容: v2.1.0 ~ v2.2.1

## 📝 注意事项

1. **版本兼容性**: 项目包含 v2.1-2.2.1 兼容脚本，如不使用 Toggle 组件可删除
2. **资源路径**: 预制体资源位于 `resources/prefabs/` 目录
3. **生命周期**: 注意观察不同组件的加载顺序，有助于理解引擎机制
4. **错误处理**: 资源加载包含完整的错误处理机制

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目！

---
