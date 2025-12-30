describe('transaction reports', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list & search transaction reports', () => {
        // Query INSERT untuk menambahkan data ke tabel 'books'
        const queryBooks = `INSERT INTO books (book_ref_no, child_id, package_id, class_id, created_at, updated_at, class_schedule_id) VALUES ('FLCP000001', '1', '1', '1', '2025-12-20', '2025-12-20', '1')`

        // Memanggil cy.task dengan parameter 'queryDatabase' dan queryBooks untuk menjalankan perintah SQL INSERT INTO books ke database
        // Hasil eksekusi disimpan dalam variabel resultBooks
        cy.task('queryDatabase', queryBooks).then((resultBooks) => {
  
        // Memastikan bahwa satu baris data berhasil ditambahkan dengan memeriksa properti affectedRows dari resultBooks agar bernilai 1
        expect(resultBooks.affectedRows).to.equal(1)

        // Menyimpan insertId dari resultBooks (ID dari data books yang baru dimasukkan) ke dalam variabel insertedBookId
        const insertedBookId = resultBooks.insertId

        // Query INSERT untuk menambahkan data ke tabel 'transaction_reports' dengan foreign key dari tabel 'books'
        const queryTransactionReports = `INSERT INTO transaction_reports (id, book_id, amount, used_balance, used_credit, amount_paid, transaction_id, mgs_amount, payment_mode, source, created_at, updated_at) VALUES ('1', '${insertedBookId}', '100', '100', '0', '100', 'FCT13208082', '0', 'mastercard', 'FC', '2025-12-20', '2025-12-20')`

        // Memanggil cy.task dengan queryDatabase dan queryTransactionReports untuk menjalankan perintah INSERT INTO transaction_reports
        // Hasilnya disimpan dalam variabel resultTransactionReports
        cy.task('queryDatabase', queryTransactionReports).then((resultTransactionReports) => {

        // Memastikan satu baris data berhasil ditambahkan ke transaction_reports dengan memeriksa affectedRows pada resultTransactionReports agar bernilai 1
        expect(resultTransactionReports.affectedRows).to.equal(1)
    })
})

        // list transaction reports
        cy.get(':nth-child(18) > .fi-sidebar-item-button').click() // klik menu Booking Report By Entry
        cy.contains('Reports') // mencari elemen yang berisi teks "Reports"
        cy.scrollTo(0, 1200) // scroll ke bawah sebanyak 1200px
        cy.get('.fi-ta-content').contains('FLCP000001') // mencari elemen yang berisi teks "FLCP000001"
        cy.wait(5000) // menunggu selama 5 detik

        // filter Payment mode
            // payment mode1
            cy.get('select[id="tableFilters.payment_mode.value"]').select('Master Card') // pilih Payment mode "Master Card"
            cy.wait(10000) // menunggu selama 10 detik
            cy.scrollTo(0, 1200) // scroll ke bawah sebanyak 1200px
            cy.get('.fi-ta-content').contains('mastercard') // mencari elemen yang berisi teks "mastercard"
            cy.wait(5000) // menunggu selama 5 detik

            // payment mode2
            cy.get('select[id="tableFilters.payment_mode.value"]').select('Visa') // pilih Payment mode "Visa"
            cy.scrollTo(0, 1200) // scroll ke bawah sebanyak 1200px
            cy.contains('No transaction reports', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "No transaction reports" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
            cy.wait(5000) // menunggu selama 5 detik
        
        // filter Source
            // source1
            cy.get('.fi-link > .font-semibold').click() // klik Reset
            cy.wait(10000) // menunggu selama 10 detik
            cy.get('select[id="tableFilters.source.value"]').select('FC') // pilih Source "FC"
            cy.wait(10000) // menunggu selama 10 detik
            cy.scrollTo(0, 1200) // scroll ke bawah sebanyak 1200px
            cy.get('.fi-ta-content').contains('FC') // mencari elemen yang berisi teks "FC"
            cy.wait(5000) // menunggu selama 5 detik

            // source2
            cy.get('select[id="tableFilters.source.value"]').select('Time') // pilih Source "Time"
            cy.scrollTo(0, 1200) // scroll ke bawah sebanyak 1200px
            cy.contains('No transaction reports', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "No transaction reports" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
            cy.wait(5000) // menunggu selama 5 detik
        
        // filter Date
            // date1
            cy.get('.fi-link > .font-semibold').click() // klik Reset
            cy.wait(10000) // menunggu selama 10 detik
            cy.get('input[id="tableFilters.booking_date.start_date"]').type('2025-12-20') // input Start Date "2025-12-20"
            cy.get('input[id="tableFilters.booking_date.end_date"]').type('2025-12-30') // input End Date "2025-12-30"
            cy.wait(5000) // menunggu selama 5 detik
            cy.scrollTo(0, 1200) // scroll ke bawah sebanyak 1200px
            cy.get('.fi-ta-content').contains('Soccer for kid') // mencari elemen yang berisi teks "Soccer for kid"
            cy.wait(5000) // menunggu selama 5 detik

            // date2
            cy.get('input[id="tableFilters.booking_date.start_date"]').type('2025-11-20') // input Start Date "2025-11-20"
            cy.get('input[id="tableFilters.booking_date.end_date"]').type('2025-11-30') // input End Date "2025-11-30"
            cy.scrollTo(0, 1200) // scroll ke bawah sebanyak 1200px
            cy.contains('No transaction reports', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "No transaction reports" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
            cy.wait(5000) // menunggu selama 5 detik
        
        // filter Payment mode, Source, dan Date
            // payment mode, source, dan date1
            cy.get('.fi-link > .font-semibold').click() // klik Reset
            cy.wait(10000) // menunggu selama 10 detik
            cy.get('select[id="tableFilters.payment_mode.value"]').select('Master Card') // pilih Payment mode "Master Card"
            cy.get('select[id="tableFilters.source.value"]').select('FC') // pilih Source "FC"
            cy.get('input[id="tableFilters.booking_date.start_date"]').type('2025-12-20') // input Start Date "2025-12-20"
            cy.get('input[id="tableFilters.booking_date.end_date"]').type('2025-12-30') // input End Date "2025-12-30"
            cy.wait(5000) // menunggu selama 5 detik
            cy.scrollTo(0, 1200) // scroll ke bawah sebanyak 1200px
            cy.get('.fi-ta-content').contains('Soccer for kid') // mencari elemen yang berisi teks "Soccer for kid"
            cy.wait(5000) // menunggu selama 5 detik

            // payment mode, source, dan date2
            cy.get('.fi-link > .font-semibold').click() // klik Reset
            cy.wait(10000) // menunggu selama 10 detik
            cy.get('select[id="tableFilters.payment_mode.value"]').select('Visa') // pilih Payment mode "Visa"
            cy.get('select[id="tableFilters.source.value"]').select('Time') // pilih Source "Time"
            cy.get('input[id="tableFilters.booking_date.start_date"]').type('2025-11-20') // input Start Date "2025-11-20"
            cy.get('input[id="tableFilters.booking_date.end_date"]').type('2025-11-30') // input End Date "2025-11-30"
            cy.scrollTo(0, 1200) // scroll ke bawah sebanyak 1200px
            cy.contains('No transaction reports', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "No transaction reports" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
            cy.wait(5000) // menunggu selama 5 detik

        // search berdasarkan apa yang admin input
            // search1
            cy.get('.fi-link > .font-semibold').click() // klik Reset
            cy.wait(10000) // menunggu selama 10 detik
            cy.get('input[id="input-1"]').type('soccer') // input Search "soccer"
            cy.wait(10000) // menunggu selama 10 detik
            cy.get('.fi-ta-content').contains('Soccer for kid',) // mencari elemen yang berisi teks "Soccer for kid"
            cy.wait(5000) // menunggu selama 5 detik

            // search2
            cy.get('input[id="input-1"]').clear().type('abc') // input Search "abc"
            cy.contains('No transaction reports', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "No transaction reports" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
            cy.wait(5000) // menunggu selama 5 detik
    })
})