describe('login admin', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
    })

    it('login gagal', () => {
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin124') // input password "admin124"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.wait(10000) // menunggu selama 10 detik
        cy.url().should('contain', '/login') // assert harus masih di halaman login
        cy.wait(5000) // menunggu selama 5 detik
      })

      it('login berhasil', () => {
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 20000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 20.000 milidetik (20 detik) agar elemen dengan teks 'Dashboard' muncul
        cy.get('.fi-sidebar-close-overlay').click()
        cy.wait(5000) // menunggu selama 5 detik
    })
})