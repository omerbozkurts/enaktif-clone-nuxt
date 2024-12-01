<template>
    <div class="ust-menu">
        <div class="ust-menu-container">
            <ul>
                <li class="dropdown">
                    <div class="dropdown-yazi">Senin Kitabın 
                        <DropdownDown></DropdownDown>
                    </div>
                    <div class="dropdown-menu">
                        <div class="dropdown-menu-item">
                            <img src="public/dropdownImage/lgs-senin.webp" alt="LGS Senin Kitabın">
                            <span>LGS Senin Kitabın</span>
                        </div>
                        <div class="dropdown-menu-item">
                            <img src="public/dropdownImage/yks-senin.webp" alt="YKS Senin Kitabın">
                            <span>YKS Senin Kitabın</span>
                        </div>
                    </div>
                </li>
                <li class="dropdown">
                    <div class="dropdown-yazi">Kitap
                        <DropdownDown></DropdownDown>
                    </div>
                    <div class="dropdown-menu">
                        <div class="dropdown-menu-item">
                            <img src="public/dropdownImage/ilkokul.webp" alt="İlkokul">
                            <span>İlkokul</span>
                        </div>
                        <div class="dropdown-menu-item">
                            <img src="public/dropdownImage/ortaokul.png" alt="Ortaokul">
                            <span>Ortaokul</span>
                        </div>
                        <div class="dropdown-menu-item">
                            <img src="public/dropdownImage/lgs.png" alt="LGS">
                            <span>LGS</span>
                        </div>
                        <div class="dropdown-menu-item">
                            <img src="public/dropdownImage/lise.png" alt="Lise">
                            <span>Lise</span>
                        </div>
                        <div class="dropdown-menu-item">
                            <img src="public/dropdownImage/yks.png" alt="YKS">
                            <span>YKS</span>
                        </div>
                        <div class="dropdown-menu-item">
                            <img src="public/dropdownImage/kpss.png" alt="KPSS">
                            <span>KPSS</span>
                        </div>
                        <div class="dropdown-menu-item">
                            <img src="public/dropdownImage/dgs.png" alt="DGS">
                            <span>DGS</span>
                        </div>
                        <div class="dropdown-menu-item">
                            <img src="public/dropdownImage/ales.png" alt="ALES">
                            <span>ALES</span>
                        </div>
                    </div>
                </li>
                <li class="dropdown">
                    <div class="dropdown-yazi">Kırtasiye-Ofis
                        <DropdownDown></DropdownDown>
                    </div>
                    <div class="dropdown-menu">
                        <div class="dropdown-menu-item">
                            <img src="public\dropdownImage\kalem.webp" alt="Kırtasiye">
                            <span>Kalem</span>
                        </div>
                        <div class="dropdown-menu-item">
                            <img src="public\dropdownImage\defter.png" alt="Ofis">
                            <span>Defter</span>
                        </div>
                        <div class="dropdown-menu-item">
                            <img src="public\dropdownImage\boya.png" alt="Ofis">
                            <span>Boya Grubu</span>
                        </div>
                        <div class="dropdown-menu-item">
                            <img src="public\dropdownImage\ofis.webp" alt="Ofis">
                            <span>Ofis Kırtasiye</span>
                        </div>
                        <div class="dropdown-menu-item">
                            <img src="public\dropdownImage\okul.png" alt="Ofis">
                            <span>Okul Kırtasiye</span>
                        </div>
                        <div class="dropdown-menu-item">
                            <img src="public\dropdownImage\ajanda.webp" alt="Ofis">
                            <span>Ajanda ve Takvim</span>
                        </div>
                        <div class="dropdown-menu-item">
                            <img src="public\dropdownImage\not.webp" alt="Ofis">
                            <span> Not Kağıtları</span>
                        </div>
                        <div class="dropdown-menu-item">
                            <img src="public\dropdownImage\kisisel.webp" alt="Ofis">
                            <span>Kişisel Ürün</span>
                        </div>
                    </div>
                </li>
                <li>
                    <NuxtLink to="markalar">Markalar</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="kampanyalar">KAMPANYALAR</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>



<style>
.ust-menu {
    background-color: #ffffff;
    border: 1px solid #E5E5E5;
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
    
}

.ust-menu-container {
    justify-content: center;
    display: flex;

}

.ust-menu-container > ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
}

.ust-menu-container > ul > li {
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
}

.dropdown {
    position: absolute;
    display: inline-block;
}

.dropdown-yazi {
    cursor: pointer;
}

.dropdown-yazi:hover {
    color: #fd7e14;
}

.dropdown-menu {
    z-index: 101;
    display: none; 
    background-color: #fff;
    border: 1px solid #E5E5E5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 10px;
    gap: 15px;
    top: 100%; 
    left: 0;
    min-width: 200px; 

    width: 100vw;
    display: flex;
    justify-content: center;
    gap: 15px;
    overflow-x: auto;
}

.dropdown:hover .dropdown-menu {
    display: flex; 
    padding-top: 30px;
    padding-bottom: 100px;
    margin-top: 20px;
    transform: translateX(-600px);
    
}

.dropdown-menu-item {
    text-align: center;
    padding: 5px;
    background-color: #ffffff;
    border-radius: 4px;
    flex: none; 
    width: 160px;
}

.dropdown-menu img {
    width: 120px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
}


</style>


