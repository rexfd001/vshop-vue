interface ConfigItem {
  noErrTip: boolean;
  noLoading: boolean;
  errTxt?: string;
}

interface Config {
  [prop: string]: ConfigItem;
}

/**
 * 对不需要做请求，响应拦截处理的接口进行配置
 * 使用默认拦截处理的，则不需要在这里配置
 *
 * {
 *  noErrTip { Boolean }  是否禁用接口异常拦截
 *  errTxt { String } 接口失败默认提示信息
 * }
 */
const config: Config = {
  'member/token': { noErrTip: false, noLoading: false },
};

export default config;
