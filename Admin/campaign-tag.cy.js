describe('campaign tag', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 20000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 20.000 milidetik (20 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list class master campaign tags', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(5) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Campaign Tag').click() // klik menu Campaign Tag
        cy.contains('Campaign Tags').should('be.visible') // mencari elemen yang berisi teks "Campaign Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('tidak ingin create class master campaign tag', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(5) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Campaign Tag').click() // klik menu Campaign Tag
        cy.contains('Campaign Tags').should('be.visible') // mencari elemen yang berisi teks "Campaign Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master campaign tag
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, edit, delete class master campaign tag', () => {
        // create class master campaign tag
        cy.get('.fi-sidebar-group-items > :nth-child(5) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Campaign Tag').click() // klik menu Campaign Tag
        cy.contains('Campaign Tags').should('be.visible') // mencari elemen yang berisi teks "Campaign Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master campaign tag
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Promotion 2') // input Name "Promotion 2"
        cy.get('select[id="data.type"]').select('Campaign') // pilih Type "Campaign"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Class Master Campaign Tags
        cy.contains('Campaign Tags').should('be.visible') // mencari elemen yang berisi teks "Campaign Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // edit class master campaign tag
        cy.get(':nth-child(2) > :nth-child(4) > .whitespace-nowrap > .fi-ta-actions > a.fi-link').click() // klik tombol Edit pada Name Promotion 2
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').clear().type('Promotion 3') // ubah Name dari "Promotion 2" menjadi "Promotion 3"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(5000) // menunggu selama 5 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Class Master Campaign Tags
        cy.contains('Campaign Tags').should('be.visible') // mencari elemen yang berisi teks "Campaign Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // delete class master campaign tag
        cy.get(':nth-child(2) > :nth-child(4) > .whitespace-nowrap > .fi-ta-actions > button.fi-link').click() // klik tombol Delete
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.wait(5000) // menunggu selama 5 detik
    })
})