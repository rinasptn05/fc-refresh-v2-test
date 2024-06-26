describe('category', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8000/admin') // menunjungi web admin
      cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
      cy.get('input[type=password]').type('admin123') // input password "admin123"
      cy.get('.fi-btn').click() // klik tombol Sign in
      cy.contains('Dashboard', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 10.000 milidetik (10 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('daftar Class Master Main Categories', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
        cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan create Class Master Main Category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master main category
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('input[id="data.name"]').type('Adult 2') // input Name "Adult 2"
      cy.get('a.fi-btn').click() // klik tombol Cancel
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
  })

    it('create Class Master Main Category', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
        cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master main category
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Adult 2') // input Name "Adult 2"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create & create another Class Master Main Category', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
        cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master main category
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Dance') // input Name "Dance"
        cy.get('.fi-ac > button.fi-color-gray').click() // klik tombol Create & create another
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('tidak ingin create Class Master Main Category', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
        cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New class master main category
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('daftar Sub Categories', () => {
        cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
        cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('All') // pilih Per page "All"
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Dance') // mencari elemen yang berisi teks "Dance"
        cy.get(':nth-child(20) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada category Dance
        cy.contains('Sub Categories').should('be.visible') // mencari elemen yang berisi teks "Sub Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan create class master sub category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('All') // pilih Per page "All"
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('DANCE') // mencari elemen yang berisi teks "DANCE"
      cy.get(':nth-child(20) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada category Dance
      cy.contains('Sub Categories', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Sub Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('.fi-ta-actions > .fi-btn').click() // klik tombol New class master sub category
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('input[id="mountedTableActionsData.0.name"]').type('Traditional dance') // input Name "Traditional dance"
      cy.get('.fi-modal-footer-actions > :nth-child(3)').click() // klik tombol Cancel
      cy.wait(5000) // menunggu selama 5 detik
  })

    it('create class master sub category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('All') // pilih Per page "All"
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('Dance') // mencari elemen yang berisi teks "Dance"
      cy.get(':nth-child(20) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada category Dance
      cy.contains('Sub Categories', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Sub Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('.fi-ta-actions > .fi-btn').click() // klik tombol New class master sub category
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('input[id="mountedTableActionsData.0.name"]').type('Traditional dance') // input Name "Traditional dance"
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Create
      cy.wait(5000) // menunggu selama 5 detik
  })
  
    it('create & create another class master sub category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('All') // pilih Per page "All"
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('Dance') // mencari elemen yang berisi teks "Dance"
      cy.get(':nth-child(20) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada category Dance
      cy.contains('Sub Categories', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Sub Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('.fi-ta-actions > .fi-btn').click() // klik tombol New class master sub category
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('input[id="mountedTableActionsData.0.name"]').type('Modern dance') // input Name "Modern dance"
      cy.get('.fi-modal-footer-actions > :nth-child(2)').click() // klik tombol Create & create another
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('.absolute > .fi-icon-btn').click() // klik tombol close
      cy.wait(5000) // menunggu selama 5 detik
  })

    it('tidak ingin create class master sub category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('All') // pilih Per page "All"
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('Dance') // mencari elemen yang berisi teks "Dance"
      cy.get(':nth-child(20) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada category Dance
      cy.contains('Sub Categories', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Sub Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('.fi-ta-actions > .fi-btn').click() // klik tombol New class master sub category
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Create
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('.absolute > .fi-icon-btn').click() // klik tombol close
      cy.wait(5000) // menunggu selama 5 detik
    })

    it('membatalkan perubahan pada Class Master Main Category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('All') // pilih Per page "All"
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('Dance') // mencari elemen yang berisi teks "Dance"
      cy.get(':nth-child(20) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada category Dance
      cy.contains('Edit') // mencari elemen yang berisi teks "Edit"
      cy.get('input[id="data.name"]').clear().type("DANCE") // ubah Name dari "Dance" ke "DANCE"
      cy.get('.fi-ac > .fi-color-gray').click() // klik tombol Cancel
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
  })

    it('mengubah pada Class Master Main Category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('All') // pilih Per page "All"
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('Dance') // mencari elemen yang berisi teks "Dance"
      cy.get(':nth-child(20) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada category Dance
      cy.contains('Edit') // mencari elemen yang berisi teks "Edit"
      cy.get('input[id="data.name"]').clear().type("DANCE") // ubah Name dari "Dance" ke "DANCE"
      cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
      cy.wait(5000) // menunggu selama 5 detik
  })

    it('membatalkan perubahan pada class master sub category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('All') // pilih Per page "All"
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('DANCE') // mencari elemen yang berisi teks "DANCE"
      cy.get(':nth-child(20) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada category DANCE
      cy.contains('Sub Categories', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Sub Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
      cy.get(':nth-child(1) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > :nth-child(1)').click() // klik tombol Edit pada sub category Traditional dance
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('input[id="mountedTableActionsData.0.name"]').clear().type('Traditional Dance') // ubah Name dari "Traditional dance" ke "Traditional Dance"
      cy.get('.fi-modal-footer-actions > .fi-color-gray').click() // klik tombol Cancel
      cy.wait(5000) // menunggu selama 5 detik
  })

    it('mengubah pada class master sub category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('All') // pilih Per page "All"
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('DANCE') // mencari elemen yang berisi teks "DANCE"
      cy.get(':nth-child(20) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada category DANCE
      cy.contains('Sub Categories', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Sub Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
      cy.get(':nth-child(1) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > :nth-child(1)').click() // klik tombol Edit pada sub category Traditional dance
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('input[id="mountedTableActionsData.0.name"]').clear().type('Traditional Dance') // ubah Name dari "Traditional dance" ke "Traditional Dance"
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Save changes
      cy.wait(5000) // menunggu selama 5 detik
  })

    it('membatalkan hapus class master sub category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('All') // pilih Per page "All"
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('DANCE') // mencari elemen yang berisi teks "DANCE"
      cy.get(':nth-child(20) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada category DANCE
      cy.contains('Sub Categories', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Sub Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
      cy.get(':nth-child(1) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > :nth-child(2)').click() // klik tombol Delete pada sub category Traditional Dance
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('.fi-modal-footer-actions > .fi-color-gray').click() // klik tombol Cancel
      cy.wait(5000) // menunggu selama 5 detik
  })

    it('menghapus class master sub category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('All') // pilih Per page "All"
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('DANCE') // mencari elemen yang berisi teks "DANCE"
      cy.get(':nth-child(20) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada category DANCE
      cy.contains('Sub Categories', { timeout: 10000 }).should('be.visible') // mencari elemen yang berisi teks "Sub Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
      cy.get(':nth-child(2) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > :nth-child(2)').click() // klik tombol Delete pada sub category Modern dance
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
      cy.wait(5000) // menunggu selama 5 detik
  })

    it('membatalkan hapus Class Master Main Category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('All') // pilih Per page "All"
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('DANCE') // mencari elemen yang berisi teks "DANCE"
      cy.get(':nth-child(20) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada category DANCE
      cy.contains('Edit') // mencari elemen yang berisi teks "Edit"
      cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('.fi-modal-footer-actions > .fi-color-gray').click() // klik tombol Cancel
      cy.wait(5000) // menunggu selama 5 detik
  })

// Tidak bisa delete
    it('menghapus Class Master Main Category', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('All') // pilih Per page "All"
      cy.wait(10000) // menunggu selama 10 detik
      cy.contains('DANCE') // mencari elemen yang berisi teks "DANCE"
      cy.get(':nth-child(20) > :nth-child(3) > .whitespace-nowrap > .fi-ta-actions > .fi-link > .fi-link-icon').click() // klik tombol Edit pada category DANCE
      cy.contains('Edit') // mencari elemen yang berisi teks "Edit"
      cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
      cy.wait(5000) // menunggu selama 5 detik
  })

    it('menampilkan 5 data per page pada halaman Class Master Main Categories', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.get(':nth-child(2) > .fi-input-wrp > .min-w-0 > .fi-select-input').select('5') // pilih Per page "5"
      cy.wait(5000) // menunggu selama 5 detik
      cy.contains('STEM') // mencari elemen yang berisi teks "STEM"
      cy.wait(5000) // menunggu selama 5 detik
  })

    it('melihat daftar Class Master Main Categories pada halaman selanjutnya', () => {
      cy.get('.fi-sidebar-group-items > :nth-child(1) > .fi-sidebar-item-button', { timeout: 10000 }).contains('Category').click() // klik menu Category
      cy.contains('Categories').should('be.visible') // mencari elemen yang berisi teks "Categories" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
      cy.wait(5000) // menunggu selama 5 detik
      cy.get('.fi-pagination > .fi-btn').click() // klik tombol Next
      cy.wait(5000) // menunggu selama 5 detik
      cy.contains('DANCE') // mencari elemen yang berisi teks "DANCE"
      cy.wait(5000) // menunggu selama 5 detik
  })
})
