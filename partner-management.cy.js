describe('partner management', () => {
    beforeEach(() => {
      cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API-master/FlyingCape-Refreshv2-API-master && php artisan testseed')
      cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 10.000 milidetik (10 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('daftar partners', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Partner Management').click() // klik menu Partner Management
        cy.contains('Code').should('be.visible') // mencari elemen yang berisi teks "Code" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('tidak ingin create partner', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Partner Management').click() // klik menu Partner Management
      cy.contains('Code').should('be.visible') // mencari elemen yang berisi teks "Code" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New partner
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-color-custom').click() // klik tombol Create
      cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, edit, delete partner', () => {
      // create partner
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Partner Management').click() // klik menu Partner Management
        cy.contains('Code').should('be.visible') // mencari elemen yang berisi teks "Code" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New partner
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna

        cy.get('input[id="data.name"]').type('PT Abadi') // isi Name "PT Abadi"
        cy.get('input[id="data.allow_eduhunt-0"]').check() // pilih Allow eduhunt "No"
        cy.get('input[id="data.special_need-0"]').check() // pilih Does your company support Special Needs ? "No"
        cy.get('input[id="data.all_in_partner-0"]').check() // pilih Is your company an All In partner ? "No"
        cy.get('input[id="data.search_result_page-0"]').check() // pilih Enabled "No"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik tombol Partners
        cy.wait(5000) // menunggu selama 5 detik

        // edit partner
        cy.get(':nth-child(2) > :nth-child(4) > .whitespace-nowrap').click() // klik tombol Edit pada Name PT Abadi
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.allow_eduhunt-1"]').check() // ubah Allow eduhunt dari "No" ke "Yes"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(5000) // menunggu selama 5 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik tombol Partners
        cy.wait(5000) // menunggu selama 5 detik

        // delete partner
        cy.get(':nth-child(2) > :nth-child(4) > .whitespace-nowrap').click() // klik tombol Edit pada Name PT Abadi
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('Delete').should('be.visible') // mencari elemen yang berisi teks "Delete" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-modal-footer-actions > .fi-color-custom', { timeout: 10000 }).click() // klik tombol Confirm
        cy.wait(5000) // menunggu selama 5 detik
      })
})