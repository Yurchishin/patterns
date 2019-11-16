import { Visitor } from "./Visitor";

export interface Place {
	accept(visitor: Visitor): void;
}

export class House implements Place {
	accept(visitor: Visitor): void {
		visitor.visitHouse(this);
	}

	exclusiveHouseMethod(): string {
		return 'House';
	}
}

export class Bank implements Place {
	accept(visitor: Visitor): void {
		visitor.visitBank(this);
	}

	exclusiveBankMethod(): string {
		return 'Bank';
	}
}
