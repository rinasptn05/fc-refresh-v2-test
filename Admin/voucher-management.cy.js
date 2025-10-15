describe('voucher management', () => {
    beforeEach(() => {
      cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
      cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list vouchers', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Voucher Management').click() // klik menu Voucher Management
        cy.contains('Vouchers').should('be.visible') // mencari elemen yang berisi teks "Vouchers" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.contains('No vouchers').should('be.visible') // mencari elemen yang berisi teks "No vouchers" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
      })

    it('create voucher berdasarkan default', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Voucher Management').click() // klik menu Voucher Management
        cy.contains('Vouchers').should('be.visible') // mencari elemen yang berisi teks "Vouchers" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New voucher
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
      })

    it('create, edit, delete voucher', () => {
      // create voucher
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Voucher Management').click() // klik menu Voucher Management
        cy.contains('Vouchers').should('be.visible') // mencari elemen yang berisi teks "Vouchers" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New voucher
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        
        cy.get('input[id="data.code"]').type('RNSPT') // input Voucher Code "RNSPT"
        cy.get('textarea[id="data.description"]').type('50% Voucher') // input Description "50% Voucher"
        cy.get('select[id="data.type"]').select('Percentage') // pilih Voucher Type "Percentage"
        cy.get('input[id="data.amount"]').type('50') // input Amount "50"
        cy.get('input[id="data.min_amount"]').type('5') // input Minimum Purchase Amount "5"
        cy.get('input[id="data.start_date"]').type('2025-12-20') // input Start Date "2025-12-20"
        cy.get('input[id="data.expiration_date"]').type('2025-12-21') // input Expiration Date "2025-12-21"
        cy.get('button[id="data.is_active"]').click() // aktifkan Is Active
        cy.get('input[id="data.limit_button-1"]').click() // pilih Maximum Voucher "Yes"
        cy.get('input[id="data.usage_limit"]').type('5', {force: true}) // input User Limit "5"
        cy.get('div[class="choices__inner"]').eq(0).click() // klik pada Select Partner
        cy.contains('PT Kunci', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "PT Kunci" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.get('div[id="choices--datapartner_id-item-choice-1"]').click() // pilih Assign To Partner "PT Kunci"
        cy.get('div[class="choices__inner"]').eq(1).click() // klik pada Select User
        cy.contains('partner', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "partner" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.get('div[id="choices--datauser_id-item-choice-2"]').click() // pilih Assign To User "partner"
        cy.get('div[class="choices__inner"]').eq(2).click() // klik pada Select User
        cy.contains('Promotion', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Promotion" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.get('div[id="choices--dataclass_master_campaign_tag_id-item-choice-1"]').click() // pilih Assign To Tag "Promotion"
        cy.get('.fi-ac > .fi-color-custom').click() // klik tombol Create
        cy.contains('Created', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Created" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik

        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Vouchers
        cy.contains('Vouchers') // mencari elemen yang berisi teks "Vouchers"
        cy.contains('RNSPT').should('be.visible') // mencari elemen yang berisi teks "RNSPT" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // edit voucher
        cy.get('a.fi-link').click() // klik Edit pada Code "RNSPT"
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.code"]').clear().type('SPTN') // ubah Voucher Code dari "RNSPT" menjadi "SPTN"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.contains('Saved', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Saved" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Vouchers
        cy.contains('Vouchers') // mencari elemen yang berisi teks "Vouchers"
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('SPTN').should('be.visible') // mencari elemen yang berisi teks "SPTN" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // delete voucher
        cy.get('.fi-ta-actions > button.fi-link').click() // klik Delete pada Code "SPTN"
        cy.contains('Are you sure you would like to do this?', { timeout: 30000 }) // mencari elemen yang berisi teks "Are you sure you would like to do this?" 
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm 
        cy.contains('Deleted', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Deleted" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.contains('SPTN').should('not.exist') // memastikan tidak ada elemen yang mengandung teks "SPTN"
      })
})