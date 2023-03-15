<template>
    <div class="results_bg_img">
        <div class="results_sec">
            <div class="row">
                <div class="col-12 reslults_items">
                    <span class="intro_text">
                        WHAT ARE WE DOING
                    </span>
                    <h2 class="title_results">Results in Numbers</h2>
                    <div class="number_items">
                        <div>
                            <div class="number_results">
                                128
                            </div>
                            <div class="text_results">
                                Certification
                            </div>
                        </div>
                        <div>
                            <div class="number_results">
                                230
                            </div>
                            <div class="text_results">
                                Employees
                            </div>
                        </div>
                        <div>
                            <div class="number_results">
                                517
                            </div>
                            <div class="text_results">
                                Customers
                            </div>
                        </div>
                        <div>
                            <div class="number_results">
                                94
                            </div>
                            <div class="text_results">
                                Countries Served
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

</script>
  
<style lang="scss" >

    .results_bg_img{
        position: relative;
        padding-top: 130px;
    }

    .results_bg_img::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0; left: 0;
        background-image: url('../assets/images/citybg.jpeg');
        background-size: cover;
        background-position: center;
        filter:brightness(0.2);
    }

    .results_sec{
        width: 1100px;
        margin: 0 auto;
    }

    .reslults_items{
        display: flex;
        flex-direction: column;
        z-index: 99;
    }

    .intro_text{
        text-align: center;
    }

    .title_results{
        color: white;
        font-size: 45px;
        font-weight: 700;
        margin: 30px 0 100px 0;
        text-align: center;
    }

    .number_items{
        display: flex;
        color: white;
        justify-content: space-between;
        text-align: center;
        margin-bottom: 120px;
        cursor: pointer;
    }

    .text_results:hover{
        color: rgb(55, 200, 248);
    }

    .number_results{
        color: rgba(0,166,166,255);
        font-size: 27px;
        font-weight: 700;
        margin-bottom: 7px;
    }

    .text_results{
        font-size: 22px;
        font-weight: 700;
    }


</style>
  