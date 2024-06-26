describe('campaign tag', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8000/admin') // menunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 10.000 milidetik (10 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('daftar Class Master Campaign Tags', () => {
        cy.get(':nth-child(4) > .fi-sidebar-item-button').click() // klik menu Campaign Tag
        cy.contains('Campaign Tags').should('be.visible') // mencari elemen yang berisi teks "Campaign Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan create Class Master Campaign Tag', () => {
        cy.get(':nth-child(4) > .fi-sidebar-item-button').click() // klik menu Campaign Tag
        cy.contains('Campaign Tags').should('be.visible') // mencari elemen yang berisi teks "Campaign Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master campaign tag
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Promotion 2') // input Name "Promotion 2"
        cy.get('a.fi-btn').click() // klik tombol Cancel
        cy.contains('Campaign Tags').should('be.visible') // mencari elemen yang berisi teks "Campaign Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create Class Master Campaign Tag', () => {
        cy.get(':nth-child(4) > .fi-sidebar-item-button').click() // klik menu Campaign Tag
        cy.contains('Campaign Tags').should('be.visible') // mencari elemen yang berisi teks "Campaign Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master campaign tag
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Promotion 2') // input Name "Promotion 2"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create & create another Class Master Campaign Tag', () => {
        cy.get(':nth-child(4) > .fi-sidebar-item-button').click() // klik menu Campaign Tag
        cy.contains('Campaign Tags').should('be.visible') // mencari elemen yang berisi teks "Campaign Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master campaign tag
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Promotion 3') // input Name "Promotion 3"
        cy.get('.fi-ac > button.fi-color-gray').click() // klik tombol Create & create another
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('tidak ingin create Class Master Campaign Tag', () => {
        cy.get(':nth-child(4) > .fi-sidebar-item-button').click() // klik menu Campaign Tag
        cy.contains('Campaign Tags').should('be.visible') // mencari elemen yang berisi teks "Campaign Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master campaign tag
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan perubahan pada Class Master Campaign Tag', () => {
        cy.get(':nth-child(4) > .fi-sidebar-item-button').click() // klik menu Campaign Tag
        cy.contains('Campaign Tags').should('be.visible') // mencari elemen yang berisi teks "Campaign Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(2) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada campaign tag Promotion 2
        cy.get('input[id="data.name"]').clear().type('promotion 2') // ubah Name dari "Promotion 2" ke "promotion 2"
        cy.get('.fi-ac > .fi-color-gray').click() // klik tombol Cancel
        cy.contains('Campaign Tags').should('be.visible') // mencari elemen yang berisi teks "Campaign Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('mengubah pada Class Master Campaign Tag', () => {
        cy.get(':nth-child(4) > .fi-sidebar-item-button').click() // klik menu Campaign Tag
        cy.contains('Campaign Tags').should('be.visible') // mencari elemen yang berisi teks "Campaign Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(2) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada campaign tag Promotion 2
        cy.get('input[id="data.name"]').clear().type('promotion 2') // ubah Name dari "Promotion 2" ke "promotion 2"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan hapus Class Master Campaign Tag', () => {
        cy.get(':nth-child(4) > .fi-sidebar-item-button').click() // klik menu Campaign Tag
        cy.contains('Campaign Tags').should('be.visible') // mencari elemen yang berisi teks "Campaign Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(1) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada campaign tag Promotion
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-modal-footer-actions > .fi-color-gray').click() // klik tombol Cancel
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('menghapus Class Master Campaign Tag', () => {
        cy.get(':nth-child(4) > .fi-sidebar-item-button').click() // klik menu Campaign Tag
        cy.contains('Campaign Tags').should('be.visible') // mencari elemen yang berisi teks "Campaign Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(3) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada campaign tag Promotion 3
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.wait(5000) // menunggu selama 5 detik
    })
})