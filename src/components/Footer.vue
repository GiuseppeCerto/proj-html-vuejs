<template>
    <footer class="footer_bg">
        <div class="footer_sec">
            <div class="row justify-content-between">
                <div class="col-2 footer_contact_sec">
                    <h4 class="footer_contact_logo">
                        <img src="../assets/images/logo.svg" alt="#">
                    </h4>
                    <p class="footer_contact_parag">
                        A functional HTML template for Corporate & Business.
                    </p>
                    <div v-for="(contacts, index) in contacts" :key="index" class="footer_contact_item">
                        <font-awesome-icon class="footer_icon" :icon="contacts.icon" />
                        <span>{{ contacts.text }}</span>
                    </div>
                    <div class="footer_contact_button">
                        GET IN TOUCH
                    </div>
                </div>
                <div class="col-9">
                    <div class="row justify-content-between">
                        <ul class="footer_link_list">
                            <h5>Support</h5>
                            <li v-for="(links, index) in footerLinks1" :key="index">
                                <font-awesome-icon class="footer_link_icon" icon="fa-solid fa-chevron-right" />
                                {{ links }}
                            </li>
                        </ul>
                        <ul class="footer_link_list">
                            <h5>Support</h5>
                            <li v-for="(links, index) in footerLinks2" :key="index">
                                <font-awesome-icon class="footer_link_icon" icon="fa-solid fa-chevron-right" />
                                {{ links }}
                            </li>
                        </ul>
                        <ul class="footer_link_list">
                            <h5>Support</h5>
                            <li v-for="(links, index) in footerLinks3" :key="index">
                                <font-awesome-icon class="footer_link_icon" icon="fa-solid fa-chevron-right" />
                                {{ links }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="end_footer_bg">
            <div class="end_footer">
                <span>Enjoy the low price. We are tracking any intention of piracy.</span>
                <span>
                    <font-awesome-icon icon="fa-regular fa-copyright" />
                    NEXGEN is Proudly Powered by
                    <span class="brand_code">Codings.</span>
                </span>
            </div>
        </div>
    </footer>
</template>
  
<script>
export default {
  data() {
    return {
        contacts: [
        { icon: "fa-solid fa-phone", text: "+1 (305) 1234-5678" },
        { icon: "fa-solid fa-envelope", text: "hello@exeple.com" },
        { icon: "fa-solid fa-location-dot", text: "Main Evenue, 987" }
        ],
        footerLinks1: [
            'Responsibility',
            'Term of Use',
            'About Cookies',
            'Privacy Policy',
            'Accessibility',
            'Information'
        ],
        footerLinks2: [
            "Audit & Assurance",
            "Financial Advisory",
            "Analytics M&A", 
            "Middle Marketing",
            "Legal Consulting",
            "Regulatory Risk" 
        ],
        footerLinks3: [
            "Responsibility",
            "Terms of Use",
            "About Cookies",
            "Privacy Policy",
            "Accessibility",
            "Information"
        ]
    };
  },
};
</script>
  
<style lang="scss" >

    .footer_bg{
        background-image: url('../assets/images/bg-7.jpg');
        background-position: center;
        background-size: cover;
    }

    .footer_sec{
        width: 1200px;
        margin: 0 auto;
        padding-top: 90px;
        padding-bottom: 90px;
    }

    .footer_contact_logo{
        width: 130px;
    }

    .footer_contact_parag{
        color: rgb(156, 162, 167);
        font-size: 13px;
        margin-top: 20px;
    }

    .footer_contact_item{
        color: rgb(156, 162, 167);
        font-size: 14px;
        margin-top: 20px;
        display: flex;
        gap: 8px;
        align-items: center;
        cursor: pointer;
    }

    .footer_contact_item:hover{
        color: white;
    }

    .footer_contact_button{
        color: white;
        padding: 8px 18px;
        border: 1px solid rgb(156, 162, 167);
        border-radius: 3px;
        width: fit-content;
        margin-top: 22px;
        font-size: 12px;
        cursor: pointer;
    }

    .footer_contact_button:hover{
        background-color: rgb(55, 200, 248);
        color: white;
    }

    .footer_link_list{
        padding: 30px 0px 30px 60px;
        background-color: rgba(57, 55, 55, 0.2);
        width: 31%;
        border-radius: 8px;
    }

    .footer_link_list h5{
        color: white;
        margin-bottom: 20px;
        font-weight: 600;
    }

    .footer_link_list{
        margin-right: 6px;
    }

    .footer_link_icon{
        margin-right: 6px;
    }

    .footer_link_list li{
        margin-bottom: 10px;
        color: rgb(156, 162, 167);
        font-size: 15px;
        cursor: pointer;
    }

    .footer_link_list li:hover{
        color: white;
    }

    .end_footer_bg{
        background-color: black;
    }

    .end_footer{
        width: 1200px;
        margin: 0 auto;
        color: rgb(156, 162, 167);
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        padding: 25px 0;
    }

    .brand_code{
        color: rgba(44,62,68,255);
    }
  
</style>