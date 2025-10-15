describe('reward categories', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list reward categories', () => {
        cy.get(':nth-child(14) > .fi-sidebar-item-button').click() // klik menu Reward Categories
        cy.contains('Reward') // mencari elemen yang berisi teks "Reward"
        cy.contains('No reward categories').should('be.visible') // mencari elemen yang berisi teks "No reward categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create reward category berdasarkan default', () => {
        cy.get(':nth-child(14) > .fi-sidebar-item-button').click() // klik menu Reward Categories
        cy.contains('Reward') // mencari elemen yang berisi teks "Reward"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New reward category
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, edit, search, delete reward category', () => {
        // create reward category1
        cy.get(':nth-child(14) > .fi-sidebar-item-button').click() // klik menu Reward Categories
        cy.contains('Reward') // mencari elemen yang berisi teks "Reward"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New reward category
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Lifestyle') // input Name "Lifestyle"
        cy.get('select[id="data.type"]').select('CompassPoint Reward') // pilih Type "CompassPoint Reward"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.contains('Created', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Created" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Reward Categories
        cy.contains('Reward') // mencari elemen yang berisi teks "Reward"
        cy.contains('Lifestyle').should('be.visible') // mencari elemen yang berisi teks "Lifestyle" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // create reward category2
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New reward category
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Activities') // input Name "Activities"
        cy.get('select[id="data.type"]').select('Flying Cape App Reward') // pilih Type "Flying Cape App Reward"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.contains('Created', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Created" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Reward Categories
        cy.contains('Reward') // mencari elemen yang berisi teks "Reward"
        cy.contains('Activities').should('be.visible') // mencari elemen yang berisi teks "Activities" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // edit reward category
        cy.get(':nth-child(1) > :nth-child(4) > .whitespace-nowrap > .fi-ta-actions > a.fi-link').click() // klik Edit pada Name "Lifestyle"
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').clear().type('Education') // ubah Name dari "Lifestyle" menjadi "Education"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.contains('Saved', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Saved" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Reward Categories
        cy.contains('Reward') // mencari elemen yang berisi teks "Reward"
        cy.contains('Education').should('be.visible') // mencari elemen yang berisi teks "Education" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // cari reward category berdasarkan filter type1
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.get('select[id="tableFilters.type.value"]').select('Flying Cape App Reward') // pilih filter Type "Flying Cape App Reward"
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.contains('Flying Cape App Reward', { timeout: 30000 }) // mencari elemen yang berisi teks "Flying Cape App Reward"
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter

        // cari reward category berdasarkan filter type2
        cy.get('.fi-ta-filters > :nth-child(1) > .fi-link > .font-semibold').click() // klik Reset
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('select[id="tableFilters.type.value"]').select('CompassPoint Reward') // pilih filter Type "CompassPoint Reward"
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.contains('CompassPoint Reward', { timeout: 30000 }) // mencari elemen yang berisi teks "CompassPoint Reward"
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-badge-delete-button').click() // klik silang untuk delete type
        cy.wait(10000) // menunggu selama 10 detik

        // cari reward category berdasarkan apa yang admin input1
        cy.get('input[id="input-1"]').type('abc') // input Search "abc"
        cy.contains('No reward categories', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "No reward categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // cari reward category berdasarkan apa yang admin input2
        cy.get('input[id="input-1"]').clear().type('education') // input Search "education"
        cy.contains('Education', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Education" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // delete reward category
        cy.get(':nth-child(1) > :nth-child(4) > .whitespace-nowrap > .fi-ta-actions > button.fi-link').click() // klik Delete pada Name "Education"
        cy.contains('Are you sure you would like to do this?', { timeout: 30000 }) // mencari elemen yang berisi teks "Are you sure you would like to do this?"       
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.contains('Deleted', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Deleted" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna selama maksimal 30 detik
        cy.contains('Education', { timeout: 30000 }).should('not.exist') // memastikan tidak ada elemen yang mengandung teks "Education"
    })
})