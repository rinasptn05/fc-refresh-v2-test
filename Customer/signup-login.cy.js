describe('sign up dan login customer', () => {
    it('sign up', () => {
      cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
      cy.visit('http://127.0.0.1:8000/') // mengunjungi web home flying cape
      cy.contains('Home').should('be.visible') // mencari elemen yang berisi teks "Home" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna

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
      cy.contains('Registration successfully', { timeout: 20000 }).should('be.visible') // mencari elemen yang berisi teks "Registration successfully" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    })

    it('login', () => {
        cy.visit('http://127.0.0.1:8000/') // mengunjungi web home flying cape
        cy.contains('Home').should('be.visible') // mencari elemen yang berisi teks "Home" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.space-x-4 > .gap-5 > :nth-child(3)').click() // klik tombol Log In
        cy.get('[x-show="login"] > :nth-child(1) > .fixed > .max-w-lg > :nth-child(1) > :nth-child(2) > .p-4 > .space-y-6 > :nth-child(1) > #floating_email').type('rinaseptiani@gmail.com') // input Email "rinaseptiani@gmail.com"
        cy.get(':nth-child(2) > #floating_email').type('123Rina*') // input Password "123Rina*"
        cy.get('button[class="w-full disabled:bg-abu disabled:hover:cursor-not-allowed disabled:text-black text-white bg-danger hover:bg-semi-danger focus:ring-4 focus:outline-none focus:ring-danger font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-danger dark:hover:bg-danger dark:focus:ring-danger transition duration-500"]').contains('Log In').click() // klik tombol Log In
        cy.contains('Dashboard', { timeout: 20000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })
})