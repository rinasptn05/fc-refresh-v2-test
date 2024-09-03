describe('campaign tag detail', () => {
  beforeEach(() => {
    cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API-master/FlyingCape-Refreshv2-API-master && php artisan testseed')
    cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
    cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
    cy.get('input[type=password]').type('admin123') // input password "admin123"
    cy.get('.fi-btn').click() // klik tombol Sign in
    cy.contains('Dashboard', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 10.000 milidetik (10 detik) agar elemen dengan teks 'Dashboard' muncul
  })

  it('daftar class master campaign tag details', () => {
    cy.get('[x-data="{ label: null }"] > .fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button').click() // klik menu Campaign Tag Detail
    cy.contains('Details').should('be.visible') // mencari elemen yang berisi teks "Details" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.wait(5000) // menunggu selama 5 detik
  })

  it('tidak ingin create class master campaign tag detail', () => {
    cy.get('[x-data="{ label: null }"] > .fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button').click() // klik menu Campaign Tag Detail
    cy.contains('Details').should('be.visible') // mencari elemen yang berisi teks "Details" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master campaign tag detail
    cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-color-custom').click() // klik tombol Create
    cy.wait(5000) // menunggu selama 5 detik
  })

  it('create, edit, delete class master campaign tag detail', () => {
    // create class master campaign tag detail
    cy.get('[x-data="{ label: null }"] > .fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button').click() // klik menu Campaign Tag Detail
    cy.contains('Details').should('be.visible') // mencari elemen yang berisi teks "Details" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master campaign tag detail
    cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    
    cy.get('select[id="data.campaign_tag_id"]').select('Promotion') // pilih Campaign Tag "Promotion"
    cy.get('textarea[id="data.description"]').type('Campaign Tag : Promotion') // isi Deskripsi "Campaign Tag : Promotion"

    // const filePath = 'campaign.JPG' // Path relatif dari file di dalam folder fixtures
    // cy.get('input[type="file"]').attachFile(filePath) // Pilih input file / klik Browse dan lampirkan file
    // cy.wait(30000) // menunggu selama 30 detik
    cy.get('.filepond--label-action', { timeout: 10000 }).should('be.visible').click() // klik tombol Browse
    cy.get('select[id="data.status"]').select('Active') // pilih Status "Active"
    cy.get('.fi-color-custom').click() // klik tombol Create
    cy.wait(5000) // menunggu selama 5 detik

    // edit class master campaign tag detail
    cy.get('[x-data="{ label: null }"] > .fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button').click() // klik menu Campaign Tag Detail
    cy.contains('Details').should('be.visible') // mencari elemen yang berisi teks "Details" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-ta-actions > .fi-link').click() // klik tombol Edit
    cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('textarea[id="data.description"]').clear().type('Campaign Tag Name : Promotion 2') // ubah Deskripsi dari "Campaign Tag : Promotion" menjadi "Campaign Tag Name : Promotion 2"
    cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
    cy.wait(5000) // menunggu selama 5 detik

    // delete class master campaign tag detail
    cy.get('[x-data="{ label: null }"] > .fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button').click() // klik menu Campaign Tag Detail
    cy.contains('Details').should('be.visible') // mencari elemen yang berisi teks "Details" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-ta-actions > .fi-link').click() // klik tombol Edit
    cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
    cy.wait(5000) // menunggu selama 5 detik
    cy.contains('Delete').should('be.visible') // mencari elemen yang berisi teks "Delete" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-modal-footer-actions > .fi-color-custom', { timeout: 10000 }).should('be.visible').click() // klik tombol Confirm
    cy.wait(5000) // menunggu selama 5 detik
  })
})