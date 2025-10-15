describe('locations', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list locations', () => {
        cy.get(':nth-child(10) > .fi-sidebar-item-button').click() // klik menu Locations
        cy.contains('Locations') // mencari elemen yang berisi teks "Locations"
        cy.contains('No locations').should('be.visible') // mencari elemen yang berisi teks "No locations" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create location berdasarkan default', () => {
        cy.get(':nth-child(10) > .fi-sidebar-item-button').click() // klik menu Locations
        cy.contains('Locations') // mencari elemen yang berisi teks "Locations"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New location
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, edit, search, delete location', () => {
        // create location
        cy.get(':nth-child(10) > .fi-sidebar-item-button').click() // klik menu Locations
        cy.contains('Locations') // mencari elemen yang berisi teks "Locations"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New location
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Yishun') // input Name "Yishun"
        cy.get('input[id="data.postal_code"]').type('75') // input Postal code "75"
        cy.get('.choices__inner').click() // klik option pada Zone id
        cy.get('div[id="choices--datazone_id-item-choice-4"]').click() // pilih Zone id "North"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.contains('Created', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Created" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Locations
        cy.contains('Locations') // mencari elemen yang berisi teks "Locations"
        cy.contains('Yishun').should('be.visible') // mencari elemen yang berisi teks "Yishun" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // edit location
        cy.get('a.fi-link').click() // klik Edit pada Name "Yishun"
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.postal_code"]').clear().type('76') // ubah Postal code dari "75" menjadi "76"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.contains('Saved', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Saved" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Locations
        cy.contains('Locations') // mencari elemen yang berisi teks "Locations"
        cy.contains('76').should('be.visible') // mencari elemen yang berisi teks "76" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // cari location berdasarkan filter zone id1
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.get('select[id="tableFilters.zone_id.value"]').select('East') // pilih filter Zone id "East"
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.contains('No locations', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "No locations" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter

        // cari location berdasarkan filter zone id2
        cy.get('select[id="tableFilters.zone_id.value"]').select('North') // pilih filter Zone id "North"
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.contains('North', { timeout: 30000 }) // mencari elemen yang berisi teks "North"
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-badge-delete-button').click() // klik silang untuk delete zone id
        cy.wait(5000) // menunggu selama 5 detik

        // cari location berdasarkan apa yang admin input1
        cy.get('input[id="input-1"]').type('abc') // input Search "abc"
        cy.contains('No locations', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "No locations" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // cari location berdasarkan apa yang admin input2
        cy.get('input[id="input-1"]').clear().type('yishun') // input Search "yishun"
        cy.contains('Yishun', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Yishun" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // delete location
        cy.get('.fi-ta-actions > button.fi-link').click() // klik Delete pada Name "Yishun"
        cy.contains('Are you sure you would like to do this?', { timeout: 30000 }) // mencari elemen yang berisi teks "Are you sure you would like to do this?" 
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.contains('Deleted', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Deleted" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.contains('Yishun', { timeout: 30000 }).should('not.exist') // memastikan tidak ada elemen yang mengandung teks "Yishun"
    })
})