<template>
    <div class="footer-logo">
        <NuxtLink to="/"><img src="public\icons\logo.png"></NuxtLink>
    </div>
    <div class="footer-orta-container">
        <div class="footer-orta-menu-container" data-menu-type="accordion">
            <div class="row" style="height: auto;">
                <div class="col-md-51" >
                    <div class="footer-orta-menu" >
                        <div class="footer-orta-menu-baslik">Kurumsal</div>
                        <div class="footer-orta-menu-icerik">
                            <ul>
                                <li>Hakkımızda</li>
                                <li>Gizlilik ve Güvenlik</li>
                                <li>Tüketici Hakları</li>
                                <li>Çerez Politikası</li>
                                <li>Mesafeli Satış Sözleşmesi</li>
                                <li>İletişim</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-51">
                    <div class="footer-orta-menu" >
                        <div class="footer-orta-menu-baslik">Yardım</div>
                        <div class="footer-orta-menu-icerik">
                            <ul>
                                <li>Yardım Merkezi</li>
                                <li>Sık Sorulan Sorular</li>
                                <li>İptal & İade</li>
                                <li>Destek Talebi</li>
                                <li>Hesabım</li>
                                <li>Kargo Ücretleri</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-51">
                    <div class="footer-orta-menu" >
                        <div class="footer-orta-menu-baslik">Alışveriş</div>
                        <div class="footer-orta-menu-icerik">
                            <ul>
                                <li>Satış Sözleşmesi</li>
                                <li>Gizlilik ve Güvenlik</li>
                                <li>İptal İade Şartları</li>
                                <li>KVKK Bildirimi</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-51">
                    <div class="footer-orta-menu" >
                        <div class="footer-orta-menu-baslik">Bilgi</div>
                        <div class="footer-orta-menu-icerik">
                            <ul>
                                <li>Blog</li>
                                <li>Mağazalar</li>
                                <li>İletişime Geç</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-51">
                    <div class="footer-orta-menu" >
                        <div class="footer-orta-menu-baslik">Üyelik</div>
                        <div class="footer-orta-menu-icerik">
                            <ul>
                                <li>Yeni Üyelik</li>
                                <li>Üye Girişi</li>
                                <li>Şifremi Unuttum</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.footer-orta-container{
    padding-right: var(--gutter);
    padding-left: var(--gutter);
}

.footer-orta-menu-container{
    padding: var(--spacer-15) 0 var(--spacer-20);
}


.footer-orta-menu-baslik{
    color: #000;
    font-weight: 600;
    line-height: calc(var(--font-size-20) + 16px);
    font-size: var(--font-size-20);
    margin-bottom: var(--spacer-6);
}

.footer-orta-menu-icerik>ul>li{
    display:block;
    color: #000;
    font-weight: 400;
    font-size: var(--font-size-18);
    line-height: calc(var(--font-size-18) + 32px);
    transition: all 0.2s linear;
}

.footer-orta-menu-icerik>ul>li:hover{
    color: #ff6000;
    cursor: pointer;
}

</style>