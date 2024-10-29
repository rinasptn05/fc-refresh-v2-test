describe('zones', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 20000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 20.000 milidetik (20 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list zones', () => {
        cy.get(':nth-child(10) > .fi-sidebar-item-button').click() // klik menu Zones
        cy.contains('Zones') // mencari elemen yang berisi teks "Zones"
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('tidak ingin create zone', () => {
        cy.get(':nth-child(10) > .fi-sidebar-item-button').click() // klik menu Zones
        cy.contains('Zones') // mencari elemen yang berisi teks "Zones"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New zone
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, edit, delete, search zone', () => {
        // create zone
        cy.get(':nth-child(10) > .fi-sidebar-item-button').click() // klik menu Zones
        cy.contains('Zones') // mencari elemen yang berisi teks "Zones"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New zone
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('South') // input Name "South"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Zones
        cy.contains('Zones') // mencari elemen yang berisi teks "Zones"
        cy.wait(5000) // menunggu selama 5 detik

        // edit zone
        cy.get(':nth-child(7) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > a.fi-link').click() // klik tombol Edit pada Name South
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').clear().type('South-East') // ubah Name dari "South" menjadi "South-East"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(5000) // menunggu selama 5 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Zones
        cy.contains('Zones') // mencari elemen yang berisi teks "Zones"
        cy.wait(5000) // menunggu selama 5 detik

        // delete zone
        cy.get(':nth-child(7) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > button.fi-link').click() // klik tombol Delete pada Name South-East
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Delete') // mencari elemen yang berisi teks "Delete"
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.wait(10000) // menunggu selama 10 detik

        // cari zone berdasarkan apa yang admin input1
        cy.get('input[id="input-1"]').type('abc') // input Search "abc"
        cy.wait(10000) // menunggu selama 10 detik

        // cari zone berdasarkan apa yang admin input2
        cy.get('input[id="input-1"]').clear().type('north') // input Search "north"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('North').should('be.visible') // mencari elemen yang berisi teks "North" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik        
    })
})