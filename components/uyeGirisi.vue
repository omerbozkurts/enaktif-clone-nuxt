<template>
    <div class="user-login-page-wrapper">
        <div class="user-login-page-container">
            <div class="user-login-page-logo">
                <NuxtLink to="/"><img src="public\icons\logo.png"></NuxtLink>
            </div>
            <div class="user-login-page-content">
                <div class="user-login-page-title">
                    <span>Giriş Yapın</span>
                </div>
                <form action="" name="login-form" method="POST" data-selector="login-form" >
                    <div class="user-login-page-row">
                        <input class="form-control" type="text" name="email" id="user-login-email" placeholder="Email" value="" >
                    </div>
                    <div class="user-login-page-row">
                        <input class="form-control" type="password" name="pass" id="user-login-pass" placeholder="Şifre" autocomplete="current-password">
                    </div>
                    <div class="user-login-page-row mb-0 d-flex align-items-center justify-content-between">
                        <div class="checkbox-custom">
                            <input type="checkbox" name="remember" id="remember-me" value="1">
                            <label for="remember-me">Beni Hatırla</label>
                        </div>
                        <div class="">
                            <NuxtLink to="/">Şifremi Unuttum</NuxtLink> 
                        </div>
                    </div>
                    <div class="user-login-page-row mb-0">
                        <button type="submit" class="btn btn-primary btn-block" data-selector="login-form-button">Giriş Yap</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
.user-login-page-wrapper{
    position: relative;
    display: flex;
    justify-content: center;
}

.user-login-page-container{
    position: relative;
    z-index: 2;
    width: 460px;
}

.user-login-page-logo{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80px;
    padding: var(--spacer-5);
}

.user-login-page-content{
    padding: var(--spacer-10);
    margin-bottom: var(--spacer-8);
    background-color: #fff;
    border: 1px solid #E5E5E5;
    border-radius: 0
}

.user-login-page-title {
    text-align: center;
    margin-bottom: var(--spacer-7);
}

.user-login-page-row {
    margin-bottom: var(--spacer-5);
}

input.form-control {
    height: 52px;
    color: #000;
    font-size: var(--font-size-14);
    padding: var(--spacer-2) var(--spacer-4);
}

.form-control {
    color: #000;
    font-size: var(--font-size-13);
    border-radius: 0;
    border: 1px solid #E5E5E5;
}
.form-control {
    color: #4b4b4b;
    font-size: 1.2rem;
    padding: .9rem 1rem;
    border: 1px solid #eee;
    height: calc(3.6rem + 2px);
    background-color: #fff;
    border-radius: .4rem;
    transition: all .15s ease-in-out;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(3.15rem + 2px);
    padding: .375rem .75rem;
    font-size: 1.6rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
</style>