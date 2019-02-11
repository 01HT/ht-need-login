"use strict";
import { LitElement, html, css } from "lit-element";
import { styles } from "@01ht/ht-theme/styles";

class HTNeedLogin extends LitElement {
  static get styles() {
    return [
      styles,
      css`
        :host {
          display: flex;
          align-items: center;
          position: relative;
          box-sizing: border-box;
          height: 100%;
        }

        #container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin: auto;
        }

        svg {
          width: 16vw;
          max-width: 128px;
          min-width: 96px;
        }

        #title {
          margin-top: 24px;
        }

        #sub-text {
          text-align: center;
          margin: 8px 0 16px 0;
          font-size: 16px;
          color: var(--secondary-text-color);
        }
      `
    ];
  }

  render() {
    return html`
    <div id="container">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve">
      <path style="fill:#C7CAC7;" d="M40.771,52H11.229C7.789,52,5,49.211,5,45.771V26.229C5,22.789,7.789,20,11.229,20h29.542
        C44.211,20,47,22.789,47,26.229v19.542C47,49.211,44.211,52,40.771,52z"/>
      <path style="fill:#E7ECED;" d="M40.771,20H26v32h14.771C44.211,52,47,49.211,47,45.771V26.229C47,22.789,44.211,20,40.771,20z"/>
      <path style="fill:#4C4C4F;" d="M26,40L26,40c-1.65,0-3-1.35-3-3v-6c0-1.65,1.35-3,3-3h0c1.65,0,3,1.35,3,3v6
        C29,38.65,27.65,40,26,40z"/>
      <path style="fill:#546A79;" d="M11.229,20H15v-6.5C15,8.262,19.935,4,26,4s11,4.262,11,9.5V20h3.771
        c0.077,0,0.152,0.009,0.229,0.011V13.5C41,6.075,34.25,0,26,0S11,6.075,11,13.5v6.511C11.077,20.009,11.152,20,11.229,20z"/>
      </svg>
      <div id="title" class="mdc-typography--headline5">Нет доступа</div>
      <div id="sub-text">Страница доступна только авторизованым пользователям</div>
      <paper-button raised @click="${this._showLogin}">Войти</paper-button>
    </div>`;
  }

  _showLogin() {
    this.dispatchEvent(
      new CustomEvent("open-login-window", {
        bubbles: true,
        composed: true
      })
    );
  }
}

customElements.define("ht-need-login", HTNeedLogin);
