describe('entry type', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8000/admin') // menunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 10.000 milidetik (10 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('daftar Entry Types', () => {
        cy.get(':nth-child(5) > .fi-sidebar-item-button').click() // klik menu Entry Type
        cy.contains('Entry Types').should('be.visible') // mencari elemen yang berisi teks "Entry Types" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan create Entry Type', () => {
        cy.get(':nth-child(5) > .fi-sidebar-item-button').click() // klik menu Entry Type
        cy.contains('Entry Types').should('be.visible') // mencari elemen yang berisi teks "Entry Types" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New entry type
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Product') // input Name "Product"
        cy.get('a.fi-btn').click() // klik tombol Cancel
        cy.contains('Entry Types').should('be.visible') // mencari elemen yang berisi teks "Entry Types" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create Entry Type', () => {
        cy.get(':nth-child(5) > .fi-sidebar-item-button').click() // klik menu Entry Type
        cy.contains('Entry Types').should('be.visible') // mencari elemen yang berisi teks "Entry Types" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New entry type
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Product') // input Name "Product"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create & create another Entry Type', () => {
        cy.get(':nth-child(5) > .fi-sidebar-item-button').click() // klik menu Entry Type
        cy.contains('Entry Types').should('be.visible') // mencari elemen yang berisi teks "Entry Types" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New entry type
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Ticket 2') // input Name "Ticket 2"
        cy.get('.fi-ac > button.fi-color-gray').click() // klik tombol Create & create another
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('tidak ingin create Entry Type', () => {
        cy.get(':nth-child(5) > .fi-sidebar-item-button').click() // klik menu Entry Type
        cy.contains('Entry Types').should('be.visible') // mencari elemen yang berisi teks "Entry Types" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New entry type
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan perubahan pada Entry Type', () => {
        cy.get(':nth-child(5) > .fi-sidebar-item-button').click() // klik menu Entry Type
        cy.contains('Entry Types').should('be.visible') // mencari elemen yang berisi teks "Entry Types" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(7) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada entry type Product
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').clear().type('Product 2') // ubah Name dari "Product" ke "Product 2"
        cy.get('.fi-ac > .fi-color-gray').click() // klik tombol Cancel
        cy.contains('Entry Types').should('be.visible') // mencari elemen yang berisi teks "Entry Types" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('mengubah pada Entry Type', () => {
        cy.get(':nth-child(5) > .fi-sidebar-item-button').click() // klik menu Entry Type
        cy.contains('Entry Types').should('be.visible') // mencari elemen yang berisi teks "Entry Types" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(7) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada entry type Product
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').clear().type('Product 2') // ubah Name dari "Product" ke "Product 2"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan hapus Entry Type', () => {
        cy.get(':nth-child(5) > .fi-sidebar-item-button').click() // klik menu Entry Type
        cy.contains('Entry Types').should('be.visible') // mencari elemen yang berisi teks "Entry Types" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(6) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada entry type Workshop
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-modal-footer-actions > .fi-color-gray').click() // klik tombol Cancel
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('menghapus Entry Type', () => {
        cy.get(':nth-child(5) > .fi-sidebar-item-button').click() // klik menu Entry Type
        cy.contains('Entry Types').should('be.visible') // mencari elemen yang berisi teks "Entry Types" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(8) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada entry type Ticket 2
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.wait(5000) // menunggu selama 5 detik
    })
    
    it('menampilkan 5 data per page pada halaman Entry Types', () => {
        cy.get(':nth-child(5) > .fi-sidebar-item-button').click() // klik menu Entry Type
        cy.contains('Entry Types').should('be.visible') // mencari elemen yang berisi teks "Entry Types" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('5') // pilih Per page "5"
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('Ticket').should('be.visible') // mencari elemen yang berisi teks "Ticket" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })
    
    it('melihat daftar Entry Types pada halaman selanjutnya', () => {
        cy.get(':nth-child(5) > .fi-sidebar-item-button').click() // klik menu Entry Type
        cy.contains('Entry Types').should('be.visible') // mencari elemen yang berisi teks "Entry Types" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('5') // pilih Per page "5"
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('Ticket').should('be.visible') // mencari elemen yang berisi teks "Ticket" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('[rel="next"] > .fi-pagination-item-button').click() // klik tombol panah kanan
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('Workshop').should('be.visible') // mencari elemen yang berisi teks "Workshop" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    }) 
})