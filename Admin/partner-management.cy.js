describe('partner management', () => {
    beforeEach(() => {
      cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
      cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list partners', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Partner Management').click() // klik menu Partner Management
        cy.contains('Code') // mencari elemen yang berisi teks "Code"
        cy.contains('FCP01').should('be.visible') // mencari elemen yang berisi teks "FCP01" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create partner berdasarkan default', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Partner Management').click() // klik menu Partner Management
      cy.contains('Code') // mencari elemen yang berisi teks "Code"
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New partner
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-color-custom').click() // klik tombol Create
      cy.wait(5000) // menunggu selama 5 detik
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, edit, delete partner', () => {
      // create partner
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Partner Management').click() // klik menu Partner Management
        cy.contains('Code') // mencari elemen yang berisi teks "Code"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New partner
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna

        cy.get('input[id="data.name"]').type('PT Abadi') // input Name "PT Abadi"
        cy.get('input[id="data.allow_eduhunt-0"]').check() // pilih Allow eduhunt "No"
        cy.get('input[id="data.special_need-0"]').check() // pilih Does your company support Special Needs ? "No"
        cy.get('input[id="data.all_in_partner-0"]').check() // pilih Is your company an All In partner ? "No"
        cy.get('input[id="data.search_result_page-0"]').check() // pilih Enabled "No"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.contains('Created', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Created" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Partners
        cy.contains('Code') // mencari elemen yang berisi teks "Code"
        cy.contains('PT Abadi').should('be.visible') // mencari elemen yang berisi teks "PT Abadi" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // edit partner
        cy.get(':nth-child(2) > :nth-child(4) > .whitespace-nowrap').click() // klik Edit pada Name "PT Abadi"
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.allow_eduhunt-1"]').check() // ubah Allow eduhunt dari "No" menjadi "Yes"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.contains('Saved', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Saved" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Partners
        cy.contains('Code') // mencari elemen yang berisi teks "Code"
        cy.wait(5000) // menunggu selama 5 detik

        // delete partner
        cy.get(':nth-child(2) > :nth-child(4) > .whitespace-nowrap').click() // klik Edit pada Name "PT Abadi"
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.contains('Are you sure you would like to do this?', { timeout: 30000 }) // mencari elemen yang berisi teks "Are you sure you would like to do this?"
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.contains('Deleted', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Deleted" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.contains('PT Abadi').should('not.exist') // memastikan tidak ada elemen yang mengandung teks "PT Abadi"
      })
})