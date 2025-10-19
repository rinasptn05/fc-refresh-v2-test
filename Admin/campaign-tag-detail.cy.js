describe('campaign tag detail', () => {
  beforeEach(() => {
    cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
    cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
    cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
    cy.get('input[type=password]').type('admin123') // input password "admin123"
    cy.get('.fi-btn').click() // klik tombol Sign in
    cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
  })

  it('list class master campaign tag details', () => {
    cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Campaign Tag Detail').click() // klik menu Campaign Tag Detail
    cy.contains('Details').should('be.visible') // mencari elemen yang berisi teks "Details" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.contains('No class master campaign tag details').should('be.visible') // mencari elemen yang berisi teks "No class master campaign tag details" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.wait(5000) // menunggu selama 5 detik
  })

  it('create class master campaign tag detail berdasarkan default', () => {
    cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Campaign Tag Detail').click() // klik menu Campaign Tag Detail
    cy.contains('Details').should('be.visible') // mencari elemen yang berisi teks "Details" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master campaign tag detail
    cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-color-custom').click() // klik tombol Create
    cy.wait(5000) // menunggu selama 5 detik
    cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.wait(5000) // menunggu selama 5 detik
  })

  it('create, edit, delete class master campaign tag detail', () => {
    // create class master campaign tag detail
    cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Campaign Tag Detail').click() // klik menu Campaign Tag Detail
    cy.contains('Details').should('be.visible') // mencari elemen yang berisi teks "Details" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master campaign tag detail
    cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    
    cy.get('select[id="data.campaign_tag_id"]').select('Promotion') // pilih Campaign Tag "Promotion"
    cy.get('textarea[id="data.description"]').type('Campaign Tag : Promotion') // isi Deskripsi "Campaign Tag : Promotion"
    cy.wait(5000) // menunggu selama 5 detik

    const filePath = 'campaign.jpg' // path relatif dari file di dalam folder fixtures
    cy.get('input[type="file"]').attachFile(filePath) // pilih input file / klik Browse dan lampirkan file
    cy.contains('Upload complete', { timeout: 100000 }) // mencari elemen yang berisi teks "Upload complete"

    cy.get('select[id="data.status"]').select('Active') // pilih Status "Active"
    cy.wait(1000) // menunggu selama 1 detik
    cy.get('.fi-color-custom').click() // klik tombol Create
    cy.contains('Created', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Created" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
    
    cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Class Master Campaign Tag Details
    cy.contains('Details').should('be.visible') // mencari elemen yang berisi teks "Details" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.contains('Promotion').should('be.visible') // mencari elemen yang berisi teks "Promotion" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.wait(5000) // menunggu selama 5 detik

    // edit class master campaign tag detail
    cy.get('.fi-ta-actions > .fi-link').click() // klik Edit pada Campaign Tag Name "Promotion"
    cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('textarea[id="data.description"]').clear().type('Campaign Tag Name : Promotion') // ubah Deskripsi dari "Campaign Tag : Promotion" menjadi "Campaign Tag Name : Promotion"
    cy.wait(10000) // menunggu selama 10 detik

    cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
    cy.contains('Saved', { timeout: 50000 }).should('be.visible') // mencari elemen yang berisi teks "Saved" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 50 detik
    cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Class Master Campaign Tag Details
    cy.contains('Details').should('be.visible') // mencari elemen yang berisi teks "Details" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.wait(5000) // menunggu selama 5 detik

    // delete class master campaign tag detail
    cy.get('.fi-ta-actions > .fi-link').click() // klik Edit pada Campaign Tag Name "Promotion"
    cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.wait(5000) // menunggu selama 5 detik
    cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
    cy.contains('Are you sure you would like to do this?', { timeout: 30000 }) // mencari elemen yang berisi teks "Are you sure you would like to do this?" 
    cy.contains('Delete').should('be.visible') // mencari elemen yang berisi teks "Delete" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
    cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
    cy.contains('Deleted', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Deleted" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
    cy.contains('Promotion').should('not.exist') // memastikan tidak ada elemen yang mengandung teks "Promotion"
  })
})