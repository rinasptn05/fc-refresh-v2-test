describe('notifications', () => {
    beforeEach(() => {
      cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
      cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 30000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 30.000 milidetik (30 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list notifications', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Notifications').click() // klik menu Notifications
        cy.wait(10000) // menunggu selama 10 detik
        cy.scrollTo(0, 1200) // scroll ke bawah sebanyak 1200px
        cy.contains('Table').should('be.visible') // mencari elemen yang berisi teks "Table" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.contains('No notifications').should('be.visible') // mencari elemen yang berisi teks "No notifications" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create notification berdasarkan default', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Notifications').click() // klik menu Notifications
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, edit, delete notification', () => {
        // create notification
        cy.get('.fi-sidebar-group-items > :nth-child(3) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Notifications').click() // klik menu Notifications
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('textarea[id="data.message"]').type('Testing') // input Notification Message "Testing"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(10000) // menunggu selama 10 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Notifications
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Table').should('be.visible') // mencari elemen yang berisi teks "Table" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.contains('Testing').should('be.visible') // mencari elemen yang berisi teks "Testing" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // edit notification
        cy.get('.fi-ta-actions > :nth-child(1)').click() // klik Edit pada Message "Testing"
        cy.wait(5000) // menunggu selama 5 detik
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('textarea[id="mountedTableActionsData.0.message"]').clear().type('Hello world') // ubah Notification Message dari "Testing" menjadi "Hello world"
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Hello world').should('be.visible') // mencari elemen yang berisi teks "Hello world" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // delete notification
        cy.get('.fi-ta-actions > :nth-child(2)').click() // klik Delete pada Message "Hello world"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Delete') // mencari elemen yang berisi teks "Delete"
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm 
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Hello world').should('not.exist') // memastikan tidak ada elemen yang mengandung teks "Hello world"
        cy.wait(5000) // menunggu selama 5 detik
    })
})