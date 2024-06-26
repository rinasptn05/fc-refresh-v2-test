describe('sub tag', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8000/admin') // menunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 10.000 milidetik (10 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('daftar Class Master Sub Tags', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Sub Tag').click() // klik menu Sub Tag
        cy.contains('Sub Tags').should('be.visible') // mencari elemen yang berisi teks "Sub Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan create Class Master Sub Tag', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Sub Tag').click() // klik menu Sub Tag
        cy.contains('Sub Tags').should('be.visible') // mencari elemen yang berisi teks "Sub Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master sub tag
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Sports') // input Name "Sports"
        cy.get('a.fi-btn').click() // klik tombol Cancel
        cy.contains('Sub Tags').should('be.visible') // mencari elemen yang berisi teks "Sub Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create Class Master Sub Tag', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Sub Tag').click() // klik menu Sub Tag
        cy.contains('Sub Tags').should('be.visible') // mencari elemen yang berisi teks "Sub Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master sub tag
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Sports') // input Name "Sports"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create & create another Class Master Sub Tag', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Sub Tag').click() // klik menu Sub Tag
        cy.contains('Sub Tags').should('be.visible') // mencari elemen yang berisi teks "Sub Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master sub tag
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Arts') // input Name "Arts"
        cy.get('.fi-ac > button.fi-color-gray').click() // klik tombol Create & create another
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('tidak ingin create Class Master Sub Tag', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Sub Tag').click() // klik menu Sub Tag
        cy.contains('Sub Tags').should('be.visible') // mencari elemen yang berisi teks "Sub Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master sub tag
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan perubahan pada Class Master Sub Tag', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Sub Tag').click() // klik menu Sub Tag
        cy.contains('Sub Tags').should('be.visible') // mencari elemen yang berisi teks "Sub Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(3) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada sub tag Arts
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').clear().type('Adult') // ubah Name dari "Arts" ke "Adult"
        cy.get('.fi-ac > .fi-color-gray').click() // klik tombol Cancel
        cy.contains('Sub Tags').should('be.visible') // mencari elemen yang berisi teks "Sub Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('mengubah pada Class Master Sub Tag', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Sub Tag').click() // klik menu Sub Tag
        cy.contains('Sub Tags').should('be.visible') // mencari elemen yang berisi teks "Sub Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(3) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada sub tag Arts
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').clear().type('Adult') // ubah Name dari "Arts" ke "Adult"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan hapus Class Master Sub Tag', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Sub Tag').click() // klik menu Sub Tag
        cy.contains('Sub Tags').should('be.visible') // mencari elemen yang berisi teks "Sub Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(1) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada sub tag "Music"
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-modal-footer-actions > .fi-color-gray').click() // klik tombol Cancel
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('menghapus Class Master Sub Tag', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Sub Tag').click() // klik menu Sub Tag
        cy.contains('Sub Tags').should('be.visible') // mencari elemen yang berisi teks "Sub Tags" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(2) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada sub tag "Sports"
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.wait(5000) // menunggu selama 5 detik
    })
})