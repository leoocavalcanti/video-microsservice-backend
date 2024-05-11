import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
    constructor(readonly value: string) {
        super();
    }
}

class ComplexValueObject extends ValueObject {
    constructor(readonly value: string, readonly number: number) {
        super();
    }
}

describe('ValueObject unit tests', () => {

    test('should be equals', () => {
        const vo1 = new StringValueObject('value');
        const vo2 = new StringValueObject('value');
        expect(vo1.equals(vo2)).toBeTruthy();

        const vo3 = new ComplexValueObject('value', 1);
        const vo4 = new ComplexValueObject('value', 1);
        expect(vo3.equals(vo4)).toBeTruthy();
    })

    test('should not be equals', () => {
        const vo1 = new StringValueObject('value');
        const vo2 = new StringValueObject('value2');
        expect(vo1.equals(vo2)).toBeFalsy();
        expect(vo1.equals(null as any)).toBeFalsy();
        expect(vo1.equals(undefined as any)).toBeFalsy();

        const vo3 = new ComplexValueObject('value', 1);
        const vo4 = new ComplexValueObject('value', 2);
        expect(vo3.equals(vo4)).toBeFalsy();
    })
});