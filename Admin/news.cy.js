describe('news', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list news', () => {    
        cy.get(':nth-child(13) > .fi-sidebar-item-button').click() // klik menu News
        cy.contains('News') // mencari elemen yang berisi teks "News"
        cy.contains('No news').should('be.visible') // mencari elemen yang berisi teks "No news" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create news berdasarkan default', () => {
        cy.get(':nth-child(13) > .fi-sidebar-item-button').click() // klik menu News
        cy.contains('News') // mencari elemen yang berisi teks "News"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New news
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, edit, delete news', () => {
        // create news
        cy.get(':nth-child(13) > .fi-sidebar-item-button').click() // klik menu News
        cy.contains('News') // mencari elemen yang berisi teks "News"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New news
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(10000) // menunggu selama 10 detik

        const filePath = 'news.jpg' // path relatif dari file di dalam folder fixtures
        cy.get('input[type="file"]').attachFile(filePath) // pilih input file / klik Browse dan lampirkan file
        cy.wait(30000) // menunggu selama 30 detik

        cy.get('input[id="data.title"]').type('Hello World') // input Title "Hello World"
        cy.get('input[id="data.date"]').type('2025-12-20') // input Date "2025-12-20"
        cy.get('trix-editor[id="data.description"]').type('Test') // input Description "Test"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(10000) // menunggu selama 10 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik News
        cy.contains('News') // mencari elemen yang berisi teks "News"
        cy.contains('Hello World').should('be.visible') // mencari elemen yang berisi teks "Hello World" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // edit news
        cy.get('a.fi-link').click() // klik Edit pada Title "Hello World"
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('input[id="data.title"]').clear().type('Hello World Test') // ubah Title dari "Hello World" menjadi "Hello World Test"
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(10000) // menunggu selama 10 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik News
        cy.contains('News') // mencari elemen yang berisi teks "News"
        cy.contains('Hello World Test').should('be.visible') // mencari elemen yang berisi teks "Hello World Test" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // delete news
        cy.get('.fi-ta-actions > button.fi-link').click() // klik Delete pada Title "Hello World Test"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Delete') // mencari elemen yang berisi teks "Delete"
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm 
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Hello World Test').should('not.exist') // memastikan tidak ada elemen yang mengandung teks "Hello World Test"
        cy.wait(5000) // menunggu selama 5 detik
    })
})