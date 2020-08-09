import {timeToMinutes} from '../src/utils'

describe("Teste das funções utilitárias", () => {
    it("should convert 00:00 to 0 minutes", () => {
        const time = "00:00"
        const minutes = timeToMinutes(time)
        expect(minutes).toBe(0)
    })

    it("should convert 23:59 to 1.439 minutes", () => {
        const time = "23:59"
        const minutes = timeToMinutes(time)
        expect(minutes).toBe(1439)
    })
})