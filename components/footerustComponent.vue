<template>
    <div class="footer-ust-container">
        <div class="row">
            <div class="col-xl-6 mx-auto">
                <div class="newsletter">
                    <div class="newsletter-title">
                        <div>E-bülten</div>
                        <span>"Kampanya ve duyurularımızdan ilk sizin haberiniz olsun! Dilediğiniz zaman e-bülten aboneliğimizden ayrılabilirsiniz."</span>
                    </div>
                    <div class="newsletter-content">
                        <form data-selector="newsletter-form">
                            <input type="email" id="newsletter-email" name="email" placeholder="E-mail adresinizi yazınız" onfocus="this.placeholder = ''" onblur="this.placeholder = 'E-mail adresinizi yazınız'" aria-label="Newsletter Email" autocomplete="off">
                            <button type="submit" aria-label="Submit">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_542_928)">
                                        <path d="M22 20.007C21.9982 20.2696 21.8931 20.521 21.7075 20.7068C21.5219 20.8926 21.2706 20.9979 21.008 21H2.992C2.72881 20.9997 2.4765 20.895 2.29049 20.7088C2.10448 20.5226 2 20.2702 2 20.007V19H20V7.3L12 14.5L2 5.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20.007ZM4.434 5L12 11.81L19.566 5H4.434ZM0 15H8V17H0V15ZM0 10H5V12H0V10Z" fill="white"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_542_928">
                                            <rect width="24" height="24" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>                                    
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.footer-ust-container{
    padding-right: var(--gutter);
    padding-left: var(--gutter);
}

.newsletter{
    margin-bottom: var(--spacer-15);
}

.newsletter-title{
    text-align: center;
    margin-bottom: var(--spacer-8);
}

.newsletter-title>div {
    color: #000;
    font-weight: 400;
    font-size: var(--font-size-36);
    line-height: calc(var(--font-size-36) + 8px);
    margin-bottom: var(--spacer-6);
}

.newsletter-title>span {
    font-weight: 300;
    font-size: var(--font-size-16);
    line-height: calc(var(--font-size-16) + 8px);
    color: #ABABAB;
}

</style>