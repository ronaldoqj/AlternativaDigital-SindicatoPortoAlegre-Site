<script setup lang="ts">
import ImageDefault from 'components/interface/ImageDefault.vue'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import LayoutMenu from 'layouts/components/LayoutMenu.vue'
import LayoutMenuSocialMedia from 'layouts/components/LayoutMenuSocialMedia.vue'
import { useQuasar } from 'quasar'
import { computed } from 'vue'

type CurrentColor = 'primary' | 'accent'

const $q = useQuasar()

const typeSection1 = computed((): CurrentColor => {
  return $q.screen.lt.lg ? 'accent' : 'primary'
})

</script>

<template>
  <div id="container__footer" class="text-text-inverse">
    <LayoutSection background="secondary" :cornerColor="typeSection1">
        <div id="content__footer">
          <ImageDefault :size="{width: '290px', 'height': '34px'}" src="assets/svg/portal-parceiro-bancariosrs.svg"></ImageDefault>
        </div>
    </LayoutSection>
    <!-- Only Mobile -->
    <LayoutSection background="accent" class="section-footer_menu-social-media--mobile" cornerColor="primary">
        <div class="container__social-media--mobile">
          <LayoutMenuSocialMedia />
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
            <div class="menu-footer"><LayoutMenu /></div>
            <div class="section-footer__menu-social-media--desktop"><LayoutMenuSocialMedia /></div>
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

  .section-footer_menu-social-media--mobile
  {
    .container__social-media--mobile {
      display: flex;
      justify-content: space-evenly;
    }
  }

  .content__section2--footer
  {
    display: flex;
    flex-direction: column;

    justify-content: space-around;

    .column__left
    {
      max-width: auto;
      text-align: center;
      margin-bottom: 30px;

      .resume {
        margin-top: 20px;
        display: none;
      }
    }

    .column__right
    {
      .menu-footer {
        display: flex;
        flex-direction: column;
      }

      .section-footer__menu-social-media--desktop
      {
        display: none;
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
        p
        {
          text-align: center;
          margin: 30px 0 0;

          &.contact-fone {
            font-size: 30px;
            font-weight: bold;
          }
          &.contact-email {
            font-size: 25px;
            font-weight: bold;
            word-break: break-word;
          }
          &.contact-address {
            font-size: 18px;
            line-height: 1.3em;
          }
        }

      }
    }
  }

  /** Desktop */
  @media only screen and (min-width: $breakpoint-md)
  {
    .section-footer_menu-social-media--mobile {
      display: none;
    }

    .content__section2--footer
    {
      flex-direction: row;

      .column__left
      {
        max-width: 300px;
        margin-bottom: 0;

        .resume {
          display: block;
        }
      }

      .column__right
      {
        .section-footer__menu-social-media--desktop
        {
          display: flex;
        }

        .menu-footer {
          flex-direction: row;

          button {
            margin: -8px 0;
          }
        }

        .contact-details
        {
          p {
            text-align: left;
            margin: 0 0 10px;

            &.contact-email {
              font-size: 30px;
              word-break: normal;
            }

            &.contact-address {
              font-size: 20px;
              padding-top: 10px;
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }

  .footer__fix--last-section {
    box-shadow: 0px 10px 0px 0px $accent;
  }
}

</style>
