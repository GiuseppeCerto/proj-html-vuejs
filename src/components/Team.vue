<template>
    <div class="team_sec">
        <div class="row justify-content-between">
            <div class="col-7">
                <div class="gray_text team_text">
                    WE LIKE WHAT WE DO
                </div>
                <div class="team_title_sec">
                    <h2 class="title_team">
                        Team 
                    </h2>
                    <h2 class="title_team2">
                        Of Experts
                    </h2>
                </div>
                <p class="team_parag">
                    We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced e rewnowed professionals. These are some options that you can hire.
                </p>
                <div class="team_grid row">
                    <div class="team_card col-6 row">
                        <div class="col-6 team_image">
                            <img src="../assets/images/team-1.jpg" alt="#">
                        </div>
                        <div class="col-6">
                            <div class="team_name">David Cooper</div>
                            <div class="team_position">CTO & CO-FOUNDER</div>
                            <div class="team_icon">
                                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                                <font-awesome-icon class="oval_icon" icon="fa-brands fa-twitter" /> 
                                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                            </div>
                        </div>
                    </div>
                    <div class="team_card col-6 row">
                        <div class="col-6 team_image">
                            <img src="../assets/images/team-3.jpg" alt="#">
                        </div>
                        <div class="col-6">
                            <div class="team_name">Oliver Jones</div>
                            <div class="team_position">CHIEF PROCUREMENT</div>
                            <div class="team_icon">
                                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                                <font-awesome-icon class="oval_icon" icon="fa-brands fa-twitter" /> 
                                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                            </div>
                        </div>
                    </div>
                    <div class="team_card col-6 row">
                        <div class="col-6 team_image">
                            <img src="../assets/images/team-2.jpg" alt="#">
                        </div>
                        <div class="col-6">
                            <div class="team_name">Emma Lopez</div>
                            <div class="team_position">CHIEF MARKETING</div>
                            <div class="team_icon">
                                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                                <font-awesome-icon class="oval_icon" icon="fa-brands fa-twitter" /> 
                                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                            </div>
                        </div>
                    </div>
                    <div class="team_card col-6 row">
                        <div class="col-6 team_image">
                            <img src="../assets/images/team-4.jpg" alt="#">
                        </div>
                        <div class="col-6">
                            <div class="team_name">Tom Johnson</div>
                            <div class="team_position">CEO & PRESIDENT</div>
                            <div class="team_icon">
                                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                                <font-awesome-icon class="oval_icon" icon="fa-brands fa-twitter" /> 
                                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4 team_sec_parag">
                <h4 class="parag_title">President Speech</h4>
                <div class="parag_text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam animi magni reprehenderit repellendus suscipit, beatae omnis blanditiis. 
                    </p>
                    <p>
                        Assumenda, fugiat ut minus eos inventore eaque porro? Amet consectetur, pariatur eligendi veritatis unde ab, explicabo voluptate voluptatem, facere ducimus deserunt nemo quia?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione suscipit ipsum ullam labore molestias quod omnis eius!
                    </p>
                </div>
                <span class="parag_sign">
                    T. Johnson
                    <font-awesome-icon class="sign_icon" icon="fa-solid fa-quote-right" />
                </span>
            </div>
        </div>
    </div>
</template>
  
<script>

</script>
  
<style lang="scss" >

    .team_text{
        margin-top: 100px;
    }

    .team_sec{
        width: 1200px;
        margin: 0 auto;
        margin-bottom: 100px;
    }

    .team_title_sec{
        display: flex;
        margin-top: 20px;
    }

    .title_team{
        background-color: rgba(218,236,237,255);
        color: rgba(5,130,131,255);
        width: fit-content;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 45px;
        font-weight: 700;
    }

    .title_team2{
        width: fit-content;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 45px;
        font-weight: 700;
    }

    .team_parag{
        font-size: 14px;
        color: rgba(5,130,131,255);
        margin-top: 20px;
    }

    .team_grid{
        gap: 24px;
        margin-top: 40px;
    }

    .team_image img{
        border-radius: 3px;
    }

    .team_name{
        font-size: 20px;
        font-weight: 600;
    }

    .team_position{
        color: rgba(5,130,131,255);
        font-size: 13px;
        margin-top: 12px;
    }

    .team_icon{
        display: flex;
        gap: 8px;
    }

    .team_icon > *{
        color: rgba(5,130,131,255);
        background-color: rgba(218,236,237,255);
        width: 13px;
        height: 13px;
        border-radius: 50%;
        padding: 8px 8px;
        margin-top: 14px;
    }

    .team_sec_parag{
        align-self:flex-end;
        padding: 26px;
        background-color: rgba(5,130,131,255);
        border-radius: 3px;
        position: relative;
    }

    .parag_title{
        color: white;
        font-weight: 600;
        margin-top: 10px;
    }

    .parag_text{
        margin-top: 27px;
    }

    .parag_text > p{
        margin-top: 24px;
        color: rgba(146,196,197,255);
    }

    .parag_sign{
        color: rgba(217,236,236,255);
        font-size: 18px;
        font-weight: 600;
    }

    .sign_icon{
        position: absolute;
        right: 30px;
        font-size: 34px;
        bottom: 24px;
        color: rgba(4,97,98,255);
    }

</style>
  