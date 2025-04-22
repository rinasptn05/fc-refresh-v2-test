describe('setup holidays', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list holidays', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Setup Holidays').click() // klik menu Setup Holidays
        cy.contains('Holidays') // mencari elemen yang berisi teks "Holidays"
        cy.contains('No holidays').should('be.visible') // mencari elemen yang berisi teks "No holidays" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create holiday berdasarkan default', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Setup Holidays').click() // klik menu Setup Holidays
        cy.contains('Holidays') // mencari elemen yang berisi teks "Holidays"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New holiday
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, edit, search, delete holiday', () => {
        // create holiday
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Setup Holidays').click() // klik menu Setup Holidays
        cy.contains('Holidays') // mencari elemen yang berisi teks "Holidays"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New holiday
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.holiday_desc"]').type('Labour Day') // input Description "Labour Day"
        cy.get('input[id="data.holiday_date"]').type('2025-05-01') // input Date "2025-05-01"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(10000) // menunggu selama 10 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Holidays
        cy.contains('Holidays') // mencari elemen yang berisi teks "Holidays"
        cy.contains('Labour Day').should('be.visible') // mencari elemen yang berisi teks "Labour Day" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // edit holiday
        cy.get('.fi-ta-actions > .fi-link').click() // klik Edit pada Description "Labour Day"
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.holiday_desc"]').clear().type('Hari Buruh') // ubah Description dari "Labour Day" menjadi "Hari Buruh"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(10000) // menunggu selama 10 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Holidays
        cy.contains('Holidays') // mencari elemen yang berisi teks "Holidays"
        cy.contains('Hari Buruh').should('be.visible') // mencari elemen yang berisi teks "Hari Buruh" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // cari holiday pada Description berdasarkan apa yang admin input1
        cy.get('input[id="input-2"]').type('abc') // input Search "abc"
        cy.wait(15000) // menunggu selama 15 detik
        cy.contains('No holidays').should('be.visible') // mencari elemen yang berisi teks "No holidays" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // cari holiday pada Description berdasarkan apa yang admin input2
        cy.get('.fi-badge-delete-button').click() // klik tombol Delete pada filter Description
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('input[id="input-4"]').type('buruh') // input Search "buruh"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Buruh').should('be.visible') // mencari elemen yang berisi teks "Buruh" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // cari holiday pada Date berdasarkan apa yang admin input1
        cy.get('.fi-badge-delete-button').click() // klik tombol Delete pada filter Description
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('input[id="input-5"]').type('03') // input Search "03"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('No holidays').should('be.visible') // mencari elemen yang berisi teks "No holidays" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
        
        // cari holiday pada Date berdasarkan apa yang admin input2
        cy.get('.fi-badge-delete-button').click() // klik tombol Delete pada filter Date
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('input[id="input-7"]').type('01') // input Search "01"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('01').should('be.visible') // mencari elemen yang berisi teks "01" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // cari holiday pada Description dan Date berdasarkan apa yang admin input1
        cy.get('.fi-badge-delete-button').click() // klik tombol Delete pada filter Date
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('input[id="input-6"]').type('buruh') // input Search "buruh"
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('input[id="input-7"]').type('03') // input Search "03"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('No holidays').should('be.visible') // mencari elemen yang berisi teks "No holidays" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // cari holiday pada Description dan Date berdasarkan apa yang admin input2
        cy.get(':nth-child(1) > .fi-badge-delete-button').click() // klik tombol Delete pada filter Description
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-badge-delete-button').click() // klik tombol Delete pada filter Date
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('input[id="input-8"]').type('buruh') // input Search "buruh"
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('input[id="input-9"]').type('01') // input Search "01"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Hari Buruh').should('be.visible') // mencari elemen yang berisi teks "Hari Buruh" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // cari holiday berdasarkan apa yang admin input1
        cy.get(':nth-child(1) > .fi-badge-delete-button').click() // klik tombol Delete pada filter Description
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-badge-delete-button').click() // klik tombol Delete pada filter Date
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('input[id="input-1"]').type('abc') // input Search "abc"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('No holidays').should('be.visible') // mencari elemen yang berisi teks "No holidays" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // cari holiday berdasarkan apa yang admin input2
        cy.get('input[id="input-1"]').clear().type('buruh') // input Search "buruh"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Buruh').should('be.visible') // mencari elemen yang berisi teks "Buruh" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // delete holiday
        cy.get('input[value="1"]').click() // klik checkbox pada Description "Hari Buruh"
        cy.get('.fi-dropdown-trigger > .fi-btn').click() // klik tombol Bulk actions
        cy.get('.fi-dropdown-list > .fi-dropdown-list-item').click() // klik tombol Delete selected
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('Delete') // mencari elemen yang berisi teks "Delete"
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Hari Buruh').should('not.exist') // memastikan tidak ada elemen yang mengandung teks "Hari Buruh"
        cy.wait(5000) // menunggu selama 5 detik
    })
})