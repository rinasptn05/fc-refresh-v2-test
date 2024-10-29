describe('class master sub categories', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 20000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 20.000 milidetik (20 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list class master sub categories', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(5) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Class Master Sub Categories').click() // klik menu Class Master Sub Categories
        cy.contains('Sub Categories') // mencari elemen yang berisi teks "Sub Categories"
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('tidak ingin create class master sub category', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(5) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Class Master Sub Categories').click() // klik menu Class Master Sub Categories
        cy.contains('Sub Categories') // mencari elemen yang berisi teks "Sub Categories"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master sub category
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, edit, delete class master sub category', () => {
        // create class master sub category
        cy.get('.fi-sidebar-group-items > :nth-child(5) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Class Master Sub Categories').click() // klik menu Class Master Sub Categories
        cy.contains('Sub Categories') // mencari elemen yang berisi teks "Sub Categories"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master sub category
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('select[id="data.main_category_id"]').select('Social Skills') // pilih Main Category "Social Skills"
        cy.get('input[id="data.name"]').type('STEAM 2') // input Name "STEAM 2"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(10000) // menunggu selama 10 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik tombol Class Master Sub Categories
        cy.contains('Sub Categories') // mencari elemen yang berisi teks "Sub Categories"
        cy.wait(5000) // menunggu selama 5 detik

        // edit class master sub category
        cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('All') // pilih Per page "All"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('STEAM 2') // mencari elemen yang berisi teks "STEAM 2"
        cy.get(':nth-child(44) > :nth-child(4) > .whitespace-nowrap > .fi-ta-actions > a.fi-link > .fi-link-icon').click() // klik tombol Edit pada Sub Category Name "STEAM 2"
        cy.contains('Edit') // mencari elemen yang berisi teks "Edit"
        cy.get('input[id="data.name"]').clear().type('STEAM 3') // ubah Name dari "STEAM 2" menjadi "STEAM 3"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save Changes
        cy.wait(5000) // menunggu selama 5 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik tombol Class Master Sub Categories
        cy.contains('Sub Categories') // mencari elemen yang berisi teks "Sub Categories"
        cy.wait(5000) // menunggu selama 5 detik

        // delete class master sub category
        cy.contains('STEAM 3') // mencari elemen yang berisi teks "STEAM 3"
        cy.get(':nth-child(44) > :nth-child(4) > .whitespace-nowrap > .fi-ta-actions > button.fi-link > [viewBox="0 0 20 20"]').click() // klik tombol Un Assign pada Sub Category Name "STEAM 3"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Delete') // mencari elemen yang berisi teks "Delete"
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.wait(5000) // menunggu selama 5 detik
    })
})