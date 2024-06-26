describe('admins', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API-master/FlyingCape-Refreshv2-API && php artisan testseed');
        cy.visit('http://127.0.0.1:8000/admin') // menunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 10.000 milidetik (10 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('daftar users', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Admins').click() // klik menu Admins
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('tidak ingin create user', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Admins').click() // klik menu Admins
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New user
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan create user', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Admins').click() // klik menu Admins
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New user
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna

        cy.get(':nth-child(1) > .fi-fo-field-wrp > :nth-child(1)').type('rina') // isi Name "rina"
        cy.get(':nth-child(2) > .fi-fo-field-wrp > :nth-child(1)').type('rina@gmail.com') // isi Email "rina@gmail.com"
        cy.get(':nth-child(4) > .fi-fo-field-wrp > :nth-child(1)').type('rina123') // isi Password "rina123"
        cy.get('select[id="data.is_active"]').select('Active') // pilih Status "Active"
        cy.get('a.fi-btn').click() // klik tombol Cancel
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create user & membatalkan perubahan pada user & membatalkan hapus user', () => {
        // create user
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Admins').click() // klik menu Admins
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New user
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna

        cy.get(':nth-child(1) > .fi-fo-field-wrp > :nth-child(1)').type('rina') // isi Name "rina"
        cy.get(':nth-child(2) > .fi-fo-field-wrp > :nth-child(1)').type('rina@gmail.com') // isi Email "rina@gmail.com"
        cy.get(':nth-child(4) > .fi-fo-field-wrp > :nth-child(1)').type('rina123') // isi Password "rina123"
        cy.get('select[id="data.is_active"]').select('Active') // pilih Status "Active"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik

        // membatalkan perubahan pada user
        cy.get('input[id="data.email"]').clear().type('rinaseptiani@gmail.com') // ubah Email dari "rina@gmail.com" menjadi "rinaseptiani@gmail.com"
        cy.get('.fi-ac > .fi-color-gray').click() // klik tombol Cancel
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik tombol Users
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // membatalkan hapus user
        cy.get(':nth-child(2) > :nth-child(5) > .whitespace-nowrap').click() // klik tombol Edit pada user "rina"
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-modal-footer-actions > .fi-color-gray').click() // klik tombol Cancel
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create & create another user & mengubah pada user & menghapus user', () => {
        // create & create another user
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Admins').click() // klik menu Admins
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New user
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        
        cy.get(':nth-child(1) > .fi-fo-field-wrp > :nth-child(1)').type('septiani') // isi Name "septiani"
        cy.get(':nth-child(2) > .fi-fo-field-wrp > :nth-child(1)').type('septiani@gmail.com') // isi Email "septiani@gmail.com"
        cy.get(':nth-child(4) > .fi-fo-field-wrp > :nth-child(1)').type('septiani123') // isi Password "septiani123"
        cy.get('select[id="data.is_active"]').select('Active') // pilih Status "Active"
        cy.get('.fi-ac > button.fi-color-gray').click() // klik tombol Create & create another
        cy.wait(5000) // menunggu selama 5 detik

        // mengubah pada user
        cy.get('a.fi-btn').click() // klik tombol Cancel
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(2) > :nth-child(5) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit
        cy.get('input[id="data.email"]').clear().type('septiani5@gmail.com') // ubah Email dari "septiani@gmail.com" menjadi "septiani5@gmail.com"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(5000) // menunggu selama 5 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik tombol Users
        cy.wait(5000) // menunggu selama 5 detik

        // menghapus user
        cy.get(':nth-child(2) > :nth-child(5) > .whitespace-nowrap').click() // klik tombol Edit pada user "septiani"
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.wait(5000) // menunggu selama 5 detik
    })
})