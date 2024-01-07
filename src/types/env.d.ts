/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_API_BASEURL: string
    // 更多环境变量...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }

  // <reference types="vite/client" />
// vue3 报错提示 找不到模块“./XXX.vue”或其相应的类型声明
// 报错原因：typescript 只能理解 .ts 文件，无法理解 .vue文件
// declare module '*.vue' {
//   import type { DefineComponent } from 'vue'
//   const component: ComponentOptions | ComponentOptions['setup']
//   export default component
// }

declare module 'vue' {
  import { CompatVue } from '@vue/runtime-dom'
  const Vue: CompatVue
  export default Vue
  export * from '@vue/runtime-dom'
  const { configureCompat } = Vue
  export { configureCompat }
}
