describe('dashboard admin', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API-master/FlyingCape-Refreshv2-API-master && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 10.000 milidetik (10 detik) agar elemen dengan teks 'Dashboard' muncul
      })

    it('documentation', () => {
        cy.get('.fi-active > .fi-sidebar-item-button > .fi-sidebar-item-label').click() // klik menu Dashboard
        cy.get('[href="https://filamentphp.com/docs"]').click() // klik tombol Documentation
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('github', () => {
        cy.get('.fi-active > .fi-sidebar-item-button > .fi-sidebar-item-label').click() // klik menu Dashboard
        cy.get('[href="https://github.com/filamentphp/filament"]').click() // klik tombol GitHub
        cy.wait(5000) // menunggu selama 5 detik
    })
})