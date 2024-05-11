import { InvalidUUidError, Uuid } from "../uuid.vo"
import {validate as uuidValidate} from 'uuid'

describe('UuidValueObject unit tests', () => {

    const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');
    test('should throw error when id is invalid', () => {
        
        expect(() => {
            new Uuid('invalid-id')
        }).toThrow(new InvalidUUidError())
        expect(validateSpy).toHaveBeenCalledTimes(1)
    })

    test('should create a valid id', () => {
        const uuid = new Uuid()
        expect(uuid).toBeDefined()
        expect(uuid.id).toBeDefined()
        expect(uuidValidate(uuid.id)).toBeTruthy()
        expect(validateSpy).toHaveBeenCalledTimes(1)
    })

    test('should accept a valid uuid', () => {
        const uuid = new Uuid('d0a2f5b1-4e4e-4a6e-8d8d-2b3c2b1d0b0b')
        expect(uuid).toBeDefined()
        expect(uuid.id).toBe('d0a2f5b1-4e4e-4a6e-8d8d-2b3c2b1d0b0b')
        expect(uuidValidate(uuid.id)).toBeTruthy()
        expect(validateSpy).toHaveBeenCalledTimes(1)
    })
})