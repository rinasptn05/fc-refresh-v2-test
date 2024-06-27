describe('mi category', () => {
    beforeEach(() => {
      cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API-master/FlyingCape-Refreshv2-API && php artisan testseed')
      cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 10.000 milidetik (10 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('daftar class master mi categories', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('MI Category').click() // klik menu MI Category
        cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('tidak ingin create class master mi category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('MI Category').click() // klik menu MI Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master mi category
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-color-custom').click() // klik tombol Create
      cy.wait(5000) // menunggu selama 5 detik
    })  

    it('create, edit, delete class master mi category', () => {
      // create class master mi category
      cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('MI Category').click() // klik menu MI Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master mi category
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('input[id="data.name"]').type('People Smart') // input Name "People Smart"
      cy.get('.fi-color-custom').click() // klik tombol Create
      cy.wait(5000) // menunggu selama 5 detik
      cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik tombol Class Master Mi Categories
      cy.wait(5000) // menunggu selama 5 detik

      // edit class master mi category
      cy.get(':nth-child(9) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada mi category People Smart
      cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('input[id="data.name"]').clear().type('People Smart 2') // ubah Name dari "People Smart" ke "People Smart 2"
      cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
      cy.wait(5000) // menunggu selama 5 detik
      cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik tombol Class Master Mi Categories
      cy.wait(5000) // menunggu selama 5 detik

      // delete class master mi category
      cy.get(':nth-child(9) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada mi category People Smart 2
      cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
      cy.wait(5000) // menunggu selama 5 detik
      cy.contains('Delete').should('be.visible') // mencari elemen yang berisi teks "Delete" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm 
      cy.wait(5000) // menunggu selama 5 detik
  })
})