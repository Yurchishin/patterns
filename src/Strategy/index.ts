import { Context} from "./Context";
import { SortStrategy, ReverseStrategy} from "./Strategy";

const data = ['a', 'c', 'b', 'e']

const context = new Context(new SortStrategy())
console.log(context.doSomeBusinessLogic(data))

context.setStrategy(new ReverseStrategy())
console.log(context.doSomeBusinessLogic(data))
