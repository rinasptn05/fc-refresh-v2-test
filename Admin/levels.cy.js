describe('levels', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list levels', () => {
        cy.get(':nth-child(9) > .fi-sidebar-item-button').click() // klik menu Levels
        cy.contains('Levels') // mencari elemen yang berisi teks "Levels"
        cy.contains('No levels').should('be.visible') // mencari elemen yang berisi teks "No levels" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create level berdasarkan default', () => {
        cy.get(':nth-child(9) > .fi-sidebar-item-button').click() // klik menu Levels
        cy.contains('Levels') // mencari elemen yang berisi teks "Levels"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New level
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, edit, search, delete level', () => {
        // create level
        cy.get(':nth-child(9) > .fi-sidebar-item-button').click() // klik menu Levels
        cy.contains('Levels') // mencari elemen yang berisi teks "Levels"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New level
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Adult') // input Name "Adult"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.contains('Created', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Created" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Levels
        cy.contains('Levels') // mencari elemen yang berisi teks "Levels"
        cy.contains('Adult').should('be.visible') // mencari elemen yang berisi teks "Adult" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // edit level
        cy.get('a.fi-link').click() // klik Edit pada Name "Adult"
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').clear().type('Primary') // ubah Name dari "Adult" menjadi "Primary"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.contains('Saved', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Saved" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Levels
        cy.contains('Levels') // mencari elemen yang berisi teks "Levels"
        cy.contains('Primary').should('be.visible') // mencari elemen yang berisi teks "Primary" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // cari level berdasarkan apa yang admin input1
        cy.get('input[id="input-1"]').type('abc') // input Search "abc"
        cy.contains('No levels', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "No levels" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // cari level berdasarkan apa yang admin input2
        cy.get('input[id="input-1"]').clear().type('primary') // input Search "primary"
        cy.contains('Primary', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Primary" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // delete level
        cy.get('.fi-ta-actions > button.fi-link').click() // klik Delete pada Name "Primary"
        cy.contains('Are you sure you would like to do this?', { timeout: 30000 }) // mencari elemen yang berisi teks "Are you sure you would like to do this?" 
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.contains('Deleted', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Deleted" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.contains('Primary', { timeout: 30000 }).should('not.exist') // memastikan tidak ada elemen yang mengandung teks "Primary"
    })
})