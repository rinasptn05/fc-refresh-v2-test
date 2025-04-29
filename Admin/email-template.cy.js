describe('email template', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list email templates', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(7) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Email Template').click() // klik menu Email Template
        cy.contains('Email Templates').should('be.visible') // mencari elemen yang berisi teks "Email Templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.contains('No email templates').should('be.visible') // mencari elemen yang berisi teks "No email templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create email template berdasarkan default', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(7) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Email Template').click() // klik menu Email Template
        cy.contains('Email Templates').should('be.visible') // mencari elemen yang berisi teks "Email Templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New email template
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-color-custom').click() // klik tombol Create
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, edit, delete email template', () => {
        // create email template
        cy.get('.fi-sidebar-group-items > :nth-child(7) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Email Template').click() // klik menu Email Template
        cy.contains('Email Templates').should('be.visible') // mencari elemen yang berisi teks "Email Templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New email template
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('user@gmail.com') // input Email Name "user@gmail.com"
        cy.get('input[id="data.subject"]').type('New Email Template') // input Email Subject "New Email Template"
        cy.get('textarea[id="data.where_used"]').type('Email Where Used') // input Email Where Used "Email Where Used"
        cy.get('select[id="data.project"]').select('Agent') // pilih Project "Agent"
        cy.get('select[id="data.send_to"]').select('Partner') // pilih Send to "Partner"
        cy.get('button[id="data.is_system"]').click() // klik tombol on pada Email Type (Is System)
        cy.get('trix-editor[id="data.description"]').type('New email template') // isi Description "New email template"
        cy.get('.fi-ac > .fi-color-custom').click() // klik tombol Create
        cy.wait(10000) // menunggu selama 10 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Email Templates
        cy.contains('Email Templates').should('be.visible') // mencari elemen yang berisi teks "Email Templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.contains('user@gmail.com').should('be.visible') // mencari elemen yang berisi teks "user@gmail.com" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // edit email template
        cy.get(':nth-child(1) > :nth-child(6) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik Edit pada email template Project "agent"
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('select[id="data.project"]').select('Admin') // ubah Project dari "Agent" menjadi "Admin"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(10000) // menunggu selama 10 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Email Templates
        cy.contains('Email Templates').should('be.visible') // mencari elemen yang berisi teks "Email Templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.contains('admin') // mencari elemen yang berisi teks "admin"
        cy.wait(5000) // menunggu selama 5 detik

        // delete email template
        cy.get(':nth-child(1) > :nth-child(6) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik Edit pada email template Project "admin"
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('Delete').should('be.visible') // mencari elemen yang berisi teks "Delete" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('user@gmail.com').should('not.exist') // memastikan tidak ada elemen yang mengandung teks "user@gmail.com"
        cy.wait(5000) // menunggu selama 5 detik
    })
})