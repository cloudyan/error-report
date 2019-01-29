// vue 错误处理
function formatComponentName(vm) {
  try {
    if (vm.$root === vm) return 'root';
    var name = vm._isVue
      ? (vm.$options && vm.$options.name) ||
        (vm.$options && vm.$options._componentTag)
      : vm.name;
    return (
      (name ? 'component <' + name + '>' : 'anonymous component') +
      (vm._isVue && vm.$options && vm.$options.__file
        ? ' at ' + (vm.$options && vm.$options.__file)
        : '')
    );
  } catch (error) {
    // 无需出错处理
  }
}

export default function(errorReport, Vue) {
  Vue.config.errorHandler = (err, vm, info) => {
    try {
      if (vm) {
        const componentName = formatComponentName(vm);
        const propsData = vm.$options && vm.$options.propsData;

        errorReport.notifyError({
          value: err ? err.message : err,
          metaData: {
            componentName,
            propsData,
            info,
          },
          stack: err && err.stack,
        });
      } else {
        errorReport.notifyError(err);
      }
    } catch (error) {
      // 无需出错处理
    }
  };
}
