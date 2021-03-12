$(function(){
    var config = {
        qrCode: '#QrCode',
        printButton: '#PrintGiftCard',
        giftCardCode: '#GiftCardDigits'
    }

    var $qrCode = $(config.qrCode)
    new QRCode(SqrCode[0], {
        text: SqrCode.attr('data-identifier'),
        width: 120,
        height: 120,
        imageAltText: theme.strings.qrImageAlt
    });

    $(config.giftCardCode).on('focus', this.select);
})