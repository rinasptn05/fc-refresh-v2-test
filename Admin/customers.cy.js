describe('customers', () => {
    beforeEach(() => {
      cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
      cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list customers', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(6) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Customers').click() // klik menu Customers
      cy.contains('Customers') // mencari elemen yang berisi teks "Customers"
      cy.contains('Kholis').should('be.visible') // mencari elemen yang berisi teks "Kholis" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
    })

    it('create customer berdasarkan default', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(6) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Customers').click() // klik menu Customers
      cy.contains('Customers') // mencari elemen yang berisi teks "Customers"
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New customer
      cy.contains('Create') // mencari elemen yang berisi teks "Create"
      cy.get('.fi-color-custom').click() // klik tombol Create
      cy.wait(5000) // menunggu selama 5 detik
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
    })
    
    it('create, edit, search, delete customer & wallet transactions', () => {
      // create customer
      cy.get('.fi-sidebar-group-items > :nth-child(6) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Customers').click() // klik menu Customers
      cy.contains('Customers') // mencari elemen yang berisi teks "Customers"
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New customer
      cy.contains('Create') // mencari elemen yang berisi teks "Create"

      cy.get('input[id="data.email"]').type('customer02@gmail.com') // input Email "customer02@gmail.com"
      cy.get('input[id="data.first_name"]').type('Rani') // input First name "Rani"
      cy.get('input[id="data.last_name"]').type('Septiani') // input Last name "Septiani"
      cy.get('input[id="data.mobile_number"]').type('081234567890') // input Mobile number "081234567890"
      cy.get('input[id="data.postal_code"]').type('54321') // input Postal code "54321"
      cy.get('input[id="data.gender-female"]').click() // pilih Gender "Female"
      cy.get('input[id="data.subscribe_updates_discount-1"]').click() // pilih Subscribe updates discount "Yes"
      cy.get('input[id="data.password"]').type('customer123') // input Password "customer123"
      cy.get('.fi-color-custom').click() // klik tombol Create
      cy.contains('Created', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Created" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
      cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Customers
      cy.contains('Customers') // mencari elemen yang berisi teks "Customers"
      cy.contains('Rani').should('be.visible') // mencari elemen yang berisi teks "Rani" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik

      // edit customer
      cy.get(':nth-child(2) > :nth-child(6) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik View pada First name "Rani"
      cy.contains('Customer') // mencari elemen yang berisi teks "Customer"
      cy.get('input[id="data.first_name"]').clear().type('Rina') // ubah First name dari "Rani" menjadi "Rina"
      cy.get('.fi-ac > .fi-color-custom').click() // klik tombol Save changes
      cy.contains('Saved', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Saved" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
      cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Customers
      cy.contains('Customers') // mencari elemen yang berisi teks "Customers"
      cy.contains('Rina').should('be.visible') // mencari elemen yang berisi teks "Rina" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik

      // list wallet transactions
      cy.get(':nth-child(2) > :nth-child(6) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik View pada First name "Rina"
      cy.contains('Customer') // mencari elemen yang berisi teks "Customer"
      cy.scrollTo(0, 1200) // scroll ke bawah sebanyak 1200px
      cy.contains('No customer wallet transactions', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "No customer wallet transactions" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik

      // adjust wallet berdasarkan default
      cy.get('.fi-ta-actions > .fi-btn').click() // klik tombol Adjust Wallet
      cy.contains('Amount', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Amount" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Submit
      cy.wait(5000) // menunggu selama 5 detik
      cy.contains('Amount').should('be.visible') // mencari elemen yang berisi teks "Amount"
      cy.wait(5000) // menunggu selama 5 detik

      // adjust wallet
      cy.get('input[id="mountedTableActionsData.0.amount"]').type('100') // input Amount "100"
      cy.get('select[id="mountedTableActionsData.0.action"]').select("Add") // pilih Action "Add"
      cy.get('input[id="mountedTableActionsData.0.reason"]').type('Top up') // input Reason "Top up"
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Submit
      cy.contains('Created', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Created" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
      cy.contains('Top up').should('be.visible') // mencari elemen yang berisi teks "Top up" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik

      // delete wallet transaction
      cy.get('.fi-ta-row > .w-1 > .px-3 > .flex > .fi-checkbox-input').click() // klik checkbox
      cy.get('.fi-dropdown-trigger > .fi-btn').click() // klik tombol Bulk actions
      cy.get('.fi-dropdown-list > .fi-dropdown-list-item').click() // klik tombol Delete selected
      cy.contains('Are you sure you would like to do this?', { timeout: 30000 }) // mencari elemen yang berisi teks "Are you sure you would like to do this?" 
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
      cy.contains('Deleted', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Deleted" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
      cy.contains('Top up').should('not.exist') // memastikan tidak ada elemen yang mengandung teks "Top up"
      cy.wait(5000) // menunggu selama 5 detik
      cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Customers
      cy.contains('Customers') // mencari elemen yang berisi teks "Customers"
      cy.wait(5000) // menunggu selama 5 detik

      // cari customer berdasarkan apa yang admin input1
      cy.get('input[id="input-1"]').type('rina') // input "rina" pada menu pencarian
      cy.contains('rina', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "rina" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik

      // cari customer berdasarkan apa yang admin input2
      cy.get('input[id="input-1"]').clear().type('abc') // input "abc" pada menu pencarian
      cy.contains('No customers', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "No customers" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('input[id="input-1"]').clear() // menghapus inputan
      cy.wait(10000) // menunggu selama 10 detik

      // delete customer
      cy.get('input[value="2"]').click() // pilih checkbox pada customer ke-2
      cy.get('.fi-dropdown-trigger > .fi-btn').click() // klik tombol Bulk actions
      cy.get('.fi-dropdown-list > .fi-dropdown-list-item').click() // klik tombol Delete selected
      cy.contains('Are you sure you would like to do this?', { timeout: 30000 }) // mencari elemen yang berisi teks "Are you sure you would like to do this?" 
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
      cy.contains('Deleted', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Deleted" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
      cy.contains('rina').should('not.exist') // memastikan tidak ada elemen yang mengandung teks "rina"
    })
})