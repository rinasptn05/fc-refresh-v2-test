describe('lihat saldo e-wallet', () => {
    it('lihat saldo e-wallet', () => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/') // mengunjungi web home flying cape
        cy.contains('Home').should('be.visible') // mencari elemen yang berisi teks "Home" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna

        cy.get('.space-x-4 > .gap-5 > :nth-child(3)').click() // klik tombol Log In
        cy.get('[x-show="login"] > :nth-child(1) > .fixed > .max-w-lg > :nth-child(1) > :nth-child(2) > .p-4 > .space-y-6 > :nth-child(1) > #floating_email').type('customer@gmail.com') // input Email "customer@gmail.com"
        cy.get(':nth-child(2) > #floating_email').type('customer123') // input Password "customer123"
        cy.get('button[class="w-full disabled:bg-abu disabled:hover:cursor-not-allowed disabled:text-black text-white bg-danger hover:bg-semi-danger focus:ring-4 focus:outline-none focus:ring-danger font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-danger dark:hover:bg-danger dark:focus:ring-danger transition duration-500"]').contains('Log In').click() // klik tombol Log In
        cy.contains('Dashboard', { timeout: 20000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.px-16').contains('100000').should('be.visible') // memastikan wallet di dashboard ada "100000"
        cy.wait(5000) // menunggu selama 5 detik
      })
})