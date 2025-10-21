describe('customer wallet transactions', () => {
    beforeEach(() => {
      cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
      cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list customer wallet transactions', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(4) > .fi-sidebar-item-button' , { timeout: 10000 }).contains('Customer Wallet Transactions').click() // klik menu Customer Wallet Transactions
        cy.contains('Wallet') // mencari elemen yang berisi teks "Wallet"
        cy.contains('No customer wallet transactions').should('be.visible') // mencari elemen yang berisi teks "No customer wallet transactions" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create customer wallet transaction berdasarkan default', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(4) > .fi-sidebar-item-button' , { timeout: 10000 }).contains('Customer Wallet Transactions').click() // klik menu Customer Wallet Transactions
        cy.contains('Wallet') // mencari elemen yang berisi teks "Wallet"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New customer wallet transaction
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, search, edit, delete customer wallet transaction', () => {
      // create customer wallet transaction1
      cy.get('.fi-sidebar-group-items > :nth-child(4) > .fi-sidebar-item-button' , { timeout: 10000 }).contains('Customer Wallet Transactions').click() // klik menu Customer Wallet Transactions
      cy.contains('Wallet') // mencari elemen yang berisi teks "Wallet"
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New customer wallet transaction
      cy.contains('Create') // mencari elemen yang berisi teks "Create"
      cy.get('input[id="data.email"]').type('customer@gmail.com') // input Customer Email "customer@gmail.com"
      cy.get('select[id="data.action"]').select('Add') // pilih Action "Add"
      cy.get('input[id="data.amount"]').type('100') // input Amount "100"
      cy.get('input[id="data.reason"]').type('Top up') // input Reason "Top up"
      cy.get('.fi-color-custom').click() // klik tombol Create
      cy.contains('Created', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Created" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
      cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Customer Wallet Transactions
      cy.contains('Wallet') // mencari elemen yang berisi teks "Wallet"
      cy.wait(5000) // menunggu selama 5 detik

      // create customer wallet transaction2
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New customer wallet transaction
      cy.contains('Create') // mencari elemen yang berisi teks "Create"
      cy.get('input[id="data.email"]').type('customer@gmail.com') // input Customer Email "customer@gmail.com"
      cy.get('select[id="data.action"]').select('Substract') // pilih Action "Substract"
      cy.get('input[id="data.amount"]').type('50') // input Amount "50"
      cy.get('input[id="data.reason"]').type('Buy class') // input Reason "Buy class"
      cy.get('.fi-color-custom').click() // klik tombol Create
      cy.contains('Created', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Created" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
      cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Customer Wallet Transactions
      cy.contains('Wallet') // mencari elemen yang berisi teks "Wallet"
      cy.wait(5000) // menunggu selama 5 detik

      // search customer wallet transaction berdasarkan filter Customer Email
      cy.get('div[class="choices__inner"]').click() // klik menu dropdown pada Customer Email
      cy.wait(10000) // menunggu selama 10 detik
      cy.get('div[id="choices--tableFilterscustomercustomer-item-choice-1"]').click() // pilih Customer Email "customer@gmail.com"
      cy.contains('Top up', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Top up" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.contains('Buy class').should('be.visible') // mencari elemen yang berisi teks "Buy class" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.contains('customer@gmail.com') // mencari elemen yang berisi teks "customer@gmail.com"
      cy.wait(5000) // menunggu selama 5 detik

      // toggle columns
      cy.get('.fi-dropdown-trigger > .fi-icon-btn > .fi-icon-btn-icon > path').click() // klik tombol Toggle columns
      cy.get('input[id="toggledTableColumns.customer.user.email"]').click() // klik checkbox pada Columns Email
      cy.get('.fi-dropdown-trigger > .fi-icon-btn > .fi-icon-btn-icon > path').click() // klik tombol Toggle columns
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('customer@gmail.com') // mencari elemen yang berisi teks "customer@gmail.com"
      cy.wait(5000) // menunggu selama 5 detik

      // edit customer wallet transaction
      cy.get(':nth-child(2) > :nth-child(5) > .whitespace-nowrap > .fi-ta-actions > a.fi-link').click() // klik Edit pada Reason "Buy product"
      cy.get('input[id="data.amount"]').clear().type('70') // ubah Amount dari "50" menjadi "70"
      cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
      cy.contains('Saved', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Saved" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
      cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() //  klik Customer Wallet Transactions
      cy.contains('Wallet') // mencari elemen yang berisi teks "Wallet"
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('div[class="choices__inner"]').click() // klik menu dropdown pada Customer Email
      cy.contains('customer@gmail.com', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "customer@gmail.com" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
      cy.get('div[id="choices--tableFilterscustomercustomer-item-choice-1"]').click() // pilih Customer Email "customer@gmail.com"
      cy.contains('70', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "70" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik

      // delete customer wallet transaction
      cy.get(':nth-child(2) > :nth-child(5) > .whitespace-nowrap > .fi-ta-actions > button.fi-link').click() // klik Delete pada Reason "Buy product"
      cy.contains('Are you sure you would like to do this?', { timeout: 30000 }) // mencari elemen yang berisi teks "Are you sure you would like to do this?" 
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
      cy.contains('Deleted', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Deleted" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
      cy.contains('Buy class').should('not.exist') // memastikan tidak ada elemen yang mengandung teks "Buy class"
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('.fi-ta-filters > :nth-child(1) > .fi-link > .font-semibold').click() // klik Reset
      cy.wait(10000) // menunggu selama 10 detik
    })
})