describe('dashboard admin', () => {
it('dashboard', () => {
    cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
    cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
    cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
    cy.get('input[type=password]').type('admin123') // input password "admin123"
    cy.get('.fi-btn').click() // klik tombol Sign in
    cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
    cy.get('.fi-active > .fi-sidebar-item-button > .fi-sidebar-item-label').click() // klik menu Dashboard
    cy.contains('Dashboard') // mencari elemen yang berisi teks "Dashboard"
    })
})