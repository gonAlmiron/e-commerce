import QRCode from 'qrcode'


export const generateQR = async text => {
    try {
      console.log(await QRCode.toDataURL(text))
    } catch (err) {
      console.error(err)
    }
  }


