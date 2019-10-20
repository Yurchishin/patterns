export interface Strategy {
	doAlgorithm(data: string[]): string[];
}

export class SortStrategy implements Strategy {

	doAlgorithm(data: string[]): string[] {
		return data.sort();
	}
}

export class ReverseStrategy implements Strategy {

	doAlgorithm(data: string[]): string[] {
		return data.reverse();
	}
}
