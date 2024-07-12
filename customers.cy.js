describe('customers', () => {
    beforeEach(() => {
      cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API-master/FlyingCape-Refreshv2-API-master && php artisan testseed')
      cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 10.000 milidetik (10 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('daftar customers', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Customers').click() // klik menu Customers
        cy.contains('Customers') // mencari elemen yang berisi teks "Customers"
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('tidak ingin create customer', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Customers').click() // klik menu Customers
      cy.contains('Customers') // mencari elemen yang berisi teks "Customers"
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New customer
      cy.contains('Create') // mencari elemen yang berisi teks "Create"
      cy.get('.fi-color-custom').click() // klik tombol Create
      cy.wait(5000) // menunggu selama 5 detik
    })
    
    it('create, edit, delete customer & wallet transactions', () => {
      // create customer
      cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Customers').click() // klik menu Customers
      cy.contains('Customers') // mencari elemen yang berisi teks "Customers"
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New customer
      cy.contains('Create') // mencari elemen yang berisi teks "Create"

      cy.get('input[id="data.email"]').type('customer02@gmail.com') // input Email "customer02@gmail.com"
      cy.get('input[id="data.first_name"]').type('Rina') // input First name "Rina"
      cy.get('input[id="data.last_name"]').type('Septiani') // input Last name "Septiani"
      cy.get('input[id="data.mobile_number"]').type('081234567890') // input Mobile number "081234567890"
      cy.get('input[id="data.postal_code"]').type('45531') // input Postal code "45531"
      cy.get('input[id="data.gender-female"]').click() // pilih Gender "Female"
      cy.get('input[id="data.subscribe_updates_discount-1"]').click() // pilih Subscribe updates discount "Yes"
      cy.get('input[id="data.password"]').type('customer123') // input Password "customer123"
      cy.get('.fi-color-custom').click() // klik tombol Create
      cy.wait(10000) // menunggu selama 10 detik
      cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik tombol Customers
      cy.contains('Customers') // mencari elemen yang berisi teks "Customers"
      cy.wait(5000) // menunggu selama 5 detik

      // edit customer
      cy.get(':nth-child(2) > :nth-child(5) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol View pada First name Rina
      cy.contains('Customer') // mencari elemen yang berisi teks "Customer"
      cy.get('input[id="data.mobile_number"]').clear().type('081234561012') // ubah Mobile number dari "081234567890" ke "081234561012"
      cy.get('input[id="data.subscribe_updates_discount-0"]').click() // ubah Subscribe updates discount dari "Yes" ke "No"
      cy.get('.fi-ac > .fi-color-custom').click() // klik tombol Save changes
      cy.wait(5000) // menunggu selama 5 detik
      cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik tombol Customers
      cy.contains('Customers') // mencari elemen yang berisi teks "Customers"
      cy.wait(5000) // menunggu selama 5 detik

      // lihat wallet transactions
      cy.get(':nth-child(2) > :nth-child(5) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol View pada First name Rina
      cy.contains('Customer') // mencari elemen yang berisi teks "Customer"
      cy.wait(20000) // menunggu selama 20 detik
      cy.contains('Wallet Transactions') // mencari elemen yang berisi teks "Wallet Transactions"
      cy.wait(5000) // menunggu selama 5 detik
      cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik tombol Customers
      cy.contains('Customers') // mencari elemen yang berisi teks "Customers"
      cy.wait(5000) // menunggu selama 5 detik

      // cari customer berdasarkan apa yang admin input1
      cy.get('input[id="input-1"]').type('rina') // input "rina" pada menu pencarian
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('rina') // mencari elemen yang berisi teks "rina"
      cy.wait(5000) // menunggu selama 5 detik

      // cari customer berdasarkan apa yang admin input2
      cy.get('input[id="input-1"]').clear().type('abc') // input "abc" pada menu pencarian
      cy.wait(10000) // menunggu selama 10 detik
      cy.get('input[id="input-1"]').clear() // menghapus inputan
      cy.wait(5000) // menunggu selama 5 detik

      // delete customer
      cy.get('input[value="2"]').click() // pilih checkbox pada customer ke-2
      cy.get('.fi-dropdown-trigger > .fi-btn').click() // klik tombol Bulk actions
      cy.get('.fi-dropdown-list > .fi-dropdown-list-item').click() // klik tombol Delete selected
      cy.wait(5000) // menunggu selama 5 detik
      cy.contains('Delete') // mencari elemen yang berisi teks "Delete"
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
      cy.wait(5000) // menunggu selama 5 detik
    })
})