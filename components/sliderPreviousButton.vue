<template>
    <button type="button" class="slick-prev slick-arrow slick-disabled" aria-label="Previous" aria-disabled="true" style="">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_47_1181)">
                                <path d="M8.99998 12.0001L13.243 7.75708L14.657 9.17208L11.828 12.0001L14.657 14.8281L13.243 16.2431L8.99998 12.0001Z" fill="black"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_47_1181">
                                    <rect width="24" height="24" fill="white" transform="translate(24) rotate(90)"></rect>
                                </clipPath>
                            </defs>
                        </svg>                    
                    </button>
</template>


<style>
slick-arrow.slick-prev {
    right: 48px;
    border-radius: 50px 0 0 50px;
}

.default-products .products-content>.slick-arrow {
    position: absolute;
    opacity: 1;
    top: 20px;
    z-index: 2;
    transform: translateY(-50%);
    width: 48px;
    height: 40px;
    cursor: pointer;
    background-color: #F9F9F9;
    transition: all 0.2s linear;
}

</style>