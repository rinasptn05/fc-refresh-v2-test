describe('booking report by entry', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 20000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 20.000 milidetik (20 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list booking report by entries', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(6) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Booking Report By Entry').click() // klik menu Booking Report By Entry
        cy.contains('Entries') // mencari elemen yang berisi teks "Entries"
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('search booking report by entry berdasarkan filters', () => {
        // Query INSERT untuk menambahkan data ke tabel 'books'
        const query = `INSERT INTO books (book_ref_no, child_id, package_id, class_id, created_at, updated_at, class_schedule_id) VALUES ('FLCP000001', '1', '1', '1', '2024-10-25', '2024-10-25', '1')`
        
        // Memanggil task Cypress bernama queryDatabase yang menjalankan query SQL di database, variabel query berisi perintah SQL yang akan dieksekusi
        // Setelah task selesai, fungsi callback menerima hasil eksekusi query dalam variabel result
        cy.task('queryDatabase', query).then((result) => {
        
        // Mengecek berapa banyak baris di database yang terpengaruh oleh query (dalam hal ini, berapa baris yang dimasukkan atau diubah)
        // Memastikan bahwa query berhasil mempengaruhi 1 baris data, yaitu baris yang ditambahkan
        expect(result.affectedRows).to.equal(1)
        })

        cy.get('.fi-sidebar-group-items > :nth-child(6) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Booking Report By Entry').click() // klik menu Booking Report By Entry
        cy.contains('Entries') // mencari elemen yang berisi teks "Entries"
        cy.wait(5000) // menunggu selama 5 detik

        // filter Organization
        cy.get('div[class="choices__inner"]').eq(0).click() // klik menu dropdown pada Organization
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('div[id="choices--tableFiltersidpartner_id-item-choice-1"]').click() // pilih filter Organization "PT Kunci"
        cy.wait(5000) // menunggu selama 5 detik

        // filter Entry
        cy.get('div[class="choices__inner"]').eq(1).click() // klik menu dropdown pada Entry
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('div[id="choices--tableFiltersidid-item-choice-1"]').click() // pilih filter Entry "Soccer for kid"
        cy.wait(10000) // menunggu selama 10 detik

        // lihat detail / view booking report by entry
        cy.get('.fi-ta-actions > .fi-link').click() // klik View pada Name "Soccer for kid"
        cy.contains('View').should('be.visible') // mencari elemen yang berisi teks "View" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Booking Report By Entries
        cy.contains('Entries') // mencari elemen yang berisi teks "Entries"
        cy.wait(5000) // menunggu selama 5 detik

        // filter Date
            // date1
            cy.get('div[class="choices__inner"]').eq(0).click() // klik menu dropdown pada Organization
            cy.wait(10000) // menunggu selama 10 detik
            cy.get('div[id="choices--tableFiltersidpartner_id-item-choice-1"]').click() // pilih filter Organization "PT Kunci"
            cy.wait(5000) // menunggu selama 5 detik

            cy.get('input[id="tableFilters.id.start_date"]').type('2030-01-01') // input Start Date "2030-01-01"
            cy.get('input[id="tableFilters.id.end_date"]').type('2030-01-21') // input End Date "2030-01-21"
            cy.wait(10000) // menunggu selama 10 detik

            // date2
            cy.get('input[id="tableFilters.id.start_date"]').clear().type('2040-01-01') // input Start Date "2040-01-01"
            cy.get('input[id="tableFilters.id.end_date"]').clear().type('2040-01-21') // input End Date "2040-01-21"
            cy.wait(10000) // menunggu selama 10 detik

        // filter Time
            // time1
            cy.get('.fi-ta-filters > :nth-child(1) > .fi-link > .font-semibold').click() // klik Reset
            cy.wait(10000) // menunggu selama 10 detik
            cy.get('div[class="choices__inner"]').eq(0).click() // klik menu dropdown pada Organization
            cy.wait(10000) // menunggu selama 10 detik
            cy.get('div[id="choices--tableFiltersidpartner_id-item-choice-1"]').click() // pilih filter Organization "PT Kunci"
            cy.wait(5000) // menunggu selama 5 detik

            cy.get('input[id="tableFilters.id.start_time"]').type('09:00:00') // input Start time "09:00:00"
            cy.get('input[id="tableFilters.id.end_time"]').type('12:00:00') // input End time "12:00:00"
            cy.wait(10000) // menunggu selama 10 detik

            // time2
            cy.get('input[id="tableFilters.id.start_time"]').clear().type('15:00:00') // input Start time "15:00:00"
            cy.get('input[id="tableFilters.id.end_time"]').clear().type('18:00:00') // input End time "18:00:00"
            cy.wait(10000) // menunggu selama 10 detik
        
        // filter Organization, Entry, Date, dan Time
            // organization, entry, date, dan time1
            cy.get('.fi-ta-filters > :nth-child(1) > .fi-link > .font-semibold').click() // klik Reset
            cy.wait(10000) // menunggu selama 10 detik

            cy.get('div[class="choices__inner"]').eq(0).click() // klik menu dropdown pada Organization
            cy.wait(10000) // menunggu selama 10 detik
            cy.get('div[id="choices--tableFiltersidpartner_id-item-choice-1"]').click() // pilih filter Organization "PT Kunci"
            cy.wait(5000) // menunggu selama 5 detik

            cy.get('div[class="choices__inner"]').eq(1).click() // klik menu dropdown pada Entry
            cy.wait(10000) // menunggu selama 10 detik
            cy.get('div[id="choices--tableFiltersidid-item-choice-1"]').click() // pilih filter Entry "Soccer for kid"
            cy.wait(5000) // menunggu selama 5 detik

            cy.get('input[id="tableFilters.id.start_date"]').type('2030-01-01') // input Start Date "2030-01-01"
            cy.get('input[id="tableFilters.id.end_date"]').type('2030-01-21') // input End Date "2030-01-21"
            cy.wait(5000) // menunggu selama 5 detik

            cy.get('input[id="tableFilters.id.start_time"]').clear().type('15:00:00') // input Start time "15:00:00"
            cy.get('input[id="tableFilters.id.end_time"]').clear().type('18:00:00') // input End time "18:00:00"
            cy.wait(10000) // menunggu selama 10 detik

            // organization, entry, date, dan time2
            cy.get('.fi-ta-filters > :nth-child(1) > .fi-link > .font-semibold').click() // klik Reset
            cy.wait(10000) // menunggu selama 10 detik

            cy.get('div[class="choices__inner"]').eq(0).click() // klik menu dropdown pada Organization
            cy.wait(10000) // menunggu selama 10 detik
            cy.get('div[id="choices--tableFiltersidpartner_id-item-choice-1"]').click() // pilih filter Organization "PT Kunci"
            cy.wait(5000) // menunggu selama 5 detik

            cy.get('div[class="choices__inner"]').eq(1).click() // klik menu dropdown pada Entry
            cy.wait(10000) // menunggu selama 10 detik
            cy.get('div[id="choices--tableFiltersidid-item-choice-2"]').click() // pilih filter Entry "Soccer for kid 2"
            cy.wait(5000) // menunggu selama 5 detik

            cy.get('input[id="tableFilters.id.start_date"]').clear().type('2040-01-01') // input Start Date "2040-01-01"
            cy.get('input[id="tableFilters.id.end_date"]').clear().type('2040-01-21') // input End Date "2040-01-21"
            cy.wait(5000) // menunggu selama 5 detik

            cy.get('input[id="tableFilters.id.start_time"]').type('09:00:00') // input Start time "09:00:00"
            cy.get('input[id="tableFilters.id.end_time"]').type('12:00:00') // input End time "12:00:00"
            cy.wait(10000) // menunggu selama 10 detik
    })

    it('show archived booking report by entry', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(6) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Booking Report By Entry').click() // klik menu Booking Report By Entry
        cy.contains('Entries') // mencari elemen yang berisi teks "Entries"
        cy.wait(5000) // menunggu selama 5 detik

        cy.get('div[class="choices__inner"]').eq(0).click() // klik menu dropdown pada Organization
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('div[id="choices--tableFiltersidpartner_id-item-choice-1"]').click() // pilih filter Organization "PT Kunci"
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('input[type="checkbox"]').click() // klik checkbox Show archived
        cy.wait(5000) // menunggu selama 5 detik
     })
})