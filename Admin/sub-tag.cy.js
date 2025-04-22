describe('sub tag', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // menunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list class master sub tags', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(4) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Sub Tag').click() // klik menu Sub Tag
        cy.contains('Sub Tags').should('be.visible') // mencari elemen yang berisi teks "Sub Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.contains('Music').should('be.visible') // mencari elemen yang berisi teks "Music" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create class master sub tag berdasarkan default', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(4) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Sub Tag').click() // klik menu Sub Tag
        cy.contains('Sub Tags').should('be.visible') // mencari elemen yang berisi teks "Sub Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master sub tag
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, edit, delete class master sub tag', () => {
        // create class master sub tag
        cy.get('.fi-sidebar-group-items > :nth-child(4) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Sub Tag').click() // klik menu Sub Tag
        cy.contains('Sub Tags').should('be.visible') // mencari elemen yang berisi teks "Sub Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master sub tag
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Sports') // input Name "Sports"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(10000) // menunggu selama 10 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Class Master Sub Tags
        cy.contains('Sub Tags').should('be.visible') // mencari elemen yang berisi teks "Sub Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.contains('Sports').should('be.visible') // mencari elemen yang berisi teks "Sports" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // edit class master sub tag
        cy.get(':nth-child(2) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik Edit pada sub tag "Sports"
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').clear().type('Arts') // ubah Name dari "Sports" menjadi "Arts"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(10000) // menunggu selama 10 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Class Master Sub Tags
        cy.contains('Sub Tags').should('be.visible') // mencari elemen yang berisi teks "Sub Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.contains('Arts').should('be.visible') // mencari elemen yang berisi teks "Arts" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // delete class master sub tag
        cy.get(':nth-child(2) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik Edit pada sub tag "Arts"
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Delete').should('be.visible') // mencari elemen yang berisi teks "Delete" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Arts').should('not.exist') // memastikan tidak ada elemen yang mengandung teks "Arts"
        cy.wait(5000) // menunggu selama 5 detik
    })
})