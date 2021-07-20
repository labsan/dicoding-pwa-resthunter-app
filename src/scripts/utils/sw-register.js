import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const SW_REGISTER = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    return;
  }
  console.log('Serviceworker tidak mendukung browser ini');
};

export default SW_REGISTER;
