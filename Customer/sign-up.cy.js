describe('sign up customer', () => {
    beforeEach(() => {
      cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
      cy.visit('http://127.0.0.1:8000/') // mengunjungi web home flying cape
      cy.contains('Home').should('be.visible') // mencari elemen yang berisi teks "Home" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    })

    it('sign up gagal', () => {
      cy.get('.space-x-4 > .gap-5 > :nth-child(1)').click() // klik tombol Sign Up
      cy.get('input[id="floating_email"]').eq(0).type('rinaseptiani@gmail.com') // input Email "rinaseptiani@gmail.com"
      cy.get('#first_name').type('Rina') // input First Name "Rina"
      cy.get('#last_name').type('Septiani') // input Last Name "Septiani"
      cy.get('#password').type('123Rina*') // input Password "123Rina*"
      cy.get('#confirm_password').type('123rina*') // input Confirm Password "123rina*"
      cy.get('#mobile_number').type('085712345678') // input Mobile Number "085712345678"
      cy.get('#postal_code').clear().type('123') // input Postal Code "123"
      cy.get('#inline-2-radio').click() // pilih Gender "Female"
      cy.get('#exclusive').click() // klik Send me exclusive updates and discounts! (optional)
      cy.get('#agree').click() // klik I have read and agree to the Terms of Use and Privacy Policy
      cy.get('button[type="submit"]').eq(1).click({force: true}) // klik tombol Sign Up
      cy.wait(5000) // menunggu selama 5 detik
    })

    it('sign up berhasil', () => {
      cy.get('.space-x-4 > .gap-5 > :nth-child(1)').click() // klik tombol Sign Up
      cy.get('input[id="floating_email"]').eq(0).type('rinaseptiani@gmail.com') // input Email "rinaseptiani@gmail.com"
      cy.get('#first_name').type('Rina') // input First Name "Rina"
      cy.get('#last_name').type('Septiani') // input Last Name "Septiani"
      cy.get('#password').type('123Rina*') // input Password "123Rina*"
      cy.get('#confirm_password').type('123Rina*') // input Confirm Password "123Rina*"
      cy.get('#mobile_number').type('085712345678') // input Mobile Number "085712345678"
      cy.get('#postal_code').clear().type('123') // input Postal Code "123"
      cy.get('#inline-2-radio').click() // pilih Gender "Female"
      cy.get('#exclusive').click() // klik Send me exclusive updates and discounts! (optional)
      cy.get('#agree').click() // klik I have read and agree to the Terms of Use and Privacy Policy
      cy.wait(1000) // menunggu selama 1 detik
      cy.get('button[type="submit"]').eq(1).click({force: true}) // klik tombol Sign Up
      cy.wait(20000) // menunggu selama 20 detik
      cy.contains('Sign up berhasil').should('be.visible') // mencari elemen yang berisi teks "Sign up berhasil" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    })
})