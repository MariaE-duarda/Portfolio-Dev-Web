function GerarQRCode(){
    var inputUsuario = document.querySelector('textarea').value 
    /*coletando o que foi digitado pelo usuário*/
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chld=H&chl=';
    /*
     *cht=qr (formação de um novo QRCode) 
     * chs (altura e largura da imagem de QRCode)
     */
    var conteudoQRCode = GoogleChartAPI + encodeURIComponent(inputUsuario);
    document.querySelector('#QRCodeImage').src = conteudoQRCode;
}

