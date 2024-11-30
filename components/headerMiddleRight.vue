<template>
    <div class="header-middle-right">
  <div class="search">
    <form action="" data-selector="search-form">
      <input type="text" placeholder="Ne aramıştınız?" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Ne aramıştınız?'" aria-label="Search" class="auto-complete">
      <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_542_1623)">
            <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0_542_1623">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </form>
  </div>
  <div class="header-middle-right-actions">
    <div class="user-menu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_542_1613)">
          <path d="M20 22H18V20C18 19.2044 17.6839 18.4413 17.1213 17.8787C16.5587 17.3161 15.7956 17 15 17H9C8.20435 17 7.44129 17.3161 6.87868 17.8787C6.31607 18.4413 6 19.2044 6 20V22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13V13ZM12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11V11Z" fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_542_1613">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="cart-menu">
      
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_542_1603)">
            <path d="M4.00008 6.414L0.75708 3.172L2.17208 1.757L5.41408 5H20.6561C20.8119 4.99999 20.9657 5.03642 21.1049 5.10637C21.2442 5.17632 21.3652 5.27787 21.4583 5.4029C21.5514 5.52793 21.6139 5.67299 21.641 5.82649C21.668 5.97999 21.6588 6.13769 21.6141 6.287L19.2141 14.287C19.1523 14.4931 19.0258 14.6738 18.8532 14.8022C18.6806 14.9307 18.4712 15 18.2561 15H6.00008V17H17.0001V19H5.00008C4.73486 19 4.48051 18.8946 4.29297 18.7071C4.10544 18.5196 4.00008 18.2652 4.00008 18V6.414ZM6.00008 7V13H17.5121L19.3121 7H6.00008ZM5.50008 23C5.10226 23 4.72072 22.842 4.43942 22.5607C4.15812 22.2794 4.00008 21.8978 4.00008 21.5C4.00008 21.1022 4.15812 20.7206 4.43942 20.4393C4.72072 20.158 5.10226 20 5.50008 20C5.8979 20 6.27944 20.158 6.56074 20.4393C6.84205 20.7206 7.00008 21.1022 7.00008 21.5C7.00008 21.8978 6.84205 22.2794 6.56074 22.5607C6.27944 22.842 5.8979 23 5.50008 23ZM17.5001 23C17.1023 23 16.7207 22.842 16.4394 22.5607C16.1581 22.2794 16.0001 21.8978 16.0001 21.5C16.0001 21.1022 16.1581 20.7206 16.4394 20.4393C16.7207 20.158 17.1023 20 17.5001 20C17.8979 20 18.2794 20.158 18.5607 20.4393C18.842 20.7206 19.0001 21.1022 19.0001 21.5C19.0001 21.8978 18.842 22.2794 18.5607 22.5607C18.2794 22.842 17.8979 23 17.5001 23Z" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0_542_1603">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div class="cart-total-price" data-selector="cart-total-price">0,00 TL</div>
        <div class="cart-amount" data-selector="cart-item-count">0</div>
      
    </div>
  </div>
</div>
</template>


<style>
.user-menu{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 48px;
    height: 48px;
    border: 1px solid #E5E5E5;
    transition: all 0.2s linear;
}
.user-menu:hover{
    border-color: #ff6000;
}

.cart-menu{
    position: relative;
    display: flex;
    align-items: center;
    padding: var(--spacer-3);
    height: 48px;
    border: 1px solid #E5E5E5;
    transition: all 0.2s linear;
}

.cart-menu:hover{
    border-color: #ff6000;
}

.cart-menu>svg{
    padding-right: 5px;
    border-right: 1px solid #E5E5E5;
}

.cart-amount {
    position: absolute;
    left: 37px;
    top: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    font-weight: 400;
    font-size: var(--font-size-13);
    line-height: calc(var(--font-size-13) + 3px);
    color: #FFF;
    text-align: center;
    background-color: #ff6000;
}

.cart-total-price {
    margin-left: var(--spacer-3);
    color: #000;
    font-weight: 400;
    font-size: var(--font-size-16);
    line-height: calc(var(--font-size-16) + 4px);
    transition: all 0.2s linear;
}

</style>