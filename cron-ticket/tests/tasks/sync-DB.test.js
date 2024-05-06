const { syncBD } = require("../../tasks/sync-DB")


describe('Pruebas en Sync-DB', () => {
    test('Debe de ejecutar el proceso 2 veces', () => {
        syncBD();
        const times = syncBD();
        expect(times).toBe(2)
    })
})