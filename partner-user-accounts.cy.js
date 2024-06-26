describe('partner user accounts', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8000/admin') // menunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 10.000 milidetik (10 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('daftar users', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Partner User Accounts').click() // klik menu Partner User Accounts
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan create user', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Partner User Accounts').click() // klik menu Partner User Accounts
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New user
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna

        cy.get('select[id="data.partner_id"]').select('PT Abadi') // pilih Partner Name "PT Abadi"
        cy.get('select[id="data.user_rights"]').select('User') // pilih User rights "User"
        cy.get('input[id="data.name"]').type('user') // input Account Holder Name "user"
        cy.get('input[id="data.email"]').type('user01@gmail.com') // input Email "user01@gmail.com"
        cy.get('input[id="data.password"]').type('user12345') // input Password "user12345"
        cy.get('select[id="data.is_active"]').select('Active') // pilih Is active "Active"
        cy.get('input[id="data.is_scanner_user-0"]').check() // pilih Is scanner user "No"
        cy.get('a.fi-btn').click() // klik tombol Cancel
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create user', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Partner User Accounts').click() // klik menu Partner User Accounts
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New user
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna

        cy.get('select[id="data.partner_id"]').select('PT Abadi') // pilih Partner Name "PT Abadi"
        cy.get('select[id="data.user_rights"]').select('User') // pilih User rights "User"
        cy.get('input[id="data.name"]').type('user') // input Account Holder Name "user"
        cy.get('input[id="data.email"]').type('user01@gmail.com') // input Email "user01@gmail.com"
        cy.get('input[id="data.password"]').type('user12345') // input Password "user12345"
        cy.get('select[id="data.is_active"]').select('Active') // pilih Is active "Active"
        cy.get('input[id="data.is_scanner_user-0"]').check() // pilih Is scanner user "No"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })
    
    it('create & create another user', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Partner User Accounts').click() // klik menu Partner User Accounts
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New user
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna

        cy.get('select[id="data.partner_id"]').select('PT Sentosa') // pilih Partner Name "PT Sentosa"
        cy.get('select[id="data.user_rights"]').select('Agent') // pilih User rights "Agent"
        cy.get('input[id="data.name"]').type('agent') // input Account Holder Name "agent"
        cy.get('input[id="data.email"]').type('agnet@gmail.com') // input Email "agnet@gmail.com"
        cy.get('input[id="data.password"]').type('agent12345') // input Password "agent12345"
        cy.get('select[id="data.is_active"]').select('Active') // pilih Is active "Active"
        cy.get('input[id="data.is_scanner_user-0"]').check() // pilih Is scanner user "No"
        cy.get('.fi-ac > button.fi-color-gray').click() // klik tombol Create & create another
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('tidak ingin create user', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Partner User Accounts').click() // klik menu Partner User Accounts
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New user
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan perubahan pada user', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Partner User Accounts').click() // klik menu Partner User Accounts
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(3) > :nth-child(6) > .whitespace-nowrap').click() // klik tombol Edit
        cy.get('input[id="data.email"]').clear().type('agent@gmail.com') // ubah Email dari "agnet@gmail.com" ke "agent@gmail.com"
        cy.get('input[id="data.password"]').type('agent12345') // input Password "agent12345"
        cy.get('.fi-ac > .fi-color-gray').click() // klik tombol Cancel
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
      })

    it('mengubah pada user', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Partner User Accounts').click() // klik menu Partner User Accounts
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(3) > :nth-child(6) > .whitespace-nowrap').click() // klik tombol Edit
        cy.get('input[id="data.email"]').clear().type('agent@gmail.com') // ubah Email dari "agnet@gmail.com" ke "agent@gmail.com"
        cy.get('input[id="data.password"]').type('agent12345') // input Password "agent12345"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan hapus user', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Partner User Accounts').click() // klik menu Partner User Accounts
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(2) > :nth-child(6) > .whitespace-nowrap').click() // klik tombol Edit
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-modal-footer-actions > .fi-color-gray').click() // klik tombol Cancel
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('menghapus user', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Partner User Accounts').click() // klik menu Partner User Accounts
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(3) > :nth-child(6) > .whitespace-nowrap').click() // klik tombol Edit
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-modal-footer-actions > .fi-color-custom', { timeout: 10000 }).click() // klik tombol Confirm
        cy.wait(5000) // menunggu selama 5 detik
    })
})