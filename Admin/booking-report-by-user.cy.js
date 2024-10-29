describe('booking report by user', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 20000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 20.000 milidetik (20 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list booking report by users', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(7) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Booking Report By User').click() // klik menu Booking Report By User
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('search booking report by user', () => {
        // Query INSERT untuk menambahkan data ke tabel 'books'
        const query = `INSERT INTO books (book_ref_no, child_id, package_id, class_id, created_at, updated_at, class_schedule_id) VALUES ('FLCP000001', '1', '1', '1', '2024-10-25', '2024-10-25', '1')`
        
        // Memanggil task Cypress bernama queryDatabase yang menjalankan query SQL di database, variabel query berisi perintah SQL yang akan dieksekusi
        // Setelah task selesai, fungsi callback menerima hasil eksekusi query dalam variabel result
        cy.task('queryDatabase', query).then((result) => {
                
        // Mengecek berapa banyak baris di database yang terpengaruh oleh query (dalam hal ini, berapa baris yang dimasukkan atau diubah)
        // Memastikan bahwa query berhasil mempengaruhi 1 baris data, yaitu baris yang ditambahkan
        expect(result.affectedRows).to.equal(1)
        })

        // search booking
        cy.get('.fi-sidebar-group-items > :nth-child(7) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Booking Report By User').click() // klik menu Booking Report By User
        cy.contains('Users').should('be.visible') // mencari elemen yang berisi teks "Users" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        cy.get('div[class="choices__inner"]').click() // klik menu dropdown pada User
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('div[id="choices--user_id-item-choice-1"]').click() // pilih User "customer@gmail.com"
        cy.wait(10000) // menunggu selama 10 detik

        // lihat detail / view booking report by user
        cy.get('.fi-ta-actions > .fi-link').click() // klik View pada Entry Name "Soccer for kid"
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('View').should('be.visible') // mencari elemen yang berisi teks "View" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-btn').click() // klik tombol Close
        cy.wait(5000) // menunggu selama 5 detik

        // filters
        
    })
})