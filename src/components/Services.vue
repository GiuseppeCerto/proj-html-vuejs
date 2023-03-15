<template>
    <div class="services_bg">
        <div class="services_sec">
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <div class="col-8">
                        <div class="gray_text">
                            OUR BUSINESS AREA
                        </div>
                        <h2 class="title_services">
                            Exellence in 
                            <span class="title_services2">Service</span>
                        </h2>
                        <p class="services_parag">
                            We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced e rewnowed professionals. These are some options that you can hire.
                        </p>
                    </div>
                    <div class="col-2 d-flex flex-column align-items-end justify-content-end">
                        <div class="services_button_trans">
                            SEE ALL
                        </div>
                    </div>
                </div>
                <div class="col-12 row justify-content-between services_grid">
                    <div class="services_grid_item">
                        <font-awesome-icon class="icon_grid" icon="fa-solid fa-network-wired" />
                        <font-awesome-icon class="arrow_grid" icon="fa-solid fa-arrow-right" />
                        <div class="title_grid">
                            Audit & Assurance 
                        </div>
                        <p class="parag_grid">
                            Lorem ipsum dolor sit amet <br> consectetur adipisicing elit.
                        </p>
                    </div>
                    <div class="services_grid_item">
                        <font-awesome-icon class="icon_grid" icon="fa-solid fa-briefcase" />
                        <font-awesome-icon class="arrow_grid" icon="fa-solid fa-arrow-right" />
                        <div class="title_grid">
                            Financial Advisory 
                        </div>
                        <p class="parag_grid">
                            Lorem ipsum dolor sit amet <br> consectetur adipisicing elit.
                        </p>
                    </div>
                    <div class="services_grid_item">
                        <font-awesome-icon class="icon_grid" icon="fa-solid fa-chart-simple" />
                        <font-awesome-icon class="arrow_grid" icon="fa-solid fa-arrow-right" />
                        <div class="title_grid">
                            Analytics and M&A
                        </div>
                        <p class="parag_grid">
                            Lorem ipsum dolor sit amet <br> consectetur adipisicing elit.
                        </p>
                    </div>
                    <div class="services_grid_item">
                        <font-awesome-icon class="icon_grid" icon="fa-solid fa-plane" />
                        <font-awesome-icon class="arrow_grid" icon="fa-solid fa-arrow-right" />
                        <div class="title_grid">
                            Middle Marketing
                        </div>
                        <p class="parag_grid">
                            Lorem ipsum dolor sit amet <br> consectetur adipisicing elit.
                        </p>
                    </div>
                    <div class="services_grid_item">
                        <font-awesome-icon class="icon_grid" icon="fa-solid fa-globe" />
                        <font-awesome-icon class="arrow_grid" icon="fa-solid fa-arrow-right" />
                        <div class="title_grid">
                            Legal Consulting 
                        </div>
                        <p class="parag_grid">
                            Lorem ipsum dolor sit amet <br> consectetur adipisicing elit.
                        </p>
                    </div>
                    <div class="services_grid_item">
                        <font-awesome-icon class="icon_grid" icon="fa-solid fa-box-open" />
                        <font-awesome-icon class="arrow_grid" icon="fa-solid fa-arrow-right" />
                        <div class="title_grid">
                            Regulatory Risk 
                        </div>
                        <p class="parag_grid">
                            Lorem ipsum dolor sit amet <br> consectetur adipisicing elit.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

</script>
  
<style lang="scss" >

    .services_bg{
        background-color: black;
    }

    .services_sec{
        width: 1200px;
        margin: 0 auto;
        padding-top: 120px;
        padding-bottom: 40px;
    }

    .gray_text{
        color: rgba(5,130,131,255);
        font-size: 14px;
        font-weight: 600;
    }

    .title_services{
        color: white;
        font-size: 45px;
        font-weight: 700;
        margin-top: 40px;
    }

    .title_services2{
        background-color: rgba(14,39,45,255);
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 45px;
        font-weight: 700;
        margin-top: 40px;
    }

    .services_parag{
        font-size: 14px;
        color: rgba(5,130,131,255);
        margin-top: 30px;
    }

    .services_button_trans{
        padding: 8px 18px;
        border: 2px solid rgba(37,87,93,255);
        border-radius: 3px;
        color: white;
        width: fit-content;
        height: fit-content;
        margin-bottom: 15px;
        margin-right: 12px;
        cursor: pointer;
    }

    .services_button_trans:hover{
        background-color: rgb(255, 98, 98);
    }

    .services_grid{
        margin-bottom: 90px;
        width: 100%;
    }

    .services_grid_item{
        position: relative;
        padding: 30px;
        width: 31%;
        background-color: rgba(25,25,31,255);
        border-radius: 5px;
        margin-top: 40px;
        cursor: pointer;
    }

    .services_grid_item:hover{
        background-color: rgba(25,25,38,255);
    }

    .services_grid_item:hover .arrow_grid{
        color: rgb(239, 239, 239);
    }

    .icon_grid{
        font-size: 33px;
        color: rgba(14,108,125,255);
    }

    .arrow_grid{
        position: absolute;
        top: 28px;
        right: 30px;
        color: rgba(15,77,81,255);
        font-size: 25px;
    }

    .title_grid{
        font-size: 25px;
        color: white;
        font-weight: 600;
        margin: 30px 0 30px 0;
    }

    .parag_grid{
        color: rgba(115,117,126,255);
    }

  
</style>