describe('sign up flying cape', () => {
    beforeEach(() => {
      cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API-master/FlyingCape-Refreshv2-API && php artisan testseed')
      cy.visit('http://127.0.0.1:8000/') // mengunjungi web home flying cape
      cy.contains('Home').should('be.visible') // mencari elemen yang berisi teks "Home" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    })

    it('sign up berhasil', () => {
      cy.get('button[data-modal-target="authentication-modal-signup"]').click() // klik tombol Sign Up
      cy.get('#authentication-modal-signup > .max-w-lg > .shadow > :nth-child(2) > .space-y-6 > .mb-5 > #floating_email').type('rinaseptiani@gmail.com') // input Email "rinaseptiani@gmail.com"
      cy.get('#first_name').type('Rina') // input First Name "Rina"
      cy.get('#last_name').type('Septiani') // input Last Name "Septiani"
      cy.get('#password').type('123Rina_') // input Password "123Rina_"
      cy.get('#confirm_password').type('123Rina_') // input Confirm Password "123Rina"
      cy.get('#mobile_number').type('085712345678') // input Mobile Number "085712345678"
      cy.get('#postal_code').type('46642') // input Postal Code "46642"
      cy.get('#inline-2-radio').click() // pilih Gender "Female"
      cy.get('#exclusive').click() // klik Send me exclusive updates and discounts! (optional)
      cy.get('#agree').click() // klik I have read and agree to the Terms of Use and Privacy Policy
      cy.get('button[class="w-full disabled:bg-abu disabled:hover:cursor-not-allowed disabled:text-black text-white bg-danger hover:bg-semi-danger focus:ring-4 focus:outline-none focus:ring-danger font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-danger dark:hover:bg-danger dark:focus:ring-danger transition duration-500"]').click() // klik tombol Sign Up
      cy.wait(5000) // menunggu selama 5 detik
    })

    it('sign up gagal', () => {
      cy.get('button[data-modal-target="authentication-modal-signup"]').click() // klik tombol Sign Up
      cy.get('#authentication-modal-signup > .max-w-lg > .shadow > :nth-child(2) > .space-y-6 > .mb-5 > #floating_email').type('rinaseptiani@gmail.com') // input Email "rinaseptiani@gmail.com"
      cy.get('#first_name').type('Rina') // input First Name "Rina"
      cy.get('#last_name').type('Septiani') // input Last Name "Septiani"
      cy.get('#password').type('123Rina_') // input Password "123Rina_"
      cy.get('#confirm_password').type('123rina_') // input Confirm Password "123rina"
      cy.get('#mobile_number').type('085712345678') // input Mobile Number "085712345678"
      cy.get('#postal_code').type('46642') // input Postal Code "46642"
      cy.get('#inline-2-radio').click() // pilih Gender "Female"
      cy.get('#exclusive').click() // klik Send me exclusive updates and discounts! (optional)
      cy.get('#agree').click() // klik I have read and agree to the Terms of Use and Privacy Policy
      cy.get('button[class="w-full disabled:bg-abu disabled:hover:cursor-not-allowed disabled:text-black text-white bg-danger hover:bg-semi-danger focus:ring-4 focus:outline-none focus:ring-danger font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-danger dark:hover:bg-danger dark:focus:ring-danger transition duration-500"]').click({force: true}) // klik tombol Sign Up
      cy.wait(5000) // menunggu selama 5 detik
    })
})