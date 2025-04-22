describe('wallet transactions', () => {
    it('create customer wallet transaction - add (top up wallet)', () => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul

        cy.get('.fi-sidebar-group-items > :nth-child(4) > .fi-sidebar-item-button' , { timeout: 10000 }).contains('Customer Wallet Transactions').click() // klik menu Customer Wallet Transactions
        cy.contains('Wallet') // mencari elemen yang berisi teks "Wallet"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New customer wallet transaction
        cy.contains('Create') // mencari elemen yang berisi teks "Create"
        cy.get('input[id="data.email"]').type('customer@gmail.com') // input Customer Email "customer@gmail.com"
        cy.get('select[id="data.action"]').select('Add') // pilih Action "Add"
        cy.get('input[id="data.amount"]').type('100') // input Amount "100"
        cy.get('input[id="data.reason"]').type('Top up') // input Reason "Top up"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(10000) // menunggu selama 10 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Customer Wallet Transactions
        cy.contains('Wallet') // mencari elemen yang berisi teks "Wallet"
        cy.wait(5000) // menunggu selama 5 detik
              
        cy.get('div[class="choices__inner"]').click() // klik menu dropdown pada Customer Email
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('div[id="choices--tableFilterscustomercustomer-item-choice-1"]').click() // pilih Customer Email "customer@gmail.com"
        cy.contains('Top up', { timeout: 20000 }).should('be.visible') // mencari elemen yang berisi teks "Top up" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('wallet di dashboard (bertambah)', () => {
        cy.visit('http://127.0.0.1:8000/') // mengunjungi web home flying cape
        cy.get('.space-x-4 > .gap-5 > :nth-child(3)').click() // klik tombol Log In
        cy.get('[x-show="login"] > :nth-child(1) > .fixed > .max-w-lg > :nth-child(1) > :nth-child(2) > .p-4 > .space-y-6 > :nth-child(1) > #floating_email').type('customer@gmail.com') // input Email "customer@gmail.com"
        cy.get(':nth-child(2) > #floating_email').type('customer123') // input Password "customer123"
        cy.get('button[class="w-full disabled:bg-abu disabled:hover:cursor-not-allowed disabled:text-black text-white bg-danger hover:bg-semi-danger focus:ring-4 focus:outline-none focus:ring-danger font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-danger dark:hover:bg-danger dark:focus:ring-danger transition duration-500"]').contains('Log In').click() // klik tombol Log In
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Dashboard').should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.px-16').contains('100100') // memastikan wallet di dashboard ada "100100" (bertambah)
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create customer wallet transaction - substract (beli produk)', () => {
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul

        cy.get('.fi-sidebar-group-items > :nth-child(4) > .fi-sidebar-item-button' , { timeout: 10000 }).contains('Customer Wallet Transactions').click() // klik menu Customer Wallet Transactions
        cy.contains('Wallet') // mencari elemen yang berisi teks "Wallet"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New customer wallet transaction
        cy.contains('Create') // mencari elemen yang berisi teks "Create"
        cy.get('input[id="data.email"]').type('customer@gmail.com') // input Customer Email "customer@gmail.com"
        cy.get('select[id="data.action"]').select('Substract') // pilih Action "substract"
        cy.get('input[id="data.amount"]').type('50') // input Amount "50"
        cy.get('input[id="data.reason"]').type('Beli produk') // input Reason "Beli produk"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(10000) // menunggu selama 10 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Customer Wallet Transactions
        cy.contains('Wallet') // mencari elemen yang berisi teks "Wallet"
        cy.wait(5000) // menunggu selama 5 detik

        cy.get('div[class="choices__inner"]').click() // klik menu dropdown pada Customer Email
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('div[id="choices--tableFilterscustomercustomer-item-choice-1"]').click() // pilih Customer Email "customer@gmail.com"
        cy.contains('Beli produk', { timeout: 20000 }).should('be.visible') // mencari elemen yang berisi teks "Beli produk" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('wallet di dashboard (berkurang)', () => {
        cy.visit('http://127.0.0.1:8000/') // mengunjungi web home flying cape
        cy.get('.space-x-4 > .gap-5 > :nth-child(3)').click() // klik tombol Log In
        cy.get('[x-show="login"] > :nth-child(1) > .fixed > .max-w-lg > :nth-child(1) > :nth-child(2) > .p-4 > .space-y-6 > :nth-child(1) > #floating_email').type('customer@gmail.com') // input Email "customer@gmail.com"
        cy.get(':nth-child(2) > #floating_email').type('customer123') // input Password "customer123"
        cy.get('button[class="w-full disabled:bg-abu disabled:hover:cursor-not-allowed disabled:text-black text-white bg-danger hover:bg-semi-danger focus:ring-4 focus:outline-none focus:ring-danger font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-danger dark:hover:bg-danger dark:focus:ring-danger transition duration-500"]').contains('Log In').click() // klik tombol Log In
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Dashboard').should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.px-16').contains('100050') // memastikan wallet di dashboard ada "100050" (berkurang)
        cy.wait(5000) // menunggu selama 5 detik
    })
})