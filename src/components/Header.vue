<template>
    <header>
        <div class="contact_section">
            <div class="contact_conatiner">
                <div class="row">
                    <div class="col-6">
                        <font-awesome-icon class="contacts_icon" icon="fa-solid fa-clock" />
                        <span>Open Hours:Mon - Sat - 9.00 - 18.00</span>
                    </div>
                    <div class="col-6 row header_contacts">
                        <div class="col-4">
                            <font-awesome-icon class="contacts_icon" icon="fa-solid fa-phone" />
                            <span>+1 (305) 1234-5678</span>
                        </div>
                        <div class="col-4">
                            <font-awesome-icon class="contacts_icon" icon="fa-solid fa-envelope" />
                            <span>hello@exeple.com</span>
                        </div>
                        <div class="col-1">
                            <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        </div>
                        <div class="col-1">
                            <font-awesome-icon icon="fa-brands fa-twitter" /> 
                        </div>
                        <div class="col-1">
                            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header_section">
            <div class="header_container">
                <div class="row nav_section">
                    <div class="col-6">
                        <img class="header_logo" src="../assets/images/logo.svg" alt="">
                    </div>
                    <div class="col-6">
                        <ul class="nav">
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <li>SERVICES</li>
                            <li>TEAM</li>
                            <li>BLOG</li>
                            <li><font-awesome-icon icon="fa-regular fa-user" /></li>
                            <li class="header_button">GET IN TOUCH</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="row">
                        <div class="col-12 title_section">
                            <h1>
                                Financial Risk
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
  
<script>

</script>

  
<style lang="scss" scoped>

.contact_section{
    background-color: rgba(33,51,62,255);
    color: rgba(145,171,193,255);
    font-size: 12px;
    padding: 16px 0;
}
.contact_conatiner{
    width: 1140px;
    margin: 0 auto;
}

.contacts_icon{
    margin-right: 5px;
}

.header_section{
    background-image: url('../assets/images/bg-2.jpg');
    background-size: cover;
}

.header_container{
    width: 1100px;
    margin: 0 auto;
    color: white;
}

.nav_section{
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 230px;
}

.header_logo{
    width: 130px;
}

.nav{
    display: flex;
    font-size: 13px;
    justify-content: space-between;
    align-items: center;
}

.header_button{
    padding: 8px 15px;
    background-color: rgba(5,130,145,255);
    border-radius: 3px;
}

.title_section{
    display: flex;
    justify-content: center;
}

.title_section h1{
    font-size: 60px;
    font-weight: 900;
}

</style>