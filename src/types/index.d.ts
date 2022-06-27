
declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const component: ComponentOptions;
  export default component;
}

interface ObjectParams {
  [prop: string]: any;
}

interface HTMLVideoElement {
  srcObject: any;
}