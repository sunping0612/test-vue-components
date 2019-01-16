import Test from './src/index.vue';

Test.install = (Vue) => {
  Vue.component(Test.name, Test);
};

export default Test;
