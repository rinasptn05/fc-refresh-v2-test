describe('customer wallet transactions', () => {
    beforeEach(() => {
      cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API-master/FlyingCape-Refreshv2-API-master && php artisan testseed')
      cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 10.000 milidetik (10 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('daftar customer wallet transactions', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button' , { timeout: 10000 }).contains('Customer Wallet Transactions').click() // klik menu Customer Wallet Transactions
        cy.contains('Wallet') // mencari elemen yang berisi teks "Wallet"
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('tidak ingin create customer wallet transaction', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button' , { timeout: 10000 }).contains('Customer Wallet Transactions').click() // klik menu Customer Wallet Transactions
        cy.contains('Wallet') // mencari elemen yang berisi teks "Wallet"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New customer wallet transaction
        cy.contains('Create') // mencari elemen yang berisi teks "Create"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create customer wallet transaction', () => {
      // create 1
      cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button' , { timeout: 10000 }).contains('Customer Wallet Transactions').click() // klik menu Customer Wallet Transactions
      cy.contains('Wallet') // mencari elemen yang berisi teks "Wallet"
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New customer wallet transaction
      cy.contains('Create') // mencari elemen yang berisi teks "Create"
      cy.get('input[id="data.customer_id"]').type('1') // input Customer id "1"
      cy.get('select[id="data.action"]').select('add') // pilih Action "add"
      cy.get('input[id="data.amount"]').type('100') // input Amount "100"
      cy.get('input[id="data.reason"]').type('Top up') // input Reason "Top up"
      cy.get('.fi-color-custom').click() // klik tombol Create
      cy.wait(5000) // menunggu selama 5 detik
      cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik tombol Customer Wallet Transactions
      cy.contains('Wallet') // mencari elemen yang berisi teks "Wallet"

      // create 2
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New customer wallet transaction
      cy.contains('Create') // mencari elemen yang berisi teks "Create"
      cy.get('input[id="data.customer_id"]').type('1') // input Customer id "1"
      cy.get('select[id="data.action"]').select('substract') // pilih Action "substract"
      cy.get('input[id="data.amount"]').type('50') // input Amount "50"
      cy.get('input[id="data.reason"]').type('Beli produk') // input Reason "Beli produk"
      cy.get('.fi-color-custom').click() // klik tombol Create
      cy.wait(5000) // menunggu selama 5 detik
      cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik tombol Customer Wallet Transactions
      cy.contains('Wallet') // mencari elemen yang berisi teks "Wallet"
    })
})