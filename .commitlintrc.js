module.exports = {
    ignores: [(commit) => commit.includes('init')],
    extends: ['@commitlint/config-conventional'],
    rules: {
      // 信息以空格开头
      'body-leading-blank': [2, 'always'],
      'footer-leading-blank': [2, 'always'],
      // 信息最大长度
      'header-max-length': [2, 'always', 108],
      // 信息不能未空
      'subject-empty': [2, 'never'],
      // 信息类型不能未空
      'type-empty': [2, 'never'],
      // 提交信息的类型 下文有介绍
      'type-enum': [
        2,
        'always',
        [
          'feat',//新增功能
          'fix',//修改bug
          'perf',//优化功能
          'style',//修改样式
          'docs',//整理文档
          'test',//测试用例
          'refactor',//重构
          'build',//打包
          'ci',//ci部署
          'chore',//繁杂
          'revert',//重置代码
          'wip',//半成品
          'workflow',//工作流
          'types',//类型
          'release',//发布新版本
          'temp'//暂存
        ],
      ],
    },
  };