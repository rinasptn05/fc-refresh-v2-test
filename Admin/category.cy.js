describe('category', () => {
    beforeEach(() => {
      cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
      cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 20000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 20.000 milidetik (20 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('list class master main categories', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
    })

    it('tidak ingin create class master main category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master main category
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-color-custom').click() // klik tombol Create
      cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, edit, delete, search class master main category & sub category', () => {
      // create class master main category
      cy.get('.fi-sidebar-group-items > :nth-child(2) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master main category
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('input[id="data.name"]').type('Dance') // input Name "Dance"
      cy.get('.fi-color-custom').click() // klik tombol Create
      cy.wait(5000) // menunggu selama 5 detik
      cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Class Master Main Categories
      cy.contains('Categories') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik

      // edit class master main category
      cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('All') // pilih Per page "All"
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('Dance') // mencari elemen yang berisi teks "Dance"
      cy.get(':nth-child(20) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > a.fi-link > .fi-link-icon').click() // klik tombol Edit pada category Dance
      cy.contains('Edit') // mencari elemen yang berisi teks "Edit"
      cy.get('input[id="data.name"]').clear().type("DANCE") // ubah Name dari "Dance" ke "DANCE"
      cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
      cy.wait(5000) // menunggu selama 5 detik
      cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // Class Master Main Categories
      cy.contains('Categories') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik

      // daftar sub dategories
      cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('All') // pilih Per page "All"
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('DANCE') // mencari elemen yang berisi teks "DANCE"
      cy.get(':nth-child(20) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > a.fi-link > .fi-link-icon').click() // klik tombol Edit pada category DANCE
      cy.wait(5000) // menunggu selama 5 detik
      cy.contains('Sub Categories') // mencari elemen yang berisi teks "Sub Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik

      // tidak ingin create class master sub category
      cy.get('.fi-ta-actions > .fi-btn').click() // klik tombol New class master sub category
      cy.wait(20000) // menunggu selama 20 detik
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Create
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('.absolute > .fi-icon-btn').click() // klik tombol close
      cy.wait(5000) // menunggu selama 5 detik

      // create class master sub category
      cy.get('.fi-ta-actions > .fi-btn').click() // klik tombol New class master sub category
      cy.wait(20000) // menunggu selama 20 detik
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('input[id="mountedTableActionsData.0.name"]').type('Traditional Dance') // input Name "Traditional Dance"
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Create
      cy.wait(5000) // menunggu selama 5 detik

      // edit class master sub category
      cy.get(':nth-child(1) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > :nth-child(1)').click() // klik tombol Edit pada sub category Traditional Dance
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('input[id="mountedTableActionsData.0.name"]').clear().type('Modern Dance') // ubah Name dari "Traditional Dance" ke "Modern Dance"
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Save changes
      cy.wait(5000) // menunggu selama 5 detik

      // delete class master sub category
      cy.get('.fi-ta-actions > :nth-child(2)').click() // klik tombol Delete pada sub category Modern Dance
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('Delete').should('be.visible') // mencari elemen yang berisi teks "Delete" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
      cy.wait(5000) // menunggu selama 5 detik

      // delete class master main category
      cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete pada category DANCE
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('Delete').should('be.visible') // mencari elemen yang berisi teks "Delete" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
      cy.wait(5000) // menunggu selama 5 detik

      // cari main category berdasarkan apa yang admin input1
      cy.get('input[id="input-1"]').type('sports') // input Search "sports"
      cy.wait(5000) // menunggu selama 5 detik
      cy.contains('Sports').should('be.visible') // mencari elemen yang berisi teks "Sports" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik

      // cari main category berdasarkan apa yang admin input2
      cy.get('input[id="input-1"]').clear().type('abc') // input Search "abc"
      cy.wait(5000) // menunggu selama 5 detik
  })
})
