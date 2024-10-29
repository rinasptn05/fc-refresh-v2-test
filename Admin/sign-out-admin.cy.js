describe('sign out admin', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 20000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 20.000 milidetik (20 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    // it('sign out1', () => {
    //     cy.get('.fi-active > .fi-sidebar-item-button').click() // klik menu Dashboard
    //     cy.contains('Dashboard') // mencari elemen yang berisi teks "Dashboard"
    //     cy.get('.fi-btn').click() // klik tombol Sign out
    //     cy.contains('Sign in').should('be.visible') // mencari elemen yang berisi teks "Sign in" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    //     cy.wait(5000) // menunggu selama 5 detik
    // })

    it('sign out2', () => {
        cy.get('.fi-active > .fi-sidebar-item-button').click() // klik menu Dashboard
        cy.contains('Dashboard') // mencari elemen yang berisi teks "Dashboard"
        cy.get('.shrink-0 > .fi-avatar').click() // klik tombol admin
        cy.contains('admin').should('be.visible') // mencari elemen yang berisi teks "admin" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-dropdown-list-item').click() // klik tombol Sign out
        cy.contains('Sign in').should('be.visible') // mencari elemen yang berisi teks "Sign in" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })
})