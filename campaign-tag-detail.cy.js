describe('campaign tag detail', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8000/admin') // menunjungi web admin
    cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
    cy.get('input[type=password]').type('admin123') // input password "admin123"
    cy.get('.fi-btn').click() // klik tombol Sign in
    cy.contains('Dashboard').should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
  })

  it('daftar class master campaign tag details', () => {
    cy.get('.fi-sidebar-group.fi-active > .fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button').click() // klik menu Campaign Tag Detail
    cy.contains('Details').should('be.visible') // mencari elemen yang berisi teks "Details" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
  })

  it('create class master campaign tag detail', () => {
    cy.get('.fi-sidebar-group.fi-active > .fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button').click() // klik menu Campaign Tag Detail
    cy.contains('Details').should('be.visible') // mencari elemen yang berisi teks "Details" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master campaign tag detail
    cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    
    cy.get('select[id="data.campaign_tag_id"]').select('Non Promotion') // pilih Campaign Tag "Non Promotion"
    cy.get('textarea[id="data.description"]').type('Campaign Tag : Non Promotion') // isi Deskripsi "Campaign Tag : Non Promotion"
    cy.get('.filepond--label-action').click() // klik tombol Browse
    cy.get('select[id="data.status"').select('Active') // pilih Status "Active"
    cy.get('.fi-color-custom').click() // klik tombol Create
  })

  it('create & create another class master campaign tag detail', () => {
    cy.get('.fi-sidebar-group.fi-active > .fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button').click() // klik menu Campaign Tag Detail
    cy.contains('Details').should('be.visible') // mencari elemen yang berisi teks "Details" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master campaign tag detail
    cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    
    cy.get('select[id="data.campaign_tag_id"]').select('Promotion') // pilih Campaign Tag "Promotion"
    cy.get('textarea[id="data.description"]').type('Campaign Tag : Promotion') // isi Deskripsi "Campaign Tag : Promotion"
    cy.get('.filepond--label-action').click() // klik tombol Browse
    cy.get('select[id="data.status"').select('Active') // pilih Status "Active"
    cy.get('.fi-ac > [x-data="{}"]').click() // klik tombol Create & create another
  })

  it('tidak ingin create class master campaign tag detail', () => {
    cy.get('.fi-sidebar-group.fi-active > .fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button').click() // klik menu Campaign Tag Detail
    cy.contains('Details').should('be.visible') // mencari elemen yang berisi teks "Details" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master campaign tag detail
    cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-color-custom').click() // klik tombol Create
  })

  it('membatalkan perubahan pada Campaign Tag', () => {
    cy.get('.fi-sidebar-group.fi-active > .fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button').click() // klik menu Campaign Tag Detail
    cy.contains('Details').should('be.visible') // mencari elemen yang berisi teks "Details" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-ta-actions > .fi-link').click() // klik tombol Edit
    cy.get('textarea[id="data.description"]').clear().type('Campaign Tag Name : Non Promotion') // Ubah Deskripsi dari "Campaign Tag : Non Promotion" menjadi "Campaign Tag Name : Non Promotion"
    cy.get('.fi-btn-color-gray').click() // klik tombol Cancel
  })
})