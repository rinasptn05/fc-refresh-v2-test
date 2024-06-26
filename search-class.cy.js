describe('search class flying cape', () => {
    it('search class1', () => {
      cy.visit('http://127.0.0.1:8000/') // mengunjungi web home page
      cy.contains('Home').should('be.visible') // mencari elemen yang berisi teks "Home" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('input[id="default-search"]').type('soccer') // input "soccer" pada search menu
      cy.get('.flex-grow > .relative > .text-white').click() // klik tombol Search
      cy.wait(5000) // menunggu selama 5 detik
    })

    it('search class2', () => {
      cy.visit('http://127.0.0.1:8000/') // mengunjungi web home page
      cy.contains('Home').should('be.visible') // mencari elemen yang berisi teks "Home" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('input[id="default-search"]').type('html') // input "html" pada search menu
      cy.get('.flex-grow > .relative > .text-white').click() // klik tombol Search
      cy.wait(5000) // menunggu selama 5 detik
      })
})