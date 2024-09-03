describe('search class flying cape', () => {
    beforeEach(() => {
      cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API-master/FlyingCape-Refreshv2-API-master && php artisan testseed')
      cy.visit('http://127.0.0.1:8000/') // mengunjungi web home flying cape
      cy.contains('Home').should('be.visible') // mencari elemen yang berisi teks "Home" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    })

    it('search class1', () => {
      cy.get('input[id="default-search"]').type('soccer') // input "soccer" pada search menu
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('button[class="text-white absolute right-2 bg-danger font-bold hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-danger dark:focus:ring-blue-800"]').click() // klik tombol Search
      cy.wait(20000) // menunggu selama 20 detik
      cy.contains('soccer').should('be.visible') // mencari elemen yang berisi teks "soccer" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
    })

    it('search class2', () => {
      cy.get('input[id="default-search"]').type('abcd') // input "abcd" pada search menu
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('button[class="text-white absolute right-2 bg-danger font-bold hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-danger dark:focus:ring-blue-800"]').click() // klik tombol Search
      cy.wait(20000) // menunggu selama 20 detik
    })
})