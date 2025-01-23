describe('years', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 20000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 20.000 milidetik (20 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list years', () => {
        cy.get(':nth-child(19) > .fi-sidebar-item-button').click() // klik menu Years
        cy.contains('Years') // mencari elemen yang berisi teks "Years"
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('tidak ingin create year', () => {
        cy.get(':nth-child(19) > .fi-sidebar-item-button').click() // klik menu Years
        cy.contains('Years') // mencari elemen yang berisi teks "Years"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New year
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, edit, delete, search year', () => {
        // harus create level terlebih dahulu agar bisa memilih Level id
        // create level
        cy.get(':nth-child(9) > .fi-sidebar-item-button').click() // klik menu Levels
        cy.contains('Levels') // mencari elemen yang berisi teks "Levels"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New level
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Primary') // input Name "Primary"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Levels
        cy.contains('Levels') // mencari elemen yang berisi teks "Levels"
        cy.wait(5000) // menunggu selama 5 detik

        // create year
        cy.get('.fi-topbar-open-sidebar-btn').click() // klik icon tiga garis
        cy.get(':nth-child(19) > .fi-sidebar-item-button').click() // klik menu Years
        cy.contains('Years') // mencari elemen yang berisi teks "Years"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New year
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Seniors') // input Name "Seniors"
        cy.get('input[id="data.minAge"]').type('10') // input Min age "10"
        cy.get('input[id="data.maxAge"]').type('15') // input Max age "15"
        cy.get('select[id="data.level_id"]').select('Primary') // pilih Level id "Primary"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Years
        cy.contains('Years') // mencari elemen yang berisi teks "Years"
        cy.wait(5000) // menunggu selama 5 detik

        // edit year
        cy.get('a.fi-link').click() // klik tombol Edit pada Name Seniors
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.maxAge"]').clear().type('17') // ubah Max age dari "15" menjadi "17"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(5000) // menunggu selama 5 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Years
        cy.contains('Years') // mencari elemen yang berisi teks "Years"
        cy.wait(5000) // menunggu selama 5 detik

        // cari year berdasarkan apa yang admin input1
        cy.get('input[id="input-1"]').type('abc') // input Search "abc"
        cy.wait(10000) // menunggu selama 10 detik

        // cari year berdasarkan apa yang admin input2
        cy.get('input[id="input-1"]').clear().type('seniors') // input Search "seniors"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Seniors').should('be.visible') // mencari elemen yang berisi teks "Seniors" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // delete year
        cy.get('.fi-ta-actions > button.fi-link').click() // klik tombol Delete pada Name Seniors
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Delete') // mencari elemen yang berisi teks "Delete" 
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.wait(5000) // menunggu selama 5 detik
    })
})