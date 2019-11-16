import {House, Bank} from "./Place";

export interface Visitor {
	visitHouse(element: House): void;

	visitBank(element: Bank): void;
}

export class InsuranceVisitor implements Visitor {
	visitHouse(element: House): void {
		console.log(element.exclusiveHouseMethod());
	}

	visitBank(element: Bank): void {
		console.log(element.exclusiveBankMethod());
	}
}
