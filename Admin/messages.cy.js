describe('messages', () => {
    beforeEach(() => {
      cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
      cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list message history', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Messages').click() // klik menu Messages
        cy.wait(15000) // menunggu selama 15 detik
        cy.scrollTo(0, 1200) // scroll ke bawah sebanyak 1200px
        cy.contains('History').should('be.visible') // mencari elemen yang berisi teks "History" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.contains('No messages').should('be.visible') // mencari elemen yang berisi teks "No messages" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create direct message berdasarkan default', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Messages').click() // klik menu Messages
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-color-custom').click() // klik tombol Create
        cy.wait(15000) // menunggu selama 15 detik
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create public message berdasarkan default', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Messages').click() // klik menu Messages
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-tabs > :nth-child(2)').click() // klik tab Send Public Message
        cy.get('.fi-ac > .fi-color-custom').click() // klik tombol Create
        cy.wait(15000) // menunggu selama 15 detik
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create direct message & public message, edit, search, delete message history', () => {
        // create direct message
        cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Messages').click() // klik menu Messages
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('select[id="data.user_id"]').select('admin@gmail.com') // pilih Message assign to user "admin@gmail.com"
        cy.get('textarea[id="data.message"]').eq(0).type('Hello') // input Message "Hello"
        cy.get('.fi-ac > .fi-color-custom').click() // klik tombol Create
        cy.wait(20000) // menunggu selama 20 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Messages
        cy.wait(10000) // menunggu selama 10 detik
        cy.scrollTo(0, 1200) // scroll ke bawah sebanyak 1200px
        cy.contains('History').should('be.visible') // mencari elemen yang berisi teks "History" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.contains('Hello').should('be.visible') // mencari elemen yang berisi teks "Hello" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // create public message
        cy.get(':nth-child(2) > .fi-tabs-item-label').click() // klik tab Send Public Message
        cy.get('textarea[id="data.message"]').eq(1).type('Test') // input Message "Test"
        cy.get('.fi-ac > .fi-color-custom').click() // klik tombol Create
        cy.wait(20000) // menunggu selama 20 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Messages
        cy.wait(10000) // menunggu selama 10 detik
        cy.scrollTo(0, 1200) // scroll ke bawah sebanyak 1200px
        cy.contains('History').should('be.visible') // mencari elemen yang berisi teks "History" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.contains('Test').should('be.visible') // mencari elemen yang berisi teks "Test" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // edit message history
        cy.get(':nth-child(2) > :nth-child(5) > .whitespace-nowrap > .fi-ta-actions > :nth-child(1)').click() // klik Edit pada Message "Test"
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('textarea[id="mountedTableActionsData.0.message"]').clear().type('Test 123') // ubah Message dari "Test" menjadi "Test 123"
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Test 123').should('be.visible') // mencari elemen yang berisi teks "Test 123" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // cari message history berdasarkan apa yang admin input1
        cy.get('input[id="input-1"]').type('abc') // input Search "abc"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('No messages').should('be.visible') // mencari elemen yang berisi teks "No messages" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // cari message history berdasarkan apa yang admin input2
        cy.get('input[id="input-1"]').clear().type('hello') // input Search "hello"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Hello').should('be.visible') // mencari elemen yang berisi teks "Hello" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('input[id="input-1"]').clear() // hapus "hello" pada Search
        cy.wait(10000) // menunggu selama 10 detik

        // delete message history
        cy.get(':nth-child(2) > :nth-child(5) > .whitespace-nowrap > .fi-ta-actions > :nth-child(2)').click() // klik Delete pada Message "Test 123"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Delete') // mencari elemen yang berisi teks "Delete"
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm 
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Test 123').should('not.exist') // memastikan tidak ada elemen yang mengandung teks "Test 123"
        cy.wait(5000) // menunggu selama 5 detik
    })
})