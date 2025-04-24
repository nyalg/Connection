function addCookie() {
    let today = new Date();
    let expire = new Date(today);
    expire.setFullYear(today.getFullYear() + 1);
    expire = expire.toUTCString();
    document.cookie = 'ckcy_remedied_check=ec_mrnhbtk; expires=' + expire + '; domain=.dmm.co.jp; path=/';
    document.cookie = 'ckcy_remedied_check=ec_mrnhbtk; expires=' + expire + '; domain=.dmm.com; path=/';
}

addCookie();
