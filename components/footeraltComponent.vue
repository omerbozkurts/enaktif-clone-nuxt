<template>
    <div class="footer-alt-container">
        <div class="footer-alt-wrapper">
            <div class="copyright">2024 Copyright enaktif.com- Tüm Hakları Saklıdır.</div>
            <div class="footer-alt-ssl">
                <img src="public\icons\footer_ssl_image.webp">
            </div>
        </div>
    </div>
</template>

<style>
.footer-alt-container{
    padding-right: var(--gutter);
    padding-left: var(--gutter);
}

.footer-alt-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacer-10) 0;
}

.copyright{
    color: #ABABAB;
    font-weight: 400;
    line-height: calc(var(--font-size-16) + 20px);
    font-size: var(--font-size-16);
}
</style>