describe('list entries', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 20000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 20.000 milidetik (20 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list entries', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000}).contains('List Entries').click() // klik menu List Entries
        cy.contains('Informations') // mencari elemen yang berisi teks "Informations"
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('edit, delete, search entry', () => {
        // edit entry
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000}).contains('List Entries').click() // klik menu List Entries
        cy.contains('Informations') // mencari elemen yang berisi teks "Informations"
        cy.get(':nth-child(1) > :nth-child(7) > .whitespace-nowrap > .fi-ta-actions > .fi-link').click() // klik tombol View pada Name "Soccer for kid"
        cy.contains('Entry') // mencari elemen yang berisi teks "Entry"

        const filePath = 'entry.jpg' // path relatif dari file di dalam folder fixtures
        cy.get('input[type="file"]').attachFile(filePath) // pilih input file / klik Browse dan lampirkan file
        cy.wait(30000) // menunggu selama 30 detik
        cy.get('div[class="choices__inner"]').eq(0).click() // klik menu dropdown pada Entry Type
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('div[id="choices--dataentry_type_id-item-choice-5"]').click() // ubah Entry Type dari "Workshop" menjadi "Trial Class"
        cy.get('trix-editor[id="data.description"]').clear().type('Description') // ubah Description dari "desc" menjadi "Description"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(5000) // menunggu selama 5 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Class Basic Informations
        cy.contains('Informations') // mencari elemen yang berisi teks "Informations"
        cy.wait(5000) // menunggu selama 5 detik

        // cari entry berdasarkan filter partner
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.get('div[class="choices__inner"]').eq(0).click() // klik menu dropdown pada Partner
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('div[id="choices--tableFilterspartnervalue-item-choice-1"]').click() // pilih filter Partner "PT Kunci"
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter

        // cari entry berdasarkan filter entry type1
        cy.get('.fi-ta-filters > :nth-child(1) > .fi-link > .font-semibold').click() // klik Reset
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('div[class="choices__inner"]').eq(1).click() // klik menu dropdown pada Entry type
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('div[id="choices--tableFiltersentryTypevalue-item-choice-3"]').click({force: true}) // pilih filter Entry type "Term"
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter

        // cari entry berdasarkan filter entry type2
        cy.get('div[class="choices__inner"]').eq(1).click() // klik menu dropdown pada Entry type
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('div[id="choices--tableFiltersentryTypevalue-item-choice-4"]').click({force: true}) // pilih filter Entry type "Ticket"
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter

        // cari entry berdasarkan filter status1
        cy.get('.fi-ta-filters > :nth-child(1) > .fi-link > .font-semibold').click() // klik Reset
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('select[id="tableFilters.status.value"]').select('Submitted', {force: true}) // pilih filter Status "Submitted"
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter

        // cari entry berdasarkan filter status2
        cy.get('select[id="tableFilters.status.value"]').select('Archived', {force: true}) // pilih filter Status "Archived"
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter

        // cari entry berdasarkan filter partner, entry type, dan status1
        cy.get('.fi-ta-filters > :nth-child(1) > .fi-link > .font-semibold').click() // klik Reset
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('div[class="choices__inner"]').eq(0).click() // klik menu dropdown pada Partner
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('div[id="choices--tableFilterspartnervalue-item-choice-1"]').click() // pilih filter Partner "PT Kunci"
        cy.get('div[class="choices__inner"]').eq(1).click() // klik menu dropdown pada Entry type
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('div[id="choices--tableFiltersentryTypevalue-item-choice-5"]').click({force: true}) // pilih filter Entry type "Trial Class"
        cy.get('select[id="tableFilters.status.value"]').select('Submitted', {force: true}) // pilih filter Status "Submitted"
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter

        // cari entry berdasarkan filter partner, entry type, dan status2
        cy.get('.fi-ta-filters > :nth-child(1) > .fi-link > .font-semibold').click() // klik Reset
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('div[class="choices__inner"]').eq(0).click() // klik menu dropdown pada Partner
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('div[id="choices--tableFilterspartnervalue-item-choice-1"]').click() // pilih filter Partner "PT Kunci"
        cy.get('div[class="choices__inner"]').eq(1).click() // klik menu dropdown pada Entry type
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('div[id="choices--tableFiltersentryTypevalue-item-choice-5"]').click({force: true}) // pilih filter Entry type "Trial Class"
        cy.get('select[id="tableFilters.status.value"]').select('Published', {force: true}) // pilih filter Status "Published"
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.get('.fi-ta-filters > :nth-child(1) > .fi-link > .font-semibold').click() // klik Reset
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.ms-auto > .fi-dropdown > .fi-dropdown-trigger > .fi-icon-btn').click() // klik tombol Filter
        cy.wait(5000) // menunggu selama 5 detik

        // cari entry berdasarkan apa yang admin input1
        cy.get('input[id="input-1"]').type('abc') // input Search "abc"
        cy.wait(10000) // menunggu selama 10 detik

        // cari entry berdasarkan apa yang admin input2
        cy.get('input[id="input-1"]').clear().type('soccer') // input Search "soccer"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Soccer').should('be.visible') // mencari elemen yang berisi teks "Soccer" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // delete entry
        cy.get(':nth-child(3) > :nth-child(7) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol View pada Name "Soccer for kid 2"
        cy.contains('Entry') // mencari elemen yang berisi teks "Entry"
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Delete') // mencari elemen yang berisi teks "Delete"        
        cy.get('.fi-modal-footer-actions > .fi-color-custom', { timeout: 10000 }).click() // klik tombol Confirm
        cy.wait(5000) // menunggu selama 5 detik
    })
})