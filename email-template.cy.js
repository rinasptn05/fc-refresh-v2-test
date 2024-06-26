describe('email template', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8000/admin') // menunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 10.000 milidetik (10 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('daftar Email Templates', () => {
        cy.get(':nth-child(6) > .fi-sidebar-item-button').click() // klik menu Email Template
        cy.contains('Email Templates').should('be.visible') // mencari elemen yang berisi teks "Email Templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan create Email Template', () => {
        cy.get(':nth-child(6) > .fi-sidebar-item-button').click() // klik menu Email Template
        cy.contains('Email Templates').should('be.visible') // mencari elemen yang berisi teks "Email Templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New email template
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('user@gmail.com') // input Email Name "user@gmail.com"
        cy.get('input[id="data.subject"]').type('New Email Template') // input Email Subject "New Email Template"
        cy.get('textarea[id="data.where_used"]').type('Website') // input Email Where Used "Website"
        cy.get('select[id="data.project"]').select('Agent') // pilih Project "Agent"
        cy.get('select[id="data.send_to"]').select('Partner') // pilih Send to "Partner"
        cy.get('button[id="data.is_system"]').click() // klik tombol on pada Email Type (Is System)
        cy.get('trix-editor[id="data.description"]').type('New email template') // isi Description "New email template"
        cy.get('a.fi-btn').click() // klik tombol Cancel
        cy.contains('Email Templates').should('be.visible') // mencari elemen yang berisi teks "Email Templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create Email Template', () => {
        cy.get(':nth-child(6) > .fi-sidebar-item-button').click() // klik menu Email Template
        cy.contains('Email Templates').should('be.visible') // mencari elemen yang berisi teks "Email Templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New email template
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('user@gmail.com') // input Email Name "user@gmail.com"
        cy.get('input[id="data.subject"]').type('New Email Template') // input Email Subject "New Email Template"
        cy.get('textarea[id="data.where_used"]').type('Website') // input Email Where Used "Website"
        cy.get('select[id="data.project"]').select('Agent') // pilih Project "Agent"
        cy.get('select[id="data.send_to"]').select('Partner') // pilih Send to "Partner"
        cy.get('button[id="data.is_system"]').click() // klik tombol on pada Email Type (Is System)
        cy.get('trix-editor[id="data.description"]').type('New email template') // isi Description "New email template"
        cy.get('.fi-ac > .fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create & create another Email Template', () => {
        cy.get(':nth-child(6) > .fi-sidebar-item-button').click() // klik menu Email Template
        cy.contains('Email Templates').should('be.visible') // mencari elemen yang berisi teks "Email Templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New email template
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('user02@gmail.com') // input Email Name "user02@gmail.com"
        cy.get('input[id="data.subject"]').type('Email Template 2') // input Email Subject "Email Template 2"
        cy.get('textarea[id="data.where_used"]').type('Website') // input Email Where Used "Website"
        cy.get('select[id="data.project"]').select('Admin') // pilih Project "Admin"
        cy.get('select[id="data.send_to"]').select('User') // pilih Send to "User"
        cy.get('button[id="data.is_system"]').click() // klik tombol on pada Email Type (Is System)
        cy.get('trix-editor[id="data.description"]').type('Email template 2') // isi Description "Email template 2"
        cy.get('.fi-ac > button.fi-color-gray').click() // klik tombol Create & create another
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('tidak ingin create Email Template', () => {
        cy.get(':nth-child(6) > .fi-sidebar-item-button').click() // klik menu Email Template
        cy.contains('Email Templates').should('be.visible') // mencari elemen yang berisi teks "Email Templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New email template
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan perubahan pada Email Template', () => {
        cy.get(':nth-child(6) > .fi-sidebar-item-button').click() // klik menu Email Template
        cy.contains('Email Templates').should('be.visible') // mencari elemen yang berisi teks "Email Templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(1) > :nth-child(6) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada email template Project agent
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('select[id="data.send_to"]').select('Admin') // ubah Send to dari "Partner" ke "Admin"
        cy.get('.fi-ac > .fi-color-gray').click() // klik tombol Cancel
        cy.contains('Email Templates').should('be.visible') // mencari elemen yang berisi teks "Email Templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('mengubah pada Email Template', () => {
        cy.get(':nth-child(6) > .fi-sidebar-item-button').click() // klik menu Email Template
        cy.contains('Email Templates').should('be.visible') // mencari elemen yang berisi teks "Email Templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(1) > :nth-child(6) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada email template Project agent
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('select[id="data.send_to"]').select('Admin') // ubah Send to dari "Partner" ke "Admin"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan hapus Email Template', () => {
        cy.get(':nth-child(6) > .fi-sidebar-item-button').click() // klik menu Email Template
        cy.contains('Email Templates').should('be.visible') // mencari elemen yang berisi teks "Email Templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(1) > :nth-child(6) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada email template Project agent
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-modal-footer-actions > .fi-color-gray').click() // klik tombol Cancel
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('menghapus Email Template', () => {
        cy.get(':nth-child(6) > .fi-sidebar-item-button').click() // klik menu Email Template
        cy.contains('Email Templates').should('be.visible') // mencari elemen yang berisi teks "Email Templates" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(1) > :nth-child(6) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada email template Project agent
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.wait(5000) // menunggu selama 5 detik
    })
})