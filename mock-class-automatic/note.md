# 单元测试

例如在 util.test.js 中只测试 a,b 方法

在 consumer.test.js 中使用mock Util的形式测试 consumer，而不用关心Util中a,b的测试。
a,b的测试应该由util.test.js去测试。

# 集成测试

如果在 consumer.test.js 中不用mock Util的形式，引入真实的Util同时也测试 a,b 方法。
也就是除了测试自己，还要测试依赖，这就是集成测试。

# mock class 有 2 种方法

## 自动mock
例如 jest.mock('./util')会做如下mock，自动把类和类中的方法变成jest.fn()
const Util = jest.fn();
Util.prototype.a = jest.fn();
Util.prototype.b = jest.fn();

## 手动mock
因为自动mock是把类和类中的方法都变成jest.fn()，如果jest.fn()不能满足测试需求。
可以创建__mocks__，并在其中实现。
  
或者在jest.fn()的第二参数中 jest.fn('./util.js', ()=>{
  // customer implementation
})