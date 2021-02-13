mock module 分 mock 自定义的module 和 node module

# mock user module
在需要被mock的moduleName同级目录建立 __mocks__/同名文件。

在test文件中**显示引入** jest.mock('moduleName')


# mock 非node核心 module, 例如 axios
在node_modules同级目录建立 __mocks__/axios.js。

在test文件中**不需要显示引入** jest.mock('moduleName')

# mock node核心 module, 例如 fs
在node_modules同级目录建立 __mocks__/fs.js。

在test文件中**显示引入** jest.mock('moduleName')

**当然不管是mock function， mock methods， mock class， mock module 都有手动mock和自动mock。**
**手动mock就是建立__mocks__/实现 然后在测试文件中引入。**
**自动mock就是直接在测试文件中使用jest.mock('moduleName')的默认实现**