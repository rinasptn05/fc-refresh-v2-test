describe('mi category', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8000/admin') // menunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 10.000 milidetik (10 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('daftar Class Master Mi Categories', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('MI Category').click() // klik menu MI Category
        cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan create class master mi category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('MI Category').click() // klik menu MI Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master mi category
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('input[id="data.name"]').type('People Smart') // input Name "People Smart"
      cy.get('a.fi-btn').click() // klik tombol Cancel
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
  })

    it('create class master mi category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('MI Category').click() // klik menu MI Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master mi category
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('input[id="data.name"]').type('People Smart') // input Name "People Smart"
      cy.get('.fi-color-custom').click() // klik tombol Create
      cy.wait(5000) // menunggu selama 5 detik
  })

    it('create & create another class master mi category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('MI Category').click() // klik menu MI Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master mi category
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('input[id="data.name"]').type('Logic Smart 2') // input Name "Logic Smart 2"
      cy.get('.fi-ac > button.fi-color-gray').click() // klik tombol Create & create another
      cy.wait(5000) // menunggu selama 5 detik
})

  it('tidak ingin create class master mi category', () => {
    cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('MI Category').click() // klik menu MI Category
    cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master mi category
    cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-color-custom').click() // klik tombol Create
    cy.wait(5000) // menunggu selama 5 detik
  })

  it('membatalkan perubahan pada class master mi category', () => {
    cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('MI Category').click() // klik menu MI Category
    cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get(':nth-child(9) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada mi category People Smart
    cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('input[id="data.name"]').clear().type('People smart') // ubah Name dari "People Smart" ke "Peaople smart"
    cy.get('.fi-ac > .fi-color-gray').click() // klik tombol Cancel
    cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.wait(5000) // menunggu selama 5 detik
  })

  it('mengubah pada class master mi category', () => {
    cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('MI Category').click() // klik menu MI Category
    cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get(':nth-child(9) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada mi category People Smart
    cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('input[id="data.name"]').clear().type('People smart') // ubah Name dari "People Smart" ke "Peaople smart"
    cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
    cy.wait(5000) // menunggu selama 5 detik
  })

it('membatalkan hapus class master mi category', () => {
  cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('MI Category').click() // klik menu MI Category
  cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
  cy.get(':nth-child(8) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada mi category Nature Smart
  cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
  cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
  cy.wait(5000) // menunggu selama 5 detik
  cy.get('.fi-modal-footer-actions > .fi-color-gray').click() // klik tombol Cancel
  cy.wait(5000) // menunggu selama 5 detik
})

  it('menghapus class master mi category', () => {
    cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('MI Category').click() // klik menu MI Category
    cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get(':nth-child(10) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol Edit pada mi category Logic Smart 2
    cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
    cy.wait(5000) // menunggu selama 5 detik
    cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm 
    cy.wait(5000) // menunggu selama 5 detik
  })

  it('menampilkan 5 data per page pada halaman Class Master Mi Categories', () => {
    cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('MI Category').click() // klik menu MI Category
    cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('5') // pilih Per page "5"
    cy.contains('Body Smart') // mencari elemen yang berisi teks "Body Smart"
    cy.wait(5000) // menunggu selama 5 detik
  })

  it('melihat daftar Class Master Mi Categories pada halaman selanjutnya', () => {
    cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('MI Category').click() // klik menu MI Category
    cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('5') // pilih Per page "5"
    cy.contains('Body Smart') // mencari elemen yang berisi teks "Body Smart"
    cy.wait(5000) // menunggu selama 5 detik
    cy.get('[rel="next"] > .fi-pagination-item-button').click() // klik tombol panah kanan
    cy.contains('Nature Smart') // mencari elemen yang berisi teks "Nature Smart"
    cy.wait(5000) // menunggu selama 5 detik
  })
})