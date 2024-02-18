const helpTextMessage = `
Selamat datang! silahkan gunakan perintah yang tersedia berikut ini:

------

!help  -> untuk memunculkan menu panduan penggunaan
!quote -> generate kutipan secara acak
!news  -> generate berita terkini dari media
!quake -> generate berita gempa saat ini dari BMKG
!follow [text] -> bot akan mengikuti text yang kamu inputkan
!halo  -> untuk menyapa bot

-----`

const invalidCommandMessage = `Mohon maaf command tidak tersedia! 🙏`

const globalErrorMessage = ``
const globalSuccessMessage = ``
const pollingErrorMessage = ``

module.exports = { helpTextMessage, invalidCommandMessage }