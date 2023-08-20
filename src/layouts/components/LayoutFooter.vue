<script setup lang="ts">
import ImageDefault from 'components/interface/ImageDefault.vue'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import LayoutMenu from 'layouts/components/LayoutMenu.vue'
import LayoutMenuSocialMedia from 'layouts/components/LayoutMenuSocialMedia.vue'

</script>

<template>
  <div id="container__footer" class="text-text-inverse">
    <LayoutSection background="secondary" cornerColor="primary">
        <div id="content__footer">
          <ImageDefault :size="{width: '290px', 'height': '34px'}" src="assets/svg/portal-parceiro-bancariosrs.svg"></ImageDefault>
        </div>
    </LayoutSection>
    <LayoutSection background="primary" cornerColor="accent">
        <div class="content__section2--footer">
          <div class="column__left">
            <ImageDefault :size="{width: '168px', height: '78px'}" src="/assets/svg/logo-sind-bancarios-porto-alegre.svg"></ImageDefault>
            <p class="resume">
              Lorem ipsum dolor sit ament, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            </p>
          </div>
          <div class="column__right">
            <div><LayoutMenu /></div>
            <div class="section__menu--social-media"><LayoutMenuSocialMedia /></div>
            <div class="contact-details">
              <p class="contact-fone">(51) 3030 9400</p>
              <p class="contact-email">contato@sindbancarios.org.br</p>
              <p class="contact-address">
                Horário de Segunda a Sexta das 9h às 18h<br />
                Rua General Câmara, 424, Porto Alegre/RS
              </p>
            </div>
          </div>
        </div>
    </LayoutSection>
    <LayoutSection background="accent" withoutCurveBootom class="footer__fix--last-section">
        <div id="content__footer">
          <ImageDefault class="logo-alternativa-digital" :size="{width: '245px', height: '45px'}" src="assets/svg/logo-alternativa-digital.svg"></ImageDefault>
        </div>
    </LayoutSection>
  </div>
</template>

<style lang="scss">

#container__footer
{
  #content__footer {
    display: flex;
    justify-content: center;

    .logo-alternativa-digital{
      margin-top: -10px;
    }
  }

  .content__section2--footer
  {
    display: flex;
    justify-content: space-around;

    .column__left
    {
      max-width: 300px;

      .resume {
        margin-top: 20px;
      }
    }

    .column__right
    {
      .section__menu--social-media {
        display: flex;
        justify-content: flex-end;
        margin: 30px 0;

        button {
          margin-right: 55px;

          &:last-child {
            margin-right: 15px;
          }
        }
      }

      .contact-details
      {
        margin: 30px 0 0;

        .contact-fone {
          font-size: 30px;
          font-weight: bold;
          margin: 0 0 5px;
        }

        .contact-email {
          font-size: 30px;
          font-weight: bold;
        }

        .contact-address {
          font-size: 20px;
          line-height: 1.3em;
        }
      }
    }

  }

  .footer__fix--last-section {
    box-shadow: 0px 10px 0px 0px $accent;
  }
}

</style>
