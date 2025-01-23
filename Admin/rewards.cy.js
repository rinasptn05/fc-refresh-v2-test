describe('rewards', () => {
    beforeEach(() => {
        cy.exec('cd C:/xampp/htdocs/FlyingCape-Refreshv2-API && php artisan testseed')
        cy.visit('http://127.0.0.1:8000/admin') // mengunjungi web admin
        cy.get('input[type=email]').type('admin@gmail.com') // input email "admin@gmail.com"
        cy.get('input[type=password]').type('admin123') // input password "admin123"
        cy.get('.fi-btn').click() // klik tombol Sign in
        cy.contains('Dashboard', { timeout: 20000 }).should('be.visible') // mencari elemen yang berisi teks "Dashboard" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna, menentukan bahwa Cypress harus menunggu hingga 20.000 milidetik (20 detik) agar elemen dengan teks 'Dashboard' muncul
    })

    it('tidak ingin create reward', () => {
        cy.get(':nth-child(15) > .fi-sidebar-item-button').click() // klik menu Rewards
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(5000) // menunggu selama 5 detik
    })

    it('create, edit, delete reward', () => {
        // harus create reward category terlebih dahulu agar bisa memilih Reward category id
        // create reward category1
        cy.get(':nth-child(14) > .fi-sidebar-item-button').click() // klik menu Reward Categories
        cy.contains('Reward') // mencari elemen yang berisi teks "Reward"
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New reward category
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Education') // input Name "Education"
        cy.get('select[id="data.type"]').select('CompassPoint Reward') // pilih Type "CompassPoint Reward"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(10000) // menunggu selama 10 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Reward Categories
        cy.contains('Reward') // mencari elemen yang berisi teks "Reward"
        cy.wait(5000) // menunggu selama 5 detik

        // create reward category2
        cy.get('.fi-ac > .fi-btn').click() // klik tombol New reward category
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.get('input[id="data.name"]').type('Activities') // input Name "Activities"
        cy.get('select[id="data.type"]').select('Flying Cape App Reward') // pilih Type "Flying Cape App Reward"
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(10000) // menunggu selama 10 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Reward Categories
        cy.contains('Reward') // mencari elemen yang berisi teks "Reward"
        cy.wait(5000) // menunggu selama 5 detik

        // create reward1
        cy.get('.fi-topbar-open-sidebar-btn').click() // klik icon tiga garis
        cy.get(':nth-child(15) > .fi-sidebar-item-button').click() // klik menu Rewards
        cy.contains('Create').should('be.visible') // mencari elemen yang berisi teks "Create" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna

        cy.get('select[id="data.type"]').select('CompassPoint Reward') // pilih Type "CompassPoint Reward"
        cy.get('input[id="data.name"]').type('Reward') // input Name "Reward"
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('select[id="data.reward_category_id"]').select('Education') // pilih Reward category id "Education"
        cy.get('input[id="data.compass_point"]').type('0') // input Compass point "0"
        cy.get('input[id="data.limit_value"]').type('0') // input Limit value "0"
        cy.get('input[id="data.value_at"]').type('1') // input Value at "1"
        cy.get('input[id="data.start_date"]').type('2024-09-20') // input Start date "2024-09-20" 
        cy.get('input[id="data.end_date"]').type('2024-09-20') // input End date "2024-09-20"
        cy.get('trix-editor[id="data.highlights"]').type('Highlights') // input Highlights "Highlights"
        cy.get('trix-editor[id="data.term_and_condition"]').type('Term and condition') // input Term and condition "Term and condition"
        cy.get('input[id="data.location"]').type('West') // input Location "West"
        cy.get('trix-editor[id="data.about"]').type('Reward') // input About "Reward"
        cy.get('trix-editor[id="data.how_to_get"]').type('How to get') // input How to get "How to get"
        cy.get('trix-editor[id="data.promotion_shout_out"]').type('Promotion shout out') // input Promotion shout out "Promotion shout out"
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(10000) // menunggu selama 10 detik
        cy.get(':nth-child(1) > .fi-breadcrumbs-item-label').click() // klik Rewards
        cy.contains('Create') // mencari elemen yang berisi teks "Create"
        cy.wait(5000) // menunggu selama 5 detik

        // create reward2
        cy.get('select[id="data.type"]').select('Flying Cape App Reward') // pilih Type "Flying Cape App Reward"
        cy.get('input[id="data.name"]').type('Reward 2') // input Name "Reward 2"
        cy.wait(10000) // menunggu selama 10 detik
        cy.get('select[id="data.reward_category_id"]').select('Activities') // pilih Reward category id "Activities"
        cy.get('input[id="data.merchant_email"]').type('merchant@gmail.com') // input Merchant email "merchant@gmail.com"
        cy.get('input[id="data.scenario-none"]').click() // pilih Scenario "No Pin Number / No Voucher"
        cy.get('input[id="data.entry_code"]').type('1234') // input 4 digits pin "1234"
        cy.get('input[id="data.start_date"]').type('2024-09-20') // input Start date "2024-09-20" 
        cy.get('input[id="data.end_date"]').type('2024-09-20') // input End date "2024-09-20"
        cy.get('trix-editor[id="data.highlights"]').type('Highlights') // input Highlights "Highlights"
        cy.get('trix-editor[id="data.term_and_condition"]').type('Term and condition') // input Term and condition "Term and condition"
        cy.get('input[id="data.location"]').type('West') // input Location "West"
        cy.get('trix-editor[id="data.about"]').type('Reward 2') // input About "Reward 2"
        cy.get('trix-editor[id="data.how_to_get"]').type('How to get') // input How to get "How to get"
        cy.get('trix-editor[id="data.promotion_shout_out"]').type('Promotion shout out') // input Promotion shout out "Promotion shout out"
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('.fi-color-custom').click() // klik tombol Create
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Edit').should('be.visible') // mencari elemen yang berisi teks "Edit" memastikan bahwa elemen tersebut ada di halaman web dan dapat dilihat oleh pengguna
        cy.wait(5000) // menunggu selama 5 detik

        // edit reward
        cy.get('select[id="data.type"]').select('Flying Cape App Reward') // pilih Type "Flying Cape App Reward"
        cy.wait(5000) // menunggu selama 5 detik
        cy.get('select[id="data.reward_category_id"]').select('Activities') // pilih Reward category id "Activities"
        cy.get('input[id="data.scenario-none"]').click() // pilih Scenario "No Pin Number / No Voucher"
        cy.get('input[id="data.start_date"]').type('2024-09-20') // input Start date "2024-09-20" 
        cy.get('input[id="data.end_date"]').type('2024-09-20') // input End date "2024-09-20"
        cy.get('input[id="data.location"]').clear().type('East') // ubah Location dari "West" menjadi "East"
        cy.get('.fi-form-actions > .fi-ac > .fi-color-custom').click() // klik tombol Save changes
        cy.wait(5000) // menunggu selama 5 detik

        // delete reward
        cy.get('.fi-header > .fi-ac > .fi-btn').click() // klik tombol Delete
        cy.wait(10000) // menunggu selama 10 detik
        cy.contains('Delete') // mencari elemen yang berisi teks "Delete"        
        cy.get('.fi-modal-footer-actions > .fi-color-custom').click() // klik tombol Confirm
        cy.wait(5000) // menunggu selama 5 detik
    })
})