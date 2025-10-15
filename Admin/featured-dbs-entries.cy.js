describe('featured dbs entries', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list featured dbs entries', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button', { timeout: 10000}).contains('Featured DBS Entries').click() // klik menu Featured DBS Entries
        cy.contains('Informations') // mencari elemen yang berisi teks "Informations"
        cy.contains('Soccer for kid').should('be.visible') // mencari elemen yang berisi teks "Soccer for kid" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('aktifkan & search featured dbs entry', () => {
        // aktifkan featured dbs entry
        cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button', { timeout: 10000}).contains('Featured DBS Entries').click() // klik menu Featured DBS Entries
        cy.contains('Informations') // mencari elemen yang berisi teks "Informations"
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('div[aria-checked="false"]').eq(0).click() // aktifkan featured pada Entry "Soccer for kid"
        cy.wait(10000) // menunggu selama 10 detik

        // cari dbs entry berdasarkan filter
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.get('input[id="tableFilters.featured.isActive"]').click() // klik checkbox pada Featured DBS
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('Soccer for kid').should('be.visible') // mencari elemen yang berisi teks "Soccer for kid" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-badge-delete-button').click() // klik silang untuk delete featured
        cy.wait(5000) // menunggu selama 5 detik

        // cari dbs entry berdasarkan apa yang admin input1
        cy.get('input[id="input-1"]').type('abc') // input Search "abc"
        cy.contains('No class basic informations', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "No class basic informations" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // cari dbs entry berdasarkan apa yang admin input2
        cy.get('input[id="input-1"]').clear().type('soccer') // input Search "soccer"
        cy.contains('Soccer', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Soccer" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })
})