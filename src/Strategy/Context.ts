import { Strategy } from "./Strategy";

export class Context {

	private strategy: Strategy;

	constructor(strategy: Strategy) {
		this.strategy = strategy;
	}

	setStrategy(strategy: Strategy): Context {
		this.strategy = strategy;
		return this
	}

	doSomeBusinessLogic(data: string[]): string[] {
		return this.strategy.doAlgorithm(data)
	}
}
